// src/pages/ProjectDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Badge, Button, Spinner, Card } from 'react-bootstrap';
import projects from '../data/projects';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import './ProjectDetail.css'; // small CSS file for layout

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const p = projects.find(x => x.slug === slug);
    if (!p) {
      // not found — navigate back to /projects
      navigate('/projects', { replace: true });
      return;
    }
    setProject(p);
  }, [slug, navigate]);

  if (!project) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  return (
    <Container className="py-5">
      <Helmet>
        <title>{project.title} — Case Study | aRelic</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <Row className="mb-4">
        <Col md={8}>
          <h1>{project.title}</h1>
          <p className="lead">{project.shortDescription}</p>
          <div className="mb-3">
            {project.tech.map(t => <Badge bg="light" text="dark" className="me-1" key={t}>{t}</Badge>)}
          </div>
        </Col>
        <Col md={4} className="text-md-end">
          <Button variant="outline-secondary" as={Link} to="/projects" className="me-2">Back to projects</Button>
          {project.demo && <Button variant="success" href={project.demo} target="_blank">Live demo</Button>}
        </Col>
      </Row>

      <Row className="g-4">
        <Col lg={8}>
          <Card className="mb-4">
            {project.heroImage && <img src={project.heroImage} alt={project.title} className="img-fluid card-img-top" />}
            <Card.Body>
              <h5>Overview</h5>
              <p>{project.description}</p>

              <h6>Role</h6>
              <p>{project.role}</p>

              <h6>Features</h6>
              <ul>
                {project.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>

              <h6>Outcome</h6>
              <ul>
                {project.outcome.map((o, i) => <li key={i}>{o}</li>)}
              </ul>

              {project.repo && (
                <p>Code: <a href={project.repo} target="_blank" rel="noreferrer">{project.repo}</a></p>
              )}
            </Card.Body>
          </Card>

          {project.images && project.images.length > 0 && (
            <Row className="g-3 mb-4">
              {project.images.map((img, idx) => (
                <Col md={6} key={idx}>
                  <img src={img} alt={`${project.title} ${idx+1}`} className="img-fluid rounded shadow-sm" />
                </Col>
              ))}
            </Row>
          )}
        </Col>

        <Col lg={4}>
          <Card className="sticky-top" style={{ top: '1rem' }}>
            <Card.Body>
              <h5>Request a quote</h5>
              <p className="text-muted small">Tell me about your project and I’ll reply with a short milestone plan and estimate.</p>

              {/* Pass presetSubject so the message is prefilled */}
              <ContactForm inline presetSubject={`Quote: ${project.title}`} onSuccess={() => { /* optional callback */ }} />
              <hr />
              <div className="d-grid gap-2 mt-2">
                <Button variant="outline-success" href="https://calendly.com/your-calendly" target="_blank">Book a short call</Button>
                <Button variant="link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Share feedback</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
