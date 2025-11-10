import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          {/* Left Text Section */}
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="hero-title">
              Hi, I’m <span className="hero-name">Boga Premsai</span>
            </h1>

            <h2 className="hero-role">Full Stack Developer</h2>

            <h3 className="hero-subrole">
              <Typewriter
                words={["Backend Developer", "Problem Solver"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={70}
                delaySpeed={1500}
              />
            </h3>

            <div className="mt-4">
              <Button
                href="https://drive.google.com/file/d/1ZRKJN82aSIfvIYb6qR63PpKWw0Mn-F0K/view?usp=drive_link"
                target="_blank"
                className="btn-gold me-3"
              >
                <i className="bi bi-file-earmark-arrow-down me-2"></i>
                Download Resume
              </Button>

              <Button href="#projects" className="btn-outline-gold">
                <i className="bi bi-collection-play me-2"></i>
                View Projects
              </Button>
            </div>
          </Col>

          {/* Right Image Section */}
          <Col md={6} className="text-center">
            <div className="hero-image-wrapper">
              <img
                src="/image.jpg"
                alt="Boga Premsai"
                className="img-fluid hero-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
