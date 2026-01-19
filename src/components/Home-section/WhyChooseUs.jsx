import React, { useEffect, useRef, useState } from 'react';
import { Shield, Star, Truck, Layers } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  {
    id: 1,
    icon: <Shield size={32} />,
    title: "Premium Quality",
    desc: "Sourced from the finest global manufacturers."
  },
  {
    id: 2,
    icon: <Star size={32} />,
    title: "15+ Years Trust",
    desc: "Hyderabad’s leading wholesaler since 2008."
  },
  {
    id: 3,
    icon: <Layers size={32} />,
    title: "Wide Selection",
    desc: "Extensive collection of modern designs."
  },
  {
    id: 4,
    icon: <Truck size={32} />,
    title: "Pan-India Supply",
    desc: "Reliable logistics partner across the nation."
  }
];

const FeatureCard = ({ icon, title, desc, delay }) => {
  return (
    <div className="feature-card" style={{ animationDelay: delay }}>
      <div className="border-beam"></div>
      <div className="card-inner">
        <div className="icon-wrapper">{icon}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      className={`why-choose-us section-padding ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-header-left">
          {/* RED LINE TOP */}
          <div className="red-line"></div>

          <h2 className="title-large">
            Why <br /> Professionals <br /> Choose Us.
          </h2>

          {/* RED LINE BOTTOM */}
          <div className="red-line"></div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
              delay={`${index * 100}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;