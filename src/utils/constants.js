// src/utils/constants.js

// Company Information
export const COMPANY = {
  name: 'Global Source',
  tagline: 'Global Source Procurement & Bulk Sourcing Solutions',
  description: 'Source products in bulk directly from verified manufacturers and suppliers worldwide.',
  email: 'info@globesourceprocurement.com',
  address: {
    street: 'Saint John Woods',
    city: '<London>',
    country: 'United Kingdom',
  },
  socialMedia: {
    linkedin: 'https://linkedin.com/company/globesourceprocurement',
    twitter: 'https://twitter.com/globesourcepro',
    facebook: 'https://facebook.com/globesourceprocurement'
  }
};

// Navigation Items
export const NAV_ITEMS = [
  { name: 'Home', href: 'home', path: '/' },
  { name: 'About', href: 'about', path: '/about' },
  { name: 'Services', href: 'services', path: '/services' },
  { name: 'Vendors', href: 'vendors', path: '/vendors' },
  { name: 'Buyers', href: 'buyers', path: '/buyers' },
  { name: 'Contact', href: 'contact', path: '/contact' }
];

// Services Data
export const SERVICES = [
  {
    id: 'product-sourcing',
    title: 'Product Sourcing',
    description: 'Find verified global suppliers for bulk orders across all industries and product categories.',
    icon: 'Globe',
    features: [
      'Verified supplier network',
      'Quality assurance checks',
      'Competitive pricing',
      'Global reach'
    ]
  },
  {
    id: 'procurement-purchasing',
    title: 'Procurement & Purchasing',
    description: 'We handle negotiations, purchase orders, and supplier relationship management end-to-end.',
    icon: 'Package',
    features: [
      'Expert negotiations',
      'Purchase order management',
      'Supplier relationships',
      'Cost optimization'
    ]
  },
  {
    id: 'delivery-logistics',
    title: 'Delivery & Logistics',
    description: 'Complete logistics solutions with door-to-door delivery tracking and quality assurance.',
    icon: 'Truck',
    features: [
      'Door-to-door delivery',
      'Real-time tracking',
      'Quality assurance',
      'Insurance coverage'
    ]
  }
];

// Process Steps
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Vendor submits quote',
    description: 'Suppliers upload product details, pricing, and samples to our platform',
    icon: 'Upload'
  },
  {
    step: '02',
    title: 'Buyer selects product',
    description: 'Buyers browse verified products and place bulk orders with confidence',
    icon: 'ShoppingCart'
  },
  {
    step: '03',
    title: 'We facilitate procurement',
    description: 'Globe Sourcing handles negotiations, procurement, and end-to-end logistics',
    icon: 'CheckCircle'
  }
];

