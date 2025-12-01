import React from 'react';
import HeroSection from '../components/Home-section/HeroSection';
import BestSellers from '../components/Home-section/BestSellers';
import AboutUs from '../components/Home-section/AboutUs';
import Gallery from '../components/Home-section/Gallery';
import Testimonials from '../components/Home-section/Testimonials';
import Contact from '../components/Home-section/Contact';
import './Home.css';

// Import your background image
import bgImage from '../assets/background.jpeg'; 

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Overlay div ensures text is readable and creates the dark tint over the image */}
      <div className="home-overlay">
        
        {/* The 6 Sections stacked vertically */}
        <HeroSection />
        <BestSellers />
        <AboutUs />
        <Gallery />
        <Testimonials />
        <Contact />
        
      </div>
    </div>
  );
};

export default Home;