import React, { useState } from 'react';

const styles = {
  contact: {
    padding: '100px 5%',
    background: 'white',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'start',
  },
  info: {
    paddingRight: '2rem',
  },
  infoH2: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#1a1a2e',
    marginBottom: '1.5rem',
    lineHeight: 1.2,
  },
  gradientText: {
    background: 'linear-gradient(135deg, #2563eb, #f59e0b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  infoP: {
    fontSize: '1.125rem',
    color: '#64748b',
    lineHeight: 1.7,
    marginBottom: '3rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  contactIcon: {
    width: '56px',
    height: '56px',
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
  contactText: {
    display: 'flex',
    flexDirection: 'column',
  },
  contactTextH4: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#1a1a2e',
    margin: '0 0 4px 0',
  },
  contactTextP: {
    fontSize: '0.95rem',
    color: '#64748b',
    margin: 0,
  },
  formContainer: {
    background: '#f8fafc',
    borderRadius: '20px',
    padding: '2.5rem',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
  },
  formContainerH3: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#1a1a2e',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#475569',
  },
  input: {
    padding: '14px 16px',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '1rem',
    color: '#1a1a2e',
    transition: 'all 0.3s ease',
    background: 'white',
  },
  inputFocus: {
    borderColor: '#2563eb',
    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
    outline: 'none',
  },
  textarea: {
    padding: '14px 16px',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '1rem',
    color: '#1a1a2e',
    transition: 'all 0.3s ease',
    background: 'white',
    minHeight: '150px',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  submit: {
    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '10px',
    fontWeight: 600,
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
  },
  submitHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 15px 40px rgba(37, 99, 235, 0.4)',
  },
  submitDisabled: {
    opacity: 0.7,
    cursor: 'not-allowed',
  },
};

const contactInfo = [
  {
    icon: 'mail',
    title: 'Email Us',
    value: 'hello@techagency.com',
    color: 'blue',
  },
  {
    icon: 'phone',
    title: 'Call Us',
    value: '+234 800 123 4567',
    color: 'yellow',
  },
  {
    icon: 'location',
    title: 'Visit Us',
    value: 'Lagos, Nigeria',
    color: 'green',
  },
];

const iconPaths = {
  mail: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  location: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = styles.inputFocus.borderColor;
    e.target.style.boxShadow = styles.inputFocus.boxShadow;
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = styles.input.border;
    e.target.style.boxShadow = 'none';
  };

  return (
    <section id="contact" style={styles.contact}>
      <div style={styles.container}>
        <div style={styles.info}>
          <h2 style={styles.infoH2}>
            Let's Build Something <span style={styles.gradientText}>Amazing</span>{' '}
            Together
          </h2>
          <p style={styles.infoP}>
            Ready to transform your digital presence or upskill with our
            courses? Get in touch and let's discuss how we can help you achieve
            your goals.
          </p>

          <div style={styles.details}>
            {contactInfo.map((item) => (
              <div key={item.title} style={styles.contactItem}>
                <div style={{...styles.contactIcon, ...styles[`${item.color}Icon`]}}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d={iconPaths[item.icon]} />
                  </svg>
                </div>
                <div style={styles.contactText}>
                  <h4 style={styles.contactTextH4}>{item.title}</h4>
                  <p style={styles.contactTextP}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.formContainer}>
          <h3 style={styles.formContainerH3}>Send us a Message</h3>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="John Doe"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="john@example.com"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Tell us about your project or course interest..."
                required
                style={styles.textarea}
              />
            </div>
            <button 
              type="submit" 
              style={{...styles.submit, ...(isSubmitting && styles.submitDisabled)}}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = styles.submitHover.transform;
                  e.currentTarget.style.boxShadow = styles.submitHover.boxShadow;
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.3)';
                }
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;