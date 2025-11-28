// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <h3><span className="brand-red">MB</span> EXTENSION</h3>
            <p className="footer-text">
              Your trusted source for quality flooring, furnishing, and industrial materials in Hyderabad for over 17 years.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h3>Contact Us</h3>
            <p className="footer-text">📍 D.No. 5-1-27, Gowliguda, Hyderabad</p>
            <p className="footer-text">📞 98490 20651 | 99483 32000</p>
            <p className="footer-text">✉️ manojextension@gmail.com</p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/products" className="footer-link">Our Products</Link></li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Manoj Brothers Extension. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;