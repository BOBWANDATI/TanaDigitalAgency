import React from 'react';
import './About.css';

const About = () => {
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

  const values = [
    {
      icon: 'target',
      title: 'Innovation First',
      description: 'Cutting-edge solutions',
      color: 'blue',
    },
    {
      icon: 'users',
      title: 'Youth Empowerment',
      description: 'Building future leaders',
      color: 'yellow',
    },
    {
      icon: 'award',
      title: 'Quality Focused',
      description: 'Excellence in delivery',
      color: 'green',
    },
    {
      icon: 'heart',
      title: 'Client Success',
      description: 'Your growth, our mission',
      color: 'purple',
    },
  ];

  const iconPaths = {
    target: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 12h.01',
    users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    award: 'M12 15l-2 5 2-1 2 1-2-5zM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z',
    heart: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-visual">
          <div className="about-image-main">
            <img
              src="https://github.com/BOBWANDATI/images/blob/main/microsoft-edge-zIT-MIyg0Uo-unsplash.jpg?raw=true"
              alt="Team collaboration"
              className="about-image-main-img"
              loading="lazy"
            />
          </div>
          <div className="about-image-secondary">
            <img
              src="https://github.com/BOBWANDATI/images/blob/main/samsung-memory-Yf5YaNr3Ujg-unsplash.jpg?raw=true"
              alt="Training session"
              className="about-image-secondary-img"
              loading="lazy"
            />
          </div>
          <div className="about-experience-badge">
            <div className="about-experience-number">5+</div>
            <div className="about-experience-text">Years Experience</div>
          </div>
        </div>

        <div className="about-content">
          <span className="about-badge">About Us</span>
          <h2 className="about-title">
            Empowering Businesses & <span className="gradient-text">Youth</span>{' '}
            Through Technology
          </h2>
          <p className="about-description">
            We are a passionate team of developers, designers, and educators
            dedicated to transforming businesses and empowering the next
            generation with digital skills. Our mission is to bridge the
            technology gap and create opportunities through innovation and
            quality training.
          </p>

          <div className="about-values">
            {values.map((value) => (
              <div key={value.title} className="about-value-item">
                <div className={`about-value-icon about-value-icon-${value.color}`}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d={iconPaths[value.icon]} />
                  </svg>
                </div>
                <div className="about-value-text">
                  <h4 className="about-value-title">{value.title}</h4>
                  <p className="about-value-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-cta">
            <button 
              className="btn btn-primary"
              onClick={() => handleNavClick('#contact')}
            >
              Work With Us
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => handleNavClick('#portfolio')}
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;