// Src/components/Financing/FinancingForm/FormSteps/Step3FundingDetails.jsx
import React from 'react';
import { CreditCard, DollarSign, Calendar, Building, TrendingUp } from 'lucide-react';
import FormInput from '../FormComponents/FormInput';
import FormSelect from '../FormComponents/FormSelect';
import styles from './FormSteps.module.css';

const Step3FundingDetails = ({ formData, errors, onChange, onBlur }) => {
  // Financing types
  const financingTypes = [
    { label: 'Letter of Credit (LC)', value: 'lc' },
    { label: 'Bank Guarantee', value: 'bank_guarantee' },
    { label: 'Trade Credit', value: 'trade_credit' },
    { label: 'Pre-shipment Financing', value: 'pre_shipment' },
    { label: 'Post-shipment Financing', value: 'post_shipment' },
    { label: 'Buyer Credit', value: 'buyer_credit' },
    { label: 'Supplier Credit', value: 'supplier_credit' },
    { label: 'Structured Finance', value: 'structured' },
    { label: 'Working Capital Financing', value: 'working_capital' },
    { label: 'Other', value: 'other' }
  ];

  // Repayment periods
  const repaymentPeriods = [
    { label: '30 days', value: '30' },
    { label: '60 days', value: '60' },
    { label: '90 days', value: '90' },
    { label: '120 days', value: '120' },
    { label: '180 days (6 months)', value: '180' },
    { label: '270 days (9 months)', value: '270' },
    { label: '365 days (1 year)', value: '365' },
    { label: '2 years', value: '730' },
    { label: '3 years', value: '1095' },
    { label: '4-5 years', value: '1825' },
    { label: 'Custom period', value: 'custom' }
  ];

  // Yes/No options
  const yesNoOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' }
  ];

  return (
    <div className={styles.stepContainer}>
      {/* Step Header */}
      <div className={styles.stepHeader}>
        <h2 className={styles.stepTitle}>Funding Details</h2>
        <p className={styles.stepDescription}>
          Tell us about your financing requirements. This helps us tailor the best financing 
          solution for your specific needs and business situation.
        </p>
      </div>

      {/* Info Box */}
      <div className={styles.infoBox}>
        <div className={styles.infoTitle}>
          <CreditCard size={18} />
          Financing Requirements
        </div>
        <p className={styles.infoText}>
          We offer flexible financing solutions from $50,000 to $10,000,000+ with competitive rates 
          and terms customized to your business needs.
        </p>
      </div>

      {/* Financing Type Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          <CreditCard size={20} />
          Type of Financing
        </h3>

        <div className={styles.formGrid}>
          <div className={styles.fullWidth}>
            <FormSelect
              label="Financing Type Needed"
              name="financingType"
              value={formData.financingType}
              onChange={onChange}
              onBlur={onBlur}
              error={errors.financingType}
              options={financingTypes}
              placeholder="Select financing type"
              required
              helpText="Choose the type of financing that best suits your transaction"
            />
          </div>
        </div>
      </div>

      {/* Amount and Terms Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          <DollarSign size={20} />
          Amount and Terms
        </h3>

        <div className={`${styles.formGrid} ${styles.twoColumnLayout}`}>
          <FormInput
            label="Financing Amount Required"
            name="financingAmount"
            type="number"
            value={formData.financingAmount}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.financingAmount}
            placeholder="100000"
            required
            min="1"
            step="0.01"
            icon={<DollarSign size={18} />}
            helpText="Amount you need to finance (in USD)"
          />

          <FormSelect
            label="Proposed Repayment Period"
            name="repaymentPeriod"
            value={formData.repaymentPeriod}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.repaymentPeriod}
            options={repaymentPeriods}
            placeholder="Select repayment period"
            required
            helpText="How long you need to repay the financing"
          />
        </div>
      </div>

      {/* Banking Relationship Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          <Building size={20} />
          Banking & Experience
        </h3>

        <div className={styles.formGrid}>
          <FormSelect
            label="Existing Banking Relationship"
            name="bankingRelationship"
            value={formData.bankingRelationship}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.bankingRelationship}
            options={yesNoOptions}
            placeholder="Select option"
            required
            helpText="Do you have an existing relationship with a bank?"
          />

          <FormSelect
            label="Previous Trade Finance Experience"
            name="tradeExperience"
            value={formData.tradeExperience}
            onChange={onChange}
            onBlur={onBlur}
            error={errors.tradeExperience}
            options={yesNoOptions}
            placeholder="Select option"
            required
            helpText="Have you used trade finance before?"
          />

          {/* Conditionally show bank name if they have banking relationship */}
          {formData.bankingRelationship === 'yes' && (
            <div className={styles.fullWidth}>
              <FormInput
                label="Bank Name (Optional)"
                name="bankName"
                type="text"
                value={formData.bankName}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="Enter your bank name"
                icon={<Building size={18} />}
                helpText="Name of your primary banking partner"
              />
            </div>
          )}
        </div>
      </div>

      {/* Additional Information Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          <TrendingUp size={20} />
          Additional Requirements
        </h3>

        <div className={styles.formGrid}>
          <div className={styles.fullWidth}>
            <label className={styles.label}>
              Additional Information or Special Requirements (Optional)
            </label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Include any specific requirements, timeline constraints, or additional details about your financing needs..."
              className={styles.textarea}
              rows={5}
            />
            {errors.additionalInfo && (
              <span className={styles.errorText}>
                {errors.additionalInfo}
              </span>
            )}
            <span className={styles.helpText}>
              Share any special circumstances, urgent deadlines, or specific terms you're looking for
            </span>
          </div>
        </div>
      </div>

      {/* Financing Features Info Box */}
      <div className={`${styles.infoBox} ${styles.success}`}>
        <div className={styles.infoTitle}>
          <Calendar size={18} />
          What You Can Expect
        </div>
        <ul className={styles.infoList}>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Competitive rates based on transaction risk and creditworthiness
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Flexible repayment terms tailored to your cash flow
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Fast approval process (48-72 hours for most applications)
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Dedicated relationship manager for ongoing support
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Step3FundingDetails;