// src/components/Services/ServiceCard.jsx
import React from 'react';
import { Globe, Package, Truck, CheckCircle, DollarSign, ShoppingCart } from 'lucide-react';
import styles from './ServiceCard.module.css';

// Icon mapping for service cards
const iconMap = {
  Globe: Globe,
  Package: Package,
  Truck: Truck,
  DollarSign: DollarSign,
  ShoppingCart: ShoppingCart,
  CheckCircle: CheckCircle
};

const ServiceCard = ({ service, index, isVisible }) => {
  const IconComponent = iconMap[service.icon] || Globe;

  return (
    <div 
      className={`${styles.serviceCard} ${isVisible ? styles.visible : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Card Header */}
      <div className={styles.cardHeader}>
        <div className={styles.iconContainer}>
          <IconComponent size={32} className={styles.icon} />
        </div>
        <h3 className={styles.serviceTitle}>{service.title}</h3>
      </div>

      {/* Card Content */}
      <div className={styles.cardContent}>
        <p className={styles.serviceDescription}>
          {service.description}
        </p>

        {/* Features List */}
        <ul className={styles.featuresList}>
          {service.features.map((feature, featureIndex) => (
            <li 
              key={featureIndex} 
              className={styles.feature}
              style={{ animationDelay: `${(index * 0.2) + (featureIndex * 0.1) + 0.5}s` }}
            >
              <CheckCircle size={16} className={styles.featureIcon} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer */}
      <div className={styles.cardFooter}>
        <button className={styles.learnMoreBtn}>
          <span className={styles.btnText}>Learn More</span>
          <div className={styles.btnIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.btnRipple}></div>
        </button>
      </div>

      {/* Background decoration */}
      <div className={styles.cardDecoration}></div>
    </div>
  );
};

export default ServiceCard;