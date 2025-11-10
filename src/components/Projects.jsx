import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "HRMS System",
      description:
        "A comprehensive Human Resource Management System built with React and Django. It manages employee data, leave requests, attendance tracking, and payroll generation. The project focuses on seamless API integration, optimized queries, and an intuitive user interface for HR operations.",
      video: "https://drive.google.com/file/d/1os33UJcBIvkkqpE7Cw_mXu8E6ExgPP-r/preview", // ✅ Use /preview link for embedding
      github: "#",
    },
    {
      title: "Calorie Meter Automation App",
      description:
        "An automation-driven application created using n8n and integrated with external APIs. It tracks daily calorie intake through WhatsApp interactions, fetching nutrition data dynamically using Nutritionix API. This project highlights workflow automation, API handling, and smart data mapping.",
      video: "https://drive.google.com/file/d/13Tj3cAQeGvirJE0mYHuADJDb7Ft9ffyG/preview", // ✅ Converted to /preview
      github: "https://github.com/Premsaiboga/Calorimeter.git",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Projects Showcase</h2>
            <p className="section-subtitle">
              A glimpse into the applications and systems I’ve built with precision and creativity.
            </p>
          </Col>
        </Row>

        <Row className="g-5 justify-content-center">
          {projects.map((project, index) => (
            <Col md={6} key={index}>
              <Card className="project-card shadow-lg border-0 rounded-4 overflow-hidden">
                <div className="video-wrapper">
                  <iframe
                    src={project.video}
                    width="100%"
                    height="320"
                    allow="autoplay"
                    title={project.title}
                    style={{
                      borderRadius: "12px",
                      border: "none",
                      width: "100%",
                      height: "320px",
                    }}
                  ></iframe>
                </div>

                <Card.Body className="text-center p-4">
                  <h4 className="project-title mb-3">{project.title}</h4>
                  <p className="project-desc mb-4">{project.description}</p>
                  <Button
                    href={project.github}
                    target="_blank"
                    className="btn-gold px-4 py-2"
                  >
                    <i className="bi bi-github me-2"></i> View Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
