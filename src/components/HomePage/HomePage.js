import React, { useEffect } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./HomePage.css";

import Doors from "../../assests/doors-homepage.jpg";

import durableImg from "../../assests/durableproduct.png";
import guaranteeImg from "../../assests/quality.png";
import lowpriceImg from "../../assests/low-price.png";
import satisfiedImg from "../../assests/satisfaction-client.png";

import img1 from "../../assests/door-1.jpg";
import img2 from "../../assests/door-2.jpg";
import img3 from "../../assests/door-3.jpg";
// import img4 from "../../assests/door-4.jpg";
import img5 from "../../assests/door-5.jpg";
import img6 from "../../assests/door-6.jpg";

import door1 from "../../assests/door1.jpg";
import door2 from "../../assests/door2.jpg";
import door3 from "../../assests/door3.jpg";
import door4 from "../../assests/door4.jpg";
import door5 from "../../assests/door5.jpg";

// our product 
import product1 from '../../assests/residentail-door.jpg';
import product2 from '../../assests/commercial-doors.jpg';
import product3 from '../../assests/residentail-windows.jpg';
import product4 from '../../assests/school-furniture.jpg';

// video 
import sampleVideo from '../../assests/Place Your Order.mp4'; // use your 5-sec video path


const products = [
  { src: product1, title: 'Residential Doors', description: '' },
  { src: product2, title: 'Commercial Doors', description: '' },
  { src: product3, title: 'Residential Windows', description: '' },
  { src: product4, title: 'School Furniture', description: '' }
];



