import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/Home-section/HeroSection';
import BestSellers from '../components/Home-section/BestSellers';
import WhyChooseUs from '../components/Home-section/WhyChooseUs';
import Collections from '../components/Home-section/Collections';
import Testimonials from '../components/Home-section/Testimonials';
import FinalCTA from '../components/Home-section/FinalCTA';

import CurtainReveal from '../components/Home-section/CurtainReveal';

const Home = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <Helmet>
        <title>Manoj Brothers Extension (MB Extension) | Wholesale Flooring & Furnishing Hyderabad | PVC Vinyl, Artificial Grass, Carpets</title>
        <meta name="description" content="Hyderabad's massive wholesale stock of PVC Vinyl Flooring, Artificial Grass, Wallpapers, and Industrial Foams. One-stop shop for architects and interior designers in Gowliguda." />
        <meta name="keywords" content="Wholesale PVC Flooring Hyderabad, Artificial Grass Dealers, Vinyl Rolls Bulk, Industrial Foam Suppliers, Carpet And Rugs Wholesale, Wallpaper Shop Gowliguda" />
      </Helmet>
      <CurtainReveal />
      <HeroSection />
      <BestSellers />
      <WhyChooseUs />
      <Collections />
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default Home;