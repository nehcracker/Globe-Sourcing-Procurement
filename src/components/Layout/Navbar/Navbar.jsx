// src/components/Layout/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: '#services' },
    { name: 'Vendors', href: '#vendors' },
    { name: 'Buyers', href: '#buyers' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          <img src="/logo.png" alt="Globe Sourcing Procurement Logo" className={styles.logoIcon} />
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
          <a href="#get-started" className={styles.ctaButton}>
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#get-started" 
                className={styles.mobileCta}
                onClick={closeMenu}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;