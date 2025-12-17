import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                {question}
                <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
                <p>{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            q: "Do you offer installation services?",
            a: "Yes, we provide professional installation for all our products, including PVC flooring, artificial grass, and wallpapers, ensuring a perfect finish."
        },
        {
            q: "Can I get a custom size for carpets or mats?",
            a: "Absolutely! We specialize in custom-cut solutions. Visit our showroom or contact us with your dimensions for a tailored quote."
        },
        {
            q: "Are the PVC floorings water-resistant?",
            a: "Yes, our PVC vinyl floorings are 100% water-resistant, making them ideal for kitchens, bathrooms, and high-moisture areas."
        },
        {
            q: "Do you deliver bulk orders for commercial projects?",
            a: "Yes, we supply materials for large-scale commercial projects, exhibitions, and offices. Contact us for bulk pricing and delivery schedules."
        },
        {
            q: "Where is your showroom located?",
            a: "We are located at D.No. 5-1-27, Gowliguda, Hyderabad. Come visit us to explore our full range of samples!"
        }
    ];

    return (
        <div className="faq-page">
            <section className="faq-hero">
                <h1 className="faq-title">Frequently Asked Questions</h1>
                <p className="faq-subtitle">Everything you need to know about our products and services.</p>
            </section>

            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.q} answer={faq.a} />
                ))}

                <div className="faq-cta-box">
                    <h3 className="faq-cta-title">Still have questions?</h3>
                    <p>We're here to help.</p>
                    <Link to="/contact" className="faq-cta-link">Contact our support team &rarr;</Link>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
