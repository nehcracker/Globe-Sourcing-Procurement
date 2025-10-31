// Src/components/Financing/FinancingForm/SubmissionSuccess.jsx
import React from 'react';
import { CheckCircle, Mail, FileText, Clock, ArrowRight, Download, Home } from 'lucide-react';
import styles from './SubmissionSuccess.module.css';

const SubmissionSuccess = ({ referenceNumber, email, companyName }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const nextSteps = [
    {
      icon: <Mail size={24} />,
      title: 'Check Your Email',
      description: `We've sent a confirmation email to ${email} with your application details and reference number.`,
      time: 'Immediate'
    },
    {
      icon: <FileText size={24} />,
      title: 'Document Upload Link',
      description: 'Within 24 hours, you\'ll receive a secure link to upload the required documents.',
      time: 'Within 24 hours'
    },
    {
      icon: <Clock size={24} />,
      title: 'Application Review',
      description: 'Our team will review your application and documents thoroughly.',
      time: '48-72 hours'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Decision & Next Steps',
      description: 'We\'ll contact you with our financing decision and detailed next steps.',
      time: '3-5 business days'
    }
  ];

  const requiredDocuments = [
    'Company Registration Certificate',
    'Financial Statements (Last 2 years)',
    'Bank Reference Letter',
    'Trade Contract or Proforma Invoice',
    'Director/Owner Valid ID',
    'Tax Registration Certificate'
  ];

  return (
    <section className={styles.successPage}>
      <div className={styles.container}>
        {/* Success Header */}
        <div className={styles.successHeader}>
          <div className={styles.successIcon}>
            <CheckCircle size={64} />
          </div>
          <h1 className={styles.successTitle}>Application Submitted Successfully!</h1>
          <p className={styles.successSubtitle}>
            Thank you, <strong>{companyName}</strong>, for applying for trade financing with 
            Globe Sourcing Procurement.
          </p>
        </div>

        {/* Reference Number Card */}
        <div className={styles.referenceCard}>
          <div className={styles.referenceLabel}>Your Application Reference Number</div>
          <div className={styles.referenceNumber}>{referenceNumber}</div>
          <p className={styles.referenceNote}>
            Please save this reference number for future correspondence and tracking your application status.
          </p>
          <button onClick={handlePrint} className={styles.printButton}>
            <Download size={18} />
            <span>Save/Print Confirmation</span>
          </button>
        </div>

        {/* Next Steps Section */}
        <div className={styles.nextStepsSection}>
          <h2 className={styles.sectionTitle}>What Happens Next?</h2>
          
          <div className={styles.stepsTimeline}>
            {nextSteps.map((step, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineIcon}>
                  {step.icon}
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineTime}>{step.time}</div>
                  <h3 className={styles.timelineTitle}>{step.title}</h3>
                  <p className={styles.timelineDescription}>{step.description}</p>
                </div>
                {index < nextSteps.length - 1 && (
                  <div className={styles.timelineConnector}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Documents Reminder Section */}
        <div className={styles.documentsSection}>
          <h2 className={styles.sectionTitle}>
            <FileText size={24} />
            Documents to Prepare
          </h2>
          <p className={styles.documentsIntro}>
            While waiting for the document upload link, please prepare the following documents:
          </p>
          
          <div className={styles.documentsList}>
            {requiredDocuments.map((doc, index) => (
              <div key={index} className={styles.documentItem}>
                <CheckCircle size={18} className={styles.documentIcon} />
                <span>{doc}</span>
              </div>
            ))}
          </div>

          <div className={styles.documentsNote}>
            <strong>Note:</strong> All documents should be clear, legible scans or photos. 
            Accepted formats: PDF, JPG, PNG (Max 5MB per file).
          </div>
        </div>

        {/* Important Information */}
        <div className={styles.infoCards}>
          <div className={styles.infoCard}>
            <Mail size={32} className={styles.infoIcon} />
            <h3 className={styles.infoTitle}>Check Your Inbox</h3>
            <p className={styles.infoText}>
              We've sent a confirmation email to <strong>{email}</strong>. 
              If you don't see it, please check your spam folder.
            </p>
          </div>

          <div className={styles.infoCard}>
            <Clock size={32} className={styles.infoIcon} />
            <h3 className={styles.infoTitle}>Processing Time</h3>
            <p className={styles.infoText}>
              Most applications are reviewed within 48-72 hours. Complex applications 
              may take up to 5 business days.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h3 className={styles.contactTitle}>Need Help or Have Questions?</h3>
          <p className={styles.contactText}>
            Our financing team is here to assist you. Contact us with your reference number.
          </p>
          <div className={styles.contactMethods}>
            <a href="mailto:financing@globesourceprocurement.com" className={styles.contactButton}>
              <Mail size={20} />
              <span>info@globesourceprocurement.com</span>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <button onClick={handleGoHome} className={styles.homeButton}>
            <Home size={20} />
            <span>Return to Homepage</span>
          </button>
          <a href="/services" className={styles.servicesButton}>
            <span>Explore Our Services</span>
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Final Message */}
        <div className={styles.finalMessage}>
          <p>
            Thank you for choosing Globe Sourcing Procurement for your trade financing needs. 
            We look forward to supporting your international business growth.
          </p>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.confetti}></div>
      </div>
    </section>
  );
};

export default SubmissionSuccess;

/* ========================================
   SubmissionSuccess.module.css (inline for artifact)
   ======================================== */

/* Note: Create this as a separate file: 
   Src/components/Financing/FinancingForm/SubmissionSuccess.module.css
   Copy all styles below into that file */