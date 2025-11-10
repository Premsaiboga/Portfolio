import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passion. Precision. Purpose.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={7} className="mb-4 mb-md-0">
            <div className="about-text">
              <p>
                I’m a passionate <span className="highlight">Full Stack Developer </span> 
                with a strong foundation in <span className="highlight">React</span>, 
                <span className="highlight"> Django,NodeJs</span>, and <span className="highlight">MySQL,MongoDB</span>.  
                My journey from a mechanical background to the IT industry reflects my 
                adaptability, discipline, and constant desire to learn.  
                I love transforming ideas into scalable applications that deliver real value 
                through clean code and effective problem-solving.
              </p>

              <p>
                I believe in continuous improvement — both personally and professionally — 
                and I strive to combine creativity with logic to build meaningful digital experiences.
              </p>
            </div>
          </Col>

          {/* Right Info Cards */}
          <Col md={5}>
            <Row className="g-3">
              <Col sm={12}>
                <Card className="info-card">
                  <Card.Body>
                    <i className="bi bi-mortarboard info-icon"></i>
                    <h5>Education</h5>
                    <p>B.Tech in Mechanical Engineering<br />
                    <span className="text-muted">Guru Nanak Institute of Technical Campus, 2022</span></p>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12}>
                <Card className="info-card">
                  <Card.Body>
                    <i className="bi bi-geo-alt info-icon"></i>
                    <h5>Location</h5>
                    <p>From Bhupalpally, Telangana<br />
                    Currently in Kukatpally, Hyderabad</p>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12}>
                <Card className="info-card">
                  <Card.Body>
                    <i className="bi bi-envelope info-icon"></i>
                    <h5>Email</h5>
                    <p>
                      <a href="mailto:bogapremsai@gmail.com" className="email-link">
                        bogapremsai26@gmail.com
                      </a>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <blockquote className="about-quote">
              “Building solutions with logic, precision, and passion for excellence.”
            </blockquote>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
