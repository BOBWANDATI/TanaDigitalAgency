import React, { useState } from 'react';

const styles = {
  portfolio: {
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
    background: 'rgba(231, 190, 8, 0.1)',
    color: '#2607d3ff',
    padding: '8px 20px',
    borderRadius: '50px',
    fontSize: '0.875rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#1a1a2e',
    marginBottom: '1rem',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #490bf5ff, #490bf5ff)',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
  },
  cardHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  },
  image: {
    position: 'relative',
    height: '250px',
    overflow: 'hidden',
  },
  imageImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(26, 26, 46, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  overlayHover: {
    opacity: 1,
  },
  overlayIcon: {
    width: '48px',
    height: '48px',
    background: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translateY(20px)',
    transition: 'transform 0.3s ease',
  },
  overlayIconHover: {
    transform: 'translateY(0)',
  },
  content: {
    padding: '1.5rem',
  },
  category: {
    display: 'inline-block',
    background: 'rgba(37, 99, 235, 0.1)',
    color: '#2563eb',
    padding: '4px 12px',
    borderRadius: '50px',
    fontSize: '0.75rem',
    fontWeight: 600,
    marginBottom: '0.75rem',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#1a1a2e',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: 1.6,
    marginBottom: '0.75rem',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#490bf5ff',
    fontWeight: 600,
    fontSize: '0.9rem',
    textDecoration: 'none',
    gap: '4px',
    transition: 'gap 0.2s ease',
  },
  linkHover: {
    gap: '8px',
  },
};

const projects = [
  {
    title: 'AmaniLink Hub',
    category: 'Web System',
    image: 'https://github.com/BOBWANDATI/images/blob/main/AMANI.png?raw=true',
    description: 'Modern online system for reporting incidents in realtime with map showing in real time.',
    link: 'https://github.com/BOBWANDATI/AmaniLink', // Replace with actual link
  },
  {
    title: 'Brand Identity Design',
    category: 'Graphic Design',
    image: 'https://github.com/BOBWANDATI/images/blob/main/GRAPHICS%20DESIGN%20BOOTCAMP%20(7).png?raw=true',
    description: 'Complete Poster for a radio conversation event.',
    link: 'https://github.com/BOBWANDATI/GRAPHICS-DESIGN-BOOTCAMP', // Replace with actual link
  },
  {
    title: 'Boda Trust Website',
    category: 'Web Development',
    image: 'https://github.com/BOBWANDATI/images/blob/main/BODA.png?raw=true',
    description: 'An online platform for booking rides and emergency services.',
    link: 'https://github.com/BOBWANDATI/BODATRUST', // Replace with actual link
  },
  {
    title: 'Sheria Link',
    category: 'Website Development',
    image: 'https://github.com/BOBWANDATI/images/blob/main/KENYA.png?raw=true',
    description: 'Legal consultation platform connecting users with lawyers.',
    link: 'https://github.com/BOBWANDATI/sheria_link', // Replace with actual link
  },
  {
    title: 'Mobile App UI',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    description: 'Intuitive mobile interface for a fintech app.',
    link: 'https://github.com/BOBWANDATI', // Replace with actual UI/UX portfolio link
  },
  {
    title: 'Eco Action Website',
    category: 'Web Development',
    image: 'https://github.com/BOBWANDATI/images/blob/main/ECO.png?raw=true',
    description: 'Impactful website for climate change awareness and real-time incident reporting.',
    link: 'https://github.com/BOBWANDATI/EcoAction', // Replace with actual link
  },
];

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleCardClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleKeyPress = (e, link) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(link);
    }
  };

  return (
    <section id="portfolio" style={styles.portfolio}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionBadge}>Our Work</span>
          <h2 style={styles.sectionTitle}>
            Featured <span style={styles.gradientText}>Projects</span>
          </h2>
          <p style={styles.sectionDescription}>
            Explore some of our best work that showcases our creativity and
            technical expertise.
          </p>
        </div>

        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              style={{
                ...styles.card,
                transform: hoveredCard === index ? styles.cardHover.transform : 'none',
                boxShadow: hoveredCard === index ? styles.cardHover.boxShadow : styles.card.boxShadow,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(project.link)}
              onKeyDown={(e) => handleKeyPress(e, project.link)}
              tabIndex="0"
              role="button"
              aria-label={`View ${project.title} project`}
            >
              <div style={styles.image}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{
                    ...styles.imageImg,
                    transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                  }} 
                />
                <div 
                  style={{
                    ...styles.overlay,
                    opacity: hoveredCard === index ? styles.overlayHover.opacity : 0,
                  }}
                >
                  <div 
                    style={{
                      ...styles.overlayIcon,
                      transform: hoveredCard === index ? styles.overlayIconHover.transform : 'translateY(20px)',
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={styles.content}>
                <span style={styles.category}>{project.category}</span>
                <h3 style={styles.title}>{project.title}</h3>
                <p style={styles.description}>{project.description}</p>
                <a
                  href={project.link}
                  onClick={(e) => e.stopPropagation()} // Prevent card click when clicking link
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...styles.link,
                    gap: hoveredLink === index ? styles.linkHover.gap : styles.link.gap,
                  }}
                >
                  View Project
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      transition: 'transform 0.2s ease',
                      transform: hoveredLink === index ? 'translateX(4px)' : 'none',
                    }}
                  >
                    <path d="M6 3L11 8L6 13" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;