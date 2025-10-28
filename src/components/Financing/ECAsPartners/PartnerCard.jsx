// src/components/Financing/ECAsPartners/PartnerCard.jsx
import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';
import styles from './ECAsPartners.module.css';

const PartnerCard = ({ partner, index, isVisible, regionColor }) => {
  // Extract country code from flag emoji to get color
  const getCountryServices = (country) => {
    // Default services for all partners
    return [
      'Trade Finance',
      'Export Credit',
      'Risk Coverage',
      'Payment Guarantee'
    ];
  };

  return (
    <div
      className={`${styles.partnerCard} ${isVisible ? styles.visible : ''}`}
      style={{ 
        '--region-color': regionColor,
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Card Header */}
      <div className={styles.cardHeader}>
        <div className={styles.partnerFlag}>{partner.flag}</div>
        <div className={styles.partnerInfo}>
          <h4 className={styles.partnerName}>{partner.name}</h4>
          <p className={styles.partnerCountry}>{partner.country}</p>
        </div>
        <ExternalLink className={styles.externalIcon} size={20} />
      </div>

      {/* Services */}
      <div className={styles.services}>
        <h5 className={styles.servicesTitle}>Key Services</h5>
        <ul className={styles.servicesList}>
          {getCountryServices(partner.country).map((service, idx) => (
            <li key={idx} className={styles.serviceItem}>
              <CheckCircle size={14} />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover Action */}
      <div className={styles.cardAction}>
        <span>Learn More</span>
        <ExternalLink size={16} />
      </div>
    </div>
  );
};

export default PartnerCard;