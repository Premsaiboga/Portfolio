import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Let’s connect and build something meaningful together.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center g-4">
          {/* Location Card */}
          <Col md={4} sm={6}>
            <Card className="contact-card">
              <Card.Body>
                <FaMapMarkerAlt className="contact-icon" />
                <h5 className="contact-title">Location</h5>
                <p className="contact-text">Kukatpally, Hyderabad, Telangana, India</p>
              </Card.Body>
            </Card>
          </Col>

          {/* GitHub Card */}
          <Col md={4} sm={6}>
            <Card className="contact-card">
              <Card.Body>
                <FaGithub className="contact-icon" />
                <h5 className="contact-title">GitHub</h5>
                <a
                  href="https://github.com/Premsaiboga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  github.com/Premsaiboga
                </a>
              </Card.Body>
            </Card>
          </Col>

          {/* LinkedIn Card */}
          <Col md={4} sm={6}>
            <Card className="contact-card">
              <Card.Body>
                <FaLinkedin className="contact-icon" />
                <h5 className="contact-title">LinkedIn</h5>
                <a
                  href="https://www.linkedin.com/in/premsai-boga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  linkedin.com/in/premsai-boga
                </a>
              </Card.Body>
            </Card>
          </Col>

          {/* WhatsApp Card */}
          <Col md={4} sm={6}>
            <Card className="contact-card">
              <Card.Body>
                <FaWhatsapp className="contact-icon" />
                <h5 className="contact-title">WhatsApp</h5>
                <a
                  href="https://wa.me/917673963326"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Chat on WhatsApp
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <p className="footer-text">
              © {new Date().getFullYear()} Boga Premsai — Built with Passion
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
