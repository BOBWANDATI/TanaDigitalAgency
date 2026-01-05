import React, { useState, useEffect } from 'react';

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [currentView, setCurrentView] = useState('home');

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check current view based on URL
    const hash = window.location.hash.substring(1);
    if (hash === 'web-design') {
      setCurrentView('web-design');
    } else {
      setCurrentView('home');
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href, type = 'section') => {
    setIsMobileMenuOpen(false);
    
    if (type === 'page' && href === '#web-design') {
      // Navigate to Web Design page
      if (onNavigate) {
        onNavigate('web-design');
      } else {
        window.location.hash = 'web-design';
        window.scrollTo(0, 0);
      }
      setCurrentView('web-design');
    } else if (type === 'home') {
      // Navigate to home page
      if (onNavigate) {
        onNavigate('home');
      } else {
        window.location.hash = '';
        window.scrollTo(0, 0);
      }
      setCurrentView('home');
    } else if (type === 'section') {
      // Scroll to section on home page
      if (currentView === 'web-design') {
        // If we're on web design page, go to home page first
        if (onNavigate) {
          onNavigate('home', href.substring(1));
        } else {
          window.location.hash = href;
        }
      } else {
        // We're already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setCurrentView('home');
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    handleNavClick('#home', 'home');
  };

  const handleWhatsappClick = () => {
    const message = "Hello Tana Digital Agency! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/254712345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
    },
    logoText: {
      fontWeight: 800,
      fontSize: '1.5rem',
      color: '#5207b4ff',
      letterSpacing: '-0.5px',
      background: 'linear-gradient(135deg, #000000, #333333)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontFamily: "cyrillic bodoni condesed",
    },
    logoSubtext: {
      color: '#0e12f1ff',
      fontWeight: 500,
      fontSize: '0.88rem',
      display: 'block',
      marginTop: '3px',
      marginLeft: '23px',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      fontFamily: "slopes",
    },
    links: {
      display: 'flex',
      alignItems: 'center',
      gap: '2.5rem',
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    link: {
      color: '#0b25b6ff',
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      position: 'relative',
      padding: '8px 0',
      fontFamily: "cyrillic bodoni condesed",
      cursor: 'pointer',
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
      padding: '12px 28px',
      borderRadius: '8px',
      fontWeight: 600,
      fontSize: '0.95rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      letterSpacing: '0.5px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    },
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
      '@media (max-width: 768px)': {
        display: 'flex',
      },
    },
    mobileMenuBtnSpan: {
      display: 'block',
      width: '26px',
      height: '2.5px',
      background: '#000000',
      borderRadius: '2px',
      transition: 'all 0.3s ease',
    },
    mobileMenu: {
      display: 'none',
      flexDirection: 'column',
      gap: '0',
      background: 'white',
      position: 'absolute',
      top: '80px',
      left: '5%',
      right: '5%',
      borderRadius: '12px',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
      overflow: 'hidden',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      '@media (max-width: 768px)': {
        ...(isMobileMenuOpen && {
          display: 'flex',
        }),
      },
    },
    mobileLink: {
      color: '#475569',
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: '1rem',
      padding: '18px 24px',
      transition: 'all 0.3s ease',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      cursor: 'pointer',
    },
    mobileLinkHover: {
      background: 'rgba(0, 0, 0, 0.03)',
      color: '#000000',
      paddingLeft: '30px',
    },
    mobileCta: {
      background: '#000000',
      color: 'white',
      padding: '18px 24px',
      fontWeight: 600,
      fontSize: '1rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    },
  };

  // Add CSS animation for loading
  const loadingStyle = `
    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `;

  // Check if link is active
  const isLinkActive = (link) => {
    if (link.type === 'page' && link.href === '#web-design') {
      return currentView === 'web-design';
    }
    return false;
  };

  return (
    <>
      <style>{loadingStyle}</style>
      <nav style={styles.navbar}>
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
            <div style={styles.logoTextContainer}>
              <span style={styles.logoText}>Tana Digital</span>
              <span style={styles.logoSubtext}>Agency</span>
            </div>
          </div>

          <div style={styles.links}>
            {navLinks.map((link) => (
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

          <button
            style={styles.mobileMenuBtn}
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

        {isMobileMenuOpen && (
          <div style={styles.mobileMenu}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  ...styles.mobileLink,
                  ...(isLinkActive(link) ? { color: '#000000', background: 'rgba(0, 0, 0, 0.05)' } : {}),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = styles.mobileLinkHover.background;
                  e.currentTarget.style.color = styles.mobileLinkHover.color;
                  e.currentTarget.style.paddingLeft = styles.mobileLinkHover.paddingLeft;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isLinkActive(link) ? 'rgba(0, 0, 0, 0.05)' : 'transparent';
                  e.currentTarget.style.color = isLinkActive(link) ? '#000000' : styles.mobileLink.color;
                  e.currentTarget.style.paddingLeft = styles.mobileLink.padding;
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.type);
                  setIsMobileMenuOpen(false);
                }}
              >
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
              Get Started Free
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;