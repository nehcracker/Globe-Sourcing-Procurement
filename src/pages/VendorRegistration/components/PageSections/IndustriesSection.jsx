// src/pages/VendorRegistration/components/PageSections/IndustriesSection.jsx
import React, { useState } from 'react';
import { 
  Cpu, 
  Wheat, 
  Wrench, 
  Shirt, 
  Car, 
  Building, 
  UtensilsCrossed, 
  Stethoscope, 
  /*Zap, 
  Palette, */
  Globe,
  TrendingUp,
  Users,
  Package
} from 'lucide-react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';
import styles from './IndustriesSection.module.css';

const IndustriesSection = () => {
  const { ref: containerRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industries = [
    {
      id: 1,
      icon: Cpu,
      name: 'Electronics & Technology',
      description: 'Consumer electronics, computer hardware, telecommunications equipment, and smart devices',
      stats: {
        vendors: '2,500+',
        orders: '15K+',
        growth: '+180%'
      },
      categories: [
        'Consumer Electronics',
        'Computer Hardware', 
        'Telecommunications',
        'Smart Home Devices',
        'Semiconductors',
        'Audio/Video Equipment'
      ],
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: Wheat,
      name: 'Agricultural Products',
      description: 'Fresh produce, grains, processed foods, organic products, and agricultural equipment',
      stats: {
        vendors: '1,800+',
        orders: '12K+',
        growth: '+220%'
      },
      categories: [
        'Fresh Produce',
        'Grains & Cereals',
        'Processed Foods',
        'Organic Products',
        'Agricultural Equipment',
        'Seeds & Fertilizers'
      ],
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      icon: Wrench,
      name: 'Industrial Equipment',
      description: 'Machinery, tools, manufacturing equipment, and industrial automation systems',
      stats: {
        vendors: '1,200+',
        orders: '8K+',
        growth: '+160%'
      },
      categories: [
        'Heavy Machinery',
        'Manufacturing Tools',
        'Automation Systems',
        'Safety Equipment',
        'Maintenance Tools',
        'Industrial Components'
      ],
      color: 'gray',
      gradient: 'from-gray-500 to-slate-500'
    },
    {
      id: 4,
      icon: Shirt,
      name: 'Textiles & Apparel',
      description: 'Fashion clothing, fabrics, accessories, footwear, and home textiles',
      stats: {
        vendors: '3,200+',
        orders: '22K+',
        growth: '+195%'
      },
      categories: [
        'Fashion Apparel',
        'Fabrics & Materials',
        'Accessories',
        'Footwear',
        'Home Textiles',
        'Leather Goods'
      ],
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 5,
      icon: Car,
      name: 'Automotive Parts',
      description: 'Auto parts, accessories, maintenance products, and automotive electronics',
      stats: {
        vendors: '950+',
        orders: '6K+',
        growth: '+140%'
      },
      categories: [
        'Engine Components',
        'Electronic Parts',
        'Body & Exterior',
        'Interior Accessories',
        'Maintenance Products',
        'Performance Parts'
      ],
      color: 'red',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      id: 6,
      icon: Building,
      name: 'Construction Materials',
      description: 'Building materials, tools, hardware, safety equipment, and architectural products',
      stats: {
        vendors: '1,100+',
        orders: '9K+',
        growth: '+175%'
      },
      categories: [
        'Building Materials',
        'Construction Tools',
        'Hardware & Fasteners',
        'Safety Equipment',
        'Architectural Products',
        'Concrete & Steel'
      ],
      color: 'yellow',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 7,
      icon: UtensilsCrossed,
      name: 'Food & Beverages',
      description: 'Packaged foods, beverages, ingredients, specialty products, and food equipment',
      stats: {
        vendors: '2,100+',
        orders: '18K+',
        growth: '+210%'
      },
      categories: [
        'Packaged Foods',
        'Beverages',
        'Food Ingredients',
        'Specialty Products',
        'Food Equipment',
        'Organic Foods'
      ],
      color: 'green',
      gradient: 'from-green-600 to-lime-500'
    },
    {
      id: 8,
      icon: Stethoscope,
      name: 'Medical Supplies',
      description: 'Medical devices, pharmaceuticals, healthcare equipment, and diagnostic products',
      stats: {
        vendors: '750+',
        orders: '5K+',
        growth: '+250%'
      },
      categories: [
        'Medical Devices',
        'Pharmaceuticals',
        'Diagnostic Equipment',
        'Healthcare Supplies',
        'Surgical Instruments',
        'Personal Protection'
      ],
      color: 'blue',
      gradient: 'from-blue-600 to-indigo-500'
    }
  ];

  const globalStats = [
    {
      id: 1,
      icon: Globe,
      value: '50+',
      label: 'Countries Covered',
      description: 'Vendors selling across continents'
    },
    {
      id: 2,
      icon: Package,
      value: '25K+',
      label: 'Product Categories',
      description: 'Diverse range of products'
    },
    {
      id: 3,
      icon: Users,
      value: '12K+',
      label: 'Active Vendors',
      description: 'Growing vendor community'
    },
    {
      id: 4,
      icon: TrendingUp,
      value: '185%',
      label: 'Average Growth',
      description: 'Year-over-year increase'
    }
  ];

  return (
    <section className={styles.industriesSection} ref={containerRef}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Industries We Serve</h2>
          <p className={styles.subtitle}>
            Connect with buyers across diverse industries and expand your market reach globally
          </p>
        </div>

        {/* Global Stats */}
        <div className={`${styles.globalStats} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.statsGrid}>
            {globalStats.map((stat, index) => {
              const IconComponent = stat.icon;
              
              return (
                <div 
                  key={stat.id} 
                  className={`${styles.statCard} ${isVisible ? styles.visible : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.statIcon}>
                    <IconComponent size={32} />
                  </div>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                  <div className={styles.statDescription}>{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Industries Grid */}
        <div className={`${styles.industriesGrid} ${isVisible ? styles.visible : ''}`}>
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            const isSelected = selectedIndustry === industry.id;
            
            return (
              <div 
                key={industry.id} 
                className={`${styles.industryCard} ${styles[industry.color]} ${isSelected ? styles.selected : ''} ${isVisible ? styles.visible : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedIndustry(isSelected ? null : industry.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedIndustry(isSelected ? null : industry.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isSelected}
              >
                {/* Card Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.industryIcon}>
                    <IconComponent size={32} />
                  </div>
                  <div className={styles.cardTitle}>
                    <h3 className={styles.industryName}>{industry.name}</h3>
                    <p className={styles.industryDescription}>{industry.description}</p>
                  </div>
                </div>

                {/* Industry Stats */}
                <div className={styles.industryStats}>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>{industry.stats.vendors}</span>
                    <span className={styles.statLabel}>Vendors</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>{industry.stats.orders}</span>
                    <span className={styles.statLabel}>Orders</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>{industry.stats.growth}</span>
                    <span className={styles.statLabel}>Growth</span>
                  </div>
                </div>

                {/* Expandable Categories */}
                <div className={`${styles.categoriesSection} ${isSelected ? styles.expanded : ''}`}>
                  <h4 className={styles.categoriesTitle}>Product Categories:</h4>
                  <div className={styles.categoriesGrid}>
                    {industry.categories.map((category, categoryIndex) => (
                      <div 
                        key={categoryIndex} 
                        className={styles.categoryTag}
                        style={{ animationDelay: `${categoryIndex * 0.05}s` }}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expand Indicator */}
                <div className={styles.expandIndicator}>
                  <span className={styles.expandText}>
                    {isSelected ? 'View Less' : 'View Categories'}
                  </span>
                  <div className={`${styles.expandIcon} ${isSelected ? styles.rotated : ''}`}>
                    ↓
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry Highlights */}
        <div className={`${styles.highlightsSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.highlightsHeader}>
            <h3 className={styles.highlightsTitle}>Why Choose Our Multi-Industry Platform?</h3>
          </div>
          
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🌍</div>
              <h4 className={styles.highlightTitle}>Global Reach</h4>
              <p className={styles.highlightDescription}>
                Access buyers from 50+ countries across all major industries and expand your market presence internationally.
              </p>
            </div>
            
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🔒</div>
              <h4 className={styles.highlightTitle}>Industry Compliance</h4>
              <p className={styles.highlightDescription}>
                Meet industry-specific standards and regulations with our compliance support and certification programs.
              </p>
            </div>
            
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>📊</div>
              <h4 className={styles.highlightTitle}>Market Insights</h4>
              <p className={styles.highlightDescription}>
                Get detailed analytics and market trends specific to your industry to make informed business decisions.
              </p>
            </div>
            
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🤝</div>
              <h4 className={styles.highlightTitle}>Specialized Support</h4>
              <p className={styles.highlightDescription}>
                Receive industry-specific guidance and support from our team of experts familiar with your market.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`${styles.industryCtaSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Expand Your Industry Presence?</h3>
            <p className={styles.ctaDescription}>
              Join vendors across all industries who are growing their business with our platform
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
              <Package size={20} />
              <span>Start Selling Today</span>
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

export default IndustriesSection;