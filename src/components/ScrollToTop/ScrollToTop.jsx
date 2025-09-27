
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    // Also ensure document element is scrolled to top
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    
    // For some browsers, also scroll the body
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, [pathname]);

  // Also scroll to top on component mount (handles page refresh)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTop;
