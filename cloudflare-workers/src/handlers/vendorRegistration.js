// cloudflare-workers/src/handlers/vendorRegistration.js
// UPDATED VERSION with detailed error reporting

import { validateFormData, sanitizeFormData, validateFiles } from '../utils/validation.js';
// import { checkRateLimit } from '../utils/rateLimit.js';
import { getZohoAccessToken, createVendorRecord, uploadFilesToZoho, getVendorByEmail } from '../services/zoho.js';
import { sendAllNotifications } from '../services/email.js';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '../config/constants.js';

/**
 * Handle vendor registration submission
 */
export async function handleVendorRegistration(request, env) {
  const startTime = Date.now();
  const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';

  try {
    // Log incoming request details
    console.log('=== VENDOR REGISTRATION REQUEST ===');
    console.log('IP:', clientIP);
    console.log('Method:', request.method);
    console.log('Content-Type:', request.headers.get('content-type'));
    console.log('Origin:', request.headers.get('origin'));

    // 1. Parse request body
    const contentType = request.headers.get('content-type') || '';
    let formData;

    if (contentType.includes('application/json')) {
      formData = await request.json();
    } else if (contentType.includes('multipart/form-data')) {
      formData = await parseMultipartData(request);
    } else {
      return jsonResponse({
        success: false,
        error: 'Invalid content type'
      }, 400);
    }

    console.log('Received registration request:', {
      ip: clientIP,
      email: formData.email,
      company: formData.companyName
    });

    // 2. Sanitize input
    formData = sanitizeFormData(formData);

    // 3. Validate form data
    const validation = validateFormData(formData);
    if (!validation.valid) {
      console.log('Validation failed:', validation.errors);
      return jsonResponse({
        success: false,
        error: ERROR_MESSAGES.VALIDATION_FAILED,
        errors: validation.errors
      }, 400);
    }

    // 4. Validate files if present
    if (formData.documents && formData.documents.length > 0) {
      const fileErrors = validateFiles(formData.documents);
      if (fileErrors.length > 0) {
        return jsonResponse({
          success: false,
          error: ERROR_MESSAGES.FILE_UPLOAD_ERROR,
          errors: { files: fileErrors }
        }, 400);
      }
    }

    // 5. Rate limiting is disabled for now

    // 6. Get Zoho access token with better error handling
    let accessToken;
    try {
      console.log('Attempting to get Zoho access token...');
      accessToken = await getZohoAccessToken(env);
      if (!accessToken) {
        throw new Error('Failed to obtain access token');
      }
      console.log('✓ Zoho access token obtained');
    } catch (error) {
      console.error('✗ Zoho authentication error:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        zohoUrl: env.ZOHO_ACCOUNTS_URL,
        hasClientId: !!env.ZOHO_CLIENT_ID,
        hasClientSecret: !!env.ZOHO_CLIENT_SECRET,
        hasRefreshToken: !!env.ZOHO_REFRESH_TOKEN
      });
      return jsonResponse({
        success: false,
        error: ERROR_MESSAGES.ZOHO_API_ERROR,
        message: 'Authentication failed. Please try again later.',
        details: env.ENVIRONMENT === 'development' ? error.message : undefined
      }, 500);
    }

    // 7. Check for duplicate email (optional)
    if (env.CHECK_DUPLICATES !== 'false') {
      const duplicateCheck = await getVendorByEmail(accessToken, formData.email, env);
      if (duplicateCheck.found) {
        console.log('Duplicate vendor found:', formData.email);
        return jsonResponse({
          success: false,
          error: 'A vendor with this email address is already registered.',
          message: 'If you need to update your information, please contact support.'
        }, 409);
      }
    }

    // 8. Create vendor record in Zoho CRM
    const crmResult = await createVendorRecord(accessToken, formData, env);
    
    if (!crmResult.success) {
      console.error('CRM record creation failed:', crmResult.message);
      
      // RETURN FULL ZOHO ERROR FOR DEBUGGING
      return jsonResponse({
        success: false,
        error: ERROR_MESSAGES.ZOHO_API_ERROR,
        message: crmResult.message || 'Failed to create vendor record',
        zohoError: crmResult.details, // Include full Zoho response
        debug: {
          apiUrl: env.ZOHO_API_URL,
          module: env.ZOHO_CRM_MODULE,
          url: `${env.ZOHO_API_URL}/crm/v3/${env.ZOHO_CRM_MODULE}`
        }
      }, 500);
    }

    const recordId = crmResult.recordId;
    console.log('Vendor record created:', recordId);

    // 9. Upload files to Zoho CRM (if any)
    let fileUploadResult = { success: true, uploadedCount: 0 };
    if (formData.documents && formData.documents.length > 0) {
      try {
        fileUploadResult = await uploadFilesToZoho(
          accessToken,
          recordId,
          formData.documents,
          env
        );
        console.log('File upload result:', fileUploadResult);
      } catch (error) {
        console.error('File upload error:', error);
        // Don't fail the whole request if file upload fails
      }
    }

    // 10. Send email notifications
    let emailResults = { vendor: { success: false }, admin: { success: false } };
    try {
      emailResults = await sendAllNotifications(formData, recordId, env);
      console.log('Email notifications sent:', emailResults);
    } catch (error) {
      console.error('Email notification error:', error);
      // Don't fail the request if email fails
    }

    // 11. Log success metrics
    const processingTime = Date.now() - startTime;
    console.log('Registration completed:', {
      recordId,
      email: formData.email,
      company: formData.companyName,
      processingTime: `${processingTime}ms`,
      filesUploaded: fileUploadResult.uploadedCount,
      emailsSent: {
        vendor: emailResults.vendor.success,
        admin: emailResults.admin.success
      }
    });

    // 12. Return success response
    return jsonResponse({
      success: true,
      message: SUCCESS_MESSAGES.REGISTRATION_SUCCESS,
      data: {
        recordId,
        submittedAt: new Date().toISOString(),
        estimatedReviewTime: '24-48 hours',
        filesUploaded: fileUploadResult.uploadedCount,
        confirmationEmailSent: emailResults.vendor.success
      }
    }, 201);

  } catch (error) {
    console.error('=== UNEXPECTED ERROR ===');
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
    console.error('Request details:', {
      ip: clientIP,
      method: request.method,
      url: request.url
    });

    return jsonResponse({
      success: false,
      error: ERROR_MESSAGES.INTERNAL_ERROR,
      message: 'An unexpected error occurred. Please try again.',
      details: error.message, // Always show error details for debugging
      stack: error.stack
    }, 500);
  }
}

/**
 * Parse multipart form data
 */
async function parseMultipartData(request) {
  try {
    const formData = await request.formData();
    const data = {};
    const documents = [];

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        // Store File/Blob directly - don't convert to ArrayBuffer
        documents.push({
          name: value.name,
          type: value.type,
          size: value.size,
          data: value  // Keep as File/Blob
        });
      } else {
        // Handle regular form field
        data[key] = value;
      }
    }

    if (documents.length > 0) {
      data.documents = documents;
    }

    return data;
  } catch (error) {
    console.error('Failed to parse multipart data:', error);
    throw new Error('Invalid form data');
  }
}

/**
 * Create JSON response with CORS headers
 */
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}