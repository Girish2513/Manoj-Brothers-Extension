import React, { useState, useEffect, useCallback } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  // Scroll detection logic
  useEffect(() => {
    let requestRunning = null;

    const handleScroll = () => {
      if (requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));

          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
          }

          requestRunning = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRunning !== null) {
        window.cancelAnimationFrame(requestRunning);
      }
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

      {/* 1. SCROLL PROGRESS BAR */}
      <div className="scroll-track">
        <div
          className="scroll-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="navbar-container">

        {/* LOGO */}
        <HashLink smooth to="/#home" className="navbar-logo">
          <span className="logo-mb">MB</span>
          <span className="logo-ext">Extension</span>
        </HashLink>

        {/* DESKTOP MENU */}
        <div className="nav-menu">
          {/* Home stays as HashLink to scroll to top if on homepage */}
          <HashLink smooth to="/#home" className="nav-link home-active">HOME</HashLink>
          
          {/* THESE MUST BE STANDARD LINKS FOR SEPARATE PAGES */}
          <Link to="/products" className="nav-link">PRODUCTS</Link>
          
          {/* UPDATED: Changed from HashLink to Link */}
          <Link to="/about" className="nav-link">ABOUT</Link>
          
          <Link to="/faq" className="nav-link">FAQ</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link> 
        </div>

        {/* MOBILE MENU ICON */}
        <div className="mobile-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="mobile-menu">
          <HashLink smooth to="/#home" className="mobile-link home-active" onClick={toggleMenu}>HOME</HashLink>
          
          <Link to="/products" className="mobile-link" onClick={toggleMenu}>PRODUCTS</Link>
          
          {/* UPDATED: Changed from HashLink to Link */}
          <Link to="/about" className="mobile-link" onClick={toggleMenu}>ABOUT</Link>
          
          <Link to="/faq" className="mobile-link" onClick={toggleMenu}>FAQ</Link>
          <Link to="/contact" className="mobile-link" onClick={toggleMenu}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;