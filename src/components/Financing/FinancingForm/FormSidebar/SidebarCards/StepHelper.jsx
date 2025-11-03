// src/components/Financing/FinancingForm/FormSidebar/SidebarCards/StepHelper.jsx
import React from 'react';
import { HelpCircle, ChevronDown, Lightbulb, AlertCircle, CheckCircle } from 'lucide-react';
import styles from './StepHelper.module.css';

const StepHelper = ({ currentStep, isCollapsed, onToggle }) => {
  const stepContent = {
    1: {
      title: 'Company Information Tips',
      tips: [
        { icon: <CheckCircle size={16} />, text: 'Use the exact legal name as it appears on your registration documents' },
        { icon: <CheckCircle size={16} />, text: 'Registration number format varies by country - include any prefixes or suffixes' },
        { icon: <CheckCircle size={16} />, text: 'Your company website is optional but helps speed up verification' },
        { icon: <CheckCircle size={16} />, text: 'Use a business email address if possible - it adds credibility' }
      ],
      faqs: [
        { q: 'What if my company is newly registered?', a: 'No problem! We work with new companies. Just provide your registration details and any available financial records.' },
        { q: 'Do I need an international registration?', a: 'No, your local country registration is sufficient. We verify businesses globally.' }
      ]
    },
    2: {
      title: 'Trade Information Guide',
      tips: [
        { icon: <Lightbulb size={16} />, text: 'Be specific about products - include HS codes if you have them' },
        { icon: <Lightbulb size={16} />, text: 'Transaction value should match your trade documents or proforma invoice' },
        { icon: <Lightbulb size={16} />, text: 'Choose payment terms that align with your trading partner\'s requirements' },
        { icon: <AlertCircle size={16} />, text: 'Origin and destination countries must match your actual trade route' }
      ],
      faqs: [
        { q: 'What if I\'m trading multiple products?', a: 'Describe the main product category and mention "mixed goods" in the description.' },
        { q: 'Which currency should I select?', a: 'Choose the currency in which your trade contract or invoice is denominated.' }
      ]
    },
    3: {
      title: 'Funding Requirements Help',
      tips: [
        { icon: <CheckCircle size={16} />, text: 'Financing amount can be up to 100% of your transaction value' },
        { icon: <CheckCircle size={16} />, text: 'Longer repayment periods may have different rate structures' },
        { icon: <CheckCircle size={16} />, text: 'Having an existing banking relationship often speeds up approval' },
        { icon: <Lightbulb size={16} />, text: 'Previous trade finance experience is helpful but not required' }
      ],
      faqs: [
        { q: 'What\'s the minimum financing amount?', a: 'We typically finance transactions starting from $50,000 USD.' },
        { q: 'How are interest rates determined?', a: 'Rates depend on transaction risk, your business profile, repayment period, and market conditions.' }
      ]
    },
    4: {
      title: 'Submission Guidelines',
      tips: [
        { icon: <AlertCircle size={16} />, text: 'Review all information carefully before submitting' },
        { icon: <CheckCircle size={16} />, text: 'You\'ll receive a confirmation email immediately after submission' },
        { icon: <CheckCircle size={16} />, text: 'Document upload link will be sent within 24 hours' },
        { icon: <Lightbulb size={16} />, text: 'Prepare your documents now to speed up the process' }
      ],
      faqs: [
        { q: 'Can I edit my application after submission?', a: 'Contact us immediately if you need to make changes. Small corrections can be handled via email.' },
        { q: 'How long until I get a decision?', a: 'Most applications are reviewed within 48-72 hours.' }
      ]
    }
  };

  const content = stepContent[currentStep] || stepContent[1];

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader} onClick={onToggle}>
        <h3 className={styles.cardTitle}>
          <HelpCircle size={20} />
          {content.title}
        </h3>
        <button
          className={`${styles.collapseButton} ${isCollapsed ? styles.collapsed : ''}`}
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
        >
          <ChevronDown size={20} />
        </button>
      </div>

      <div className={`${styles.cardContent} ${isCollapsed ? styles.collapsed : ''}`}>
        <div className={styles.tipsSection}>
          <h4 className={styles.sectionTitle}>
            <Lightbulb size={16} />
            Quick Tips
          </h4>
          <ul className={styles.tipsList}>
            {content.tips.map((tip, index) => (
              <li key={index} className={styles.tipItem}>
                <span className={styles.tipIcon}>{tip.icon}</span>
                <span className={styles.tipText}>{tip.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {content.faqs && content.faqs.length > 0 && (
          <div className={styles.faqSection}>
            <h4 className={styles.sectionTitle}>
              <HelpCircle size={16} />
              Common Questions
            </h4>
            <div className={styles.faqList}>
              {content.faqs.map((faq, index) => (
                <details key={index} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>
                    {faq.q}
                  </summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        <div className={styles.helpNote}>
          <AlertCircle size={16} />
          <span>Need more help? Our team is available via email or use the support card below.</span>
        </div>
      </div>
    </div>
  );
};

export default StepHelper;