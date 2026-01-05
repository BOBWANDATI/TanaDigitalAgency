import React from 'react';

const styles = {
  courses: {
    padding: '100px 5%',
    background: 'white',
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
    background: 'rgba(16, 185, 129, 0.1)',
    color: '#10b981',
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
    background: 'linear-gradient(135deg, #10b981, #2563eb)',
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
    background: 'white',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  cardHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
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
  yellowIcon: {
    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.2))',
    color: '#f59e0b',
  },
  blueIcon: {
    background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(37, 99, 235, 0.2))',
    color: '#2563eb',
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
    flex: 1,
  },
  meta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    padding: '1rem 0',
    borderTop: '1px solid #e2e8f0',
    borderBottom: '1px solid #e2e8f0',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.875rem',
    color: '#475569',
  },
  topics: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  topic: {
    background: 'rgba(37, 99, 235, 0.1)',
    color: '#2563eb',
    padding: '4px 12px',
    borderRadius: '50px',
    fontSize: '0.75rem',
    fontWeight: 500,
  },
  cta: {
    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '10px',
    fontWeight: 600,
    fontSize: '0.95rem',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
    width: '100%',
  },
  ctaHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 15px 40px rgba(37, 99, 235, 0.4)',
  },
};

const courses = [
  {
    icon: 'code',
    title: 'Web Design & Development',
    description: 'Master HTML, CSS, JavaScript, and React to build modern, responsive websites.',
    duration: '12 Weeks',
    students: '500+',
    topics: ['HTML/CSS', 'JavaScript', 'React', 'Responsive Design'],
    color: 'yellow',
  },
  {
    icon: 'palette',
    title: 'Graphic Design Mastery',
    description: 'Learn professional design tools and create stunning visual content.',
    duration: '8 Weeks',
    students: '300+',
    topics: ['Photoshop', 'Illustrator', 'Branding', 'Print Design'],
    color: 'blue',
  },
  {
    icon: 'globe',
    title: 'Digital Marketing',
    description: 'Comprehensive training in online marketing strategies and tools.',
    duration: '6 Weeks',
    students: '200+',
    topics: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
    color: 'purple',
  },
  {
    icon: 'computer',
    title: 'ICT Fundamentals',
    description: 'Essential computer skills for the modern workplace and digital economy.',
    duration: '4 Weeks',
    students: '400+',
    topics: ['MS Office', 'Internet', 'Email', 'Cloud Tools'],
    color: 'green',
  },
];

const iconPaths = {
  code: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
  palette: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.68-.07 2.37-.2M12 2v10l4 4',
  globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10',
  computer: 'M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16',
};

const Courses = () => {
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" style={styles.courses}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionBadge}>Learn & Grow</span>
          <h2 style={styles.sectionTitle}>
            Our <span style={styles.gradientText}>Training Courses</span>
          </h2>
          <p style={styles.sectionDescription}>
            Industry-relevant courses designed to equip you with practical
            skills for the digital economy.
          </p>
        </div>

        <div style={styles.grid}>
          {courses.map((course) => (
            <div 
              key={course.title} 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
                e.currentTarget.querySelector('.course-icon').style.transform = styles.iconHover.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
                e.currentTarget.querySelector('.course-icon').style.transform = 'none';
              }}
            >
              <div className="course-icon" style={{...styles.icon, ...styles[`${course.color}Icon`]}}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d={iconPaths[course.icon]} />
                </svg>
              </div>
              <h3 style={styles.title}>{course.title}</h3>
              <p style={styles.description}>{course.description}</p>

              <div style={styles.meta}>
                <span style={styles.metaItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {course.duration}
                </span>
                <span style={styles.metaItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  </svg>
                  {course.students} Students
                </span>
              </div>

              <div style={styles.topics}>
                {course.topics.map((topic) => (
                  <span key={topic} style={styles.topic}>
                    {topic}
                  </span>
                ))}
              </div>

              <button 
                style={styles.cta}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = styles.ctaHover.transform;
                  e.currentTarget.style.boxShadow = styles.ctaHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.3)';
                }}
                onClick={() => handleNavClick('#contact')}
              >
                Enroll Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;