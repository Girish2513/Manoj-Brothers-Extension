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
            <p className="footer-text">
              <a
                className="footer-contact-link"
                href="https://maps.google.com/?q=D.No.%205-1-27%2C%20Gowliguda%2C%20Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 D.No. 5-1-27, Gowliguda, Hyderabad
              </a>
            </p>
            <p className="footer-text">
              <a className="footer-contact-link" href="tel:+919849020651">📞 98490 20651</a>
              <span className="footer-contact-separator"> | </span>
              <a className="footer-contact-link" href="tel:+919948332000">99483 32000</a>
            </p>
            <p className="footer-text">
              <a
                className="footer-contact-link"
                href="mailto:manojextension@gmail.com?subject=Inquiry%20about%20MB%20Extension&body=Hey!%20I%27m%20interested%20in%20your%20business%20MB%20Extension.%20Please%20share%20details."
              >
                ✉️ manojextension@gmail.com
              </a>
            </p>
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
          <div className="developer-credits">
            <p className="designed-by">Designed by <a href="https://www.instagram.com/itswebaura?igsh=MWxjdWJnYWYxdGdzYg==" target="_blank" rel="noopener noreferrer" className="webaura-text">WebAura</a></p>
            <p className="developers">S.Girish • G.Druvath Kumar • R.Venu Kumar</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;