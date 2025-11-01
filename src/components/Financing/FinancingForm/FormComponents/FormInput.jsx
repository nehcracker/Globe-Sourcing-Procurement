// Src/components/Financing/FinancingForm/FormComponents/FormInput.jsx
import React from 'react';
import styles from './FormInput.module.css';

// Utility function to format numbers with thousand separators
const formatNumber = (value) => {
  if (!value) return '';
  const num = parseFloat(value);
  if (isNaN(num)) return value;
  return num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required = false,
  disabled = false,
  maxLength,
  min,
  max,
  step,
  autoComplete,
  pattern,
  helpText,
  icon,
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleBlur = (e) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  // For number inputs, format the display value
  const displayValue = type === 'number' ? formatNumber(value) : value;

  return (
    <div className={`${styles.formGroup} ${error ? styles.hasError : ''}`}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      
      <div className={styles.inputWrapper}>
        {icon && <div className={styles.icon}>{icon}</div>}
        
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          min={min}
          max={max}
          step={step}
          autoComplete={autoComplete}
          pattern={pattern}
          className={`${styles.input} ${icon ? styles.hasIcon : ''}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : helpText ? `${name}-help` : undefined}
        />
        {type === 'number' && displayValue && (
          <div className={styles.formattedValue}>
            {displayValue}
          </div>
        )}
      </div>

      {helpText && !error && (
        <span id={`${name}-help`} className={styles.helpText}>
          {helpText}
        </span>
      )}

      {error && (
        <span id={`${name}-error`} className={styles.errorText} role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

export default FormInput;