// src/components/Forms/BuyerForm/BuyerForm.jsx
import React, { useState } from 'react';
import { ShoppingCart, MapPin, Send } from 'lucide-react';
import FormField from '../Shared/FormField';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import { PRODUCT_CATEGORIES, VALIDATION_RULES } from '../../../utils/constants';
import styles from './BuyerForm.module.css';

const BuyerForm = () => {
  const { ref: formRef, isVisible } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    productName: '',
    productCategory: '',
    productDescription: '',
    quantity: '',
    targetPrice: '',
    currency: 'USD',
    deliveryLocation: '',
    deliveryTimeframe: '',
    additionalRequirements: ''
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

  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    const requiredFields = [
      'companyName', 'contactPerson', 'email', 'phone',
      'productName', 'productCategory', 'quantity', 
      'deliveryLocation'
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
    if (formData.quantity && (isNaN(formData.quantity) || formData.quantity <= 0)) {
      newErrors.quantity = VALIDATION_RULES.positiveNumber;
    }

    if (formData.targetPrice && formData.targetPrice.trim() && (isNaN(formData.targetPrice) || formData.targetPrice <= 0)) {
      newErrors.targetPrice = VALIDATION_RULES.positiveNumber;
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
      
      console.log('Buyer Form Data:', formData);
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
      productName: '',
      productCategory: '',
      productDescription: '',
      quantity: '',
      targetPrice: '',
      currency: 'USD',
      deliveryLocation: '',
      deliveryTimeframe: '',
      additionalRequirements: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div 
        id="buyer-form"
        ref={formRef}
        className={`${styles.buyerForm} ${isVisible ? styles.visible : ''}`}
      >
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>
            <ShoppingCart size={48} />
          </div>
          <h3>Quote Request Sent!</h3>
          <p>We've received your product request. Our team will match you with verified suppliers and send you quotes within 24-48 hours.</p>
          <button 
            className={styles.resetButton}
            onClick={resetForm}
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      id="buyer-form"
      ref={formRef}
      className={`${styles.buyerForm} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.formHeader}>
        <div className={styles.headerIcon}>
          <ShoppingCart size={32} />
        </div>
        <h2 className={styles.formTitle}>For Buyers</h2>
        <p className={styles.formSubtitle}>
          Request a quote for the products you want in bulk
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
          </div>
        </div>

        {/* Product Requirements */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Product Requirements</h3>
          <div className={styles.fieldsGrid}>
            <FormField
              label="Product Name"
              name="productName"
              type="text"
              value={formData.productName}
              onChange={(value) => handleInputChange('productName', value)}
              error={errors.productName}
              placeholder="What product are you looking for?"
              required
            />

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
              placeholder="Describe your specific requirements, specifications, quality standards, etc."
              rows={4}
            />

            <FormField
              label="Quantity Needed"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={(value) => handleInputChange('quantity', value)}
              error={errors.quantity}
              placeholder="e.g., 5000"
              required
            />

            <div className={styles.priceGroup}>
              <FormField
                label="Target Price (Optional)"
                name="targetPrice"
                type="number"
                value={formData.targetPrice}
                onChange={(value) => handleInputChange('targetPrice', value)}
                error={errors.targetPrice}
                placeholder="0.00"
                step="0.01"
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
          </div>
        </div>

        {/* Delivery Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <MapPin size={20} />
            Delivery Information
          </h3>
          <div className={styles.fieldsGrid}>
            <FormField
              label="Delivery Location"
              name="deliveryLocation"
              type="text"
              value={formData.deliveryLocation}
              onChange={(value) => handleInputChange('deliveryLocation', value)}
              error={errors.deliveryLocation}
              placeholder="City, Country or Full Address"
              required
            />

            <FormField
              label="Delivery Timeframe"
              name="deliveryTimeframe"
              type="select"
              value={formData.deliveryTimeframe}
              onChange={(value) => handleInputChange('deliveryTimeframe', value)}
              options={[
                { value: 'ASAP', label: 'ASAP' },
                { value: '1-2 weeks', label: '1-2 weeks' },
                { value: '2-4 weeks', label: '2-4 weeks' },
                { value: '1-2 months', label: '1-2 months' },
                { value: '2-3 months', label: '2-3 months' },
                { value: '3+ months', label: '3+ months' }
              ]}
              placeholder="When do you need this?"
            />

            <FormField
              label="Additional Requirements (Optional)"
              name="additionalRequirements"
              type="textarea"
              value={formData.additionalRequirements}
              onChange={(value) => handleInputChange('additionalRequirements', value)}
              placeholder="Any special requirements, certifications needed, packaging preferences, etc."
              rows={3}
            />
          </div>
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
                <span>Sending Request...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Request Quote</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyerForm;