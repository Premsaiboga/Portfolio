import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import {
  SiDjango,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      items: [
        { name: "React", icon: <FaReact />, desc: "Frontend Library" },
        { name: "HTML5", icon: <FaHtml5 />, desc: "Markup Language" },
        { name: "CSS3", icon: <FaCss3Alt />, desc: "Styling Language" },
        { name: "JavaScript", icon: <FaJsSquare />, desc: "Logic & Interactivity" },
        { name: "Bootstrap", icon: <FaBootstrap />, desc: "UI Framework" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, desc: "Utility CSS Framework" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Django", icon: <SiDjango />, desc: "Python Framework" },
        { name: "Node.js", icon: <FaNodeJs />, desc: "JavaScript Runtime" },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MySQL", icon: <SiMysql />, desc: "Relational Database" },
        { name: "MongoDB", icon: <SiMongodb />, desc: "NoSQL Database" },
      ],
    },
    {
      title: "Tools & Others",
      items: [
        { name: "Git", icon: <FaGitAlt />, desc: "Version Control" },
        { name: "GitHub", icon: <FaGithub />, desc: "Code Repository" },
        { name: "Postman", icon: <SiPostman />, desc: "API Testing Tool" },
        {
          name: "n8n",
          icon: (
            <img
              src="/n8n.png"
              alt="n8n"
              className="custom-icon"
            />
          ),
          desc: "Automation Platform",
        },
      ],
    },
    {
      title: "Cloud",
      items: [{ name: "AWS", icon: <FaAws />, desc: "Cloud Platform" }],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">
              A blend of technologies that power my projects and ideas.
            </p>
          </Col>
        </Row>

        {categories.map((category, idx) => (
          <div key={idx} className="category-wrapper">
            <h3 className="category-heading">{category.title}</h3>
            <Row className="g-4 justify-content-center">
              {category.items.map((skill, i) => (
                <Col md={4} lg={3} sm={6} xs={12} key={i}>
                  <div className="skill-box">
                    <div className="skill-icon">{skill.icon}</div>
                    <h5 className="skill-name">{skill.name}</h5>
                    <p className="skill-desc">{skill.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Skills;
