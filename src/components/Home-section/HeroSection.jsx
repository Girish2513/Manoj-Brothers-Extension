import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  // 1. State to track the mouse offset
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // 2. Effect to listen for mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Get screen dimensions
      const { innerWidth, innerHeight } = window;
      
      // Calculate how far mouse is from center (-1 to +1)
      // Multiply by 25 to control the "strength" of the movement (25px max)
      const x = (e.clientX / innerWidth - 0.5) * 25; 
      const y = (e.clientY / innerHeight - 0.5) * 25; 
      
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup listener when component unmounts
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hero-wrapper">
      
      <div 
        className="hero-inner"
        // 3. Apply the Parallax Transform here
        // We use negative values (-offset.x) to make it move OPPOSITE to the mouse
        style={{ 
          transform: `translate(${-offset.x}px, ${-offset.y}px)` 
        }}
      >
        
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