// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <span>MB</span> Extension
        </Link>

        {/* Desktop Menu - Updated to your specific order */}
        <div className="nav-links">
          <Link to="/" className={getLinkClass('/')}>HOME</Link>
          <Link to="/products" className={getLinkClass('/products')}>PRODUCTS</Link>
          <Link to="/about" className={getLinkClass('/about')}>ABOUT US</Link>
          <Link to="/gallery" className={getLinkClass('/gallery')}>GALLERY</Link>
          <Link to="/testimonials" className={getLinkClass('/testimonials')}>TESTIMONIALS</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>CONTACT</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={handleLinkClick}>HOME</Link>
          <Link to="/products" className="mobile-link" onClick={handleLinkClick}>PRODUCTS</Link>
          <Link to="/about" className="mobile-link" onClick={handleLinkClick}>ABOUT US</Link>
          <Link to="/gallery" className="mobile-link" onClick={handleLinkClick}>GALLERY</Link>
          <Link to="/testimonials" className="mobile-link" onClick={handleLinkClick}>TESTIMONIALS</Link>
          <Link to="/contact" className="mobile-link" onClick={handleLinkClick}>CONTACT</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;