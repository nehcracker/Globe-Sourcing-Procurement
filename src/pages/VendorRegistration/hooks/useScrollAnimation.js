// src/pages/VendorRegistration/hooks/useScrollAnimation.js
import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = false,
    rootMargin = '0px'
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting) {
          setIsVisible(true);
          
          // If triggerOnce is true, stop observing after first trigger
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          // Only set to false if not triggerOnce
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    // Start observing
    observer.observe(element);

    // Cleanup
    return () => {
      observer.unobserve(element);
    };
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, isVisible };
};

export default useScrollAnimation;