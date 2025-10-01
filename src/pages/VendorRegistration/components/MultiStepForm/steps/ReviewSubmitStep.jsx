// src/pages/VendorRegistration/components/MultiStepForm/steps/ReviewSubmitStep.jsx
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  AlertCircle, 
  Building, 
  Package, 
  Award, 
  FileText, 
  Edit3, 
  Eye,
  Mail,
  Phone,
  Globe,
  DollarSign
} from 'lucide-react';
import styles from './ReviewSubmitStep.module.css';

const ReviewSubmitStep = ({ formData, updateValidation, onEditStep }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const isValid = termsAccepted && privacyAccepted;
    updateValidation(4, isValid, isValid ? {} : { 
      terms: 'Please accept the terms and conditions and privacy policy' 
    });
  }, [termsAccepted, privacyAccepted, updateValidation]);

  const handleEditClick = (stepNumber) => {
    if (onEditStep) {
      onEditStep(stepNumber);
    }
  };

  const formatCurrency = (amount, currency = 'USD') => {
    const currencySymbols = {
      'USD': '$', 'EUR': '€', 'GBP': '£', 'CNY': '¥', 'JPY': '¥',
      'KRW': '₩', 'INR': '₹', 'CAD': 'C$', 'AUD': 'A$', 'BRL': 'R$', 'KES': 'KSh'
    };
    const symbol = currencySymbols[currency] || '$';
    return `${symbol}${parseFloat(amount || 0).toLocaleString()}`;
  };

  const getCompletionStatus = () => {
    const requiredFields = [
      formData.companyName,
      formData.email,
      formData.contactPerson,
      formData.phone,
      formData.country,
      formData.productCategory,
      formData.productDescription,
      formData.moq,
      formData.packaging,
      formData.unitPrice
    ];
    
    const completedFields = requiredFields.filter(field => field && field.toString().trim()).length;
    return Math.round((completedFields / requiredFields.length) * 100);
  };

  const calculateOrderValue = () => {
    const price = parseFloat(formData.unitPrice || 0);
    const qty = parseFloat(formData.moq || 0);
    return price * qty;
  };

  return (
    <div className={styles.reviewSubmitStep}>
      <div className={styles.stepHeader}>
        <h3 className={styles.stepTitle}>
          <CheckCircle size={24} className={styles.titleIcon} />
          Review & Submit Application
        </h3>
        <p className={styles.stepDescription}>
          Please review all your information carefully before submitting your vendor application.
        </p>
      </div>

      {/* Completion Status */}
      <div className={styles.completionStatus}>
        <div className={styles.statusHeader}>
          <span className={styles.statusIcon}>📊</span>
          <h4>Application Status</h4>
          <span className={styles.completionPercent}>{getCompletionStatus()}% Complete</span>
        </div>
        <div className={styles.statusBar}>
          <div 
            className={styles.statusFill}
            style={{ width: `${getCompletionStatus()}%` }}
          />
        </div>
        <div className={styles.statusMessage}>
          {getCompletionStatus() === 100 ? (
            <span className={styles.successMessage}>
              <CheckCircle size={16} />
              Your application is complete and ready for submission!
            </span>
          ) : (
            <span className={styles.warningMessage}>
              <AlertCircle size={16} />
              Please complete all required fields before submitting
            </span>
          )}
        </div>
      </div>

      <div className={styles.reviewSections}>
        {/* Company Information Review */}
        <div className={styles.reviewSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>
              <Building size={20} />
              <h4>Company Information</h4>
            </div>
            <button 
              type="button" 
              onClick={() => handleEditClick(1)}
              className={styles.editButton}
              title="Edit company information"
            >
              <Edit3 size={16} />
              Edit
            </button>
          </div>

          <div className={styles.reviewGrid}>
            <div className={styles.reviewItem}>
              <div className={styles.itemIcon}><Building size={16} /></div>
              <div className={styles.itemContent}>
                <strong>Company Name</strong>
                <span>{formData.companyName || 'Not provided'}</span>
              </div>
            </div>
            <div className={styles.reviewItem}>
              <div className={styles.itemIcon}><Mail size={16} /></div>
              <div className={styles.itemContent}>
                <strong>Email Address</strong>
                <span>{formData.email || 'Not provided'}</span>
              </div>
            </div>
            <div className={styles.reviewItem}>
              <div className={styles.itemIcon}><FileText size={16} /></div>
              <div className={styles.itemContent}>
                <strong>Contact Person</strong>
                <span>{formData.contactPerson || 'Not provided'}</span>
              </div>
            </div>
            <div className={styles.reviewItem}>
              <div className={styles.itemIcon}><Phone size={16} /></div>
              <div className={styles.itemContent}>
                <strong>Phone Number</strong>
                <span>{formData.phone || 'Not provided'}</span>
              </div>
            </div>
            <div className={styles.reviewItem}>
              <div className={styles.itemIcon}><Globe size={16} /></div>
              <div className={styles.itemContent}>
                <strong>Country</strong>
                <span>{formData.country || 'Not provided'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Review */}
        <div className={styles.reviewSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>
              <Package size={20} />
              <h4>Product Information</h4>
            </div>
            <button 
              type="button" 
              onClick={() => handleEditClick(2)}
              className={styles.editButton}
              title="Edit product information"
            >
              <Edit3 size={16} />
              Edit
            </button>
          </div>

          <div className={styles.reviewGrid}>
            <div className={styles.reviewItem}>
              <div className={styles.itemIcon}><Package size={16} /></div>
              <div className={styles.itemContent}>
                <strong>Product Category</strong>
                <span>{formData.productCategory || 'Not selected'}</span>
              </div>
            </div>
            {formData.productSubcategory && (
              <div className={styles.reviewItem}>
                <div className={styles.itemIcon}><FileText size={16} /></div>
                <div className={styles.itemContent}>
                  <strong>Subcategory</strong>
                  <span>{formData.productSubcategory}</span>
                </div>
              </div>
            )}
            <div className={styles.reviewItem}>
              <div className={styles.itemIcon}><Package size={16} /></div>
              <div className={styles.itemContent}>
                <strong>Minimum Order Qty</strong>
                <span>{formData.moq ? `${parseInt(formData.moq).toLocaleString()} units` : 'Not specified'}</span>
              </div>
            </div>
            <div className={styles.reviewItem}>
              <div className={styles.itemIcon}><Package size={16} /></div>
              <div className={styles.itemContent}>
                <strong>Packaging Type</strong>
                <span>{formData.packaging || 'Not specified'}</span>
              </div>
            </div>
            <div className={styles.reviewItem}>
              <div className={styles.itemIcon}><DollarSign size={16} /></div>
              <div className={styles.itemContent}>
                <strong>Unit Price</strong>
                <span>
                  {formData.unitPrice && formData.currency 
                    ? formatCurrency(formData.unitPrice, formData.currency)
                    : 'Not specified'
                  }
                </span>
              </div>
            </div>
            <div className={styles.reviewItem}>
              <div className={styles.itemIcon}><DollarSign size={16} /></div>
              <div className={styles.itemContent}>
                <strong>Min Order Value</strong>
                <span>
                  {formData.unitPrice && formData.moq && formData.currency
                    ? formatCurrency(calculateOrderValue(), formData.currency)
                    : 'Not calculated'
                  }
                </span>
              </div>
            </div>
          </div>

          {/* Product Description */}
          {formData.productDescription && (
            <div className={styles.descriptionSection}>
              <strong>Product Description:</strong>
              <div className={styles.descriptionText}>
                {formData.productDescription}
              </div>
            </div>
          )}

          {/* Product Images */}
          {formData.productImages && formData.productImages.length > 0 && (
            <div className={styles.imagesSection}>
              <strong>Product Images ({formData.productImages.length}):</strong>
              <div className={styles.imagePreviewGrid}>
                {formData.productImages.map((image, index) => (
                  <div key={image.id || index} className={styles.imagePreview}>
                    <img src={image.url} alt={image.name} />
                    <span className={styles.imageName}>{image.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Business Credentials Review */}
        <div className={styles.reviewSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>
              <Award size={20} />
              <h4>Business Credentials</h4>
            </div>
            <button 
              type="button" 
              onClick={() => handleEditClick(3)}
              className={styles.editButton}
              title="Edit business credentials"
            >
              <Edit3 size={16} />
              Edit
            </button>
          </div>

          {formData.certifications ? (
            <div className={styles.descriptionSection}>
              <strong>Certifications & Standards:</strong>
              <div className={styles.descriptionText}>
                {formData.certifications}
              </div>
            </div>
          ) : (
            <div className={styles.emptySection}>
              <span>No certifications provided</span>
            </div>
          )}

          {/* Documents */}
          {formData.documents && formData.documents.length > 0 ? (
            <div className={styles.documentsSection}>
              <strong>Supporting Documents ({formData.documents.length}):</strong>
              <div className={styles.documentsList}>
                {formData.documents.map((doc, index) => (
                  <div key={doc.id || index} className={styles.documentItem}>
                    <FileText size={16} className={styles.docIcon} />
                    <span className={styles.docName}>{doc.name}</span>
                    <span className={styles.docSize}>
                      {(doc.size / 1024 / 1024).toFixed(1)}MB
                    </span>
                    <button 
                      type="button" 
                      onClick={() => window.open(doc.url, '_blank')}
                      className={styles.previewButton}
                      title="Preview document"
                    >
                      <Eye size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.emptySection}>
              <span>No documents uploaded</span>
            </div>
          )}
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className={styles.termsSection}>
        <h4 className={styles.termsTitle}>Terms & Conditions</h4>
        
        <div className={styles.termsContent}>
          <div className={styles.termsOverview}>
            <p>By submitting this application, you agree to our vendor terms and privacy policy:</p>
            <ul>
              <li>Provide accurate and truthful information about your company and products</li>
              <li>Maintain quality standards as described in your application</li>
              <li>Honor the minimum order quantities and pricing specified</li>
              <li>Comply with Globe Sourcing Procurement's vendor guidelines and policies</li>
              <li>Allow verification of your business credentials and certifications</li>
              <li>Accept our payment terms and commission structure</li>
            </ul>
            
            <button 
              type="button"
              onClick={() => setShowTerms(!showTerms)}
              className={styles.showTermsButton}
            >
              {showTerms ? 'Hide' : 'Show'} Full Terms & Privacy Policy
            </button>
          </div>

          {showTerms && (
            <div className={styles.fullTerms}>
              <div className={styles.termsDocument}>
                <h5>Vendor Terms of Service</h5>
                <p>
                  These terms govern your relationship with Globe Sourcing Procurement as a vendor...
                  [In a real application, this would contain the full legal terms]
                </p>
                
                <h5>Privacy Policy</h5>
                <p>
                  We are committed to protecting your privacy and personal information...
                  [In a real application, this would contain the full privacy policy]
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Agreement Checkboxes */}
        <div className={styles.agreementSection}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <div className={styles.checkboxContent}>
              <span className={styles.checkboxText}>
                I accept the <strong>Terms of Service</strong> and agree to comply with all vendor guidelines *
              </span>
            </div>
          </label>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
            />
            <div className={styles.checkboxContent}>
              <span className={styles.checkboxText}>
                I accept the <strong>Privacy Policy</strong> and consent to data processing as described *
              </span>
            </div>
          </label>
        </div>
      </div>

      {/* Submission Summary */}
      <div className={styles.submissionSummary}>
        <div className={styles.summaryHeader}>
          <CheckCircle size={24} className={styles.summaryIcon} />
          <div>
            <h4>Ready to Submit</h4>
            <p>Your application will be reviewed within 24-48 hours</p>
          </div>
        </div>
        
        <div className={styles.summaryStats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{getCompletionStatus()}%</span>
            <span className={styles.statLabel}>Complete</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {(formData.documents?.length || 0) + (formData.productImages?.length || 0)}
            </span>
            <span className={styles.statLabel}>Files</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>24-48h</span>
            <span className={styles.statLabel}>Review Time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSubmitStep;