import React, { useState, useEffect, useCallback } from 'react';

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', type: 'home' },
    { name: 'Services', href: '#services', type: 'section' },
    { name: 'Courses', href: '#courses', type: 'section' },
    { name: 'Portfolio', href: '#portfolio', type: 'section' },
    { name: 'About Us', href: '#about', type: 'section' },
    { name: 'Web Design', href: '#web-design', type: 'page' },
    { name: 'Contact', href: '#contact', type: 'section' },
  ];

  const logoUrl = "https://github.com/BOBWANDATI/images/blob/main/Black%20and%20White%20Initial%20A%20Tech%20Business%20Logo%20.png?raw=true";

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const hash = window.location.hash.substring(1);
    if (hash === 'web-design') {
      setCurrentView('web-design');
    } else {
      setCurrentView('home');
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleNavClick = useCallback((href, type = 'section') => {
    setIsMobileMenuOpen(false);
    
    if (type === 'page' && href === '#web-design') {
      if (onNavigate) {
        onNavigate('web-design');
      } else {
        window.location.hash = 'web-design';
        window.scrollTo(0, 0);
      }
      setCurrentView('web-design');
    } else if (type === 'home') {
      if (onNavigate) {
        onNavigate('home');
      } else {
        window.location.hash = '';
        window.scrollTo(0, 0);
      }
      setCurrentView('home');
    } else if (type === 'section') {
      if (currentView === 'web-design') {
        if (onNavigate) {
          onNavigate('home', href.substring(1));
        } else {
          window.location.hash = href;
        }
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setCurrentView('home');
    }
  }, [currentView, onNavigate]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    handleNavClick('#home', 'home');
  };

  const handleWhatsappClick = () => {
    const message = "Hello Tana Digital Agency! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/254712345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Responsive styles
  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: '0 5%',
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      ...(isScrolled && {
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(15px)',
        boxShadow: '0 5px 25px rgba(0, 0, 0, 0.08)',
      }),
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '80px',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      textDecoration: 'none',
      color: 'inherit',
      padding: '8px 0',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      flexShrink: 0,
    },
    logoIcon: {
      width: '55px',
      height: '55px',
      background: '#ffffff',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(0, 0, 0, 0.08)',
      position: 'relative',
      flexShrink: 0,
    },
    logoImageContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px',
      background: '#f1f1f1ff',
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      filter: 'contrast(1.1) brightness(1.05)',
      transition: 'all 0.3s ease',
    },
    logoLoading: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
      backgroundSize: '200% 100%',
      animation: 'loading 1.5s infinite',
      borderRadius: '10px',
    },
    logoFallback: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #000000, #1a1a1a)',
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: '1.4rem',
      borderRadius: '10px',
      fontFamily: "'Segoe UI', Arial, sans-serif",
      letterSpacing: '1px',
    },
    logoTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.1,
      minWidth: 0,
    },
    logoText: {
      fontWeight: 800,
      fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
      color: '#5207b4ff',
      letterSpacing: '-0.5px',
      background: 'linear-gradient(135deg, #000000, #333333)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontFamily: "cyrillic bodoni condesed",
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    logoSubtext: {
      color: '#0e12f1ff',
      fontWeight: 500,
      fontSize: 'clamp(0.7rem, 2.5vw, 0.88rem)',
      display: 'block',
      marginTop: '3px',
      marginLeft: '23px',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      fontFamily: "slopes",
      whiteSpace: 'nowrap',
    },
    // Desktop Navigation
    desktopNav: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(1rem, 2vw, 2.5rem)',
    },
    link: {
      color: '#0b25b6ff',
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
      transition: 'all 0.3s ease',
      position: 'relative',
      padding: '8px 0',
      fontFamily: "cyrillic bodoni condesed",
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    },
    linkActive: {
      color: '#e9d208ff',
    },
    linkUnderline: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '0%',
      height: '2px',
      background: 'linear-gradient(90deg, #000000, #333333)',
      transition: 'width 0.3s ease',
    },
    cta: {
      background: '#f5ca0bff',
      color: 'white',
      padding: 'clamp(10px, 2vw, 12px) clamp(20px, 3vw, 28px)',
      borderRadius: '8px',
      fontWeight: 600,
      fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      letterSpacing: '0.5px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      whiteSpace: 'nowrap',
    },
    // Mobile Menu Button
    mobileMenuBtn: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5px',
      zIndex: 1001,
    },
    mobileMenuBtnSpan: {
      display: 'block',
      width: '26px',
      height: '2.5px',
      background: '#000000',
      borderRadius: '2px',
      transition: 'all 0.3s ease',
    },
    // Mobile Menu
    mobileMenuOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999,
      opacity: isMobileMenuOpen ? 1 : 0,
      visibility: isMobileMenuOpen ? 'visible' : 'hidden',
      transition: 'all 0.3s ease',
    },
    mobileMenu: {
      position: 'fixed',
      top: '80px',
      left: 0,
      right: 0,
      bottom: 0,
      background: 'white',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s ease',
      paddingBottom: '80px',
    },
    mobileLink: {
      color: '#475569',
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: '1.1rem',
      padding: '20px 24px',
      transition: 'all 0.2s ease',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    mobileLinkIcon: {
      width: '20px',
      height: '20px',
      opacity: 0.7,
    },
    mobileCta: {
      background: '#000000',
      color: 'white',
      padding: '20px 24px',
      fontWeight: 600,
      fontSize: '1.1rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif',
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      borderTop: '1px solid rgba(0, 0, 0, 0.05)',
    },
  };

  // Media query styles using CSS-in-JS with @media
  const mediaStyles = `
    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    
    @media (max-width: 768px) {
      .desktop-nav {
        display: none !important;
      }
      
      .mobile-menu-btn {
        display: flex !important;
      }
      
      .logo-text-container {
        max-width: 150px;
      }
    }
    
    @media (max-width: 480px) {
      .logo-text-container {
        max-width: 120px;
      }
      
      .logo-icon {
        width: 45px !important;
        height: 45px !important;
      }
      
      .logo {
        gap: 10px !important;
      }
    }
    
    @media (max-width: 360px) {
      .logo-text-container {
        max-width: 100px;
      }
      
      .logo-subtext {
        margin-left: 15px !important;
      }
    }
  `;

  const isLinkActive = (link) => {
    if (link.type === 'page' && link.href === '#web-design') {
      return currentView === 'web-design';
    }
    return false;
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest('.navbar-content')) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <style>{mediaStyles}</style>
      <nav style={styles.navbar} className="navbar-content">
        <div style={styles.container}>
          <div
            style={styles.logo}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              const logoIcon = e.currentTarget.querySelector('.logo-icon');
              if (logoIcon) {
                logoIcon.style.transform = 'rotate(3deg) scale(1.05)';
                logoIcon.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              const logoIcon = e.currentTarget.querySelector('.logo-icon');
              if (logoIcon) {
                logoIcon.style.transform = 'rotate(0deg) scale(1)';
                logoIcon.style.boxShadow = styles.logoIcon.boxShadow;
              }
            }}
            onClick={handleLogoClick}
          >
            <div className="logo-icon" style={styles.logoIcon}>
              {!logoLoaded ? (
                <div style={styles.logoLoading}></div>
              ) : null}
              
              <div style={styles.logoImageContainer}>
                <img
                  src={logoUrl}
                  alt="TANA DIGITAL Logo"
                  style={{
                    ...styles.logoImage,
                    opacity: logoLoaded ? 1 : 0,
                  }}
                  onLoad={() => {
                    setLogoLoaded(true);
                  }}
                  onError={(e) => {
                    console.error('Failed to load logo image');
                    e.target.style.display = 'none';
                    setLogoLoaded(true);
                  }}
                  loading="eager"
                  decoding="async"
                />
                
                {logoLoaded && !document.querySelector('img[src*="github.com"]')?.complete && (
                  <div style={styles.logoFallback}>
                    <span>TD</span>
                  </div>
                )}
              </div>
            </div>
            <div style={styles.logoTextContainer} className="logo-text-container">
              <span style={styles.logoText}>Tana Digital</span>
              <span style={styles.logoSubtext} className="logo-subtext">Agency</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div style={styles.desktopNav} className="desktop-nav">
            {navLinks.slice(0, isMobile ? 4 : navLinks.length).map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  ...styles.link,
                  ...(isLinkActive(link) ? styles.linkActive : {}),
                }}
                onMouseEnter={(e) => {
                  if (!isLinkActive(link)) {
                    e.currentTarget.style.color = '#f1e20bff';
                  }
                  e.currentTarget.querySelector('.underline').style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  if (!isLinkActive(link)) {
                    e.currentTarget.style.color = styles.link.color;
                  }
                  e.currentTarget.querySelector('.underline').style.width = isLinkActive(link) ? '100%' : '0%';
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.type);
                }}
                className="nav-link"
              >
                {link.name}
                <span 
                  className="underline" 
                  style={{
                    ...styles.linkUnderline,
                    width: isLinkActive(link) ? '100%' : '0%',
                  }}
                ></span>
              </a>
            ))}
            <button 
              style={styles.cta}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.background = '#333333';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = styles.cta.boxShadow;
                e.currentTarget.style.background = styles.cta.background;
              }}
              onClick={handleWhatsappClick}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            style={styles.mobileMenuBtn}
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{
              ...styles.mobileMenuBtnSpan,
              transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none',
            }}></span>
            <span style={{
              ...styles.mobileMenuBtnSpan,
              opacity: isMobileMenuOpen ? 0 : 1,
            }}></span>
            <span style={{
              ...styles.mobileMenuBtnSpan,
              transform: isMobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
            }}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            style={styles.mobileMenuOverlay}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div style={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                ...styles.mobileLink,
                ...(isLinkActive(link) ? { 
                  color: '#000000', 
                  background: 'rgba(0, 0, 0, 0.05)',
                  fontWeight: 700 
                } : {}),
              }}
              onMouseEnter={(e) => {
                if (!isLinkActive(link)) {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.03)';
                  e.currentTarget.style.color = '#000000';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLinkActive(link)) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = styles.mobileLink.color;
                }
              }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href, link.type);
                setIsMobileMenuOpen(false);
              }}
            >
              {link.type === 'home' && (
                <svg style={styles.mobileLinkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              )}
              {link.type === 'page' && (
                <svg style={styles.mobileLinkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                </svg>
              )}
              {link.type === 'section' && (
                <svg style={styles.mobileLinkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              )}
              {link.name}
            </a>
          ))}
          <button 
            style={styles.mobileCta}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#333333';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#000000';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onClick={() => {
              handleWhatsappClick();
              setIsMobileMenuOpen(false);
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Get Started Free
          </button>
        </div>
      </nav>
      
      {/* Add spacing for fixed navbar */}
      <div style={{ height: '80px' }} />
    </>
  );
};

export default Navbar;
