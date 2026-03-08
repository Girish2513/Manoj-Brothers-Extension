import React, { useState, useEffect, useCallback } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { pathname } = useLocation();

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
          <HashLink
            smooth
            to="/#home"
            className={`nav-link ${pathname === '/' ? 'home-active' : ''}`}
          >
            HOME
          </HashLink>
          
          {/* THESE MUST BE STANDARD LINKS FOR SEPARATE PAGES */}
          <Link to="/products" className={`nav-link ${pathname === '/products' ? 'home-active' : ''}`}>PRODUCTS</Link>
          
          {/* UPDATED: Changed from HashLink to Link */}
          <Link to="/about" className={`nav-link ${pathname === '/about' ? 'home-active' : ''}`}>ABOUT</Link>
          
          <Link to="/faq" className={`nav-link ${pathname === '/faq' ? 'home-active' : ''}`}>FAQ</Link>
          <Link to="/contact" className={`nav-link ${pathname === '/contact' ? 'home-active' : ''}`}>CONTACT</Link> 
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="mobile-icon"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
        <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`} id="mobile-menu" role="menu" aria-hidden={!isOpen}>
          <HashLink
            smooth
            to="/#home"
            className={`mobile-link ${pathname === '/' ? 'home-active' : ''}`}
            onClick={toggleMenu}
            tabIndex={isOpen ? 0 : -1}
          >
            HOME
          </HashLink>

          <Link
            to="/products"
            className={`mobile-link ${pathname === '/products' ? 'home-active' : ''}`}
            onClick={toggleMenu}
            tabIndex={isOpen ? 0 : -1}
          >
            PRODUCTS
          </Link>

          <Link
            to="/about"
            className={`mobile-link ${pathname === '/about' ? 'home-active' : ''}`}
            onClick={toggleMenu}
            tabIndex={isOpen ? 0 : -1}
          >
            ABOUT
          </Link>

          <Link
            to="/faq"
            className={`mobile-link ${pathname === '/faq' ? 'home-active' : ''}`}
            onClick={toggleMenu}
            tabIndex={isOpen ? 0 : -1}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className={`mobile-link ${pathname === '/contact' ? 'home-active' : ''}`}
            onClick={toggleMenu}
            tabIndex={isOpen ? 0 : -1}
          >
            CONTACT
          </Link>
        </div>
    </nav>
  );
};

export default Navbar;