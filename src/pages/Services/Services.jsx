// src/pages/Services/Services.jsx
import React from 'react';
import SEO from '../../components/SEO/SEO';
import Navbar from '../../components/Layout/Navbar/Navbar';
import ServicesHero from '../../components/Services/ServicesHero/ServicesHero';
import ServiceSection from '../../components/Services/ServiceSection/ServiceSection';
import ServicesCTA from '../../components/Services/ServicesCTA/ServicesCTA';
import { 
  Package, 
  Globe, 
  Truck, 
  Users, 
  CreditCard, 
  MessageSquare 
} from 'lucide-react';
import { PAGE_SEO_DATA, STRUCTURED_DATA } from '../../utils/constants';
import styles from './Services.module.css';

const Services = () => {
  const seoData = PAGE_SEO_DATA.services;

  // Services data mapped according to the content structure
  const servicesData = [
    {
      title: "Procurement and Sourcing Services",
      description: "We excel at identifying, evaluating, and managing suppliers to ensure your business gets the best products at competitive prices. Our strategic approach to procurement focuses on building long-term partnerships that deliver consistent value and quality for your operations.",
      bulletPoints: [
        "Strategic sourcing for bulk and specialized products",
        "Supplier identification, vetting, and management",
        "Price negotiations and contract support",
        "Quality assurance and compliance checks"
      ],
      icon: <Package size={48} />,
      accentColor: "#3B82F6"
    },
    {
      title: "Global Product Sourcing",
      description: "Leverage our extensive worldwide sourcing networks to access the best manufacturers and suppliers across multiple continents. We specialize in connecting you with verified partners who can deliver quality products that meet your specifications and budget requirements.",
      bulletPoints: [
        "Bulk product sourcing from verified manufacturers",
        "Specialized sourcing for niche products",
        "Market research and comparative analysis",
        "Multi-supplier coordination and management"
      ],
      icon: <Globe size={48} />,
      isReversed: true,
      accentColor: "#10B981"
    },
    {
      title: "Supply Chain and Logistics Management",
      description: "Streamline your logistics operations with our comprehensive supply chain management services. From warehousing to final delivery, we ensure your products reach their destination safely, on time, and within budget while providing complete transparency throughout the process.",
      bulletPoints: [
        "Freight forwarding and customs clearance",
        "Warehousing and distribution management",
        "Risk management and insurance support",
        "Real-time tracking and reporting"
      ],
      icon: <Truck size={48} />,
      accentColor: "#F59E0B"
    },
    {
      title: "Vendor & Contract Management",
      description: "Build and maintain strong, long-term supplier relationships that drive mutual success. Our vendor management services ensure consistent performance, compliance, and continuous improvement while protecting your business interests through comprehensive contract oversight.",
      bulletPoints: [
        "Vendor assessment and onboarding",
        "Contract drafting and compliance monitoring",
        "Performance monitoring and reporting",
        "Dispute resolution and relationship management"
      ],
      icon: <Users size={48} />,
      isReversed: true,
      accentColor: "#8B5CF6"
    },
    {
      title: "Import & Export Financing",
      description: "Navigate the complexities of international trade financing with our expert support. We provide comprehensive financing solutions that facilitate smooth transactions, manage cash flow, and reduce financial risks associated with global procurement and sourcing operations.",
      bulletPoints: [
        "Import financing for advance payments to suppliers",
        "Export financing to support order fulfillment",
        "Letters of Credit (LC) and Bank Guarantees (BG)",
        "Trade credit and structured finance solutions"
      ],
      icon: <CreditCard size={48} />,
      accentColor: "#EF4444"
    },
    {
      title: "Consulting and Advisory",
      description: "Benefit from our deep industry expertise and strategic guidance to optimize your procurement processes. Our consulting services help you make informed decisions, reduce costs, mitigate risks, and develop sustainable sourcing strategies that support your long-term business growth.",
      bulletPoints: [
        "Market entry advisory and strategy development",
        "Procurement process optimization and automation",
        "Risk analysis and compliance consulting",
        "Cost reduction strategies and implementation"
      ],
      icon: <MessageSquare size={48} />,
      isReversed: true,
      accentColor: "#06B6D4"
    }
  ];

  // Combined structured data for services page
  const servicesStructuredData = [
    STRUCTURED_DATA.organization,
    STRUCTURED_DATA.service,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://globesourceprocurement.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://globesourceprocurement.com/services"
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url={seoData.url}
        image={seoData.image}
        type="website"
        structuredData={servicesStructuredData}
      />

      <div className={styles.servicesPage}>
        <Navbar />

        <main className={styles.main}>
          {/* Services Hero Section */}
          <ServicesHero />

          {/* Individual Service Sections */}
          <div className={styles.servicesContent}>
            {servicesData.map((service, index) => (
              <ServiceSection
                key={index}
                title={service.title}
                description={service.description}
                bulletPoints={service.bulletPoints}
                icon={service.icon}
                isReversed={service.isReversed}
                accentColor={service.accentColor}
                index={index}
              />
            ))}
          </div>

          {/* Services CTA Section */}
          <ServicesCTA />
        </main>
      </div>
    </>
  );
};

export default Services;