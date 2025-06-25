import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import "./CommercialDoors.css";
import { FaArrowRight } from "react-icons/fa";

import productdoor1 from "../../assests/product-door-1.png";
import productdoor2 from "../../assests/product-door-2.png";
import productdoor3 from "../../assests/product-door-3.png";
import productdoor4 from "../../assests/product-door-4.png";

import Residential from '../../assests/Commercial Doors-banners.jpg';


const products = [
    {
        id: 1,
        name: "GOLDEN OAK",
        image: productdoor1,
        description:
            "Designed to simplify and facilitate meetings with your clients.",
        details: `Grill Door Specifications\nMaterial: Galvanised Steel\nFinish: Powder coating\nAvailable colors: Wide range\nDoor Frame:\nSheet thickness: 1.2 mm\nFrame size (thickness): 100 mm x 58 mm\nDoor Shutter:\nSheet thickness: 0.8 mm\nShutter size (thickness): 46 mm`,
        popupImage: require("../../assests/product-door-1.png"),
    },
    {
        id: 1,
        name: "RED MAHOGANY",
        image: productdoor2,
        description:
            "Designed to simplify and facilitate meetings with your clients.",
        details: `Grill Door Specifications\nMaterial: Galvanised Steel\nFinish: Powder coating\nAvailable colors: Wide range\nDoor Frame:\nSheet thickness: 1.2 mm\nFrame size (thickness): 100 mm x 58 mm\nDoor Shutter:\nSheet thickness: 0.8 mm\nShutter size (thickness): 46 mm`,
        popupImage: require("../../assests/product-door-2.png"),
    },
    {
        id: 1,
        name: "ANTIQUE CHERRY",
        image: productdoor3,
        description:
            "Designed to simplify and facilitate meetings with your clients.",
        details: `Grill Door Specifications\nMaterial: Galvanised Steel\nFinish: Powder coating\nAvailable colors: Wide range\nDoor Frame:\nSheet thickness: 1.2 mm\nFrame size (thickness): 100 mm x 58 mm\nDoor Shutter:\nSheet thickness: 0.8 mm\nShutter size (thickness): 46 mm`,
        popupImage: require("../../assests/product-door-3.png"),
    },
    {
        id: 1,
        name: "WHITE MAPLE",
        image: productdoor4,
        description:
            "Designed to simplify and facilitate meetings with your clients.",
        details: `Grill Door Specifications\nMaterial: Galvanised Steel\nFinish: Powder coating\nAvailable colors: Wide range\nDoor Frame:\nSheet thickness: 1.2 mm\nFrame size (thickness): 100 mm x 58 mm\nDoor Shutter:\nSheet thickness: 0.8 mm\nShutter size (thickness): 46 mm`,
        popupImage: require("../../assests/product-door-4.png"),
    },
];

const Product = () => {
    const [show, setShow] = useState(false);
    const [activeProduct, setActiveProduct] = useState(null);

    const handleShow = (product) => {
        setActiveProduct(product);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
        <div className="sr-steel-product-wrapper">
            {/* Banner */}
            <div className="contact-page-banner mb-5">
                <img src={Residential} alt="Contact Banner" />
                <div className="contact-page-banner-heading">Steel Doors - Commercial</div>
            </div>
            <Container>
                <div className="sr-steel-product-heading text-center">
                    <h2>
                        <strong className="text-white">Commercial Doors</strong>
                    </h2>
                </div>
                <Row className="mt-4">
                    {products.map((product) => (
                        <Col
                            md={3}
                            sm={6}
                            xs={12}
                            key={product.id}
                            className="sr-steel-product-card-col"
                        >
                            <Card className="sr-steel-product-card text-center">
                                <div className="sr-steel-product-img-wrapper">
                                    <Card.Img
                                        variant="top"
                                        src={product.image}
                                        className="sr-steel-product-img"
                                    />
                                    <Button
                                        variant="link"
                                        className="sr-steel-product-arrow"
                                        onClick={() => handleShow(product)}
                                    >
                                        <FaArrowRight />
                                    </Button>
                                </div>
                                <Card.Body>
                                    <Card.Title className="sr-steel-product-title">
                                        {product.name}
                                    </Card.Title>
                                    <Card.Text className="sr-steel-product-description">
                                        {product.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Modal
                show={show}
                onHide={handleClose}
                centered
                className="sr-steel-product-modal"
            >
                <Modal.Header closeButton className="sr-steel-product-modal-header" />
                <Modal.Body className="sr-steel-product-modal-body">
                    {activeProduct && (
                        <div className="sr-steel-product-modal-flex">
                            <img
                                src={activeProduct.popupImage}
                                alt={activeProduct.name}
                                className="sr-steel-product-modal-img"
                            />
                            <div className="sr-steel-product-modal-text-wrapper">
                                <h5 className="sr-steel-product-modal-title">
                                    {activeProduct.name}
                                </h5>
                                <div className="sr-steel-product-modal-text">
                                    {activeProduct.details.split('\n').map((line, index) => {
                                        const [label, ...rest] = line.split(':');
                                        const value = rest.join(':').trim();
                                        return (
                                            <p key={index}>
                                                <strong>{label}:</strong> {value}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Product;
