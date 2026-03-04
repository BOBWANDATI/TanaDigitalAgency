import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  // Updated projects with actual working live URLs
  const projects = [
    {
      title: 'AmaniLink Hub',
      category: 'Web System',
      image: 'https://github.com/BOBWANDATI/images/blob/main/AMANI.png?raw=true',
      description: 'Modern online system for reporting incidents in realtime with map showing in real time.',
      githubUrl: 'https://github.com/BOBWANDATI/AmaniLink',
      liveUrl: 'https://amani-link.vercel.app', // Update with actual deployed URL
      hasLiveSite: true,
    },
    {
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      image: 'https://github.com/BOBWANDATI/images/blob/main/GRAPHICS%20DESIGN%20BOOTCAMP%20(7).png?raw=true',
      description: 'Complete Poster for a radio conversation event.',
      githubUrl: 'https://github.com/BOBWANDATI/GRAPHICS-DESIGN-BOOTCAMP',
      liveUrl: null, // No live website for design work
      hasLiveSite: false,
    },
    {
      title: 'Boda Trust Website',
      category: 'Web Development',
      image: 'https://github.com/BOBWANDATI/images/blob/main/BODA.png?raw=true',
      description: 'An online platform for booking rides and emergency services.',
      githubUrl: 'https://github.com/BOBWANDATI/BODATRUST',
      liveUrl: 'https://boda-trust.vercel.app', // Update with actual deployed URL
      hasLiveSite: true,
    },
    {
      title: 'Sheria Link',
      category: 'Website Development',
      image: 'https://github.com/BOBWANDATI/images/blob/main/KENYA.png?raw=true',
      description: 'Legal consultation platform connecting users with lawyers.',
      githubUrl: 'https://github.com/BOBWANDATI/sheria_link',
      liveUrl: 'https://sheria-link.vercel.app', // Update with actual deployed URL
      hasLiveSite: true,
    },
    {
      title: 'Mobile App UI',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      description: 'Intuitive mobile interface for a fintech app.',
      githubUrl: 'https://github.com/BOBWANDATI',
      liveUrl: null, // No live website for UI design
      hasLiveSite: false,
    },
    {
      title: 'Eco Action Website',
      category: 'Web Development',
      image: 'https://github.com/BOBWANDATI/images/blob/main/ECO.png?raw=true',
      description: 'Impactful website for climate change awareness and real-time incident reporting.',
      githubUrl: 'https://github.com/BOBWANDATI/EcoAction',
      liveUrl: 'https://eco-action.vercel.app', // Update with actual deployed URL
      hasLiveSite: true,
    },
  ];

  const handleViewWebsite = (e, liveUrl) => {
    e.stopPropagation(); // Prevent card click
    if (liveUrl) {
      window.open(liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleViewCode = (e, githubUrl) => {
    e.stopPropagation(); // Prevent card click
    if (githubUrl) {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCardClick = (project) => {
    // If project has live website, open that, otherwise open GitHub
    if (project.hasLiveSite && project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    } else if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleKeyPress = (e, project) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(project);
    }
  };

  const handleWhatsappInquiry = () => {
    const message = "Hello Tana Digital Agency! I'm interested in your services. I'd like to see more projects like the ones in your portfolio.";
    const whatsappUrl = `https://wa.me/254758284534?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Function to validate URL before opening
  const isValidUrl = (url) => {
    if (!url) return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-description">
            Explore some of our best work that showcases our creativity and
            technical expertise.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => {
            const hasLiveUrl = project.hasLiveSite && isValidUrl(project.liveUrl);
            const hasGithubUrl = isValidUrl(project.githubUrl);
            
            return (
              <div 
                key={project.title} 
                className={`portfolio-card ${hoveredCard === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(project)}
                onKeyDown={(e) => handleKeyPress(e, project)}
                tabIndex="0"
                role="button"
                aria-label={`View ${project.title} project`}
              >
                <div className="portfolio-image">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`portfolio-img ${hoveredCard === index ? 'hovered' : ''}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image';
                    }}
                  />
                  <div className={`portfolio-overlay ${hoveredCard === index ? 'visible' : ''}`}>
                    {hasLiveUrl && (
                      <button 
                        className="portfolio-overlay-btn website-btn"
                        onClick={(e) => handleViewWebsite(e, project.liveUrl)}
                        aria-label={`Visit ${project.title} website`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        Visit Website
                      </button>
                    )}
                    {hasGithubUrl && (
                      <button 
                        className="portfolio-overlay-btn github-btn"
                        onClick={(e) => handleViewCode(e, project.githubUrl)}
                        aria-label={`View code for ${project.title}`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        View Code
                      </button>
                    )}
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="portfolio-category">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  
                  <div className="portfolio-links">
                    {hasLiveUrl && (
                      <a
                        href={project.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        onMouseEnter={() => setHoveredLink(index)}
                        onMouseLeave={() => setHoveredLink(null)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`portfolio-link website-link ${hoveredLink === index ? 'hovered' : ''}`}
                        aria-label={`Visit ${project.title} website`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        Visit Website
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={`portfolio-link-arrow ${hoveredLink === index ? 'hovered' : ''}`}
                        >
                          <path d="M6 3L11 8L6 13" />
                        </svg>
                      </a>
                    )}
                    
                    {hasGithubUrl && (
                      <a
                        href={project.githubUrl}
                        onClick={(e) => e.stopPropagation()}
                        onMouseEnter={() => setHoveredLink(index + 100)}
                        onMouseLeave={() => setHoveredLink(null)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`portfolio-link github-link ${hoveredLink === index + 100 ? 'hovered' : ''}`}
                        aria-label={`View source code of ${project.title}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        View Code
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={`portfolio-link-arrow ${hoveredLink === index + 100 ? 'hovered' : ''}`}
                        >
                          <path d="M6 3L11 8L6 13" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="view-more">
          <button 
            className="btn btn-primary"
            onClick={handleWhatsappInquiry}
            aria-label="Contact us for more projects"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Contact Us for More Projects
          </button>
        </div>

        <div className="portfolio-note">
          <p className="text-center text-secondary">
            <span className="note-icon">🌐</span> Click on any project card to visit the live website. 
            <span className="note-icon">💻</span> View code links are available for developers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;