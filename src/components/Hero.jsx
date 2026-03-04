import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsappClick = () => {
    const message = "Hello Tana Digital Agency! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/254758284534?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Transforming Ideas Into Reality
          </div>

          <h1 className="hero-title">
            Building <span className="gradient-text">Digital Solutions</span> That
            Drive Success
          </h1>

          <p className="hero-description">
            We craft stunning websites, powerful brands, and deliver cutting-edge
            technology training to empower businesses and individuals in the
            digital age.
          </p>

          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => handleNavClick('#services')}
            >
              Get a Website
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => handleNavClick('#courses')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              Explore Courses
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3 className="stat-number">30+</h3>
              <p className="stat-label">Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">20+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Students Trained</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img
              src="https://github.com/BOBWANDATI/images/blob/main/micheal-ogungbe-SHgueDAHJFk-unsplash__1_-removebg-preview.png?raw=true"
              alt="Digital workspace"
              className="hero-image"
              loading="lazy"
            />
            <div className="hero-card hero-card-top">
              <div className="hero-card-icon hero-card-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="hero-card-text">
                <h4>Web Development</h4>
                <p>Modern & Responsive</p>
              </div>
            </div>
            <div className="hero-card hero-card-bottom">
              <div className="hero-card-icon hero-card-icon-yellow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className="hero-card-text">
                <h4>Tech Training</h4>
                <p>100+ Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => handleNavClick('#services')}>
        <span className="scroll-text">Scroll Down</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;