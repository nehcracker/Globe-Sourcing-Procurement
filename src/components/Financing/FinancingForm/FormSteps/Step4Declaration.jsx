// Src/components/Financing/FinancingForm/FormSteps/Step4Declaration.jsx
import React from 'react';
import { FileText, Shield, AlertCircle, CheckCircle, Mail } from 'lucide-react';
import styles from './FormSteps.module.css';

const Step4Declaration = ({ formData, errors, onChange }) => {
  // Required documents list
  const requiredDocuments = [
    {
      name: 'Company Registration Certificate',
      description: 'Certificate of incorporation or business registration',
      icon: <FileText size={20} />
    },
    {
      name: 'Financial Statements',
      description: 'Last 2 years audited/certified financial statements',
      icon: <FileText size={20} />
    },
    {
      name: 'Bank Reference Letter',
      description: 'Recent bank reference or statement (last 6 months)',
      icon: <FileText size={20} />
    },
    {
      name: 'Trade Contract/Proforma Invoice',
      description: 'Contract, purchase order, or proforma invoice',
      icon: <FileText size={20} />
    },
    {
      name: 'Director/Owner ID',
      description: 'Valid passport or national ID of company director(s)',
      icon: <FileText size={20} />
    },
    {
      name: 'Tax Registration Certificate',
      description: 'Tax ID or VAT registration certificate',
      icon: <FileText size={20} />
    }
  ];

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    onChange({
      target: {
        name,
        value: checked
      }
    });
  };

  return (
    <div className={styles.stepContainer}>
      {/* Step Header */}
      <div className={styles.stepHeader}>
        <h2 className={styles.stepTitle}>Declaration & Submission</h2>
        <p className={styles.stepDescription}>
          Review the required documents and confirm your declarations before submitting your 
          financing application.
        </p>
      </div>

      {/* Required Documents Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          <FileText size={20} />
          Required Documents
        </h3>

        <div className={`${styles.infoBox} ${styles.warning}`}>
          <div className={styles.infoTitle}>
            <Mail size={18} />
            Document Submission Process
          </div>
          <p className={styles.infoText}>
            After submitting this form, we'll send you an email with detailed instructions on how 
            to securely upload the required documents. You'll receive a personalized document 
            checklist and a secure upload link.
          </p>
        </div>

        <ul className={styles.documentList}>
          {requiredDocuments.map((doc, index) => (
            <li key={index} className={styles.documentItem}>
              <div className={styles.documentIcon}>
                {doc.icon}
              </div>
              <div className={styles.documentContent}>
                <h4 className={styles.documentName}>{doc.name}</h4>
                <p className={styles.documentDesc}>{doc.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className={`${styles.infoBox}`}>
          <div className={styles.infoTitle}>
            <Shield size={18} />
            Document Security
          </div>
          <p className={styles.infoText}>
            All documents are transmitted through encrypted channels and stored securely. We follow 
            strict data protection protocols and comply with international data privacy regulations.
          </p>
        </div>
      </div>

      {/* Terms and Conditions Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          <CheckCircle size={20} />
          Terms & Declarations
        </h3>

        <div className={styles.checkboxGroup}>
          {/* Terms and Conditions */}
          <div className={`${styles.checkboxItem} ${errors.agreeTerms ? styles.error : ''}`}>
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms || false}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
              required
            />
            <label htmlFor="agreeTerms" className={styles.checkboxLabel}>
              <strong>I agree to the Terms and Conditions</strong>
              <br />
              I have read and agree to Globe Sourcing Procurement's terms and conditions for 
              trade financing services, including all fees, interest rates, and repayment terms.
            </label>
          </div>
          {errors.agreeTerms && (
            <span className={styles.errorText}>{errors.agreeTerms}</span>
          )}

          {/* Privacy Policy */}
          <div className={`${styles.checkboxItem} ${errors.agreePrivacy ? styles.error : ''}`}>
            <input
              type="checkbox"
              id="agreePrivacy"
              name="agreePrivacy"
              checked={formData.agreePrivacy || false}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
              required
            />
            <label htmlFor="agreePrivacy" className={styles.checkboxLabel}>
              <strong>I agree to the Privacy Policy</strong>
              <br />
              I consent to the collection, processing, and storage of my personal and business 
              information as outlined in the privacy policy. I understand my data will be used 
              for financing application processing and related services.
            </label>
          </div>
          {errors.agreePrivacy && (
            <span className={styles.errorText}>{errors.agreePrivacy}</span>
          )}

          {/* Declaration of Accuracy */}
          <div className={`${styles.checkboxItem} ${errors.declareAccuracy ? styles.error : ''}`}>
            <input
              type="checkbox"
              id="declareAccuracy"
              name="declareAccuracy"
              checked={formData.declareAccuracy || false}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
              required
            />
            <label htmlFor="declareAccuracy" className={styles.checkboxLabel}>
              <strong>I declare the accuracy of information</strong>
              <br />
              I confirm that all information provided in this application is true, accurate, and 
              complete to the best of my knowledge. I understand that providing false or misleading 
              information may result in the rejection of my application and potential legal consequences.
            </label>
          </div>
          {errors.declareAccuracy && (
            <span className={styles.errorText}>{errors.declareAccuracy}</span>
          )}

          {/* Marketing consent (optional) */}
          <div className={styles.checkboxItem}>
            <input
              type="checkbox"
              id="marketingConsent"
              name="marketingConsent"
              checked={formData.marketingConsent || false}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
            <label htmlFor="marketingConsent" className={styles.checkboxLabel}>
              <strong>Marketing Communications (Optional)</strong>
              <br />
              I would like to receive updates about new financing products, special offers, and 
              industry insights from Globe Sourcing Procurement.
            </label>
          </div>
        </div>
      </div>

      {/* What Happens Next Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          <AlertCircle size={20} />
          What Happens After Submission
        </h3>

        <div className={`${styles.infoBox} ${styles.success}`}>
          <div className={styles.infoTitle}>
            <CheckCircle size={18} />
            Application Review Process
          </div>
          <ul className={styles.infoList}>
            <li>
              <CheckCircle size={16} />
              <strong>Step 1:</strong> You'll receive an immediate confirmation email with your 
              application reference number
            </li>
            <li>
              <CheckCircle size={16} />
              <strong>Step 2:</strong> Within 24 hours, you'll get a secure document upload link 
              and detailed instructions
            </li>
            <li>
              <CheckCircle size={16} />
              <strong>Step 3:</strong> Our team will review your application and documents 
              (typically 48-72 hours)
            </li>
            <li>
              <CheckCircle size={16} />
              <strong>Step 4:</strong> We'll contact you with our financing decision and next steps
            </li>
            <li>
              <CheckCircle size={16} />
              <strong>Step 5:</strong> Upon approval, we'll finalize terms and arrange funding 
              disbursement
            </li>
          </ul>
        </div>

        <div className={styles.infoBox}>
          <div className={styles.infoTitle}>
            <Mail size={18} />
            Need Help?
          </div>
          <p className={styles.infoText}>
            If you have questions about this application or need assistance, please contact our 
            financing team at <strong>financing@globesourceprocurement.com</strong> or reference 
            your application number in all communications.
          </p>
        </div>
      </div>

      {/* Final CTA Info */}
      <div className={`${styles.infoBox} ${styles.warning}`}>
        <div className={styles.infoTitle}>
          <AlertCircle size={18} />
          Before You Submit
        </div>
        <p className={styles.infoText}>
          Please review all information carefully. You can use the "Previous" button to go back 
          and make changes. Once submitted, you'll receive a confirmation email and can track 
          your application status.
        </p>
      </div>
    </div>
  );
};

export default Step4Declaration;