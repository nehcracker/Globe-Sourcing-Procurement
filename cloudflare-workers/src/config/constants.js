// cloudflare-workers/src/config/constants.js
// Configuration Constants for Vendor Registration API

export const ZOHO_FIELD_MAPPING = {
  // Standard Zoho CRM Vendor Fields (corrected)
  VendorName: 'Account_Name',  // Standard field for vendor/company name
  email: 'Email',
  phone: 'Phone',
  country: 'Country',  // Or 'Country' if using custom field

  // Custom Fields (match your Zoho CRM API names exactly)
  contactPerson: 'Contact_Person',
  businessRegNumber: 'Business_Reg_Number',
  productCategory: 'Product_Category',
  productSubcategory: 'Product_Subcategory',
  productDescription: 'Description',  // Standard Description field
  moq: 'Minimum_Order_Quantity',
  packaging: 'Packaging_Type',
  unitPrice: 'Unit_Price',
  currency: 'Unit_Currency',
  certifications: 'Certifications',

  // Meta Fields
  registrationSource: 'Registration_Source',
  datetime: 'Registration_Date',
  applicationStatus: 'Application_Status',
  termsAccepted: 'Terms_Accepted',
  privacyAccepted: 'Privacy_Accepted',
  marketingConsent: 'Marketing_Consent'
};

export const FILE_CONFIG = {
  maxFileSize: 5 * 1024 * 1024, // 5MB
  maxFiles: 5,
  allowedTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/jpeg',
    'image/png',
    'image/gif'
  ],
  allowedExtensions: ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png', '.gif']
};

export const RATE_LIMIT_CONFIG = {
  windowMs: 3600000, // 1 hour
  maxRequestsPerIP: 10,
  maxRequestsPerEmail: 5,
  emailWindowMs: 86400000 // 24 hours
};

export const CORS_CONFIG = {
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400 // 24 hours
};

export const VALIDATION_RULES = {
  companyName: { required: true, minLength: 2, maxLength: 100 },
  contactPerson: { required: true, minLength: 2, maxLength: 100 },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  phone: { required: true, pattern: /^[+]?[\d\s\-()]{10,}$/ },
  country: { required: true },
  productCategory: { required: true },
  productDescription: { required: true, minLength: 50, maxLength: 5000 },
  moq: { required: true, type: 'number', min: 1 },
  packaging: { required: true },
  unitPrice: { required: true, type: 'number', min: 0.01 }
};

export const ERROR_MESSAGES = {
  VALIDATION_FAILED: 'Validation failed. Please check your input.',
  RATE_LIMIT_EXCEEDED: 'Too many requests. Please try again later.',
  ZOHO_API_ERROR: 'Failed to submit to CRM. Please try again.',
  FILE_UPLOAD_ERROR: 'File upload failed. Please check file size and format.',
  EMAIL_SEND_ERROR: 'Failed to send notification email.',
  INTERNAL_ERROR: 'An unexpected error occurred. Please try again.'
};

export const SUCCESS_MESSAGES = {
  REGISTRATION_SUCCESS: 'Vendor registration submitted successfully!',
  EMAIL_SENT: 'Confirmation email sent successfully.'
};

export const ZOHO_CONFIG = {
  tokenCacheDuration: 3000, // 50 minutes (tokens expire in 60)
  apiTimeout: 30000, // 30 seconds
  maxRetries: 3
};

export const EMAIL_TEMPLATES = {
  vendor: {
    subject: 'Thank you for registering - Globe Sourcing Procurement',
    from: 'info@globesourceprocurement.com',
    replyTo: 'supply.chain@globesourceprocurement.com'
  },
  admin: {
    subject: 'New Vendor Registration',
    from: 'info@globesourceprocurement.com'
  }
};
