// src/hooks/useScrollAnimation.js
import { useState, useEffect, useRef } from 'react';
import { isInViewport, throttle } from '../utils/helpers';

/**
 * Custom hook for scroll-based animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Percentage of element visible to trigger (0-1)
 * @param {number} options.rootMargin - Margin around root for intersection
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {Object} - { ref, isVisible, hasAnimated }
 */
const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Use Intersection Observer if available, fallback to scroll listener
    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          const shouldShow = entry.isIntersecting;

          if (shouldShow) {
            setIsVisible(true);
            if (triggerOnce) {
              setHasAnimated(true);
              observerRef.current?.unobserve(element);
            }
          } else if (!triggerOnce && !hasAnimated) {
            setIsVisible(false);
          }
        },
        {
          threshold,
          rootMargin
        }
      );

      observerRef.current.observe(element);
    } else {
      // Fallback for older browsers
      const handleScroll = throttle(() => {
        if (element && isInViewport(element, threshold)) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasAnimated(true);
            window.removeEventListener('scroll', handleScroll);
          }
        } else if (!triggerOnce && !hasAnimated) {
          setIsVisible(false);
        }
      }, 100);

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return {
    ref: elementRef,
    isVisible,
    hasAnimated
  };
};

/**
 * Hook for staggered animations (useful for lists)
 * @param {number} count - Number of items to animate
 * @param {number} delay - Delay between each item animation (ms)
 * @param {Object} observerOptions - Options for intersection observer
 * @returns {Object} - { ref, visibleItems }
 */
export const useStaggeredAnimation = (count, delay = 100, observerOptions = {}) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasTriggered) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasTriggered(true);
          
          // Stagger the animation of items
          for (let i = 0; i < count; i++) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, i]));
            }, i * delay);
          }
          
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        ...observerOptions
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [count, delay, hasTriggered, observerOptions]);

  return {
    ref: elementRef,
    visibleItems
  };
};

/**
 * Hook for scroll progress (useful for progress bars)
 * @param {Object} options - Configuration options
 * @returns {Object} - { scrollProgress, scrollDirection }
 */
export const useScrollProgress = (options = {}) => {
  const { element = null } = options;
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const targetElement = element || window;
    
    const handleScroll = throttle(() => {
      let scrollTop, scrollHeight, clientHeight;
      
      if (element) {
        scrollTop = element.scrollTop;
        scrollHeight = element.scrollHeight;
        clientHeight = element.clientHeight;
      } else {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollHeight = document.documentElement.scrollHeight;
        clientHeight = window.innerHeight;
      }

      // Calculate scroll progress
      const totalHeight = scrollHeight - clientHeight;
      const progress = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Determine scroll direction
      if (scrollTop > lastScrollTop.current) {
        setScrollDirection('down');
      } else if (scrollTop < lastScrollTop.current) {
        setScrollDirection('up');
      }
      
      lastScrollTop.current = scrollTop;
    }, 16); // ~60fps

    targetElement.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      targetElement.removeEventListener('scroll', handleScroll);
    };
  }, [element]);

  return {
    scrollProgress,
    scrollDirection
  };
};

export default useScrollAnimation;