// src/components/Testimonials/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { TESTIMONIALS } from '../../utils/constants';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  // Create extended testimonials array with first testimonial duplicated at the end
  const extendedTestimonials = [...TESTIMONIALS, TESTIMONIALS[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= TESTIMONIALS.length) {
            // Reset to beginning without animation
            return 0;
          }
          return prev + 1;
        });
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return TESTIMONIALS.length - 1;
      }
      return prev - 1;
    });
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= TESTIMONIALS.length) {
        return 0;
      }
      return prev + 1;
    });
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  // Resume auto-play after user stops interacting
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section 
      id="testimonials" 
      className={styles.testimonials}
      ref={sectionRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>What Our Clients Say</h2>
            <p className={styles.subtitle}>
              Trusted by thousands of businesses worldwide for reliable procurement solutions
            </p>
          </div>
          
          {/* Overall Rating */}
          <div className={styles.overallRating}>
            <div className={styles.ratingStars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className={styles.star} />
              ))}
            </div>
            <div className={styles.ratingText}>
              <span className={styles.ratingScore}>4.9</span>
              <span className={styles.ratingLabel}>out of 5 based on 1,200+ reviews</span>
            </div>
            <div className={styles.globalIndicator}>
              <span className={styles.globalText}>🌍 Global Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className={`${styles.carouselContainer} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.carousel}>
            {/* Navigation Buttons */}
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={goToPrevious}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>

            {/* Testimonial Cards */}
            <div
              className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  isActive={index === currentIndex}
                  index={index}
                />
              ))}
            </div>

            {/* Featured Quote Overlay */}
            <div className={styles.featuredQuote}>
              <Quote size={48} className={styles.quoteIcon} />
            </div>
          </div>

          {/* Pagination Dots */}
          <div className={styles.pagination}>
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className={styles.autoPlayIndicator}>
            <div className={styles.progressBar}>
              <div 
                className={`${styles.progressFill} ${isAutoPlaying ? styles.animating : ''}`}
                key={currentIndex} // Reset animation on slide change
              />
            </div>
            <span className={styles.autoPlayText}>
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </span>
          </div>
        </div>

        {/* Statistics Section */}
        <div className={`${styles.statsSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
              <div className={styles.statSubtext}>Across all regions</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1,200+</div>
              <div className={styles.statLabel}>Happy Customers</div>
              <div className={styles.statSubtext}>Worldwide</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>5,000+</div>
              <div className={styles.statLabel}>Successful Projects</div>
              <div className={styles.statSubtext}>Completed globally</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Customer Support</div>
              <div className={styles.statSubtext}>Multiple time zones</div>
            </div>
          </div>

          {/* Global Presence */}
          <div className={styles.globalPresence}>
            <h4 className={styles.globalTitle}>Trusted Worldwide</h4>
            <div className={styles.regions}>
              <span className={styles.region}>🇨🇳 China</span>
              <span className={styles.region}>🇬🇧 United Kingdom</span>
              <span className={styles.region}>🇺🇸 United States</span>
              <span className={styles.region}>🇮🇳 India</span>
              <span className={styles.region}>🇸🇬 Singapore</span>
              <span className={styles.region}>🇮🇩 Indonesia</span>
              <span className={styles.region}>🇪🇬 Egypt</span>
              <span className={styles.region}>🇧🇷 Brazil</span>
              <span className={styles.region}>🇩🇪 Germany</span>
              <span className={styles.region}>+ 40 more countries</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.ctaTitle}>Ready to Join Our Success Stories?</h3>
          <p className={styles.ctaDescription}>
            Start your procurement journey today and experience the Globe Sourcing difference
          </p>
          <div className={styles.ctaButtons}>
            <button 
              className={styles.primaryCta}
              onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Now
            </button>
            <button 
              className={styles.secondaryCta}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className={styles.backgroundDecorations}>
        <div className={styles.decoration1}></div>
        <div className={styles.decoration2}></div>
        <div className={styles.decoration3}></div>
      </div>
    </section>
  );
};

export default Testimonials;