import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="section-header">
        <h2 className="section-title">Client Stories</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="testimonials-grid">
        <div className="testimonial-glass-card">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="#FFD700" stroke="none" size={20} />
            ))}
          </div>
          <p className="review-text">"Best wholesaler in Gowliguda. I got flooring for my entire office at very good rates."</p>
          <h4 className="client-name">- Rahul Reddy</h4>
        </div>

        <div className="testimonial-glass-card">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="#FFD700" stroke="none" size={20} />
            ))}
          </div>
          <p className="review-text">"The artificial grass quality is amazing. My balcony looks beautiful now!"</p>
          <h4 className="client-name">- Saniya Mirza</h4>
        </div>

        <div className="testimonial-glass-card">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="#FFD700" stroke="none" size={20} />
            ))}
          </div>
          <p className="review-text">"Professional service and huge stock available. Highly recommended."</p>
          <h4 className="client-name">- Amit Patel</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;