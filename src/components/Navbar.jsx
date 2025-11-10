import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const PortfolioNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom shadow-sm ${scrolled ? "scrolled" : ""}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-area d-flex align-items-center">
          <img src="/logo.png" alt="logo" className="brand-logo me-2" />
          <span className="brand-text">Prem Sai Boga</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
