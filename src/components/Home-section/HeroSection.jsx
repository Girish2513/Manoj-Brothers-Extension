import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import heroBg from '../../assets/background.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // 1. Wait for the Curtain Animation to finish (approx 2200ms - 2500ms)
    // You can adjust this number to match your exact curtain duration
    const curtainDelay = 2200; 

    const timer = setTimeout(() => {
      
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      
    }, curtainDelay);

    return () => clearTimeout(timer); // Cleanup if user leaves page quickly
  }, []);

  return (
    <section 
      className={`hero-section ${isVisible ? 'visible' : ''}`} 
      ref={sectionRef}
    >
      <div className="hero-bg-wrapper">
        <div className="hero-overlay"></div>
        <img
          src={heroBg}
          alt="Premium Flooring Showroom"
          className="hero-bg-image"
        />
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