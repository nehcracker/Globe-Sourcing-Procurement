// src/components/Financing/FinancingForm/FormSidebar/SidebarCards/ApplicationSummary.jsx
import React from 'react';
import { FileText, ChevronDown, Edit2, Building, DollarSign, Package } from 'lucide-react';
import styles from './ApplicationSummary.module.css';

const ApplicationSummary = ({ formData, currentStep, isCollapsed, onToggle, onEditClick }) => {
  const formatCurrency = (amount, currency = 'USD') => {
    if (!amount) return 'Not specified';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency || 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getSummaryItems = () => {
    const items = [];

    if (formData.companyName) {
      items.push({
        icon: <Building size={16} />,
        label: 'Company',
        value: formData.companyName,
        step: 1
      });
    }

    if (formData.country) {
      items.push({
        icon: <Building size={16} />,
        label: 'Country',
        value: formData.country,
        step: 1
      });
    }

    if (formData.transactionType) {
      items.push({
        icon: <Package size={16} />,
        label: 'Transaction Type',
        value: formData.transactionType.replace('_', ' ').toUpperCase(),
        step: 2
      });
    }

    if (formData.transactionValue) {
      items.push({
        icon: <DollarSign size={16} />,
        label: 'Transaction Value',
        value: formatCurrency(formData.transactionValue, formData.currency),
        step: 2
      });
    }

    if (formData.financingAmount) {
      items.push({
        icon: <DollarSign size={16} />,
        label: 'Financing Amount',
        value: formatCurrency(formData.financingAmount, 'USD'),
        step: 3
      });
    }

    if (formData.repaymentPeriod) {
      const period = formData.repaymentPeriod;
      let periodText = period;
      
      if (period === '30') periodText = '30 days';
      else if (period === '60') periodText = '60 days';
      else if (period === '90') periodText = '90 days';
      else if (period === '180') periodText = '6 months';
      else if (period === '365') periodText = '1 year';
      
      items.push({
        icon: <DollarSign size={16} />,
        label: 'Repayment Period',
        value: periodText,
        step: 3
      });
    }

    return items;
  };

  const summaryItems = getSummaryItems();

  if (summaryItems.length === 0) {
    return null;
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader} onClick={onToggle}>
        <h3 className={styles.cardTitle}>
          <FileText size={20} />
          Application Summary
        </h3>
        <button
          className={`${styles.collapseButton} ${isCollapsed ? styles.collapsed : ''}`}
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
        >
          <ChevronDown size={20} />
        </button>
      </div>

      <div className={`${styles.cardContent} ${isCollapsed ? styles.collapsed : ''}`}>
        <div className={styles.summaryList}>
          {summaryItems.map((item, index) => (
            <div key={index} className={styles.summaryItem}>
              <div className={styles.summaryIcon}>
                {item.icon}
              </div>
              <div className={styles.summaryInfo}>
                <div className={styles.summaryLabel}>{item.label}</div>
                <div className={styles.summaryValue}>{item.value}</div>
              </div>
              {onEditClick && item.step < currentStep && (
                <button
                  className={styles.editButton}
                  onClick={() => onEditClick(item.step)}
                  aria-label={`Edit ${item.label}`}
                >
                  <Edit2 size={14} />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className={styles.summaryNote}>
          You can edit any step by clicking the "Previous" button or using the edit icons above.
        </div>
      </div>
    </div>
  );
};

export default ApplicationSummary;