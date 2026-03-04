import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mati Kode ',
      role: 'Peace Advocate',
      image: 'https://raw.githubusercontent.com/BOBWANDATI/images/6f6a4d5aedaac4f35948c9bf35f8823be400cee0/WhatsApp%20Image%202026-02-23%20at%2012.52.14%20PM.jpeg',
      text: 'TanaDigitalAgency transformed our online presence completely. Our new website has increased our inquiries by 200%. The team was professional and delivered beyond our expectations.',
      rating: 5,
    },
    {
      name: 'Maureen Buya',
      role: 'Manager',
      image: 'https://raw.githubusercontent.com/BOBWANDATI/images/6f6a4d5aedaac4f35948c9bf35f8823be400cee0/WhatsApp%20Image%202026-02-23%20at%2012.48.23%20PM%20(1).jpeg',
      text: 'The web development course changed my life. I went from knowing nothing about coding to building professional websites. Now I run my own freelance business!',
      rating: 5,
    },
    {
      name: 'Hawo Farah',
      role: 'Vox radio ',
      image: 'https://raw.githubusercontent.com/BOBWANDATI/images/6f6a4d5aedaac4f35948c9bf35f8823be400cee0/WhatsApp%20Image%202026-02-23%20at%2012.48.22%20PM.jpeg',
      text: 'They understood our vision for community impact and created a website that truly represents our mission. The response from donors has been incredible.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-description">
            Don't just take our word for it. Here's what our clients and
            students have to say about working with us.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="testimonial-star">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                  loading="lazy"
                />
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">{testimonial.name}</h4>
                  <p className="testimonial-author-role">{testimonial.role}</p>
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