const HomePage = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".sr-steel-counter");

    counters.forEach((counter) => {
      counter.innerText = "0";
      const target = +counter.getAttribute("data-target");
      const format = counter.getAttribute("data-format"); // 'k' or '+'

      const updateCount = () => {
        const current = +counter.innerText.replace(/\D/g, ""); // remove non-numeric
        const increment = target / 100;

        if (current < target) {
          counter.innerText = `${Math.ceil(current + increment)}`;
          setTimeout(updateCount, 20);
        } else {
          // Add suffix based on data-format
          if (format === "k") {
            counter.innerText = `${(target / 1000).toFixed(0)}k`;
          } else if (format === "+") {
            counter.innerText = `${target}+`;
          } else {
            counter.innerText = target.toLocaleString();
          }
        }
      };

      updateCount();
    });
  }, []);

  return (
    <div className="sr-steel-features-wrapper">
      <div className="sr-steels-carousel-wrapper">
        <div className="sr-steels-carousel-overlay">
          <Container>
            <Row className="justify-content-center align-items-center sr-steels-carousel-row">
              <Col
                md={10}
                lg={8}
                className="text-center sr-steels-carousel-content"
              >
                <h1 className="sr-steels-carousel-title">
                  Unique Furniture For Your Dream House
                </h1>
                <p className="sr-steels-carousel-description">
                  Realize your dream home with selected products to suit your
                  style, space and budget.
                </p>
                <Button className="sr-steels-carousel-button">
                  Discover New Furniture
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <section className="sr-home-product-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="sr-home-product-heading">Our Product Offerings</h2>
            <p className="sr-home-product-subheading">
              Discover our wide range of interior and furnishing solutions tailored to your style.
            </p>
          </div>

          <Row className="g-4">
            {products.map((item, index) => (
              <Col key={index} md={3} sm={6}>
                <div className="sr-home-product-card">
                  <img src={item.src} alt={item.title} className="img-fluid w-100" loading="lazy" />
                  <div className="sr-home-product-content">
                    {/* <span className="sr-home-product-number">{item.number}</span> */}
                    <h5>{item.title}</h5>
                    {item.description && <p>{item.description}</p>}
                    <Link to="/product" className="sr-home-product-btn">
                      Explore Now <span>&rarr;</span>
                    </Link>
                  </div>
                  <div className="sr-home-product-overlay"></div>
                </div>
              </Col> 
            ))}
          </Row>
        </Container>
      </section>

      <Container className="sr-steel-features-container py-5 text-center">
        {/* Top Heading */}
        <div className="sr-steel-features-heading mb-5">
          <h2>The Best Features We Provide</h2>
          <p>
            we always provide the latest products and keep up with the times in
            every product that we have provided for you,
            <br />
            you can find this feature in every product you buy
          </p>
        </div>

        {/* Feature Cards */}
        <Row className="justify-content-between sr-steel-features-cards mb-5">
          <Col md={3} sm={6} className="mb-4">
            <Card className="sr-steel-features-card text-white text-center">
              <Card.Body>
                <div className="sr-steel-features-icon-wrapper mb-3">
                  <img
                    src={durableImg}
                    alt="Durable"
                    className="sr-steel-features-img"
                    loading="lazy"
                  />
                </div>
                <Card.Title>
                  Very Durable
                  <br />
                  Product
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <Card className="sr-steel-features-card text-white text-center">
              <Card.Body>
                <div className="sr-steel-features-icon-wrapper mb-3">
                  <img
                    src={guaranteeImg}
                    alt="Guarantee"
                    className="sr-steel-features-img"
                    loading="lazy"
                  />
                </div>
                <Card.Title>Unlimited Guarantee</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <Card className="sr-steel-features-card text-white text-center">
              <Card.Body>
                <div className="sr-steel-features-icon-wrapper mb-3">
                  <img
                    src={lowpriceImg}
                    alt="Low Price"
                    className="sr-steel-features-img"
                  />
                </div>
                <Card.Title>
                  Low Prices
                  <br />
                  Premium Quality
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <Card className="sr-steel-features-card text-white text-center">
              <Card.Body>
                <div className="sr-steel-features-icon-wrapper mb-3">
                  <img
                    src={satisfiedImg}
                    alt="Client Satisfied"
                    className="sr-steel-features-img"
                  />
                </div>
                <Card.Title>Client Satisfaction</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Experience Section */}
        <Row className="align-items-center sr-steel-features-experience py-5">
          <Col md={6} className="text-center">
            {/* Top Image */}
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
              alt="Experience"
              className="img-fluid sr-steel-features-image"
              loading="lazy"
            />

            <div className="sr-steel-features-counters d-flex justify-content-around text-white text-center">
              <div>
                <h4
                  className="sr-steel-counter"
                  data-target="12000"
                  data-format="k"
                >
                  0
                </h4>
                <p>Elegant Furniture</p>
              </div>
              <div>
                <h4
                  className="sr-steel-counter"
                  data-target="900"
                  data-format="+"
                >
                  0
                </h4>
                <p>Happy Customers</p>
              </div>
              <div>
                <h4
                  className="sr-steel-counter"
                  data-target="9000"
                  data-format="k"
                >
                  0
                </h4>
                <p>Fresh Interior</p>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <h2 className="text-white text-start mb-3">
              We Provide You
              <br />
              The Best Experience
            </h2>
            <p className="pppp text-start">
              Comfort is a priority to satisfy our customers, we provide all the
              furniture you can get at affordable prices, easily and quickly.
            </p>
            <img
              src={Doors}
              alt="Experience Options"
              className="img-fluid mt-4 sr-steel-features-doors"
            />
          </Col>
        </Row>

        {/* product planning video  */}
        <section className="sr-home-video-wrapper py-5">
          <p className="pppp  text-center mb-2 text-white ">Getting Started</p>
          <h2 className="text-white  mb-5 text-center">Installation Process, Warranty Details & Support</h2>
            <div className="sr-home-video-box">
              <video
                className="sr-home-video-element" loading="lazy"
                src={sampleVideo}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
        </section>


        <Row className="align-items-center py-5">
          {/* Left Column */}
          <Col md={4}>
            <div className="d-flex gap-2 mb-2">
              <Image src={img1} className="sr-steel-Furniture-half" />
              {/* <Image src={img2} className="sr-steel-Furniture-half" /> */}
            </div>
            <Image src={img3} className="sr-steel-Furniture-full" loading="lazy"/>
          </Col>

          {/* Center Column (Text) */}
          <Col md={4} className="text-center sr-steel-Furniture-text-col">
            <Image src={img2} className="sr-steel-Furniture-half11" loading="lazy"/>
            <h2 className="sr-steel-Furniture-title">
              Furniture With Ease
              <br />
              Of Comfort
            </h2>
            <p className="sr-steel-Furniture-description">
              To create a comfortable room, of course, we provide everything you
              need for your home with the best.
            </p>
          </Col>

          {/* Right Column */}
          <Col md={4}>
            <Image src={img5} className="sr-steel-Furniture-full mb-3" />
            <div className="d-flex gap-2">
              <Image src={img6} className="sr-steel-Furniture-half"  loading="lazy"/>
            </div>
          </Col>
        </Row>

        <div className="text-center mb-4 sr-steel-Mediocrity-heading">
          <h2 className="sr-steel-Mediocrity-title">Mediocrity Is Not Ours</h2>
          <p className="sr-steel-Mediocrity-description">
            Minimalist & modern household furniture can help you save space,
            therefore we provide your dream home needs with unique designs and
            the best quality.
          </p>
        </div>
        <Row>
          <Col md={6} className="mb-4 sr-steel-Mediocrity-left-img">
            <Image src={door4} alt="Main Door" fluid  loading="lazy" />
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={6} className="mb-4">
                <Image
                  src={door1}
                  alt="Door 2"
                  fluid
                  className="sr-steel-Mediocrity-subimg"
                  loading="lazy"
                />
              </Col>
              <Col xs={6} className="mb-4">
                <Image
                  src={door2}
                  alt="Door 3"
                  fluid
                  className="sr-steel-Mediocrity-subimg"
                  loading="lazy"
                />
              </Col>
              <Col xs={6}>
                <Image
                  src={door3}
                  alt="Door 4"
                  fluid
                  className="sr-steel-Mediocrity-subimg"
                  loading="lazy"
                />
              </Col>
              <Col xs={6}>
                <Image
                  src={door5}
                  alt="Door 5"
                  fluid
                  className="sr-steel-Mediocrity-subimg"
                  loading="lazy"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
