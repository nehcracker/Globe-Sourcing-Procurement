// src/components/Layout/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(`.${styles.navbar}`)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Vendors', href: '/Vendor-Registration-Page' },
    { name: 'Buyers', href: '/buyers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          {/* Logo */}
          <a href="/" className={styles.logo} onClick={closeMenu}>
            <img 
              src="/logo.png" 
              alt="Globe Sourcing Procurement Logo" 
              className={styles.logoIcon} 
            />
          </a>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className={styles.navLink}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`${styles.mobileToggle} ${isOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}>
          <div className={styles.mobileNavContent}>
            <ul className={styles.mobileNavList}>
              {navItems.map((item, index) => (
                <li 
                  key={item.name}
                  className={styles.mobileNavItem}
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <a 
                    href={item.href} 
                    className={styles.mobileNavLink}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div 
        className={`${styles.mobileOverlay} ${isOpen ? styles.overlayActive : ''}`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Navbar;