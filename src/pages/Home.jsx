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
        <title>Home | Manoj Brothers Extension</title>
        <meta name="description" content="Explore our premium collection of flooring, artificial grass, and interior solutions. Transform your space with Manoj Brothers Extension." />
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