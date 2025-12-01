import React from 'react';
import { ShieldCheck, Truck, Users, Award } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="section-header">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="title-underline"></div>
      </div>

      <div className="features-grid">
        
        {/* Feature 1 */}
        <div className="feature-card">
          <ShieldCheck size={48} className="feature-icon" />
          <h3 className="feature-title">Verified Quality</h3>
          <p className="feature-text">Top-grade materials sourced directly from manufacturers.</p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <Award size={48} className="feature-icon" />
          <h3 className="feature-title">Best Prices</h3>
          <p className="feature-text">Unbeatable wholesale pricing in the Hyderabad market.</p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <Truck size={48} className="feature-icon" />
          <h3 className="feature-title">Ready Stock</h3>
          <p className="feature-text">Huge inventory ready for immediate dispatch.</p>
        </div>

        {/* Feature 4 */}
        <div className="feature-card">
          <Users size={48} className="feature-icon" />
          <h3 className="feature-title">15+ Years</h3>
          <p className="feature-text">Serving Gowliguda with trust since 2008.</p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;