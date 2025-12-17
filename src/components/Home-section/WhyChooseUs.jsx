
import React from 'react';
import { Star, Shield, Truck, Clock } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
    {
        icon: <Shield size={32} />,
        title: 'Premium Quality',
        desc: 'Sourced from the finest global manufacturers.'
    },
    {
        icon: <Star size={32} />,
        title: '15+ Years Trust',
        desc: 'Hyderabad’s leading wholesaler since 2008.'
    },
    {
        icon: <Clock size={32} />,
        title: 'Quick Installation',
        desc: 'Expert team for swift & perfect fitting.'
    },
    {
        icon: <Truck size={32} />,
        title: 'Pan-India Supply',
        desc: 'Reliable logistics partner across the nation.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="features-section section-padding">
            <div className="container">
                <div className="features-grid">
                    <div className="features-header">
                        <h2 className="features-title">Why Professionals <br />Choose Us.</h2>
                        <div className="features-decorator"></div>
                    </div>

                    <div className="features-list">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3 className="feature-name">{feature.title}</h3>
                                <p className="feature-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
