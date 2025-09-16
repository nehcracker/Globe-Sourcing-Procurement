// src/components/Forms/Shared/FileUpload.jsx
import React, { useState, useRef } from 'react';
import { Upload, X, AlertCircle, CheckCircle } from 'lucide-react';
import styles from './FileUpload.module.css';

const FileUpload = ({
  onFilesChange,
  acceptedTypes = ['image/*', '.pdf', '.doc', '.docx'],
  maxFiles = 5,
  maxSize = 5 * 1024 * 1024, // 5MB
  className = ''
}) => {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [errors, setErrors] = useState([]);
  const fileInputRef = useRef(null);

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const validateFile = (file) => {
    const errors = [];

    // Check file size
    if (file.size > maxSize) {
      errors.push(`File size exceeds ${formatFileSize(maxSize)}`);
    }

    // Check file type
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    const isValidType = acceptedTypes.some(type => {
      if (type.includes('*')) {
        const baseType = type.split('/')[0];
        return file.type.startsWith(baseType);
      }
      return type === fileExtension || file.type === type;
    });

    if (!isValidType) {
      errors.push(`File type not supported. Accepted types: ${acceptedTypes.join(', ')}`);
    }

    return errors;
  };

  const handleFiles = (newFiles) => {
    const fileList = Array.from(newFiles);
    const validFiles = [];
    const newErrors = [];

    // Check total file count
    if (files.length + fileList.length > maxFiles) {
      newErrors.push(`Maximum ${maxFiles} files allowed`);
      setErrors(newErrors);
      return;
    }

    fileList.forEach((file, index) => {
      const fileErrors = validateFile(file);
      if (fileErrors.length === 0) {
        // Add unique ID to file
        const fileWithId = {
          file,
          id: Date.now() + index,
          name: file.name,
          size: file.size,
          type: file.type,
          uploaded: false
        };
        validFiles.push(fileWithId);
      } else {
        newErrors.push(`${file.name}: ${fileErrors.join(', ')}`);
      }
    });

    if (validFiles.length > 0) {
      const updatedFiles = [...files, ...validFiles];
      setFiles(updatedFiles);
      onFilesChange(updatedFiles);
    }

    setErrors(newErrors);

    // Clear errors after 5 seconds
    if (newErrors.length > 0) {
      setTimeout(() => setErrors([]), 5000);
    }
  };

  const removeFile = (fileId) => {
    const updatedFiles = files.filter(f => f.id !== fileId);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const getFileIcon = (fileType) => {
    if (fileType.startsWith('image/')) {
      return '🖼️';
    } else if (fileType.includes('pdf')) {
      return '📄';
    } else if (fileType.includes('doc')) {
      return '📝';
    }
    return '📎';
  };

  return (
    <div className={`${styles.fileUpload} ${className}`}>
      {/* Upload Area */}
      <div
        className={`${styles.uploadArea} ${dragActive ? styles.dragActive : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedTypes.join(',')}
          onChange={handleChange}
          className={styles.hiddenInput}
        />

        <div className={styles.uploadContent}>
          <div className={styles.uploadIcon}>
            <Upload size={32} />
          </div>
          <div className={styles.uploadText}>
            <h4>Drop files here or click to browse</h4>
            <p>
              Supports: {acceptedTypes.join(', ')} • Max {maxFiles} files • Up to {formatFileSize(maxSize)} each
            </p>
          </div>
        </div>
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className={styles.errorContainer}>
          {errors.map((error, index) => (
            <div key={index} className={styles.errorMessage}>
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          ))}
        </div>
      )}

      {/* File List */}
      {files.length > 0 && (
        <div className={styles.fileList}>
          <h5 className={styles.fileListTitle}>
            Uploaded Files ({files.length}/{maxFiles})
          </h5>
          <div className={styles.files}>
            {files.map((fileObj) => (
              <div key={fileObj.id} className={styles.fileItem}>
                <div className={styles.fileInfo}>
                  <div className={styles.fileIconContainer}>
                    <span className={styles.fileEmoji}>{getFileIcon(fileObj.type)}</span>
                  </div>
                  <div className={styles.fileDetails}>
                    <span className={styles.fileName}>{fileObj.name}</span>
                    <span className={styles.fileSize}>{formatFileSize(fileObj.size)}</span>
                  </div>
                </div>
                
                <div className={styles.fileActions}>
                  <div className={styles.fileStatus}>
                    <CheckCircle size={16} className={styles.successIcon} />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(fileObj.id)}
                    className={styles.removeButton}
                    aria-label={`Remove ${fileObj.name}`}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upload Summary */}
      <div className={styles.uploadSummary}>
        <span className={styles.summaryText}>
          {files.length === 0 
            ? 'No files selected' 
            : `${files.length} file${files.length === 1 ? '' : 's'} ready to upload`
          }
        </span>
      </div>
    </div>
  );
};

export default FileUpload;