// Testimonials Data
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Li Wei Chen',
    company: 'Guangzhou Manufacturing Co.',
    role: 'Export Manager',
    location: 'Guangzhou, China',
    testimonial: 'We partnered with Globe Sourcing Procurement to expand our exports. The quote system allowed us to reach new buyers quickly and efficiently.',
    rating: 5,
    image: '/images/testimonials/li-wei-chen.jpg',
    category: 'vendor',
    flag: '🇨🇳'
  },
  {
    id: 2,
    name: 'Zhang Ming',
    company: 'Shenzhen Tech Exports Ltd',
    role: 'Production Director',
    location: 'Shenzhen, China',
    testimonial: 'Their procurement process reduced negotiation time significantly and helped us focus on what we do best - production.',
    rating: 5,
    image: '/images/testimonials/zhang-ming.jpg',
    category: 'vendor',
    flag: '🇨🇳'
  },
  {
    id: 3,
    name: 'Wang Xiu Ying',
    company: 'Shanghai Electronics Supply',
    role: 'Logistics Coordinator',
    location: 'Shanghai, China',
    testimonial: 'We shipped bulk electronics through their platform and the logistics were handled end-to-end without any delays. Impressive service!',
    rating: 5,
    image: '/images/testimonials/wang-xiu-ying.jpg',
    category: 'vendor',
    flag: '🇨🇳'
  },

  // United Kingdom
  {
    id: 4,
    name: 'James Thompson',
    company: 'London Trade Solutions',
    role: 'Procurement Director',
    location: 'London, United Kingdom',
    testimonial: 'The platform gave us direct access to reliable Asian suppliers. The vetting process ensured quality every time.',
    rating: 5,
    image: '/images/testimonials/james-thompson.jpg',
    category: 'buyer',
    flag: '🇬🇧'
  },
  {
    id: 5,
    name: 'Sarah Mitchell',
    company: 'Birmingham Industrial Group',
    role: 'Procurement Manager',
    location: 'Birmingham, United Kingdom',
    testimonial: 'We sourced raw materials in bulk at competitive prices. The support team was efficient and always available when needed.',
    rating: 5,
    image: '/images/testimonials/sarah-mitchell.jpg',
    category: 'buyer',
    flag: '🇬🇧'
  },
  {
    id: 6,
    name: 'David Clarke',
    company: 'Manchester Retail Chain',
    role: 'Supply Chain Manager',
    location: 'Manchester, United Kingdom',
    testimonial: 'Our retail chain now depends on their services to keep our sourcing consistent. They\'ve become our trusted procurement partner.',
    rating: 5,
    image: '/images/testimonials/david-clarke.jpg',
    category: 'buyer',
    flag: '🇬🇧'
  },

  // United States
  {
    id: 7,
    name: 'Michael Rodriguez',
    company: 'NYC Import Solutions',
    role: 'Import Manager',
    location: 'New York, United States',
    testimonial: 'We were able to compare multiple quotes from global vendors before making decisions. Transparent and reliable every step of the way.',
    rating: 5,
    image: '/images/testimonials/michael-rodriguez.jpg',
    category: 'buyer',
    flag: '🇺🇸'
  },
  {
    id: 8,
    name: 'Jennifer Adams',
    company: 'Houston Distribution Inc.',
    role: 'Operations Director',
    location: 'Houston, United States',
    testimonial: 'The bulk order process was incredibly smooth. We received samples first, which built our confidence in the suppliers.',
    rating: 5,
    image: '/images/testimonials/jennifer-adams.jpg',
    category: 'buyer',
    flag: '🇺🇸'
  },
  {
    id: 9,
    name: 'Robert Kim',
    company: 'LA Supply Chain Corp',
    role: 'Supply Chain Director',
    location: 'Los Angeles, United States',
    testimonial: 'Globe Sourcing Procurement connected us with new product lines from Asia, saving us months of supplier search time.',
    rating: 5,
    image: '/images/testimonials/robert-kim.jpg',
    category: 'buyer',
    flag: '🇺🇸'
  },

  // Asia (outside China)
  {
    id: 10,
    name: 'Priya Sharma',
    company: 'Mumbai Textiles Pvt Ltd',
    role: 'Export Manager',
    location: 'Mumbai, India',
    testimonial: 'As a textile producer in India, we secured multiple international buyers through the platform. The global reach is outstanding.',
    rating: 5,
    image: '/images/testimonials/priya-sharma.jpg',
    category: 'vendor',
    flag: '🇮🇳'
  },
  {
    id: 11,
    name: 'Lim Wei Kang',
    company: 'Singapore Trading House',
    role: 'Procurement Specialist',
    location: 'Singapore',
    testimonial: 'Our company sourced agricultural products from Africa without travel. The process was seamless and saved us significant costs.',
    rating: 5,
    image: '/images/testimonials/lim-wei-kang.jpg',
    category: 'buyer',
    flag: '🇸🇬'
  },
  {
    id: 12,
    name: 'Sari Dewi',
    company: 'Jakarta Spice Exports',
    role: 'Business Development Manager',
    location: 'Jakarta, Indonesia',
    testimonial: 'We export spices from Indonesia and found verified buyers within weeks. The platform opened doors we never knew existed.',
    rating: 5,
    image: '/images/testimonials/sari-dewi.jpg',
    category: 'vendor',
    flag: '🇮🇩'
  },

  // Additional testimonials for better rotation
  {
    id: 13,
    name: 'Ahmed Hassan',
    company: 'Cairo International Trading',
    role: 'General Manager',
    location: 'Cairo, Egypt',
    testimonial: 'The quality assurance and verification process gave us confidence in every transaction. Professional service throughout.',
    rating: 5,
    image: '/images/testimonials/ahmed-hassan.jpg',
    category: 'buyer',
    flag: '🇪🇬'
  },
  {
    id: 14,
    name: 'Maria Santos',
    company: 'São Paulo Imports',
    role: 'Purchasing Director',
    location: 'São Paulo, Brazil',
    testimonial: 'We\'ve reduced our procurement costs by 40% while maintaining quality. Globe Sourcing has transformed our business.',
    rating: 5,
    image: '/images/testimonials/maria-santos.jpg',
    category: 'buyer',
    flag: '🇧🇷'
  },
  {
    id: 15,
    name: 'Hans Mueller',
    company: 'Berlin Industrial Supplies',
    role: 'Procurement Manager',
    location: 'Berlin, Germany',
    testimonial: 'The platform\'s efficiency and the team\'s expertise have made international sourcing stress-free for our company.',
    rating: 5,
    image: '/images/testimonials/hans-mueller.jpg',
    category: 'buyer',
    flag: '🇩🇪'
  }
];

