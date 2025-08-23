import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Container, Row, Col, Card, Button, Badge, Image, ListGroup, Carousel, Modal
} from 'react-bootstrap';
import { FaCheckCircle, FaDownload, FaStar } from 'react-icons/fa';
import './About.css';
import ContactForm from '../components/ContactForm';

const services = [
  {
    id: 'web-app',
    title: 'Web & Mobile-friendly Apps',
    desc: 'Responsive React front-ends and lightweight server APIs designed to work well even on limited data connections common in Malawi.',
    bullets: ['Low-bandwidth optimisations', 'Responsive UI', 'Simple deployment & docs']
  },
  {
    id: 'api',
    title: 'APIs & Integrations',
    desc: 'Payment flows (including mobile-money patterns), webhook handlers and secure endpoints for local payments and services.',
    bullets: ['Mobile money friendly flows', 'Webhook handling', 'Retry & idempotency']
  },
  {
    id: 'dashboard',
    title: 'Admin Dashboards & Tools',
    desc: 'Simple admin panels for staff, supervisors, or small NGOs to manage users, reports and basic exports without a steep learning curve.',
    bullets: ['Role-based access', 'CSV exports', 'Charts & filters']
  },
  {
    id: 'audit',
    title: 'UX, Accessibility & Performance',
    desc: 'Quick audits and low-cost fixes that improve usability on mobile and older devices — higher task completion, fewer support requests.',
    bullets: ['Performance profiling', 'Accessibility fixes', 'Actionable roadmap']
  },
  {
    id: 'teaching',
    title: 'Workshops & Mentorship',
    desc: 'Hands-on workshops for campus teams and one-on-one mentoring for students building their first apps or portfolios.',
    bullets: ['Practical labs', 'CV & portfolio coaching', 'Interview prep']
  }
];

const skills = [
  'React', 'Node.js', 'Express', 'MySQL', 'Bootstrap', 'Accessibility', 'Testing (Jest)',
  'CI/CD', 'Vercel/Netlify', 'Postman', 'EmailJS', 'GA4'
];

const timeline = [
  {
    year: '2022-25',
    title: 'CampusTalent — Capstone & MVP',
    detail: 'Developed as my final year capstone project while upgrading in ICT at Mzuzu University (2022–25). CampusTalent is a gig-marketplace that connects students with local recruiters. I designed and built the full-stack MVP with recruiter verification, student portfolios, and escrow-like payment flows — laying the foundation for a scalable student talent platform.'
  },
  {
    year: '2021-22',
    title: 'ICT Instructor — Paradox Technical College',
    detail: 'Delivered practical labs and mentored students on foundational computing and small app projects across Chitipa and nearby districts.'
  },
  {
    year: '2019-21',
    title: 'Advanced Diploma — MUBAS',
    detail: 'Strengthened my systems thinking and communications skills to design usable, maintainable applications.'
  }
];

// Testimonials with short + full text, date, optional avatar/logo and rating
const testimonials = [
  {
    id: 1,
    name: 'GoodHope Ministries',
    role: 'Client (Mzuzu NGO)',
    company: 'GoodHope Ministries',
    date: 'Mar 2024',
    quoteShort: 'Reliable and very responsive — built us a simple, fast site that our team can update without fuss.',
    quoteFull: 'Reliable and very responsive — built us a simple, fast site that our team can update without fuss. The handover was clear, and Emmanuel followed up after deployment to help with the initial content updates. Highly recommended for small NGOs.',
    avatar: '/logos/goodhope-avatar.png',
    logo: '/logos/goodhope.png',
    rating: 5
  },
  {
    id: 2,
    name: 'Campus Club President',
    role: 'Student leader (Mzuni)',
    company: 'Mzuni Robotics Club',
    date: 'Jan 2025',
    quoteShort: 'Helped us build a lightweight event sign-up system that actually made attendance tracking painless.',
    quoteFull: 'Helped us build a lightweight event sign-up system that actually made attendance tracking painless. The system worked well on phones and used very little data — perfect for our members.',
    avatar: '/avatars/student1.png',
    logo: '/logos/mzuni-club.png',
    rating: 5
  },
  {
    id: 3,
    name: 'Lecturer — Paradox',
    role: 'Partner (Paradox Technical College)',
    company: 'Paradox Technical College',
    date: 'Dec 2023',
    quoteShort: 'Clear explanations and practical workshops — students came away with real skills.',
    quoteFull: 'Clear explanations and practical workshops — students came away with real skills. Emmanuel tailored examples to local contexts which made the sessions engaging and directly applicable.',
    avatar: '/avatars/lecturer.png',
    logo: '/logos/paradox.png',
    rating: 4
  }
];

