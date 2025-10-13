// src/pages/VendorRegistration/components/MultiStepForm/MultiStepForm.jsx
import React, { useEffect, useState } from 'react';
import { useMultiStepForm } from '../../hooks/useMultiStepForm';
import { useFormAnalytics } from '../../hooks/useFormAnalytics';
import { submitVendorRegistration } from '../../utils/api';
import StepIndicator from './StepIndicator';
import NavigationButtons from './NavigationButtons';
import SuccessMessage from '../shared/SuccessMessage';
import styles from './MultiStepForm.module.css';

// Company Information Step Component
const CompanyInfoStep = ({ formData, updateFormData, errors, updateValidation }) => {
  const [localErrors, setLocalErrors] = useState({});

  useEffect(() => {
    const newErrors = {};
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    
    setLocalErrors(newErrors);
    updateValidation(1, Object.keys(newErrors).length === 0, newErrors);
  }, [formData, updateValidation]);

  return (
    <div className={styles.stepContent}>
      <h3>Company Information</h3>
      <p className={styles.stepDescription}>
        Provide your company details and primary contact information.
      </p>
      
      <div className={styles.compactForm}>
        {/* Row 1: Company Name and Contact Person */}
        <div className={styles.formRow}>
          <div className={styles.fieldContainer}>
            <label>Company Name *</label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => updateFormData('companyName', e.target.value)}
              className={localErrors.companyName ? styles.error : ''}
              placeholder="Enter your company name"
            />
            {localErrors.companyName && <span className={styles.errorText}>{localErrors.companyName}</span>}
          </div>

          <div className={styles.fieldContainer}>
            <label>Contact Person *</label>
            <input
              type="text"
              value={formData.contactPerson}
              onChange={(e) => updateFormData('contactPerson', e.target.value)}
              className={localErrors.contactPerson ? styles.error : ''}
              placeholder="Primary contact name"
            />
            {localErrors.contactPerson && <span className={styles.errorText}>{localErrors.contactPerson}</span>}
          </div>
        </div>

        {/* Row 2: Email and Phone */}
        <div className={styles.formRow}>
          <div className={styles.fieldContainer}>
            <label>Email Address *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              className={localErrors.email ? styles.error : ''}
              placeholder="company@example.com"
            />
            {localErrors.email && <span className={styles.errorText}>{localErrors.email}</span>}
          </div>

          <div className={styles.fieldContainer}>
            <label>Phone Number *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              className={localErrors.phone ? styles.error : ''}
              placeholder="+1 (555) 123-4567"
            />
            {localErrors.phone && <span className={styles.errorText}>{localErrors.phone}</span>}
          </div>
        </div>

        {/* Row 3: Country */}
        <div className={styles.formRow}>
          <div className={`${styles.fieldContainer} ${styles.fullWidth}`}>
            <label>Country *</label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => updateFormData('country', e.target.value)}
              className={localErrors.country ? styles.error : ''}
              placeholder="Country of business operation"
            />
            {localErrors.country && <span className={styles.errorText}>{localErrors.country}</span>}
          </div>
        </div>
      </div>

      <div className={styles.compactTips}>
        <div className={styles.tipsHeader}>
          <span className={styles.tipsIcon}>📋</span>
          <strong>Information Tips:</strong>
        </div>
        <div className={styles.tipsGrid}>
          <div className={styles.tipItem}>
            <strong>Company Details:</strong> Use your official registered business name for verification
          </div>
          <div className={styles.tipItem}>
            <strong>Contact Info:</strong> Provide active email and phone for quick communication
          </div>
        </div>
      </div>
    </div>
  );
};

