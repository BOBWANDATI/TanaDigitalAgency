import React from 'react';

const styles = {
  about: {
    padding: '100px 5%',
    background: 'white',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
  },
  visual: {
    position: 'relative',
  },
  imageMain: {
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)',
  },
  imageMainImg: {
    width: '100%',
    height: '450px',
    objectFit: 'cover',
  },
  imageSecondary: {
    position: 'absolute',
    bottom: '-30px',
    right: '-30px',
    width: '200px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    border: '4px solid white',
  },
  imageSecondaryImg: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  experienceBadge: {
    position: 'absolute',
    top: '30px',
    left: '-20px',
    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    color: 'white',
    padding: '20px 24px',
    borderRadius: '16px',
    boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)',
    textAlign: 'center',
  },
  experienceNumber: {
    fontSize: '2.5rem',
    fontWeight: 800,
    lineHeight: 1,
  },
  experienceText: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    opacity: 0.9,
  },
  content: {
    paddingLeft: '2rem',
  },
  aboutBadge: {
    display: 'inline-block',
    background: '#f59e0b)',
    color: '#3608ddff',
    padding: '8px 20px',
    borderRadius: '50px',
    fontSize: '2.5rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  aboutTitle: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#1a1a2e',
    marginBottom: '1.5rem',
    lineHeight: 1.2,
  },
  gradientText: {
    background: 'linear-gradient(135deg, #1c07dfff, #1c07dfff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  aboutDescription: {
    fontSize: '1.1rem',
    color: '#64748b',
    lineHeight: 1.8,
    marginBottom: '2rem',
  },
  values: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  valueItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  },
  valueIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  blueIcon: {
    background: 'rgba(37, 99, 235, 0.1)',
    color: '#2563eb',
  },
  yellowIcon: {
    background: 'rgba(245, 158, 11, 0.1)',
    color: '#f59e0b',
  },
  greenIcon: {
    background: 'rgba(16, 185, 129, 0.1)',
    color: '#10b981',
  },
  purpleIcon: {
    background: 'rgba(139, 92, 246, 0.1)',
    color: '#8b5cf6',
  },
  valueText: {
    display: 'flex',
    flexDirection: 'column',
  },
  valueTextH4: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#1a1a2e',
    margin: '0 0 4px 0',
  },
  valueTextP: {
    fontSize: '0.875rem',
    color: '#64748b',
    margin: 0,
  },
  cta: {
    display: 'flex',
    gap: '1rem',
  },
  btnPrimary: {
    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    color: 'white',
    padding: '14px 28px',
    borderRadius: '10px',
    fontWeight: 600,
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
  },
  btnOutline: {
    background: 'transparent',
    color: '#1a1a2e',
    padding: '14px 28px',
    borderRadius: '10px',
    fontWeight: 600,
    fontSize: '1rem',
    border: '2px solid #e2e8f0',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
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

const About = () => {
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" style={styles.about}>
      <div style={styles.container}>
        <div style={styles.visual}>
          <div style={styles.imageMain}>
            <img
              src="https://github.com/BOBWANDATI/images/blob/main/microsoft-edge-zIT-MIyg0Uo-unsplash.jpg?raw=true"
              alt="Team collaboration"
              style={styles.imageMainImg}
            />
          </div>
          <div style={styles.imageSecondary}>
            <img
              src="https://github.com/BOBWANDATI/images/blob/main/samsung-memory-Yf5YaNr3Ujg-unsplash.jpg?raw=true"
              alt="Training session"
              style={styles.imageSecondaryImg}
            />
          </div>
          <div style={styles.experienceBadge}>
            <div style={styles.experienceNumber}>5+</div>
            <div style={styles.experienceText}>Years Experience</div>
          </div>
        </div>

        <div style={styles.content}>
          <span style={styles.aboutBadge}>About Us</span>
          <h2 style={styles.aboutTitle}>
            Empowering Businesses & <span style={styles.gradientText}>Youth</span>{' '}
            Through Technology
          </h2>
          <p style={styles.aboutDescription}>
            We are a passionate team of developers, designers, and educators
            dedicated to transforming businesses and empowering the next
            generation with digital skills. Our mission is to bridge the
            technology gap and create opportunities through innovation and
            quality training.
          </p>

          <div style={styles.values}>
            {values.map((value) => (
              <div key={value.title} style={styles.valueItem}>
                <div style={{...styles.valueIcon, ...styles[`${value.color}Icon`]}}>
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
                <div style={styles.valueText}>
                  <h4 style={styles.valueTextH4}>{value.title}</h4>
                  <p style={styles.valueTextP}>{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.cta}>
            <button 
              style={styles.btnPrimary}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(37, 99, 235, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.3)';
              }}
              onClick={() => handleNavClick('#contact')}
            >
              Work With Us
            </button>
            <button 
              style={styles.btnOutline}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2563eb';
                e.currentTarget.style.color = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.color = '#1a1a2e';
              }}
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