
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './BestSellers.css';

// Using placeholders for now, in a real app these would be prop-driven or from an API
import artificialGrass from '../../assets/artificial-grass.jpg';
import vinylFlooring from '../../assets/vinyl-flooring.jpg';
import pvcCushion from '../../assets/pvc-roll.jpg';
import soffitPanels from '../../assets/soffit-panels.png';

const products = [
  {
    id: 1,
    name: 'Artificial Grass Premium',
    category: 'Landscape',
    price: 'From ₹45/sq.ft',
    image: artificialGrass,
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'PVC Membrane Film',
    category: 'Interiors',
    price: 'From ₹85/sq.ft',
    image: pvcCushion,
    badge: 'Trending'
  },
  {
    id: 3,
    name: 'Soffit Panels',
    category: 'Exterior',
    price: 'From ₹120/sq.ft',
    image: soffitPanels,
    badge: 'New Arrival'
  }
];

const BestSellers = () => {
  return (
    <section className="best-sellers-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Curated Collection</span>
          <h2 className="section-title">Best Sellers</h2>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <span className="product-badge">{product.badge}</span>
                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                <div className="product-overlay">
                  <Link to="/products" className="view-btn">
                    View Details <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <span className="product-price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-wrapper">
          <Link to="/products" className="link-hover">
            View All Collection <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;