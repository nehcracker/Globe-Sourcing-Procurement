// src/components/About/WhoWeAre/WhoWeAre.jsx
import React from 'react';
import { 
  Globe, 
  Users, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  Target,
  Award,
  Zap
} from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './WhoWeAre.module.css';

const WhoWeAre = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const keyPoints = [
    {
      icon: <Globe size={24} />,
      title: "Global Bridge",
      description: "Connecting buyers and vendors across continents"
    },
    {
      icon: <Shield size={24} />,
      title: "Verified Network",
      description: "All suppliers undergo rigorous verification"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Product Quality",
      description: "Quality assurance at every step"
    },
    {
      icon: <Zap size={24} />,
      title: "Streamlined Process",
      description: "Efficient logistics and transparent operations"
    }
  ];

  const achievements = [
    {
      icon: <Users size={20} />,
      number: "2,500+",
      label: "Global Partners",
      color: "#3B82F6"
    },
    {
      icon: <Globe size={20} />,
      number: "50+",
      label: "Countries Served",
      color: "#10B981"
    },
    {
      icon: <TrendingUp size={20} />,
      number: "$50M+",
      label: "Trade Volume",
      color: "#F59E0B"
    },
    {
      icon: <Award size={20} />,
      number: "99%",
      label: "Success Rate",
      color: "#EF4444"
    }
  ];

  return (
    <section 
      className={styles.whoWeAre}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.headerBadge}>
            <Target size={16} />
            <span>Our Story</span>
          </div>
          <h2 className={styles.sectionTitle}>Who We Are</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Content Section */}
          <div className={`${styles.contentSection} ${isVisible ? styles.slideInLeft : ''}`}>
            <div className={styles.storyContent}>
              <p className={styles.mainDescription}>
                We are a <strong>procurement and sourcing company</strong> bridging the gap between 
                global buyers and bulk product vendors. Our mission is to simplify international 
                sourcing by providing a transparent, reliable, and efficient process.
              </p>
              
              <p className={styles.secondaryDescription}>
                We ensure suppliers are vetted, products are verified, and logistics are streamlined. 
                Our platform creates <em>trusted partnerships</em> that span continents, making global 
                trade accessible and secure for businesses of all sizes.
              </p>

              {/* Key Points Grid */}
              <div className={styles.keyPointsGrid}>
                {keyPoints.map((point, index) => (
                  <div 
                    key={index} 
                    className={styles.keyPoint}
                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  >
                    <div className={styles.keyPointIcon}>
                      {point.icon}
                    </div>
                    <div className={styles.keyPointContent}>
                      <h4 className={styles.keyPointTitle}>{point.title}</h4>
                      <p className={styles.keyPointDescription}>{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Company Philosophy */}
              <div className={styles.philosophy}>
                <blockquote className={styles.philosophyQuote}>
                  "We believe that successful global trade is built on trust, transparency, 
                  and mutual benefit. Our platform doesn't just connect businesses—it creates 
                  lasting partnerships that drive growth worldwide."
                </blockquote>
                <div className={styles.philosophyAuthor}>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>Globe Sourcing Leadership Team</span>
                    <span className={styles.authorTitle}>Procurement Excellence Since 2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className={`${styles.visualSection} ${isVisible ? styles.slideInRight : ''}`}>
            {/* Achievement Cards */}
            <div className={styles.achievementCards}>
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={styles.achievementCard}
                  style={{ 
                    animationDelay: `${index * 0.15 + 0.6}s`,
                    '--accent-color': achievement.color
                  }}
                >
                  <div className={styles.achievementIcon}>
                    {achievement.icon}
                  </div>
                  <div className={styles.achievementContent}>
                    <div className={styles.achievementNumber}>{achievement.number}</div>
                    <div className={styles.achievementLabel}>{achievement.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Company Image Placeholder */}
            <div className={styles.companyImageContainer}>
              <div className={styles.companyImage}>
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Global business team collaboration"
                  className={styles.image}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    <Globe size={48} />
                    <span className={styles.overlayText}>Connecting Global Markets</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className={styles.floatingElements}>
              <div className={styles.floatingElement1}>
                <Users size={20} />
              </div>
              <div className={styles.floatingElement2}>
                <Globe size={24} />
              </div>
              <div className={styles.floatingElement3}>
                <TrendingUp size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className={`${styles.statsBar} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>24/7</div>
            <div className={styles.statLabel}>Global Support</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>100%</div>
            <div className={styles.statLabel}>Verified Suppliers</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>5★</div>
            <div className={styles.statLabel}>Average Rating</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>48hrs</div>
            <div className={styles.statLabel}>Response Time</div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className={styles.backgroundDecorations}>
        <div className={styles.decoration1}></div>
        <div className={styles.decoration2}></div>
        <div className={styles.decoration3}></div>
      </div>
    </section>
  );
};

export default WhoWeAre;