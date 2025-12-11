// src/pages/Testimonials.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Container, Card, Button, Image, Carousel, Row, Col, ButtonGroup
} from 'react-bootstrap';
import { FaThLarge, FaList } from 'react-icons/fa';
import testimonials from '../data/testimonials';
import './Testimonials.css';

// helper: dicebear identicon fallback
const getPlaceholder = (seed) => `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(seed)}&scale=100`;

export default function Testimonials() {
  const [view, setView] = useState('grid'); // 'grid' | 'carousel'

  return (
    <>
      <Helmet>
        <title>Professional References — Emmanuel (aRelic)</title>
        <meta
          name="description"
          content="Professional references for Emmanuel (aRelic) Mukumbwa — referees drawn from academic, industrial, and instructional work. Contact details are available on request."
        />
      </Helmet>

      <main className="testimonials-page">
        <Container className="py-5">
          <div className="d-flex align-items-start justify-content-between mb-4 gap-3">
            <div>
              <h2 className="page-title mb-1">Professional References</h2>
              <p className="text-muted mb-0">Referees drawn from academic, industrial and instructional work. Contact details available on request.</p>
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
                  <Card className="reference-card h-100">
                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <Image
                          src={t.avatar ?? getPlaceholder(t.name)}
                          alt={`${t.name} avatar`}
                          onError={(e) => { e.target.onerror = null; e.target.src = getPlaceholder(t.name); }}
                          className="reference-avatar"
                          roundedCircle
                        />
                        <div className="flex-grow-1">
                          <div className="fw-semibold">{t.name}</div>
                          <div className="text-muted small">{t.role}</div>
                          <div className="text-muted small">{t.company}</div>
                          <div className="text-muted small">Contact available on request</div>
                          {t.logo && (
                            <img
                              src={t.logo}
                              alt={`${t.company} logo`}
                              className="reference-company-logo mt-2"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          )}
                        </div>
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
                <Carousel className="reference-carousel" interval={9000} fade controls indicators>
                  {testimonials.map(t => (
                    <Carousel.Item key={t.id}>
                      <div className="carousel-reference d-flex flex-column flex-md-row gap-3 align-items-center p-3">
                        <div className="carousel-side text-center text-md-start">
                          <Image
                            src={t.avatar ?? getPlaceholder(t.name)}
                            alt={`${t.name} avatar`}
                            onError={(e) => { e.target.onerror = null; e.target.src = getPlaceholder(t.name); }}
                            className="reference-avatar-lg mb-2"
                            roundedCircle
                          />
                          <div className="fw-semibold">{t.name}</div>
                          <div className="text-muted small">{t.role}</div>
                          <div className="text-muted small">{t.company}</div>
                          <div className="text-muted small mt-1">Contact available on request</div>
                         </div>

                        <div className="flex-grow-1">
                          {/* Intentionally lightweight: no quotes or ratings */}
                        </div>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Card.Body>
            </Card>
          )}
        </Container> 
      </main>
    </>
  );
}
