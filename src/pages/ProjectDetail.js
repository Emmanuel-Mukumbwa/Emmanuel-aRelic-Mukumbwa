// src/pages/ProjectDetail.jsx
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Badge,
  Button,
  Spinner,
  Card,
  Breadcrumb,
  Modal,
} from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import projects from '../data/projects';
import ContactForm from '../components/ContactForm';
import './ProjectDetail.css';
import {
  FaCheckCircle,
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCalendarAlt,
  FaLightbulb,
  FaLayerGroup,
  FaListUl,
  FaChartLine,
  FaWrench,
  FaQuoteLeft,
} from 'react-icons/fa';

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

// Stable inline SVG placeholder – always loads, never broken
const PLACEHOLDER_IMAGE =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
       <rect width="800" height="600" fill="#f1f5f9"/>
       <text x="400" y="300" font-family="Arial, sans-serif" font-size="28" fill="#64748b" text-anchor="middle">No Image Available</text>
     </svg>`
  );

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  const heroSrc = resolveAsset(project.heroImage) || PLACEHOLDER_IMAGE;
  const galleryImages = (project.images || [])
    .map(resolveAsset)
    .filter(Boolean);

  const relatedProjects = projects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        (p.category === project.category ||
          (p.industry && p.industry === project.industry))
    )
    .slice(0, 3);

  const openLightbox = (src) => {
    setLightboxSrc(src);
    setShowLightbox(true);
  };

  return (
    <>
      <Helmet>
        <title>{project.title} — Case Study | aRelic</title>
        <meta name="description" content={project.shortDescription} />
        <meta property="og:title" content={`${project.title} — Case Study | aRelic`} />
        <meta property="og:description" content={project.shortDescription} />
        <meta property="og:type" content="article" />
        {heroSrc !== PLACEHOLDER_IMAGE && <meta property="og:image" content={heroSrc} />}
      </Helmet>

      <Container className="py-5">
        {/* Breadcrumbs */}
        <Breadcrumb className="project-breadcrumb">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/projects' }}>
            Projects
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{project.title}</Breadcrumb.Item>
        </Breadcrumb>

        {/* Back button */}
        <Button
          variant="link"
          className="ps-0 mb-3 text-success"
          onClick={() => navigate('/projects')}
        >
          <FaArrowLeft className="me-1" /> All Projects
        </Button>

        {/* Header */}
        <Row className="align-items-start g-4 mb-5">
          <Col lg={8}>
            <div className="project-type-badge text-uppercase small text-muted fw-bold mb-2">
              {project.type || project.category || 'Project'}
            </div>
            <h1 className="display-5 fw-bold mb-3">{project.title}</h1>
            <p className="lead text-muted mb-4">{project.shortDescription}</p>

            <div className="tech-badges mb-4">
              {(project.tech || []).map((t) => (
                <Badge bg="light" text="dark" className="me-1 mb-1" key={t}>
                  {t}
                </Badge>
              ))}
            </div>

            <div className="d-flex flex-wrap gap-2">
              {project.demo && (
                <Button
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="success"
                >
                  <FaExternalLinkAlt className="me-1" /> Live Demo
                </Button>
              )}
              {project.repo && (
                <Button
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline-dark"
                >
                  <FaGithub className="me-1" /> GitHub Repository
                </Button>
              )}
              <Button
                as={Link}
                to={`/contact?subject=Similar%20to%20${encodeURIComponent(
                  project.title
                )}`}
                variant="outline-success"
              >
                Discuss a Similar Project
              </Button>
            </div>
          </Col>

          <Col lg={4}>
            <Card className="project-meta-card">
              <Card.Body>
                <h5 className="mb-3">Project Details</h5>
                <div className="project-meta-grid">
                  <div>
                    <span>Role</span>
                    <strong>{project.role || 'Developer'}</strong>
                  </div>
                  <div>
                    <span>Category</span>
                    <strong>{project.category || 'Software'}</strong>
                  </div>
                  {project.industry && (
                    <div>
                      <span>Industry</span>
                      <strong>{project.industry}</strong>
                    </div>
                  )}
                  <div>
                    <span>Status</span>
                    <strong>{project.status || 'Completed'}</strong>
                  </div>
                  {project.year && (
                    <div>
                      <span>Year</span>
                      <strong>{project.year}</strong>
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Main content and sidebar */}
        <Row className="g-5">
          <Col lg={8}>
            {/* Hero image */}
            <div className="project-hero mb-5">
              <img
                src={heroSrc}
                alt={project.title}
                className="project-hero-img"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = PLACEHOLDER_IMAGE;
                }}
              />
            </div>

            {/* Challenge */}
            {project.challenge && (
              <section className="case-section mb-5">
                <h2 className="section-heading">
                  <FaLightbulb className="me-2 text-success" />
                  The Challenge
                </h2>
                <p className="text-muted">{project.challenge}</p>
              </section>
            )}

            {/* Solution */}
            {project.solution && (
              <section className="case-section mb-5">
                <h2 className="section-heading">
                  <FaLayerGroup className="me-2 text-success" />
                  The Solution
                </h2>
                <p className="text-muted">{project.solution}</p>
              </section>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <section className="case-section mb-5">
                <h2 className="section-heading">
                  <FaListUl className="me-2 text-success" />
                  Key Features
                </h2>
                <div className="feature-grid">
                  {project.features.map((feature, idx) => (
                    <div className="feature-item" key={idx}>
                      <FaCheckCircle className="text-success me-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Contribution */}
            {project.contribution && project.contribution.length > 0 && (
              <section className="case-section mb-5">
                <h2 className="section-heading">
                  <FaWrench className="me-2 text-success" />
                  My Contribution
                </h2>
                <ul className="contribution-list">
                  {project.contribution.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Technology stack */}
            {project.tech && project.tech.length > 0 && (
              <section className="case-section mb-5">
                <h2 className="section-heading">
                  <FaLayerGroup className="me-2 text-success" />
                  Technology Stack
                </h2>
                <div className="tech-badges">
                  {project.tech.map((t) => (
                    <Badge bg="light" text="dark" className="me-1 mb-1" key={t}>
                      {t}
                    </Badge>
                  ))}
                </div>
              </section>
            )}

            {/* Outcome */}
            {project.outcome && project.outcome.length > 0 && (
              <section className="case-section mb-5">
                <h2 className="section-heading">
                  <FaChartLine className="me-2 text-success" />
                  Outcome
                </h2>
                <ul className="outcome-list">
                  {project.outcome.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Gallery */}
            {galleryImages.length > 0 && (
              <section className="case-section mb-5">
                <h2 className="section-heading">Screenshots</h2>
                <Row className="g-3">
                  {galleryImages.map((src, idx) => (
                    <Col md={6} key={idx}>
                      <button
                        className="gallery-item"
                        onClick={() => openLightbox(src)}
                      >
                        <div className="gallery-thumb">
                          <img
                            src={src}
                            alt={`${project.title} screenshot ${idx + 1}`}
                            className="img-fluid"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = PLACEHOLDER_IMAGE;
                            }}
                          />
                        </div>
                      </button>
                    </Col>
                  ))}
                </Row>
              </section>
            )}

            {/* Related projects */}
            {relatedProjects.length > 0 && (
              <section className="case-section mb-5">
                <h2 className="section-heading mb-4">Related Projects</h2>
                <Row className="g-4">
                  {relatedProjects.map((rp) => (
                    <Col md={4} key={rp.id}>
                      <Card className="h-100 related-card">
                        <div className="related-thumb">
                          <img
                            src={resolveAsset(rp.heroImage) || PLACEHOLDER_IMAGE}
                            alt={rp.title}
                            className="img-fluid"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = PLACEHOLDER_IMAGE;
                            }}
                          />
                        </div>
                        <Card.Body>
                          <Card.Title className="h6">{rp.title}</Card.Title>
                          <Card.Text className="small text-muted">
                            {rp.shortDescription}
                          </Card.Text>
                          <Button
                            as={Link}
                            to={`/projects/${rp.slug}`}
                            variant="outline-success"
                            size="sm"
                          >
                            View Case Study
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </section>
            )}

            {/* Discussion CTA */}
            <section className="case-section mb-5">
              <Card className="project-cta-card">
                <Card.Body className="text-center p-4">
                  <h3 className="fw-bold mb-2">Have a similar challenge?</h3>
                  <p className="text-muted mb-4">
                    Let's discuss the problem, scope and best technical approach.
                  </p>
                  <Button
                    as={Link}
                    to={`/contact?subject=Similar%20to%20${encodeURIComponent(
                      project.title
                    )}`}
                    variant="success"
                    size="lg"
                  >
                    Start a Conversation
                  </Button>
                </Card.Body>
              </Card>
            </section>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            <div className="project-sidebar">
              <Card className="project-quote-card mb-4">
                <Card.Body>
                  <h5 className="d-flex align-items-center mb-3">
                    <FaQuoteLeft className="text-success me-2" />
                    Request a Proposal
                  </h5>
                  <p className="text-muted small">
                    I can help you plan, build and deploy something like this.
                    Tell me about your project and I'll reply with a short
                    milestone plan and estimate.
                  </p>
                  <Button
                    variant="success"
                    href={`/contact?subject=${encodeURIComponent(
                      `Quote: ${project.title}`
                    )}`}
                    className="w-100 mb-2"
                  >
                    Request a Proposal
                  </Button>
                  <Button
                    variant="outline-secondary"
                    href="https://calendly.com/your-calendly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-100"
                  >
                    <FaCalendarAlt className="me-1" /> Book a Short Call
                  </Button>
                </Card.Body>
              </Card>

              <Card className="project-summary-card">
                <Card.Body>
                  <h6>Typical Process</h6>
                  <ul className="process-mini-list">
                    <li>Discovery</li>
                    <li>Proposal</li>
                    <li>Development</li>
                    <li>Deployment</li>
                    <li>Support</li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        {/* Full Contact Form near bottom */}
        <section className="mt-5 pt-4 border-top">
          <h2 className="text-center mb-4">Tell Me About Your Project</h2>
          <ContactForm
            inline
            presetSubject={`Quote: ${project.title}`}
            onSuccess={() => {
              // optional callback after success
            }}
          />
        </section>
      </Container>

      {/* Lightbox Modal */}
      <Modal
        show={showLightbox}
        onHide={() => setShowLightbox(false)}
        centered
        size="lg"
        className="project-lightbox"
      >
        <Modal.Body className="p-0">
          <img
            src={lightboxSrc}
            alt="Project screenshot"
            className="img-fluid w-100"
            style={{ maxHeight: '80vh', objectFit: 'contain' }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = PLACEHOLDER_IMAGE;
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectDetail;
