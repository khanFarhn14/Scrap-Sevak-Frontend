import React from "react";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Card, Image } from "react-bootstrap";
import cardBoard1 from "../../assets/img/home/cardboard-1.png";
import cardBoard2 from "../../assets/img/home/cardboard-2.png";

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    };

    return (
        <React.Fragment>
            {/* HOME SECTION SECTION */}
            <section className="home-section">
                <Container>
                    <div className="home-section-content">
                        <h1 data-aos="fade-up" data-aos-delay="500">Mumbai’s first scrap app: Clean. Green. Mumbai’s <br /> Scrap  Revolution Begins Here.</h1>
                        <p data-aos="fade-up" data-aos-delay="600">Your trusted partner for easy scrap recycling solutions <br />and sustainable waste management.</p>
                        <Button variant="success" onClick={handleClick} data-aos="fade-up" data-aos-delay="700">Download Now!</Button>
                    </div>
                </Container>
            </section>

            {/* RESCYCLE MODE EASY */}
            <section className="recycling-made-section">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h3>Recycling Made Easy</h3>
                        <p>Transform your scrap items into valuable resources with our user-friendly recycling services.</p>
                    </div>

                    <Row className="g-3">
                        <Col md={6}>
                            <Card className="recycling-mode-card" data-aos="fade-up">
                                <div className="card-content">
                                    <h3>Eco-Friendly Solutions</h3>
                                    <p>Our eco-friendly solutions ensure that your scrap items are recycled responsibly and sustainably.</p>
                                </div>
                                <div className="card-img">
                                    <Image src={cardBoard1} alt="card board" />
                                </div>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="recycling-mode-card" data-aos="fade-up">
                                <div className="card-content">
                                    <h3>Scrap Collection Service</h3>
                                    <p>We offer convenient scrap collection services to help you recycle your unwanted items effortlessly.</p>
                                </div>
                                <div className="card-img">
                                    <Image src={cardBoard2} alt="card board" />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}