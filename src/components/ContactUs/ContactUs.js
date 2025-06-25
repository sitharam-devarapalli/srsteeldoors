import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import contactBanner from '../../assests/contact-page-banner.jpg';
import contactSidePic from '../../assests/contact-side-pic.jpg';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    subject: '',
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = 'First Name is required';
    if (!form.lastName) newErrors.lastName = 'Last Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email format';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setShowSuccess(true);
    setTimeout(() => {
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        subject: '',
      });
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Banner */}
      <div className="contact-page-banner">
        <img src={contactBanner} alt="Contact Banner" />
        <div className="contact-page-banner-heading">Contact Us</div>
      </div>

      {/* Contact Info Icons */}
      <Container className="my-5">
        <Row className="justify-content-center text-center contact-page-info-section">
          <Col md={6} sm={12} className="contact-page-info-item">
            <div className="contact-page-icon-wrapper"><FaMapMarkerAlt /></div>
            <p className="contact-page-info">RS NO. 247/1, NUZVID ROAD, Nunna, Vijayawada-521212</p>
          </Col>
          <Col md={6} sm={12} className="contact-page-info-item">
            <div className="contact-page-icon-wrapper"><FaPhoneAlt /></div>
            <a href="tel:+919550232239" className="contact-page-info text-decoration-none" aria-label="Call us at 9550232239">
              +91 9550232239
            </a>
          </Col>
          {/* <Col md={4} sm={12} className="contact-page-info-item">
            <div className="contact-page-icon-wrapper"><FaEnvelope /></div>
            <a href="mailto:info@yoursite.com" className="contact-page-info text-decoration-none">sbreddyj@gmail.com</a>
          </Col> */}
        </Row>
      </Container>

      {/* Contact Form & Image */}
      <Container className='contactus-form-addd'>
        <Row className="contact-page-content g-0">
          {/* Image */}
          <Col md={6} xs={12} className="contact-page-image">
            <img src={contactSidePic} alt="Contact Side" />
          </Col>

          {/* Form */}
          <Col md={6} xs={12} className="contact-page-form">
            <h4 className="mb-3">Contact Us</h4>
            {showSuccess && <Alert variant="success">Message sent successfully!</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>First Name*</Form.Label>
                <Form.Control
                  type="text"
                  id="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className={`contact-page-input ${errors.firstName ? 'is-invalid' : ''}`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <div className="contact-page-invalid-feedback">{errors.firstName}</div>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name*</Form.Label>
                <Form.Control
                  type="text"
                  id="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className={`contact-page-input ${errors.lastName ? 'is-invalid' : ''}`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <div className="contact-page-invalid-feedback">{errors.lastName}</div>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address*</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`contact-page-input ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Enter your email"
                />
                {errors.email && <div className="contact-page-invalid-feedback">{errors.email}</div>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  className="contact-page-input"
                  placeholder="Your message"
                />
              </Form.Group>

              <Button type="submit" className="contact-page-btn-submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
