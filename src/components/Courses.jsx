import React, { useState } from 'react';
import './Courses.css';

const Courses = () => {
  const [enrollingCourse, setEnrollingCourse] = useState(null);

  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe2rFBjSeGaBcH_TlwH24GoYKpVHzsfuOLXI6bfNDocvdYASg/viewform';
  const WHATSAPP_NUMBER = '0758284534';
  const WHATSAPP_FORMATTED = '+254758284534';

  const courses = [
    {
      icon: 'code',
      title: 'Web Design & Development',
      description: 'Master HTML, CSS, JavaScript, and React to build modern, responsive websites.',
      duration: '12 Weeks',
      students: '500+',
      topics: ['HTML/CSS', 'JavaScript', 'React', 'Responsive Design'],
      color: 'yellow',
      courseId: 'web-dev',
      price: 'Ksh 25,000',
    },
    {
      icon: 'palette',
      title: 'Graphic Design Mastery',
      description: 'Learn professional design tools and create stunning visual content.',
      duration: '8 Weeks',
      students: '300+',
      topics: ['Photoshop', 'Illustrator', 'Branding', 'Print Design'],
      color: 'blue',
      courseId: 'graphic-design',
      price: 'Ksh 20,000',
    },
    {
      icon: 'globe',
      title: 'Digital Marketing',
      description: 'Comprehensive training in online marketing strategies and tools.',
      duration: '6 Weeks',
      students: '200+',
      topics: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
      color: 'purple',
      courseId: 'digital-marketing',
      price: 'Ksh 18,000',
    },
    {
      icon: 'computer',
      title: 'ICT Fundamentals',
      description: 'Essential computer skills for the modern workplace and digital economy.',
      duration: '4 Weeks',
      students: '400+',
      topics: ['MS Office', 'Internet', 'Email', 'Cloud Tools'],
      color: 'green',
      courseId: 'ict-fundamentals',
      price: 'Ksh 15,000',
    },
  ];

  const iconPaths = {
    code: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
    palette: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.68-.07 2.37-.2M12 2v10l4 4',
    globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10',
    computer: 'M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16',
  };

  const handleGoogleFormEnroll = (course) => {
    // Open Google Form with pre-filled course name if possible
    // You can add query parameters if your Google Form supports them
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
    
    // Track enrollment
    console.log(`Enrolling in ${course.title} via Google Form`);
  };

  const handleWhatsAppEnroll = (course) => {
    // Create WhatsApp message with course details
    const message = `Hello Tana Digital Agency! I'm interested in enrolling for the *${course.title}* course.

📚 Course: ${course.title}
⏱️ Duration: ${course.duration}
💰 Price: ${course.price}
📝 Topics: ${course.topics.join(', ')}

I would like to get more information and proceed with enrollment. Please guide me through the next steps.`;

    // Format WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Track enrollment
    console.log(`Enrolling in ${course.title} via WhatsApp`);
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="courses">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Learn & Grow</span>
          <h2 className="section-title">
            Our <span className="gradient-text">Training Courses</span>
          </h2>
          <p className="section-description">
            Industry-relevant courses designed to equip you with practical
            skills for the digital economy. Choose your preferred enrollment method.
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.title} className="course-card">
              <div className={`course-icon course-icon-${course.color}`}>
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
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>

              <div className="course-price-tag">
                <span className="price">{course.price}</span>
              </div>

              <div className="course-meta">
                <span className="course-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {course.duration}
                </span>
                <span className="course-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  </svg>
                  {course.students} Students
                </span>
              </div>

              <div className="course-topics">
                {course.topics.map((topic) => (
                  <span key={topic} className="course-topic">
                    {topic}
                  </span>
                ))}
              </div>

              <div className="course-enrollment-options">
                <button 
                  className="course-enroll-btn google-form-btn"
                  onClick={() => handleGoogleFormEnroll(course)}
                  onMouseEnter={() => setEnrollingCourse(`${course.title}-google`)}
                  onMouseLeave={() => setEnrollingCourse(null)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  Apply via Google Form
                </button>

                <button 
                  className="course-enroll-btn whatsapp-btn"
                  onClick={() => handleWhatsAppEnroll(course)}
                  onMouseEnter={() => setEnrollingCourse(`${course.title}-whatsapp`)}
                  onMouseLeave={() => setEnrollingCourse(null)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Apply via WhatsApp
                </button>
              </div>

              <div className="course-enrollment-note">
                <small>Choose your preferred enrollment method</small>
              </div>
            </div>
          ))}
        </div>

        <div className="courses-footer">
          <div className="enrollment-info">
            <h3>Why Choose Our Courses?</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-icon">🎓</span>
                <div>
                  <h4>Certified Training</h4>
                  <p>Get industry-recognized certificates</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">💼</span>
                <div>
                  <h4>Job Assistance</h4>
                  <p>Career support and guidance</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">⏰</span>
                <div>
                  <h4>Flexible Learning</h4>
                  <p>Weekend and evening classes available</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">💬</span>
                <div>
                  <h4>24/7 Support</h4>
                  <p>WhatsApp support for quick questions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-prompt">
            <p>
              <strong>Quick Question?</strong> Chat with us directly on 
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                WhatsApp {WHATSAPP_NUMBER}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;