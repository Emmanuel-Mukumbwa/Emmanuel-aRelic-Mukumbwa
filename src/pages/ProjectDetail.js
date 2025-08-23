// src/pages/ProjectDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Badge, Button, Spinner, Card } from 'react-bootstrap';
import projects from '../data/projects';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import './ProjectDetail.css'; // small CSS file for layout

function resolveAsset(path) {
  if (!path) return null;
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('/')) {
    return path;
  }
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const mod = require(`../assets/${path}`);
    return mod && mod.default ? mod.default : mod;
  } catch (err) {
    return `${process.env.PUBLIC_URL || ''}/assets/${path}`;
  }
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const p = projects.find(x => x.slug === slug);
    if (!p) {
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

  const heroSrc = resolveAsset(project.heroImage);
  const gallery = (project.images || []).map(resolveAsset).filter(Boolean);

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
            {(project.tech || []).map(t => (
              <Badge bg="light" text="dark" className="me-1" key={t}>{t}</Badge>
            ))}
          </div>
        </Col>
        <Col md={4} className="text-md-end">
          <Button variant="outline-secondary" as={Link} to="/projects" className="me-2">Back to projects</Button>
          {project.demo && <Button variant="success" href={project.demo} target="_blank" rel="noreferrer">Live demo</Button>}
        </Col>
      </Row>

      <Row className="g-4">
        <Col lg={8}>
          <Card className="mb-4 project-card">
            {heroSrc && (
              <div className="project-hero">
                <img
                  src={heroSrc}
                  alt={project.title}
                  className="project-hero-img"
                  loading="lazy"
                />
              </div>
            )}
            <Card.Body>
              <h5>Overview</h5>
              <p>{project.description}</p>

              <h6>Role</h6>
              <p>{project.role}</p>

              <h6>Features</h6>
              <ul>
                {(project.features || []).map((f, i) => <li key={i}>{f}</li>)}
              </ul>

              <h6>Outcome</h6>
              <ul>
                {(project.outcome || []).map((o, i) => <li key={i}>{o}</li>)}
              </ul>

              {project.repo && (
                <p>Code: <a href={project.repo} target="_blank" rel="noreferrer">{project.repo}</a></p>
              )}
            </Card.Body>
          </Card>

          {gallery.length > 0 && (
            <Row className="g-3 mb-4 project-gallery">
              {gallery.map((src, idx) => (
                <Col md={6} key={idx}>
                  <img
                    src={src}
                    alt={`${project.title} ${idx + 1}`}
                    className="img-fluid project-gallery-img rounded shadow-sm"
                    loading="lazy"
                  />
                </Col>
              ))}
            </Row>
          )}
        </Col>

        <Col lg={4}>
          <Card className="project-quote-card">
            <Card.Body>
              <h5>Request a quote</h5>
              <p className="text-muted small">Tell me about your project and I’ll reply with a short milestone plan and estimate.</p>

              <ContactForm inline presetSubject={`Quote: ${project.title}`} onSuccess={() => { /* optional callback */ }} />
              <hr />
              <div className="d-grid gap-2 mt-2">
                <Button variant="outline-success" href="https://calendly.com/your-calendly" target="_blank" rel="noreferrer">Book a short call</Button>
                <Button variant="link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Share feedback</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
