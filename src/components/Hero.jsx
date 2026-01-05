import React from 'react';

const Hero = () => {
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styles = {
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 5% 80px',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '4rem',
      position: 'relative',
      zIndex: 1,
    },
    content: {
      flex: 1,
      maxWidth: '600px',
      animation: 'fadeInUp 1s ease',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(245, 158, 11, 0.2)',
      color: '#f59e0b',
      padding: '8px 24px',
      borderRadius: '50px',
      fontSize: '0.875rem',
      fontWeight: 600,
      marginBottom: '1.5rem',
      border: '1px solid rgba(245, 158, 11, 0.3)',
    },
    pulse: {
      width: '8px',
      height: '8px',
      background: '#f59e0b',
      borderRadius: '50%',
      animation: 'pulse 2s infinite',
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: 800,
      color: 'white',
      lineHeight: 1.1,
      marginBottom: '1.5rem',
    },
    gradientText: {
      background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    description: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.7)',
      lineHeight: 1.7,
      marginBottom: '2rem',
      maxWidth: '500px',
    },
    buttons: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '3rem',
      flexWrap: 'wrap',
    },
    btnPrimary: {
      background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      fontWeight: 600,
      fontSize: '1rem',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
    },
    btnSecondary: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      fontWeight: 600,
      fontSize: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
    },
    stats: {
      display: 'flex',
      gap: '3rem',
      marginTop: '2rem',
    },
    statItem: {
      textAlign: 'left',
    },
    statValue: {
      fontSize: '2.5rem',
      fontWeight: 800,
      color: 'white',
      marginBottom: '0.25rem',
      display: 'flex',
      alignItems: 'flex-end',
    },
    statValueSpan: {
      color: '#f59e0b',
      fontSize: '1.5rem',
      marginLeft: '4px',
    },
    statLabel: {
      fontSize: '0.875rem',
      color: 'rgba(255, 255, 255, 0.6)',
    },
    visual: {
      flex: 1,
      maxWidth: '600px',
      position: 'relative',
      animation: 'fadeInRight 1s ease 0.3s both',
    },
    image: {
      width: '200%',
      height: '600px',
      objectFit: 'cover',
      borderRadius: '24px',
      boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3)',
    },
    floatingCard: {
      position: 'absolute',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '16px',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
      animation: 'float 6s ease-in-out infinite',
    },
    topCard: {
      top: '-30px',
      right: '-20px',
    },
    bottomCard: {
      bottom: '40px',
      left: '-30px',
      animationDelay: '2s',
    },
    floatingIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    blueIcon: {
      background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
      color: 'white',
    },
    yellowIcon: {
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
    },
    floatingText: {
      display: 'flex',
      flexDirection: 'column',
    },
    floatingTextH4: {
      fontSize: '0.875rem',
      fontWeight: 700,
      color: '#1a1a2e',
      margin: 0,
    },
    floatingTextP: {
      fontSize: '0.75rem',
      color: '#64748b',
      margin: 0,
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      zIndex: 1,
    },
    scrollText: {
      fontSize: '0.75rem',
      color: 'rgba(255, 255, 255, 0.5)',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    scrollMouse: {
      width: '24px',
      height: '40px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '12px',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '8px',
    },
    scrollWheel: {
      width: '4px',
      height: '8px',
      background: '#f59e0b',
      borderRadius: '2px',
      animation: 'scrollWheel 2s infinite',
    },
    // CSS animations
    animationStyles: `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.7;
          transform: scale(1.05);
        }
      }
      
      @keyframes scrollWheel {
        0% {
          opacity: 1;
          transform: translateY(0);
        }
        100% {
          opacity: 0;
          transform: translateY(12px);
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
      }
    `,
  };

  return (
    <section id="home" style={styles.hero}>
      <style>{styles.animationStyles}</style>
      
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.badge}>
            <span style={styles.pulse}></span>
            Transforming Ideas Into Reality
          </div>

          <h1 style={styles.title}>
            Building <span style={styles.gradientText}>Digital Solutions</span> That
            Drive Success
          </h1>

          <p style={styles.description}>
            We craft stunning websites, powerful brands, and deliver cutting-edge
            technology training to empower businesses and individuals in the
            digital age.
          </p>

          <div style={styles.buttons}>
            <button 
              style={styles.btnPrimary}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(37, 99, 235, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.3)';
              }}
              onClick={() => handleNavClick('#services')}
            >
              Get a Website
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              style={styles.btnSecondary}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'none';
              }}
              onClick={() => handleNavClick('#courses')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              Explore Courses
            </button>
          </div>

          <div style={styles.stats}>
            <div style={styles.statItem}>
              <div style={styles.statValue}>
                30<span style={styles.statValueSpan}>+</span>
              </div>
              <div style={styles.statLabel}>Projects Delivered</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statValue}>
                20<span style={styles.statValueSpan}>+</span>
              </div>
              <div style={styles.statLabel}>Happy Clients</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statValue}>
                50<span style={styles.statValueSpan}>+</span>
              </div>
              <div style={styles.statLabel}>Students Trained</div>
            </div>
          </div>
        </div>

        <div style={styles.visual}>
          <img
            src="https://github.com/BOBWANDATI/images/blob/main/micheal-ogungbe-SHgueDAHJFk-unsplash__1_-removebg-preview.png?raw=true"
            alt="Digital workspace"
            style={styles.image}
          />
          <div style={{...styles.floatingCard, ...styles.topCard}}>
            <div style={{...styles.floatingIcon, ...styles.blueIcon}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div style={styles.floatingText}>
              <h4 style={styles.floatingTextH4}>Web Development</h4>
              <p style={styles.floatingTextP}>Modern & Responsive</p>
            </div>
          </div>
          <div style={{...styles.floatingCard, ...styles.bottomCard}}>
            <div style={{...styles.floatingIcon, ...styles.yellowIcon}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div style={styles.floatingText}>
              <h4 style={styles.floatingTextH4}>Tech Training</h4>
              <p style={styles.floatingTextP}>100+ Students</p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.scrollIndicator} onClick={() => handleNavClick('#services')}>
        <span style={styles.scrollText}>Scroll Down</span>
        <div style={styles.scrollMouse}>
          <div style={styles.scrollWheel}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;