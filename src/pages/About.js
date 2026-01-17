// src/pages/About.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Container, Row, Col, Card, Button, Badge, Image, ListGroup
} from 'react-bootstrap';
import {
  FaCheckCircle,
  FaDownload,
  FaNetworkWired,
  FaServer,
  FaTools,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaCogs
} from 'react-icons/fa';
import './About.css';
import ContactForm from '../components/ContactForm';
import testimonials from '../data/testimonials';
import heroIllustration from '../assets/me.jpg';

// helper for DiceBear fallback avatars
const getPlaceholder = (seed = 'Emmanuel-aRelic') =>
  `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(seed)}&scale=100`;

/**
 * Services & skills now reflect a full ICT professional offering:
 * - systems / network / communications / integrations / audits / training / reporting
 */

const services = [
  {
    id: 'systems',
    title: 'Systems & Server Administration',
    icon: <FaServer />,
    desc: 'Linux/Windows server support, basic configuration, backups and lightweight automation for small organisations and campus labs.',
    bullets: ['Server provisioning', 'Backups & restoration', 'User & permission management']
  },
  {
    id: 'networking',
    title: 'Network & Communications',
    icon: <FaNetworkWired />,
    desc: 'Network setup, troubleshooting and documentation — from local LANs to WiFi coverage planning and simple router/firewall rules.',
    bullets: ['LAN/WiFi planning', 'Basic routing & firewalling', 'Performance troubleshooting']
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Cabling',
    icon: <FaTools />,
    desc: 'Physical setup guidance and small-scale infrastructure work (cabling best-practices, device placement and simple on-site commissioning).',
    bullets: ['Cable organisation', 'Device placement', 'Site-checklists & handover']
  },
  {
    id: 'integrations',
    title: 'Payment & Systems Integrations',
    icon: <FaCogs />,
    desc: 'Integrating local payment channels and external services (webhooks, idempotent endpoints and secure handling) for small e-commerce and campus tools.',
    bullets: ['Mobile-money friendly flows', 'Webhook handling', 'Retry & idempotency']
  },
  {
    id: 'security',
    title: 'Security & Monitoring',
    icon: <FaShieldAlt />,
    desc: 'Lightweight auditing and monitoring for small organisations — quick wins to reduce risk and detect common issues early.',
    bullets: ['Basic monitoring checks', 'Access control reviews', 'Actionable remediation']
  },
  {
    id: 'teaching',
    title: 'Training, Workshops & Mentorship',
    icon: <FaChalkboardTeacher />,
    desc: 'Hands-on workshops for campus teams, staff training, and mentorship for students building ICT projects or preparing reports.',
    bullets: ['Practical labs', 'Report-writing coaching', 'CV & portfolio preparation']
  }
];

const skills = [
  'Network fundamentals', 'System diagnostics', 'Linux basics', 'Windows Server', 'Router & firewall basics',
  'VoIP / comms basics', 'Technical reporting', 'Troubleshooting', 'Documentation & handover',
  'APIs & integrations', 'Payment flows', 'Testing & monitoring'
];

const timeline = [
  {
    year: '2024–25',
    title: 'CampusTalent — Capstone & Systems Integration',
    detail: 'Led design & implementation of a full-stack MVP that included recruiter verification and payment flows. Combined systems thinking with practical deployment and documentation suitable for campus-scale use.'
  },
  {
    year: 'Industrial Attachment',
    title: 'Tee Components & Communications — Attachment / Final Report',
    detail: 'Industrial attachment focusing on communications systems, diagnostics and site commissioning. Produced a final technical report documenting methodology, findings and practical recommendations validated by the industry supervisor.'
  },
  {
    year: '2022–23',
    title: 'ICT Instructor — Paradox Technical College',
    detail: 'Delivered practical labs and mentorship across Chitipa and neighbouring districts, prepared TEVETA-aligned lesson plans and supported students through hands-on projects.'
  },
  {
    year: '2019–22',
    title: 'Advanced Diploma & BSc studies',
    detail: 'Advanced Diploma in Communication & Information Systems (MUBAS) and ongoing BSc in ICT (Mzuzu University) — strengthened applied systems and communications knowledge.'
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
          content="Emmanuel (aRelic) Mukumbwa — ICT professional specialising in systems, networking, communications, integrations and practical training in Malawi."
        />
      </Helmet>

      <main className="about-page">
        <Container className="py-5">
          {/* HERO / STORY */}
          <Row className="align-items-center mb-4">
            <Col lg={7}>
              <h1 className="mb-2">Practical ICT solutions — systems, networks, training and reporting.</h1>

              <p className="lead text-muted">
                I’m Emmanuel (aRelic). My work sits at the intersection of systems, communications and people: building reliable small-scale ICT systems,
                supervising and documenting field attachments, and training campus teams and small organisations to run and maintain them.
              </p>

              <p className="text-muted small">
                I focus on outcomes that matter locally — resilient connections, clear technical reports, and tools that can be used and maintained with limited resources.
              </p>

              <div className="hero-stats d-flex gap-3 mt-3">
                <Badge bg="success">Systems & Networks</Badge>
                <Badge bg="success">Attachments & Technical Reports</Badge>
                <Badge bg="success">Training & Mentorship</Badge>
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
                alt="Emmanuel portrait"
                className="about-portrait hero-illustration"
                fluid
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = getPlaceholder('Emmanuel-aRelic');
                }}
              />
            </Col>
          </Row>

          <Row className="g-4">
            {/* SERVICES */}
            <Col lg={8}>
              <Card className="glass-card mb-4">
                <Card.Body>
                  <h4 className="mb-3">How I help — practical examples</h4>
                  <Row xs={1} md={2} className="g-3">
                    {services.map(s => (
                      <Col key={s.id}>
                        <div className="service-tile p-3 h-100">
                          <div className="d-flex align-items-start gap-2 mb-2">
                            <div style={{ fontSize: 20, color: '#16a34a' }}>{s.icon}</div>
                            <h5 className="mb-0">{s.title}</h5>
                          </div>
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

              {/* References (instead of testimonials) */}
<Card className="glass-card">
  <Card.Body>
    <h4 className="mb-3">References</h4>

    <div className="featured-references d-flex flex-column gap-3">
      {featured.map((t) => (
        <div key={t.id} className="reference-tile d-flex gap-3 align-items-start">
          <div className="reference-left text-center text-start">
            <Image
              src={t.avatar ?? getPlaceholder(t.name)}
              alt={`${t.name} avatar`}
              className="featured-avatar"
              roundedCircle
              onError={(e) => { e.target.onerror = null; e.target.src = getPlaceholder(t.name); }}
            />
            {t.logo && <img src={t.logo} alt={`${t.company} logo`} className="featured-logo mt-2" onError={(e) => { e.target.style.display = 'none'; }} />}
          </div>

          <div className="flex-grow-1">
            <div className="reference-name fw-semibold">{t.name}</div>
            <div className="text-muted small reference-role">{t.role}</div>
            <div className="text-muted small reference-company">{t.company}</div>
            <div className="text-muted small reference-contact">Contact available on request</div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-3">
      <Button variant="outline-success" href="/testimonials">See all references</Button>
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
                    <li>Small businesses, NGOs and campus IT teams</li>
                    <li>Researchers and lecturers who need practical systems tools</li>
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
