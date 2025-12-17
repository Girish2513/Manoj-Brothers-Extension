// src/pages/Products.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Products.css';
import vinylFlooringImg from '../assets/vinyl-flooring.jpg';
import artificialGrassImg from '../assets/artificial-grass.jpg';
import beigeCarpetImg from '../assets/beige-carpet.jpg';
import pvcRollImg from '../assets/pvc-roll.jpg';
import rubberMatImg from '../assets/rubber-mat.jpg';
import puFoamImg from '../assets/pu-foam.png';
import pvcSheetingImg from '../assets/pvc-sheeting-tubes.png';
import epeFoamsImg from '../assets/epe-foams.png';
import ProductModal from '../components/ProductModal';

const productsData = [
  { id: 1, category: 'flooring', title: 'Water-Resistant PVC Vinyl Flooring', desc: 'Ideal for modern homes and high-traffic commercial areas.', img: vinylFlooringImg },
  { id: 2, category: 'speciality', title: 'Premium Artificial Grass (40mm)', desc: 'Lush, low-maintenance green solutions for balconies and gardens.', img: artificialGrassImg },
  { id: 3, category: 'furnishing', title: 'Rich Velvet Upholstery Fabric', desc: 'Luxurious and durable fabric for sofas, chairs, and cushions.', img: beigeCarpetImg },
  { id: 4, category: 'industrial', title: 'Industrial Hollo Mats', desc: 'Durable rubber mats for industrial and safety applications.', img: rubberMatImg },
  { id: 5, category: 'flooring', title: 'Red Exhibition Carpet', desc: 'High-quality, vibrant carpets perfect for events and stages.', img: 'https://images.unsplash.com/photo-1543413155-b5428a7f219c?q=80&w=2070' },
  { id: 6, category: 'speciality', title: 'PVC Membrane Film', desc: 'Durable and stylish films for modular kitchens and furniture.', img: pvcRollImg },
  { id: 7, category: 'furnishing', title: 'Designer Wallpaper Rolls', desc: 'A wide variety of patterns and textures to elevate your walls.', img: 'https://images.unsplash.com/photo-1618221281878-75e8c7c00657?q=80&w=2071' },
  { id: 8, category: 'industrial', title: 'Industrial Grade PVC Tubes', desc: 'Robust and reliable tubing for various industrial applications.', img: 'https://images.unsplash.com/photo-1591522813136-a198c8de0d7b?q=80&w=2070' },
  { id: 9, category: 'industrial', title: 'PVC Sheeting & Tubes', desc: 'High-quality PVC sheeting and tubes for industrial use.', img: pvcSheetingImg },
  { id: 10, category: 'packaging', title: 'EPE Foams', desc: 'Protective EPE foam packaging solutions for various needs.', img: epeFoamsImg },
];

const Products = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = productsData.filter(product =>
    filter === 'all' || product.category === filter
  );

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'flooring', label: 'Flooring' },
    { id: 'furnishing', label: 'Furnishing' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'speciality', label: 'Speciality' },
  ];

  return (
    <div className="products-page">
      <Helmet>
        <title>Our Products | Manoj Brothers Extension</title>
        <meta name="description" content="Browse our wide range of Vinyl Flooring, Artificial Grass, Carpets, and more. High-quality materials for every need." />
      </Helmet>
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-content">
          <h1 className="hero-title">Our Curated Collection</h1>
          <p className="hero-subtitle">Discover premium materials engineered for excellence. From industrial strength to residential luxury.</p>
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
        <div className="card-grid">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card-wrapper"
              style={{ animationDelay: `${index * 0.1}s` }} /* Staggered animation */
            >
              <div className="product-card" onClick={() => setSelectedProduct(product)}>
                <div className="card-image-container">
                  <img src={product.img} alt={product.title} className="card-img" />
                </div>
                <div className="card-body">
                  <span className="card-category">{product.category}</span>
                  <h3 className="card-title">{product.title}</h3>
                  <p className="card-desc">{product.desc}</p>
                  <div className="card-footer">
                    <span className="learn-more">Learn More <span>&rarr;</span></span>
                  </div>
                </div>
              </div>
            </div>
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