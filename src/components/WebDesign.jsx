import React, { useState, useEffect } from 'react';
import './WebDesign.css';

const WebDesign = () => {
  const [activePackage, setActivePackage] = useState('silver');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const pricingPackages = [
    {
      id: 'bronze',
      title: 'Bronze Package',
      subtitle: 'One Page Website',
      price: 'Ksh 10,000/=',
      duration: 'Ready within 2 days',
      popular: false,
      features: [
        'One Page Website',
        'Simple design',
        'Social Media Integration',
        'One Free Revision'
      ],
      color: 'linear-gradient(135deg, #CD7F32, #B66D1F)',
      badge: 'Perfect for Startups'
    },
    {
      id: 'silver',
      title: 'Silver Package',
      subtitle: 'Up to 5 Pages Website',
      price: 'Ksh 15,000/=',
      duration: 'Ready within 4 days',
      popular: true,
      features: [
        'Upto 5 Web pages',
        'Simple Design',
        'Social Media Integration',
        'Whatsapp Integration',
        'Free 5 Page Company Profile',
        '2 Free Revisions'
      ],
      color: 'linear-gradient(135deg, #C0C0C0, #A8A8A8)',
      badge: 'MOST POPULAR'
    },
    {
      id: 'gold',
      title: 'Gold Package',
      subtitle: 'Up to 15 Pages Website',
      price: 'Ksh 30,000/=',
      duration: 'Ready within 7 days',
      popular: false,
      features: [
        'Up to 15 Web pages',
        'Elegant & Stylish Design',
        'Social Whatsapp & Live Chat',
        'Blog Set Up',
        'Google Maps Integration',
        'Basic SEO',
        'Google Analytics',
        'Ecommerce Functionality',
        'Free 10 Page Company Profile',
        '3 Free Revisions'
      ],
      color: 'linear-gradient(135deg, #FFD700, #E6C300)',
      badge: 'Best Value'
    },
    {
      id: 'platinum',
      title: 'Platinum Package',
      subtitle: 'Upto 30 Pages Website',
      price: 'Ksh 50,000/=',
      duration: 'Ready within 14 days',
      popular: false,
      features: [
        'Upto 25 Web Pages',
        'Premium Design',
        'Social Media, Whatsapp & Live Chat',
        'Web Forms',
        'Blog & Events Module Setup',
        'Accept Donations & Fundraising (Optional)',
        'Google Analytics',
        'Standard SEO',
        'Ecommerce Functionality',
        'Google My Business Profile Set Up (Optional)',
        'Multi Language Support',
        'Content Gathering & Writing',
        'Mpesa Payment Integration (Optional)',
        'E Newsletters Setup',
        '15 Page Company Profile Design',
        'Website Loader QR Code'
      ],
      color: 'linear-gradient(135deg, #E5E4E2, #D4D3D0)',
      badge: 'Enterprise Solution'
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Bob Wandati Portfolio',
      url: 'https://my-portfolio-bob.vercel.app/',
      category: 'Portfolio',
      image: 'https://raw.githubusercontent.com/BOBWANDATI/images/fa033799bf18ddf5f6d16710f265913340b706ca/Screenshot%202026-02-24%20202625.png',
      description: 'Personal portfolio website showcasing work and skills'
    },
    {
      id: 2,
      title: 'Kijiji Connect Website',
      url: 'https://kijiji-web.vercel.app/',
      category: 'Community Platform',
      image: 'https://raw.githubusercontent.com/BOBWANDATI/images/fa033799bf18ddf5f6d16710f265913340b706ca/Screenshot%202026-02-24%20201811.png',
      description: 'Connecting rural communities through digital platform'
    },
    {
      id: 3,
      title: 'Eco Action Website',
      url: 'https://eco-climate.vercel.app/',
      category: 'Climate Action',
      image: 'https://raw.githubusercontent.com/BOBWANDATI/images/fa033799bf18ddf5f6d16710f265913340b706ca/Screenshot%202026-02-24%20202814.png',
      description: 'Environmental awareness and climate action platform'
    },
    {
      id: 4,
      title: 'AmaniLink Hub',
      url: 'https://amanilinkhub.vercel.app/',
      category: 'Health & Wellness',
      image: 'https://raw.githubusercontent.com/BOBWANDATI/images/fa033799bf18ddf5f6d16710f265913340b706ca/Screenshot%202026-02-24%20202431.png',
      description: 'Mental health and wellness support platform'
    },
    {
      id: 5,
      title: 'Boda Trust',
      url: 'https://boda-trust-ho5j.vercel.app/',
      category: 'E-commerce',
      image: 'https://raw.githubusercontent.com/BOBWANDATI/images/fa033799bf18ddf5f6d16710f265913340b706ca/Screenshot%202026-02-24%20202231.png',
      description: 'E-commerce platform for boda boda services'
    },
    {
      id: 6,
      title: "Sheria Link",
      url: 'https://space-five-phi.vercel.app/',
      category: 'Legal Services',
      image: 'https://raw.githubusercontent.com/BOBWANDATI/images/fa033799bf18ddf5f6d16710f265913340b706ca/Screenshot%202026-02-24%20202055.png',
      description: 'Legal services and consultation platform'
    }
  ];

  const services = [
    { icon: '🎨', title: 'Website Design', desc: 'Creative & responsive designs' },
    { icon: '🔄', title: 'Website Redesign', desc: 'Modernize your existing site' },
    { icon: '⚡', title: 'Website Optimization', desc: 'Speed & performance boost' },
    { icon: '🔧', title: 'Website Maintenance', desc: 'Regular updates & support' },
    { icon: '🛡️', title: 'Web Security', desc: 'SSL & security implementation' },
    { icon: '📱', title: 'Web UI & UX Design', desc: 'User-centered interfaces' }
  ];

  const WHATSAPP_NUMBER = '+254758284534';
  const EMAIL_ADDRESS = 'bobwandati42@gmail.com';

  const handleWhatsappOrder = (packageName) => {
    const message = `Hello Tana Digital Agency! I'm interested in the ${packageName} package for website development.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGoogleFormOrder = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe2rFBjSeGaBcH_TlwH24GoYKpVHzsfuOLXI6bfNDocvdYASg/viewform?usp=header', '_blank');
  };

  const handleWhatsappInquiry = () => {
    const message = "Hello Tana Digital Agency! I'm interested in your web design services.";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallUs = () => {
    window.location.href = `tel:${WHATSAPP_NUMBER}`;
  };

  const handleEmailInquiry = () => {
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=Web%20Design%20Inquiry`;
  };

  const handleOrderSimilar = (projectTitle) => {
    const message = `Hello Tana Digital Agency! I'm interested in a website similar to ${projectTitle}.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleVisitWebsite = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const getFallbackImage = (category) => {
    const fallbacks = {
      'Portfolio': 'https://via.placeholder.com/600x400/2563eb/ffffff?text=Portfolio+Website',
      'Community Platform': 'https://via.placeholder.com/600x400/10b981/ffffff?text=Community+Platform',
      'Climate Action': 'https://via.placeholder.com/600x400/059669/ffffff?text=Climate+Action',
      'Health & Wellness': 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Health+%26+Wellness',
      'E-commerce': 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=E-commerce',
      'Legal Services': 'https://via.placeholder.com/600x400/7c3aed/ffffff?text=Legal+Services',
      'Security': 'https://via.placeholder.com/600x400/dc2626/ffffff?text=Security'
    };
    return fallbacks[category] || 'https://via.placeholder.com/600x400/2563eb/ffffff?text=Website+Project';
  };

  return (
    <div className="web-design-page">
      {/* Hero Section */}
      <section className="web-hero">
        <div className="container">
          <div className="web-hero-content">
            <h1 className="web-hero-title">
              Get a Website today &<br />
              <span className="gradient-text">Take your Business Online</span>
            </h1>
            <p className="web-hero-description">
              Whether you're a startup looking to establish your online presence or an established enterprise 
              seeking to enhance your digital footprint, we have the expertise to deliver exceptional website 
              design & development solutions tailored to your unique needs.
            </p>
            <div className="web-hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('web-pricing').scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Pricing →
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => document.getElementById('web-contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Consultation
              </button>
            </div>
          </div>
          <div className="web-hero-stats">
            <div className="stat-item">
              <h3 className="stat-number">200+</h3>
              <p className="stat-label">Websites Delivered</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">98%</h3>
              <p className="stat-label">Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="web-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Website Services Include</h2>
            <p className="section-description">Comprehensive web solutions to elevate your digital presence</p>
          </div>
          <div className="web-services-grid">
            {services.map((service, index) => (
              <div key={index} className="web-service-card">
                <div className="web-service-icon">{service.icon}</div>
                <h3 className="web-service-title">{service.title}</h3>
                <p className="web-service-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="web-pricing" id="web-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Pricing</h2>
            <p className="section-description">Flexible packages for SMEs & Corporates</p>
          </div>
          <div className="web-pricing-grid">
            {pricingPackages.map((pkg) => (
              <div key={pkg.id} className={`web-pricing-card ${pkg.popular ? 'popular' : ''}`}>
                <div className="package-badge" style={{ background: pkg.color }}>
                  {pkg.badge}
                </div>
                <div className="package-header">
                  <h3 className="package-title">{pkg.title}</h3>
                  <p className="package-subtitle">{pkg.subtitle}</p>
                  <div className="package-price">
                    <span className="price">{pkg.price}</span>
                    <span className="duration">{pkg.duration}</span>
                  </div>
                </div>
                <ul className="package-features">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-icon">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="order-buttons">
                  <button 
                    className="whatsapp-button"
                    onClick={() => handleWhatsappOrder(pkg.title)}
                  >
                    <span className="button-icon">💬</span>
                    Order Via WhatsApp
                  </button>
                  <button 
                    className="google-form-button"
                    onClick={handleGoogleFormOrder}
                  >
                    <span className="button-icon">📝</span>
                    Order Via Google Form
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Updated with Clickable Projects */}
      <section className="web-portfolio">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Explore Amazing Demos</h2>
            <p className="section-description">Click on any project to visit the live website</p>
          </div>
          <div className="web-portfolio-grid">
            {portfolioItems.map((item) => (
              <div 
                key={item.id} 
                className="web-portfolio-card"
                onMouseEnter={() => setHoveredProject(item.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div 
                  className="web-portfolio-image"
                  onClick={() => handleVisitWebsite(item.url)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={imageErrors[item.id] ? getFallbackImage(item.category) : item.image} 
                    alt={item.title} 
                    loading="lazy"
                    onError={() => handleImageError(item.id)}
                  />
                  <div className={`web-portfolio-overlay ${hoveredProject === item.id ? 'active' : ''}`}>
                    <div className="overlay-content">
                      <span className="visit-text">Click to Visit Website</span>
                      <button 
                        className="visit-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVisitWebsite(item.url);
                        }}
                      >
                        <span className="visit-icon">🌐</span>
                        Visit Website
                      </button>
                      <button 
                        className="similar-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOrderSimilar(item.title);
                        }}
                      >
                        <span className="similar-icon">📋</span>
                        Order Similar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="web-portfolio-content">
                  <div className="portfolio-header">
                    <span className="web-portfolio-category">{item.category}</span>
                    <span className="project-id">#{item.id}</span>
                  </div>
                  <h3 className="web-portfolio-title">{item.title}</h3>
                  <p className="web-portfolio-description">{item.description}</p>
                  <div className="web-portfolio-url">
                    <span className="url-label">Live URL:</span>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="url-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.url.replace('https://', '')}
                    </a>
                  </div>
                  <div className="portfolio-actions">
                    <button 
                      className="action-btn primary"
                      onClick={() => handleVisitWebsite(item.url)}
                    >
                      <span className="btn-icon">🌐</span>
                      View Website
                    </button>
                    <button 
                      className="action-btn secondary"
                      onClick={() => handleOrderSimilar(item.title)}
                    >
                      <span className="btn-icon">📝</span>
                      Order Similar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-more">
            <button className="btn btn-outline" onClick={handleWhatsappInquiry}>
              View More Projects →
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="web-about">
        <div className="container">
          <div className="web-about-content">
            <div className="web-about-text">
              <h2 className="web-about-title">Professional Website Design in Kenya</h2>
              <p>
                Looking for top-notch web designers in Kenya to bring your business or company website 
                design vision to life?
              </p>
              <p>
                Look no further than Tana Digital Agency, your premier destination for website design 
                and development services. As one of the best web design companies in Kenya, we specialize 
                in crafting bespoke digital experiences tailored to your unique needs.
              </p>
              <p>
                Our team of professional website developers in Nairobi is committed to delivering 
                cutting-edge solutions that not only captivate your audience but also drive tangible 
                results for your business.
              </p>
            </div>
            <div className="web-about-features">
              <div className="web-about-feature">
                <span className="feature-icon">🏆</span>
                <div>
                  <h4>Award-Winning Designs</h4>
                  <p>Recognized for creativity and innovation</p>
                </div>
              </div>
              <div className="web-about-feature">
                <span className="feature-icon">⭐</span>
                <div>
                  <h4>5-Star Rated Service</h4>
                  <p>Exceptional client satisfaction</p>
                </div>
              </div>
              <div className="web-about-feature">
                <span className="feature-icon">⚡</span>
                <div>
                  <h4>Fast Delivery</h4>
                  <p>Quick turnaround without compromising quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="web-cta" id="web-contact">
        <div className="container">
          <div className="web-cta-content">
            <h2 className="web-cta-title">Let's Build Something Great Together!</h2>
            <p className="web-cta-description">
              Have a project in mind or ready to elevate your online presence? 
              Talk to us today—we're just a message away.
            </p>
            <div className="web-cta-buttons">
              <button className="btn btn-primary" onClick={handleWhatsappInquiry}>
                <span className="button-icon">💬</span>
                Chat on WhatsApp
              </button>
              <button className="btn btn-outline" onClick={handleCallUs}>
                Call Us Now
              </button>
              <button className="btn btn-outline" onClick={handleEmailInquiry}>
                Send Email
              </button>
            </div>
            <div className="web-cta-contact">
              <p>WhatsApp: {WHATSAPP_NUMBER} | Email: {EMAIL_ADDRESS}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;