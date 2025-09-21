// src/components/Services/ServicesCTA/ServicesCTA.jsx
import React from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Users, 
  TrendingUp, 
  Shield,
  MessageCircle,
  Phone
} from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './ServicesCTA.module.css';

const ServicesCTA = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const trustFeatures = [
    { icon: <Globe size={20} />, text: 'Global reach across 50+ countries' },
    { icon: <Shield size={20} />, text: 'Trusted by industry leaders worldwide' },
    { icon: <TrendingUp size={20} />, text: 'Proven track record of growth-focused solutions' },
    { icon: <Users size={20} />, text: 'Dedicated support team available 24/7' }
  ];

  const stats = [
    { number: '2,500+', label: 'Satisfied Clients', icon: <Users size={24} /> },
    { number: '50+', label: 'Countries Served', icon: <Globe size={24} /> },
    { number: '$50M+', label: 'Trade Volume', icon: <TrendingUp size={24} /> },
    { number: '99%', label: 'Success Rate', icon: <CheckCircle size={24} /> }
  ];

  return (
    <section 
      className={styles.servicesCTA}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Main CTA Section */}
        <div className={`${styles.mainCTA} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Partner with Us</h2>
              <p className={styles.ctaDescription}>
                Join thousands of businesses worldwide who trust Globe Sourcing for their 
                procurement needs. Our comprehensive solutions, global reach, and commitment 
                to your growth make us the ideal partner for your sourcing and procurement 
                requirements. Let's build something great together.
              </p>
            </div>

            <div className={styles.ctaButtons}>
              <button className={styles.primaryCTA}>
                <span>Get Started Today</span>
                <ArrowRight size={20} />
                <div className={styles.buttonRipple}></div>
              </button>
              
              <button className={styles.secondaryCTA}>
                <MessageCircle size={18} />
                <span>Schedule Consultation</span>
              </button>
              
              <button className={styles.tertiaryCTA}>
                <Phone size={18} />
                <span>Call Us Now</span>
              </button>
            </div>
          </div>

          <div className={styles.ctaVisual}>
            {/* Trust Features */}
            <div className={styles.trustFeatures}>
              {trustFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className={styles.trustFeature}
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className={styles.trustIcon}>
                    {feature.icon}
                  </div>
                  <span className={styles.trustText}>{feature.text}</span>
                </div>
              ))}
            </div>
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

        {/* Contact Information */}
        <div className={`${styles.contactInfo} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.contactContent}>
            <h3 className={styles.contactTitle}>Ready to Get Started?</h3>
            <p className={styles.contactDescription}>
              Contact our procurement experts today for a free consultation
            </p>
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <MessageCircle size={20} />
                </div>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>Email Us</span>
                  <span className={styles.contactValue}>info@globesourceprocurement.com</span>
                </div>
              </div>
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <Phone size={20} />
                </div>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>Call Us</span>
                  <span className={styles.contactValue}>+254-XXX-XXXXXX</span>
                </div>
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

export default ServicesCTA;