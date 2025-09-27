// src/pages/VendorRegistration/components/PageSections/WhyBecomeVendor.jsx
import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Shield, 
  TrendingUp, 
  Users, 
  Package, 
  Headphones, 
  ArrowRight,
  CheckCircle,
  Star,
  Award
} from 'lucide-react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';
import styles from './WhyBecomeVendor.module.css';

const WhyBecomeVendor = () => {
  const { ref: containerRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [countersStarted, setCountersStarted] = useState(false);

  const benefits = [
    {
      id: 1,
      icon: Globe,
      title: 'Global Market Access',
      description: 'Connect with verified buyers from 50+ countries and expand your business internationally.',
      features: [
        'Access to 500+ verified buyers',
        'Multi-language platform support',
        'Local market insights',
        'Cross-border payment solutions'
      ],
      color: 'blue',
      stats: { number: 50, suffix: '+', label: 'Countries' }
    },
    {
      id: 2,
      icon: Shield,
      title: 'Secure Payment Processing',
      description: 'Enjoy guaranteed payments with our secure escrow system and fraud protection.',
      features: [
        'Escrow payment protection',
        'Multiple payment methods',
        'Fraud detection system',
        'Instant payment notifications'
      ],
      color: 'green',
      stats: { number: 100, suffix: '%', label: 'Secure' }
    },
    {
      id: 3,
      icon: TrendingUp,
      title: 'Business Growth Tools',
      description: 'Leverage advanced analytics and marketing tools to optimize your sales performance.',
      features: [
        'Real-time sales analytics',
        'Market trend insights',
        'Performance optimization',
        'Growth recommendations'
      ],
      color: 'purple',
      stats: { number: 250, suffix: '%', label: 'Avg Growth' }
    },
    {
      id: 4,
      icon: Users,
      title: 'Dedicated Support',
      description: 'Get 24/7 support from our expert team to help you succeed on our platform.',
      features: [
        'Personal account manager',
        '24/7 customer support',
        'Technical assistance',
        'Business consultation'
      ],
      color: 'orange',
      stats: { number: 24, suffix: '/7', label: 'Support' }
    },
    {
      id: 5,
      icon: Package,
      title: 'Easy Product Management',
      description: 'Streamlined tools for managing inventory, orders, and product catalogs.',
      features: [
        'Bulk product upload',
        'Inventory management',
        'Order tracking system',
        'Catalog optimization'
      ],
      color: 'indigo',
      stats: { number: 1000, suffix: '+', label: 'Products' }
    },
    {
      id: 6,
      icon: Headphones,
      title: 'Marketing & Promotion',
      description: 'Boost your visibility with our marketing tools and promotional opportunities.',
      features: [
        'Featured vendor listings',
        'Promotional campaigns',
        'SEO optimization',
        'Social media integration'
      ],
      color: 'teal',
      stats: { number: 300, suffix: '%', label: 'Visibility' }
    }
  ];

  const platformStats = [
    {
      id: 1,
      value: 12000,
      suffix: '+',
      label: 'Active Vendors',
      description: 'Trusted suppliers worldwide',
      icon: Users
    },
    {
      id: 2,
      value: 85,
      prefix: '$',
      suffix: 'K',
      label: 'Avg Monthly Revenue',
      description: 'Top performing vendors',
      icon: TrendingUp
    },
    {
      id: 3,
      value: 95,
      suffix: '%',
      label: 'Satisfaction Rate',
      description: 'Vendor success stories',
      icon: Star
    },
    {
      id: 4,
      value: 48,
      label: 'Hours Avg Response',
      description: 'Fast buyer connections',
      icon: Award
    }
  ];

  const successStories = [
    {
      id: 1,
      name: 'Sarah Chen',
      company: 'Pacific Tech Solutions',
      country: '🇸🇬 Singapore',
      image: 'SC',
      quote: 'Our monthly revenue increased by 400% within the first year. The global buyer network is incredible!',
      metrics: {
        growth: '+400%',
        revenue: '$120K',
        period: '12 months'
      },
      rating: 5
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      company: 'Desert Textile Co.',
      country: '🇪🇬 Egypt',
      image: 'AH',
      quote: 'The secure payment system gave us confidence to work with international buyers. Best decision ever!',
      metrics: {
        growth: '+320%',
        revenue: '$95K',
        period: '10 months'
      },
      rating: 5
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      company: 'Andean Crafts Export',
      country: '🇵🇪 Peru',
      image: 'MR',
      quote: 'The platform helped us reach markets we never thought possible. Truly life-changing for our business.',
      metrics: {
        growth: '+280%',
        revenue: '$78K',
        period: '8 months'
      },
      rating: 5
    }
  ];

  // Counter animation hook
  const useCounter = (endValue, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersStarted) return;

      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(endValue * easeOutCubic));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [endValue, duration]);

    return count;
  };

  // Create individual counters at the top level
  const counter1 = useCounter(12000, 2500);
  const counter2 = useCounter(85, 2500);
  const counter3 = useCounter(95, 2500);
  const counter4 = useCounter(48, 2500);

  // Map counters to stats
  const animatedValues = [counter1, counter2, counter3, counter4];

  useEffect(() => {
    if (isVisible && !countersStarted) {
      setTimeout(() => setCountersStarted(true), 500);
    }
  }, [isVisible, countersStarted]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toLocaleString();
  };

  return (
    <section className={styles.whyBecomeVendor} ref={containerRef}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Why Become a Vendor?</h2>
          <p className={styles.subtitle}>
            Join thousands of successful vendors who have transformed their business with our comprehensive platform
          </p>
        </div>

        {/* Platform Statistics */}
        <div className={`${styles.statsSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.statsGrid}>
            {platformStats.map((stat, index) => {
              const IconComponent = stat.icon;
              const animatedValue = animatedValues[index];
              
              return (
                <div 
                  key={stat.id} 
                  className={`${styles.statCard} ${isVisible ? styles.visible : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={styles.statIcon}>
                    <IconComponent size={28} />
                  </div>
                  <div className={styles.statValue}>
                    {stat.prefix && <span className={styles.prefix}>{stat.prefix}</span>}
                    <span className={styles.number}>
                      {countersStarted ? formatNumber(animatedValue) : '0'}
                    </span>
                    {stat.suffix && <span className={styles.suffix}>{stat.suffix}</span>}
                  </div>
                  <h3 className={styles.statLabel}>{stat.label}</h3>
                  <p className={styles.statDescription}>{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className={`${styles.benefitsSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.benefitsHeader}>
            <h3 className={styles.benefitsTitle}>Platform Benefits</h3>
            <p className={styles.benefitsSubtitle}>Everything you need to succeed as a vendor</p>
          </div>
          
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              
              return (
                <div 
                  key={benefit.id} 
                  className={`${styles.benefitCard} ${styles[benefit.color]} ${isVisible ? styles.visible : ''}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Card Header */}
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      <IconComponent size={28} />
                    </div>
                    <div className={styles.cardStats}>
                      <span className={styles.statsNumber}>
                        {benefit.stats.number}
                        {benefit.stats.suffix}
                      </span>
                      <span className={styles.statsLabel}>{benefit.stats.label}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className={styles.cardContent}>
                    <h4 className={styles.cardTitle}>{benefit.title}</h4>
                    <p className={styles.cardDescription}>{benefit.description}</p>
                  </div>

                  {/* Features List */}
                  <ul className={styles.featuresList}>
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={styles.featureItem}>
                        <CheckCircle size={14} className={styles.checkIcon} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Footer */}
                  <div className={styles.cardFooter}>
                    <button className={styles.learnMoreButton}>
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Stories */}
        <div className={`${styles.successSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.successHeader}>
            <h3 className={styles.successTitle}>Success Stories</h3>
            <p className={styles.successSubtitle}>Real results from our vendor community</p>
          </div>
          
          <div className={styles.storiesGrid}>
            {successStories.map((story, index) => (
              <div 
                key={story.id} 
                className={`${styles.storyCard} ${isVisible ? styles.visible : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.storyHeader}>
                  <div className={styles.avatar}>
                    <span>{story.image}</span>
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{story.name}</h4>
                    <p className={styles.authorCompany}>{story.company}</p>
                    <p className={styles.authorCountry}>{story.country}</p>
                  </div>
                  <div className={styles.rating}>
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} size={16} className={styles.star} fill="currentColor" />
                    ))}
                  </div>
                </div>
                
                <blockquote className={styles.quote}>
                  "{story.quote}"
                </blockquote>
                
                <div className={styles.storyMetrics}>
                  <div className={styles.metric}>
                    <span className={styles.metricValue}>{story.metrics.growth}</span>
                    <span className={styles.metricLabel}>Growth</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricValue}>{story.metrics.revenue}</span>
                    <span className={styles.metricLabel}>Monthly Revenue</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricValue}>{story.metrics.period}</span>
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
              Start your vendor journey today and experience the growth that thousands of vendors have achieved
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
              <span>Get Started Now</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Background Elements */}
        <div className={styles.bgElement1}></div>
        <div className={styles.bgElement2}></div>
        <div className={styles.bgElement3}></div>
      </div>
    </section>
  );
};

export default WhyBecomeVendor;
