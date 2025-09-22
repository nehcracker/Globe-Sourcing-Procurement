// src/components/Financing/ECASupport/ECASupport.jsx
import React from 'react';
import { Shield, Globe, TrendingUp, Users, CheckCircle } from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './ECASupport.module.css';

const ECASupport = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const ecaPartners = {
    europe: [
      { name: 'UK Export Finance', country: 'United Kingdom', flag: '🇬🇧' },
      { name: 'Euler Hermes', country: 'Germany', flag: '🇩🇪' },
      { name: 'SACE', country: 'Italy', flag: '🇮🇹' },
      { name: 'Coface', country: 'France', flag: '🇫🇷' }
    ],
    asia: [
      { name: 'Sinosure', country: 'China', flag: '🇨🇳' },
      { name: 'JBIC', country: 'Japan', flag: '🇯🇵' },
      { name: 'K-sure', country: 'South Korea', flag: '🇰🇷' },
      { name: 'ECGC', country: 'India', flag: '🇮🇳' }
    ],
    africa: [
      { name: 'Afreximbank', country: 'Africa', flag: '🌍' },
      { name: 'ECGC Kenya', country: 'Kenya', flag: '🇰🇪' },
      { name: 'CGIC', country: 'South Africa', flag: '🇿🇦' }
    ],
    americas: [
      { name: 'Ex-Im Bank', country: 'United States', flag: '🇺🇸' },
      { name: 'EDC', country: 'Canada', flag: '🇨🇦' },
      { name: 'BNDES', country: 'Brazil', flag: '🇧🇷' }
    ]
  };

  const ecaBenefits = [
    {
      icon: <Shield size={24} />,
      title: 'Risk Protection',
      description: 'Government-backed guarantees against non-payment and political risks'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Enhanced Access',
      description: 'Easier access to bank loans and competitive trade credit terms'
    },
    {
      icon: <Users size={24} />,
      title: 'Stronger Trust',
      description: 'Builds confidence between global suppliers and buyers'
    },
    {
      icon: <Globe size={24} />,
      title: 'Industry Coverage',
      description: 'Support across all industries from commodities to consumer goods'
    }
  ];

  return (
    <section className={styles.ecaSupport} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Export Credit Agency (ECA) Support</h2>
          <p className={styles.subtitle}>
            We partner with Export Credit Agencies worldwide to make financing more 
            accessible and secure for international trade transactions
          </p>
        </div>

        {/* ECA Benefits */}
        <div className={`${styles.benefitsGrid} ${isVisible ? styles.visible : ''}`}>
          {ecaBenefits.map((benefit, index) => (
            <div 
              key={index}
              className={styles.benefitCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.benefitIcon}>
                {benefit.icon}
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* ECA Partners Network */}
        <div className={`${styles.partnersSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.partnersTitle}>Our ECA Network</h3>
          
          <div className={styles.partnersGrid}>
            {/* Europe */}
            <div className={styles.regionCard}>
              <div className={styles.regionHeader}>
                <h4 className={styles.regionTitle}>Europe</h4>
                <div className={styles.regionIcon}>🇪🇺</div>
              </div>
              <div className={styles.partnersList}>
                {ecaPartners.europe.map((partner, index) => (
                  <div key={index} className={styles.partnerItem}>
                    <span className={styles.partnerFlag}>{partner.flag}</span>
                    <div className={styles.partnerInfo}>
                      <span className={styles.partnerName}>{partner.name}</span>
                      <span className={styles.partnerCountry}>{partner.country}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Asia */}
            <div className={styles.regionCard}>
              <div className={styles.regionHeader}>
                <h4 className={styles.regionTitle}>Asia</h4>
                <div className={styles.regionIcon}>🌏</div>
              </div>
              <div className={styles.partnersList}>
                {ecaPartners.asia.map((partner, index) => (
                  <div key={index} className={styles.partnerItem}>
                    <span className={styles.partnerFlag}>{partner.flag}</span>
                    <div className={styles.partnerInfo}>
                      <span className={styles.partnerName}>{partner.name}</span>
                      <span className={styles.partnerCountry}>{partner.country}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Africa */}
            <div className={styles.regionCard}>
              <div className={styles.regionHeader}>
                <h4 className={styles.regionTitle}>Africa</h4>
                <div className={styles.regionIcon}>🌍</div>
              </div>
              <div className={styles.partnersList}>
                {ecaPartners.africa.map((partner, index) => (
                  <div key={index} className={styles.partnerItem}>
                    <span className={styles.partnerFlag}>{partner.flag}</span>
                    <div className={styles.partnerInfo}>
                      <span className={styles.partnerName}>{partner.name}</span>
                      <span className={styles.partnerCountry}>{partner.country}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Americas */}
            <div className={styles.regionCard}>
              <div className={styles.regionHeader}>
                <h4 className={styles.regionTitle}>Americas</h4>
                <div className={styles.regionIcon}>🌎</div>
              </div>
              <div className={styles.partnersList}>
                {ecaPartners.americas.map((partner, index) => (
                  <div key={index} className={styles.partnerItem}>
                    <span className={styles.partnerFlag}>{partner.flag}</span>
                    <div className={styles.partnerInfo}>
                      <span className={styles.partnerName}>{partner.name}</span>
                      <span className={styles.partnerCountry}>{partner.country}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why This Matters Section */}
        <div className={`${styles.impactSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.impactTitle}>Why This Matters for Our Marketplace</h3>
          
          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <Users size={32} />
              </div>
              <h4>For Vendors</h4>
              <p>Financing ensures you can produce, ship, and deliver large orders without capital strain.</p>
            </div>
            
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <TrendingUp size={32} />
              </div>
              <h4>For Buyers</h4>
              <p>Financing allows you to secure products in bulk while maintaining liquidity.</p>
            </div>
            
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <CheckCircle size={32} />
              </div>
              <h4>For Both</h4>
              <p>Every transaction gains trust, speed, and financial security.</p>
            </div>
          </div>
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

export default ECASupport;