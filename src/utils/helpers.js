// src/utils/helpers.js

/**
 * Smooth scroll to element by ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top (default: 80px for fixed navbar)
 */
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId.replace('#', ''));
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Debounce function to limit the rate of function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @param {boolean} immediate - Whether to execute immediately
 */
export const debounce = (func, wait, immediate) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

/**
 * Throttle function to limit the rate of function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Check if element is in viewport
 * @param {Element} element - DOM element to check
 * @param {number} threshold - Percentage of element that should be visible (0-1)
 */
export const isInViewport = (element, threshold = 0.1) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const elementHeight = rect.height;
  const elementTop = rect.top;
  const elementBottom = rect.bottom;
  
  const visibleHeight = Math.min(elementBottom, window.innerHeight) - Math.max(elementTop, 0);
  const visiblePercentage = visibleHeight / elementHeight;
  
  return visiblePercentage >= threshold;
};

/**
 * Format phone number
 * @param {string} phoneNumber - Raw phone number
 * @returns {string} Formatted phone number
 */
export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  } else if (cleaned.length === 11) {
    return cleaned.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '$1 ($2) $3-$4');
  }
  
  return phoneNumber;
};

/**
 * Validate email address
 * @param {string} email - Email address to validate
 * @returns {boolean} Whether email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} Whether phone is valid
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[+]?([1-9][0-9]{0,15})$/;
  const cleaned = phone.replace(/[\s()-]/g, '');
  return phoneRegex.test(cleaned) && cleaned.length >= 10;
};

/**
 * Format file size in human readable format
 * @param {number} bytes - File size in bytes
 * @returns {string} Formatted file size
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Generate unique ID
 * @returns {string} Unique identifier
 */
export const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
};

/**
 * Capitalize first letter of each word
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalizeWords = (str) => {
  return str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} suffix - Suffix to add (default: '...')
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength, suffix = '...') => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + suffix;
};

/**
 * Deep clone an object
 * @param {Object} obj - Object to clone
 * @returns {Object} Cloned object
 */
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  if (typeof obj === 'object') {
    const clonedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
};

/**
 * Check if object is empty
 * @param {Object} obj - Object to check
 * @returns {boolean} Whether object is empty
 */
export const isEmpty = (obj) => {
  if (!obj) return true;
  if (Array.isArray(obj)) return obj.length === 0;
  if (typeof obj === 'object') return Object.keys(obj).length === 0;
  return false;
};

/**
 * Format currency
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @param {string} locale - Locale (default: 'en-US')
 * @returns {string} Formatted currency
 */
export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

/**
 * Get file extension from filename
 * @param {string} filename - Filename
 * @returns {string} File extension
 */
export const getFileExtension = (filename) => {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
};

/**
 * Convert string to URL slug
 * @param {string} str - String to convert
 * @returns {string} URL slug
 */
export const slugify = (str) => {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

/**
 * Get contrast color (black or white) based on background color
 * @param {string} hexColor - Hex color code
 * @returns {string} 'black' or 'white'
 */
export const getContrastColor = (hexColor) => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminance > 0.5 ? 'black' : 'white';
};