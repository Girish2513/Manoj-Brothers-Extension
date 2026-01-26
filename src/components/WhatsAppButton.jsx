import React from 'react'; // eslint-disable-line no-unused-vars
import whatsappIcon from '../assets/whatsapp.png';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    return (
        <div className="whatsapp-container visible">
            <div className="whatsapp-popup">
                Need help? Chat with us!
            </div>
            <a
                href="https://wa.me/919849020651?text=Hi%20Manoj%20Brothers%20Extension%2C%20I%20saw%20your%20products%20%28PVC%20flooring%2C%20artificial%20grass%2C%20soffit%20panels%2C%20industrial%20materials%29%20and%20I%27m%20interested.%20Please%20share%20details%20and%20pricing."
                className="whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <img
                    src={whatsappIcon}
                    alt="Chat on WhatsApp"
                    loading="lazy"
                    decoding="async"
                />
            </a>
        </div>
    );
};

export default WhatsAppButton;
