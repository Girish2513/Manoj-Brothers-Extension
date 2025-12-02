import React from 'react';
import HeroSection from '../components/Home-section/HeroSection';
import BestSellers from '../components/Home-section/BestSellers';
import AboutUs from '../components/Home-section/AboutUs';
import Gallery from '../components/Home-section/Gallery';
import Testimonials from '../components/Home-section/Testimonials';
import Contact from '../components/Home-section/Contact';

// CORRECTED IMPORT PATH:
// Added "/Home-section" to the path so it finds the file
import CurtainReveal from '../components/Home-section/CurtainReveal';

import './Home.css';

// Import your background image
import bgImage from '../assets/background.jpg'; 

const Home = () => {
  return (
    <div 
      className="home-container" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* The Curtain Reveal Component */}
      <CurtainReveal />

      <div className="home-overlay">
        
        <div id="home">
          <HeroSection />
        </div>

        <div id="products">
          <BestSellers />
        </div>

        <div id="about">
          <AboutUs />
        </div>

        <div id="gallery">
          <Gallery />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>

        <div id="contact">
          <Contact />
        </div>
        
      </div>
    </div>
  );
};

export default Home;