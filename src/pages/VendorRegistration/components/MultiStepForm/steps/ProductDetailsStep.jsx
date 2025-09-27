// src/pages/VendorRegistration/components/MultiStepForm/steps/ProductDetailsStep.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Package, 
  DollarSign, 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  Info,
  TrendingUp,
  Truck,
  Image,
  Plus,
  X
} from 'lucide-react';
import styles from './ProductDetailsStep.module.css';

const ProductDetailsStep = ({ formData, updateFormData, updateValidation }) => {
  const [localErrors, setLocalErrors] = useState({});
  const [fieldValidation, setFieldValidation] = useState({});
  const [productImages, setProductImages] = useState(formData.productImages || []);

  const productCategories = [
    {
      name: 'Agricultural Products',
      subcategories: ['Fresh Produce', 'Grains & Cereals', 'Seeds & Plants', 'Agricultural Equipment']
    },
    {
      name: 'Electronics & Technology',
      subcategories: ['Consumer Electronics', 'Computer Hardware', 'Telecommunications', 'Smart Devices']
    },
    {
      name: 'Industrial Equipment',
      subcategories: ['Heavy Machinery', 'Manufacturing Tools', 'Automation Systems', 'Safety Equipment']
    },
    {
      name: 'Textiles & Apparel',
      subcategories: ['Fashion Clothing', 'Fabrics & Materials', 'Accessories', 'Footwear']
    },
    {
      name: 'Automotive Parts',
      subcategories: ['Engine Components', 'Electronic Parts', 'Body & Exterior', 'Interior Accessories']
    },
    {
      name: 'Construction Materials',
      subcategories: ['Building Materials', 'Tools & Hardware', 'Safety Equipment', 'Architectural Products']
    },
    {
      name: 'Food & Beverages',
      subcategories: ['Packaged Foods', 'Beverages', 'Ingredients', 'Specialty Products']
    },
    {
      name: 'Medical Supplies',
      subcategories: ['Medical Devices', 'Pharmaceuticals', 'Healthcare Equipment', 'Diagnostic Tools']
    },
    {
      name: 'Chemicals',
      subcategories: ['Industrial Chemicals', 'Specialty Chemicals', 'Raw Materials', 'Laboratory Supplies']
    },
    {
      name: 'Other',
      subcategories: ['Specify in description']
    }
  ];

  const packagingTypes = [
    'Bulk (No specific packaging)',
    'Bags/Sacks',
    'Boxes/Cartons',
    'Pallets',
    'Containers (20ft)',
    'Containers (40ft)',
    'Drums/Barrels',
    'Rolls',
    'Custom packaging'
  ];

  const currencies = [
    { value: 'USD', label: 'USD - US Dollar', symbol: '$' },
    { value: 'EUR', label: 'EUR - Euro', symbol: '€' },
    { value: 'GBP', label: 'GBP - British Pound', symbol: '£' },
    { value: 'CNY', label: 'CNY - Chinese Yuan', symbol: '¥' },
    { value: 'JPY', label: 'JPY - Japanese Yen', symbol: '¥' },
    { value: 'KRW', label: 'KRW - Korean Won', symbol: '₩' },
    { value: 'INR', label: 'INR - Indian Rupee', symbol: '₹' },
    { value: 'CAD', label: 'CAD - Canadian Dollar', symbol: 'C$' },
    { value: 'AUD', label: 'AUD - Australian Dollar', symbol: 'A$' },
    { value: 'BRL', label: 'BRL - Brazilian Real', symbol: 'R$' },
    { value: 'KES', label: 'KES - Kenyan Shilling', symbol: 'KSh' }
  ];

  // Real-time validation
  useEffect(() => {
    const newErrors = {};
    const validation = {};
    
    // Product Category validation
    if (!formData.productCategory?.trim()) {
      newErrors.productCategory = 'Product category is required';
      validation.productCategory = 'error';
    } else {
      validation.productCategory = 'success';
    }
    
    // Product Description validation
    if (!formData.productDescription?.trim()) {
      newErrors.productDescription = 'Product description is required';
      validation.productDescription = 'error';
    } else if (formData.productDescription.trim().length < 50) {
      newErrors.productDescription = 'Product description must be at least 50 characters';
      validation.productDescription = 'error';
    } else if (formData.productDescription.trim().length > 2000) {
      newErrors.productDescription = 'Product description must be less than 2000 characters';
      validation.productDescription = 'error';
    } else {
      validation.productDescription = 'success';
    }
    
    // MOQ validation
    if (!formData.moq?.trim()) {
      newErrors.moq = 'Minimum order quantity is required';
      validation.moq = 'error';
    } else if (isNaN(formData.moq) || parseFloat(formData.moq) <= 0) {
      newErrors.moq = 'Please enter a valid positive number';
      validation.moq = 'error';
    } else {
      validation.moq = 'success';
    }

    // Packaging validation
    if (!formData.packaging?.trim()) {
      newErrors.packaging = 'Packaging type is required';
      validation.packaging = 'error';
    } else {
      validation.packaging = 'success';
    }
    
    // Unit Price validation
    if (!formData.unitPrice?.trim()) {
      newErrors.unitPrice = 'Unit price is required';
      validation.unitPrice = 'error';
    } else if (isNaN(formData.unitPrice) || parseFloat(formData.unitPrice) <= 0) {
      newErrors.unitPrice = 'Please enter a valid positive price';
      validation.unitPrice = 'error';
    } else {
      validation.unitPrice = 'success';
    }
    
    setLocalErrors(newErrors);
    setFieldValidation(validation);
    updateValidation(2, Object.keys(newErrors).length === 0, newErrors);
  }, [formData, updateValidation]);

  const getFieldClass = (fieldName) => {
    const baseClass = styles.formInput;
    if (fieldValidation[fieldName] === 'error') return `${baseClass} ${styles.error}`;
    if (fieldValidation[fieldName] === 'success') return `${baseClass} ${styles.success}`;
    return baseClass;
  };

  const getFieldIcon = (fieldName) => {
    if (fieldValidation[fieldName] === 'error') {
      return <AlertCircle size={20} className={styles.errorIcon} />;
    }
    if (fieldValidation[fieldName] === 'success') {
      return <CheckCircle size={20} className={styles.successIcon} />;
    }
    return null;
  };

  const handleImageUpload = useCallback((files) => {
    const maxImages = 5;
    const maxSize = 2 * 1024 * 1024; // 2MB
    
    if (productImages.length + files.length > maxImages) {
      alert(`Maximum ${maxImages} images allowed`);
      return;
    }

    const newImages = [];
    
    for (let file of files) {
      if (!file.type.startsWith('image/')) {
        alert(`${file.name} is not a valid image file`);
        continue;
      }
      
      if (file.size > maxSize) {
        alert(`${file.name} is too large. Maximum size is 2MB`);
        continue;
      }

      const imageData = {
        id: Date.now() + Math.random(),
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
        file: file
      };
      
      newImages.push(imageData);
    }
    
    const updatedImages = [...productImages, ...newImages];
    setProductImages(updatedImages);
    updateFormData('productImages', updatedImages);
  }, [productImages, updateFormData]);

  const removeImage = (imageId) => {
    setProductImages(prev => {
      const updatedImages = prev.filter(img => img.id !== imageId);
      const removedImage = prev.find(img => img.id === imageId);
      if (removedImage?.url) {
        URL.revokeObjectURL(removedImage.url);
      }
      updateFormData('productImages', updatedImages);
      return updatedImages;
    });
  };

  const calculateEstimatedValue = () => {
    const price = parseFloat(formData.unitPrice || 0);
    const qty = parseFloat(formData.moq || 0);
    return price * qty;
  };

  const getSelectedCurrency = () => {
    return currencies.find(c => c.value === (formData.currency || 'USD'));
  };

  return (
    <div className={styles.productDetailsStep}>
      <div className={styles.stepHeader}>
        <h3 className={styles.stepTitle}>
          <Package size={24} className={styles.titleIcon} />
          Product Information
        </h3>
        <p className={styles.stepDescription}>
          Provide detailed information about your products, pricing, and minimum order quantities.
        </p>
      </div>

      <div className={styles.formGrid}>
        {/* Row 1: Product Category and Subcategory */}
        <div className={styles.formRow}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              <Package size={16} />
              Product Category *
            </label>
            <div className={styles.inputWrapper}>
              <select
                value={formData.productCategory || ''}
                onChange={(e) => {
                  updateFormData('productCategory', e.target.value);
                  updateFormData('productSubcategory', ''); // Reset subcategory
                }}
                className={getFieldClass('productCategory')}
              >
                <option value="">Select product category</option>
                {productCategories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              {getFieldIcon('productCategory')}
            </div>
            {localErrors.productCategory && (
              <span className={styles.errorMessage}>{localErrors.productCategory}</span>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              <FileText size={16} />
              Product Subcategory
            </label>
            <div className={styles.inputWrapper}>
              <select
                value={formData.productSubcategory || ''}
                onChange={(e) => updateFormData('productSubcategory', e.target.value)}
                className={styles.formInput}
                disabled={!formData.productCategory}
              >
                <option value="">Select subcategory</option>
                {formData.productCategory && 
                  productCategories
                    .find(cat => cat.name === formData.productCategory)
                    ?.subcategories.map((sub) => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))
                }
              </select>
            </div>
            <div className={styles.fieldHint}>
              Optional - helps buyers find your products
            </div>
          </div>
        </div>

        {/* Row 2: MOQ and Packaging */}
        <div className={styles.formRow}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              <TrendingUp size={16} />
              Minimum Order Quantity *
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="number"
                value={formData.moq || ''}
                onChange={(e) => updateFormData('moq', e.target.value)}
                className={getFieldClass('moq')}
                placeholder="e.g., 1000"
                min="1"
                step="1"
              />
              {getFieldIcon('moq')}
            </div>
            {localErrors.moq && (
              <span className={styles.errorMessage}>{localErrors.moq}</span>
            )}
            <div className={styles.fieldHint}>
              Minimum quantity buyers must order
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              <Truck size={16} />
              Packaging Type *
            </label>
            <div className={styles.inputWrapper}>
              <select
                value={formData.packaging || ''}
                onChange={(e) => updateFormData('packaging', e.target.value)}
                className={getFieldClass('packaging')}
              >
                <option value="">Select packaging type</option>
                {packagingTypes.map((packaging) => (
                  <option key={packaging} value={packaging}>
                    {packaging}
                  </option>
                ))}
              </select>
              {getFieldIcon('packaging')}
            </div>
            {localErrors.packaging && (
              <span className={styles.errorMessage}>{localErrors.packaging}</span>
            )}
          </div>
        </div>

        {/* Row 3: Unit Price and Currency */}
        <div className={styles.formRow}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              <DollarSign size={16} />
              Unit Price *
            </label>
            <div className={styles.priceGroup}>
              <div className={styles.inputWrapper}>
                <input
                  type="number"
                  value={formData.unitPrice || ''}
                  onChange={(e) => updateFormData('unitPrice', e.target.value)}
                  className={getFieldClass('unitPrice')}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
                {getFieldIcon('unitPrice')}
              </div>
              <select
                value={formData.currency || 'USD'}
                onChange={(e) => updateFormData('currency', e.target.value)}
                className={styles.currencySelect}
              >
                {currencies.map((currency) => (
                  <option key={currency.value} value={currency.value}>
                    {currency.value}
                  </option>
                ))}
              </select>
            </div>
            {localErrors.unitPrice && (
              <span className={styles.errorMessage}>{localErrors.unitPrice}</span>
            )}
            <div className={styles.fieldHint}>
              Price per unit in selected currency
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>
              <Info size={16} />
              Estimated Order Value
            </label>
            <div className={styles.calculatedValue}>
              <span className={styles.valueAmount}>
                {getSelectedCurrency()?.symbol || '$'}
                {calculateEstimatedValue().toLocaleString()}
              </span>
              <span className={styles.valueLabel}>
                (MOQ × Unit Price)
              </span>
            </div>
            <div className={styles.fieldHint}>
              Minimum order value calculation
            </div>
          </div>
        </div>

        {/* Row 4: Product Description */}
        <div className={styles.formRow}>
          <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
            <label className={styles.fieldLabel}>
              <FileText size={16} />
              Product Description *
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                value={formData.productDescription || ''}
                onChange={(e) => updateFormData('productDescription', e.target.value)}
                className={getFieldClass('productDescription')}
                placeholder="Provide a detailed description of your products, including specifications, materials, features, applications, and unique selling points..."
                rows={5}
                maxLength={2000}
              />
            </div>
            <div className={styles.fieldHelper}>
              <span className={styles.charCount}>
                {(formData.productDescription || '').length}/2000 characters
                {(formData.productDescription || '').length < 50 && (
                  <span className={styles.charCountWarning}> (minimum 50 required)</span>
                )}
              </span>
            </div>
            {localErrors.productDescription && (
              <span className={styles.errorMessage}>{localErrors.productDescription}</span>
            )}
          </div>
        </div>

        {/* Product Images Section */}
        <div className={styles.formRow}>
          <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
            <label className={styles.fieldLabel}>
              <Image size={16} />
              Product Images (Optional)
            </label>
            
            <div className={styles.imageUploadSection}>
              <div className={styles.imageUploadZone}>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleImageUpload(Array.from(e.target.files || []))}
                  className={styles.imageInput}
                  id="image-upload"
                />
                <label htmlFor="image-upload" className={styles.uploadLabel}>
                  <Plus size={24} />
                  <span>Add Product Images</span>
                  <small>JPG, PNG, GIF up to 2MB each (Max 5 images)</small>
                </label>
              </div>

              {productImages.length > 0 && (
                <div className={styles.imageGrid}>
                  {productImages.map((image) => (
                    <div key={image.id} className={styles.imageCard}>
                      <img src={image.url} alt={image.name} className={styles.imagePreview} />
                      <button
                        type="button"
                        onClick={() => removeImage(image.id)}
                        className={styles.removeImageButton}
                        title="Remove image"
                      >
                        <X size={16} />
                      </button>
                      <div className={styles.imageName}>{image.name}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.fieldHint}>
              Add high-quality images to showcase your products ({productImages.length}/5 used)
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className={styles.tipsSection}>
        <div className={styles.tipsHeader}>
          <span className={styles.tipsIcon}>💡</span>
          <h4>Product Information Tips</h4>
        </div>
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>📝</div>
            <h5>Description Best Practices</h5>
            <ul>
              <li>Include technical specifications</li>
              <li>Mention quality standards and certifications</li>
              <li>Describe unique features and benefits</li>
              <li>Specify applications and use cases</li>
            </ul>
          </div>
          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>💰</div>
            <h5>Pricing Strategy</h5>
            <ul>
              <li>Research competitor pricing</li>
              <li>Consider volume discounts</li>
              <li>Factor in packaging and shipping</li>
              <li>Include payment terms in negotiation</li>
            </ul>
          </div>
          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>📸</div>
            <h5>Image Guidelines</h5>
            <ul>
              <li>Use high-resolution, clear images</li>
              <li>Show products from multiple angles</li>
              <li>Include packaging and branding</li>
              <li>Ensure good lighting and composition</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className={styles.progressSection}>
        <div className={styles.progressInfo}>
          <span>Form Completion</span>
          <span className={styles.progressPercent}>
            {Math.round((Object.keys(fieldValidation).filter(key => fieldValidation[key] === 'success').length / 5) * 100)}%
          </span>
        </div>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill}
            style={{ 
              width: `${(Object.keys(fieldValidation).filter(key => fieldValidation[key] === 'success').length / 5) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsStep;