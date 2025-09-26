// src/pages/VendorRegistration/hooks/useFormPersistence.js
import { useCallback } from 'react';

const STORAGE_KEY = 'vendor_registration_draft';
const SESSION_KEY = 'vendor_session_id';

export const useFormPersistence = () => {
  // Generate unique session ID
  const generateSessionId = useCallback(() => {
    return `vendor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  // Get or create session ID
  const getSessionId = useCallback(() => {
    let sessionId = sessionStorage.getItem(SESSION_KEY);
    if (!sessionId) {
      sessionId = generateSessionId();
      sessionStorage.setItem(SESSION_KEY, sessionId);
    }
    return sessionId;
  }, [generateSessionId]);

  // Save draft to localStorage
  const saveDraft = useCallback((data) => {
    try {
      const sessionId = getSessionId();
      const draftData = {
        ...data,
        sessionId,
        timestamp: Date.now(),
        version: '1.0'
      };

      // Filter out sensitive data before saving
      const filteredData = {
        ...draftData,
        formData: {
          ...draftData.formData,
          // Remove sensitive fields from draft
          businessRegNumber: '',
          files: [] // Don't persist files in localStorage
        }
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredData));
      
      // Also save to sessionStorage for immediate access
      sessionStorage.setItem(`${STORAGE_KEY}_temp`, JSON.stringify(draftData));
      
      console.log('📝 Draft saved successfully');
      return true;
    } catch (error) {
      console.error('Failed to save draft:', error);
      return false;
    }
  }, [getSessionId]);

  // Load draft from localStorage
  const loadDraft = useCallback(() => {
    try {
      // First try sessionStorage for current session
      let draftJson = sessionStorage.getItem(`${STORAGE_KEY}_temp`);
      
      // If not in session, try localStorage
      if (!draftJson) {
        draftJson = localStorage.getItem(STORAGE_KEY);
      }

      if (!draftJson) {
        return null;
      }

      const draft = JSON.parse(draftJson);
      
      // Check if draft is not too old (7 days max)
      const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
      if (Date.now() - draft.timestamp > maxAge) {
        clearDraft();
        return null;
      }

      // Validate draft structure
      if (!draft.formData || !draft.currentStep) {
        return null;
      }

      console.log('📖 Draft loaded successfully');
      return draft;
    } catch (error) {
      console.error('Failed to load draft:', error);
      return null;
    }
  }, []);

  // Clear draft from storage
  const clearDraft = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(`${STORAGE_KEY}_temp`);
      console.log('🗑️ Draft cleared successfully');
      return true;
    } catch (error) {
      console.error('Failed to clear draft:', error);
      return false;
    }
  }, []);

  // Check if draft exists
  const hasDraft = useCallback(() => {
    try {
      const sessionDraft = sessionStorage.getItem(`${STORAGE_KEY}_temp`);
      const localDraft = localStorage.getItem(STORAGE_KEY);
      return !!(sessionDraft || localDraft);
    } catch (error) {
      return false;
    }
  }, []);

  // Get draft info without loading full data
  const getDraftInfo = useCallback(() => {
    try {
      let draftJson = sessionStorage.getItem(`${STORAGE_KEY}_temp`);
      if (!draftJson) {
        draftJson = localStorage.getItem(STORAGE_KEY);
      }

      if (!draftJson) {
        return null;
      }

      const draft = JSON.parse(draftJson);
      
      return {
        timestamp: draft.timestamp,
        currentStep: draft.currentStep,
        sessionId: draft.sessionId,
        hasCompanyInfo: !!(draft.formData?.companyName && draft.formData?.email),
        hasProductInfo: !!(draft.formData?.productCategory && draft.formData?.moq),
        timeAgo: getTimeAgo(draft.timestamp)
      };
    } catch (error) {
      console.error('Failed to get draft info:', error);
      return null;
    }
  }, []);

  // Helper function to get human-readable time difference
  const getTimeAgo = (timestamp) => {
    const now = Date.now();
    const diff = now - timestamp;
    
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    return `${days} day${days > 1 ? 's' : ''} ago`;
  };

  // Auto-save functionality with debouncing
  const createAutoSaver = useCallback((data, delay = 3000) => {
    let timeoutId;
    
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        saveDraft(data);
      }, delay);
    };
  }, [saveDraft]);

  // Export/Import functionality
  const exportDraft = useCallback(() => {
    const draft = loadDraft();
    if (!draft) {
      return null;
    }

    // Create exportable data (without sensitive info)
    const exportData = {
      ...draft,
      exportedAt: Date.now(),
      exportVersion: '1.0'
    };

    return JSON.stringify(exportData, null, 2);
  }, [loadDraft]);

  const importDraft = useCallback((draftJson) => {
    try {
      const draft = JSON.parse(draftJson);
      
      // Validate imported data
      if (!draft.formData || !draft.currentStep) {
        throw new Error('Invalid draft format');
      }

      // Update timestamp and session
      draft.timestamp = Date.now();
      draft.sessionId = getSessionId();

      // Save imported draft
      localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
      console.log('📥 Draft imported successfully');
      return true;
    } catch (error) {
      console.error('Failed to import draft:', error);
      return false;
    }
  }, [getSessionId]);

  // Cleanup old drafts (call this periodically)
  const cleanupOldDrafts = useCallback(() => {
    try {
      const draft = localStorage.getItem(STORAGE_KEY);
      if (draft) {
        const parsedDraft = JSON.parse(draft);
        const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
        
        if (Date.now() - parsedDraft.timestamp > maxAge) {
          clearDraft();
          console.log('🧹 Old draft cleaned up');
        }
      }
    } catch (error) {
      console.error('Failed to cleanup old drafts:', error);
    }
  }, [clearDraft]);

  return {
    // Core functionality
    saveDraft,
    loadDraft,
    clearDraft,
    
    // Draft info
    hasDraft,
    getDraftInfo,
    
    // Session management
    getSessionId,
    
    // Auto-save
    createAutoSaver,
    
    // Export/Import
    exportDraft,
    importDraft,
    
    // Maintenance
    cleanupOldDrafts
  };
};