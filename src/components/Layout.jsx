// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import LocationButton from './LocationButton';
import './Layout.css';


const Layout = () => {
  return (
    <div className="layout-wrapper">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content" className="main-content">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <LocationButton />
    </div>
  );
};


export default Layout;