import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-inner">
        {/* Est Badge */}
        <span className="est-badge">Est. 2008</span>

        {/* Main Headline */}
        <h1 className="hero-title">
          Transform Your <span>Space</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Hyderabad's Premier PVC Flooring & Interior Wholesaler. <br/>
          Direct Importers & Stockists.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <Link to="/products" className="btn btn-primary" style={{ minWidth: '180px' }}>
            Explore Collection
          </Link>
          
          <a href="https://wa.me/919849020651" className="btn-whatsapp">
            <Phone size={18} style={{ marginRight: '8px' }} /> WhatsApp Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;