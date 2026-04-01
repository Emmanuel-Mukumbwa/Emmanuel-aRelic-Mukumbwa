// src/pages/Projects.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import './Projects.css';

function resolveAsset(path) {
  if (!path) return null;
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('/')) {
    return path;
  }
  try {
    const mod = require(`../assets/${path}`);
    return mod && mod.default ? mod.default : mod;
  } catch (err) {
    return `${process.env.PUBLIC_URL || ''}/assets/${path}`;
  }
}

const fallbackForTitle = (title) =>
  `https://avatars.dicebear.com/api/gridy/${encodeURIComponent(title)}.svg`;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4">Selected Projects</h2>
      <Row className="g-4">
        {currentProjects.map(p => {
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
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = fallbackForTitle(p.title);
                      }}
                    />
                  </div>
                ) : null}

                <Card.Body className="d-flex flex-column">
                  <h5 className="mb-1">
                    {p.title}{' '}
                    {p.category && <Badge bg="secondary" className="ms-2">{p.category}</Badge>}
                  </h5>
                  <p className="text-muted small mb-3">{p.shortDescription}</p>

                  <div className="mb-3">
                    {(p.tech || []).slice(0, 6).map(t => (
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

      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-5">
          <Button
            variant="outline-secondary"
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="me-2"
          >
            Previous
          </Button>
          <span className="align-self-center mx-3">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline-secondary"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="ms-2"
          >
            Next
          </Button>
        </div>
      )}
    </Container>
  );
}