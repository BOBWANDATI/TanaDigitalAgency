import React from 'react';
import './Services.css';

const Services = () => {
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

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">What We Offer</span>
          <h2 className="section-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-description">
            From stunning websites to comprehensive tech training, we provide
            end-to-end digital solutions for businesses and individuals.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className={`service-icon service-icon-${service.color}`}>
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
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature} className="service-feature-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="service-feature-icon"
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