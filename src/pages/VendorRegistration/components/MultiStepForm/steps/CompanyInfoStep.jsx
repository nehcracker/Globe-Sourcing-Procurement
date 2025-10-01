// src/pages/VendorRegistration/components/MultiStepForm/steps/CompanyInfoStep.jsx
import React, { useState, useEffect } from 'react';
import { Building, Mail, Phone, Globe, User, AlertCircle, CheckCircle } from 'lucide-react';
import styles from './CompanyInfoStep.module.css';

const CompanyInfoStep = ({ formData, updateFormData, errors, updateValidation }) => {
  const [localErrors, setLocalErrors] = useState({});
  const [fieldValidation, setFieldValidation] = useState({});

  // Country list for dropdown
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain', 
    'Netherlands', 'Belgium', 'Switzerland', 'Austria', 'Sweden', 'Norway', 'Denmark',
    'Australia', 'New Zealand', 'Japan', 'South Korea', 'Singapore', 'Hong Kong',
    'China', 'India', 'Thailand', 'Malaysia', 'Indonesia', 'Philippines', 'Vietnam',
    'Brazil', 'Mexico', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Ecuador',
    'South Africa', 'Egypt', 'Morocco', 'Nigeria', 'Ghana', 'Kenya', 'Other'
  ];

  // Real-time validation
  useEffect(() => {
    const newErrors = {};
    const validation = {};
    
    // Company Name validation
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
      validation.companyName = 'error';
    } else if (formData.companyName.trim().length < 2) {
      newErrors.companyName = 'Company name must be at least 2 characters';
      validation.companyName = 'error';
    } else {
      validation.companyName = 'success';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      validation.email = 'error';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      validation.email = 'error';
    } else {
      validation.email = 'success';
    }
    
    // Contact Person validation
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person name is required';
      validation.contactPerson = 'error';
    } else if (formData.contactPerson.trim().length < 2) {
      newErrors.contactPerson = 'Contact person name must be at least 2 characters';
      validation.contactPerson = 'error';
    } else {
      validation.contactPerson = 'success';
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      validation.phone = 'error';
    } else if (!/^[+]?[\d\s\-()]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
      validation.phone = 'error';
    } else {
      validation.phone = 'success';
    }
    
    // Country validation
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
      validation.country = 'error';
    } else {
      validation.country = 'success';
    }
    
    setLocalErrors(newErrors);
    setFieldValidation(validation);
    updateValidation(1, Object.keys(newErrors).length === 0, newErrors);
  }, [formData, updateValidation]);

  const getFieldClass = (fieldName) => {
    const baseClass = styles.formInput;
    if (fieldValidation[fieldName] === 'error') return `${baseClass} ${styles.error}`;
    if (fieldValidation[fieldName] === 'success') return `${baseClass} ${styles.success}`;
    return baseClass;
  };

  const getFieldIcon = (fieldName) => {
    if (fieldValidation[fieldName] === 'error') {
      return <AlertCircle size={20} className={styles.errorIcon} />;
    }
    if (fieldValidation[fieldName] === 'success') {
      return <CheckCircle size={20} className={styles.successIcon} />;
    }
    return null;
  };

  return (
    <div className={styles.companyInfoStep}>
      <div className={styles.stepHeader}>
        <h3 className={styles.stepTitle}>
          <Building size={24} className={styles.titleIcon} />
          Company Information
        </h3>
        <p className={styles.stepDescription}>
          Provide your company details and primary contact information for verification.
        </p>
      </div>
      
      <div className={styles.formGrid}>
        {/* Row 1: Company Name and Contact Person */}
        <div className={styles.formRow}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              <Building size={16} />
              Company Name *
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => updateFormData('companyName', e.target.value)}
                className={getFieldClass('companyName')}
                placeholder="Enter your registered company name"
                maxLength={100}
              />
              {getFieldIcon('companyName')}
            </div>
            {localErrors.companyName && (
              <span className={styles.errorMessage}>{localErrors.companyName}</span>
            )}
            <div className={styles.fieldHint}>
              Use your official registered business name
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              <User size={16} />
              Contact Person *
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                value={formData.contactPerson}
                onChange={(e) => updateFormData('contactPerson', e.target.value)}
                className={getFieldClass('contactPerson')}
                placeholder="Primary contact person name"
                maxLength={50}
              />
              {getFieldIcon('contactPerson')}
            </div>
            {localErrors.contactPerson && (
              <span className={styles.errorMessage}>{localErrors.contactPerson}</span>
            )}
            <div className={styles.fieldHint}>
              Name of the main contact person
            </div>
          </div>
        </div>

        {/* Row 2: Email and Phone */}
        <div className={styles.formRow}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              <Mail size={16} />
              Email Address *
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value.toLowerCase())}
                className={getFieldClass('email')}
                placeholder="company@example.com"
                maxLength={100}
              />
              {getFieldIcon('email')}
            </div>
            {localErrors.email && (
              <span className={styles.errorMessage}>{localErrors.email}</span>
            )}
            <div className={styles.fieldHint}>
              Active email for communication and account access
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              <Phone size={16} />
              Phone Number *
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                className={getFieldClass('phone')}
                placeholder="+1 (555) 123-4567"
                maxLength={20}
              />
              {getFieldIcon('phone')}
            </div>
            {localErrors.phone && (
              <span className={styles.errorMessage}>{localErrors.phone}</span>
            )}
            <div className={styles.fieldHint}>
              Include country code for international numbers
            </div>
          </div>
        </div>

        {/* Row 3: Country */}
        <div className={styles.formRow}>
          <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
            <label className={styles.fieldLabel}>
              <Globe size={16} />
              Country of Operation *
            </label>
            <div className={styles.inputWrapper}>
              <select
                value={formData.country}
                onChange={(e) => updateFormData('country', e.target.value)}
                className={getFieldClass('country')}
              >
                <option value="">Select your country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {getFieldIcon('country')}
            </div>
            {localErrors.country && (
              <span className={styles.errorMessage}>{localErrors.country}</span>
            )}
            <div className={styles.fieldHint}>
              Primary country where your business operates
            </div>
          </div>
        </div>
      </div>

      {/* Information Tips */}
      <div className={styles.infoSection}>
        <div className={styles.infoHeader}>
          <span className={styles.infoIcon}>💡</span>
          <h4>Information Requirements</h4>
        </div>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.cardIcon}>🏢</div>
            <h5>Company Details</h5>
            <p>Provide your official registered business name exactly as it appears on legal documents.</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.cardIcon}>📞</div>
            <h5>Contact Information</h5>
            <p>Use active email and phone number for quick verification and ongoing communication.</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.cardIcon}>🌍</div>
            <h5>Business Location</h5>
            <p>Select the primary country where your business is registered and operates.</p>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className={styles.progressSection}>
        <div className={styles.progressInfo}>
          <span>Completion Progress</span>
          <span className={styles.progressPercent}>
            {Math.round((Object.keys(fieldValidation).filter(key => fieldValidation[key] === 'success').length / 5) * 100)}%
          </span>
        </div>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill}
            style={{ 
              width: `${(Object.keys(fieldValidation).filter(key => fieldValidation[key] === 'success').length / 5) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoStep;
