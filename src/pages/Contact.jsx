import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact Us | Manoj Brothers Extension</title>
                <meta name="description" content="Visit our showroom in Hyderabad or contact us for your interior needs. 98490 20651" />
            </Helmet>
            {/* Hero Section */}
            <section className="contact-hero">
                <h1 className="contact-title">Get in Touch</h1>
                <p className="contact-subtitle">
                    Have a project in mind? Visit our showroom or send us a message. We're here to help you find the perfect materials.
                </p>
            </section>

            <div className="contact-content">
                {/* Contact Info */}
                <div className="contact-info-card">
                    <div>
                        <div className="info-item">
                            <span className="info-label">Visit Showroom</span>
                            <div className="info-value">
                                D.No. 5-1-27, Gowliguda<br />
                                Hyderabad, Telangana
                            </div>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Call Us</span>
                            <div className="info-value">
                                <a href="tel:+919849020651">98490 20651</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Email Us</span>
                            <div className="info-value">
                                <a href="mailto:manojextension@gmail.com">manojextension@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="info-item" style={{ marginBottom: 0 }}>
                        <span className="info-label">Opening Hours</span>
                        <div className="info-value">
                            Mon - Sat: 10:00 AM - 8:00 PM<br />
                            Sunday: Closed
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-card">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-input" placeholder="Your Name" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-input" placeholder="your@email.com" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Phone</label>
                            <input type="tel" className="form-input" placeholder="+91" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea className="form-textarea" placeholder="Tell us about your project requirements..."></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
