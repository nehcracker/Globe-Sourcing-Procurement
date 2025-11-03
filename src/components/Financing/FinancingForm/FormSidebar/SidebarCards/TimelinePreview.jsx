// src/components/Financing/FinancingForm/FormSidebar/SidebarCards/TimelinePreview.jsx
import React from 'react';
import { Clock, ChevronDown, Send, FileSearch, CheckCircle, Banknote, Mail } from 'lucide-react';
import styles from './TimelinePreview.module.css';

const TimelinePreview = ({ isCollapsed, onToggle }) => {
  const timeline = [
    {
      icon: <Send size={20} />,
      title: 'Submit Application',
      description: 'Complete and submit your financing application',
      time: 'Now',
      status: 'current'
    },
    {
      icon: <Mail size={20} />,
      title: 'Email Confirmation',
      description: 'Receive confirmation email with reference number',
      time: 'Immediate',
      status: 'upcoming'
    },
    {
      icon: <FileSearch size={20} />,
      title: 'Document Upload',
      description: 'Receive secure link to upload required documents',
      time: '24 hours',
      status: 'upcoming'
    },
    {
      icon: <CheckCircle size={20} />,
      title: 'Application Review',
      description: 'Our team reviews your application and documents',
      time: '48-72 hours',
      status: 'upcoming'
    },
    {
      icon: <Banknote size={20} />,
      title: 'Financing Decision',
      description: 'Receive our decision and financing terms',
      time: '3-5 days',
      status: 'upcoming'
    }
  ];

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader} onClick={onToggle}>
        <h3 className={styles.cardTitle}>
          <Clock size={20} />
          What Happens Next
        </h3>
        <button
          className={`${styles.collapseButton} ${isCollapsed ? styles.collapsed : ''}`}
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
        >
          <ChevronDown size={20} />
        </button>
      </div>

      <div className={`${styles.cardContent} ${isCollapsed ? styles.collapsed : ''}`}>
        <p className={styles.introText}>
          Here's what you can expect after submitting your application:
        </p>

        <div className={styles.timeline}>
          {timeline.map((item, index) => (
            <div key={index} className={`${styles.timelineItem} ${styles[item.status]}`}>
              <div className={styles.timelineIcon}>
                {item.icon}
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div className={styles.timelineTitle}>{item.title}</div>
                  <div className={styles.timelineTime}>{item.time}</div>
                </div>
                <div className={styles.timelineDescription}>{item.description}</div>
              </div>
              {index < timeline.length - 1 && (
                <div className={styles.timelineConnector}></div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.estimateNote}>
          <Clock size={16} />
          <span>
            <strong>Total estimated time:</strong> Most applications are finalized within 5-7 business days
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimelinePreview;