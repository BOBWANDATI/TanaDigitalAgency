import React from 'react';

const styles = {
  footer: {
    background: '#1a1a2e',
    color: 'white',
    padding: '80px 5% 40px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  main: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem',
  },
  brand: {
    maxWidth: '300px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '1.5rem',
    textDecoration: 'none',
    color: 'inherit',
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  logoText: {
    fontWeight: 700,
    fontSize: '1.25rem',
    color: 'white',
  },
  logoTextSpan: {
    color: '#f59e0b',
  },
  brandP: {
    fontSize: '0.95rem',
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 1.7,
    marginBottom: '1.5rem',
  },
  social: {
    display: 'flex',
    gap: '1rem',
  },
  socialLink: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  socialLinkHover: {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-3px)',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
  },
  linksH4: {
    fontSize: '1.125rem',
    fontWeight: 700,
    color: 'white',
    marginBottom: '1.5rem',
  },
  linksUl: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  linksLi: {
    display: 'block',
  },
  linksA: {
    color: 'rgba(255, 255, 255, 0.7)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
  },
  linksAHover: {
    color: '#f59e0b',
  },
  bottom: {
    paddingTop: '2rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  bottomP: {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.5)',
    margin: 0,
  },
  bottomLinks: {
    display: 'flex',
    gap: '2rem',
  },
  bottomLink: {
    color: 'rgba(255, 255, 255, 0.5)',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.3s ease',
  },
  bottomLinkHover: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
};

const footerLinks = {
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'Graphic Design', href: '#services' },
    { name: 'Digital Marketing', href: '#services' },
    { name: 'Tech Training', href: '#courses' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ],
  courses: [
    { name: 'Web Design', href: '#courses' },
    { name: 'Graphic Design', href: '#courses' },
    { name: 'Digital Skills', href: '#courses' },
    { name: 'ICT Training', href: '#courses' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
  { name: 'Instagram', icon: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z' },
  { name: 'LinkedIn', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z' },
];

const Footer = () => {
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.main}>
          <div style={styles.brand}>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>T</div>
              <span style={styles.logoText}>
                Digital<span style={styles.logoTextSpan}>Agency</span>
              </span>
            </div>
            <p style={styles.brandP}>
              Empowering businesses and individuals with cutting-edge digital
              solutions and technology training for success in the digital age.
            </p>
            <div style={styles.social}>
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href="#" 
                  aria-label={social.name}
                  style={styles.socialLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = styles.socialLinkHover.background;
                    e.currentTarget.style.transform = styles.socialLinkHover.transform;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div style={styles.links}>
            <h4 style={styles.linksH4}>Services</h4>
            <ul style={styles.linksUl}>
              {footerLinks.services.map((link) => (
                <li key={link.name} style={styles.linksLi}>
                  <a
                    href={link.href}
                    style={styles.linksA}
                    onMouseEnter={(e) => e.currentTarget.style.color = styles.linksAHover.color}
                    onMouseLeave={(e) => e.currentTarget.style.color = styles.linksA.color}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={styles.links}>
            <h4 style={styles.linksH4}>Company</h4>
            <ul style={styles.linksUl}>
              {footerLinks.company.map((link) => (
                <li key={link.name} style={styles.linksLi}>
                  <a
                    href={link.href}
                    style={styles.linksA}
                    onMouseEnter={(e) => e.currentTarget.style.color = styles.linksAHover.color}
                    onMouseLeave={(e) => e.currentTarget.style.color = styles.linksA.color}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={styles.links}>
            <h4 style={styles.linksH4}>Courses</h4>
            <ul style={styles.linksUl}>
              {footerLinks.courses.map((link) => (
                <li key={link.name} style={styles.linksLi}>
                  <a
                    href={link.href}
                    style={styles.linksA}
                    onMouseEnter={(e) => e.currentTarget.style.color = styles.linksAHover.color}
                    onMouseLeave={(e) => e.currentTarget.style.color = styles.linksA.color}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={styles.bottom}>
          <p style={styles.bottomP}>© 2026 Tana Digital Agency. All rights reserved.</p>
          <div style={styles.bottomLinks}>
            <a 
              href="#" 
              style={styles.bottomLink}
              onMouseEnter={(e) => e.currentTarget.style.color = styles.bottomLinkHover.color}
              onMouseLeave={(e) => e.currentTarget.style.color = styles.bottomLink.color}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              style={styles.bottomLink}
              onMouseEnter={(e) => e.currentTarget.style.color = styles.bottomLinkHover.color}
              onMouseLeave={(e) => e.currentTarget.style.color = styles.bottomLink.color}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;