import React from 'react';
import { Link } from 'react-router-dom';
import './BestSellers.css';

const BestSellers = () => {
  return (
    <div className="bestsellers-container">
      {/* Section Title */}
      <div className="section-header">
        <h2 className="section-title">Best Sellers</h2>
        <div className="title-underline"></div>
      </div>

      {/* Grid */}
      <div className="products-grid">
        
        {/* Card 1 */}
        <div className="glass-card">
          <img 
            src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80" 
            alt="PVC" 
            className="card-image"
          />
          <div className="card-content">
            <div className="card-header">
              <h3 className="product-name">PVC Flooring</h3>
              <span className="price-badge">₹45/sqft</span>
            </div>
            <p className="product-desc">Waterproof, wooden texture finish.</p>
            <Link to="/products" className="view-link">VIEW DETAILS →</Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="glass-card">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80" 
            alt="Grass" 
            className="card-image"
          />
          <div className="card-content">
             <div className="card-header">
              <h3 className="product-name">Artificial Grass</h3>
              <span className="price-badge">₹65/sqft</span>
            </div>
            <p className="product-desc">35mm - 40mm High Density Turf.</p>
            <Link to="/products" className="view-link">VIEW DETAILS →</Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="glass-card">
          <img 
            src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80" 
            alt="Carpets" 
            className="card-image"
          />
          <div className="card-content">
             <div className="card-header">
              <h3 className="product-name">Office Carpets</h3>
              <span className="price-badge">₹85/sqft</span>
            </div>
            <p className="product-desc">Heavy duty tiles for commercial use.</p>
            <Link to="/products" className="view-link">VIEW DETAILS →</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BestSellers;