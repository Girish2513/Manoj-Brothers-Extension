import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    const modalContentRef = useRef(null);
    const previousFocusRef = useRef(null);

    // Close on Escape key press
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Focus trap and restore focus
    useEffect(() => {
        previousFocusRef.current = document.activeElement;

        const content = modalContentRef.current;
        if (!content) return undefined;

        const focusableSelectors = [
            'a[href]',
            'button:not([disabled])',
            'textarea',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="tel"]',
            'select',
            '[tabindex]:not([tabindex="-1"])'
        ];

        const setInitialFocus = () => {
            const nodes = content.querySelectorAll(focusableSelectors.join(','));
            const first = nodes[0];
            if (first) {
                first.focus();
            } else {
                content.setAttribute('tabindex', '-1');
                content.focus();
            }
        };

        setInitialFocus();

        const handleKeyDown = (e) => {
            if (e.key !== 'Tab') return;
            const focusable = Array.from(content.querySelectorAll(focusableSelectors.join(',')));
            if (!focusable.length) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        content.addEventListener('keydown', handleKeyDown);
        return () => {
            content.removeEventListener('keydown', handleKeyDown);
            if (previousFocusRef.current && previousFocusRef.current.focus) {
                previousFocusRef.current.focus();
            }
        };
    }, []);

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={product.title}
                ref={modalContentRef}
            >
                <button className="close-btn" onClick={onClose} aria-label="Close">
                    &times;
                </button>

                <div className="modal-body">
                    <div className="modal-image-container">
                        <img src={product.img} alt={product.title} className="modal-img" loading="lazy" decoding="async" />
                    </div>

                    <div className="modal-details">
                        <span className="modal-category">{product.category}</span>
                        <h2 className="modal-title">{product.title}</h2>
                        <p className="modal-desc">
                            {product.desc}
                            {product.line1 && ` ${product.line1}`}
                            {product.line2 && ` ${product.line2}`}
                        </p>
                        {/* <p className="modal-desc" style={{ fontSize: '0.95rem', fontStyle: 'italic', marginTop: '-1rem' }}>
                            Note: This is a sample description. In a real app, this would contain detailed specs like thickness, material composition, or roll dimensions.
                        </p> */}

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