export default function About() {
  const [showModal, setShowModal] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  const openModal = (t) => {
    setActiveTestimonial(t);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setActiveTestimonial(null);
  };

  return (
    <>
      <Helmet>
        <title>About — Emmanuel (aRelic) Mukumbwa</title>
        <meta
          name="description"
          content="About Emmanuel (aRelic) — full stack developer and ICT educator from Mzuzu. Services include web apps, mobile-money aware integrations, dashboards and mentoring."
        />
      </Helmet>

      <main className="about-page">
        <Container className="py-5">
          {/* HERO / STORY */}
          <Row className="align-items-center mb-4">
            <Col lg={7}>
              <h1 className="mb-2">I make simple, reliable web applications for students, teams and small organisations.</h1>

              <p className="lead text-muted">
                I’m Emmanuel — people call me <strong>aRelic</strong>. I grew up mostly in the northern region of Malawi,
                studied ICT at Mzuni and taught practical computing in the North.
                I build websites and applications that actually get used — whether
                that’s a student marketplace, a site for a local NGO, or a dashboard for a campus club.
              </p>

              <p className="text-muted small">
                My work focuses on useful outcomes: faster processes, fewer support calls,
                and software that runs well on the phones and connections people already have here in Malawi.
              </p>

              <div className="hero-stats d-flex gap-3 mt-3">
                <Badge bg="success">5 projects</Badge>
                <Badge bg="success">3 paying clients</Badge>
                <Badge bg="success">Local-first thinking</Badge>
              </div>

              <div className="mt-4 d-flex gap-2">
                <Button href="/contact?subject=Hiring%20Emmanuel" variant="success">Request Quote</Button>
                <Button href="/projects" variant="outline-success">See Case Studies</Button>
                <Button href="/resume" variant="light" className="ms-2">
                  <FaDownload className="me-1" /> View CV
                </Button>
              </div>
            </Col>

            <Col lg={5} className="text-center mt-4 mt-lg-0">
              <Image
                src="/hero-illustration.svg"
                alt="Emmanuel illustration"
                className="about-portrait hero-illustration"
                fluid
              />
            </Col>
          </Row>

          <Row className="g-4">
            {/* SERVICES */}
            <Col lg={8}>
              <Card className="glass-card mb-4">
                <Card.Body>
                  <h4 className="mb-3">How I can help (practical examples)</h4>
                  <Row xs={1} md={2} className="g-3">
                    {services.map(s => (
                      <Col key={s.id}>
                        <div className="service-tile p-3 h-100">
                          <h5 className="mb-1">{s.title}</h5>
                          <p className="text-muted small mb-2">{s.desc}</p>
                          <div className="small">
                            {s.bullets.map(b => (
                              <div key={b}><FaCheckCircle className="text-success me-1" /> {b}</div>
                            ))}
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>

              {/* TIMELINE */}
              <Card className="glass-card mb-4">
                <Card.Body>
                  <h4 className="mb-3">Journey so far</h4>
                  <ListGroup variant="flush">
                    {timeline.map((t, idx) => (
                      <ListGroup.Item key={idx} className="timeline-item">
                        <div className="d-flex justify-content-between">
                          <div>
                            <strong>{t.title}</strong>
                            <div className="text-muted small">{t.detail}</div>
                          </div>
                          <div className="text-muted small">{t.year}</div>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>

              {/* TESTIMONIALS (refined) */}
              <Card className="glass-card">
                <Card.Body>
                  <h4 className="mb-3">What people say</h4>

                  <Carousel className="testimonial-carousel" interval={8000} fade controls indicators>
                    {testimonials.map(t => (
                      <Carousel.Item key={t.id}>
                        <div className="d-flex flex-column flex-md-row align-items-center gap-3 p-3">
                          <div className="text-center text-md-start me-md-3">
                            <Image
                              src={t.avatar}
                              alt={`${t.name} avatar`}
                              onError={(e) => { e.target.onerror = null; e.target.src = '/default-avatar.png'; }}
                              className="testimonial-avatar mb-2"
                              roundedCircle
                            />

                            {t.logo && (
                              <div className="mt-2 mb-1">
                                <img src={t.logo} alt={`${t.company} logo`} className="testimonial-company-logo" onError={(e) => { e.target.style.display = 'none'; }} />
                              </div>
                            )}

                            <div className="testimonial-name"><strong>{t.name}</strong></div>
                            <div className="text-muted small">{t.role} • <span className="text-muted">{t.date}</span></div>

                            <div className="testimonial-rating mt-2" aria-hidden>
                              {Array.from({ length: t.rating }).map((_, i) => <FaStar key={i} className="me-1" />)}
                            </div>
                          </div>

                          <div className="flex-grow-1">
                            <blockquote className="blockquote testimonial-quote mb-3">
                              <p className="mb-1">“{t.quoteShort}”</p>
                              <footer className="blockquote-footer text-muted mt-2">{t.company}</footer>
                            </blockquote>

                            <div>
                              <Button variant="outline-success" size="sm" onClick={() => openModal(t)}>Read more</Button>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Card.Body>
              </Card>
            </Col>

            {/* SIDEBAR: SKILLS + CONTACT */}
            <Col lg={4}>
              <Card className="glass-card mb-4">
                <Card.Body>
                  <h5>Core skills</h5>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {skills.map(s => <Badge bg="secondary" key={s}>{s}</Badge>)}
                  </div>

                  <hr />

                  <h6 className="mt-3">Who I work with</h6>
                  <ul>
                    <li>Student founders and campus clubs</li>
                    <li>Small businesses and NGOs in Malawi</li>
                    <li>Researchers or lecturers who need simple tools</li>
                  </ul>

                  <div className="d-grid mt-3">
                    <Button href="/contact?subject=Project%20enquiry" variant="success">Talk to me</Button>
                    <Button href="/projects" variant="outline-success" className="mt-2">See case studies</Button>
                  </div>
                </Card.Body>
              </Card>

              <Card className="glass-card">
                <Card.Body>
                  <h5>Quick contact</h5>
                  <p className="text-muted small mb-2">Tell me what you need — I usually reply in 24–48 hours.</p>
                  <ContactForm inline onSuccess={() => {/* optional callback */}} />
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>

        {/* Modal for full testimonial */}
        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{activeTestimonial?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="text-muted small">{activeTestimonial?.role} — {activeTestimonial?.company} • {activeTestimonial?.date}</p>
            <p>{activeTestimonial?.quoteFull}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>

      </main>
    </>
  );
}
