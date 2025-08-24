// src/pages/Testimonials.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Container, Card, Button, Image, Carousel, Modal, Row, Col, ButtonGroup
} from 'react-bootstrap';
import { FaStar, FaThLarge, FaList } from 'react-icons/fa';
import testimonials from '../data/testimonials';
import defaultAvatar from '../assets/default-avatar.png';
import './Testimonials.css';

export default function Testimonials() {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(null);
  const [view, setView] = useState('grid'); // 'grid' | 'carousel'

  const open = (t) => { setActive(t); setShowModal(true); };
  const close = () => { setShowModal(false); setActive(null); };

  return (
    <>
      <Helmet>
        <title>Testimonials — Emmanuel (aRelic)</title>
        <meta name="description" content="What clients, students and partners say about working with Emmanuel (aRelic)." />
      </Helmet>

      <main className="testimonials-page">
        <Container className="py-5">
          <div className="d-flex align-items-start justify-content-between mb-4 gap-3">
            <div>
              <h2 className="page-title mb-1">Testimonials</h2>
              <p className="text-muted mb-0">Real feedback from clients, students and partners — honest, local, and practical.</p>
            </div>

            <div className="view-controls">
              <ButtonGroup aria-label="Display options">
                <Button
                  variant={view === 'grid' ? 'success' : 'outline-secondary'}
                  onClick={() => setView('grid')}
                  title="Grid view"
                  aria-pressed={view === 'grid'}
                >
                  <FaThLarge className="me-1" /> Grid
                </Button>
                <Button
                  variant={view === 'carousel' ? 'success' : 'outline-secondary'}
                  onClick={() => setView('carousel')}
                  title="Carousel view"
                  aria-pressed={view === 'carousel'}
                >
                  <FaList className="me-1" /> Carousel
                </Button>
              </ButtonGroup>
            </div>
          </div>

          {/* GRID VIEW */}
          {view === 'grid' && (
            <Row xs={1} md={2} lg={3} className="g-3">
              {testimonials.map(t => (
                <Col key={t.id}>
                  <Card className="testimonial-card h-100">
                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <Image
                          src={t.avatar ?? defaultAvatar}
                          alt={`${t.name} avatar`}
                          onError={(e) => { e.target.onerror = null; e.target.src = defaultAvatar; }}
                          className="testimonial-avatar"
                          roundedCircle
                        />
                        <div className="flex-grow-1">
                          <div className="fw-semibold">{t.name}</div>
                          <div className="text-muted small">{t.role} • {t.date}</div>
                          {t.logo && (
                            <img
                              src={t.logo}
                              alt={`${t.company} logo`}
                              className="testimonial-company-logo mt-2"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          )}
                        </div>
                      </div>

                      <div className="flex-grow-1 mb-3">
                        <p className="testimonial-short mb-2">“{t.quoteShort}”</p>
                        <div className="text-muted small">{t.company}</div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <div className="testimonial-rating" aria-hidden>
                          {Array.from({ length: t.rating }).map((_, i) => <FaStar key={i} className="me-1" />)}
                        </div>
                        <Button variant="outline-success" size="sm" onClick={() => open(t)} aria-label={`Read full testimonial from ${t.name}`}>
                          Read more
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          {/* CAROUSEL VIEW */}
          {view === 'carousel' && (
            <Card className="glass-card">
              <Card.Body>
                <Carousel className="testimonial-carousel" interval={9000} fade controls indicators>
                  {testimonials.map(t => (
                    <Carousel.Item key={t.id}>
                      <div className="carousel-testimonial d-flex flex-column flex-md-row gap-3 align-items-center p-3">
                        <div className="carousel-side text-center text-md-start">
                          <Image
                            src={t.avatar ?? defaultAvatar}
                            alt={`${t.name} avatar`}
                            onError={(e) => { e.target.onerror = null; e.target.src = defaultAvatar; }}
                            className="testimonial-avatar-lg mb-2"
                            roundedCircle
                          />
                          <div className="fw-semibold">{t.name}</div>
                          <div className="text-muted small">{t.role} • {t.date}</div>
                          {t.logo && <img src={t.logo} alt={`${t.company} logo`} className="testimonial-company-logo mt-2" onError={(e) => { e.target.style.display = 'none'; }} />}
                          <div className="testimonial-rating mt-2" aria-hidden>
                            {Array.from({ length: t.rating }).map((_, i) => <FaStar key={i} className="me-1" />)}
                          </div>
                        </div>

                        <div className="flex-grow-1">
                          <blockquote className="blockquote testimonial-quote mb-0">
                            <p className="mb-2">“{t.quoteShort}”</p>
                            <footer className="blockquote-footer text-muted">{t.company}</footer>
                          </blockquote>

                          <div className="mt-3">
                            <Button variant="outline-success" onClick={() => open(t)} aria-label={`Read full testimonial from ${t.name}`}>
                              Read more
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Card.Body>
            </Card>
          )}
        </Container>

        {/* FULL-MESSAGE MODAL */}
        <Modal show={showModal} onHide={close} centered>
          <Modal.Header closeButton>
            <Modal.Title>{active?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="text-muted small mb-2">{active?.role} — {active?.company} • {active?.date}</p>
            <p>{active?.quoteFull}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  );
}
