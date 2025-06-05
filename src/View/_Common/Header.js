import React, { useState } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../../assets/img/logo.png";

export default function Header() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const [expanded, setExpanded] = useState(false);
    const handleNavClick = () => {
        setExpanded(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleToggle = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <React.Fragment>
            <Navbar expand="lg" expanded={expanded} onToggle={handleToggle} className={`my-navbar ${expanded ? "open" : ""}`}>
                <Container>
                    <Navbar.Brand href="/" className="text-uppercase text-white">
                    <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} className={isActive("/") ? "active" : ""} onClick={handleNavClick} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} className={isActive("/about") ? "active" : ""} onClick={handleNavClick} to="/about">About Us</Nav.Link>
                            <Nav.Link as={Link} className={isActive("/contact") ? "active" : ""} onClick={handleNavClick} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} className={isActive("/donation") ? "active" : ""} onClick={handleNavClick} to="/donation">Donate Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}