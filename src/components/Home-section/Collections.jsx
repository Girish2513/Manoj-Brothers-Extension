
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Collections.css';

// Importing existing images for collage
import carpetImg from '../../assets/beige-carpet.jpg';
import curtainImg from '../../assets/black-curtain.jpg';
import grassImg from '../../assets/Green_Artificial_Grass.jpeg';

const collections = [
    {
        id: 1,
        title: 'Interiors',
        subtitle: 'Carpets & Blinds',
        image: carpetImg,
        size: 'large'
    },
    {
        id: 2,
        title: 'Exterior',
        subtitle: 'Artificial Grass',
        image: grassImg,
        size: 'small'
    },
    {
        id: 3,
        title: 'Furnishing',
        subtitle: 'Luxury Curtains',
        image: curtainImg,
        size: 'tall'
    }
];

const Collections = () => {
    return (
        <section className="collections-section section-padding">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Explore</span>
                    <h2 className="section-title">Our Collections</h2>
                </div>

                <div className="collections-grid">
                    {collections.map((item) => (
                        <Link to="/products" key={item.id} className={`collection-card ${item.size}`}>
                            <img src={item.image} alt={item.title} className="collection-img" />
                            <div className="collection-overlay">
                                <div className="collection-content">
                                    <span className="collection-subtitle">{item.subtitle}</span>
                                    <h3 className="collection-title">{item.title}</h3>
                                    <span className="collection-link">
                                        Explore <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collections;
