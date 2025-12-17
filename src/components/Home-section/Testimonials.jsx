
import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Interior Designer',
    text: 'Manoj Brothers has been my go-to for premium flooring for 5 years. The quality and finish are unmatched in Hyderabad.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Architect',
    text: 'Their collection of artificial grass and vinyl options is extensive. The durability of their products is incredible.',
    rating: 5
  },
  {
    id: 3,
    name: 'Vikram Reddy',
    role: 'Homeowner',
    text: 'I transformed my entire balcony with their artificial grass. It looks so natural and feels premium.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag-light">Testimonials</span>
          <h2 className="section-title-light">Client Stories</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <Quote size={40} className="quote-icon" />
              <p className="testimonial-text">"{item.text}"</p>

              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <h4 className="author-name">{item.name}</h4>
                  <span className="author-role">{item.role}</span>
                </div>
                <div className="testimonial-rating">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#C3002F" color="#C3002F" />
                  ))}
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