// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Layers, Users } from 'lucide-react';
import './Home.css'; // Import standard CSS

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070')" }}>
        <div className="hero-content">
          <h1>The Foundation of Beautiful Spaces in Hyderabad</h1>
          <p>Your trusted partner for flooring, furnishings, and industrial materials for over two decades.</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Explore Products</Link>
            <a href="#" className="btn btn-white">Get a Quote</a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="container trust-grid">
          <div className="trust-item">
            <Award className="icon-red" size={40} />
            <h3>17+ Years Experience</h3>
            <p>Market Expertise</p>
          </div>
          <div className="trust-item">
            <ShieldCheck className="icon-red" size={40} />
            <h3>Quality Assured</h3>
            <p>Best Materials</p>
          </div>
          <div className="trust-item">
            <Layers className="icon-red" size={40} />
            <h3>Widest Range</h3>
            <p>One-stop Solution</p>
          </div>
          <div className="trust-item">
            <Users className="icon-red" size={40} />
            <h3>Expert Guidance</h3>
            <p>Dalmia Family</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-pad">
        <div className="container">
          <h2 className="section-title">Discover Possibilities</h2>
          <div className="card-grid">
             {[
                { title: "Stylish Flooring", img: "https://images.unsplash.com/photo-1581858726768-758a03093171?q=80&w=2070", desc: "Durable PVC, vinyl, and carpets." },
                { title: "Furnishing Fabrics", img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1955", desc: "Velvets, cottons, and canvases." },
                { title: "Industrial Essentials", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070", desc: "EPE foam, PVC sheets, and tubes." },
                { title: "Our Specialities", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069", desc: "Artificial Grass and Soffit Panels." }
             ].map((cat, index) => (
                <div key={index} className="card">
                    <img src={cat.img} alt={cat.title} />
                    <div className="card-body">
                        <h3>{cat.title}</h3>
                        <p>{cat.desc}</p>
                    </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Spotlight */}
      <section className="section-pad" style={{ backgroundColor: 'white' }}>
        <div className="container spotlight-flex">
            <div className="half-width">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053" alt="Surfaces" className="spotlight-img" />
            </div>
            <div className="half-width">
                <h2 className="section-title" style={{textAlign: 'left'}}>Masters of Modern Surfaces</h2>
                <p style={{marginBottom: '20px', color: '#666'}}>We are industry specialists in the application and supply of high-grade PVC Membrane Film, vibrant Artificial Grass, and elegant Soffit Panels.</p>
                <Link to="/products" className="btn btn-primary">Learn About Specialities</Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;