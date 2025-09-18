// src/utils/constants.js

// Company Information
export const COMPANY = {
  name: 'Globe Sourcing Procurement',
  tagline: 'Global Procurement and Sourcing Solutions',
  description: 'Source products in bulk directly from verified manufacturers and suppliers worldwide.',
  email: 'info@globesourceprocurement.com',
  phone: '+254-XXX-XXXXXX',
  address: {
    street: '123 Business Avenue',
    city: 'Mombasa',
    state: 'Mombasa County',
    country: 'Kenya',
    postalCode: '80100'
  },
  socialMedia: {
    linkedin: 'https://linkedin.com/company/globesourceprocurement',
    twitter: 'https://twitter.com/globesourcepro',
    facebook: 'https://facebook.com/globesourceprocurement'
  }
};

// Navigation Items
export const NAV_ITEMS = [
  { name: 'Home', href: '#home', path: '/' },
  { name: 'About', href: '#about', path: '/about' },
  { name: 'Services', href: '#services', path: '/#services' },
  { name: 'Vendors', href: '#vendors', path: '/#vendors' },
  { name: 'Buyers', href: '#buyers', path: '/#buyers' },
  { name: 'Contact', href: '#contact', path: '/contact' }
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