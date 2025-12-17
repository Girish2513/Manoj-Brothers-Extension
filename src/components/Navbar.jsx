import React, { useState, useEffect, useCallback } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. State for the Progress Bar
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  // Scroll detection logic
  useEffect(() => {
    let requestRunning = null;

    const handleScroll = () => {
      if (requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          // A. Navbar Background Logic
          const isScrolled = window.scrollY > 50;
          setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));

          // B. Scroll Progress Bar Logic
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
          }

          requestRunning = null;
        });
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Check initial position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRunning !== null) {
        window.cancelAnimationFrame(requestRunning);
      }
    };
  }, []); // Dependencies removed as we use functional updates or internal refs if needed, but here simple functional update for setScrolled works. Actually setScrollProgress uses window values directly. 

  const scrollWithOffset = useCallback((el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

      {/* 2. THE RED SCROLL LINE (Added at the very top) */}
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

        {/* Desktop Menu */}
        <div className="nav-menu">
          <HashLink smooth to="/#home" className="nav-link home-active">HOME</HashLink>
          <Link to="/products" className="nav-link">PRODUCTS</Link>
          <HashLink smooth to="/#gallery" scroll={scrollWithOffset} className="nav-link">GALLERY</HashLink>
          <HashLink smooth to="/#about" scroll={scrollWithOffset} className="nav-link">ABOUT</HashLink>
          <Link to="/faq" className="nav-link">FAQ</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          <HashLink smooth to="/#home" className="mobile-link home-active" onClick={toggleMenu}>HOME</HashLink>
          <Link to="/products" className="mobile-link" onClick={toggleMenu}>PRODUCTS</Link>
          <HashLink smooth to="/#gallery" scroll={scrollWithOffset} className="mobile-link" onClick={toggleMenu}>GALLERY</HashLink>
          <HashLink smooth to="/#about" scroll={scrollWithOffset} className="mobile-link" onClick={toggleMenu}>ABOUT</HashLink>
          <Link to="/faq" className="mobile-link" onClick={toggleMenu}>FAQ</Link>
          <Link to="/contact" className="mobile-link" onClick={toggleMenu}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;