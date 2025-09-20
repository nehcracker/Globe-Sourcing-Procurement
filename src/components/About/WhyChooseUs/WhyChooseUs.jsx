// src/components/About/WhyChooseUs/WhyChooseUs.jsx
import React from 'react';
import { 
  Shield, 
  Truck, 
  Package2, 
  DollarSign, 
  Headphones,
  Star,
  CheckCircle,
  Users,
  Globe
} from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import FeatureCard from './FeatureCard';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      id: 1,
      title: "Verified Global Supplier Network",
      description: "Access to pre-vetted suppliers worldwide with comprehensive background checks and quality certifications.",
      icon: <Shield size={32} />,
      color: "#3B82F6",
      stats: { number: "2,500+", label: "Verified Suppliers" },
      benefits: [
        "Rigorous supplier verification process",
        "Quality certifications validated",
        "Financial stability checked",
        "Regular performance monitoring"
      ]
    },
    {
      id: 2,
      title: "End-to-End Procurement & Logistics",
      description: "Complete solution from sourcing to delivery with real-time tracking and quality assurance at every step.",
      icon: <Truck size={32} />,
      color: "#10B981",
      stats: { number: "99%", label: "On-time Delivery" },
      benefits: [
        "Complete logistics management",
        "Real-time shipment tracking",
        "Quality control checkpoints",
        "Insurance coverage included"
      ]
    },
    {
      id: 3,
      title: "Bulk Order Specialization",
      description: "Expertise in large-volume transactions with competitive pricing and specialized handling for bulk orders.",
      icon: <Package2 size={32} />,
      color: "#F59E0B",
      stats: { number: "$50M+", label: "Volume Processed" },
      benefits: [
        "Volume discount negotiations",
        "Specialized bulk handling",
        "Flexible payment terms",
        "Scalable order management"
      ]
    },
    {
      id: 4,
      title: "Transparent Service Fees",
      description: "Fair pricing structure that protects both buyers and vendors with no hidden costs or surprise charges.",
      icon: <DollarSign size={32} />,
      color: "#EF4444",
      stats: { number: "100%", label: "Transparent Pricing" },
      benefits: [
        "No hidden fees or charges",
        "Clear pricing structure",
        "Competitive service rates",
        "Value-based fee model"
      ]
    },
    {
      id: 5,
      title: "Dedicated Support Team",
      description: "24/7 professional assistance with multilingual support and dedicated account managers for every client.",
      icon: <Headphones size={32} />,
      color: "#8B5CF6",
      stats: { number: "24/7", label: "Support Available" },
      benefits: [
        "Round-the-clock support",
        "Multilingual assistance",
        "Dedicated account managers",
        "Expert consultation services"
      ]
    }
  ];

  const achievements = [
    { icon: <Users size={20} />, number: "2,500+", label: "Global Partners" },
    { icon: <Globe size={20} />, number: "50+", label: "Countries Served" },
    { icon: <CheckCircle size={20} />, number: "99%", label: "Success Rate" },
    { icon: <Star size={20} />, number: "4.9★", label: "Client Rating" }
  ];

  return (
    <section 
      className={styles.whyChooseUs}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.headerBadge}>
            <Star size={16} />
            <span>Competitive Advantages</span>
          </div>
          <h2 className={styles.sectionTitle}>Why Choose Globe Sourcing</h2>
          <p className={styles.sectionSubtitle}>
            We don't just connect buyers and suppliers—we create trusted partnerships 
            that drive global commerce forward
          </p>
          <div className={styles.titleUnderline}></div>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Achievements Bar */}
        <div className={`${styles.achievementsBar} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.achievementsContent}>
            <h3 className={styles.achievementsTitle}>Proven Track Record</h3>
            <div className={styles.achievementsGrid}>
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={styles.achievementItem}
                  style={{ animationDelay: `${index * 0.1 + 0.8}s` }}
                >
                  <div className={styles.achievementIcon}>
                    {achievement.icon}
                  </div>
                  <div className={styles.achievementContent}>
                    <span className={styles.achievementNumber}>{achievement.number}</span>
                    <span className={styles.achievementLabel}>{achievement.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`${styles.bottomCTA} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Experience the Difference?</h3>
            <p className={styles.ctaSubtitle}>
              Join thousands of satisfied clients who trust Globe Sourcing for their procurement needs
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCTA}>
                <span>Start Your Project</span>
                <div className={styles.buttonRipple}></div>
              </button>
              <button className={styles.secondaryCTA}>
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
          
          <div className={styles.ctaVisual}>
            <div className={styles.trustBadges}>
              <div className={styles.trustBadge}>
                <CheckCircle size={24} />
                <span>ISO Certified</span>
              </div>
              <div className={styles.trustBadge}>
                <Shield size={24} />
                <span>Secure Platform</span>
              </div>
              <div className={styles.trustBadge}>
                <Star size={24} />
                <span>Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
        <div className={styles.bgShape3}></div>
        <div className={styles.bgPattern}></div>
      </div>
    </section>
  );
};

export default WhyChooseUs;