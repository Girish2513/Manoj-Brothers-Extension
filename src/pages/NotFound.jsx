import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <p className="notfound-kicker">404</p>
        <h1 className="notfound-title">Page not found</h1>
        <p className="notfound-copy">
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
