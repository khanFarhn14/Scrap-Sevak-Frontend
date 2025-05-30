import React from "react";
import "./about-us.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import scrapShop from "../../assets/img/old-scrap-shop.png";

export default function About() {
    return (
        <React.Fragment>
            <div className="page-title">
                <Container>
                    <div className="bread-crumb-content">
                        <h2>Scrap Sevak</h2>
                        <ul className="bread-crumb clearfix">
                            <li><a href="/">Home</a></li>
                            <li>About us</li>
                        </ul>
                    </div>
                </Container>
            </div>
            <section className="about-us-section">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h3>About us</h3>
                        <p>Get in Touch With Scrap Sevak" "We're Here to Help" "Connect With Our Team</p>
                    </div>

                    <Row className="g-3" data-aos="fade-up">
                        <Col sm={12} md={6} className="order-2 order-md-1">
                            <div className="about-us-content">
                                <h3>About Scrap Sevak</h3>
                                <h5>Your Trusted Partner Since Generations</h5>

                                <p>In the busy streets of Mumbai, Gazi Traders has been a name people trust for their scrap needs. For many years,
                                    families and businesses have chosen us as their reliable partner for selling scrap.</p>

                                <p>The fact that even government offices trust us with their confidential materials is a testament to the fact that we do not sell
                                    their confidential materials to food vendors as we do not retail them. <b>The foundation of our work is trust</b>.
                                    This shows how much people believe in our honest and quality service.</p>

                                <p>Our skilled team takes care of your scrap with attention, giving you the best value while protecting our environment.
                                    We use modern methods to make sure our team work helps us all to create a cleaner future.</p>

                                <p>When you pick Scrap Sevak, you get more than just a service. You become part of our family that cares about trust,
                                    quality, and a cleaner tomorrow.</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} className="order-1 order-md-2">
                            <div className="scrap-shop-img">
                                <Image src={scrapShop} alt="show" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}