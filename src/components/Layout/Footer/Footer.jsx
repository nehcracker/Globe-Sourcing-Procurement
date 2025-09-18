// src/components/Layout/Footer/Footer.jsx
import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Mail, 
  /*Phone,*/
  MapPin, 
  ArrowUp, 
  Linkedin, 
  Twitter, 
  Facebook,
  Send,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Shield
} from 'lucide-react';
import { scrollToElement } from '../../../utils/helpers';
import { COMPANY } from '../../../utils/constants';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Show scroll to top button when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Success Stories', href: '#testimonials' },
  ];

  const businessHours = [
    { region: 'East Africa (EAT)', time: currentTime.toLocaleTimeString('en-US', { 
      timeZone: 'Africa/Nairobi', 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit' 
    })},
    { region: 'London (GMT)', time: currentTime.toLocaleTimeString('en-US', { 
      timeZone: 'Europe/London', 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit' 
    })},
    { region: 'New York (EST)', time: currentTime.toLocaleTimeString('en-US', { 
      timeZone: 'America/New_York', 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit' 
    })},
  ];

  const achievements = [
    { icon: <Users size={16} />, value: '2,500+', label: 'Global Clients' },
    { icon: <Globe size={16} />, value: '50+', label: 'Countries' },
    { icon: <TrendingUp size={16} />, value: '$50M+', label: 'Trade Volume' },
    { icon: <Star size={16} />, value: '4.9/5', label: 'Client Rating' },
  ];

  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.footerContent}>
        <div className={styles.container}>
          {/* Top Section - Brand & Newsletter */}
          <div className={styles.topSection}>
            <div className={styles.brandSection}>
              <div className={styles.logo}>
                <Globe className={styles.logoIcon} />
                <div className={styles.logoText}>
                  <span className={styles.companyName}>{COMPANY.name}</span>
                  <span className={styles.tagline}>Global Procurement Excellence</span>
                </div>
              </div>
              <p className={styles.brandDescription}>
                Connecting businesses worldwide through trusted procurement solutions. 
                Your gateway to global trade opportunities.
              </p>
            </div>

            <div className={styles.newsletterSection}>
              <h3 className={styles.newsletterTitle}>Stay Connected</h3>
              <p className={styles.newsletterDescription}>
                Get insights, updates, and exclusive procurement opportunities
              </p>
              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
                  <div className={styles.emailInput}>
                    <Mail size={18} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <button type="submit" className={styles.subscribeBtn}>
                    <Send size={16} />
                    <span>Subscribe</span>
                  </button>
                </form>
              ) : (
                <div className={styles.subscriptionSuccess}>
                  <CheckCircle size={20} />
                  <span>Successfully subscribed!</span>
                </div>
              )}
            </div>
          </div>

          {/* Middle Section - Links & Info */}
          <div className={styles.middleSection}>
            <div className={styles.linksColumn}>
              <h4 className={styles.columnTitle}>Quick Links</h4>
              <ul className={styles.linksList}>
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToElement(link.href)}
                      className={styles.footerLink}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.contactColumn}>
              <h4 className={styles.columnTitle}>Get In Touch</h4>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <MapPin size={16} />
                  <span>Saint John Woods London, UK</span>
                </div>
                <div className={styles.contactItem}>
                  <Mail size={16} />
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </div>
              {/*  <div className={styles.contactItem}>
                  <Phone size={16} />
                  <span>+254-XXX-XXXXXX</span>
                </div>*/}
              </div>
            </div>

            <div className={styles.timeColumn}>
              <h4 className={styles.columnTitle}>Global Hours</h4>
              <div className={styles.businessHours}>
                {businessHours.map((hours) => (
                  <div key={hours.region} className={styles.timeZone}>
                    <span className={styles.region}>{hours.region}</span>
                    <span className={styles.time}>{hours.time}</span>
                  </div>
                ))}
              </div>
              <div className={styles.availability}>
                <Shield size={14} />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className={styles.achievementsSection}>
            <div className={styles.achievementsGrid}>
              {achievements.map((achievement, index) => (
                <div key={index} className={styles.achievementItem}>
                  <div className={styles.achievementIcon}>{achievement.icon}</div>
                  <div className={styles.achievementContent}>
                    <span className={styles.achievementValue}>{achievement.value}</span>
                    <span className={styles.achievementLabel}>{achievement.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <span>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</span>
              <div className={styles.legalLinks}>
                <button className={styles.legalLink}>Privacy Policy</button>
                <span className={styles.separator}>•</span>
                <button className={styles.legalLink}>Terms of Service</button>
                <span className={styles.separator}>•</span>
                <button className={styles.legalLink}>Cookie Policy</button>
              </div>
            </div>

            <div className={styles.socialSection}>
              <span className={styles.socialLabel}>Follow Us</span>
              <div className={styles.socialLinks}>
                <a 
                  href="https://linkedin.com/company/globesourceprocurement" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} ${styles.linkedin}`}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://twitter.com/globesourcepro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} ${styles.twitter}`}
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="https://facebook.com/globesourceprocurement" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} ${styles.facebook}`}
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className={styles.scrollTopBtn}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Background Decorations */}
      <div className={styles.backgroundDecorations}>
        <div className={styles.decoration1}></div>
        <div className={styles.decoration2}></div>
        <div className={styles.decoration3}></div>
      </div>
    </footer>
  );
};

export default Footer;