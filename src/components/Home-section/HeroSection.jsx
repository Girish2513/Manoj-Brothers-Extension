
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import heroBg from '../../assets/background.jpg'; // Using existing asset but improving presentation

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-wrapper">
        <div className="hero-overlay"></div>
        <img src={heroBg} alt="Premium Flooring Showroom" className="hero-bg-image" />
      </div>

      <div className="container hero-content">
        <span className="hero-label">Create Your Dream Home</span>

        <h1 className="hero-title">
          Transform Your Space with <br />
          <span className="text-gradient">Premium Flooring.</span>
        </h1>

        <p className="hero-subtitle">
          Hyderabad’s Trusted Wholesaler Since 2008. Experience the perfect blend of
          luxury, durability, and style.
        </p>

        <div className="hero-cta-group">
          <Link to="/products" className="btn btn-primary">
            Explore Collection
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Visit Showroom <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years of Trust</span>
          </div>
          <div className="stat-separator"></div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Premium Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;