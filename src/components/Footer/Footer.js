import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import logo from "../../assests/SR-Logo.png";

const Footer = () => {
  return (
    <footer className="sr-footer bg-dark text-light">
      <Container fluid className="">
        <Row className="sr-footer-top">
          <Col lg={4} md={6} className="mb-4 sr-footer-contact">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="Logo" className="sr-footer-logo" />
            </div>
            <p className="sr-footer-description">
              Stay up to date with Doors and receive emails highlighting news, events, and innovative tools.
            </p>
            <Button variant="primary" className="sr-footer-button">
              Contact <span className="ms-2">&rarr;</span>
            </Button>
          </Col>
          <Col lg={8} md={8} className="sr-footer-links">
            <Row>
              <Col md={4} xs={6}>
                <ul className="list-unstyled">
                  <li><Link to="/residentialdoors">Residential Doors</Link></li>
                  <li><Link to="/commercialdoors">Commercial Doors</Link></li>
                  <li><Link to="/residentialwindows">Residential Windows</Link></li>
                  {/* <li><Link to="/schoolfurniture">School Furniture</Link></li> */}
                  <li><Link to="/product">SR-Steel Doors</Link></li>
                </ul>
              </Col>
              <Col md={4} xs={6}>
                <ul className="list-unstyled">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/product">Our Products</Link></li>
                  <li><Link to="/gallery">Gallery Section</Link></li>
                  <li><Link to="/technical">Technical</Link></li>
                </ul>
              </Col>
              <Col md={4} xs={12}>
                <ul className="list-unstyled">
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/contact">Request a Quote</Link></li>
                  <li><Link to="/product">Our Services</Link></li>
                  <li><Link to="/">Privacy</Link></li>
                  <li><Link to="/">Policies</Link></li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg={3} className="d-none">{/* Reserved if needed */}</Col>
        </Row>

        <hr className="sr-footer-divider" />

        <Row className="sr-footer-bottom text-center align-items-center">
          <Col md={6} className="text-md-start mb-2 mb-md-0">
            <p>
              ©2025 SR-Steel Doors. All rights reserved{' '} <a href="https://digispheretech.in/" target="_blank" rel="noopener noreferrer">Digisphere</a>
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <span className="sr-footer-affiliates ms-3">
              <a href="/" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="https://www.facebook.com/share/197EQJiccb/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/srsteeldoors4u?igsh=MXhtaGxzcGxydjhxMQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                <FaInstagram />
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
