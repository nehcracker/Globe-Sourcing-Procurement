// src/components/Forms/Shared/FormField.jsx
import React from 'react';
import { AlertCircle } from 'lucide-react';
import styles from './FormField.module.css';

const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  required = false,
  options = [],
  rows = 3,
  step,
  min,
  max,
  disabled = false,
  className = ''
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const fieldId = `field-${name}`;
  const hasError = Boolean(error);

  const renderInput = () => {
    const baseProps = {
      id: fieldId,
      name,
      value,
      onChange: handleChange,
      placeholder,
      disabled,
      className: `${styles.input} ${hasError ? styles.inputError : ''} ${className}`,
      'aria-describedby': hasError ? `${fieldId}-error` : undefined,
      'aria-invalid': hasError
    };

    switch (type) {
      case 'textarea':
        return (
          <textarea
            {...baseProps}
            rows={rows}
            className={`${styles.textarea} ${hasError ? styles.inputError : ''} ${className}`}
          />
        );

      case 'select':
        return (
          <select
            {...baseProps}
            className={`${styles.select} ${hasError ? styles.inputError : ''} ${className}`}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'number':
        return (
          <input
            {...baseProps}
            type="number"
            step={step}
            min={min}
            max={max}
          />
        );

      default:
        return (
          <input
            {...baseProps}
            type={type}
          />
        );
    }
  };

  return (
    <div className={`${styles.formField} ${hasError ? styles.fieldError : ''}`}>
      {label && (
        <label htmlFor={fieldId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      
      <div className={styles.inputContainer}>
        {renderInput()}
        {hasError && (
          <div className={styles.errorIcon}>
            <AlertCircle size={18} />
          </div>
        )}
      </div>
      
      {hasError && (
        <div id={`${fieldId}-error`} className={styles.errorMessage} role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default FormField;