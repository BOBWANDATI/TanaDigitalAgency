import React from 'react';

const styles = {
  testimonials: {
    padding: '100px 5%',
    background: '#050514ff',
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
    background: 'rgba(245, 158, 11, 0.1)',
    color: '#f59e0b',
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
    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: 'white',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  cardHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  },
  quote: {
    fontSize: '4rem',
    color: '#e2e8f0',
    lineHeight: 1,
    marginBottom: '1rem',
  },
  stars: {
    display: 'flex',
    gap: '4px',
    marginBottom: '1.5rem',
  },
  star: {
    width: '20px',
    height: '20px',
    color: '#fbbf24',
    fill: 'currentColor',
  },
  text: {
    fontSize: '1rem',
    color: '#475569',
    lineHeight: 1.7,
    marginBottom: '2rem',
    fontStyle: 'italic',
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  authorInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  authorName: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#1a1a2e',
    margin: 0,
  },
  authorRole: {
    fontSize: '0.875rem',
    color: '#64748b',
    margin: 0,
  },
};

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    text: 'TechAgency transformed our online presence completely. Our new website has increased our inquiries by 200%. The team was professional and delivered beyond our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Okonkwo',
    role: 'Web Development Student',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    text: 'The web development course changed my life. I went from knowing nothing about coding to building professional websites. Now I run my own freelance business!',
    rating: 5,
  },
  {
    name: 'Amina Bello',
    role: 'NGO Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    text: 'They understood our vision for community impact and created a website that truly represents our mission. The response from donors has been incredible.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" style={styles.testimonials}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionBadge}>Testimonials</span>
          <h2 style={styles.sectionTitle}>
            What Our <span style={styles.gradientText}>Clients Say</span>
          </h2>
          <p style={styles.sectionDescription}>
            Don't just take our word for it. Here's what our clients and
            students have to say about working with us.
          </p>
        </div>

        <div style={styles.grid}>
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name} 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
              }}
            >
              <div style={styles.quote}>"</div>
              <div style={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" style={styles.star}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p style={styles.text}>"{testimonial.text}"</p>
              <div style={styles.author}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={styles.avatar}
                />
                <div style={styles.authorInfo}>
                  <h4 style={styles.authorName}>{testimonial.name}</h4>
                  <p style={styles.authorRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;