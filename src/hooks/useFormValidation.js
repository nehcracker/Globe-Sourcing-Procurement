// Src/hooks/useFormValidation.js
import { useState, useCallback } from 'react';

/**
 * Custom hook for form validation
 * Provides validation logic for financing form fields
 */
const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  // Contact email validation (allows any domain)
  const validateContactEmail = useCallback((email) => {
    if (!email) return 'Contact email is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    return null;
  }, []);

  // Business email validation (strictly business domains)
  const validateBusinessEmail = useCallback((email) => {
    if (!email) return null; // Optional field

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    // Check for free email providers - block them for business email
    const freeProviders = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'live.com', 'me.com', 'msn.com', 'protonmail.com', 'yandex.com', 'zoho.com', 'mail.com', 'gmx.com'];
    const domain = email.split('@')[1]?.toLowerCase();
    if (freeProviders.includes(domain)) {
      return 'Please use a business email address (personal email domains are not allowed)';
    }

    return null;
  }, []);

  // Legacy email validation (kept for backward compatibility)
  const validateEmail = useCallback((email) => {
    if (!email) return 'Email is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    // Check for free email providers (optional - can be disabled)
    const freeProviders = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    const domain = email.split('@')[1]?.toLowerCase();
    if (freeProviders.includes(domain)) {
      return 'Please use your company email address';
    }

    return null;
  }, []);

  // Phone number validation
  const validatePhone = useCallback((phone) => {
    if (!phone) return 'Phone number is required';
    
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    if (cleanPhone.length < 10) {
      return 'Phone number must be at least 10 digits';
    }
    if (cleanPhone.length > 15) {
      return 'Phone number is too long';
    }

    return null;
  }, []);

  // Required field validation
  const validateRequired = useCallback((value, fieldName) => {
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      return `${fieldName} is required`;
    }
    return null;
  }, []);

  // Number validation
  const validateNumber = useCallback((value, fieldName, min = 0) => {
    if (!value) return `${fieldName} is required`;
    
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      return `${fieldName} must be a valid number`;
    }
    if (numValue < min) {
      return `${fieldName} must be at least ${min}`;
    }

    return null;
  }, []);

  // Company name validation
  const validateCompanyName = useCallback((name) => {
    if (!name) return 'Company name is required';
    if (name.length < 2) return 'Company name is too short';
    if (name.length > 100) return 'Company name is too long';
    return null;
  }, []);

  // Registration number validation
  const validateRegistrationNumber = useCallback((regNumber) => {
    if (!regNumber) return 'Registration number is required';
    if (regNumber.length < 3) return 'Registration number is too short';
    return null;
  }, []);

  // URL validation (optional)

  // Validate Step 1: Company Information
  const validateStep1 = useCallback((formData) => {
    const stepErrors = {};

    const companyNameError = validateCompanyName(formData.companyName);
    if (companyNameError) stepErrors.companyName = companyNameError;

    const regNumberError = validateRegistrationNumber(formData.registrationNumber);
    if (regNumberError) stepErrors.registrationNumber = regNumberError;

    const countryError = validateRequired(formData.country, 'Country');
    if (countryError) stepErrors.country = countryError;

    const contactPersonError = validateRequired(formData.contactPerson, 'Contact person name');
    if (contactPersonError) stepErrors.contactPerson = contactPersonError;

    const contactEmailError = validateContactEmail(formData.contactEmail);
    if (contactEmailError) stepErrors.contactEmail = contactEmailError;

    // Business email is optional, but if provided, validate it strictly
    if (formData.businessEmail) {
      const businessEmailError = validateBusinessEmail(formData.businessEmail);
      if (businessEmailError) stepErrors.businessEmail = businessEmailError;
    }

    const phoneError = validatePhone(formData.phone);
    if (phoneError) stepErrors.phone = phoneError;

    const addressError = validateRequired(formData.address, 'Company address');
    if (addressError) stepErrors.address = addressError;

    return stepErrors;
  }, [validateCompanyName, validateRegistrationNumber, validateRequired, validateContactEmail, validateBusinessEmail, validatePhone]);

  // Validate Step 2: Trade Information
  const validateStep2 = useCallback((formData) => {
    const stepErrors = {};

    const transactionTypeError = validateRequired(formData.transactionType, 'Transaction type');
    if (transactionTypeError) stepErrors.transactionType = transactionTypeError;

    const productDescError = validateRequired(formData.productDescription, 'Product description');
    if (productDescError) stepErrors.productDescription = productDescError;

    const originCountryError = validateRequired(formData.originCountry, 'Origin country');
    if (originCountryError) stepErrors.originCountry = originCountryError;

    const destinationCountryError = validateRequired(formData.destinationCountry, 'Destination country');
    if (destinationCountryError) stepErrors.destinationCountry = destinationCountryError;

    const transactionValueError = validateNumber(formData.transactionValue, 'Transaction value', 1);
    if (transactionValueError) stepErrors.transactionValue = transactionValueError;

    const currencyError = validateRequired(formData.currency, 'Currency');
    if (currencyError) stepErrors.currency = currencyError;

    const paymentTermsError = validateRequired(formData.paymentTerms, 'Payment terms');
    if (paymentTermsError) stepErrors.paymentTerms = paymentTermsError;

    return stepErrors;
  }, [validateRequired, validateNumber]);

  // Validate Step 3: Funding Details
  const validateStep3 = useCallback((formData) => {
    const stepErrors = {};

    const financingTypeError = validateRequired(formData.financingType, 'Financing type');
    if (financingTypeError) stepErrors.financingType = financingTypeError;

    const financingAmountError = validateNumber(formData.financingAmount, 'Financing amount', 1);
    if (financingAmountError) stepErrors.financingAmount = financingAmountError;

    const repaymentPeriodError = validateRequired(formData.repaymentPeriod, 'Repayment period');
    if (repaymentPeriodError) stepErrors.repaymentPeriod = repaymentPeriodError;

    const bankingRelationshipError = validateRequired(formData.bankingRelationship, 'Banking relationship');
    if (bankingRelationshipError) stepErrors.bankingRelationship = bankingRelationshipError;

    const tradeExperienceError = validateRequired(formData.tradeExperience, 'Trade finance experience');
    if (tradeExperienceError) stepErrors.tradeExperience = tradeExperienceError;

    return stepErrors;
  }, [validateRequired, validateNumber]);

  // Validate Step 4: Declaration
  const validateStep4 = useCallback((formData) => {
    const stepErrors = {};

    if (!formData.agreeTerms) {
      stepErrors.agreeTerms = 'You must agree to the terms and conditions';
    }

    if (!formData.agreePrivacy) {
      stepErrors.agreePrivacy = 'You must agree to the privacy policy';
    }

    if (!formData.declareAccuracy) {
      stepErrors.declareAccuracy = 'You must declare that the information is accurate';
    }

    return stepErrors;
  }, []);

  // Master validation function
  const validateStep = useCallback((step, formData) => {
    let stepErrors = {};

    switch (step) {
      case 1:
        stepErrors = validateStep1(formData);
        break;
      case 2:
        stepErrors = validateStep2(formData);
        break;
      case 3:
        stepErrors = validateStep3(formData);
        break;
      case 4:
        stepErrors = validateStep4(formData);
        break;
      default:
        break;
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  }, [validateStep1, validateStep2, validateStep3, validateStep4]);

  // Clear specific field error
  const clearError = useCallback((fieldName) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  }, []);

  // Clear all errors
  const clearAllErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    errors,
    validateStep,
    validateEmail,
    validatePhone,
    validateRequired,
    validateNumber,
    clearError,
    clearAllErrors,
  };
};

export default useFormValidation;