import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    // Close on Escape key press
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose} aria-label="Close">
                    &times;
                </button>

                <div className="modal-body">
                    <div className="modal-image-container">
                        <img src={product.img} alt={product.title} className="modal-img" />
                    </div>

                    <div className="modal-details">
                        <span className="modal-category">{product.category}</span>
                        <h2 className="modal-title">{product.title}</h2>
                        <p className="modal-desc">{product.desc}</p>
                        <p className="modal-desc" style={{ fontSize: '0.95rem', fontStyle: 'italic', marginTop: '-1rem' }}>
                            Note: This is a sample description. In a real app, this would contain detailed specs like thickness, material composition, or roll dimensions.
                        </p>

                        <Link to="/contact" className="modal-cta-btn">
                            Enquire Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
