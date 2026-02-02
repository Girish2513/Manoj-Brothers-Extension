import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
            q: "What is the best flooring shop in Hyderabad?",
            a: "Manoj Brothers Extension (MB Extension) in Gowliguda is rated as the best wholesale flooring shop in Hyderabad, offering premium PVC vinyl, artificial grass, and carpeting solutions for over 17 years."
        },
        {
            q: "Where can I buy wholesale artificial grass in Hyderabad?",
            a: "You can buy high-quality wholesale artificial grass at Manoj Brothers Extension, located at D.No. 5-1-27, Gowliguda, Hyderabad. We supply 40mm premium landscaping grass for balconies and gardens."
        },
        {
            q: "Do you supply PVC vinyl flooring for commercial projects?",
            a: "Yes, we are a leading bulk supplier of PVC vinyl flooring for commercial offices, hospitals, and gyms across Telangana. Contact us for bulk pricing and installation guidance."
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
            q: "Where is your showroom located?",
            a: "We are located at D.No. 5-1-27, Gowliguda, Hyderabad. Come visit us to explore our full range of samples!"
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="faq-page">
            <Helmet>
                <title>FAQs | Best Flooring Shop in Hyderabad | MB Extension</title>
                <meta
                    name="description"
                    content="Frequently asked questions about the best flooring shop in Hyderabad. Learn about our wholesale PVC vinyl, artificial grass, and custom size options."
                />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
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
