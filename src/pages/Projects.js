// src/pages/Projects.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function Projects() {
  return (
    <Container className="py-5">
      <h2 className="mb-4">Selected Projects</h2>
      <Row className="g-4">
        {projects.map(p => (
          <Col md={6} lg={4} key={p.id}>
            <Card className="h-100 shadow-sm">
              {p.heroImage && <img src={p.heroImage} alt={p.title} className="card-img-top" />}
              <Card.Body className="d-flex flex-column">
                <h5>{p.title}</h5>
                <p className="text-muted small">{p.shortDescription}</p>
                <div className="mb-3">
                  {p.tech.slice(0, 4).map(t => <Badge bg="light" text="dark" className="me-1" key={t}>{t}</Badge>)}
                </div>
                <div className="mt-auto d-flex gap-2">
                  <Button as={Link} to={`/projects/${p.slug}`} variant="success">View Case Study</Button>
                  {p.demo && <Button href={p.demo} target="_blank" rel="noreferrer" variant="outline-secondary">Live</Button>}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
