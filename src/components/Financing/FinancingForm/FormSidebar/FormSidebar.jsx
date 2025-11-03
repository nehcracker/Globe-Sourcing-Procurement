// src/components/Financing/FinancingForm/FormSidebar/FormSidebar.jsx
import React, { useState, useEffect } from 'react';
import ProgressTracker from './SidebarCards/ProgressTracker';
// import StepHelper from './SidebarCards/StepHelper';
// import RequirementsCard from './SidebarCards/RequirementsCard';
import ApplicationSummary from './SidebarCards/ApplicationSummary';
// import TrustBadges from './SidebarCards/TrustBadges';
import TimelinePreview from './SidebarCards/TimelinePreview';
// import SupportCard from './SidebarCards/SupportCard';
import styles from './FormSidebar.module.css';

const FormSidebar = ({
  currentStep,
  totalSteps = 4,
  formData,
  errors,
  onStepClick,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [collapsedCards, setCollapsedCards] = useState([]);

  // Calculate form completion progress
  const calculateProgress = () => {
    const fields = Object.keys(formData);
    const totalFields = fields.length;
    const filledFields = fields.filter(key => {
      const value = formData[key];
      return value !== '' && value !== false && value !== null && value !== undefined;
    }).length;
    
    return {
      percentage: Math.round((filledFields / totalFields) * 100),
      completed: filledFields,
      total: totalFields
    };
  };

  // Determine which cards to show based on current step
  const getVisibleCards = () => {
    const baseCards = ['progress', 'stepHelper', 'support'];
    
    switch(currentStep) {
      case 1:
        return [...baseCards, 'trustBadges'];
      case 2:
        return [...baseCards, 'trustBadges'];
      case 3:
        return [...baseCards, 'requirements'];
      case 4:
        return [...baseCards, 'requirements', 'timeline'];
      default:
        return baseCards;
    }
  };

  // Handle sticky sidebar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsSticky(scrolled > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle card collapse
  const toggleCard = (cardName) => {
    setCollapsedCards(prev => 
      prev.includes(cardName)
        ? prev.filter(c => c !== cardName)
        : [...prev, cardName]
    );
  };

  const visibleCards = getVisibleCards();
  const progress = calculateProgress();

  return (
    <aside className={`${styles.sidebar} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.sidebarContent}>
        {/* Progress Tracker - Always visible */}
        {visibleCards.includes('progress') && (
          <ProgressTracker
            currentStep={currentStep}
            totalSteps={totalSteps}
            progress={progress}
            onStepClick={onStepClick}
          />
        )}

        {/* Step Helper - Always visible 
        {visibleCards.includes('stepHelper') && (
          <StepHelper
            currentStep={currentStep}
            isCollapsed={collapsedCards.includes('stepHelper')}
            onToggle={() => toggleCard('stepHelper')}
          />
        )}
        */}

        {/* Trust Badges - Steps 1 & 2 
        {visibleCards.includes('trustBadges') && (
          <TrustBadges
            isCollapsed={collapsedCards.includes('trustBadges')}
            onToggle={() => toggleCard('trustBadges')}
          />
        )}

        {/* Requirements Card - Steps 3 & 4 
        {visibleCards.includes('requirements') && (
          <RequirementsCard
            isCollapsed={collapsedCards.includes('requirements')}
            onToggle={() => toggleCard('requirements')}
          />
        )}
        */}  

        {/* Timeline Preview - Step 4 only */}
        {visibleCards.includes('timeline') && (
          <TimelinePreview
            isCollapsed={collapsedCards.includes('timeline')}
            onToggle={() => toggleCard('timeline')}
          />
        )}

        {/* Application Summary - Optional, shown when data exists */}
        {currentStep > 1 && formData.companyName && (
          <ApplicationSummary
            formData={formData}
            currentStep={currentStep}
            isCollapsed={collapsedCards.includes('summary')}
            onToggle={() => toggleCard('summary')}
            onEditClick={onStepClick}
          />
        )}

        {/* Support Card - Always visible at bottom 
        {visibleCards.includes('support') && (
          <SupportCard />
        )}
          */}
      </div>
    </aside>
  );
};

export default FormSidebar;