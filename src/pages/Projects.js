import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Form,
  Dropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga4';
import projects from '../data/projects';
import './Projects.css';

// Local fallback image (create this file or use a simple SVG placeholder)
const PLACEHOLDER_IMAGE = `${process.env.PUBLIC_URL || ''}/assets/project-placeholder.png`;

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

const fallbackImage = PLACEHOLDER_IMAGE;

// Extract unique categories and sort them
const allCategories = [
  'all',
  ...new Set(projects.filter((p) => p.category).map((p) => p.category)),
].sort((a, b) => a.localeCompare(b));

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Compute stats from actual data
  const stats = useMemo(() => {
    const totalProjects = projects.length;
    const techSet = new Set();
    projects.forEach((p) => (p.tech || []).forEach((t) => techSet.add(t)));
    const categories = new Set(
      projects.filter((p) => p.category).map((p) => p.category)
    );
    return {
      totalProjects,
      totalTechnologies: techSet.size,
      totalCategories: categories.size,
      availability: 'Malawi + Remote',
    };
  }, []);

  const filteredProjects = useMemo(() => {
    let result = projects.filter((p) => {
      const matchesCategory =
        filter === 'all' || p.category === filter;
      const searchTerm = search.toLowerCase().trim();
      const matchesSearch =
        !searchTerm ||
        (p.title && p.title.toLowerCase().includes(searchTerm)) ||
        (p.shortDescription &&
          p.shortDescription.toLowerCase().includes(searchTerm)) ||
        (p.category && p.category.toLowerCase().includes(searchTerm)) ||
        (p.tech &&
          p.tech.some((t) => t.toLowerCase().includes(searchTerm)));
      return matchesCategory && matchesSearch;
    });

    // Sort
    switch (sort) {
      case 'newest':
        result = [...result].sort((a, b) => (b.year || 0) - (a.year || 0));
        break;
      case 'oldest':
        result = [...result].sort((a, b) => (a.year || 0) - (b.year || 0));
        break;
      case 'az':
        result = [...result].sort((a, b) =>
          (a.title || '').localeCompare(b.title || '')
        );
        break;
      case 'featured':
      default:
        result = [...result].sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
    }
    return result;
  }, [filter, search, sort]);

  const featuredProjects = useMemo(
    () => filteredProjects.filter((p) => p.featured),
    [filteredProjects]
  );

  const nonFeaturedProjects = useMemo(
    () => filteredProjects.filter((p) => !p.featured),
    [filteredProjects]
  );

  const displayedProjects = nonFeaturedProjects.slice(
    0,
    currentPage * projectsPerPage
  );
  const hasMore = displayedProjects.length < nonFeaturedProjects.length;

  const loadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleFilterClick = (cat) => {
    ReactGA.event({ category: 'Projects', action: 'Filter', label: cat });
    setFilter(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (key) => {
    ReactGA.event({ category: 'Projects', action: 'Sort', label: key });
    setSort(key);
    setCurrentPage(1);
  };

  const trackCaseStudyClick = (title) => {
    ReactGA.event({
      category: 'Projects',
      action: 'Case Study Click',
      label: title,
    });
  };

  const trackDemoClick = (title) => {
    ReactGA.event({
      category: 'Projects',
      action: 'Demo Click',
      label: title,
    });
  };

  const trackGitHubClick = (title) => {
    ReactGA.event({
      category: 'Projects',
      action: 'GitHub Click',
      label: title,
    });
  };

  return (
    <>
      <Helmet>
        <title>Projects & Case Studies — aRelic</title>
        <meta
          name="description"
          content="Explore software, mobile, networking, infrastructure and ICT projects designed and developed by Emmanuel Mukumbwa (aRelic)."
        />
      </Helmet>

      <Container className="py-5">
        {/* Header */}
        <div className="projects-header mb-4">
          <h1 className="display-4 fw-bold mb-3">Projects & Case Studies</h1>
          <p className="lead text-muted mb-2">
            A selection of software, mobile, infrastructure and ICT solutions
            I've designed, developed or deployed.
          </p>
          <p className="text-muted small">
            Each case study covers the problem, solution, architecture,
            implementation, challenges and outcome.
          </p>
        </div>

        {/* Stats strip */}
        <Row className="g-3 mb-5">
          <Col xs={6} md={3}>
            <div className="stat-card text-center p-3">
              <div className="stat-value">{stats.totalProjects}</div>
              <div className="stat-label text-muted small">Projects</div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="stat-card text-center p-3">
              <div className="stat-value">{stats.totalTechnologies}</div>
              <div className="stat-label text-muted small">Technologies</div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="stat-card text-center p-3">
              <div className="stat-value">{stats.totalCategories}</div>
              <div className="stat-label text-muted small">Solution Areas</div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="stat-card text-center p-3">
              <div className="stat-value">{stats.availability}</div>
              <div className="stat-label text-muted small">Availability</div>
            </div>
          </Col>
        </Row>

        {/* Search + Sort */}
        <Row className="mb-4 align-items-end">
          <Col md={6}>
            <Form.Group controlId="projectSearch">
              <Form.Label className="fw-semibold">Search projects</Form.Label>
              <Form.Control
                type="search"
                placeholder="e.g. Flutter, network, NGO"
                value={search}
                onChange={handleSearchChange}
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mt-3 mt-md-0 text-md-end">
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="sortDropdown">
                Sort: {sort.charAt(0).toUpperCase() + sort.slice(1)}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSortChange('featured')}>
                  Featured
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortChange('newest')}>
                  Newest
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortChange('oldest')}>
                  Oldest
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortChange('az')}>
                  A–Z
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        {/* Category filters (scrollable on mobile) */}
        <div className="project-filters mb-4">
          {allCategories.map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant={filter === cat ? 'success' : 'outline-secondary'}
              onClick={() => handleFilterClick(cat)}
              className="me-1 mb-1"
            >
              {cat === 'all' ? 'All' : cat.toUpperCase()}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-5">
            <h2 className="h3 mb-3">Featured Work</h2>
            <Row className="g-4">
              {featuredProjects.slice(0, 3).map((p) => {
                const hero = resolveAsset(p.heroImage) || fallbackImage;
                return (
                  <Col lg={6} key={p.id}>
                    <Card className="h-100 project-card featured-project-card">
                      <div className="project-thumb">
                        <img
                          src={hero}
                          alt={p.title}
                          className="img-fluid project-thumb-img"
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = fallbackImage;
                          }}
                        />
                        <span className="featured-badge">★ Featured</span>
                      </div>
                      <Card.Body className="d-flex flex-column">
                        <small className="project-type text-uppercase text-muted mb-1">
                          {p.type || p.category || 'Project'}
                        </small>
                        <h3 className="h4 mb-2">{p.title}</h3>
                        <p className="text-muted mb-3">{p.shortDescription}</p>

                        {p.problem && p.solution && (
                          <div className="case-study-preview mb-3">
                            <p className="mb-1">
                              <strong>Problem:</strong> {p.problem}
                            </p>
                            <p className="mb-1">
                              <strong>Solution:</strong> {p.solution}
                            </p>
                          </div>
                        )}

                        <div className="tech-badges mb-2">
                          {(p.tech || []).slice(0, 4).map((t) => (
                            <Badge bg="light" text="dark" className="me-1 mb-1" key={t}>
                              {t}
                            </Badge>
                          ))}
                        </div>

                        {p.impact && (
                          <p className="mb-2">
                            <strong>Outcome:</strong> {p.impact}
                          </p>
                        )}

                        <div className="project-meta small text-muted mb-3">
                          {p.role && <div>Role: {p.role}</div>}
                          {p.year && <div>Year: {p.year}</div>}
                          {p.status && <div>Status: {p.status}</div>}
                        </div>

                        <div className="mt-auto d-flex flex-wrap gap-2 card-actions">
                          <Button
                            as={Link}
                            to={`/projects/${p.slug}`}
                            variant="success"
                            onClick={() => trackCaseStudyClick(p.title)}
                          >
                            View Case Study →
                          </Button>
                          {p.demo && (
                            <Button
                              href={p.demo}
                              target="_blank"
                              rel="noreferrer"
                              variant="outline-secondary"
                              onClick={() => trackDemoClick(p.title)}
                            >
                              Live Demo ↗
                            </Button>
                          )}
                          {p.github && (
                            <Button
                              href={p.github}
                              target="_blank"
                              rel="noreferrer"
                              variant="outline-secondary"
                              onClick={() => trackGitHubClick(p.title)}
                            >
                              GitHub ↗
                            </Button>
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </section>
        )}

        {/* Other Projects */}
        <section>
          <h2 className="h3 mb-3">More Projects</h2>
          <Row className="g-4">
            {displayedProjects.map((p) => {
              const hero = resolveAsset(p.heroImage) || fallbackImage;
              return (
                <Col md={6} lg={4} key={p.id}>
                  <Card className="h-100 project-card">
                    <div className="project-thumb">
                      <img
                        src={hero}
                        alt={p.title}
                        className="img-fluid project-thumb-img"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = fallbackImage;
                        }}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <small className="project-type text-uppercase text-muted mb-1">
                        {p.type || p.category || 'Project'}
                      </small>
                      <h5 className="mb-2">{p.title}</h5>
                      <p className="text-muted small card-summary mb-3">
                        {p.shortDescription}
                      </p>

                      <div className="tech-badges mb-2">
                        {(p.tech || []).slice(0, 4).map((t) => (
                          <Badge bg="light" text="dark" className="me-1 mb-1" key={t}>
                            {t}
                          </Badge>
                        ))}
                        {(p.tech || []).length > 4 && (
                          <Badge bg="light" text="dark" className="mb-1">
                            +{(p.tech || []).length - 4}
                          </Badge>
                        )}
                      </div>

                      {p.impact && (
                        <p className="mb-2">
                          <strong>Outcome:</strong> {p.impact}
                        </p>
                      )}

                      <div className="project-meta small text-muted mb-3">
                        {p.year && <span>{p.year}</span>}
                        {p.year && p.status && <span> • </span>}
                        {p.status && <span>{p.status}</span>}
                      </div>

                      <div className="mt-auto d-flex flex-wrap gap-2 card-actions">
                        <Button
                          as={Link}
                          to={`/projects/${p.slug}`}
                          variant="success"
                          size="sm"
                          onClick={() => trackCaseStudyClick(p.title)}
                        >
                          View Case Study →
                        </Button>
                        {p.demo && (
                          <Button
                            href={p.demo}
                            target="_blank"
                            rel="noreferrer"
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => trackDemoClick(p.title)}
                          >
                            Live Demo ↗
                          </Button>
                        )}
                        {p.github && (
                          <Button
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => trackGitHubClick(p.title)}
                          >
                            GitHub ↗
                          </Button>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>

          {displayedProjects.length === 0 && (
            <div className="text-center text-muted py-5">
              No projects match your criteria. Try a different filter or search.
            </div>
          )}
        </section>

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-5">
            <Button variant="outline-success" onClick={loadMore}>
              Load More Projects
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="projects-cta mt-5 pt-4 border-top">
          <Row className="align-items-center">
            <Col md={8}>
              <h3 className="fw-bold mb-2">Like what you see?</h3>
              <p className="text-muted mb-0">
                I can design and build something similar for your organisation.
              </p>
            </Col>
            <Col md={4} className="text-md-end mt-3 mt-md-0">
              <div className="d-flex flex-wrap justify-content-md-end gap-2">
                <Button
                  as={Link}
                  to="/contact?subject=Project%20Enquiry"
                  variant="success"
                >
                  Discuss Your Project
                </Button>
                <Button
                  as={Link}
                  to="/quotes"
                  variant="outline-success"
                >
                  View Services & Pricing
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
