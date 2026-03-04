import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [logoLoaded, setLogoLoaded] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerBtnRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#home', type: 'home', icon: '🏠' },
    { name: 'Services', href: '#services', type: 'section', icon: '⚙️' },
    { name: 'Courses', href: '#courses', type: 'section', icon: '📚' },
    { name: 'Portfolio', href: '#portfolio', type: 'section', icon: '💼' },
    { name: 'About Us', href: '#about', type: 'section', icon: '👥' },
    { name: 'I want a Website', href: '#web-design', type: 'page', icon: '🎨' },
    { name: 'Contact', href: '#contact', type: 'section', icon: '📞' },
  ];

  const logoUrl = "https://github.com/BOBWANDATI/images/blob/main/ChatGPT%20Image%20Feb%2026,%202026,%2009_46_00%20AM.png?raw=true";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      if (currentView === 'home') {
        const sections = navLinks
          .filter(link => link.type === 'section')
          .map(link => ({
            id: link.href.substring(1),
            element: document.getElementById(link.href.substring(1))
          }))
          .filter(section => section.element);
        
        let current = 'home';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
          if (section.element) {
            const { top, bottom } = section.element.getBoundingClientRect();
            const elementTop = top + window.scrollY;
            const elementBottom = bottom + window.scrollY;
            
            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              current = section.id;
            }
          }
        });
        
        setActiveLink(current);
      }
    };

    const hash = window.location.hash.substring(1);
    if (hash === 'web-design') {
      setActiveLink('web-design');
    }

    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerBtnRef.current &&
        !hamburgerBtnRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [currentView, navLinks]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href, type = 'section') => {
    setIsMobileMenuOpen(false);
    const sectionId = href.substring(1);
    
    if (type === 'page' && href === '#web-design') {
      setActiveLink('web-design');
      if (onNavigate) {
        onNavigate('web-design');
      }
    } else if (type === 'home') {
      setActiveLink('home');
      if (onNavigate) {
        onNavigate('home');
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (type === 'section') {
      setActiveLink(sectionId);
      
      if (currentView === 'web-design') {
        if (onNavigate) {
          onNavigate('home', sectionId);
        }
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    handleNavClick('#home', 'home');
  };

  const handleWhatsappClick = () => {
    const message = "Hello Tana Digital Agency! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/254758284534?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsMobileMenuOpen(false);
  };

  const isLinkActive = (link) => {
    if (link.type === 'page' && link.href === '#web-design') {
      return currentView === 'web-design';
    }
    return activeLink === link.href.substring(1);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="navbar-container">
          <button 
            className="navbar-logo"
            onClick={handleLogoClick}
            aria-label="Go to Home"
          >
            <div className="logo-icon">
              <div className="logo-image-container">
                {!logoLoaded && <div className="logo-loading"></div>}
                <img
                  src={logoUrl}
                  alt="TANA DIGITAL Logo"
                  className="logo-image"
                  style={{ opacity: logoLoaded ? 1 : 0 }}
                  onLoad={() => setLogoLoaded(true)}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    setLogoLoaded(true);
                  }}
                  loading="lazy"
                />
                <div className="logo-fallback" style={{ display: logoLoaded ? 'none' : 'flex' }}>
                  TDA
                </div>
              </div>
            </div>
            <div className="logo-text-container">
              <span className="logo-text">Tana Digital</span>
              <span className="logo-subtext">Agency</span>
            </div>
          </button>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className={`navbar-link ${isLinkActive(link) ? 'active' : ''}`}
                onClick={() => handleNavClick(link.href, link.type)}
              >
                {link.name}
                <span className="navbar-link-underline"></span>
              </button>
            ))}
            <button 
              className="navbar-cta"
              onClick={handleWhatsappClick}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Chat
            </button>
          </div>

          <button
            ref={hamburgerBtnRef}
            className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div 
          ref={mobileMenuRef}
          className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        >
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <div className="mobile-logo-icon">
                <img
                  src={logoUrl}
                  alt="TANA DIGITAL Logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="mobile-logo-fallback">TDA</div>
              </div>
              <div className="mobile-logo-text">
                <span>Tana Digital</span>
                <small>Agency</small>
              </div>
            </div>
            <button 
              className="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="mobile-links">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className={`mobile-link ${isLinkActive(link) ? 'active' : ''}`}
                onClick={() => handleNavClick(link.href, link.type)}
              >
                <span className="mobile-link-icon">{link.icon}</span>
                <span className="mobile-link-text">{link.name}</span>
                {isLinkActive(link) && <span className="mobile-link-active"></span>}
              </button>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <button 
              className="mobile-cta"
              onClick={handleWhatsappClick}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </button>
            
            <div className="mobile-contact-info">
              <p>Ready to transform your digital presence?</p>
              <a href="tel:+254758284534" className="mobile-phone">
                📞 +254 758 284 534
              </a>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div 
          className="menu-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;