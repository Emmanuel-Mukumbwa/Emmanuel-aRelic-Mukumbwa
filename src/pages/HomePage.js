// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import AnimatedSection from '../AnimatedSection';
import ReactGA from 'react-ga4';
import projects from '../data/projects';
import ContactForm from '../components/ContactForm';
import {
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiLaravel,
  SiLinux,
  SiFlutter,
  SiFirebase,
} from 'react-icons/si';
import {
  FaNetworkWired,
  FaChalkboardTeacher,
  FaCode,
  FaCheckCircle,
  FaQuoteRight,
} from 'react-icons/fa';
import './Home.css';

// image imports
import emmanuel1xJpg from '../assets/emmanuel-800.jpg';
import emmanuel2xJpg from '../assets/emmanuel-1600.jpg';

// ----- Technology badges floating behind the hero (purely decorative) -----
const floatingTechs = [
  { icon: <SiReact />, label: 'React' },
  { icon: <SiFlutter />, label: 'Flutter' },
  { icon: <SiNodedotjs />, label: 'Node.js' },
  { icon: <SiLaravel />, label: 'Laravel' },
  { icon: <SiLinux />, label: 'Linux' },
  { icon: <SiFirebase />, label: 'Firebase' },
  { icon: <SiMysql />, label: 'MySQL' },
  { icon: <FaNetworkWired />, label: 'Networking' },
];

// ----- Skill categories for the expertise section -----
const expertiseAreas = [
  {
    title: 'Software Engineering',
    items: ['React', 'Flutter', 'Laravel', 'Node.js', 'REST APIs'],
    icon: <FaCode size={28} />,
  },
  {
    title: 'Infrastructure & Networking',
    items: ['Linux Servers', 'WiFi & LAN', 'CCNA-level Skills', 'Cloud & On‑prem'],
    icon: <FaNetworkWired size={28} />,
  },
  {
    title: 'Training & Documentation',
    items: ['Technical Writing', 'Workshops', 'Mentorship', 'Reports & Runbooks'],
    icon: <FaChalkboardTeacher size={28} />,
  },
];

// ----- Client process steps -----
const processSteps = [
  { step: 'Discovery', desc: 'Understand your goals, users, and environment.' },
  { step: 'Planning', desc: 'Scope, timeline, milestones, and tech choices.' },
  { step: 'Development', desc: 'Build, configure, and integrate.' },
  { step: 'Testing', desc: 'QA, security checks, and performance tuning.' },
  { step: 'Deployment', desc: 'Launch, handover, and documentation.' },
  { step: 'Support', desc: 'Ongoing maintenance and updates.' },
];

// ----- Industries served -----
const industries = [
  'Education', 'NGOs', 'SMEs', 'Churches', 'Healthcare', 'Government',
];

// ----- Statistics (static) -----
const stats = [
  { value: '10+', label: 'Projects Completed' },
  { value: '25+', label: 'Technologies' },
  { value: '5+', label: 'Years in ICT' },
  { value: 'Remote & On‑site', label: 'Support' },
];

// ----- Placeholder testimonials -----
const testimonials = [
  {
    quote: 'Professional, dependable, and delivered exactly what we needed.',
    author: 'YWAM Blantyre – ICT Department',
  },
  {
    quote: 'Understood our workflow and built a tool that saves us hours every week.',
    author: 'CampusTalent Pilot User',
  },
];

// ----- Trust reasons -----
const trustReasons = [
  'Full‑stack Developer & ICT Consultant',
  'CCNA‑level Networking Knowledge',
  'Flutter, React & Laravel Specialist',
  'Documentation & Runbooks Included',
  'Secure Development Practices',
  'Ongoing Technical Support Available',
];

// ----- Fallback avatar -----
const getPlaceholderAvatar = (seed = 'arelic') =>
  `https://avatars.dicebear.com/api/identicon/${encodeURIComponent(seed)}.svg`;

