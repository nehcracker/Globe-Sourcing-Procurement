// src/pages/VendorRegistration/components/PageSections/VendorFormSection.jsx
import React from 'react';
import styles from './VendorFormSection.module.css';

const VendorFormSection = ({ children }) => {
  return (
    <section className={styles.vendorFormSection} id="vendor-registration-form">
      <div className={styles.container}>
        <div className={styles.formHeader}>
          <h2>Become a Verified Vendor</h2>
          <p>
            Fill out the form below to start the vendor verification process.
            Our team will review your information and get back to you within 48 hours.
          </p>
        </div>
        <div className={styles.formContainer}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default VendorFormSection;