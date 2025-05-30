import React from "react";
import "./footer.scss";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="footer-top">
                    <Container>
                        <Row className="gy-4">
                            <Col md={4}>
                                <div className="footer-title">
                                    <h2>Scrap Sevak</h2>
                                    <h3>Your truster partner for scrap  <br /> recycling solutions.</h3>
                                </div>

                            </Col>
                            <Col md={4}>
                                <h5 className="text-uppercase">Contact</h5>
                                <ul>
                                    <li><a href="#">+91 9594 455685</a></li>
                                    <li><a href="#">info@scrapsevak.com</a></li>
                                </ul>
                            </Col>
                            <Col md={4}>
                                <h5 className="text-uppercase">Social</h5>
                                <ul>
                                    <li><a href="#"><i className="ri-facebook-fill"></i> <span>Facebook</span></a></li>
                                    <li><a href="#"><i className="ri-linkedin-box-fill"></i> <span>Linkdin</span></a></li>
                                    <li><a href="#"><i className="ri-instagram-line"></i> <span>Instagram</span></a></li>
                                </ul>
                            </Col>
                           
                        </Row>
                    </Container>
                </div>
                <div className="text-center copyright">Copyright © 2025 | Scrap App | All Rights Reserved.</div>
            </footer>
        </React.Fragment>
    )
}