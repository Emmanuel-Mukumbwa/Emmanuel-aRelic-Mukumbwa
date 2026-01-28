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
 *
 * NOTE: adjust any numbers / "starting from" prices in PricingCard to match your real rates.
 */

const services = [
  {
    id: 'systems',
    title: 'Systems & Server Administration',
    icon: <FaServer />,
    desc: 'Server setup, backups and lightweight automation that reduce downtime and simplify handover. Deliverables: server checklist, backup schedule, and a runbook for local staff.',
    bullets: ['Server provisioning', 'Backups & restoration', 'Runbooks & handover']
  },
  {
    id: 'networking',
    title: 'Network & Communications',
    icon: <FaNetworkWired />,
    desc: 'LAN and WiFi planning, simple routing and firewall rules to improve reliability and security. Deliverables: site map, VLAN plan, and troubleshooting guide.',
    bullets: ['LAN/WiFi planning', 'VLAN & subnet design', 'Performance troubleshooting']
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Cabling',
    icon: <FaTools />,
    desc: 'On-site cabling best-practices and device placement to reduce faults and ease maintenance. Deliverables: cabling checklist, labelled assets, and handover notes.',
    bullets: ['Cable organisation', 'Device placement', 'Site-checklists & handover']
  },
  {
    id: 'integrations',
    title: 'Payment & Systems Integrations',
    icon: <FaCogs />,
    desc: 'Secure payment and service integrations with reliable webhook and retry handling. Deliverables: integration spec, idempotent endpoints, and test plan.',
    bullets: ['Mobile-money friendly flows', 'Webhook handling', 'Retry & idempotency']
  },
  {
    id: 'security',
    title: 'Security & Monitoring',
    icon: <FaShieldAlt />,
    desc: 'Lightweight audits and monitoring checks to detect common issues early and produce actionable remediation steps.',
    bullets: ['Basic monitoring checks', 'Access control reviews', 'Actionable remediation']
  },
  {
    id: 'teaching',
    title: 'Training, Workshops & Mentorship',
    icon: <FaChalkboardTeacher />,
    desc: 'Hands-on workshops and labs that leave staff and students confident to operate and maintain systems. Deliverables: participant guides, lab exercises, and follow-up checklist.',
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
    detail: 'Led design and deployment of the CampusTalent MVP (React, Node.js, MySQL) with recruiter verification and PayChangu payment flows. Delivered deployment notes, runbooks, and a recruiter dashboard used in pilot tests.'
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
    year: '2019–25',
    title: 'Advanced Diploma & BSc studies',
    detail: 'Advanced Diploma in Communication & Information Systems (MUBAS) and BSc in ICT (Mzuzu University) — strengthened applied systems and communications knowledge.'
  }
];

/** Small PricingCard component — shows indicative starting prices.
 *  Edit numbers to reflect your real rates before publishing.
 */
function PricingCard() {
  return (
    <Card className="glass-card mb-4">
      <Card.Body>
        <h5>Typical pricing (starting from)</h5>
        <div className="small text-muted mb-2">
          Indicative local ranges. Final fees depend on scope, travel, and participants.
        </div>

        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Site assessment</strong>
            <div className="text-muted small">Starting from MWK 40,000 — written report and prioritized fixes</div>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Practical workshop (half-day)</strong>
            <div className="text-muted small">Starting from MWK 15,000 per participant or MWK 25,000 flat for small campus classes</div>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Small website + payment MVP</strong>
            <div className="text-muted small">Starting from MWK 100,000 — includes deployment and 30 days support</div>
          </ListGroup.Item>
        </ListGroup>

        <div className="mt-3">
          <small className="text-muted">Contact for a custom quote — prices vary by scope and travel.</small>
        </div>
      </Card.Body>
    </Card>
  );
}

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
        {/* Optional: you can add JSON-LD Person schema here for SEO */}
      </Helmet>

      <main className="about-page">
        <Container className="py-5">
          {/* HERO / STORY */}
          <Row className="align-items-center mb-4">
            <Col lg={7}>
              <h1 className="mb-2">Practical ICT solutions — systems, networks, training and reporting.</h1>

              <p className="lead text-muted">
                I’m Emmanuel (aRelic), a CCNA-certified network administrator and full-stack developer with a BSc in ICT. I design, deploy, and document maintainable ICT systems for campuses, NGOs, and small businesses. From site assessments and network rollouts to payment integrations and hands-on training, I deliver local-first solutions teams can run and students can learn from.
              </p>

              <p className="text-muted small">
                I focus on outcomes that matter locally — resilient connections, clear technical reports, and tools that can be used and maintained with limited resources.
              </p>

              <div className="hero-stats d-flex gap-3 mt-3 flex-wrap">
                <Badge bg="success">CampusTalent — lead dev</Badge>
                <Badge bg="success">Hostel Management System</Badge>
                <Badge bg="success">CCNA (2025)</Badge>
                <Badge bg="success">Workshops delivered</Badge>
              </div>

              {/* Quick stats (safe facts) */}
              <div className="quick-stats d-flex gap-3 mt-3 flex-wrap small text-muted">
                <div><strong>Role:</strong> Network admin & full-stack dev</div>
                <div><strong>Location:</strong> Chitipa, Malawi</div>
                <div><strong>Focus:</strong> Systems, networks, integrations, training</div>
              </div>

              <div className="mt-4 d-flex gap-2">
                <Button href="/contact?subject=Hiring%20Emmanuel" variant="success">Request Quote</Button>
                <Button href="/projects" variant="outline-success">See Case Studies & Deployment Notes</Button>
                <Button href="/resume" variant="light" className="ms-2">
                  <FaDownload className="me-1" /> Download CV (PDF)
                </Button>
              </div>
            </Col>

            <Col lg={5} className="text-center mt-4 mt-lg-0">
              <Image
                src={heroIllustration}
                alt="Emmanuel Mukumbwa — ICT consultant, Chitipa, Malawi"
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

            {/* SIDEBAR: SKILLS + CONTACT + Pricing */}
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

                  <h6 className="mt-3">Typical engagement</h6>
                  <ul>
                    <li>1-day site assessment → written report + prioritized fixes</li>
                    <li>3–5 day WiFi / LAN rollout → network plan, configuration, and staff handover</li>
                    <li>1–2 day practical workshop → lab exercises, participant guides, and follow-up checklist</li>
                    <li>Small web project → MVP site, payment integration, and 30-day support handover</li>
                  </ul>

                  <div className="d-grid mt-3">
                    <Button href="/contact?subject=Project%20enquiry" variant="success">Talk to me</Button>
                    <Button href="/projects" variant="outline-success" className="mt-2">See case studies</Button>
                  </div>
                </Card.Body>
              </Card>

              {/* Pricing card inserted here */}
              <PricingCard />

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
