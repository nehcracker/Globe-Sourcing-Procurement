// cloudflare-workers/src/services/zoho.js
// FIXED VERSION - Correct date format for Zoho

import { ZOHO_FIELD_MAPPING, ZOHO_CONFIG } from '../config/constants.js';

/**
 * Get Zoho OAuth access token (with caching)
 */
export async function getZohoAccessToken(env) {
  // Validate environment variables first
  if (!env.ZOHO_REFRESH_TOKEN || !env.ZOHO_CLIENT_ID || !env.ZOHO_CLIENT_SECRET) {
    console.error('Missing Zoho credentials:', {
      hasRefreshToken: !!env.ZOHO_REFRESH_TOKEN,
      hasClientId: !!env.ZOHO_CLIENT_ID,
      hasClientSecret: !!env.ZOHO_CLIENT_SECRET
    });
    throw new Error('Zoho credentials not configured. Please set required secrets.');
  }

  // Try to get cached token first
  if (env.VENDOR_CACHE) {
    try {
      const cachedToken = await env.VENDOR_CACHE.get('zoho_access_token');
      if (cachedToken) {
        console.log('✓ Using cached Zoho token');
        return cachedToken;
      }
      console.log('No cached token found, generating new one...');
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

  console.log('Requesting new Zoho token from:', tokenUrl);

  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });

    const responseText = await response.text();
    console.log('Zoho token response status:', response.status);

    if (!response.ok) {
      console.error('Zoho token error response:', responseText);
      throw new Error(`Failed to obtain Zoho access token: ${response.status} - ${responseText}`);
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse Zoho response:', responseText);
      throw new Error('Invalid response from Zoho API');
    }

    const accessToken = data.access_token;

    if (!accessToken) {
      console.error('No access token in response:', data);
      throw new Error('No access token in Zoho response');
    }

    console.log('✓ New Zoho token generated successfully');

    // Cache token for 50 minutes (expires in 60)
    if (env.VENDOR_CACHE) {
      try {
        await env.VENDOR_CACHE.put(
          'zoho_access_token',
          accessToken,
          { expirationTtl: ZOHO_CONFIG.tokenCacheDuration }
        );
        console.log('✓ Token cached successfully');
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

  // CRITICAL: Ensure Vendor_Name is always set
  if (formData.companyName) {
    crmData['Vendor_Name'] = String(formData.companyName).trim();
  }

  // Map other standard fields
  if (formData.email) {
    crmData['Email'] = String(formData.email).trim();
  }

  if (formData.phone) {
    crmData['Phone'] = String(formData.phone).trim();
  }

  if (formData.country) {
    crmData['Mailing_Country'] = String(formData.country).trim();
  }

  // Map custom fields
  if (formData.contactPerson) {
    crmData['Contact_Person'] = String(formData.contactPerson).trim();
  }

  if (formData.productCategory) {
    crmData['Product_Category'] = String(formData.productCategory).trim();
  }

  if (formData.productSubcategory) {
    crmData['Product_Subcategory'] = String(formData.productSubcategory).trim();
  }

  if (formData.productDescription) {
    crmData['Product_Description'] = String(formData.productDescription).trim();
  }

  if (formData.moq) {
    crmData['MOQ'] = parseFloat(formData.moq) || 0;
  }

  if (formData.packaging) {
    crmData['Packaging_Type'] = String(formData.packaging).trim();
  }

  if (formData.unitPrice) {
    crmData['Unit_Price'] = parseFloat(formData.unitPrice) || 0;
  }

  if (formData.currency) {
    crmData['Price_Currency'] = String(formData.currency).trim();
  }

  if (formData.certifications) {
    crmData['Certifications'] = String(formData.certifications).trim();
  }

  // Add auto-filled fields
  crmData['Registration_Source'] = 'Website - Vendor Registration';
  crmData['Registration_Date'] = new Date().toISOString().split('T')[0];
  crmData['Application_Status'] = 'New Registration';

  if (formData.termsAccepted !== undefined) {
    crmData['Terms_Accepted'] = Boolean(formData.termsAccepted);
  }

  if (formData.privacyAccepted !== undefined) {
    crmData['Privacy_Accepted'] = Boolean(formData.privacyAccepted);
  }

  if (formData.marketingConsent !== undefined) {
    crmData['Marketing_Consent'] = Boolean(formData.marketingConsent);
  }

  // Calculate estimated order value
  if (formData.unitPrice && formData.moq) {
    const estimatedValue = parseFloat(formData.unitPrice) * parseFloat(formData.moq);
    if (!isNaN(estimatedValue)) {
      crmData['Est_Order_Value'] = estimatedValue;
    }
  }

  console.log('Mapped CRM Data:', JSON.stringify(crmData, null, 2));

  return crmData;
}

/**
 * Create vendor record in Zoho CRM
 */
export async function createVendorRecord(accessToken, formData, env) {
  console.log('Zoho env vars:', {
    ZOHO_API_URL: env.ZOHO_API_URL,
    ZOHO_CRM_MODULE: env.ZOHO_CRM_MODULE,
    ENVIRONMENT: env.ENVIRONMENT
  });
  
  const url = `${env.ZOHO_API_URL}/crm/v3/${env.ZOHO_CRM_MODULE}`;
  
  const crmData = mapFormDataToCRM(formData);
  
  const payload = {
    data: [crmData]
  };

  console.log('Creating Zoho CRM record URL:', url);
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

      // Use file directly if it's already a Blob/File
      if (file.data instanceof Blob || file.data instanceof File) {
        formData.append('file', file.data, file.name);
      } else {
        // If it's ArrayBuffer or other format, create Blob
        const blob = new Blob([file.data], { type: file.type });
        formData.append('file', blob, file.name);
      }

      console.log(`Uploading file: ${file.name} (${file.type}, ${file.size} bytes)`);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Zoho-oauthtoken ${accessToken}`
          // Don't set Content-Type - let FormData set it with boundary
        },
        body: formData,
        signal: AbortSignal.timeout(ZOHO_CONFIG.apiTimeout)
      });

      const result = await response.json();
      console.log(`Upload response for ${file.name}:`, result);

      if (response.ok && result.data?.[0]?.status === 'success') {
        uploadedFiles.push({
          name: file.name,
          id: result.data[0].details?.id
        });
        console.log(`✓ Successfully uploaded: ${file.name}`);
      } else {
        failedFiles.push({
          name: file.name,
          error: result.message || result.data?.[0]?.message || 'Upload failed'
        });
        console.error(`✗ Failed to upload ${file.name}:`, result);
      }

    } catch (error) {
      console.error(`✗ Exception uploading file ${file.name}:`, error);
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