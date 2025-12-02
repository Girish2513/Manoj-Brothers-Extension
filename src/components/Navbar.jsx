import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link'; 
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 1. State for the Progress Bar
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      // A. Navbar Background Logic (Transparent -> Black)
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // B. Scroll Progress Bar Logic
      // Calculate how much of the page is remaining
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate percentage (0 to 100)
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial position
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

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
          <HashLink smooth to="/#products" scroll={scrollWithOffset} className="nav-link">PRODUCTS</HashLink>
          <HashLink smooth to="/#gallery" scroll={scrollWithOffset} className="nav-link">GALLERY</HashLink>
          <HashLink smooth to="/#about" scroll={scrollWithOffset} className="nav-link">ABOUT</HashLink>
          <HashLink smooth to="/#faq" scroll={scrollWithOffset} className="nav-link">FAQ</HashLink>
          <HashLink smooth to="/#contact" scroll={scrollWithOffset} className="nav-link">CONTACT</HashLink>
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
          <HashLink smooth to="/#products" scroll={scrollWithOffset} className="mobile-link" onClick={toggleMenu}>PRODUCTS</HashLink>
          <HashLink smooth to="/#gallery" scroll={scrollWithOffset} className="mobile-link" onClick={toggleMenu}>GALLERY</HashLink>
          <HashLink smooth to="/#about" scroll={scrollWithOffset} className="mobile-link" onClick={toggleMenu}>ABOUT</HashLink>
          <HashLink smooth to="/#faq" scroll={scrollWithOffset} className="mobile-link" onClick={toggleMenu}>FAQ</HashLink>
          <HashLink smooth to="/#contact" scroll={scrollWithOffset} className="mobile-link" onClick={toggleMenu}>CONTACT</HashLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;