// Product Details Step Component
const ProductDetailsStep = ({ formData, updateFormData, updateValidation }) => {
  const [localErrors, setLocalErrors] = useState({});

  const productCategories = [
    'Agricultural Products',
    'Industrial Equipment',
    'Electronics & Technology',
    'Textiles & Apparel',
    'Automotive Parts',
    'Construction Materials',
    'Food & Beverages',
    'Medical Supplies',
    'Chemicals',
    'Other'
  ];

  const packagingTypes = [
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

  const currencies = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'GBP', label: 'GBP' },
    { value: 'CNY', label: 'CNY' },
    { value: 'JPY', label: 'JPY' },
    { value: 'KRW', label: 'KRW' },
    { value: 'INR', label: 'INR' },
    { value: 'CAD', label: 'CAD' },
    { value: 'AUD', label: 'AUD' },
    { value: 'BRL', label: 'BRL' },
    { value: 'KES', label: 'KES' }
  ];

  useEffect(() => {
    const newErrors = {};
    
    if (!formData.productCategory.trim()) {
      newErrors.productCategory = 'Product category is required';
    }
    
    if (!formData.productDescription.trim()) {
      newErrors.productDescription = 'Product description is required';
    } else if (formData.productDescription.trim().length < 50) {
      newErrors.productDescription = 'Product description must be at least 50 characters';
    }
    
    if (!formData.moq.trim()) {
      newErrors.moq = 'Minimum bulk quantity is required';
    } else if (isNaN(formData.moq) || parseFloat(formData.moq) <= 0) {
      newErrors.moq = 'Please enter a valid positive number';
    }

    if (!formData.packaging.trim()) {
      newErrors.packaging = 'Packaging type is required';
    }
    
    if (!formData.unitPrice.trim()) {
      newErrors.unitPrice = 'Unit price is required';
    } else if (isNaN(formData.unitPrice) || parseFloat(formData.unitPrice) <= 0) {
      newErrors.unitPrice = 'Please enter a valid positive price';
    }
    
    setLocalErrors(newErrors);
    updateValidation(2, Object.keys(newErrors).length === 0, newErrors);
  }, [formData, updateValidation]);

  return (
    <div className={styles.stepContent}>
      <h3>Product Information</h3>
      <p className={styles.stepDescription}>
        Provide detailed information about your products, pricing, and minimum order quantities.
      </p>
      
      <div className={styles.compactForm}>
        {/* Row 1: Product Category and MOQ */}
        <div className={styles.formRow}>
          <div className={styles.fieldContainer}>
            <label>Product Category *</label>
            <select
              value={formData.productCategory}
              onChange={(e) => updateFormData('productCategory', e.target.value)}
              className={localErrors.productCategory ? styles.error : ''}
            >
              <option value="">Select product category</option>
              {productCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {localErrors.productCategory && (
              <span className={styles.errorText}>{localErrors.productCategory}</span>
            )}
          </div>

          <div className={styles.fieldContainer}>
            <label>Minimum Bulk Quantity *</label>
            <input
              type="number"
              value={formData.moq}
              onChange={(e) => updateFormData('moq', e.target.value)}
              className={localErrors.moq ? styles.error : ''}
              placeholder="e.g., 1000"
              min="1"
              step="1"
            />
            {localErrors.moq && (
              <span className={styles.errorText}>{localErrors.moq}</span>
            )}
          </div>
        </div>

        {/* Row 2: Packaging Type and Unit Price */}
        <div className={styles.formRow}>
          <div className={styles.fieldContainer}>
            <label>Packaging Type *</label>
            <select
              value={formData.packaging}
              onChange={(e) => updateFormData('packaging', e.target.value)}
              className={localErrors.packaging ? styles.error : ''}
            >
              <option value="">Select packaging type</option>
              {packagingTypes.map((packaging) => (
                <option key={packaging} value={packaging}>
                  {packaging}
                </option>
              ))}
            </select>
            {localErrors.packaging && (
              <span className={styles.errorText}>{localErrors.packaging}</span>
            )}
          </div>

          <div className={styles.fieldContainer}>
            <label>Unit Price *</label>
            <input
              type="number"
              value={formData.unitPrice}
              onChange={(e) => updateFormData('unitPrice', e.target.value)}
              className={localErrors.unitPrice ? styles.error : ''}
              placeholder="0.00"
              min="0"
              step="0.01"
            />
            {localErrors.unitPrice && (
              <span className={styles.errorText}>{localErrors.unitPrice}</span>
            )}
          </div>
        </div>

        {/* Row 3: Currency (standalone) */}
        <div className={styles.formRow}>
          <div className={styles.fieldContainer}>
            <label>Currency</label>
            <select
              value={formData.currency}
              onChange={(e) => updateFormData('currency', e.target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.value} value={currency.value}>
                  {currency.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.fieldContainer}>
            {/* Empty space for alignment */}
          </div>
        </div>

        {/* Row 4: Product Description */}
        <div className={styles.formRow}>
          <div className={`${styles.fieldContainer} ${styles.fullWidth}`}>
            <label>Product Description *</label>
            <textarea
              value={formData.productDescription}
              onChange={(e) => updateFormData('productDescription', e.target.value)}
              className={localErrors.productDescription ? styles.error : ''}
              placeholder="Provide a detailed description of your products, including specifications, materials, features, applications, and unique selling points."
              rows={4}
            />
            <div className={styles.fieldHelper}>
              <span className={styles.charCount}>
                {formData.productDescription.length} characters
                {formData.productDescription.length < 50 && (
                  <span className={styles.charCountWarning}> (minimum 50 required)</span>
                )}
              </span>
            </div>
            {localErrors.productDescription && (
              <span className={styles.errorText}>{localErrors.productDescription}</span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.compactTips}>
        <div className={styles.tipsHeader}>
          <span className={styles.tipsIcon}>💡</span>
          <strong>Quick Tips:</strong>
        </div>
        <div className={styles.tipsGrid}>
          <div className={styles.tipItem}>
            <strong>Include:</strong> Technical specs, quality standards, variants, packaging details
          </div>
          <div className={styles.tipItem}>
            <strong>Pricing:</strong> Competitive bulk rates, volume discounts, validity period
          </div>
        </div>
      </div>
    </div>
  );
};

// Business Credentials Step Component
const BusinessCredentialsStep = ({ formData, updateFormData, updateValidation }) => {
  useEffect(() => {
    // For this step, it's optional so always valid
    updateValidation(3, true, {});
  }, [updateValidation]);

  return (
    <div className={styles.stepContent}>
      <h3>Business Credentials</h3>
      <p className={styles.stepDescription}>
        Upload business documents and certifications to verify your company credentials.
      </p>
      
      <div className={styles.compactForm}>
        <div className={styles.formRow}>
          <div className={`${styles.fieldContainer} ${styles.fullWidth}`}>
            <label>Certifications & Quality Standards (Optional)</label>
            <textarea
              value={formData.certifications}
              onChange={(e) => updateFormData('certifications', e.target.value)}
              rows={4}
              placeholder="List any relevant certifications, quality standards, compliance certificates, industry accreditations, etc."
            />
            <div className={styles.fieldHelper}>
              <span>Include ISO certifications, industry standards, quality assurance certificates</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.compactTips}>
        <div className={styles.tipsHeader}>
          <span className={styles.tipsIcon}>📎</span>
          <strong>Document Upload:</strong>
        </div>
        <div className={styles.tipsGrid}>
          <div className={styles.tipItem}>
            <strong>Accepted Files:</strong> PDF, DOC, DOCX, JPG, PNG (Max 5MB each)
          </div>
          <div className={styles.tipItem}>
            <strong>Documents:</strong> Business license, certificates, product brochures, quality standards
          </div>
        </div>
        
        <div className={styles.uploadPlaceholder}>
          <div className={styles.uploadIcon}>📄</div>
          <p><strong>File Upload Coming Soon</strong></p>
          <p>Document upload functionality will be added in Phase 3</p>
        </div>
      </div>
    </div>
  );
};

// Review & Submit Step Component
const ReviewSubmitStep = ({ formData, updateValidation }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    updateValidation(4, termsAccepted, termsAccepted ? {} : { terms: 'Please accept terms and conditions' });
  }, [termsAccepted, updateValidation]);

  return (
    <div className={styles.stepContent}>
      <h3>Review & Submit</h3>
      <p className={styles.stepDescription}>
        Please review all your information carefully before submitting your vendor application.
      </p>
      
      <div className={styles.reviewSection}>
        {/* Company Information */}
        <div className={styles.reviewGroup}>
          <h4>Company Information</h4>
          <div className={styles.reviewGrid}>
            <div className={styles.reviewItem}>
              <strong>Company Name:</strong>
              <span>{formData.companyName || 'Not provided'}</span>
            </div>
            <div className={styles.reviewItem}>
              <strong>Contact Person:</strong>
              <span>{formData.contactPerson || 'Not provided'}</span>
            </div>
            <div className={styles.reviewItem}>
              <strong>Email:</strong>
              <span>{formData.email || 'Not provided'}</span>
            </div>
            <div className={styles.reviewItem}>
              <strong>Phone:</strong>
              <span>{formData.phone || 'Not provided'}</span>
            </div>
            <div className={styles.reviewItem}>
              <strong>Country:</strong>
              <span>{formData.country || 'Not provided'}</span>
            </div>
          </div>
        </div>
        
        {/* Product Information */}
        <div className={styles.reviewGroup}>
          <h4>Product Information</h4>
          <div className={styles.reviewGrid}>
            <div className={styles.reviewItem}>
              <strong>Product Category:</strong>
              <span>{formData.productCategory || 'Not selected'}</span>
            </div>
            <div className={styles.reviewItem}>
              <strong>Minimum Bulk Quantity:</strong>
              <span>{formData.moq ? `${formData.moq} units` : 'Not specified'}</span>
            </div>
            <div className={styles.reviewItem}>
              <strong>Packaging Type:</strong>
              <span>{formData.packaging || 'Not specified'}</span>
            </div>
            <div className={styles.reviewItem}>
              <strong>Unit Price:</strong>
              <span>
                {formData.unitPrice && formData.currency 
                  ? `${formData.currency} ${formData.unitPrice}` 
                  : 'Not specified'
                }
              </span>
            </div>
          </div>
          
          {formData.productDescription && (
            <div className={styles.reviewDescription}>
              <strong>Product Description:</strong>
              <p>{formData.productDescription}</p>
            </div>
          )}
        </div>

        {/* Business Credentials */}
        {formData.certifications && (
          <div className={styles.reviewGroup}>
            <h4>Business Credentials</h4>
            <div className={styles.reviewDescription}>
              <strong>Certifications:</strong>
              <p>{formData.certifications}</p>
            </div>
          </div>
        )}

        {/* Terms and Conditions */}
        <div className={styles.termsSection}>
          <h4>Terms & Conditions</h4>
          <div className={styles.termsContent}>
            <p>By submitting this application, you agree to:</p>
            <ul>
              <li>Provide accurate and truthful information about your company and products</li>
              <li>Maintain quality standards as described in your application</li>
              <li>Honor the minimum order quantities and pricing specified</li>
              <li>Comply with Globe Sourcing Procurement's vendor guidelines</li>
              <li>Allow verification of your business credentials and certifications</li>
            </ul>
          </div>
          
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <span className={styles.checkboxText}>
              I accept the terms and conditions and confirm that all information provided is accurate *
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

// Main MultiStepForm Component
const MultiStepForm = () => {
  const {
    currentStep,
    goToStep,
    nextStep,
    prevStep,
    isTransitioning,
    getCurrentStepInfo,
    isFirstStep,
    isLastStep,
    formSteps,
    formData,
    updateFormData,
    stepValidation,
    updateStepValidation,
    isFormComplete,
    isSubmitting,
    setIsSubmitting,
    isSubmitted,
    setIsSubmitted,
    submissionError,
    setSubmissionError,
    resetForm
  } = useMultiStepForm();

  const { trackFormSubmissionStart, trackFormSubmissionSuccess, trackFormSubmissionError } = useFormAnalytics();

  // Handle form submission
  const handleSubmit = async () => {
    if (!isFormComplete()) {
      console.warn('Form is not complete');
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);
    trackFormSubmissionStart();

    try {
      // Prepare form data for API submission
      const submissionData = {
        companyName: formData.companyName,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        productCategory: formData.productCategory,
        productDescription: formData.productDescription,
        moq: parseInt(formData.moq),
        packaging: formData.packaging,
        unitPrice: parseFloat(formData.unitPrice),
        currency: formData.currency || 'USD',
        certifications: formData.certifications || '',
        termsAccepted: true,
        privacyAccepted: true,
        marketingConsent: false
      };

      console.log('Submitting vendor registration:', submissionData);

      // Call the API
      const result = await submitVendorRegistration(submissionData);

      if (result.success) {
        console.log('Registration successful:', result);
        setIsSubmitted(true);
        trackFormSubmissionSuccess(formData);
      } else {
        throw new Error(result.error || 'Registration failed');
      }

    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionError(error.message || 'Submission failed. Please try again.');
      trackFormSubmissionError(error, currentStep);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle save draft
  const handleSaveDraft = () => {
    console.log('Draft saved successfully');
  };

  // Render current step
  const renderCurrentStep = () => {
    if (isTransitioning) {
      return (
        <div className={styles.transitionLoader}>
          <div className={styles.loader}></div>
          <p>Loading step...</p>
        </div>
      );
    }

    switch (currentStep) {
      case 1:
        return (
          <CompanyInfoStep
            formData={formData}
            updateFormData={updateFormData}
            errors={stepValidation[1].errors}
            updateValidation={updateStepValidation}
          />
        );
      case 2:
        return (
          <ProductDetailsStep
            formData={formData}
            updateFormData={updateFormData}
            errors={stepValidation[2].errors}
            updateValidation={updateStepValidation}
          />
        );
      case 3:
        return (
          <BusinessCredentialsStep
            formData={formData}
            updateFormData={updateFormData}
            errors={stepValidation[3].errors}
            updateValidation={updateStepValidation}
          />
        );
      case 4:
        return (
          <ReviewSubmitStep
            formData={formData}
            updateValidation={updateStepValidation}
          />
        );
      default:
        return <div>Step not found</div>;
    }
  };

  // If form is submitted successfully, show success message
  if (isSubmitted) {
    return (
      <SuccessMessage
        title="Application Submitted Successfully!"
        message="Thank you for your vendor application. We'll review your information and get back to you within 24-48 hours."
        onReset={resetForm}
      />
    );
  }

  return (
    <div className={styles.multiStepForm}>
      {/* Step Indicator */}
      <StepIndicator
        steps={formSteps}
        currentStep={currentStep}
        stepValidation={stepValidation}
        onStepClick={goToStep}
      />

      {/* Form Content */}
      <div className={styles.formContainer}>
        <div className={styles.stepHeader}>
          <h2 className={styles.stepTitle}>
            {getCurrentStepInfo().title}
          </h2>
        </div>

        {/* Step Content */}
        <div className={styles.stepWrapper}>
          {renderCurrentStep()}
        </div>

        {/* Submission Error */}
        {submissionError && (
          <div className={styles.errorMessage}>
            <p>{submissionError}</p>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons
        currentStep={currentStep}
        totalSteps={formSteps.length}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        isCurrentStepValid={stepValidation[currentStep]?.isValid || false}
        isSubmitting={isSubmitting}
        onPrevious={prevStep}
        onNext={nextStep}
        onSubmit={handleSubmit}
        onSaveDraft={handleSaveDraft}
      />
    </div>
  );
};

export default MultiStepForm;