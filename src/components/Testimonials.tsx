import React from 'react';
import { TestimonialsSection } from '../types';
import './Testimonials.css';

interface TestimonialsProps {
  data: TestimonialsSection;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">{data.title}</h2>
          {data.subtitle && <p className="testimonials-subtitle">{data.subtitle}</p>}
        </div>
        <div className="testimonials-grid">
          {data.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {testimonial.rating && renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                {testimonial.avatar && (
                  <div className="testimonial-avatar">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                )}
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-position">
                    {testimonial.position} • {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
