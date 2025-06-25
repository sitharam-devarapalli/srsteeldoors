import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';

import gallery1 from '../../assests/Gallery/Gallery-1.jpg';
import gallery2 from '../../assests/Gallery/Gallery-2.jpg';
import gallery3 from '../../assests/Gallery/Gallery-3.jpg';
import gallery4 from '../../assests/Gallery/Gallery-4.jpg';
import gallery5 from '../../assests/Gallery/Gallery-5.jpg';
import gallery6 from '../../assests/Gallery/Gallery-6.jpg';
import gallery7 from '../../assests/Gallery/Gallery-7.jpg';
import gallery8 from '../../assests/Gallery/Gallery-8.jpg';
import gallery9 from '../../assests/Gallery/Gallery-9.jpg';
import gallery10 from '../../assests/Gallery/Gallery-10.jpg';
import gallery11 from '../../assests/Gallery/Gallery-11.jpg';
import gallery12 from '../../assests/Gallery/Gallery-12.jpg';


import galleryBanner from '../../assests/gallerysection-banner.jpg';


const galleryItems = [
    { src: gallery1, title: 'Dark Modern Kitchen', category: 'Kitchens' },
    { src: gallery2, title: 'Bright Yellow Cabinetry', category: 'Kitchens, Panels' },
    { src: gallery3, title: 'Minimal Style', category: 'Kitchens' },
    { src: gallery4, title: 'White Island Design', category: 'Modern' },
    { src: gallery5, title: 'Grey Wood Blend', category: 'Panels' },
    { src: gallery6, title: 'Luxury Kitchen', category: 'Custom' },
    { src: gallery7, title: 'Elegant Setup', category: 'Interior' },
    { src: gallery8, title: 'Functional Layout', category: 'Utility' },
    { src: gallery9, title: 'Stylish Space', category: 'Modern' },
    { src: gallery10, title: 'Warm Finish', category: 'Classic' },
    { src: gallery11, title: 'Open Concept', category: 'Minimalist' },
    { src: gallery12, title: 'Functional Layout', category: 'Utility' },
];

const GallerySection = () => {
    const [visibleCount, setVisibleCount] = useState(9);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 100); // delay to allow animation
    }, []);

    const handleToggleView = () => {
        setVisibleCount(prev => (prev === 9 ? galleryItems.length : 9));
    };

    return (
        <section className="sr-gallery-section">
            <div className="contact-page-banner">
                <img src={galleryBanner} alt="Contact Banner" />
                <div className="contact-page-banner-heading">Gallery Section</div>
            </div>
            <div className="container-fluid sr-gallery-section-container">
                <div className="row g-4">
                    {galleryItems.slice(0, visibleCount).map((item, index) => (
                        <div
                            className={`col-md-4 sr-gallery-column ${loaded ? 'animate' : ''}`}
                            key={index}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="sr-gallery-card">
                                <img src={item.src} alt={item.title} className="img-fluid w-100" />
                                <div className="text-center mt-3">
                                    <h5 className="fw-bold text-white">{item.title}</h5>
                                    <p className="text-white small">{item.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {galleryItems.length > 9 && (
                    <div className="text-center mt-4">
                        <button className="btn btn-outline-light" onClick={handleToggleView}>
                            {visibleCount === 9 ? 'See More' : 'See Less'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GallerySection;
