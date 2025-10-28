// src/components/Financing/WhatWeFinance/WhatWeFinance.jsx
import React, { useState } from 'react';
import { CheckCircle, Zap, TrendingUp, Shield, FileText, Globe } from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import FinanceCard from './FinanceCard';
import styles from './WhatWeFinance.module.css';

const WhatWeFinance = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  // Finance categories with detailed information
  const financeCategories = [
    {
      id: 1,
      title: 'Import Financing',
      icon: '📥',
      description: 'Complete financing solutions for importing machinery, raw materials, and finished products.',
      color: '#3b82f6',
      benefits: [
        'Pre-shipment financing for purchase orders',
        'Post-shipment financing for imports',
        'Working capital for imported goods',
        'Full value coverage on approved transactions'
      ],
      examples: [
        'Industrial machinery',
        'Raw materials',
        'Electronic components',
        'Textiles & fabrics',
        'Manufacturing equipment'
      ],
      documentationNeeded: [
        'Purchase order or proforma invoice',
        'Supplier quotation',
        'Company registration documents',
        'Bank references'
      ]
    },
    {
      id: 2,
      title: 'Export Financing',
      icon: '📤',
      description: 'Tailored financing for exporting minerals, agricultural commodities, and manufactured goods.',
      color: '#059669',
      benefits: [
        'Pre-shipment financing for production',
        'Post-shipment financing against exports',
        'Letter of credit acceptance',
        'Buyer credit arrangements'
      ],
      examples: [
        'Minerals & metals',
        'Agricultural products',
        'Textiles & apparel',
        'Manufactured goods',
        'Technology products'
      ],
      documentationNeeded: [
        'Sales contract with buyer',
        'Letter of credit or purchase order',
        'Shipper information',
        'Certificate of origin'
      ]
    },
    {
      id: 3,
      title: 'Commodity Trading',
      icon: '📊',
      description: 'Specialized financing for energy, metals, grains, and bulk commodity transactions.',
      color: '#f59e0b',
      benefits: [
        'Trade line financing for commodity deals',
        'Working capital for trading operations',
        'Back-to-back credit arrangements',
        'Dynamic discounting solutions'
      ],
      examples: [
        'Crude oil & petroleum',
        'Metals & precious minerals',
        'Agricultural commodities',
        'Bulk materials',
        'Energy products'
      ],
      documentationNeeded: [
        'Trading contracts',
        'Price quotations',
        'Bill of lading',
        'Quality certificates'
      ]
    },
    {
      id: 4,
      title: 'Trade Contracts',
      icon: '📋',
      description: 'Financing backed by verified supplier and buyer contracts with full documentation support.',
      color: '#8b5cf6',
      benefits: [
        'Contract-based financing',
        'Verified buyer & seller validation',
        'Document verification services',
        'Transaction confirmation'
      ],
      examples: [
        'B2B supply contracts',
        'Proforma invoices',
        'Purchase agreements',
        'Letters of intent',
        'Framework agreements'
      ],
      documentationNeeded: [
        'Signed trade contract',
        'Party identification documents',
        'Financial statements',
        'Company bank reference letter'
      ]
    },
    {
      id: 5,
      title: 'Structured Finance',
      icon: '⚙️',
      description: 'Complex financing solutions customized for large deals and specialized trade arrangements.',
      color: '#ec4899',
      benefits: [
        'Tailored payment terms',
        'Multi-party arrangements',
        'Supplier financing options',
        'Buyer credit programs'
      ],
      examples: [
        'Large value transactions',
        'Consortium arrangements',
        'Project-based financing',
        'Supply chain finance',
        'Reverse factoring solutions'
      ],
      documentationNeeded: [
        'Detailed deal structure',
        'All party documentation',
        'Financial analysis',
        'Risk assessment documents'
      ]
    },
    {
      id: 6,
      title: 'Bank Guarantees',
      icon: '🛡️',
      description: 'Performance and payment guarantees to secure trade transactions and reduce counterparty risk.',
      color: '#14b8a6',
      benefits: [
        'Bid bonds for tenders',
        'Performance guarantees',
        'Payment guarantees',
        'Advance payment protection'
      ],
      examples: [
        'Tender participation',
        'Contract performance',
        'Payment security',
        'Retention money protection',
        'Warranty guarantees'
      ],
      documentationNeeded: [
        'Contract or tender documents',
        'Quote from counterparty',
        'Company credentials',
        'Financial documentation'
      ]
    }
  ];

  const stats = [
    {
      label: 'Average Deal Value',
      value: '$500K - $5M',
      icon: <TrendingUp size={20} />
    },
    {
      label: 'Approval Time',
      value: '48-72 Hours',
      icon: <Zap size={20} />
    },
    {
      label: 'Countries Covered',
      value: '50+',
      icon: <Globe size={20} />
    },
    {
      label: 'Financing Options',
      value: '6+',
      icon: <FileText size={20} />
    }
  ];

  return (
    <section 
      className={styles.whatWeFinance}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>What We Finance</h2>
          <p className={styles.subtitle}>
            Comprehensive financing solutions covering all aspects of international trade, 
            from imports and exports to complex commodity transactions and structured deals.
          </p>
        </div>

        {/* Quick Stats */}
        <div className={`${styles.statsSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={styles.statCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Finance Categories Grid */}
        <div className={`${styles.categoriesGrid} ${isVisible ? styles.visible : ''}`}>
          {financeCategories.map((category, index) => (
            <FinanceCard
              key={category.id}
              category={category}
              index={index}
              isExpanded={expandedCategory === category.id}
              onToggle={() => setExpandedCategory(
                expandedCategory === category.id ? null : category.id
              )}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Feature Highlights */}
        <div className={`${styles.highlightsSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.highlightsTitle}>Why Choose Our Financing?</h3>
          
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <CheckCircle size={24} />
              </div>
              <h4 className={styles.highlightTitle}>Verified Transactions</h4>
              <p className={styles.highlightDesc}>
                All transactions are thoroughly verified and validated before financing approval
              </p>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <Zap size={24} />
              </div>
              <h4 className={styles.highlightTitle}>Fast Turnaround</h4>
              <p className={styles.highlightDesc}>
                Financing approval within 48-72 hours of complete document submission
              </p>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <Shield size={24} />
              </div>
              <h4 className={styles.highlightTitle}>Secure & Safe</h4>
              <p className={styles.highlightDesc}>
                End-to-end encryption and secure transaction processing with compliance checks
              </p>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <TrendingUp size={24} />
              </div>
              <h4 className={styles.highlightTitle}>Competitive Rates</h4>
              <p className={styles.highlightDesc}>
                Transparent pricing with competitive rates and no hidden fees on approvals
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h3>Don't see your financing need?</h3>
            <p>
              Contact our team to discuss custom financing solutions tailored to your specific 
              trade requirements and transaction structure.
            </p>
          </div>
          <button className={styles.ctaButton}>
            <span>Contact Our Team</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
        <div className={styles.bgShape3}></div>
      </div>
    </section>
  );
};

export default WhatWeFinance;