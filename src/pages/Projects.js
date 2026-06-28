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

// Extract unique categories from projects for filters
const allCategories = ['all', ...new Set(projects.filter(p => p.category).map(p => p.category))];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Derive filtered projects
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter(p => p.category === filter);

  // Featured projects (top items marked as featured)
  const featuredProjects = projects.filter(p => p.featured);

  // Pagination – load more style
  const displayedProjects = filteredProjects.slice(0, currentPage * projectsPerPage);
  const hasMore = displayedProjects.length < filteredProjects.length;

  const loadMore = () => setCurrentPage(prev => prev + 1);

  return (
    <Container className="py-5">
      <h2 className="mb-2">Selected Projects</h2>
      <p className="text-muted small mb-4">
        Case studies covering software, systems, mobile apps, and infrastructure.
      </p>

      {/* Category filters */}
      <div className="d-flex gap-2 flex-wrap mb-4">
        {allCategories.map(cat => (
          <Button
            key={cat}
            size="sm"
            variant={filter === cat ? 'success' : 'outline-secondary'}
            onClick={() => {
              setFilter(cat);
              setCurrentPage(1);
            }}
          >
            {cat.toUpperCase()}
          </Button>
        ))}
      </div>

      {/* Featured projects section */}
      {featuredProjects.length > 0 && (
        <div className="mb-5">
          <h4 className="mb-3">Featured Work</h4>
          <Row className="g-4">
            {featuredProjects.slice(0, 2).map(p => {
              const hero = resolveAsset(p.heroImage);
              return (
                <Col md={6} key={p.id}>
                  <Card className="h-100 project-card">
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
                      {p.impact && (
                        <Badge bg="success" className="mb-2 w-100 text-center">
                          {p.impact}
                        </Badge>
                      )}
                      <p className="text-muted small card-summary mb-3">{p.shortDescription}</p>

                      <div className="mb-2">
                        {(p.tech || []).slice(0, 6).map(t => (
                          <Badge bg="light" text="dark" className="me-1 mb-1" key={t}>
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-auto d-flex flex-column gap-2 card-actions">
                        <Button as={Link} to={`/projects/${p.slug}`} variant="success">
                          View Case Study
                        </Button>
                        {p.demo && (
                          <Button href={p.demo} target="_blank" rel="noreferrer" variant="outline-secondary" size="sm">
                            Live Demo
                          </Button>
                        )}
                        <small className="text-muted d-block mt-1">
                          Includes architecture, challenges & deployment notes
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      )}

      {/* All projects grid */}
      <Row className="g-4">
        {displayedProjects.map(p => {
          const hero = resolveAsset(p.heroImage);
          return (
            <Col md={6} lg={4} key={p.id}>
              <Card className="h-100 project-card">
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
                  {p.impact && (
                    <Badge bg="success" className="mb-2 w-100 text-center">
                      {p.impact}
                    </Badge>
                  )}
                  <p className="text-muted small card-summary mb-3">{p.shortDescription}</p>

                  <div className="mb-2">
                    {(p.tech || []).slice(0, 6).map(t => (
                      <Badge bg="light" text="dark" className="me-1 mb-1" key={t}>
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto d-flex flex-column gap-2 card-actions">
                    <Button as={Link} to={`/projects/${p.slug}`} variant="success">
                      View Case Study
                    </Button>
                    {p.demo && (
                      <Button href={p.demo} target="_blank" rel="noreferrer" variant="outline-secondary" size="sm">
                        Live Demo
                      </Button>
                    )}
                    <small className="text-muted d-block mt-1">
                      Includes architecture, challenges & deployment notes
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Load More button */}
      {hasMore && (
        <div className="text-center mt-5">
          <Button variant="outline-success" onClick={loadMore}>
            Load More Projects
          </Button>
        </div>
      )}

      {displayedProjects.length === 0 && (
        <div className="text-center text-muted py-5">
          No projects match the selected filter. Try another category.
        </div>
      )}
    </Container>
  );
}