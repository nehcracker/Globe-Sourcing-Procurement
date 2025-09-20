// src/components/About/CoreValues/CoreValues.jsx
import React from 'react';
import { Eye, Shield, CheckCircle, Globe, Zap, Heart } from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import ValueCard from './ValueCard';
import styles from './CoreValues.module.css';

const CoreValues = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  const coreValues = [
    {
      id: 1,
      title: "Transparency",
      description: "Open communication and clear processes in every transaction. We believe that transparency builds trust and creates lasting business relationships.",
      icon: <Eye size={28} />,
      color: "#3B82F6",
      details: [
        "Clear pricing structure",
        "Open communication channels",
        "Detailed process documentation",
        "Regular progress updates"
      ]
    },
    {
      id: 2,
      title: "Reliability",
      description: "Dependable sourcing and delivery that our partners can count on. We maintain consistent quality and meet commitments every time.",
      icon: <Shield size={28} />,
      color: "#10B981",
      details: [
        "99% on-time delivery rate",
        "Consistent quality standards",
        "Reliable supplier network",
        "Commitment to deadlines"
      ]
    },
    {
      id: 3,
      title: "Quality Assurance",
      description: "Verified suppliers and rigorous product quality checks. Every product meets our high standards before reaching our clients.",
      icon: <CheckCircle size={28} />,
      color: "#F59E0B",
      details: [
        "Rigorous supplier verification",
        "Quality control checkpoints",
        "Product sample testing",
        "Continuous improvement"
      ]
    },
    {
      id: 4,
      title: "Global Reach",
      description: "Connecting markets across continents with our extensive network. We bridge geographical gaps to create global opportunities.",
      icon: <Globe size={28} />,
      color: "#EF4444",
      details: [
        "50+ countries served",
        "Multilingual support team",
        "Local market expertise",
        "Cultural understanding"
      ]
    },
    {
      id: 5,
      title: "Efficiency",
      description: "Speed and professionalism in every aspect of procurement. We streamline processes to save time and reduce costs for our partners.",
      icon: <Zap size={28} />,
      color: "#8B5CF6",
      details: [
        "Streamlined workflows",
        "Fast response times",
        "Automated processes",
        "Cost optimization"
      ]
    },
    {
      id: 6,
      title: "Partnership",
      description: "Building long-term relationships based on mutual success. We grow when our partners grow, creating a collaborative ecosystem.",
      icon: <Heart size={28} />,
      color: "#EC4899",
      details: [
        "Long-term relationships",
        "Mutual success focus",
        "Collaborative approach",
        "Continuous support"
      ]
    }
  ];

  return (
    <section 
      className={styles.coreValues}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.headerBadge}>
            <Heart size={16} />
            <span>What We Stand For</span>
          </div>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <p className={styles.sectionSubtitle}>
            The principles that guide every decision we make and every relationship we build
          </p>
          <div className={styles.titleUnderline}></div>
        </div>

        {/* Values Grid */}
        <div className={styles.valuesGrid}>
          {coreValues.map((value, index) => (
            <ValueCard
              key={value.id}
              value={value}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom Summary */}
        <div className={`${styles.valuesSummary} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.summaryContent}>
            <h3 className={styles.summaryTitle}>Values in Action</h3>
            <p className={styles.summaryText}>
              These values aren't just words on a page—they're the foundation of how we operate. 
              From our first interaction with new partners to the completion of complex international 
              transactions, these principles guide our decisions and shape our culture.
            </p>
            
            <div className={styles.summaryStats}>
              <div className={styles.summaryStatItem}>
                <span className={styles.summaryStatNumber}>100%</span>
                <span className={styles.summaryStatLabel}>Values-Driven Decisions</span>
              </div>
              <div className={styles.summaryStatItem}>
                <span className={styles.summaryStatNumber}>4.9★</span>
                <span className={styles.summaryStatLabel}>Client Trust Rating</span>
              </div>
              <div className={styles.summaryStatItem}>
                <span className={styles.summaryStatNumber}>2,500+</span>
                <span className={styles.summaryStatLabel}>Partners Served</span>
              </div>
            </div>
          </div>
          
          <div className={styles.summaryVisual}>
            <div className={styles.valuesConnector}>
              <div className={styles.centerHub}>
                <Globe size={32} />
                <span>Globe Sourcing</span>
              </div>
              {coreValues.slice(0, 5).map((value, index) => (
                <div 
                  key={value.id}
                  className={styles.connectorNode}
                  style={{ 
                    '--angle': `${index * 72}deg`,
                    '--color': value.color
                  }}
                >
                  {value.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className={styles.backgroundDecorations}>
        <div className={styles.decoration1}></div>
        <div className={styles.decoration2}></div>
        <div className={styles.decoration3}></div>
        <div className={styles.decoration4}></div>
      </div>
    </section>
  );
};

export default CoreValues;