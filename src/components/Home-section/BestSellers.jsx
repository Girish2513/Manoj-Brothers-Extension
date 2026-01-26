import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './BestSellers.css';

// Using placeholders (Keep your imports as they were)
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

// --- PRODUCT CARD COMPONENT ---
// Added 'style' prop to handle animation delay
const ProductCard = ({ product, style }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      className="product-card" 
      ref={cardRef} 
      onMouseMove={handleMouseMove}
      style={style} // Apply the animation delay here
    >
      {/* THE SPOTLIGHT EFFECT OVERLAY */}
      <div className="spotlight-overlay"></div>

      <div className="product-image-wrapper">
        <span className="product-badge">{product.badge}</span>
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" decoding="async" />
        
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
  );
};

// --- MAIN COMPONENT ---
const BestSellers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Trigger when 20% of the section is visible
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      className={`best-sellers-section section-padding ${isVisible ? 'visible' : ''}`} 
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Curated Collection</span>
          <h2 className="section-title">Best Sellers</h2>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              // Stagger delay: 0ms, 100ms, 200ms...
              style={{ animationDelay: `${index * 100}ms` }}
            />
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