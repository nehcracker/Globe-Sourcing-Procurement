// src/components/Financing/FinancingCTA/FinancingCTA.jsx
import React from 'react';
import { 
  ArrowRight, 
  CreditCard, 
  Shield, 
  Globe,
  Zap,
  Package,
  Building,
  Smartphone,
  MessageCircle,
  /*Phone */
} from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './FinancingCTA.module.css';

const FinancingCTA = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const supportedIndustries = [
    {
      name: 'Agricultural Products & Commodities',
      icon: <Package size={24} />,
      description: 'Financing for agricultural exports, commodity trading, and food processing'
    },
    {
      name: 'Minerals, Oil & Gas',
      icon: <Zap size={24} />,
      description: 'Energy sector financing, mining operations, and petroleum product trading'
    },
    {
      name: 'Manufacturing & Raw Materials',
      icon: <Building size={24} />,
      description: 'Industrial manufacturing, raw material procurement, and equipment financing'
    },
    {
      name: 'Consumer Goods & Distribution',
      icon: <Package size={24} />,
      description: 'Retail product sourcing, wholesale distribution, and consumer electronics'
    },
    {
      name: 'Construction & Infrastructure',
      icon: <Building size={24} />,
      description: 'Construction materials, infrastructure projects, and heavy equipment'
    },
    {
      name: 'Technology & Electronics',
      icon: <Smartphone size={24} />,
      description: 'Tech product sourcing, electronic components, and IT equipment'
    }
  ];

  const stats = [
    { number: '$50M+', label: 'Trade Volume Financed', icon: <CreditCard size={24} /> },
    { number: '500+', label: 'Financing Deals Completed', icon: <Shield size={24} /> },
    { number: '50+', label: 'Countries Covered', icon: <Globe size={24} /> },
    { number: '99%', label: 'Success Rate', icon: <ArrowRight size={24} /> }
  ];

  return (
    <section className={styles.financingCTA} ref={sectionRef}>
      <div className={styles.container}>
        {/* Industries We Support */}
        <div className={`${styles.industriesSection} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.industriesTitle}>Industries We Support</h2>
          <p className={styles.industriesSubtitle}>
            Our financing solutions cover a wide range of industries and sectors worldwide
          </p>
          
          <div className={styles.industriesGrid}>
            {supportedIndustries.map((industry, index) => (
              <div 
                key={index}
                className={styles.industryCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.industryIcon}>
                  {industry.icon}
                </div>
                <h3 className={styles.industryName}>{industry.name}</h3>
                <p className={styles.industryDescription}>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`${styles.statsSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={styles.statCard}
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
              >
                <div className={styles.statIcon}>
                  {stat.icon}
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA Section */}
        <div className={`${styles.mainCTA} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Finance Your Global Trade?</h2>
            <p className={styles.ctaDescription}>
              Get started with our comprehensive financing solutions. Our expert team 
              is ready to help you secure the funding you need for successful international 
              trade transactions.
            </p>
            
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCTA}>
                <span>Get Financing Quote</span>
                <ArrowRight size={20} />
                <div className={styles.buttonRipple}></div>
              </button>
              
              <button className={styles.secondaryCTA}>
                <MessageCircle size={18} />
                <span>Schedule Consultation</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={styles.trustIndicators}>
              <div className={styles.trustItem}>
                <Shield size={20} />
                <span>ECA Backed</span>
              </div>
              <div className={styles.trustItem}>
                <Globe size={20} />
                <span>Global Coverage</span>
              </div>
              <div className={styles.trustItem}>
                <CreditCard size={20} />
                <span>Flexible Terms</span>
              </div>
            </div>
          </div>

          <div className={styles.ctaVisual}>
            {/* Visual elements representing financing */}
            <div className={styles.financingIcons}>
              <div className={styles.floatingIcon} style={{ '--delay': '0s' }}>
                <CreditCard size={28} />
              </div>
              <div className={styles.floatingIcon} style={{ '--delay': '1s' }}>
                <Shield size={24} />
              </div>
              <div className={styles.floatingIcon} style={{ '--delay': '2s' }}>
                <Globe size={26} />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`${styles.contactInfo} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.contactContent}>
            <h3 className={styles.contactTitle}>Need More Information?</h3>
            <p className={styles.contactDescription}>
              Contact our financing specialists for personalized consultation
            </p>
            
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <MessageCircle size={20} />
                </div>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>Email Us</span>
                  <span className={styles.contactValue}>financing@globesourceprocurement.com</span>
                </div>
              </div>
              
              {/* Uncomment when phone number is available
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <Phone size={20} />
                </div>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>Call Us</span>
                  <span className={styles.contactValue}>+44-XXX-XXXXXX</span>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
        <div className={styles.bgPattern}></div>
      </div>
    </section>
  );
};

export default FinancingCTA;