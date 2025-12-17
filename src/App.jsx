import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import { HelmetProvider } from 'react-helmet-async';
import GlobalSEO from './components/GlobalSEO';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GlobalSEO />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* This remains a separate page for when users click "View Details" */}
            <Route path="products" element={<Products />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;