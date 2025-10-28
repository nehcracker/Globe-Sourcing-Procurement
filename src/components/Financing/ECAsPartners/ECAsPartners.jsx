// src/components/Financing/ECAsPartners/ECAsPartners.jsx
import React, { useState } from 'react';
import { Globe, Award, TrendingUp, Shield, ChevronRight } from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import PartnerCard from './PartnerCard';
import { ECA_PARTNERS } from '../../../utils/constants';
import styles from './ECAsPartners.module.css';

const ECAsPartners = () => {
  const [activeRegion, setActiveRegion] = useState('europe');
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  // Region configuration with metadata
  const regions = [
    {
      id: 'europe',
      name: 'Europe',
      icon: '🇪🇺',
      description: 'Leading European export credit agencies',
      color: '#3b82f6'
    },
    {
      id: 'asia',
      name: 'Asia',
      icon: '🌏',
      description: 'Major Asian trade finance partners',
      color: '#059669'
    },
    {
      id: 'africa',
      name: 'Africa',
      icon: '🌍',
      description: 'African continent financing solutions',
      color: '#f59e0b'
    },
    {
      id: 'americas',
      name: 'Americas',
      icon: '🌎',
      description: 'North and South American partners',
      color: '#ec4899'
    }
  ];

  // Get active region data
  const activeRegionData = regions.find(r => r.id === activeRegion);
  const activePartners = ECA_PARTNERS[activeRegion] || [];

  // ECA Benefits
  const ecaBenefits = [
    {
      title: 'Government Backed',
      description: 'ECA support provides government-backed guarantees and risk mitigation',
      icon: <Shield size={24} />
    },
    {
      title: 'Competitive Rates',
      description: 'Access to favorable financing rates through official export credit agencies',
      icon: <TrendingUp size={24} />
    },
    {
      title: 'Global Recognition',
      description: 'Recognized globally, facilitating international trade and commerce',
      icon: <Award size={24} />
    },
    {
      title: 'Extended Terms',
      description: 'Longer repayment periods and flexible terms for trade transactions',
      icon: <Globe size={24} />
    }
  ];

  // What are ECAs
  const ecaInfo = {
    title: 'What are Export Credit Agencies (ECAs)?',
    description: 'Export Credit Agencies are government-owned or government-supported institutions that facilitate exports by providing financing, credit insurance, and guarantees to exporters and their foreign buyers. ECAs help manage political and commercial risks in international trade.',
    features: [
      'Government-backed financial institutions',
      'Provide financing, insurance, and guarantees',
      'Minimize political and commercial risks',
      'Support international trade growth',
      'Offer competitive rates and terms',
      'Enable cross-border transactions'
    ]
  };

  return (
    <section 
      className={styles.ecaPartners}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Our ECA Partners</h2>
          <p className={styles.subtitle}>
            We collaborate with leading Export Credit Agencies worldwide to provide 
            government-backed financing solutions and risk mitigation for your trade transactions.
          </p>
        </div>

        {/* What are ECAs Section */}
        <div className={`${styles.ecaInfoSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <Globe size={32} className={styles.infoIcon} />
              <h3 className={styles.infoTitle}>{ecaInfo.title}</h3>
            </div>
            <p className={styles.infoDescription}>{ecaInfo.description}</p>
            <div className={styles.infoFeatures}>
              {ecaInfo.features.map((feature, index) => (
                <div key={index} className={styles.infoFeature}>
                  <span className={styles.featureDot}></span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ECA Benefits Section */}
        <div className={`${styles.benefitsSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.benefitsTitle}>Why Work with ECAs?</h3>
          <div className={styles.benefitsGrid}>
            {ecaBenefits.map((benefit, index) => (
              <div 
                key={index}
                className={styles.benefitCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h4 className={styles.benefitCardTitle}>{benefit.title}</h4>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className={`${styles.partnersSection} ${isVisible ? styles.visible : ''}`}>
          {/* Region Tabs */}
          <div className={styles.regionTabs}>
            {regions.map((region) => (
              <button
                key={region.id}
                className={`${styles.regionTab} ${activeRegion === region.id ? styles.active : ''}`}
                onClick={() => setActiveRegion(region.id)}
                style={{ '--region-color': region.color }}
              >
                <span className={styles.regionIcon}>{region.icon}</span>
                <span className={styles.regionName}>{region.name}</span>
              </button>
            ))}
          </div>

          {/* Region Description */}
          <div className={styles.regionDescription}>
            <p>{activeRegionData?.description}</p>
          </div>

          {/* Partners Grid */}
          <div className={styles.partnersGrid}>
            {activePartners.length > 0 ? (
              activePartners.map((partner, index) => (
                <PartnerCard
                  key={index}
                  partner={partner}
                  index={index}
                  isVisible={isVisible}
                  regionColor={activeRegionData?.color}
                />
              ))
            ) : (
              <div className={styles.noPartners}>
                <p>No partners available for this region.</p>
              </div>
            )}
          </div>
        </div>

        {/* Coverage Stats */}
        <div className={`${styles.coverageStats} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.statsTitle}>Our ECA Network</h3>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>15+</div>
              <div className={styles.statLabel}>ECA Partners</div>
              <div className={styles.statSubtext}>Across 4 continents</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>50+</div>
              <div className={styles.statLabel}>Countries Covered</div>
              <div className={styles.statSubtext}>Global reach</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>$100M+</div>
              <div className={styles.statLabel}>Total Capacity</div>
              <div className={styles.statSubtext}>Available annually</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>99%</div>
              <div className={styles.statLabel}>Approval Rate</div>
              <div className={styles.statSubtext}>On qualified deals</div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className={`${styles.howItWorks} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.howTitle}>How ECA Financing Works</h3>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h4>Identify Need</h4>
                <p>Determine your ECA financing needs based on your trade transaction</p>
              </div>
              <ChevronRight className={styles.stepArrow} size={24} />
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h4>Apply for Coverage</h4>
                <p>Submit application with trade documents and party information</p>
              </div>
              <ChevronRight className={styles.stepArrow} size={24} />
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h4>Risk Assessment</h4>
                <p>ECA conducts comprehensive risk evaluation of the transaction</p>
              </div>
              <ChevronRight className={styles.stepArrow} size={24} />
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h4>Coverage Issued</h4>
                <p>Receive official ECA coverage and proceed with transaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h3>Need ECA-Backed Financing?</h3>
            <p>
              Connect with our team to explore ECA financing options for your trade transactions 
              and access government-backed solutions.
            </p>
          </div>
          <button className={styles.ctaButton}>
            <span>Explore ECA Options</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
      </div>
    </section>
  );
};

export default ECAsPartners;