// Product Categories
export const PRODUCT_CATEGORIES = [
  'Agricultural Products',
  'Industrial Equipment',
  'Electronics & Technology',
  'Textiles & Apparel',
  'Automotive Parts',
  'Construction Materials',
  'Food & Beverages',
  'Medical Supplies',
  'Chemicals',
  'Other'
];

// Form Validation Rules
export const VALIDATION_RULES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  minLength: (min) => `Minimum ${min} characters required`,
  maxLength: (max) => `Maximum ${max} characters allowed`,
  positiveNumber: 'Please enter a positive number'
};

// API Endpoints (for future backend integration)
export const API_ENDPOINTS = {
  baseUrl: process.env.REACT_APP_API_URL || 'https://api.globesourceprocurement.com',
  vendor: {
    submit: '/api/vendor/submit',
    list: '/api/vendor/list'
  },
  buyer: {
    request: '/api/buyer/request',
    orders: '/api/buyer/orders'
  },
  contact: {
    submit: '/api/contact/submit'
  }
};

// Animation Durations
export const ANIMATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  fade: 600
};

// Breakpoints
export const BREAKPOINTS = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  large: '1280px',
  xlarge: '1536px'
};

// File Upload Limits
export const FILE_UPLOAD = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  allowedExtensions: ['.jpg', '.jpeg', '.png', '.pdf', '.doc', '.docx']
};


export const ABOUT_PAGE_CONTENT = {
  hero: {
    headline: "About Globe Sourcing Procurement",
    subtext: "Procurement & Sourcing Solutions Limited is a global platform connecting buyers and vendors for bulk product sourcing, purchasing, and delivery.",
    backgroundImage: "/images/about/global-trade-hero.jpg"
  },
  whoWeAre: {
    title: "Who We Are",
    content: "We are a procurement and sourcing company bridging the gap between global buyers and bulk product vendors. Our mission is to simplify international sourcing by providing a transparent, reliable, and efficient process. We ensure suppliers are vetted, products are verified, and logistics are streamlined."
  },
  mission: "To provide secure and seamless sourcing of bulk products worldwide while protecting the interests of both buyers and vendors.",
  vision: "To become the most trusted platform for global procurement, connecting manufacturers, suppliers, and buyers under one transparent ecosystem.",
  coreValues: [
    {
      id: 1,
      title: "Transparency",
      description: "Open communication and clear processes",
      icon: "Eye"
    },
    {
      id: 2,
      title: "Reliability",
      description: "Dependable sourcing and delivery",
      icon: "Shield"
    },
    {
      id: 3,
      title: "Quality Assurance",
      description: "Verified suppliers and product samples",
      icon: "CheckCircle"
    },
    {
      id: 4,
      title: "Global Reach",
      description: "Connecting markets across continents",
      icon: "Globe"
    },
    {
      id: 5,
      title: "Efficiency",
      description: "Speed and professionalism in procurement",
      icon: "Zap"
    }
  ],
  whyChooseUs: [
    {
      id: 1,
      title: "Verified Global Supplier Network",
      description: "Access to pre-vetted suppliers worldwide"
    },
    {
      id: 2,
      title: "End-to-End Procurement & Logistics",
      description: "Complete solution from sourcing to delivery"
    },
    {
      id: 3,
      title: "Bulk Order Specialization",
      description: "Expertise in large-volume transactions"
    },
    {
      id: 4,
      title: "Transparent Service Fees",
      description: "Fair pricing that protects all parties"
    },
    {
      id: 5,
      title: "Dedicated Support Team",
      description: "24/7 professional assistance"
    }
  ],
  cta: {
    title: "Ready to source or sell in bulk?",
    subtitle: "Partner with us today",
    buttonText: "Get Started"
  }
};

