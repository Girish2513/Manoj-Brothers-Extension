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
        <title>Manoj Brothers Extension (MB) | Best Flooring & Furnishing in Hyderabad</title>
        <meta name="description" content="Welcome to Manoj Brothers Extension (MB Extension). We are Hyderabad's top dealers for PVC Vinyl Flooring, Artificial Grass, Wallpapers, Carpets, and Industrial Foam. Visit our showroom in Gowliguda." />
        <meta name="keywords" content="Manoj Brothers Extension, MB Extension, Flooring Hyderabad, Artificial Grass, PVC Vinyl, Best Floor Mats, Shiv Kumar Dalmia, Cotton Coated Fabrics, Soffit Panels" />
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