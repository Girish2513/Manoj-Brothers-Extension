import React from 'react';
import locationIcon from '../assets/google-maps-location.png'; // Updated asset name
import './LocationButton.css';

const LocationButton = () => {
    return (
        <div className="location-container">
            {/* 
              For Bottom-Left position:
              We want the Button on the far left, and the popup to its right.
              Flex direction is row (default).
              So order should be: Button, then Popup.
            */}

            <a
                href="https://maps.app.goo.gl/J5ZLjwbynqKATEeXA"
                className="location-button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Store Location"
            >
                <img
                    src={locationIcon}
                    alt="Store Location"
                    loading="lazy"
                    decoding="async"
                />
            </a>
        </div>
    );
};

export default LocationButton;
