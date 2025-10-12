// cloudflare-workers/src/services/zoho.js
// Zoho CRM Integration Service

import { ZOHO_FIELD_MAPPING, ZOHO_CONFIG } from '../config/constants.js';

/**
 * Get Zoho OAuth access token (with caching)
 */
export async function getZohoAccessToken(env) {
  // Try to get cached token first
  if (env.VENDOR_CACHE) {
    try {
      const cachedToken = await env.VENDOR_CACHE.get('zoho_access_token');
      if (cachedToken) {
        return cachedToken;
      }
    } catch (error) {
      console.warn('Failed to retrieve cached token:', error);
    }
  }

  // Generate new access token
  const tokenUrl = `${env.ZOHO_ACCOUNTS_URL}/oauth/v2/token`;
  const params = new URLSearchParams({
    refresh_token: env.ZOHO_REFRESH_TOKEN,
    client_id: env.ZOHO_CLIENT_ID,
    client_secret: env.ZOHO_CLIENT_SECRET,
    grant_type: 'refresh_token'
  });

  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Zoho token error:', errorText);
      throw new Error('Failed to obtain Zoho access token');
    }

    const data = await response.json();
    const accessToken = data.access_token;

    if (!accessToken) {
      throw new Error('No access token in response');
    }

    // Cache token for 50 minutes (expires in 60)
    if (env.VENDOR_CACHE) {
      try {
        await env.VENDOR_CACHE.put(
          'zoho_access_token',
          accessToken,
          { expirationTtl: ZOHO_CONFIG.tokenCacheDuration }
        );
      } catch (error) {
        console.warn('Failed to cache token:', error);
      }
    }

    return accessToken;

  } catch (error) {
    console.error('Failed to get Zoho access token:', error);
    throw error;
  }
}

/**
 * Map form data to Zoho CRM field structure
 */
export function mapFormDataToCRM(formData) {
  const crmData = {};

  // Map standard and custom fields
  Object.entries(ZOHO_FIELD_MAPPING).forEach(([formField, crmField]) => {
    const value = formData[formField];
    
    if (value !== undefined && value !== null && value !== '') {
      // Handle different data types
      if (formField === 'moq' || formField === 'unitPrice') {
        crmData[crmField] = parseFloat(value) || 0;
      } else if (formField === 'termsAccepted' || formField === 'privacyAccepted' || formField === 'marketingConsent') {
        crmData[crmField] = Boolean(value);
      } else {
        crmData[crmField] = String(value).trim();
      }
    }
  });

  // Add auto-filled fields
  crmData[ZOHO_FIELD_MAPPING.registrationSource] = 'Website - Vendor Registration';
  crmData[ZOHO_FIELD_MAPPING.registrationDate] = new Date().toISOString();
  crmData[ZOHO_FIELD_MAPPING.applicationStatus] = 'New Registration';

  // Calculate estimated order value if both price and MOQ exist
  if (formData.unitPrice && formData.moq) {
    const estimatedValue = parseFloat(formData.unitPrice) * parseFloat(formData.moq);
    if (!isNaN(estimatedValue)) {
      crmData['Est_Order_Value'] = estimatedValue;
    }
  }

  return crmData;
}

/**
 * Create vendor record in Zoho CRM
 */
export async function createVendorRecord(accessToken, formData, env) {
  const url = `${env.ZOHO_API_URL}/crm/v3/${env.ZOHO_CRM_MODULE}`;
  
  const crmData = mapFormDataToCRM(formData);
  
  const payload = {
    data: [crmData]
  };

  console.log('Creating Zoho CRM record:', JSON.stringify(payload, null, 2));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(ZOHO_CONFIG.apiTimeout)
    });

    const result = await response.json();
    
    console.log('Zoho CRM response:', JSON.stringify(result, null, 2));

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to create CRM record',
        details: result
      };
    }

    // Check if record was created successfully
    const recordData = result.data?.[0];
    if (recordData?.status === 'success') {
      return {
        success: true,
        recordId: recordData.details?.id,
        data: recordData
      };
    } else {
      return {
        success: false,
        message: recordData?.message || 'Unknown error creating record',
        details: result
      };
    }

  } catch (error) {
    console.error('Zoho CRM API error:', error);
    
    if (error.name === 'AbortError') {
      return {
        success: false,
        message: 'Request timeout - please try again'
      };
    }

    return {
      success: false,
      message: error.message || 'Failed to create CRM record'
    };
  }
}

