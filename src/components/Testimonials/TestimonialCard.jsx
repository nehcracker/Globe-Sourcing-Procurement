// src/components/Testimonials/TestimonialCard.jsx
import React from 'react';
import { Star, Building, MapPin, Quote } from 'lucide-react';
import styles from './TestimonialCard.module.css';

const TestimonialCard = ({ testimonial, isActive, index }) => {
  const { 
    name, 
    company, 
    role, 
    location,
    testimonial: quote, 
    rating, 
    image,
    category,
    flag 
  } = testimonial;

  // Generate star rating
  const renderStars = () => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${styles.star} ${i < rating ? styles.starFilled : ''}`}
      />
    ));
  };

  // Get placeholder avatar color based on category
  const getAvatarColor = () => {
    const vendorColors = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    ];
    const buyerColors = [
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    ];
    
    const colors = category === 'vendor' ? vendorColors : buyerColors;
    return colors[index % colors.length];
  };

  // Get initials from name
  const getInitials = () => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={`${styles.testimonialCard} ${isActive ? styles.active : ''}`}>
      <div className={styles.cardContent}>
        {/* Quote Section */}
        <div className={styles.quoteSection}>
          <div className={styles.quoteIcon}>
            <Quote size={32} />
          </div>
          <blockquote className={styles.quote}>
            "{quote}"
          </blockquote>
        </div>

        {/* Author Section */}
        <div className={styles.authorSection}>
          <div className={styles.authorAvatar}>
            {image ? (
              <img 
                src={image} 
                alt={`${name} avatar`}
                className={styles.avatarImage}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            <div 
              className={styles.avatarPlaceholder}
              style={{ 
                background: getAvatarColor(),
                display: image ? 'none' : 'flex'
              }}
            >
              {getInitials()}
            </div>
          </div>

          <div className={styles.authorInfo}>
            <div className={styles.authorName}>{name}</div>
            <div className={styles.authorRole}>{role}</div>
            <div className={styles.authorCompany}>
              <Building size={14} />
              <span>{company}</span>
            </div>
            <div className={styles.authorLocation}>
              <MapPin size={12} />
              <span className={styles.locationFlag}>{flag}</span>
              <span>{location}</span>
            </div>
          </div>

          {/* Rating */}
          <div className={styles.ratingSection}>
            <div className={styles.stars}>
              {renderStars()}
            </div>
            <div className={styles.ratingValue}>
              {rating}.0
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div className={`${styles.categoryBadge} ${styles[category]}`}>
          <div className={styles.badgeContent}>
            <span className={styles.badgeIcon}>
              {category === 'vendor' ? '🏭' : '🛒'}
            </span>
            <span>
              {category === 'vendor' ? 'Verified Vendor' : 'Verified Buyer'}
            </span>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className={`${styles.cardDecoration} ${styles[category]}`}></div>
      
      {/* Active Indicator */}
      {isActive && <div className={styles.activeIndicator}></div>}
    </div>
  );
};

export default TestimonialCard;