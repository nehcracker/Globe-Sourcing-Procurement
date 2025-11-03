// src/components/Financing/FinancingForm/FormSidebar/SidebarCards/SupportCard.jsx
import React from 'react';
import { Headphones, Mail, Phone, MessageCircle, Clock } from 'lucide-react';
import styles from './SupportCard.module.css';

const SupportCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>
          <Headphones size={20} />
          Need Help?
        </h3>
      </div>

      <div className={styles.cardContent}>
        <p className={styles.supportText}>
          Our financing team is here to assist you with your application.
        </p>

        <div className={styles.contactMethods}>
          <a href="mailto:financing@globesourceprocurement.com" className={styles.contactButton}>
            <Mail size={18} />
            <div className={styles.contactInfo}>
              <div className={styles.contactLabel}>Email Us</div>
              <div className={styles.contactValue}>info@globesource.com</div>
            </div>
          </a>

          <a href="tel:+1234567890" className={styles.contactButton}>
            <Phone size={18} />
            <div className={styles.contactInfo}>
              <div className={styles.contactLabel}>Call Us</div>
              <div className={styles.contactValue}>+1 (234) 567-8900</div>
            </div>
          </a>

          <button className={styles.contactButton} onClick={() => alert('Chat feature coming soon!')}>
            <MessageCircle size={18} />
            <div className={styles.contactInfo}>
              <div className={styles.contactLabel}>Live Chat</div>
              <div className={styles.contactValue}>Start conversation</div>
            </div>
          </button>
        </div>

        <div className={styles.officeHours}>
          <Clock size={16} />
          <div className={styles.hoursInfo}>
            <div className={styles.hoursLabel}>Office Hours</div>
            <div className={styles.hoursValue}>Mon-Fri, 9AM-6PM EST</div>
          </div>
        </div>

        <div className={styles.responseTime}>
          We typically respond within <strong>2 hours</strong> during business hours
        </div>
      </div>
    </div>
  );
};

export default SupportCard;