// src/pages/VendorRegistration/utils/constants.js

// Product Categories
export const PRODUCT_CATEGORIES = [
  'Agricultural Products',
  'Industrial Equipment', 
  'Electronics & Technology',
  'Textiles & Apparel',
  'Automotive Parts',
  'Construction Materials',
  'Food & Beverages',
  'Medical Supplies',
  'Chemicals',
  'Raw Materials',
  'Consumer Goods',
  'Machinery',
  'Other'
];

// Currency Options
export const CURRENCIES = [
  { value: 'USD', label: 'USD - US Dollar' },
  { value: 'EUR', label: 'EUR - Euro' },
  { value: 'GBP', label: 'GBP - British Pound' },
  { value: 'CNY', label: 'CNY - Chinese Yuan' },
  { value: 'JPY', label: 'JPY - Japanese Yen' },
  { value: 'KRW', label: 'KRW - South Korean Won' },
  { value: 'INR', label: 'INR - Indian Rupee' },
  { value: 'CAD', label: 'CAD - Canadian Dollar' },
  { value: 'AUD', label: 'AUD - Australian Dollar' },
  { value: 'BRL', label: 'BRL - Brazilian Real' },
  { value: 'KES', label: 'KES - Kenyan Shilling' },
  { value: 'ZAR', label: 'ZAR - South African Rand' }
];

// Countries List (Major Trading Countries)
export const COUNTRIES = [
  'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Armenia', 'Australia',
  'Austria', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Belarus', 'Belgium',
  'Bolivia', 'Bosnia and Herzegovina', 'Brazil', 'Bulgaria', 'Cambodia',
  'Canada', 'Chile', 'China', 'Colombia', 'Costa Rica', 'Croatia', 'Czech Republic',
  'Denmark', 'Ecuador', 'Egypt', 'Estonia', 'Ethiopia', 'Finland', 'France',
  'Georgia', 'Germany', 'Ghana', 'Greece', 'Guatemala', 'Honduras', 'Hong Kong',
  'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel',
  'Italy', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Latvia',
  'Lebanon', 'Lithuania', 'Luxembourg', 'Malaysia', 'Malta', 'Mexico',
  'Morocco', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Oman',
  'Pakistan', 'Panama', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar',
  'Romania', 'Russia', 'Saudi Arabia', 'Serbia', 'Singapore', 'Slovakia',
  'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'Sweden',
  'Switzerland', 'Taiwan', 'Thailand', 'Turkey', 'Ukraine', 'United Arab Emirates',
  'United Kingdom', 'United States', 'Uruguay', 'Vietnam', 'Zimbabwe'
];

// Packaging Types
export const PACKAGING_TYPES = [
  'Bulk (No specific packaging)',
  'Bags/Sacks',
  'Boxes/Cartons', 
  'Pallets',
  'Containers (20ft)',
  'Containers (40ft)',
  'Drums/Barrels',
  'Rolls',
  'Custom packaging'
];

// Form Steps Configuration
export const FORM_STEPS = [
  {
    id: 1,
    name: 'company_info',
    title: 'Company Information',
    description: 'Basic company details and contact information',
    fields: ['companyName', 'contactPerson', 'email', 'phone', 'country', 'businessRegNumber']
  },
  {
    id: 2,
    name: 'product_details', 
    title: 'Product Details',
    description: 'Product information, MOQ, and pricing',
    fields: ['productCategory', 'productDescription', 'moq', 'packaging', 'unitPrice', 'currency']
  },
  {
    id: 3,
    name: 'business_credentials',
    title: 'Business Credentials', 
    description: 'Certifications and document uploads',
    fields: ['certifications', 'files', 'references']
  },
  {
    id: 4,
    name: 'review_submit',
    title: 'Review & Submit',
    description: 'Review your information and submit application',
    fields: ['termsAccepted', 'marketingConsent']
  }
];

