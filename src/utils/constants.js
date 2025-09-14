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
    name: 'Sarah Kimani',
    company: 'Kenya Agricultural Supplies Ltd',
    role: 'Procurement Manager',
    testimonial: 'We sourced agricultural inputs seamlessly through Globe Sourcing. Their verified supplier network saved us months of research.',
    rating: 5,
    image: '/images/testimonials/sarah-kimani.jpg'
  },
  {
    id: 2,
    name: 'James Ochieng',
    company: 'East Africa Manufacturing Co.',
    role: 'Operations Director',
    testimonial: 'Delivery was timely and efficient. The end-to-end service gave us complete peace of mind for our bulk orders.',
    rating: 5,
    image: '/images/testimonials/james-ochieng.jpg'
  },
  {
    id: 3,
    name: 'Fatuma Hassan',
    company: 'Coastal Trading Enterprise',
    role: 'CEO',
    testimonial: 'The process gave us confidence in supplier quality. Globe Sourcing\'s due diligence is exceptional.',
    rating: 5,
    image: '/images/testimonials/fatuma-hassan.jpg'
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