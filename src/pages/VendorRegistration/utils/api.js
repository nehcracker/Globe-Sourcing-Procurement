// src/pages/VendorRegistration/utils/api.js
// Frontend API Client for Vendor Registration - FIXED

/**
 * API Configuration
 */
const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_URL || 'https://cloudflare-workers.nehlmac4.workers.dev',
  endpoints: {
    vendorRegistration: '/api/vendor-registration',
    health: '/api/health'
  },
  timeout: 30000 // 30 seconds
};

/**
 * Submit vendor registration form
 */
export async function submitVendorRegistration(formData) {
  const url = `${API_CONFIG.baseURL}${API_CONFIG.endpoints.vendorRegistration}`;

  try {
    // Prepare form data for submission - FIXED FIELD NAMES
    const payload = {
      // Company Information - MATCH BACKEND EXACTLY
      companyName: formData.companyName,  // ✅ Fixed from VendorName
      contactPerson: formData.contactPerson,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      businessRegNumber: formData.businessRegNumber || '',

      // Product Details
      productCategory: formData.productCategory,
      productSubcategory: formData.productSubcategory || '',
      productDescription: formData.productDescription,
      moq: formData.moq,
      packaging: formData.packaging,
      unitPrice: formData.unitPrice,
      currency: formData.currency || 'USD',

      // Business Credentials
      certifications: formData.certifications || '',

      // Terms & Conditions
      termsAccepted: formData.termsAccepted || false,
      privacyAccepted: formData.privacyAccepted || false,
      marketingConsent: formData.marketingConsent || false
    };

    console.log('Submitting vendor registration:', {
      email: payload.email,
      company: payload.companyName
    });

    // Make API request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    // Parse response
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || result.error || 'Registration failed');
    }

    console.log('Registration successful:', result);
    return {
      success: true,
      data: result.data,
      message: result.message
    };

  } catch (error) {
    console.error('Registration error:', error);

    if (error.name === 'AbortError') {
      return {
        success: false,
        error: 'Request timeout. Please try again.',
        code: 'TIMEOUT'
      };
    }

    return {
      success: false,
      error: error.message || 'Failed to submit registration',
      code: 'SUBMISSION_ERROR'
    };
  }
}

/**
 * Submit vendor registration with file uploads
 */
export async function submitVendorRegistrationWithFiles(formData) {
  const url = `${API_CONFIG.baseURL}${API_CONFIG.endpoints.vendorRegistration}`;

  try {
    // Create FormData for multipart upload
    const payload = new FormData();

    // Add text fields with correct names
    const textFields = {
      companyName: formData.companyName,
      contactPerson: formData.contactPerson,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      businessRegNumber: formData.businessRegNumber || '',
      productCategory: formData.productCategory,
      productSubcategory: formData.productSubcategory || '',
      productDescription: formData.productDescription,
      moq: formData.moq,
      packaging: formData.packaging,
      unitPrice: formData.unitPrice,
      currency: formData.currency || 'USD',
      certifications: formData.certifications || '',
      termsAccepted: formData.termsAccepted || false,
      privacyAccepted: formData.privacyAccepted || false,
      marketingConsent: formData.marketingConsent || false
    };

    // Add all text fields
    Object.entries(textFields).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        payload.append(key, value);
      }
    });

    // Add document files
    if (formData.documents && formData.documents.length > 0) {
      for (const doc of formData.documents) {
        if (doc.file) {
          payload.append('documents', doc.file, doc.name);
        }
      }
    }

    // Add product images
    if (formData.productImages && formData.productImages.length > 0) {
      for (const img of formData.productImages) {
        if (img.file) {
          payload.append('productImages', img.file, img.name);
        }
      }
    }

    console.log('Submitting vendor registration with files...');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);

    const response = await fetch(url, {
      method: 'POST',
      body: payload,
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || result.error || 'Registration failed');
    }

    console.log('Registration with files successful:', result);
    return {
      success: true,
      data: result.data,
      message: result.message
    };

  } catch (error) {
    console.error('Registration error:', error);

    if (error.name === 'AbortError') {
      return {
        success: false,
        error: 'Request timeout. Please try again.',
        code: 'TIMEOUT'
      };
    }

    return {
      success: false,
      error: error.message || 'Failed to submit registration',
      code: 'SUBMISSION_ERROR'
    };
  }
}

/**
 * Check API health
 */
export async function checkAPIHealth() {
  const url = `${API_CONFIG.baseURL}${API_CONFIG.endpoints.health}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();

    return {
      healthy: response.ok,
      status: result.status,
      services: result.services
    };

  } catch (error) {
    console.error('Health check error:', error);
    return {
      healthy: false,
      error: error.message
    };
  }
}

/**
 * Validate form data before submission
 */
export function validateBeforeSubmit(formData) {
  const errors = {};

  // Required fields
  const requiredFields = {
    companyName: 'Company name',
    contactPerson: 'Contact person',
    email: 'Email',
    phone: 'Phone',
    country: 'Country',
    productCategory: 'Product category',
    productDescription: 'Product description',
    moq: 'Minimum order quantity',
    packaging: 'Packaging type',
    unitPrice: 'Unit price'
  };

  Object.entries(requiredFields).forEach(([field, label]) => {
    if (!formData[field] || String(formData[field]).trim() === '') {
      errors[field] = `${label} is required`;
    }
  });

  // Email validation
  if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Invalid email format';
  }

  // Phone validation
  if (formData.phone && !/^[+]?[\d\s\-()]{10,}$/.test(formData.phone)) {
    errors.phone = 'Invalid phone format';
  }

  // Numeric validations
  if (formData.moq && (isNaN(formData.moq) || parseFloat(formData.moq) <= 0)) {
    errors.moq = 'MOQ must be a positive number';
  }

  if (formData.unitPrice && (isNaN(formData.unitPrice) || parseFloat(formData.unitPrice) <= 0)) {
    errors.unitPrice = 'Unit price must be a positive number';
  }

  // Product description length
  if (formData.productDescription && formData.productDescription.length < 50) {
    errors.productDescription = 'Product description must be at least 50 characters';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

const api = {
  submitVendorRegistration,
  submitVendorRegistrationWithFiles,
  checkAPIHealth,
  validateBeforeSubmit
};

export default api;