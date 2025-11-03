// src/components/Financing/FinancingForm/FormSidebar/SidebarCards/TrustBadges.jsx
import React from 'react';
import { Shield, ChevronDown, Users, DollarSign, Clock, Award, Lock, CheckCircle } from 'lucide-react';
import styles from './TrustBadges.module.css';

const TrustBadges = ({ isCollapsed, onToggle }) => {
  const stats = [
    {
      icon: <Users size={24} />,
      value: '500+',
      label: 'Clients Served',
      color: 'blue'
    },
    {
      icon: <DollarSign size={24} />,
      value: '$50M+',
      label: 'Financed Annually',
      color: 'green'
    },
    {
      icon: <Clock size={24} />,
      value: '48-72hrs',
      label: 'Review Time',
      color: 'orange'
    },
    {
      icon: <Award size={24} />,
      value: '98%',
      label: 'Satisfaction Rate',
      color: 'purple'
    }
  ];

  const features = [
    {
      icon: <Lock size={16} />,
      text: 'Bank-level encryption & security'
    },
    {
      icon: <CheckCircle size={16} />,
      text: 'ISO 27001 certified processes'
    },
    {
      icon: <Shield size={16} />,
      text: 'GDPR & data privacy compliant'
    },
    {
      icon: <Award size={16} />,
      text: 'Member of ICC Banking Commission'
    }
  ];

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader} onClick={onToggle}>
        <h3 className={styles.cardTitle}>
          <Shield size={20} />
          Why Choose Us
        </h3>
        <button
          className={`${styles.collapseButton} ${isCollapsed ? styles.collapsed : ''}`}
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
        >
          <ChevronDown size={20} />
        </button>
      </div>

      <div className={`${styles.cardContent} ${isCollapsed ? styles.collapsed : ''}`}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={`${styles.statItem} ${styles[stat.color]}`}>
              <div className={styles.statIcon}>
                {stat.icon}
              </div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.featuresList}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <span className={styles.featureText}>{feature.text}</span>
            </div>
          ))}
        </div>

        <div className={styles.trustNote}>
          <Shield size={16} />
          <span>
            Your data is protected with enterprise-grade security. We never share your information with third parties.
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;