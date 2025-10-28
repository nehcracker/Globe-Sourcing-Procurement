// src/components/Financing/IndustriesSupported/IndustriesSupported.jsx
import React, { useState } from 'react';
import { 
  Wheat, 
  Zap, 
  Package, 
  Smartphone, 
  Truck, 
  Building,
  Droplet,
  Utensils,
  Shield,
  Cpu,
  ArrowRight
} from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import IndustryCard from './IndustryCard';
import { FINANCING_INDUSTRIES } from '../../../utils/constants';
import styles from './IndustriesSupported.module.css';

const IndustriesSupported = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  // Icon mapping for industries
  const iconMap = {
    Wheat: <Wheat size={32} />,
    Zap: <Zap size={32} />,
    Package: <Package size={32} />,
    Smartphone: <Smartphone size={32} />,
    Truck: <Truck size={32} />,
    Building: <Building size={32} />,
    Droplet: <Droplet size={32} />,
    Utensils: <Utensils size={32} />,
    Shield: <Shield size={32} />,
    Cpu: <Cpu size={32} />
  };

  // Industries with detailed information
  const industries = FINANCING_INDUSTRIES && FINANCING_INDUSTRIES.length > 0
    ? FINANCING_INDUSTRIES
    : [
        {
          name: 'Agricultural Products & Commodities',
          icon: 'Wheat',
          description: 'Financing for agricultural exports, commodity trading, and food processing',
          color: '#84cc16',
          specialization: [
            'Export financing for fresh produce',
            'Commodity trading financing',
            'Food processing equipment',
            'Cold chain logistics'
          ],
          examples: ['Grains', 'Coffee', 'Cocoa', 'Spices', 'Fresh fruits & vegetables'],
          challenges: ['Price volatility', 'Weather dependency', 'Perishability', 'Seasonal demand'],
          solutions: [
            'Flexible payment terms',
            'Pre-harvest financing',
            'Commodity hedging support',
            'Quality assurance programs'
          ]
        },
        {
          name: 'Minerals, Oil & Gas',
          icon: 'Zap',
          description: 'Energy sector financing, mining operations, and petroleum product trading',
          color: '#f59e0b',
          specialization: [
            'Oil & gas project financing',
            'Mining operation funding',
            'Mineral extraction financing',
            'Energy commodity trading'
          ],
          examples: ['Crude oil', 'Natural gas', 'Iron ore', 'Gold', 'Copper', 'Coal'],
          challenges: ['Market volatility', 'Regulatory compliance', 'Environmental concerns', 'High capital needs'],
          solutions: [
            'Long-term financing',
            'Commodity price insurance',
            'Environmental compliance support',
            'Risk mitigation strategies'
          ]
        },
        {
          name: 'Manufacturing & Raw Materials',
          icon: 'Package',
          description: 'Industrial manufacturing, raw material procurement, and equipment financing',
          color: '#3b82f6',
          specialization: [
            'Raw material sourcing',
            'Manufacturing equipment',
            'Production financing',
            'Supply chain funding'
          ],
          examples: ['Textiles', 'Chemicals', 'Metals processing', 'Plastics', 'Ceramics'],
          challenges: ['Supply chain disruptions', 'Price fluctuations', 'Quality standards', 'Lead times'],
          solutions: [
            'Supply chain financing',
            'Supplier credit programs',
            'Quality guarantee bonds',
            'Just-in-time financing'
          ]
        },
        {
          name: 'Consumer Goods & Distribution',
          icon: 'Package',
          description: 'Retail product sourcing, wholesale distribution, and consumer electronics',
          color: '#06b6d4',
          specialization: [
            'Wholesale purchasing',
            'Retail distribution',
            'Consumer electronics',
            'Fashion & apparel'
          ],
          examples: ['Fashion items', 'Electronics', 'Furniture', 'Beauty products', 'Sports equipment'],
          challenges: ['Seasonal trends', 'Fashion cycles', 'Inventory management', 'Consumer demand'],
          solutions: [
            'Seasonal financing programs',
            'Inventory financing',
            'Demand forecasting support',
            'Markdown protection'
          ]
        },
        {
          name: 'Construction & Infrastructure',
          icon: 'Building',
          description: 'Construction materials, infrastructure projects, and heavy equipment',
          color: '#8b5cf6',
          specialization: [
            'Construction material sourcing',
            'Equipment leasing',
            'Project financing',
            'Infrastructure development'
          ],
          examples: ['Steel & cement', 'Heavy machinery', 'Building materials', 'Construction equipment'],
          challenges: ['Long project cycles', 'High upfront costs', 'Regulatory requirements', 'Weather delays'],
          solutions: [
            'Project-based financing',
            'Progress payment systems',
            'Equipment leasing',
            'Performance guarantees'
          ]
        },
        {
          name: 'Technology & Electronics',
          icon: 'Cpu',
          description: 'Tech product sourcing, electronic components, and IT equipment',
          color: '#10b981',
          specialization: [
            'Component procurement',
            'Electronics assembly',
            'Software licensing',
            'Hardware distribution'
          ],
          examples: ['Semiconductors', 'Circuit boards', 'Computing equipment', 'Mobile devices'],
          challenges: ['Rapid obsolescence', 'Technology changes', 'Supply constraints', 'Quality standards'],
          solutions: [
            'Fast-track financing',
            'Technology upgrade support',
            'Quality certification',
            'Component sourcing programs'
          ]
        }
      ];

  // Key features of industry support
  const features = [
    {
      title: 'Industry Expertise',
      description: 'Deep knowledge of industry-specific challenges and financing needs',
      icon: '📊'
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored financing structures designed for your specific industry',
      icon: '⚙️'
    },
    {
      title: 'Quick Processing',
      description: 'Fast approvals with understanding of industry cycles and timelines',
      icon: '⚡'
    },
    {
      title: 'Risk Management',
      description: 'Specialized insurance and hedging solutions for industry risks',
      icon: '🛡️'
    }
  ];

  // Industry statistics
  const stats = [
    { value: '6+', label: 'Major Industries', icon: '🏭' },
    { value: '50+', label: 'Sub-sectors', icon: '📋' },
    { value: '$500M+', label: 'Financed Annually', icon: '💰' },
    { value: '95%', label: 'Repeat Clients', icon: '👥' }
  ];

  return (
    <section 
      className={styles.industriesSupported}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Industries We Support</h2>
          <p className={styles.subtitle}>
            We provide specialized financing solutions across diverse industries, 
            understanding unique challenges and opportunities in each sector.
          </p>
        </div>

        {/* Features Section */}
        <div className={`${styles.featuresSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className={styles.featureCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Grid */}
        <div className={`${styles.industriesGrid} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.gridHeader}>
            <h3 className={styles.gridTitle}>Explore Industries</h3>
            <p className={styles.gridSubtitle}>Click on any industry card to see detailed information</p>
          </div>

          <div className={styles.cardsGrid}>
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                industry={industry}
                index={index}
                isExpanded={selectedIndustry === index}
                onToggle={() => setSelectedIndustry(selectedIndustry === index ? null : index)}
                isVisible={isVisible}
                icon={iconMap[industry.icon] || iconMap.Package}
              />
            ))}
          </div>
        </div>

        {/* Industry Statistics */}
        <div className={`${styles.statsSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.statsTitle}>Our Industry Impact</h3>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={styles.statCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Comparison */}
        <div className={`${styles.comparisonSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.comparisonTitle}>Financing by Industry Type</h3>
          <div className={styles.comparisonContent}>
            <div className={styles.comparisonItem}>
              <h4>Capital-Intensive Industries</h4>
              <p>Oil & Gas, Mining, Construction, Infrastructure</p>
              <ul>
                <li>Long-term financing (5-10 years)</li>
                <li>Project-based structures</li>
                <li>Government support options</li>
              </ul>
            </div>

            <div className={styles.comparisonItem}>
              <h4>Trade & Commerce Industries</h4>
              <p>Consumer Goods, Fashion, Electronics, Retail</p>
              <ul>
                <li>Short-term financing (30-180 days)</li>
                <li>Seasonal support programs</li>
                <li>Flexible payment terms</li>
              </ul>
            </div>

            <div className={styles.comparisonItem}>
              <h4>Commodity Industries</h4>
              <p>Agriculture, Energy, Metals, Minerals</p>
              <ul>
                <li>Price hedging support</li>
                <li>Commodity-backed financing</li>
                <li>Dynamic inventory management</li>
              </ul>
            </div>

            <div className={styles.comparisonItem}>
              <h4>Specialized Industries</h4>
              <p>Technology, Pharmaceuticals, Manufacturing</p>
              <ul>
                <li>Innovation-focused financing</li>
                <li>Supply chain solutions</li>
                <li>Quality assurance programs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className={`${styles.successSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.successTitle}>Why Industries Trust Us</h3>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h5>Deep Industry Knowledge</h5>
                <p>Our teams understand the nuances of each industry's financing needs</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h5>Tailored Solutions</h5>
                <p>Customized financing structures designed specifically for your sector</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h5>Rapid Decision Making</h5>
                <p>Quick approvals based on industry-specific criteria and benchmarks</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h5>Risk Mitigation</h5>
                <p>Specialized insurance, hedging, and guarantee solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h3>Ready to Finance Your Industry?</h3>
            <p>
              Contact our industry specialists to discuss customized financing solutions 
              for your specific sector and business needs.
            </p>
          </div>
          <button className={styles.ctaButton}>
            <span>Connect With Specialists</span>
            <ArrowRight size={20} />
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

export default IndustriesSupported;