// Add this to your src/utils/constants.js file

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: 'Global Procurement & Bulk Sourcing Solutions',
  siteName: 'Globe Sourcing Procurement',
  siteUrl: process.env.REACT_APP_SITE_URL || 'https://globesourceprocurement.com',
  defaultDescription: 'Connect with verified global suppliers for bulk product sourcing. Trusted procurement platform serving 2,500+ companies across 50+ countries with end-to-end logistics.',
  defaultKeywords: 'global procurement, bulk sourcing, international suppliers, procurement platform, wholesale products, B2B sourcing, supply chain, logistics, verified suppliers, bulk orders',
  defaultImage: '/images/og-globe-sourcing.jpg',
  twitterHandle: '@globesourcepro',
  facebookAppId: '', // Add if you have Facebook App ID
  googleSiteVerification: 'kL9BMne3dPuWscjCq4_Ulx9DMGKXm7Q65rNdBQyk0zk', // Add Google Search Console verification code
  bingSiteVerification: '' // Add Bing Webmaster verification code
};

// Page-specific SEO data
export const PAGE_SEO_DATA = {
  home: {
    title: 'Global Source Procurement & Bulk Sourcing Solutions',
    description: 'We connect buyers with trusted vendors for seamless international trade and end-to-end logistics support.',
    keywords: 'global procurement, bulk sourcing, international suppliers, procurement platform, wholesale products, B2B sourcing, supply chain, logistics, verified suppliers, bulk orders, global trade',
    url: '/',
    image: '/images/og-home-globe-sourcing.jpg'
  },
  
  about: {
    title: 'Procurement & Product Sourcing Experts | Bulk Product Sourcing',
    description: 'Procurement & Sourcing Solutions Limited is a global platform connecting buyers and vendors for bulk product sourcing, purchasing, and delivery.',
    keywords: 'about globe sourcing, procurement company, global sourcing mission, international trade, supply chain solutions, B2B platform, procurement services, verified suppliers',
    url: '/about',
    image: '/images/og-about-globe-sourcing.jpg'
  },
  
  services: {
    title: 'Global Product Procurement | Supplier Sourcing | Bulk Products',
    description: 'Comprehensive procurement services including product sourcing, supplier verification, logistics coordination, and end-to-end delivery. Serving businesses worldwide.',
    keywords: 'procurement services, product sourcing, supplier verification, logistics services, international shipping, bulk ordering, supply chain management',
    url: '/#services',
    image: '/images/og-services-globe-sourcing.jpg'
  },
  
  testimonials: {
    title: 'Client Success Stories & Reviews - Trusted Globally',
    description: 'Read testimonials from our satisfied clients across China, UK, USA, India, and more. 4.9/5 rating from 1,200+ reviews on our global procurement platform.',
    keywords: 'client testimonials, procurement reviews, supplier feedback, global clients, success stories, verified reviews, customer satisfaction',
    url: '/#testimonials',
    image: '/images/og-testimonials-globe-sourcing.jpg'
  }
};

// Structured Data Schemas
export const STRUCTURED_DATA = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Global Source Procurementt",
    "alternateName": "Procurement & Sourcing Services Limited",
    "url": "https://globesourceprocurement.com",
    "logo": "https://globesourceprocurement.com/images/logo-structured-data.png",
    "description": "Global procurement and sourcing platform connecting verified suppliers with buyers worldwide for bulk product sourcing and logistics.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Saint John Woods",
      "addressLocality": "London",
      "addressRegion": "United Kingdom", 
      "addressCountry": "UK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@globesourceprocurement.com",
      "availableLanguage": ["English"],
      "areaServed": "Worldwide"
    },
    "sameAs": [
      "https://linkedin.com/company/globesourceprocurement",
      "https://twitter.com/globesourcepro",
      "https://facebook.com/globesourceprocurement"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1200"
    },
    "services": [
      "Global Product Sourcing",
      "Supplier Verification",
      "Bulk Order Procurement",
      "International Logistics",
      "Bulk Product Sourcing",
      "Product Sourcing Services",
      "Supply Chain Management"
    ]
  },
  
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Global Source Procurement",
    "url": "https://globesourceprocurement.com",
    "description": "Global procurement platform connecting buyers with verified suppliers for bulk product sourcing and international trade.",
    "publisher": {
      "@type": "Organization",
      "name": "Globe Sourcing Procurement"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://globesourceprocurement.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Global Procurement and Sourcing",
    "provider": {
      "@type": "Organization",
      "name": "Globe Sourcing Procurement"
    },
    "description": "End-to-end procurement services including product sourcing, supplier verification, bulk ordering, and international logistics coordination.",
    "areaServed": "Worldwide",
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Businesses seeking bulk product sourcing"
    },
    "offers": {
      "@type": "Offer",
      "description": "Global procurement and sourcing services",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "price": "Contact for quote"
      }
    }
  },
  
  breadcrumb: {
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
        "name": "About",
        "item": "https://globesourceprocurement.com/about"
      }
    ]
  }
};