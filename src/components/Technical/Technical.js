import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Technical.css';
import stepImg1 from '../../assests/Steel Selection & Fabrication.jpg';
import stepImg2 from '../../assests/Surface Treatment & Coloring.jpg';
import stepImg3 from '../../assests/Aluminium Integration.jpg';
import stepImg4 from '../../assests/Internal Filling.jpg';
import stepImg5 from '../../assests/Door Types.jpg';
import stepImg6 from '../../assests/Window Types.jpg';
import stepImg7 from '../../assests/Locks & Hardware.jpg';
import stepImg8 from '../../assests/Installation & Fitting.jpg';

import Technicalbanner from '../../assests/Technical Process-banner.jpg';



const technicalSteps = [
    {
        title: '1. Steel Selection & Fabrication',
        description: 'At SR-Steel Doors, the process begins with the selection of high-quality materials like mild steel or galvanized steel. These are chosen for their superior strength, corrosion resistance, and suitability for both residential and commercial environments. The steel sheets are cut, folded, and welded with high precision using advanced machinery to ensure a consistent and durable frame. This fabrication step lays the foundation for a door that is not only secure but also built to last in all weather conditions. We also consider the door size, weight, and load-bearing capacity during this stage.',
        features: ['Rust-resistant materials', 'Precision-cut components', 'Suitable for high-security installations'],
        image: stepImg1
    },
    {
        title: '2. Surface Treatment & Coloring',
        description: 'Once fabricated, each steel component undergoes a thorough surface treatment to prevent rust and ensure long-lasting color retention. A 7-tank pre-treatment process is applied to clean and degrease the surface before powder coating or PU paint is applied. The coating is then oven-cured to form a strong bond. We offer a variety of finishes—matte, glossy, textured, or even wood-grain—to match interior styles. This step not only enhances appearance but also adds a durable, protective layer that can withstand outdoor exposure.',
        features: ['7-tank pre-treatment process', 'Powder coating with oven curing', 'Matte, glossy, or wood finish'],
        image: stepImg2
    },
    {
        title: '3. Aluminium Integration',
        description: 'For clients seeking a premium, contemporary finish, we integrate aluminium profiles into the door design. Aluminium sections can be used in trims, linings, and frames to reduce overall weight while enhancing the visual appeal. These components are either anodized or powder-coated for extra durability. The use of aluminium adds a sleek, modern edge to the design, especially in commercial setups where aesthetics and durability are both critical.',
        features: ['Premium anodized or powder-coated aluminium', 'Sleek appearance with strong structure'],
        image: stepImg3
    },
    {
        title: '4. Internal Filling (Core Insulation)',
        description: 'Our steel doors are designed with internal core fillings that enhance functionality. We use a range of materials such as honeycomb paper for lightness, rockwool for fire resistance and soundproofing, or PU foam for thermal insulation. These materials are layered carefully between the inner steel sheets and reinforced with stiffeners. This results in a strong, insulated, and noise-reducing door perfect for both homes and commercial properties.',
        features: ['Honeycomb paper core', 'Rockwool or PU foam', 'Reinforced with internal stiffeners'],
        image: stepImg4
    },
    {
        title: '5. Door Types',
        description: 'We manufacture a wide range of steel door models tailored to various architectural and security needs. These include single and double shutter doors, flush doors for modern homes, designer panel doors with custom patterns, and folding or sliding door systems for space optimization. For commercial use, we also provide fire-rated and security doors built to meet industrial safety standards. All doors are available in custom sizes and finishes.',
        features: ['Single & Double Doors', 'Designer Steel Doors', 'Sliding or Folding Steel Doors'],
        image: stepImg5
    },
    {
        title: '6. Window Types',
        description: 'Our steel windows are crafted to suit both residential and commercial applications, combining strength with design. Options include fixed windows, side-hung casement types, sliding models, and French-style steel windows. Grills or mosquito mesh can also be added based on client requirements. All windows are powder-coated for long-lasting color and are engineered for easy installation, ventilation, and security.',
        features: ['Steel Casement Windows', 'French/Fixed Windows', 'Grilled or Mesh Fitted Options'],
        image: stepImg6
    },
    {
        title: '7. Locks & Hardware',
        description: 'Every SR-Steel door is fitted with high-quality locking systems sourced from trusted brands. We offer multi-point locks for added security, stainless steel hinges for smooth movement, and optional digital or smart locks. Other hardware includes durable handles, door closers, tower bolts, and peepholes. We ensure all accessories match the door finish and function flawlessly under daily use.',
        features: ['Multi-point locking', 'Smart lock compatible', 'Premium hardware brands'],
        image: stepImg7
    },
    {
        title: '8. Installation & Fitting',
        description: 'Our expert team handles the complete installation with precision and care. The door frame and shutter are aligned perfectly to the wall opening, fixed using fasteners and sealants. We apply silicone sealant for moisture resistance and gap filling, followed by testing the lock and hinge functionality. A final quality check ensures the door or window opens and closes smoothly, with proper insulation and finishing.',
        features: ['Frame & shutter installation', 'Silicone sealing', 'Final quality check'],
        image: stepImg8
    }
];

const TechnicalProcess = () => {
    return (
        <section className="sr-technical-section">
            <div className="contact-page-banner">
                <img src={Technicalbanner} alt="Contact Banner" />
                <div className="contact-page-banner-heading">Technical Process</div>
            </div>
            <Container>
                <div className="text-center mb-3 mt-5">
                    <h2 className="sr-technical-title">SR-Steel Doors – Technical Process</h2>
                    <p className="sr-technical-subtitle">
                        At SR-Steel Doors, we follow a precise and high-quality process to ensure durability, style, and performance.
                    </p>
                </div>
                {technicalSteps.map((step, idx) => (
                    <Row className="align-items-center sr-tech-step" key={idx}>
                        <Col
                            md={6}
                            className={idx % 2 === 0 ? 'order-md-1' : 'order-md-2'}
                        >
                            <motion.div
                                className="sr-tech-card text-start"
                                initial={{ x: idx % 2 === 0 ? -100 : 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                <h5 className="sr-tech-card-title">{step.title}</h5>
                                <p className="sr-tech-card-desc">{step.description}</p>
                                <ul className="sr-tech-card-list">
                                    {step.features.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </Col>

                        <Col
                            md={6}
                            className={idx % 2 === 0 ? 'order-md-2' : 'order-md-1 text-md-end'}
                        >
                            <motion.img
                                src={step.image}
                                alt={step.title}
                                className="sr-tech-img img-fluid"
                                initial={{ x: idx % 2 === 0 ? 100 : -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            />
                        </Col>
                    </Row>
                ))}
            </Container>
        </section>
    );
};

export default TechnicalProcess;
