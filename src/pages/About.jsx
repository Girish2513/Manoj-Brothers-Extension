import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MB Extension",
    "image": "",
    "description": "MB Extension is a trusted flooring and interior materials wholesaler in Hyderabad, offering PVC flooring, vinyl rolls, artificial grass, carpets, and interior solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Manoj Brothers Extension",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "telephone": "+919849025000",
    "openingHours": "Mo-Sa 10:00-20:00",
    "priceRange": "$$"
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>About MB Extension | Trusted Flooring Wholesaler in Hyderabad</title>
        <meta name="description" content="MB Extension is a trusted flooring and interior materials wholesaler in Hyderabad, built on family values and quality craftsmanship. 17+ years of experience." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <main className="about-page">
        {/* 1. Hero / Page Introduction */}
        <section className="about-hero">
          <div className="container about-hero-content">
            <h1 className="fade-up">A Hyderabad Legacy in Flooring & Interiors</h1>
            <p className="fade-up delay-1">
              MB Extension is a trusted flooring and interior materials wholesaler in Hyderabad,
              built on family values, quality craftsmanship, and long-term customer relationships.
              For over 17 years, we have supplied PVC flooring, vinyl rolls, artificial grass,
              and interior solutions to homes and businesses across Telangana.
            </p>
          </div>
        </section>

        {/* 2. Our Family’s Promise */}
        <section className="about-promise">
          <div className="container">
            <div className="promise-content">
              <h2>Our Family’s Promise</h2>
              <p>
                For over 17 years, our mission has remained simple: to provide every customer
                with honest advice, premium-quality materials, and dependable service.
                We believe we are not just suppliers, but long-term partners in every project.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Our Journey Through Time (Timeline) */}
        <section className="about-timeline">
          <div className="container">
            <h2>Our Journey Through Time</h2>
            <div className="timeline">
              <div className="timeline-line"></div>

              <div className="timeline-item left">
                <div className="timeline-content fade-in-scroll">
                  <span className="year">2008</span>
                  <h3>The Foundation</h3>
                  <p>MB Extension began in Gowliguda with a vision to become Hyderabad’s most reliable flooring and interior materials supplier.</p>
                </div>
              </div>

              <div className="timeline-item right">
                <div className="timeline-content fade-in-scroll">
                  <span className="year">2012</span>
                  <h3>Expanding Horizons</h3>
                  <p>Expanded our product portfolio to include premium PVC vinyl flooring and carpets.</p>
                </div>
              </div>

              <div className="timeline-item left">
                <div className="timeline-content fade-in-scroll">
                  <span className="year">2018</span>
                  <h3>Mastering Specialities</h3>
                  <p>Introduced advanced materials such as artificial grass and PVC membrane films.</p>
                </div>
              </div>

              <div className="timeline-item right">
                <div className="timeline-content fade-in-scroll">
                  <span className="year">Present</span>
                  <h3>A Trusted Name</h3>
                  <p>Serving thousands of residential and commercial clients across Telangana.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Pillars of Our Business */}
        <section className="about-pillars">
          <div className="container">
            <h2>The Pillars of Our Business</h2>
            <div className="pillars-grid">
              <div className="pillar-card fade-up-scroll">
                <div className="pillar-icon">01</div>
                <h3>Unmatched Expertise</h3>
                <p>Decades of hands-on experience helping customers choose the right flooring and interior materials.</p>
              </div>
              <div className="pillar-card fade-up-scroll delay-1">
                <div className="pillar-icon">02</div>
                <h3>Incredible Range</h3>
                <p>From single-room upgrades to large commercial projects, our inventory meets every requirement.</p>
              </div>
              <div className="pillar-card fade-up-scroll delay-2">
                <div className="pillar-icon">03</div>
                <h3>Customer Relationships</h3>
                <p>We build long-term partnerships based on trust, transparency, and consistent quality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Trust / Credibility Strip */}
        <section className="about-trust">
          <div className="container">
            <h2>Why MB Extension Is Trusted Across Telangana</h2>
            <ul className="trust-list">
              <li>
                <span className="check-icon">✓</span>
                17+ years of industry experience
              </li>
              <li>
                <span className="check-icon">✓</span>
                Wholesale pricing & bulk availability
              </li>
              <li>
                <span className="check-icon">✓</span>
                Wide range of PVC, vinyl & interior materials
              </li>
              <li>
                <span className="check-icon">✓</span>
                Trusted by homes, offices & commercial projects
              </li>
            </ul>
          </div>
        </section>

        {/* 6. Call to Action */}
        <section className="cta-section">
          <div className="container">
            <h2>Partner With a Trusted Flooring Wholesaler</h2>
            <p>
              Whether you’re building, renovating, or sourcing materials in bulk,
              MB Extension is here to support your project.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Contact Us</a>
              <a href="/contact" className="btn btn-outline">Visit Our Hyderabad Store</a>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default About;
