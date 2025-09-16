// src/components/Forms/VendorForm/VendorForm.jsx
import React, { useState } from 'react';
import { Building2, Upload, Send } from 'lucide-react';
import FormField from '../Shared/FormField';
import FileUpload from '../Shared/FileUpload';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import { PRODUCT_CATEGORIES, VALIDATION_RULES } from '../../../utils/constants';
import styles from './VendorForm.module.css';

const VendorForm = () => {
  const { ref: formRef, isVisible } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    productDescription: '',
    bulkQuantity: '',
    unitPrice: '',
    currency: 'USD',
    certifications: '',
    files: []
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileUpload = (files) => {
    setFormData(prev => ({
      ...prev,
      files: files
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    const requiredFields = [
      'companyName', 'contactPerson', 'email', 'phone', 
      'country', 'productCategory', 'productDescription', 
      'bulkQuantity', 'unitPrice'
    ];

    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = VALIDATION_RULES.required;
      }
    });

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = VALIDATION_RULES.email;
    }

    // Phone validation
    if (formData.phone && !/^[+]?[\d\s()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = VALIDATION_RULES.phone;
    }

    // Numeric validations
    if (formData.bulkQuantity && (isNaN(formData.bulkQuantity) || formData.bulkQuantity <= 0)) {
      newErrors.bulkQuantity = VALIDATION_RULES.positiveNumber;
    }

    if (formData.unitPrice && (isNaN(formData.unitPrice) || formData.unitPrice <= 0)) {
      newErrors.unitPrice = VALIDATION_RULES.positiveNumber;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Vendor Form Data:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      country: '',
      productCategory: '',
      productDescription: '',
      bulkQuantity: '',
      unitPrice: '',
      currency: 'USD',
      certifications: '',
      files: []
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div 
        id="vendor-form"
        ref={formRef}
        className={`${styles.vendorForm} ${isVisible ? styles.visible : ''}`}
      >
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>
            <Send size={48} />
          </div>
          <h3>Thank You!</h3>
          <p>Your vendor application has been submitted successfully. We'll review your information and get back to you within 24-48 hours.</p>
          <button 
            className={styles.resetButton}
            onClick={resetForm}
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      id="vendor-form"
      ref={formRef}
      className={`${styles.vendorForm} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.formHeader}>
        <div className={styles.headerIcon}>
          <Building2 size={32} />
        </div>
        <h2 className={styles.formTitle}>For Vendors</h2>
        <p className={styles.formSubtitle}>
          Submit your bulk products for sourcing opportunities
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Company Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Company Information</h3>
          <div className={styles.fieldsGrid}>
            <FormField
              label="Company Name"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={(value) => handleInputChange('companyName', value)}
              error={errors.companyName}
              placeholder="Enter your company name"
              required
            />

            <FormField
              label="Contact Person"
              name="contactPerson"
              type="text"
              value={formData.contactPerson}
              onChange={(value) => handleInputChange('contactPerson', value)}
              error={errors.contactPerson}
              placeholder="Full name of contact person"
              required
            />

            <FormField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={(value) => handleInputChange('email', value)}
              error={errors.email}
              placeholder="company@example.com"
              required
            />

            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(value) => handleInputChange('phone', value)}
              error={errors.phone}
              placeholder="+1 (555) 123-4567"
              required
            />

            <FormField
              label="Country"
              name="country"
              type="text"
              value={formData.country}
              onChange={(value) => handleInputChange('country', value)}
              error={errors.country}
              placeholder="Country of operation"
              required
            />
          </div>
        </div>

        {/* Product Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Product Information</h3>
          <div className={styles.fieldsGrid}>
            <FormField
              label="Product Category"
              name="productCategory"
              type="select"
              value={formData.productCategory}
              onChange={(value) => handleInputChange('productCategory', value)}
              error={errors.productCategory}
              options={PRODUCT_CATEGORIES.map(cat => ({ value: cat, label: cat }))}
              placeholder="Select product category"
              required
            />

            <FormField
              label="Product Description"
              name="productDescription"
              type="textarea"
              value={formData.productDescription}
              onChange={(value) => handleInputChange('productDescription', value)}
              error={errors.productDescription}
              placeholder="Describe your products in detail..."
              required
              rows={4}
            />

            <FormField
              label="Minimum Bulk Quantity"
              name="bulkQuantity"
              type="number"
              value={formData.bulkQuantity}
              onChange={(value) => handleInputChange('bulkQuantity', value)}
              error={errors.bulkQuantity}
              placeholder="e.g., 1000"
              required
            />

            <div className={styles.priceGroup}>
              <FormField
                label="Unit Price"
                name="unitPrice"
                type="number"
                value={formData.unitPrice}
                onChange={(value) => handleInputChange('unitPrice', value)}
                error={errors.unitPrice}
                placeholder="0.00"
                step="0.01"
                required
              />

              <FormField
                label="Currency"
                name="currency"
                type="select"
                value={formData.currency}
                onChange={(value) => handleInputChange('currency', value)}
                options={[
                  { value: 'USD', label: 'USD' },
                  { value: 'EUR', label: 'EUR' },
                  { value: 'GBP', label: 'GBP' },
                  { value: 'KES', label: 'KES' }
                ]}
              />
            </div>

            <FormField
              label="Certifications (Optional)"
              name="certifications"
              type="textarea"
              value={formData.certifications}
              onChange={(value) => handleInputChange('certifications', value)}
              placeholder="List any relevant certifications, quality standards, etc."
              rows={3}
            />
          </div>
        </div>

        {/* File Upload */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <Upload size={20} />
            Upload Brochure/Product Details
          </h3>
          <FileUpload
            onFilesChange={handleFileUpload}
            acceptedTypes={['image/*', '.pdf', '.doc', '.docx']}
            maxFiles={5}
            maxSize={5 * 1024 * 1024} // 5MB
          />
        </div>

        {/* Submit Button */}
        <div className={styles.submitSection}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
          >
            {isSubmitting ? (
              <>
                <div className={styles.spinner}></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Submit Application</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendorForm;