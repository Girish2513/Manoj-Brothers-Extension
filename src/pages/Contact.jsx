import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState('');

  // Google Apps Script URL from ENV (Vercel-safe)
  const GOOGLE_APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      setStatus('error');
      setStatusMessage('Please enter your name');
      return;
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      setStatus('error');
      setStatusMessage('Please enter a valid email');
      return;
    }

    if (!formData.phone.trim()) {
      setStatus('error');
      setStatusMessage('Please enter your phone number');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Please enter your message');
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          ...formData,
          source: 'MB Extension Website',
        }),
      });

      const text = await response.text();
      let result;

      try {
        result = JSON.parse(text);
      } catch {
        throw new Error('Invalid server response');
      }

      if (result.success) {
        setStatus('success');
        setStatusMessage('✓ Thank you! We will get back to you shortly.');

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });

        setTimeout(() => {
          setStatus('idle');
          setStatusMessage('');
        }, 5000);
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage(
        'Failed to send message. Please try again or call us directly.'
      );
    }
  };

  return (
    <div className="contact-page" id="main-content">
      <Helmet>
        <title>Contact Us | Manoj Brothers Extension</title>
        <meta
          name="description"
          content="Visit our showroom in Hyderabad or contact us for flooring, furnishing, and interior materials. Call 98490 20651."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="contact-hero">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Have a project in mind? Visit our showroom or send us a message. We're
          here to help you find the perfect materials.
        </p>
      </section>

      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info-card">
          <div>
            <div className="info-item">
              <span className="info-label">Visit Showroom</span>
              <div className="info-value">
                D.No. 5-1-27, Gowliguda
                <br />
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
                <a href="mailto:manojextension@gmail.com">
                  manojextension@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="info-item" style={{ marginBottom: 0 }}>
            <span className="info-label">Opening Hours</span>
            <div className="info-value">
              Mon - Sat: 10:00 AM - 8:00 PM
              <br />
              Sunday: Closed
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-card">
          {statusMessage && (
            <div
              className={`form-feedback form-feedback-${status}`}
              role="alert"
            >
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="+91"
                value={formData.phone}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Tell us about your project requirements..."
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
