// src/pages/VendorRegistration/utils/formValidation.js

// Validation rules
export const VALIDATION_RULES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  minLength: (min) => `Minimum ${min} characters required`,
  maxLength: (max) => `Maximum ${max} characters allowed`,
  positiveNumber: 'Please enter a positive number'
};

// Email validation
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation
export const isValidPhone = (phone) => {
  const phoneRegex = /^[+]?[\d\s()-]{10,}$/;
  return phoneRegex.test(phone);
};

// Required field validation
export const isRequired = (value) => {
  return value && value.toString().trim().length > 0;
};

// Number validation
export const isPositiveNumber = (value) => {
  const num = parseFloat(value);
  return !isNaN(num) && num > 0;
};

// Step 1 validation - Company Information
export const validateStep1 = (formData) => {
  const errors = {};
  
  if (!isRequired(formData.companyName)) {
    errors.companyName = VALIDATION_RULES.required;
  }
  
  if (!isRequired(formData.contactPerson)) {
    errors.contactPerson = VALIDATION_RULES.required;
  }
  
  if (!isRequired(formData.email)) {
    errors.email = VALIDATION_RULES.required;
  } else if (!isValidEmail(formData.email)) {
    errors.email = VALIDATION_RULES.email;
  }
  
  if (!isRequired(formData.phone)) {
    errors.phone = VALIDATION_RULES.required;
  } else if (!isValidPhone(formData.phone)) {
    errors.phone = VALIDATION_RULES.phone;
  }
  
  if (!isRequired(formData.country)) {
    errors.country = VALIDATION_RULES.required;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Step 2 validation - Product Details
export const validateStep2 = (formData) => {
  const errors = {};
  
  if (!isRequired(formData.productCategory)) {
    errors.productCategory = VALIDATION_RULES.required;
  }
  
  if (!isRequired(formData.productDescription)) {
    errors.productDescription = VALIDATION_RULES.required;
  }
  
  if (!isRequired(formData.moq)) {
    errors.moq = VALIDATION_RULES.required;
  } else if (!isPositiveNumber(formData.moq)) {
    errors.moq = VALIDATION_RULES.positiveNumber;
  }
  
  if (!isRequired(formData.unitPrice)) {
    errors.unitPrice = VALIDATION_RULES.required;
  } else if (!isPositiveNumber(formData.unitPrice)) {
    errors.unitPrice = VALIDATION_RULES.positiveNumber;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Step 3 validation - Business Credentials
export const validateStep3 = (formData) => {
  const errors = {};
  
  // Step 3 is optional for basic validation
  // Can add file validation, certification validation, etc.
  
  return {
    isValid: true, // Always valid for now
    errors
  };
};

// Step 4 validation - Review & Submit
export const validateStep4 = (formData) => {
  const errors = {};
  
  if (!formData.termsAccepted) {
    errors.termsAccepted = 'Please accept the terms and conditions';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Main validation function
export const validateFormStep = (stepNumber, formData) => {
  switch (stepNumber) {
    case 1:
      return validateStep1(formData);
    case 2:
      return validateStep2(formData);
    case 3:
      return validateStep3(formData);
    case 4:
      return validateStep4(formData);
    default:
      return { isValid: false, errors: { general: 'Invalid step' } };
  }
};