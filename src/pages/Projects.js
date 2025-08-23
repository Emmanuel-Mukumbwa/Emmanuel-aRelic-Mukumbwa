// src/pages/Projects.js
import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import './Projects.css';

/**
 * Resolve an asset path:
 * - if absolute or starts with '/', return as-is
 * - try require('../assets/<path>')
 * - fallback to PUBLIC_URL/assets/<path>
 */
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

export default function Projects() {
  return (
    <Container className="py-5">
      <h2 className="mb-4">Selected Projects</h2>
      <Row className="g-4">
        {projects.map(p => {
          const hero = resolveAsset(p.heroImage);
          return (
            <Col md={6} lg={4} key={p.id}>
              <Card className="h-100 shadow-sm project-card">
                {hero ? (
                  <div className="project-thumb">
                    <img
                      src={hero}
                      alt={p.title}
                      className="img-fluid project-thumb-img"
                      loading="lazy"
                    />
                  </div>
                ) : null}

                <Card.Body className="d-flex flex-column">
                  <h5 className="mb-1">{p.title}</h5>
                  <p className="text-muted small mb-3">{p.shortDescription}</p>

                  <div className="mb-3">
                    {(p.tech || []).slice(0, 4).map(t => (
                      <Badge bg="light" text="dark" className="me-1 mb-1" key={t}>
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto d-flex gap-2">
                    <Button as={Link} to={`/projects/${p.slug}`} variant="success">
                      View Case Study
                    </Button>
                    {p.demo && (
                      <Button href={p.demo} target="_blank" rel="noreferrer" variant="outline-secondary">
                        Live
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
