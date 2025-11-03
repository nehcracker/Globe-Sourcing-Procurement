// src/components/Financing/FinancingForm/FormSidebar/SidebarCards/RequirementsCard.jsx
import React from 'react';
import { FileText, ChevronDown, CheckCircle, Download } from 'lucide-react';
import styles from './RequirementsCard.module.css';

const RequirementsCard = ({ isCollapsed, onToggle }) => {
  const documents = [
    {
      name: 'Company Registration',
      description: 'Certificate of incorporation',
      required: true,
      formats: 'PDF, JPG, PNG'
    },
    {
      name: 'Financial Statements',
      description: 'Last 2 years (audited)',
      required: true,
      formats: 'PDF, XLSX'
    },
    {
      name: 'Bank Reference',
      description: 'Recent bank statement',
      required: true,
      formats: 'PDF'
    },
    {
      name: 'Trade Contract',
      description: 'Contract or proforma invoice',
      required: true,
      formats: 'PDF, DOC'
    },
    {
      name: 'Director ID',
      description: 'Valid passport or national ID',
      required: true,
      formats: 'PDF, JPG'
    },
    {
      name: 'Tax Certificate',
      description: 'Tax or VAT registration',
      required: true,
      formats: 'PDF, JPG'
    }
  ];

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader} onClick={onToggle}>
        <h3 className={styles.cardTitle}>
          <FileText size={20} />
          Required Documents
        </h3>
        <button
          className={`${styles.collapseButton} ${isCollapsed ? styles.collapsed : ''}`}
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
        >
          <ChevronDown size={20} />
        </button>
      </div>

      <div className={`${styles.cardContent} ${isCollapsed ? styles.collapsed : ''}`}>
        <div className={styles.intro}>
          <p className={styles.introText}>
            You'll need these documents after submission. Start preparing them now to speed up the process.
          </p>
        </div>

        <div className={styles.documentsList}>
          {documents.map((doc, index) => (
            <div key={index} className={styles.documentItem}>
              <div className={styles.documentIcon}>
                <CheckCircle size={16} />
              </div>
              <div className={styles.documentInfo}>
                <div className={styles.documentName}>
                  {doc.name}
                  {doc.required && <span className={styles.requiredBadge}>Required</span>}
                </div>
                <div className={styles.documentDescription}>{doc.description}</div>
                <div className={styles.documentFormats}>
                  <span className={styles.formatsLabel}>Formats:</span> {doc.formats}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.requirements}>
          <h4 className={styles.requirementsTitle}>File Requirements</h4>
          <ul className={styles.requirementsList}>
            <li>Maximum file size: <strong>5MB per file</strong></li>
            <li>Clear, legible scans or photos</li>
            <li>Documents must be in <strong>English</strong> or with certified translation</li>
            <li>All pages visible and readable</li>
          </ul>
        </div>

        <button
          type="button"
          className={styles.downloadTemplate}
          onClick={(e) => {
            e.preventDefault();
            // TODO: implement download action or open checklist
          }}
          aria-label="Download Document Checklist"
        >
          <Download size={16} />
          Download Document Checklist
        </button>
      </div>
    </div>
  );
};

export default RequirementsCard;