export default function HomePage() {
  useEffect(() => {
    try {
      if (typeof ReactGA?.send === 'function') {
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
      }
    } catch (err) {
      console.warn('ReactGA send failed', err);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>aRelic | ICT Consultancy & Software Development</title>
        <meta
          name="description"
          content="Emmanuel (aRelic) Mukumbwa — ICT consultancy offering software, mobile apps, networking, infrastructure, and training for NGOs, SMEs, and education in Malawi."
        />
      </Helmet>

      <main>
        {/* ========== HERO ========== */}
        <section className="hero-section">
          {/* Floating tech background */}
          <div className="hero-tech-bg" aria-hidden="true">
            {floatingTechs.map((tech, i) => (
              <div key={i} className="floating-tech-icon" style={{ '--i': i }}>
                <span>{tech.icon}</span>
                <span>{tech.label}</span>
              </div>
            ))}
          </div>

          <Container className="position-relative">
            <Row className="align-items-center py-5">
              <Col lg={7}>
                <p className="text-uppercase small fw-semibold text-success mb-2">
                  Trusted by NGOs · SMEs · Schools · Churches
                </p>
                <h1 className="display-3 fw-bold gradient-text mb-3">
                  Emmanuel (aRelic) Mukumbwa
                </h1>
                <h2 className="h5 text-muted mb-4">
                  Building Practical ICT Solutions for Malawi and Beyond
                </h2>
                <div className="hero-badges d-flex flex-wrap gap-2 mb-4">
                  <Badge bg="success">Full‑stack Development</Badge>
                  <Badge bg="success">ICT Infrastructure</Badge>
                  <Badge bg="success">Networking</Badge>
                  <Badge bg="success">Flutter Apps</Badge>
                  <Badge bg="success">Linux Servers</Badge>
                </div>
                <div className="d-flex gap-3">
                  <Button href="/contact?subject=Schedule%20Consultation" variant="success" size="lg">
                    Schedule Consultation
                  </Button>
                  <Button href="/projects" variant="outline-success" size="lg">
                    View Projects
                  </Button>
                </div>
              </Col>
              <Col lg={5} className="text-center mt-4 mt-lg-0">
                <div className="hero-circle">
                  <picture>
                    <img
                      src={emmanuel1xJpg}
                      srcSet={`${emmanuel1xJpg} 1x, ${emmanuel2xJpg} 2x`}
                      sizes="(max-width: 767px) 260px, (max-width: 991px) 360px, 420px"
                      alt="Emmanuel (aRelic) Mukumbwa"
                      className="hero-circle-img"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getPlaceholderAvatar('Emmanuel-aRelic-Mukumbwa');
                      }}
                    />
                  </picture>
                </div>
              </Col>
            </Row>

            {/* Statistics strip */}
            <Row className="stats-row g-3 mt-4">
              {stats.map((s, i) => (
                <Col xs={6} md={3} key={i}>
                  <div className="stat-card text-center p-3">
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label text-muted small">{s.label}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* ========== EXPERTISE AREAS ========== */}
        <section className="py-5 bg-light">
          <Container>
            <AnimatedSection>
              <h2 className="text-center section-title mb-5">Areas of Expertise</h2>
              <Row className="g-4">
                {expertiseAreas.map((area, i) => (
                  <Col md={4} key={i}>
                    <Card className="expertise-card h-100">
                      <Card.Body className="text-center">
                        <div className="expertise-icon mb-3">{area.icon}</div>
                        <Card.Title className="h5">{area.title}</Card.Title>
                        <ul className="list-unstyled small text-muted">
                          {area.items.map((item, j) => (
                            <li key={j}><FaCheckCircle className="text-success me-1" /> {item}</li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </AnimatedSection>
          </Container>
        </section>

        {/* ========== CASE STUDIES ========== */}
        <section id="projects" className="py-5">
          <Container>
            <AnimatedSection>
              <h2 className="text-center section-title mb-4">Case Studies</h2>
              <Row className="g-4">
                {projects.slice(0, 3).map((p) => (
                  <Col md={4} key={p.id}>
                    <Card className="project-card h-100">
                      <Card.Body className="d-flex flex-column">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <FaCode className="text-success" />
                          <Card.Title className="h6 mb-0">{p.title}</Card.Title>
                        </div>
                        <Card.Text className="text-muted small flex-grow-1">
                          {p.shortDescription}
                        </Card.Text>
                        <div className="mt-auto">
                          <Button href={`/projects/${p.slug}`} variant="outline-success" size="sm">
                            View Case Study →
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <div className="text-center mt-4">
                <Button href="/projects" variant="success">See All Case Studies</Button>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* ========== CLIENT PROCESS ========== */}
        <section className="py-5 bg-light">
          <Container>
            <AnimatedSection>
              <h2 className="text-center section-title mb-5">How We Work Together</h2>
              <Row className="g-4 justify-content-center">
                {processSteps.map((step, i) => (
                  <Col xs={6} md={4} lg={2} key={i}>
                    <div className="process-step text-center">
                      <div className="process-number">{i + 1}</div>
                      <h5 className="mt-2">{step.step}</h5>
                      <p className="text-muted small">{step.desc}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </AnimatedSection>
          </Container>
        </section>

        {/* ========== INDUSTRIES SERVED ========== */}
        <section className="py-5">
          <Container>
            <AnimatedSection>
              <h2 className="text-center section-title mb-4">Industries Served</h2>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {industries.map((ind, i) => (
                  <Badge key={i} bg="success" className="px-3 py-2 fs-6">{ind}</Badge>
                ))}
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* ========== TESTIMONIALS ========== */}
        <section className="py-5 bg-light">
          <Container>
            <AnimatedSection>
              <h2 className="text-center section-title mb-4">What Clients Say</h2>
              <Row className="g-4 justify-content-center">
                {testimonials.map((t, i) => (
                  <Col md={5} key={i}>
                    <Card className="testimonial-card h-100">
                      <Card.Body>
                        <FaQuoteRight className="text-success mb-2" />
                        <p className="fw-semibold">“{t.quote}”</p>
                        <p className="text-muted small mb-0">– {t.author}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </AnimatedSection>
          </Container>
        </section>

        {/* ========== WHY ARELIC ========== */}
        <section className="py-5">
          <Container>
            <AnimatedSection>
              <h2 className="text-center section-title mb-4">Why Work with aRelic?</h2>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {trustReasons.map((reason, i) => (
                      <div key={i} className="trust-badge bg-light px-3 py-2 rounded-pill">
                        <FaCheckCircle className="text-success me-1" /> {reason}
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </AnimatedSection>
          </Container>
        </section>

        {/* ========== CTA BANNER ========== */}
        <section className="cta-banner py-5">
          <Container className="text-center">
            <h2 className="display-5 fw-bold text-white mb-3">
              Ready to Build Something Great?
            </h2>
            <p className="lead text-white-50 mb-4">
              Let's discuss your project – from a quick assessment to a full system deployment.
            </p>
            <Button href="/contact?subject=Let%27s%20Discuss" variant="light" size="lg">
              Start a Conversation
            </Button>
          </Container>
        </section>

        {/* ========== CONTACT ========== */}
        <section id="contact" className="py-5 bg-light">
          <Container>
            <AnimatedSection>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <h2 className="text-center section-title mb-3">Get in Touch</h2>
                  <p className="text-center text-muted mb-4">
                    Tell me about your project, site, or training need – I usually reply within 24–48 hours.
                  </p>
                  <ContactForm inline />
                </Col>
              </Row>
            </AnimatedSection>
          </Container>
        </section>
      </main>
    </>
  );
}