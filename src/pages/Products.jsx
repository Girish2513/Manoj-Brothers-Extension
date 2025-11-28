// src/pages/Products.jsx
import React, { useState } from 'react';
import './Products.css'; // Import specific CSS
import './Home.css'; // Re-using card styles from Home

const productsData = [
  { id: 1, category: 'flooring', title: 'Water-Resistant PVC Vinyl Flooring', desc: 'Ideal for modern homes and high-traffic commercial areas.', img: 'https://images.unsplash.com/photo-1629812492388-745839075a34?q=80&w=1974' },
  { id: 2, category: 'speciality', title: 'Premium Artificial Grass (40mm)', desc: 'Lush, low-maintenance green solutions for balconies and gardens.', img: 'https://images.unsplash.com/photo-1633279309254-2a6c11756857?q=80&w=2070' },
  { id: 3, category: 'furnishing', title: 'Rich Velvet Upholstery Fabric', desc: 'Luxurious and durable fabric for sofas, chairs, and cushions.', img: 'https://images.unsplash.com/photo-1594032549726-397554b73489?q=80&w=1974' },
  { id: 4, category: 'industrial', title: 'EPE Foam Sheets', desc: 'Versatile and protective packaging for sensitive goods.', img: 'https://images.unsplash.com/photo-1542438408-abb26010b02a?q=80&w=2070' },
  { id: 5, category: 'flooring', title: 'Red Exhibition Carpet', desc: 'High-quality, vibrant carpets perfect for events and stages.', img: 'https://images.unsplash.com/photo-1543413155-b5428a7f219c?q=80&w=2070' },
  { id: 6, category: 'speciality', title: 'PVC Membrane Film', desc: 'Durable and stylish films for modular kitchens and furniture.', img: 'https://images.unsplash.com/photo-1616781929342-832df748b9a6?q=80&w=1974' },
  { id: 7, category: 'furnishing', title: 'Designer Wallpaper Rolls', desc: 'A wide variety of patterns and textures to elevate your walls.', img: 'https://images.unsplash.com/photo-1618221281878-75e8c7c00657?q=80&w=2071' },
  { id: 8, category: 'industrial', title: 'Industrial Grade PVC Tubes', desc: 'Robust and reliable tubing for various industrial applications.', img: 'https://images.unsplash.com/photo-1591522813136-a198c8de0d7b?q=80&w=2070' },
];

const Products = () => {
  const [filter, setFilter] = useState('all');

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
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Our Curated Collection</h1>
          <p>Explore a universe of high-quality materials for any project.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          {/* Filters */}
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

          {/* Product Grid */}
          <div className="card-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="card">
                <img src={product.img} alt={product.title} />
                <div className="card-body">
                  <span className="product-meta">{product.category}</span>
                  <h3 style={{marginTop: '5px'}}>{product.title}</h3>
                  <p>{product.desc}</p>
                  <a href="#" className="view-link">View Details &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;