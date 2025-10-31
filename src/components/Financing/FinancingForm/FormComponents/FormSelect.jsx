// Src/components/Financing/FinancingForm/FormComponents/FormSelect.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FormSelect.module.css';

const FormSelect = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  options = [],
  placeholder = 'Select an option',
  required = false,
  disabled = false,
  helpText,
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

  return (
    <div className={`${styles.formGroup} ${error ? styles.hasError : ''}`}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      
      <div className={styles.selectWrapper}>
        <select
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={disabled}
          required={required}
          className={styles.select}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : helpText ? `${name}-help` : undefined}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option 
              key={index} 
              value={typeof option === 'object' ? option.value : option}
            >
              {typeof option === 'object' ? option.label : option}
            </option>
          ))}
        </select>
        
        <div className={styles.iconWrapper}>
          <ChevronDown size={20} />
        </div>
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

export default FormSelect;