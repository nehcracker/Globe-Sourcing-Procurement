// src/pages/VendorRegistration/components/PageSections/VendorServices.jsx
import React, { useState } from 'react';
import { 
  Package, 
  Shield, 
  ClipboardList, 
  CreditCard, 
  Truck, 
  Megaphone,
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle
} from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './VendorServices.module.css';

const VendorServices = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Package size={40} />,
      title: 'Product Listing & Catalog Management',
      shortDescription: 'Professional product showcase with comprehensive catalog management tools and optimization.',
      features: [
        'Professional product photography guidelines',
        'SEO-optimized product descriptions',
        'Multi-category product organization',
        'Bulk product upload capabilities',
        'Product performance analytics',
        'Inventory synchronization tools'
      ],
      benefits: [
        'Increase product visibility by 300%',
        'Professional presentation builds trust',
        'Easy bulk management saves time',
        'Analytics drive better decisions'
      ],
      color: 'blue'
    },
    {
      id: 2,
      icon: <Shield size={40} />,
      title: 'Supplier Verification & Credibility Building',
      shortDescription: 'Comprehensive verification process that builds buyer trust and increases your credibility score.',
      features: [
        'Business license verification',
        'Quality certification validation',
        'Financial stability assessment',
        'Production capacity audit',
        'Customer reference checks',
        'Compliance documentation review'
      ],
      benefits: [
        'Verified badge increases inquiries by 250%',
        'Higher trust leads to better prices',
        'Priority placement in search results',
        'Access to premium buyer segments'
      ],
      color: 'green'
    },
    {
      id: 3,
      icon: <ClipboardList size={40} />,
      title: 'Order Management & Processing',
      shortDescription: 'Streamlined order processing system with automated workflows and real-time tracking.',
      features: [
        'Automated order processing',
        'Real-time order tracking',
        'Customer communication tools',
        'Order modification handling',
        'Delivery scheduling coordination',
        'Performance reporting dashboard'
      ],
      benefits: [
        'Reduce processing time by 60%',
        'Minimize order errors and disputes',
        'Improve customer satisfaction',
        'Scale operations efficiently'
      ],
      color: 'purple'
    },
    {
      id: 4,
      icon: <CreditCard size={40} />,
      title: 'Payment Security & Financing Support',
      shortDescription: 'Guaranteed payment protection with flexible financing options and secure transaction processing.',
      features: [
        'Payment guarantee program',
        'Multiple secure payment methods',
        'Trade financing options',
        'Currency hedging protection',
        'Automated invoicing system',
        'Financial reporting tools'
      ],
      benefits: [
        '100% payment guarantee',
        'Access to working capital',
        'Reduced financial risk',
        'Faster payment processing'
      ],
      color: 'orange'
    },
    {
      id: 5,
      icon: <Truck size={40} />,
      title: 'Logistics Coordination & Support',
      shortDescription: 'End-to-end logistics management from pickup to delivery with full tracking and insurance.',
      features: [
        'Global shipping coordination',
        'Customs clearance assistance',
        'Insurance coverage options',
        'Real-time shipment tracking',
        'Delivery confirmation system',
        'Returns processing support'
      ],
      benefits: [
        'Reduce shipping costs by 30%',
        'Eliminate logistics headaches',
        'Faster delivery times',
        'Global reach expansion'
      ],
      color: 'teal'
    },
    {
      id: 6,
      icon: <Megaphone size={40} />,
      title: 'Marketing & Promotional Tools',
      shortDescription: 'Advanced marketing tools and promotional opportunities to boost your visibility and sales.',
      features: [
        'Featured product placements',
        'Targeted buyer matching',
        'Marketing campaign management',
        'Social media promotion',
        'Trade show participation',
        'Content marketing support'
      ],
      benefits: [
        'Increase brand visibility by 400%',
        'Access to exclusive marketing channels',
        'Higher quality lead generation',
        'Professional brand development'
      ],
      color: 'red'
    }
  ];

  const toggleExpanded = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.vendorServices} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerTag}>
            <Star size={16} />
            <span>Premium Services</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Services We Provide to Our Vendors
          </h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive support system designed to maximize your success. From listing optimization 
            to payment security, we handle the complexities so you can focus on what you do best.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`${styles.serviceCard} ${styles[service.color]} ${
                expandedService === service.id ? styles.expanded : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  {service.icon}
                </div>
                <div className={styles.headerContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.shortDescription}>{service.shortDescription}</p>
                </div>
                <button 
                  className={styles.expandButton}
                  onClick={() => toggleExpanded(service.id)}
                  aria-label={expandedService === service.id ? 'Collapse details' : 'Expand details'}
                >
                  {expandedService === service.id ? 
                    <ChevronUp size={20} /> : 
                    <ChevronDown size={20} />
                  }
                </button>
              </div>

              {/* Expandable Content */}
              <div className={styles.expandableContent}>
                <div className={styles.contentWrapper}>
                  {/* Features Section */}
                  <div className={styles.featuresSection}>
                    <h4 className={styles.sectionSubheading}>
                      <CheckCircle size={16} />
                      What's Included
                    </h4>
                    <ul className={styles.featureList}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className={styles.featureItem}>
                          <span className={styles.featureIcon}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits Section */}
                  <div className={styles.benefitsSection}>
                    <h4 className={styles.sectionSubheading}>
                      <Star size={16} />
                      Key Benefits
                    </h4>
                    <ul className={styles.benefitList}>
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className={styles.benefitItem}>
                          <span className={styles.benefitIcon}>🎯</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className={styles.cardFooter}>
                <div className={styles.footerDecoration}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Guarantee */}
        <div className={styles.serviceGuarantee}>
          <div className={styles.guaranteeContent}>
            <div className={styles.guaranteeIcon}>
              <Shield size={48} />
            </div>
            <div className={styles.guaranteeText}>
              <h3 className={styles.guaranteeTitle}>100% Service Guarantee</h3>
              <p className={styles.guaranteeDescription}>
                We're committed to your success. If you're not completely satisfied with our services 
                within the first 90 days, we'll work with you to make it right or provide a full refund.
              </p>
            </div>
            <div className={styles.guaranteeFeatures}>
              <div className={styles.guaranteeFeature}>
                <CheckCircle size={20} />
                <span>90-Day Money Back</span>
              </div>
              <div className={styles.guaranteeFeature}>
                <CheckCircle size={20} />
                <span>24/7 Support</span>
              </div>
              <div className={styles.guaranteeFeature}>
                <CheckCircle size={20} />
                <span>Dedicated Account Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgPattern1}></div>
        <div className={styles.bgPattern2}></div>
      </div>
    </section>
  );
};

export default VendorServices;