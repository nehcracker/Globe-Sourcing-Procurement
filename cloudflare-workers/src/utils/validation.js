// cloudflare-workers/src/utils/validation.js
// Form Validation Utility

import { VALIDATION_RULES, FILE_CONFIG } from '../config/constants.js';

/**
 * Validate form data
 */
export function validateFormData(data) {
  const errors = {};

  // Validate each field according to rules
  Object.entries(VALIDATION_RULES).forEach(([field, rules]) => {
    const value = data[field];
    const fieldErrors = validateField(field, value, rules);
    
    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors[0]; // Return first error
    }
  });

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Validate individual field
 */
function validateField(fieldName, value, rules) {
  const errors = [];

  // Required check
  if (rules.required && (!value || String(value).trim() === '')) {
    errors.push(`${fieldName} is required`);
    return errors; // Return early if required field is empty
  }

  // Skip other validations if field is empty and not required
  if (!value || String(value).trim() === '') {
    return errors;
  }

  const stringValue = String(value).trim();

  // Type validation
  if (rules.type === 'number') {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      errors.push(`${fieldName} must be a valid number`);
      return errors;
    }
    
    if (rules.min !== undefined && numValue < rules.min) {
      errors.push(`${fieldName} must be at least ${rules.min}`);
    }
    
    if (rules.max !== undefined && numValue > rules.max) {
      errors.push(`${fieldName} must be at most ${rules.max}`);
    }
  }

  // String length validation
  if (rules.minLength && stringValue.length < rules.minLength) {
    errors.push(`${fieldName} must be at least ${rules.minLength} characters`);
  }

  if (rules.maxLength && stringValue.length > rules.maxLength) {
    errors.push(`${fieldName} must be at most ${rules.maxLength} characters`);
  }

  // Pattern validation (email, phone, etc.)
  if (rules.pattern && !rules.pattern.test(stringValue)) {
    errors.push(`${fieldName} format is invalid`);
  }

  return errors;
}

/**
 * Validate file upload
 */
export function validateFile(file) {
  const errors = [];

  // Check file size
  if (file.size > FILE_CONFIG.maxFileSize) {
    errors.push(`File size must be less than ${FILE_CONFIG.maxFileSize / 1024 / 1024}MB`);
  }

  // Check file type
  if (!FILE_CONFIG.allowedTypes.includes(file.type)) {
    errors.push(`File type ${file.type} is not allowed`);
  }

  // Check file extension
  const fileName = file.name || '';
  const ext = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();
  if (ext && !FILE_CONFIG.allowedExtensions.includes(ext)) {
    errors.push(`File extension ${ext} is not allowed`);
  }

  return errors;
}

/**
 * Validate multiple files
 */
export function validateFiles(files) {
  const errors = [];

  if (!Array.isArray(files)) {
    return errors;
  }

  // Check max files
  if (files.length > FILE_CONFIG.maxFiles) {
    errors.push(`Maximum ${FILE_CONFIG.maxFiles} files allowed`);
    return errors;
  }

  // Validate each file
  files.forEach((file, index) => {
    const fileErrors = validateFile(file);
    if (fileErrors.length > 0) {
      errors.push(`File ${index + 1} (${file.name}): ${fileErrors.join(', ')}`);
    }
  });

  return errors;
}

/**
 * Sanitize input data
 */
export function sanitizeFormData(data) {
  const sanitized = {};

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'string') {
      // Trim whitespace
      sanitized[key] = value.trim();
      
      // Remove potential XSS
      sanitized[key] = sanitized[key]
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
    } else if (typeof value === 'number') {
      sanitized[key] = value;
    } else if (typeof value === 'boolean') {
      sanitized[key] = value;
    } else if (Array.isArray(value)) {
      sanitized[key] = value;
    } else {
      sanitized[key] = value;
    }
  });

  return sanitized;
}

/**
 * Validate email format
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone format
 */
export function isValidPhone(phone) {
  const phoneRegex = /^[+]?[\d\s\-()]{10,}$/;
  return phoneRegex.test(phone);
}