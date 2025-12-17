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
                href="https://wa.me/919849020651"
                className="whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <img
                    src={whatsappIcon}
                    alt="Chat on WhatsApp"
                />
            </a>
        </div>
    );
};

export default WhatsAppButton;
