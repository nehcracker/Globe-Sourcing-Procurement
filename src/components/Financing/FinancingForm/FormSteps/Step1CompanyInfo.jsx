// Src/components/Financing/FinancingForm/FormSteps/Step1CompanyInfo.jsx
import React from 'react';
import { Building, User, Mail, Phone, MapPin, FileText, Globe } from 'lucide-react';
import FormInput from '../FormComponents/FormInput';
import FormSelect from '../FormComponents/FormSelect';
import styles from './FormSteps.module.css';

const Step1CompanyInfo = ({ formData, errors, onChange, onBlur }) => {
  // Country options
  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia',
    'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
    'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil',
    'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada',
    'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros',
    'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti',
    'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador',
    'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon',
    'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea',
    'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia',
    'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan',
    'Kazakhstan', 'Kenya', 'Kiribati', 'North Korea', 'South Korea', 'Kuwait', 'Kyrgyzstan',
    'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania',
    'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands',
    'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro',
    'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand',
    'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama',
    'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar',
    'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
    'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
    'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia',
    'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka',
    'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan',
    'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
    'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
    'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam',
    'Yemen', 'Zambia', 'Zimbabwe'
  ];

  return (
    <div className={styles.stepContainer}>
      {/* Step Header */}
      <div className={styles.stepHeader}>
        <h2 className={styles.stepTitle}>Company Information</h2>
        <p className={styles.stepDescription}>
          Please provide accurate information about your company. This helps us verify your business 
          and process your financing application efficiently.
        </p>
      </div>

      {/* Info Box */}
      <div className={styles.infoBox}>
        <div className={styles.infoTitle}>
          <Building size={18} />
          Required Information
        </div>
        <p className={styles.infoText}>
          All fields marked with an asterisk (*) are required. Please ensure all information matches 
          your official company registration documents.
        </p>
      </div>

      {/* Company Details Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          <Building size={20} />
          Company Details
        </h3>

        <div className={`${styles.formGrid} ${styles.twoColumnLayout}`}>
          <FormInput
            label="Legal Company Name"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.companyName}
            placeholder="Enter your company's legal name"
            required
            icon={<Building size={18} />}
            helpText="Enter the full legal name as registered"
          />

          <FormInput
            label="Company Registration Number"
            name="registrationNumber"
            type="text"
            value={formData.registrationNumber}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.registrationNumber}
            placeholder="e.g., 12345678"
            required
            icon={<FileText size={18} />}
            helpText="Official registration/tax ID number"
          />

          <FormSelect
            label="Country of Registration"
            name="country"
            value={formData.country}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.country}
            options={countries}
            placeholder="Select country"
            required
          />

          <FormInput
            label="Company Website (Optional)"
            name="website"
            type="url"
            value={formData.website}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.website}
            placeholder="https://www.example.com"
            icon={<Globe size={18} />}
            helpText="Your company's official website URL"
          />
        </div>
      </div>

      {/* Contact Person Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          <User size={20} />
          Primary Contact Person
        </h3>

        <div className={`${styles.formGrid} ${styles.twoColumnLayout}`}>
          <FormInput
            label="Contact Person Full Name"
            name="contactPerson"
            type="text"
            value={formData.contactPerson}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.contactPerson}
            placeholder="First Name Last Name"
            required
            icon={<User size={18} />}
            helpText="Full name of the authorized representative"
          />

          <FormInput
            label="Contact Email Address"
            name="contactEmail"
            type="email"
            value={formData.contactEmail}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.contactEmail}
            placeholder="contact@company.com"
            required
            autoComplete="email"
            icon={<Mail size={18} />}
            helpText="Primary contact email for this application"
          />

          <FormInput
            label="Business Email Address (Optional)"
            name="businessEmail"
            type="email"
            value={formData.businessEmail}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.businessEmail}
            placeholder="business@company.com"
            autoComplete="email"
            icon={<Mail size={18} />}
            helpText="Official company email (if different from contact)"
          />

          <FormInput
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.phone}
            placeholder="+1 234 567 8900"
            required
            autoComplete="tel"
            icon={<Phone size={18} />}
            helpText="Include country code"
          />
        </div>
      </div>

      {/* Company Address Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          <MapPin size={20} />
          Company Address
        </h3>

        <div className={styles.formGrid}>
          <div className={styles.fullWidth}>
            <FormInput
              label="Full Company Address"
              name="address"
              type="text"
              value={formData.address}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.address}
              placeholder="Street address, City, State/Province, Postal Code"
              required
              icon={<MapPin size={18} />}
              helpText="Complete registered business address"
            />
          </div>
        </div>
      </div>

      {/* Additional Info Box */}
      <div className={`${styles.infoBox} ${styles.success}`}>
        <div className={styles.infoTitle}>
          What happens next?
        </div>
        <p className={styles.infoText}>
          After completing all steps, we'll verify your company information and contact you within 
          48-72 hours with the next steps for your financing application.
        </p>
      </div>
    </div>
  );
};

export default Step1CompanyInfo;