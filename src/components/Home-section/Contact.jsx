import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-cta-container">
      <div className="glass-cta-card">
        <h2 className="cta-title">Ready to Transform Your Space?</h2>
        <p className="cta-text">
          Visit our showroom in Gowliguda to see our materials in person, or get a quick quote online today.
        </p>
        <Link to="/contact" className="cta-button">
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default Contact;