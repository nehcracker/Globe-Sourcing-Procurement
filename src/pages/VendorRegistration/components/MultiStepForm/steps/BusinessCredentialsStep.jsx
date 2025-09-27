// src/pages/VendorRegistration/components/MultiStepForm/steps/BusinessCredentialsStep.jsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Upload, 
  File, 
  X, 
  CheckCircle, 
  Award, 
  FileText,
  Image,
  Eye
} from 'lucide-react';
import styles from './BusinessCredentialsStep.module.css';

const BusinessCredentialsStep = ({ formData, updateFormData, updateValidation }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState(formData.documents || []);
  const [uploading, setUploading] = useState(false);

  // Supported file types
  const supportedTypes = useMemo(() => ({
    'application/pdf': { ext: 'PDF', icon: FileText, color: '#ef4444' },
    'application/msword': { ext: 'DOC', icon: FileText, color: '#2563eb' },
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': { ext: 'DOCX', icon: FileText, color: '#2563eb' },
    'image/jpeg': { ext: 'JPG', icon: Image, color: '#059669' },
    'image/png': { ext: 'PNG', icon: Image, color: '#059669' },
    'image/gif': { ext: 'GIF', icon: Image, color: '#059669' }
  }), []);

  const maxFileSize = 5 * 1024 * 1024; // 5MB
  const maxFiles = 5;

  useEffect(() => {
    // Always mark this step as valid (documents are optional)
    updateValidation(3, true, {});
    // Update form data with uploaded files
    updateFormData('documents', uploadedFiles);
  }, [uploadedFiles, updateValidation, updateFormData]);

  const validateFile = useCallback((file) => {
    const errors = [];
    
    if (!supportedTypes[file.type]) {
      errors.push(`File type ${file.type} not supported`);
    }
    
    if (file.size > maxFileSize) {
      errors.push(`File size must be less than 5MB`);
    }
    
    return errors;
  }, [supportedTypes, maxFileSize]);

  const handleFiles = useCallback(async (files) => {
    if (uploadedFiles.length + files.length > maxFiles) {
      alert(`Maximum ${maxFiles} files allowed`);
      return;
    }

    setUploading(true);
    const newFiles = [];

    for (let file of files) {
      const errors = validateFile(file);
      
      if (errors.length > 0) {
        alert(`${file.name}: ${errors.join(', ')}`);
        continue;
      }

      // Create file object with preview
      const fileData = {
        id: Date.now() + Math.random(),
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        uploadedAt: new Date().toISOString(),
        status: 'uploaded',
        // In a real app, you would upload to server and get URL
        // For now, we'll create a local URL for preview
        url: URL.createObjectURL(file)
      };

      newFiles.push(fileData);
    }

    setUploadedFiles(prev => [...prev, ...newFiles]);
    setUploading(false);
  }, [uploadedFiles.length, validateFile]);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragActive(true);
    }
  }, []);

  const handleDragOut = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  }, [handleFiles]);

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
    // Reset input to allow same file selection
    e.target.value = '';
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => {
      const updatedFiles = prev.filter(file => file.id !== fileId);
      // Revoke object URL to prevent memory leaks
      const fileToRemove = prev.find(file => file.id === fileId);
      if (fileToRemove?.url) {
        URL.revokeObjectURL(fileToRemove.url);
      }
      return updatedFiles;
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileType) => {
    const fileInfo = supportedTypes[fileType];
    if (fileInfo) {
      const IconComponent = fileInfo.icon;
      return <IconComponent size={20} style={{ color: fileInfo.color }} />;
    }
    return <File size={20} />;
  };

  const previewFile = (file) => {
    if (file.type.startsWith('image/')) {
      // Open image in new tab for preview
      window.open(file.url, '_blank');
    } else {
      // For documents, you would typically use a document viewer
      // For now, we'll just download the file
      const link = document.createElement('a');
      link.href = file.url;
      link.download = file.name;
      link.click();
    }
  };

  return (
    <div className={styles.businessCredentialsStep}>
      <div className={styles.stepHeader}>
        <h3 className={styles.stepTitle}>
          <Award size={24} className={styles.titleIcon} />
          Business Credentials
        </h3>
        <p className={styles.stepDescription}>
          Upload business documents and certifications to verify your company credentials and build trust with buyers.
        </p>
      </div>

      {/* Certifications Text Area */}
      <div className={styles.certificationsSection}>
        <label className={styles.fieldLabel}>
          <Award size={16} />
          Certifications & Quality Standards
        </label>
        <textarea
          value={formData.certifications || ''}
          onChange={(e) => updateFormData('certifications', e.target.value)}
          className={styles.certificationsInput}
          placeholder="List your certifications, quality standards, compliance certificates, industry accreditations, etc."
          rows={4}
          maxLength={1000}
        />
        <div className={styles.fieldHint}>
          <span>Include ISO certifications, industry standards, quality assurance certificates</span>
          <span className={styles.charCount}>
            {(formData.certifications || '').length}/1000 characters
          </span>
        </div>
      </div>

      {/* Document Upload Section */}
      <div className={styles.uploadSection}>
        <div className={styles.uploadHeader}>
          <h4>Supporting Documents</h4>
          <span className={styles.optional}>(Optional)</span>
        </div>

        {/* Drop Zone */}
        <div
          className={`${styles.dropZone} ${dragActive ? styles.dragActive : ''} ${uploading ? styles.uploading : ''}`}
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
            onChange={handleFileInput}
            className={styles.fileInput}
            id="file-upload"
            disabled={uploading || uploadedFiles.length >= maxFiles}
          />
          
          <div className={styles.dropZoneContent}>
            <Upload size={48} className={styles.uploadIcon} />
            <div className={styles.uploadText}>
              <p className={styles.primaryText}>
                {uploading ? 'Processing files...' : 'Drop your files here or click to browse'}
              </p>
              <p className={styles.secondaryText}>
                PDF, DOC, DOCX, JPG, PNG, GIF up to 5MB each ({uploadedFiles.length}/{maxFiles} files)
              </p>
            </div>
            <label htmlFor="file-upload" className={styles.browseButton}>
              Choose Files
            </label>
          </div>
        </div>

        {/* Uploaded Files List */}
        {uploadedFiles.length > 0 && (
          <div className={styles.filesList}>
            <h5 className={styles.filesListTitle}>Uploaded Documents ({uploadedFiles.length})</h5>
            <div className={styles.filesGrid}>
              {uploadedFiles.map((file) => (
                <div key={file.id} className={styles.fileCard}>
                  <div className={styles.fileHeader}>
                    <div className={styles.fileIcon}>
                      {getFileIcon(file.type)}
                    </div>
                    <div className={styles.fileInfo}>
                      <div className={styles.fileName} title={file.name}>
                        {file.name}
                      </div>
                      <div className={styles.fileDetails}>
                        {formatFileSize(file.size)} • {supportedTypes[file.type]?.ext || 'File'}
                      </div>
                    </div>
                    <div className={styles.fileActions}>
                      <button
                        type="button"
                        onClick={() => previewFile(file)}
                        className={styles.actionButton}
                        title="Preview file"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFile(file.id)}
                        className={styles.removeButton}
                        title="Remove file"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                  <div className={styles.fileStatus}>
                    <CheckCircle size={14} className={styles.statusIcon} />
                    <span>Uploaded successfully</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Document Guidelines */}
      <div className={styles.guidelinesSection}>
        <div className={styles.guidelinesHeader}>
          <span className={styles.guidelinesIcon}>📋</span>
          <h4>Document Guidelines</h4>
        </div>
        <div className={styles.guidelinesGrid}>
          <div className={styles.guidelineCard}>
            <div className={styles.cardIcon}>📄</div>
            <h5>Accepted Documents</h5>
            <ul>
              <li>Business registration certificate</li>
              <li>Tax identification documents</li>
              <li>ISO certifications</li>
              <li>Quality assurance certificates</li>
              <li>Product brochures/catalogs</li>
              <li>Export licenses (if applicable)</li>
            </ul>
          </div>
          <div className={styles.guidelineCard}>
            <div className={styles.cardIcon}>✅</div>
            <h5>File Requirements</h5>
            <ul>
              <li>File formats: PDF, DOC, DOCX, JPG, PNG, GIF</li>
              <li>Maximum size: 5MB per file</li>
              <li>Maximum files: 5 documents</li>
              <li>Clear, readable quality</li>
              <li>Valid and current documents</li>
            </ul>
          </div>
          <div className={styles.guidelineCard}>
            <div className={styles.cardIcon}>🔒</div>
            <h5>Security & Privacy</h5>
            <ul>
              <li>All documents are encrypted</li>
              <li>Access limited to verification team</li>
              <li>Documents deleted after verification</li>
              <li>GDPR compliant data handling</li>
              <li>Secure file transmission</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits of Document Verification */}
      <div className={styles.benefitsSection}>
        <h4 className={styles.benefitsTitle}>Benefits of Document Verification</h4>
        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}>
            <CheckCircle size={20} className={styles.benefitIcon} />
            <div>
              <strong>Verified Badge:</strong> Get a verified supplier badge on your profile
            </div>
          </div>
          <div className={styles.benefitItem}>
            <CheckCircle size={20} className={styles.benefitIcon} />
            <div>
              <strong>Higher Trust:</strong> Buyers prefer verified suppliers for large orders
            </div>
          </div>
          <div className={styles.benefitItem}>
            <CheckCircle size={20} className={styles.benefitIcon} />
            <div>
              <strong>Better Visibility:</strong> Verified profiles appear higher in search results
            </div>
          </div>
          <div className={styles.benefitItem}>
            <CheckCircle size={20} className={styles.benefitIcon} />
            <div>
              <strong>Premium Features:</strong> Access to advanced vendor tools and analytics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCredentialsStep;
