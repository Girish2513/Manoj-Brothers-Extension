import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="section-header">
        <h2 className="section-title">Our Collections</h2>
        <div className="title-underline"></div>
      </div>

      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80" alt="PVC" loading="lazy" decoding="async" />
          <div className="gallery-overlay"><h3>PVC Flooring</h3></div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1533460004989-acf6cf3fab36?auto=format&fit=crop&q=80" alt="Grass" loading="lazy" decoding="async" />
          <div className="gallery-overlay"><h3>Artificial Grass</h3></div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?auto=format&fit=crop&q=80" alt="Carpets" loading="lazy" decoding="async" />
          <div className="gallery-overlay"><h3>Carpets</h3></div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" alt="Vinyl" loading="lazy" decoding="async" />
          <div className="gallery-overlay"><h3>Vinyl Rolls</h3></div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80" alt="Mats" loading="lazy" decoding="async" />
          <div className="gallery-overlay"><h3>Floor Mats</h3></div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80" alt="Foam" loading="lazy" decoding="async" />
          <div className="gallery-overlay"><h3>EPE/PU Foam</h3></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;