/**
 * Upload files to Zoho CRM as attachments
 */
export async function uploadFilesToZoho(accessToken, recordId, files, env) {
  if (!files || files.length === 0) {
    return { success: true, uploadedCount: 0 };
  }

  const url = `${env.ZOHO_API_URL}/crm/v3/${env.ZOHO_CRM_MODULE}/${recordId}/Attachments`;
  const uploadedFiles = [];
  const failedFiles = [];

  for (const file of files) {
    try {
      const formData = new FormData();
      
      // Create blob from file data
      const blob = new Blob([file.data], { type: file.type });
      formData.append('file', blob, file.name);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Zoho-oauthtoken ${accessToken}`
          // Note: Don't set Content-Type for FormData, browser sets it with boundary
        },
        body: formData,
        signal: AbortSignal.timeout(ZOHO_CONFIG.apiTimeout)
      });

      const result = await response.json();

      if (response.ok && result.data?.[0]?.status === 'success') {
        uploadedFiles.push({
          name: file.name,
          id: result.data[0].details?.id
        });
      } else {
        failedFiles.push({
          name: file.name,
          error: result.message || 'Upload failed'
        });
      }

    } catch (error) {
      console.error(`Failed to upload file ${file.name}:`, error);
      failedFiles.push({
        name: file.name,
        error: error.message
      });
    }
  }

  return {
    success: failedFiles.length === 0,
    uploadedCount: uploadedFiles.length,
    failedCount: failedFiles.length,
    uploaded: uploadedFiles,
    failed: failedFiles
  };
}

/**
 * Get vendor record by email (to check for duplicates)
 */
export async function getVendorByEmail(accessToken, email, env) {
  const url = `${env.ZOHO_API_URL}/crm/v3/${env.ZOHO_CRM_MODULE}/search`;
  const searchParams = new URLSearchParams({
    criteria: `(Email:equals:${email})`
  });

  try {
    const response = await fetch(`${url}?${searchParams.toString()}`, {
      method: 'GET',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`
      },
      signal: AbortSignal.timeout(ZOHO_CONFIG.apiTimeout)
    });

    if (!response.ok) {
      return { found: false };
    }

    const result = await response.json();
    
    if (result.data && result.data.length > 0) {
      return {
        found: true,
        record: result.data[0]
      };
    }

    return { found: false };

  } catch (error) {
    console.error('Error checking for duplicate vendor:', error);
    // Don't block submission if duplicate check fails
    return { found: false };
  }
}

/**
 * Update vendor record in Zoho CRM
 */
export async function updateVendorRecord(accessToken, recordId, formData, env) {
  const url = `${env.ZOHO_API_URL}/crm/v3/${env.ZOHO_CRM_MODULE}/${recordId}`;
  
  const crmData = mapFormDataToCRM(formData);
  
  const payload = {
    data: [crmData]
  };

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(ZOHO_CONFIG.apiTimeout)
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to update CRM record'
      };
    }

    const recordData = result.data?.[0];
    if (recordData?.status === 'success') {
      return {
        success: true,
        recordId: recordData.details?.id
      };
    }

    return {
      success: false,
      message: recordData?.message || 'Unknown error updating record'
    };

  } catch (error) {
    console.error('Zoho CRM update error:', error);
    return {
      success: false,
      message: error.message || 'Failed to update CRM record'
    };
  }
}