import React from 'react';

const styles = {
  services: {
    padding: '100px 5%',
    background: '#f8fafc',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto 60px',
  },
  sectionBadge: {
    display: 'inline-block',
    background: 'rgba(37, 99, 235, 0.1)',
    color: '#2563eb',
    padding: '8px 20px',
    borderRadius: '50px',
    fontSize: '0.875rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#060636ff',
    marginBottom: '1rem',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #2563eb, #3e0bf5ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  sectionDescription: {
    fontSize: '1.125rem',
    color: '#64748b',
    lineHeight: 1.7,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: '#1a1a2e',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    border: '1px solid rgba(26, 6, 83, 0.05)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  },
  cardHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  },
  cardBefore: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #2563eb, #f59e0b)',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease',
  },
  icon: {
    width: '70px',
    height: '70px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    transition: 'transform 0.3s ease',
  },
  iconHover: {
    transform: 'scale(1.1)',
  },
  blueIcon: {
    background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(37, 99, 235, 0.2))',
    color: '#2563eb',
  },
  yellowIcon: {
    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.2))',
    color: '#f59e0b',
  },
  purpleIcon: {
    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.2))',
    color: '#8b5cf6',
  },
  greenIcon: {
    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.2))',
    color: '#10b981',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#1a1a2e',
    marginBottom: '0.75rem',
  },
  description: {
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
  },
  features: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '0.875rem',
    color: '#475569',
    marginBottom: '0.5rem',
  },
  featureIcon: {
    color: '#10b981',
    flexShrink: 0,
  },
};

const services = [
  {
    icon: 'code',
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies that convert visitors into customers.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
    color: 'blue',
  },
  {
    icon: 'palette',
    title: 'Graphic Design',
    description: 'Eye-catching visual designs that communicate your brand message and captivate your audience.',
    features: ['Logo Design', 'Brand Identity', 'Marketing Materials'],
    color: 'yellow',
  },
  {
    icon: 'globe',
    title: 'Digital Solutions',
    description: 'Comprehensive digital services to establish and grow your online presence effectively.',
    features: ['Social Media', 'Email Marketing', 'Analytics'],
    color: 'purple',
  },
  {
    icon: 'graduation',
    title: 'Tech Training',
    description: 'Industry-relevant courses to equip you with skills for the digital economy.',
    features: ['Hands-on Projects', 'Certification', 'Job Support'],
    color: 'green',
  },
];

const iconPaths = {
  code: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
  palette: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.68-.07 2.37-.2.67-.12 1.32-.31 1.93-.55.3-.12.59-.25.87-.4.28-.15.55-.32.81-.5.26-.18.51-.38.75-.59.24-.21.47-.44.69-.68M12 2v10l4 4',
  globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
  graduation: 'M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5',
};

const Services = () => {
  return (
    <section id="services" style={styles.services}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionBadge}>What We Offer</span>
          <h2 style={styles.sectionTitle}>
            Our <span style={styles.gradientText}>Services</span>
          </h2>
          <p style={styles.sectionDescription}>
            From stunning websites to comprehensive tech training, we provide
            end-to-end digital solutions for businesses and individuals.
          </p>
        </div>

        <div style={styles.grid}>
          {services.map((service) => (
            <div 
              key={service.title} 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
                e.currentTarget.querySelector('.service-icon').style.transform = styles.iconHover.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
                e.currentTarget.querySelector('.service-icon').style.transform = 'none';
              }}
            >
              <div className="service-icon" style={{...styles.icon, ...styles[`${service.color}Icon`]}}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={iconPaths[service.icon]} />
                </svg>
              </div>
              <h3 style={styles.title}>{service.title}</h3>
              <p style={styles.description}>{service.description}</p>
              <ul style={styles.features}>
                {service.features.map((feature) => (
                  <li key={feature} style={styles.featureItem}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;