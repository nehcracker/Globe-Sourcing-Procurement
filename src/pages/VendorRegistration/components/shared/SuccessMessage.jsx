// src/pages/VendorRegistration/components/shared/SuccessMessage.jsx
import React from 'react';
import { CheckCircle, Download, Mail, Phone, RotateCcw } from 'lucide-react';
import styles from './SuccessMessage.module.css';

const SuccessMessage = ({
  title = "Application Submitted Successfully!",
  message = "Thank you for your vendor application. We'll review your information and get back to you within 24-48 hours.",
  referenceId = `VEN-${Date.now().toString().slice(-6)}`,
  onReset,
  showDownload = true,
  showContactInfo = true
}) => {
  const handleDownloadSummary = () => {
    // This would generate and download a PDF summary in a real implementation
    console.log('Downloading application summary...');
    
    // For now, create a simple text summary
    const summaryText = `
VENDOR APPLICATION SUMMARY
Reference ID: ${referenceId}
Submitted: ${new Date().toLocaleString()}
Status: Under Review

Thank you for your application. We will contact you within 24-48 hours.

Globe Sourcing Procurement
Email: info@globesourceprocurement.com
Phone: +44 (0) 20 7123 4567
    `;
    
    const blob = new Blob([summaryText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vendor-application-${referenceId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const contactEmail = () => {
    window.location.href = 'mailto:info@globesourceprocurement.com?subject=Vendor Application Follow-up - ' + referenceId;
  };

  const timeline = [
    {
      step: 1,
      title: "Application Received",
      description: "Your application has been successfully submitted",
      status: "completed",
      time: "Now"
    },
    {
      step: 2,
      title: "Initial Review",
      description: "Our team will review your company and product information",
      status: "pending",
      time: "Within 24 hours"
    },
    {
      step: 3,
      title: "Verification Process",
      description: "We'll verify your business credentials and certifications",
      status: "upcoming",
      time: "24-48 hours"
    },
    {
      step: 4,
      title: "Welcome Package",
      description: "If approved, you'll receive your vendor onboarding package",
      status: "upcoming",
      time: "48-72 hours"
    }
  ];

  return (
    <div className={styles.successMessage}>
      {/* Success Icon and Title */}
      <div className={styles.successHeader}>
        <div className={styles.successIcon}>
          <CheckCircle size={64} />
          <div className={styles.checkmarkAnimation}></div>
        </div>
        
        <h2 className={styles.successTitle}>{title}</h2>
        <p className={styles.successMessage}>{message}</p>
        
        <div className={styles.referenceId}>
          <span className={styles.referenceLabel}>Reference ID:</span>
          <code className={styles.referenceCode}>{referenceId}</code>
        </div>
      </div>

      {/* What Happens Next Timeline */}
      <div className={styles.timelineSection}>
        <h3 className={styles.timelineTitle}>What Happens Next?</h3>
        
        <div className={styles.timeline}>
          {timeline.map((item, index) => (
            <div key={item.step} className={`${styles.timelineItem} ${styles[item.status]}`}>
              <div className={styles.timelineMarker}>
                <span className={styles.stepNumber}>{item.step}</span>
                {item.status === 'completed' && <CheckCircle size={16} className={styles.completedIcon} />}
              </div>
              
              <div className={styles.timelineContent}>
                <h4 className={styles.timelineItemTitle}>{item.title}</h4>
                <p className={styles.timelineItemDescription}>{item.description}</p>
                <span className={styles.timelineTime}>{item.time}</span>
              </div>
              
              {index < timeline.length - 1 && <div className={styles.timelineConnector}></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        {showDownload && (
          <button 
            onClick={handleDownloadSummary}
            className={styles.downloadButton}
            type="button"
          >
            <Download size={18} />
            <span>Download Summary</span>
          </button>
        )}
        
        {showContactInfo && (
          <button 
            onClick={contactEmail}
            className={styles.contactButton}
            type="button"
          >
            <Mail size={18} />
            <span>Contact Us</span>
          </button>
        )}
        
        {onReset && (
          <button 
            onClick={onReset}
            className={styles.resetButton}
            type="button"
          >
            <RotateCcw size={18} />
            <span>Submit Another Application</span>
          </button>
        )}
      </div>

      {/* Contact Information */}
      {showContactInfo && (
        <div className={styles.contactInfo}>
          <h4 className={styles.contactTitle}>Need Help?</h4>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <Mail size={16} />
              <a href="mailto:info@globesourceprocurement.com">
                info@globesourceprocurement.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} />
              <a href="tel:+442071234567">
                +44 (0) 20 7123 4567
              </a>
            </div>
          </div>
          
          <p className={styles.responseTime}>
            💡 <strong>Quick Response:</strong> Most applications are reviewed within 24 hours during business days.
          </p>
        </div>
      )}

      {/* Background Decoration */}
      <div className={styles.backgroundDecoration}>
        <div className={styles.decorationCircle1}></div>
        <div className={styles.decorationCircle2}></div>
        <div className={styles.decorationCircle3}></div>
      </div>
    </div>
  );
};

export default SuccessMessage;