// File Upload Configuration
export const FILE_UPLOAD_CONFIG = {
  maxFiles: 5,
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: [
    'image/jpeg',
    'image/png', 
    'image/gif',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain'
  ],
  allowedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.pdf', '.doc', '.docx', '.txt']
};

// Validation Messages
export const VALIDATION_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number (minimum 10 digits)',
  positiveNumber: 'Please enter a positive number',
  minLength: (min) => `Minimum ${min} characters required`,
  maxLength: (max) => `Maximum ${max} characters allowed`,
  fileSize: 'File size exceeds maximum limit',
  fileType: 'File type not supported',
  maxFiles: 'Maximum number of files exceeded'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  submission: {
    title: 'Application Submitted Successfully!',
    message: 'Thank you for your vendor application. We\'ll review your information and get back to you within 24-48 hours.',
    timeline: [
      {
        step: 1,
        title: 'Application Received',
        description: 'Your application has been successfully submitted',
        status: 'completed',
        time: 'Now'
      },
      {
        step: 2,
        title: 'Initial Review',
        description: 'Our team will review your company and product information',
        status: 'pending', 
        time: 'Within 24 hours'
      },
      {
        step: 3,
        title: 'Verification Process',
        description: 'We\'ll verify your business credentials and certifications',
        status: 'upcoming',
        time: '24-48 hours'
      },
      {
        step: 4,
        title: 'Welcome Package',
        description: 'If approved, you\'ll receive your vendor onboarding package',
        status: 'upcoming',
        time: '48-72 hours'
      }
    ]
  },
  draftSaved: 'Draft saved successfully',
  draftLoaded: 'Previous draft loaded'
};

// Contact Information
export const CONTACT_INFO = {
  email: 'info@globesourceprocurement.com',
  phone: '+44 (0) 20 7123 4567',
  website: 'https://globesourceprocurement.com',
  address: {
    street: 'Saint John Woods',
    city: 'London',
    country: 'United Kingdom'
  }
};

// API Endpoints (for future use)
export const API_ENDPOINTS = {
  submit: '/api/vendor-registration/submit',
  saveDraft: '/api/vendor-registration/draft',
  uploadFile: '/api/vendor-registration/upload'
};

// Local Storage Keys
export const STORAGE_KEYS = {
  draft: 'vendor_registration_draft',
  session: 'vendor_session_id'
};

// Analytics Events
export const ANALYTICS_EVENTS = {
  pageView: 'vendor_registration_page_view',
  stepStart: 'form_step_start',
  stepComplete: 'form_step_complete', 
  stepError: 'form_step_validation_error',
  formAbandon: 'form_abandon',
  submitStart: 'vendor_registration_submit_start',
  submitSuccess: 'vendor_registration_complete',
  submitError: 'vendor_registration_submit_error',
  fileUpload: 'form_file_upload',
  buttonClick: 'button_click',
  draftSave: 'draft_save',
  draftLoad: 'draft_load'
};

// Form Field Placeholders
export const PLACEHOLDERS = {
  companyName: 'Enter your company name',
  contactPerson: 'Full name of primary contact',
  email: 'company@example.com',
  phone: '+1 (555) 123-4567',
  businessRegNumber: 'Business registration number',
  productDescription: 'Describe your products in detail...',
  moq: 'e.g., 1000',
  unitPrice: '0.00',
  packaging: 'Describe packaging specifications',
  certifications: 'List any relevant certifications, quality standards, etc.'
};

// Export default configuration object
const constants = {
  PRODUCT_CATEGORIES,
  CURRENCIES,
  COUNTRIES,
  PACKAGING_TYPES,
  FORM_STEPS,
  FILE_UPLOAD_CONFIG,
  VALIDATION_MESSAGES,
  SUCCESS_MESSAGES,
  CONTACT_INFO,
  API_ENDPOINTS,
  STORAGE_KEYS,
  ANALYTICS_EVENTS,
  PLACEHOLDERS
};

export default constants;