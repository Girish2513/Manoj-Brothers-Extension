import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight } from 'lucide-react';
import './Products.css';
import productsData from '../data/productsData';
import ProductModal from '../components/ProductModal';

// --- NEW COMPONENT: Spotlight Product Card ---
const ProductCard = ({ product, style, onOpenModal }) => {
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
      style={style}
      onClick={() => onOpenModal(product)}
    >
      {/* Spotlight Overlay */}
      <div className="spotlight-overlay"></div>

      {/* Image Section */}
      <div className="product-image-wrapper">
        <img src={product.img} alt={product.title} className="product-image" loading="lazy" decoding="async" />

        {/* Hover Overlay with Button */}
        <div className="product-overlay">
          <button className="view-btn">
            View Details <ArrowUpRight size={18} />
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.title}</h3>
        <p className="product-desc-short">{product.desc}</p>

        <div className="card-footer-visual">
          <span className="learn-more-link">Learn More &rarr;</span>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const Products = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // For scroll reveal

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProducts = useMemo(() => (
    productsData.filter(product => filter === 'all' || product.category === filter)
  ), [filter]);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'flooring', label: 'Flooring' },
    { id: 'furnishing', label: 'Furnishing' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'speciality', label: 'Speciality' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'doormats', label: 'Doormats' },
    { id: 'nets', label: 'Nets' },
    { id: 'exterior', label: 'Exterior' },
  ];

  return (
    <div className="products-page">
      <Helmet>
        <title>Our Products | PVC Vinyl, Artificial Grass, Carpets & Foam - MB Extension</title>
        <meta name="description" content="Browse our wholesale collection of Cotton Coated Fabrics, PVC Sheeting, EPE Foams, P.U. Foams, Velvet Items, Cinema Seats, Jute, and Wallpaper. We are specialists in PVC Membrane Film and Soffit Panels." />
        <meta name="keywords" content="Cotton Coated Fabrics, PVC Sheeting, PVC Vinyl Flooring, EPE Foams, PU Foams, Foam Bonds, Furnishing, Velvet Items, Cinema Seats, Jute, Wallpaper, Industrial Packaging, PVC Membrane Film, Artificial Grass, Soffit Panels" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": productsData.map((product, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": product.title,
                "description": product.desc,
                "image": product.img || "https://mbextension.com/og-image.svg",
                "brand": {
                  "@type": "Brand",
                  "name": "MB Extension"
                },
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-content">
          <h1 className="hero-title">Our Curated Collection</h1>
          <p className="hero-subtitle">
            Explore our extensive range of high-quality flooring, furnishing, and industrial materials.
            From luxury vinyl planks to durable artificial grass, we provide premium solutions
            for homes, offices, and commercial spaces at unmatched wholesale prices.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">500+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <span className="stat-value">Wholesale</span>
              <span className="stat-label">Pricing</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <span className="stat-value">Premium</span>
              <span className="stat-label">Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-container">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="products-grid-section">
        <div className={`products-grid ${isVisible ? 'visible' : ''}`}>
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenModal={setSelectedProduct}
              // Simple staggered animation logic
              style={{ animationDelay: `${index * 50}ms` }}
            />
          ))}
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Products;