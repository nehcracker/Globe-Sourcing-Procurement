// src/pages/VendorRegistration/components/PageSections/VendorBenefits.jsx
import React, { useState, useEffect } from 'react';
import { TrendingUp, DollarSign, Users, Globe, Shield, Award, Star, CheckCircle } from 'lucide-react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';
import styles from './VendorBenefits.module.css';

const VendorBenefits = () => {
  const { ref: containerRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [countersStarted, setCountersStarted] = useState(false);
  

  const successMetrics = [
    {
      id: 1,
      icon: TrendingUp,
      value: 250,
      suffix: '%',
      label: 'Average Sales Increase',
      description: 'Vendors see significant growth within first 6 months',
      color: 'green'
    },
    {
      id: 2,
      icon: DollarSign,
      value: 85000,
      prefix: '$',
      label: 'Average Monthly Revenue',
      description: 'Top-performing vendors achieve consistent monthly income',
      color: 'blue'
    },
    {
      id: 3,
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Active Buyers Network',
      description: 'Access to verified buyers across multiple industries',
      color: 'green'
    },
    {
      id: 4,
      icon: Globe,
      value: 50,
      suffix: '+',
      label: 'Countries Reached',
      description: 'Expand your business to global markets',
      color: 'blue'
    }
  ];

  const vendorTestimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      company: 'Pacific Electronics Ltd.',
      country: 'Singapore',
      avatar: 'SC',
      rating: 5,
      quote: 'Our sales increased by 300% within the first year. The platform connected us with buyers we never would have reached otherwise.',
      metrics: {
        growth: '+300%',
        revenue: '$120K/month',
        period: '12 months'
      },
      highlight: 'Premium Vendor'
    },
    {
      id: 2,
      name: 'Ahmed Hassan', 
      company: 'Desert Textile Co.',
      country: 'Egypt',
      avatar: 'AH',
      rating: 5,
      quote: 'The secure payment system and global reach transformed our business from local to international in just 8 months.',
      metrics: {
        growth: '+450%',
        revenue: '$95K/month',
        period: '8 months'
      },
      highlight: 'Verified Supplier'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      company: 'Andean Crafts Exports',
      country: 'Peru', 
      avatar: 'MR',
      rating: 5,
      quote: 'The vendor certification program helped establish trust with premium buyers. Our profit margins improved significantly.',
      metrics: {
        growth: '+275%',
        revenue: '$65K/month',
        period: '6 months'
      },
      highlight: 'Certified Vendor'
    }
  ];

  const platformFeatures = [
    {
      id: 1,
      icon: Shield,
      title: 'Secure Payments',
      description: 'Protected transactions with guaranteed payment processing',
      benefits: ['Escrow protection', 'Multiple payment methods', 'Fraud prevention', 'Instant notifications']
    },
    {
      id: 2,
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to international markets and verified buyers',
      benefits: ['50+ countries', 'Multi-language support', 'Local insights', 'Cultural guidance']
    },
    {
      id: 3,
      icon: Award,
      title: 'Vendor Certification',
      description: 'Build credibility with verified credentials and badges',
      benefits: ['Quality certifications', 'Trust scores', 'Performance badges', 'Premium status']
    }
  ];

  // Counter animation hook

  useEffect(() => {
    if (isVisible && !countersStarted) {
      setTimeout(() => setCountersStarted(true), 500);
    }
  }, [isVisible, countersStarted]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toLocaleString();
  };

  return (
    <section className={styles.vendorBenefits} ref={containerRef}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Why Vendors Choose Our Platform</h2>
          <p className={styles.subtitle}>
            Join thousands of successful vendors who have transformed their business with our comprehensive platform
          </p>
        </div>

        {/* Success Metrics */}
        <div className={`${styles.metricsSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.metricsHeader}>
            <h3 className={styles.metricsTitle}>Success Metrics That Matter</h3>
            <p className={styles.metricsSubtitle}>Real results from our vendor community</p>
          </div>
          
          <div className={styles.metricsGrid}>
            {successMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              
              return (
                <div 
                  key={metric.id} 
                  className={`${styles.metricCard} ${styles[metric.color]} ${isVisible ? styles.visible : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={styles.metricHeader}>
                    <div className={styles.metricIcon}>
                      <IconComponent size={32} />
                    </div>
                    <div className={styles.metricBadge}>Verified</div>
                  </div>
                  
                  <div className={styles.metricValue}>
                    {metric.prefix && <span className={styles.prefix}>{metric.prefix}</span>}
                    <span className={styles.number}>
                      {countersStarted ? formatNumber(metric.value) : '0'}
                    </span>
                    {metric.suffix && <span className={styles.suffix}>{metric.suffix}</span>}
                  </div>
                  
                  <h4 className={styles.metricLabel}>{metric.label}</h4>
                  <p className={styles.metricDescription}>{metric.description}</p>
                  
                  <div className={styles.metricProgress}>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill}
                        style={{ 
                          width: countersStarted ? '100%' : '0%',
                          animationDelay: `${index * 0.2 + 0.5}s`
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Platform Features */}
        <div className={`${styles.featuresSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.featuresHeader}>
            <h3 className={styles.featuresTitle}>Platform Features & Benefits</h3>
            <p className={styles.featuresSubtitle}>Everything you need to succeed as a vendor</p>
          </div>
          
          <div className={styles.featuresGrid}>
            {platformFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <div 
                  key={feature.id} 
                  className={`${styles.featureCard} ${isVisible ? styles.visible : ''}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={styles.featureHeader}>
                    <div className={styles.featureIcon}>
                      <IconComponent size={28} />
                    </div>
                  </div>
                  
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDescription}>{feature.description}</p>
                  
                  <ul className={styles.benefitsList}>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className={styles.benefitItem}>
                        <CheckCircle size={16} className={styles.checkIcon} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vendor Testimonials */}
        <div className={`${styles.testimonialsSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.testimonialsHeader}>
            <h3 className={styles.testimonialsTitle}>Success Stories</h3>
            <p className={styles.testimonialsSubtitle}>Hear from our most successful vendors</p>
          </div>
          
          <div className={styles.testimonialsGrid}>
            {vendorTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`${styles.testimonialCard} ${isVisible ? styles.visible : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.testimonialHeader}>
                  <div className={styles.vendorAvatar}>
                    <span>{testimonial.avatar}</span>
                  </div>
                  <div className={styles.vendorInfo}>
                    <h4 className={styles.vendorName}>{testimonial.name}</h4>
                    <p className={styles.vendorCompany}>{testimonial.company}</p>
                    <p className={styles.vendorCountry}>{testimonial.country}</p>
                  </div>
                  <div className={styles.vendorHighlight}>{testimonial.highlight}</div>
                </div>
                
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className={styles.star} fill="currentColor" />
                  ))}
                </div>
                
                <blockquote className={styles.testimonialQuote}>
                  "{testimonial.quote}"
                </blockquote>
                
                <div className={styles.testimonialMetrics}>
                  <div className={styles.testimonialMetric}>
                    <span className={styles.metricValue}>{testimonial.metrics.growth}</span>
                    <span className={styles.metricLabel}>Sales Growth</span>
                  </div>
                  <div className={styles.testimonialMetric}>
                    <span className={styles.metricValue}>{testimonial.metrics.revenue}</span>
                    <span className={styles.metricLabel}>Monthly Revenue</span>
                  </div>
                  <div className={styles.testimonialMetric}>
                    <span className={styles.metricValue}>{testimonial.metrics.period}</span>
                    <span className={styles.metricLabel}>Time Frame</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Join Our Success Stories?</h3>
            <p className={styles.ctaDescription}>
              Start your journey with our platform and experience the growth that thousands of vendors have achieved
            </p>
            <button 
              className={styles.ctaButton}
              onClick={() => {
                const formSection = document.getElementById('vendor-form-section');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <TrendingUp size={20} />
              <span>Start Growing Today</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgElement1} />
        <div className={styles.bgElement2} />
        <div className={styles.bgElement3} />
      </div>
    </section>
  );
};

export default VendorBenefits;
