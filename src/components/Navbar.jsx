// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <span>MB</span> Extension
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
          <Link to="/products" className={getLinkClass('/products')}>Our Products</Link>
        </div>

        <a href="#" className="btn btn-primary desktop-cta">Get a Quote</a>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="mobile-link" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/products" className="mobile-link" onClick={() => setIsOpen(false)}>Our Products</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;