// src/pages/About.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Container, Row, Col, Card, Button, Badge, Image, ListGroup
} from 'react-bootstrap';
import { FaCheckCircle, FaDownload, FaStar } from 'react-icons/fa';
import './About.css';
import ContactForm from '../components/ContactForm';
import testimonials from '../data/testimonials';
import heroIllustration from '../assets/me.jpg';
import defaultAvatar from '../assets/me.jpg';

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

export default function About() {
  // featured testimonials on About (first two)
  const featured = testimonials.slice(0, 2);

  return (
    <>
      <Helmet>
        <title>About — Emmanuel (aRelic) Mukumbwa</title>
        <meta
          name="description"
          content="About Emmanuel (aRelic) — full stack developer and ICT 
          educator from lilongwe, Malawi. Services include web apps, mobile-money aware integrations, dashboards and mentoring."
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
                src={heroIllustration}
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

              {/* Featured testimonials (styled) */}
              <Card className="glass-card">
                <Card.Body>
                  <h4 className="mb-3">What people say</h4>

                  <div className="featured-testimonials d-flex flex-column gap-3">
                    {featured.map((t) => (
                      <div key={t.id} className="featured-tile d-flex gap-3 align-items-start" role="group" aria-label={`Testimonial from ${t.name}`}>
                        <div className="featured-left text-center text-start">
                          <Image
                            src={t.avatar ?? defaultAvatar}
                            alt={`${t.name} avatar`}
                            className="featured-avatar"
                            roundedCircle
                            onError={(e) => { e.target.onerror = null; e.target.src = defaultAvatar; }}
                          />
                          {t.logo && <img src={t.logo} alt={`${t.company} logo`} className="featured-logo mt-2" onError={(e) => { e.target.style.display = 'none'; }} />}
                        </div>

                        <div className="flex-grow-1">
                          <p className="featured-quote mb-2">“{t.quoteShort}”</p>

                          <div className="d-flex flex-wrap align-items-center gap-2 featured-meta">
                            <div className="featured-name">{t.name}</div>

                            <div className="meta-dot" aria-hidden>•</div>

                            <div className="text-muted small featured-role">{t.role}</div>

                            <div className="meta-dot" aria-hidden>•</div>

                            <div className="text-muted small featured-date">{t.date}</div>

                            <div className="ms-auto d-flex align-items-center gap-1 featured-rating" aria-hidden>
                              {Array.from({ length: t.rating }).map((_, i) => <FaStar key={i} className="star" />)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3">
                    <Button variant="outline-success" href="/testimonials">See more testimonials</Button>
                  </div>
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
      </main>
    </>
  );
}
