// src/pages/About.jsx
import React from 'react';
import './About.css';
import './Home.css'; // Re-using general section styling from Home

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>A Hyderabad Legacy</h1>
          <p>The Manoj Brothers Extension Story</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-pad">
        <div className="container">
          <div className="mission-flex">
            <div className="half-width">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032" 
                className="mission-img" 
                alt="Family Business" 
              />
            </div>
            <div className="half-width">
              <h2 className="section-title" style={{textAlign: 'left'}}>Our Family's Promise</h2>
              <p style={{fontSize: '1.1rem', color: '#4b5563'}}>
                For over 17 years, our mission has been simple: to provide every customer with 
                unparalleled quality, honest advice, and the perfect materials to build their dreams. 
                We're not just suppliers; we are partners in your project's success, carrying a 
                legacy of trust into every transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-pad" style={{backgroundColor: '#f9fafb'}}>
        <div className="container">
          <h2 className="section-title">Our Journey Through Time</h2>
          
          <div className="timeline-container">
            {[
              { year: "2008", title: "The Foundation", text: "The first stone is laid in Gowliguda, with a vision to become Hyderabad's most reliable source." },
              { year: "2012", title: "Expanding Horizons", text: "Expanded portfolio to include premium PVC Vinyl Flooring and carpets." },
              { year: "2018", title: "Mastering Specialities", text: "Introduced specialized materials like Artificial Grass and PVC Membrane Film." },
              { year: "Present", title: "A Trusted Name", text: "Serving thousands of homes and industries across Telangana." },
            ].map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 className="timeline-year">{item.year}: {item.title}</h3>
                <p style={{color: '#4b5563'}}>{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-pad">
        <div className="container">
          <h2 className="section-title">The Pillars of Our Business</h2>
          <div className="pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon-circle">1</div>
              <h3>Unmatched Expertise</h3>
              <p style={{color: '#666'}}>We leverage decades of experience to ensure you get the right product for your specific needs.</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-icon-circle">2</div>
              <h3>Incredible Range</h3>
              <p style={{color: '#666'}}>From a single roll to a commercial project, our inventory meets any requirement.</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-icon-circle">3</div>
              <h3>Customer Relationships</h3>
              <p style={{color: '#666'}}>We build long-term relationships based on trust and mutual respect.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;