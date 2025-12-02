import React from 'react';
import './CurtainReveal.css';

const CurtainReveal = () => {
  return (
    <div className="curtain-overlay">
      <div className="curtain-content">
        {/* We can show the logo briefly before the curtain lifts */}
        <h1 className="curtain-logo">
          <span className="mb-red">MB</span> Extension
        </h1>
      </div>
    </div>
  );
};

export default CurtainReveal;