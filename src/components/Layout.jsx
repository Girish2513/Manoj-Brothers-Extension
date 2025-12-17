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
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <LocationButton />
    </div>
  );
};


export default Layout;