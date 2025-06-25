import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assests/SR-Logo.png';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [clickedOnce, setClickedOnce] = useState(false); // track first tap on mobile

  const handleMouseEnter = () => {
    if (window.innerWidth >= 992) {
      setShowDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 992) {
      setShowDropdown(false);
    }
  };

  const handleDropdownClick = (e) => {
    if (window.innerWidth < 992) {
      e.preventDefault(); // stop default link behavior
      if (!clickedOnce) {
        setShowDropdown(true);
        setClickedOnce(true);
      } else {
        window.location.href = '/product'; // second tap navigates
      }
    }
  };

  return (
    <div className="sr-steel-hero-wrapper">
      <Navbar expand="lg" variant="dark" className="sr-steel-navbar fixed-top">
        <Container fluid className="sr-steel-container">
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logo} alt="JSR Steel Doors" className="sr-steel-logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar-nav" />

          <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
            <Nav className="sr-steel-nav-links">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>

              <NavDropdown
                title={
                  <span
                    className="nav-link-custom"
                    onClick={handleDropdownClick}
                  >
                    Products
                  </span>
                }
                show={showDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
>
                <NavDropdown.Item href="/residentialdoors">Residential Doors</NavDropdown.Item>
                <NavDropdown.Item href="/residentialwindows">Residential Windows</NavDropdown.Item>
                <NavDropdown.Item href="/commercialdoors">Commercial Doors</NavDropdown.Item>
                {/* <NavDropdown.Item href="/schoolfurniture">School Furniture</NavDropdown.Item> */}
              </NavDropdown>

              <Nav.Link href="/gallery">Gallery</Nav.Link> 
              <Nav.Link href="/technical">Technical</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
