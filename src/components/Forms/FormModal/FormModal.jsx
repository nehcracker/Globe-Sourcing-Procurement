// src/components/Forms/FormModal/FormModal.jsx
import React, { useEffect } from 'react';
import { X, Building2, ShoppingCart } from 'lucide-react';
import styles from './FormModal.module.css';

const FormModal = ({ 
  isOpen, 
  onClose, 
  children, 
  title, 
  type = 'vendor' // 'vendor' | 'buyer'
}) => {
  // Handle escape key and prevent background scroll
  useEffect(() => {
    if (isOpen) {
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      // Prevent background scroll
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const Icon = type === 'vendor' ? Building2 : ShoppingCart;

  return (
    <div 
      className={styles.modalOverlay}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={`${styles.modalContainer} ${styles[type]}`}>
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerContent}>
            <div className={styles.headerIcon}>
              <Icon size={24} />
            </div>
            <div className={styles.headerText}>
              <h2 id="modal-title" className={styles.modalTitle}>
                {title}
              </h2>
              <p className={styles.modalSubtitle}>
                {type === 'vendor' 
                  ? 'Join our global marketplace and expand your business reach'
                  : 'Get competitive quotes from verified suppliers worldwide'
                }
              </p>
            </div>
          </div>
          
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className={styles.modalContent}>
          {children}
        </div>

        {/* Progress Indicator */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div className={`${styles.progressFill} ${styles[type]}`}></div>
          </div>
          <span className={styles.progressText}>
            Secure & confidential
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormModal;