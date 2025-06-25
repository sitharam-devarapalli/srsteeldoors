import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './AboutUs.css';
import doorImg from '../../assests/about-img-1.jpg';
import windowImg from '../../assests/about-img-2.jpg';

import aboutBanner from '../../assests/aboutus-banner.jpg';

// import bgImage from '../../assests/appointment-bg.jpg';

// Latest images
import img1 from '../../assests/latest-img-1.jpg';
import img2 from '../../assests/latest-img-2.jpg';
import img3 from '../../assests/latest-img-3.jpg';
import img4 from '../../assests/latest-img-4.jpg';


// teams 
import member1 from '../../assests/women-img.jpg';
import member2 from '../../assests/men-img.jpg';
// import member3 from '../../assests/team3.jpg';
// import member4 from '../../assests/team4.jpg';

// Icon Images
import icon1 from '../../assests/Best-Price.png';
import icon2 from '../../assests/Factory-Made.png';
import icon3 from '../../assests/Custom-Made.png';
import icon4 from '../../assests/Wood-From-Sustainable-Forest.png';
import icon5 from '../../assests/Natural-Wood.png';
import icon6 from '../../assests/Quick-Delivery.png';

import visionIcon from '../../assests/vission.png';
import missionIcon from '../../assests/mission.png';
import valuesIcon from '../../assests/value.png';


const features = [
    { icon: icon1, title: 'Best Price' },
    { icon: icon2, title: 'Factory Made' },
    { icon: icon3, title: 'Custom Made' },
    { icon: icon4, title: 'Wood From Sustainable Forest' },
    { icon: icon5, title: '100% Natural Wood' },
    { icon: icon6, title: 'Quick Delivery' }
];

const images = [
    {
        src: img3,
        title: 'Front Door',
        description: 'Quality'
    },
    {
        src: img2,
        title: 'Lake View',
        description: 'Modern Interior'
    },
    {
        src: img1,
        title: 'Office Chair',
        description: 'Comfort & Style'
    },
    {
        src: img4,
        title: 'Office Chair',
        description: 'Comfort & Style'
    }
];


const testimonials = [
    {
        name: 'Ram.K',
        feedback: 'Excellent quality and design! SR-Steel Doors made and installed our main door perfectly. Professional team and on-time delivery!',
    },
    {
        name: 'Rajesh',
        feedback: 'Highly recommend SR-Steel Doors for residential and commercial needs. They handled everything from design to installation smoothly.',
    },
    {
        name: 'Madhu Kumari',
        feedback: 'Their woodwork is top class! We got custom doors and windows fitted, and the finish was just perfect. Great service!',
    },
    {
        name: 'D.Suresh',
        feedback: 'From design to delivery, everything was handled professionally. Quality materials and neat fitting. Very satisfied!',
    },
    {
        name: 'Dinesh.M',
        feedback: 'SR-Steel Doors is my go-to for all door and window work. Best quality, affordable pricing, and excellent customer support.',
    },
];



const AboutUs = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    const testimonialSliderRef = useRef(null);  // For reviews
    const teamSliderRef = useRef(null);         // For team section

    const counters = [
        { label: 'Offices', value: 90, suffix: '+' },
        { label: 'Happy Clients', value: 2548 },
        { label: 'Years', value: 25, suffix: '+' },
        { label: 'Projects', value: 256 },
    ];

    useEffect(() => {
        const updateItemsPerView = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setItemsPerView(1);
            } else if (width <= 1024) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }
        };

        updateItemsPerView(); // set initially
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    const handlePrev = () => {
        setScrollIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        const maxIndex = Math.ceil(images.length - itemsPerView);
        setScrollIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const teamMembers = [
        { name: 'VERONICA ISBAN', position: 'Executive VP of Risk and HR,\nGeneral Counsel, Form Tech', img: member1 },
        { name: 'DAVID ANGELL', position: 'CEO, Form Technologies', img: member2 },
        { name: 'REZA MESSDAGHI', position: 'President, Dynacast', img: member1 },
        { name: 'JOSEF UNGERHOFER', position: 'EVP, Dynacast', img: member2 },
        { name: 'ZACK MCCORKLE', position: 'CFO, Form Technologies', img: member1 }
    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false, // Disable default arrows
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    const prevTestimonialSlide = () => {
        testimonialSliderRef.current?.slickPrev();
    };

    const nextTestimonialSlide = () => {
        testimonialSliderRef.current?.slickNext();
    };

    const prevTeamSlide = () => {
        teamSliderRef.current?.slickPrev();
    };

    const nextTeamSlide = () => {
        teamSliderRef.current?.slickNext();
    };


    return (
        <div className="sr-aboutus-about-wrapper">
            <div className="contact-page-banner">
                <img src={aboutBanner} alt="Contact Banner" />
                <div className="contact-page-banner-heading">About Us</div>
            </div>
            <Container>
                <Row className="align-items-center sr-aboutus-about-row">
                    {/* Left Images */}
                    <Col md={6} className="sr-aboutus-about-images">
                        <div className="sr-aboutus-about-door-image">
                            <img src={doorImg} alt="Wooden Door" />
                        </div>
                        <div className="sr-aboutus-about-window-image">
                            <img src={windowImg} alt="Glass Window" />
                        </div>
                    </Col>

                    {/* Right Content */}
                    <Col md={6} className="sr-aboutus-about-content">
                        <p className="sr-aboutus-about-subtitle">PREMIUM QUALITY</p>
                        <h2 className="sr-aboutus-about-title">Your Comfort Is Our<br />Only Priority</h2>
                        <p className="sr-aboutus-about-description">
                            SR-Steel Doors is a trusted name in custom door and window solutions, serving both homes and businesses. We specialize in the design, manufacturing, fitting, and delivery of premium-quality doors and windows, along with expert woodwork services. </p>
                        <p className="sr-aboutus-about-description">
                            With 15 years of experience and a team of skilled professionals, we handle every project with care, precision, and professionalism. Whether it's a main door, interior woodwork, or a complete door setup, SR-Steel Doors is your one-stop solution for quality, style, and long-lasting durability.
                        </p>
                        <Link to="/product" className="sr-aboutus-about-button btn">
                            Shop Doors & Windows
                        </Link>
                    </Col>
                </Row>

                <Row className="text-center justify-content-center py-5">
                    {counters.map((item, index) => (
                        <Col key={index} xs={6} md={3} className="aboutus-numbercount-item">
                            <p className="aboutus-numbercount-label">{item.label}</p>
                            <h2 className="aboutus-numbercount-value">
                                <CountUp
                                    start={0}
                                    end={item.value}
                                    duration={2.5}
                                    suffix={item.suffix || ''}
                                />
                            </h2>
                        </Col>
                    ))}
                </Row>
            </Container>

            <section className="about-latest-section container-fluid">
                <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                        <h6 className="text-uppercase text-white">Various Services</h6>
                        <h2 className="fw-bold text-white">Recent Projects</h2>
                        <p className="text-white" style={{ maxWidth: '600px' }}>
                            Check out our latest door and window installations showcasing quality craftsmanship and stylish designs.
                        </p>
                    </div>
                    <div className="d-flex gap-3 sr-arrows-about">
                        <button className="carousel-control-prev bg-transparent border-0" onClick={handlePrev}>
                            <span className="carousel-control-prev-icon" />
                        </button>
                        <button className="carousel-control-next bg-transparent border-0" onClick={handleNext}>
                            <span className="carousel-control-next-icon" />
                        </button>
                    </div>
                </div>

                <div className="slider-wrapper position-relative overflow-hidden">
                    <div
                        className="slider-track d-flex"
                        style={{
                            transform: `translateX(-${scrollIndex * (100 / itemsPerView)}%)`,
                        }}
                    >
                        {images.map((img, i) => (
                            <div className="slider-item position-relative" key={i}>
                                <img src={img.src} className="w-100 about-latest-img" alt={img.title} />
                                <div className="about-latest-overlay position-absolute bottom-0 start-0 w-100 p-3">
                                    <h5 className="text-white fw-bold mb-1">{img.title}</h5>
                                    <p className="text-white mb-0 small">{img.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* our vission and mission  */}
            <section className="sr-vision-section py-3">
                <Container>
                    <div className="text-center mb-4">
                        <p className="sr-vision-subtitle">About Us</p>
                        <h2 className="sr-vision-title">Our Mission and Vision Statement</h2>
                    </div>
                    <Row className="text-center">
                        <Col md={4} className="sr-vision-card border-right">
                            <img src={visionIcon} alt="Vision Icon" className="sr-vision-icon mb-3" />
                            <h4 className="sr-vision-card-title">Vision</h4>
                            <p className="sr-vision-text">
                                To be a leading brand in India for premium doors, windows, and woodwork — known for quality, innovation, and unmatched customer satisfaction.                            </p>
                        </Col>
                        <Col md={4} className="sr-vision-card border-right">
                            <img src={missionIcon} alt="Mission Icon" className="sr-vision-icon mb-3" />
                            <h4 className="sr-vision-card-title">Mission</h4>
                            <p className="sr-vision-text">
                                At SR-Steel Doors, our mission is to provide strong, stylish doors and windows with expert craftsmanship and timely service, ensuring full customer satisfaction.                            </p>
                        </Col>
                        <Col md={4} className="sr-vision-card">
                            <img src={valuesIcon} alt="Values Icon" className="sr-vision-icon mb-3" />
                            <h4 className="sr-vision-card-title">Values</h4>
                            <p className="sr-vision-text">
                                At SR-Steel Doors, our values are built on integrity, trust, and ethics, supported by innovation, teamwork, and commitment. We focus on continuous growth and achieving our goals while delivering the best to our customers.                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* review section  */}
            <section className="sr-review-section">
                <Container>
                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                        <div className="text-center text-md-start">
                            <p className="sr-teams-desc text-start mb-2">People Say About Us</p>
                            <h2 className="sr-review-title m-0">Clients' Testimonials</h2>
                        </div>
                        <div className="sr-review-arrows d-flex gap-2 mt-3 mt-md-0">
                            <button onClick={prevTestimonialSlide} className="arrow-btn">
                                <FaArrowLeft />
                            </button>
                            <button onClick={nextTestimonialSlide} className="arrow-btn">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                    <Slider ref={testimonialSliderRef} {...settings}>
                        {testimonials.map((item, index) => (
                            <div key={index}>
                                <div className="sr-review-card">
                                    <div className="sr-review-stars">★★★★★</div>
                                    <p className="sr-review-text">{item.feedback}</p>
                                    <h6 className="sr-review-author">{item.name}</h6>
                                    <p className="sr-review-position">{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </section>

            {/* why choose us  */}
            <section className="sr-about-why py-5">
                <Container>
                    <Row className="align-items-center gx-5">
                        {/* Left Side */}
                        <Col lg={5}>
                            <div className="sr-about-why-content">
                                <p className="sr-about-why-subtitle mb-1">WHY</p>
                                <h2 className="sr-about-why-title">Choose Us</h2>
                                <p className="sr-about-why-description">At SR-Steel Doors, we stand out for our Purewood approach — where the natural beauty of wood meets expert craftsmanship. Every door we create isn’t just a product, it’s a piece of art designed to reflect luxury, durability, and timeless style.</p>
                                <p className="sr-about-why-description">With a wide range of wood species, finishes, and hardware, we give you complete freedom to customize your doors and windows exactly the way you imagine. Your dream design becomes a reality with SR-Steel Doors!</p>
                            </div>
                        </Col>

                        {/* Right Side */}
                        <Col lg={7}>
                            <Row className="gy-4">
                                {features.map((item, idx) => (
                                    <Col xs={6} md={4} key={idx}>
                                        <div className="why-feature-card text-center">
                                            <img src={item.icon} alt={item.title} className="why-icon mb-3" />
                                            <p className="why-title">{item.title}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* our teams  */}
            <section className="sr-teams-section py-5">
                <div className="container">
                    <p className="sr-teams-desc text-start mb-2">Our Teams</p>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="sr-teams-heading mb-0">
                            Meet the Leaders <span>That Drive Our Success</span>
                        </h2>
                        <div className="sr-teams-arrows d-flex gap-2">
                            <button className="arrow-btn" onClick={prevTeamSlide}>
                                <FaArrowLeft />
                            </button>
                            <button className="arrow-btn" onClick={nextTeamSlide}>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                    <Slider ref={teamSliderRef} {...settings}>
                        {teamMembers.map((member, idx) => (
                            <div className="sr-teams-card" key={idx}>
                                <div className="sr-teams-img-box">
                                    <img src={member.img} alt={member.name} />
                                    <div className="sr-teams-overlay">
                                        <h5>{member.name}</h5>
                                        <p>{member.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>


            <section className="sr-home-contents-section">
                <div className="sr-home-contents-overlay">
                    <Container className="sr-home-contents-container py-5">
                        <Row className="align-items-center">
                            <Col md={8}>
                                <h1 className="sr-home-contents-title">
                                    Schedule an Appointment to Meet or <br /> Email Us Your Questions
                                </h1>
                            </Col>
                            <Col md={4} className="d-flex gap-3 justify-content-md-end justify-content-start mt-3 mt-md-0">
                                <Link to="/contact" className="btn sr-home-contents-btn">Request a Quote</Link>
                                <Link to="/contact" className="btn sr-home-contents-btn">Contact Us</Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
