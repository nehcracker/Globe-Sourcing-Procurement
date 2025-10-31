// Src/components/Financing/FinancingForm/FormSteps/Step2TradeInfo.jsx
import React from 'react';
import { Package, TrendingUp, MapPin, DollarSign } from 'lucide-react';
import FormInput from '../FormComponents/FormInput';
import FormSelect from '../FormComponents/FormSelect';
import styles from './FormSteps.module.css';

const Step2TradeInfo = ({ formData, errors, onChange, onBlur }) => {
  // Transaction types
  const transactionTypes = [
    { label: 'Import Financing', value: 'import' },
    { label: 'Export Financing', value: 'export' },
    { label: 'Commodity Trading', value: 'commodity' },
    { label: 'Trade Contract Financing', value: 'contract' },
    { label: 'Structured Finance', value: 'structured' },
    { label: 'Other', value: 'other' }
  ];

  // Currencies
  const currencies = [
    { label: 'USD - US Dollar', value: 'USD' },
    { label: 'EUR - Euro', value: 'EUR' },
    { label: 'GBP - British Pound', value: 'GBP' },
    { label: 'JPY - Japanese Yen', value: 'JPY' },
    { label: 'CNY - Chinese Yuan', value: 'CNY' },
    { label: 'AED - UAE Dirham', value: 'AED' },
    { label: 'SAR - Saudi Riyal', value: 'SAR' },
    { label: 'INR - Indian Rupee', value: 'INR' },
    { label: 'SGD - Singapore Dollar', value: 'SGD' },
    { label: 'AUD - Australian Dollar', value: 'AUD' },
    { label: 'CAD - Canadian Dollar', value: 'CAD' },
    { label: 'CHF - Swiss Franc', value: 'CHF' },
    { label: 'Other', value: 'OTHER' }
  ];

  // Payment terms
  const paymentTerms = [
    { label: 'Letter of Credit (LC)', value: 'lc' },
    { label: 'Documents Against Payment (D/P)', value: 'dp' },
    { label: 'Documents Against Acceptance (D/A)', value: 'da' },
    { label: 'Open Account (O/A)', value: 'oa' },
    { label: 'Cash in Advance', value: 'advance' },
    { label: 'Consignment', value: 'consignment' },
    { label: 'Other', value: 'other' }
  ];

  // Countries (simplified list - you can expand)
  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Australia', 'Austria', 'Bahrain', 'Bangladesh',
    'Belgium', 'Brazil', 'Canada', 'Chile', 'China', 'Colombia', 'Costa Rica', 'Croatia', 'Cyprus',
    'Czech Republic', 'Denmark', 'Ecuador', 'Egypt', 'Ethiopia', 'Finland', 'France', 'Germany',
    'Ghana', 'Greece', 'Hong Kong', 'Hungary', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
    'Israel', 'Italy', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Lebanon', 'Libya',
    'Malaysia', 'Mexico', 'Morocco', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Oman',
    'Pakistan', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia',
    'Saudi Arabia', 'Singapore', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'Sweden',
    'Switzerland', 'Taiwan', 'Tanzania', 'Thailand', 'Turkey', 'UAE', 'Uganda', 'Ukraine',
    'United Kingdom', 'United States', 'Uruguay', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  return (
    <div className={styles.stepContainer}>
      {/* Step Header */}
      <div className={styles.stepHeader}>
        <h2 className={styles.stepTitle}>Trade Information</h2>
        <p className={styles.stepDescription}>
          Provide details about your trade transaction. This information helps us understand your 
          financing needs and structure the best solution for your business.
        </p>
      </div>

      {/* Info Box */}
      <div className={styles.infoBox}>
        <div className={styles.infoTitle}>
          <Package size={18} />
          Transaction Details
        </div>
        <p className={styles.infoText}>
          Be as specific as possible about your trade transaction. Accurate information ensures 
          faster processing and better financing terms.
        </p>
      </div>

      {/* Transaction Type Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          <TrendingUp size={20} />
          Transaction Type
        </h3>

        <div className={styles.formGrid}>
          <div className={styles.fullWidth}>
            <FormSelect
              label="Type of Transaction"
              name="transactionType"
              value={formData.transactionType}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.transactionType}
              options={transactionTypes}
              placeholder="Select transaction type"
              required
              helpText="Choose the type of financing you need"
            />
          </div>
        </div>
      </div>

      {/* Product/Commodity Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          <Package size={20} />
          Product/Commodity Details
        </h3>

        <div className={styles.formGrid}>
          <div className={styles.fullWidth}>
            <label className={styles.label}>
              Product/Commodity Description
              <span className={styles.required}>*</span>
            </label>
            <textarea
              name="productDescription"
              value={formData.productDescription}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Describe the products or commodities you're trading (e.g., Raw cotton, Industrial machinery, Agricultural commodities, etc.)"
              className={styles.textarea}
              required
              rows={4}
            />
            {errors.productDescription && (
              <span className={styles.errorText}>
                {errors.productDescription}
              </span>
            )}
            <span className={styles.helpText}>
              Provide a detailed description including specifications, quantities, and HS codes if applicable
            </span>
          </div>
        </div>
      </div>

      {/* Geographic Details Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          <MapPin size={20} />
          Geographic Details
        </h3>

        <div className={styles.formGrid.twoColumns}>
          <FormSelect
            label="Origin Country"
            name="originCountry"
            value={formData.originCountry}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.originCountry}
            options={countries}
            placeholder="Select origin country"
            required
            helpText="Where the goods are coming from"
          />

          <FormSelect
            label="Destination Country"
            name="destinationCountry"
            value={formData.destinationCountry}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.destinationCountry}
            options={countries}
            placeholder="Select destination country"
            required
            helpText="Where the goods are going to"
          />
        </div>
      </div>

      {/* Financial Details Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          <DollarSign size={20} />
          Financial Details
        </h3>

        <div className={styles.formGrid.twoColumns}>
          <FormInput
            label="Estimated Transaction Value"
            name="transactionValue"
            type="number"
            value={formData.transactionValue}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.transactionValue}
            placeholder="100000"
            required
            min="1"
            step="0.01"
            icon={<DollarSign size={18} />}
            helpText="Total value of the transaction"
          />

          <FormSelect
            label="Currency"
            name="currency"
            value={formData.currency}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.currency}
            options={currencies}
            placeholder="Select currency"
            required
            helpText="Transaction currency"
          />

          <div className={styles.fullWidth}>
            <FormSelect
              label="Preferred Payment Terms"
              name="paymentTerms"
              value={formData.paymentTerms}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.paymentTerms}
              options={paymentTerms}
              placeholder="Select payment terms"
              required
              helpText="How you plan to structure the payment"
            />
          </div>
        </div>
      </div>

      {/* Additional Info Box */}
      <div className={`${styles.infoBox} ${styles.success}`}>
        <div className={styles.infoTitle}>
          Need Help?
        </div>
        <p className={styles.infoText}>
          If you're unsure about which transaction type or payment terms to select, our team will 
          help you determine the best option during the review process.
        </p>
      </div>
    </div>
  );
};

export default Step2TradeInfo;