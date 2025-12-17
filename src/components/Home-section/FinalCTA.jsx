
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './FinalCTA.css';

const FinalCTA = () => {
    return (
        <section className="final-cta">
            <div className="container cta-content">
                <h2 className="cta-title">Ready to Elevate Your Space?</h2>
                <p className="cta-subtitle">Experience the pinnacle of flooring innovation. Visit our showroom or request a premium catalog today.</p>
                <div className="cta-buttons">
                    <Link to="/contact" className="btn btn-black">Get in Touch <ArrowRight size={16} /></Link>
                    <Link to="/products" className="btn btn-outline-black">View Catalog</Link>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
