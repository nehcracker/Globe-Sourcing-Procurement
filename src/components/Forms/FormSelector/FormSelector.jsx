// src/components/Forms/FormSelector/FormSelector.jsx
import React, { useState } from 'react';
import { Building2, ShoppingCart, ArrowRight, Users, Package, TrendingUp, Shield } from 'lucide-react';
import FormModal from '../FormModal/FormModal';
import VendorForm from '../VendorForm/VendorForm';
import BuyerForm from '../BuyerForm/BuyerForm';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './FormSelector.module.css';

const FormSelector = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const [activeModal, setActiveModal] = useState(null); // 'vendor' | 'buyer' | null

  const openVendorModal = () => setActiveModal('vendor');
  const openBuyerModal = () => setActiveModal('buyer');
  const closeModal = () => setActiveModal(null);

  const vendorStats = [
    { icon: <Users size={16} />, label: '500+ Active Buyers', value: 'Global Reach' },
    { icon: <TrendingUp size={16} />, label: 'Average 40% Growth', value: 'Revenue Boost' },
    { icon: <Shield size={16} />, label: '99% Payment Security', value: 'Guaranteed' }
  ];

  const buyerStats = [
    { icon: <Package size={16} />, label: '10,000+ Products', value: 'Available' },
    { icon: <Shield size={16} />, label: '100% Verified Suppliers', value: 'Quality Assured' },
    { icon: <TrendingUp size={16} />, label: 'Up to 60% Savings', value: 'Cost Reduction' }
  ];

  return (
    <>
      <section
        id="get-started"
        className={styles.formSelector}
        ref={sectionRef}
      >
        <div className={styles.container}>
          {/* Section Header */}
          <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
            <h2 className={styles.title}>Ready to Transform Your Business?</h2>
            <p className={styles.subtitle}>
              Join thousands of companies already growing with Globe Sourcing Procurement
            </p>

            {/* Trust Indicators */}
            <div className={styles.trustIndicators}>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>2,500+</span>
                <span className={styles.trustLabel}>Companies Trust Us</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>50+</span>
                <span className={styles.trustLabel}>Countries Served</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>$50M+</span>
                <span className={styles.trustLabel}>Trade Volume</span>
              </div>
            </div>
          </div>

          {/* Selection Cards */}
          <div className={`${styles.cardsContainer} ${isVisible ? styles.visible : ''}`}>
            {/* Vendor Card */}
            <div
              id="vendor-form"
              className={styles.selectionCard}
              onClick={openVendorModal}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openVendorModal();
                }
              }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <Building2 size={32} />
                </div>
                <div className={styles.cardBadge}>FOR VENDORS</div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Expand Your Market Reach</h3>
                <p className={styles.cardDescription}>
                  Connect with global buyers and grow your business through our verified marketplace
                </p>

                {/* Features List */}
                <ul className={styles.featuresList}>
                  <li>Access to global buyer network</li>
                  <li>Secure payment guarantees</li>
                  <li>Quality verification support</li>
                  <li>Marketing and promotion tools</li>
                </ul>

                {/* Stats */}
                <div className={styles.statsContainer}>
                  {vendorStats.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                      <div className={styles.statIcon}>{stat.icon}</div>
                      <div className={styles.statContent}>
                        <span className={styles.statValue}>{stat.value}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <button className={styles.cardButton}>
                  <span>List Your Products</span>
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Background Decoration */}
              <div className={styles.cardDecoration}></div>
            </div>

            {/* Buyer Card */}
            <div
              id="buyer-form"
              className={styles.selectionCard}
              onClick={openBuyerModal}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openBuyerModal();
                }
              }}
            >
              <div className={styles.cardHeader}>
                <div className={`${styles.cardIcon} ${styles.buyerIcon}`}>
                  <ShoppingCart size={32} />
                </div>
                <div className={`${styles.cardBadge} ${styles.buyerBadge}`}>FOR BUYERS</div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Source Products Efficiently</h3>
                <p className={styles.cardDescription}>
                  Find verified suppliers for your bulk requirements with guaranteed quality and competitive pricing
                </p>

                {/* Features List */}
                <ul className={styles.featuresList}>
                  <li>Verified supplier network</li>
                  <li>Competitive bulk pricing</li>
                  <li>Quality assurance guarantee</li>
                  <li>End-to-end logistics support</li>
                </ul>

                {/* Stats */}
                <div className={styles.statsContainer}>
                  {buyerStats.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                      <div className={styles.statIcon}>{stat.icon}</div>
                      <div className={styles.statContent}>
                        <span className={styles.statValue}>{stat.value}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <button className={`${styles.cardButton} ${styles.buyerButton}`}>
                  <span>Request Quotes</span>
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Background Decoration */}
              <div className={`${styles.cardDecoration} ${styles.buyerDecoration}`}></div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`${styles.bottomCta} ${isVisible ? styles.visible : ''}`}>
            <p className={styles.ctaText}>
              Not sure which option is right for you?
              <button className={styles.helpButton}>Get personalized guidance</button>
            </p>
          </div>
        </div>

        {/* Background Elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.bgElement1}></div>
          <div className={styles.bgElement2}></div>
          <div className={styles.bgElement3}></div>
        </div>
      </section>

      {/* Modals */}
      <FormModal
        isOpen={activeModal === 'vendor'}
        onClose={closeModal}
        title="Vendor Registration"
        type="vendor"
      >
        <VendorForm onSuccess={closeModal} />
      </FormModal>

      <FormModal
        isOpen={activeModal === 'buyer'}
        onClose={closeModal}
        title="Request a Quote"
        type="buyer"
      >
        <BuyerForm onSuccess={closeModal} />
      </FormModal>
    </>
  );
};

export default FormSelector;
