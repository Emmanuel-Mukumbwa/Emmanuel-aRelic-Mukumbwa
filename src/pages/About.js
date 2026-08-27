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
  FaCogs,
  FaMobileAlt,
  FaArrowRight,
  FaEnvelope,
  FaClock,
  FaLaptop
} from 'react-icons/fa';
import './About.css';
import ContactForm from '../components/ContactForm';
import testimonials from '../data/testimonials';
// Second, contextual image for the About story section
import emmanuel02Jpg from '../assets/emmanuel02.jpg';

// helper for DiceBear fallback avatars
const getPlaceholder = (seed = 'Emmanuel-aRelic') =>
  `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(seed)}&scale=100`;

/**
 * Services & skills now reflect a full ICT professional offering.
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
    id: 'computer',
    title: 'Computer & Technical Support',
    icon: <FaLaptop />,
    desc: 'Computer maintenance, software installation, hardware support, data backup and recovery, and on‑site troubleshooting. Deliverables: service checklist, repair notes, and a follow‑up plan.',
    bullets: ['System installation & setup', 'Hardware repair & upgrades', 'Data backup & recovery', 'On‑site support']
  },
  {
    id: 'integrations',
    title: 'Payment & Systems Integrations',
    icon: <FaCogs />,
    desc: 'Secure payment and service integrations with reliable webhook and retry handling. Deliverables: integration spec, idempotent endpoints, and test plan.',
    bullets: ['Mobile-money friendly flows', 'Webhook handling', 'Retry & idempotency']
  },
  {
    id: 'mobile',
    title: 'Mobile & Offline‑First Apps',
    icon: <FaMobileAlt />,
    desc: 'Cross‑platform apps (Android, iOS, Web) with offline storage and cloud sync. Deliverables: ready‑to‑ship app, Google Sheets / Firebase backend, and deployment notes.',
    bullets: ['Flutter (Dart)', 'Offline SQLite', 'Google Sheets sync', 'Firebase Auth']
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
  'APIs & integrations', 'Payment flows', 'Testing & monitoring',
  'Flutter / Dart', 'Firebase', 'Google Sheets API', 'SQLite (offline)', 'REST APIs',
  'Computer maintenance', 'Hardware troubleshooting', 'OS installation', 'Data recovery basics'
];

const timeline = [
  {
    year: '2024–25',
    title: 'CampusTalent — Capstone & Systems Integration',
    detail: 'Led design and deployment of the CampusTalent MVP (React, Node.js, MySQL) with recruiter verification and PayChangu payment flows. Delivered deployment notes, runbooks, and a recruiter dashboard used in pilot tests.'
  },
  {
    year: '2026',
    title: 'Offline‑First Finance App (Flutter)',
    detail: 'Built a mobile app for financial tracking that works entirely offline. Features SQLite local storage, Firebase authentication, Google Sheets cloud sync, human‑readable transaction references, and automatic sign‑out reconciliation. Deployed on Android, web, and Windows.'
  },
  {
    year: 'April 2026 – present',
    title: 'Volunteer Staff — YWAM Blantyre',
    detail: 'Serving as a volunteer developer and ICT expert at YWAM Blantyre. Developed and maintain the base’s offline‑first finance tracking app, provide ongoing technical support, and advise on ICT infrastructure to improve daily operations and data management.'
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
          <ListGroup.Item>
            <strong>Mobile app (Flutter)</strong>
            <div className="text-muted small">Starting from MWK 120,000 — cross‑platform, offline‑first, Google Sheets sync, and deployment</div>
          </ListGroup.Item>
        </ListGroup>

        <div className="mt-3 d-grid">
          <Button href="/contact?subject=Custom%20Quote" variant="success" size="sm">
            Get a Custom Quote
          </Button>
          <div className="text-muted small mt-2 text-center">
            <FaClock className="me-1" /> Response time: 24–48 hours
          </div>
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
          content="Emmanuel (aRelic) Mukumbwa — ICT professional specialising in systems, networking, communications, integrations, offline‑first mobile apps, computer & technical support, and practical training. Based in Blantyre, Malawi. Volunteer developer & ICT expert at YWAM Blantyre."
        />
      </Helmet>

      <main className="about-page">
        <Container className="py-5">
          {/* HERO / STORY */}
          <Row className="align-items-center mb-4">
            <Col lg={7}>
              <h1 className="mb-2">Practical ICT solutions — systems, networks, apps, training and reporting.</h1>

              <p className="lead text-muted">
                I’m Emmanuel (aRelic), an IT professional with CCNA-level networking knowledge and full-stack developer with a BSc in ICT. I design, deploy, and document maintainable ICT systems for campuses, NGOs, and small businesses. I also serve as a volunteer developer and ICT expert at YWAM Blantyre, supporting their operations with practical tech tools.
              </p>

              <p className="text-muted small">
                I focus on outcomes that matter locally — resilient connections, clear technical reports, and tools that can be used and maintained with limited resources. My recent work includes an offline‑first finance tracker built with Flutter, and the CampusTalent recruitment platform.
              </p>

              {/* Proof Bar */}
              <div className="proof-bar d-flex flex-wrap gap-2 mt-3">
                <Badge bg="success">10+ systems deployed</Badge>
                <Badge bg="success">5+ campus deployments</Badge>
                <Badge bg="success">Offline-first apps shipped</Badge>
                <Badge bg="success">CCNA-level networking</Badge>
              </div>

              <div className="hero-stats d-flex gap-3 mt-3 flex-wrap">
                <Badge bg="success">CampusTalent — lead dev</Badge>
                <Badge bg="success">Offline‑First Finance App</Badge>
                <Badge bg="success">Volunteer @ YWAM Blantyre</Badge>
                <Badge bg="success">CCNA (2025)</Badge>
                <Badge bg="success">Workshops delivered</Badge>
              </div>

              {/* Quick stats */}
              <div className="quick-stats d-flex gap-3 mt-3 flex-wrap small text-muted">
                <div><strong>Role:</strong> Network admin, full-stack dev & volunteer ICT expert</div>
                <div><strong>Location:</strong> Blantyre, Malawi</div>
                <div><strong>Focus:</strong> Systems, networks, apps, integrations, computer support, training</div>
              </div>

              <div className="mt-4 d-flex gap-2">
                <Button href="/contact?subject=Hiring%20Emmanuel" variant="success">Request Quote</Button>
                <Button href="/projects" variant="outline-success">See Case Studies & Deployment Notes</Button>
                <Button href="/resume" variant="light" className="ms-2">
                  <FaDownload className="me-1" /> Download CV (PDF)
                </Button>
              </div>
            </Col>

            <Col lg={5} className="mt-4 mt-lg-0">
              <div className="about-story-photo">
                <img
                  src={emmanuel02Jpg}
                  alt="Emmanuel aRelic Mukumbwa — ICT consultant and developer, Blantyre, Malawi"
                  className="img-fluid about-story-img"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getPlaceholder('Emmanuel-aRelic');
                  }}
                />
                <p className="about-photo-caption text-muted small mt-2">
                  Emmanuel Mukumbwa — ICT professional & developer
                </p>
              </div>
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
                        <div className="service-tile p-3 h-100 d-flex flex-column">
                          <div className="d-flex align-items-start gap-2 mb-2">
                            <div style={{ fontSize: 20, color: '#16a34a' }}>{s.icon}</div>
                            <h5 className="mb-0">{s.title}</h5>
                          </div>
                          <p className="text-muted small mb-2">{s.desc}</p>
                          <div className="small flex-grow-1">
                            {s.bullets.map(b => (
                              <div key={b}><FaCheckCircle className="text-success me-1" /> {b}</div>
                            ))}
                          </div>
                          <Button
                            size="sm"
                            variant="outline-success"
                            className="mt-3 w-100"
                            href={`/contact?subject=${encodeURIComponent(s.title)}`}
                          >
                            Request this service <FaArrowRight className="ms-1" />
                          </Button>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>

              {/* IMPACT / RESULTS */}
              <Card className="glass-card mb-4">
                <Card.Body>
                  <h4 className="mb-3">Impact & Outcomes</h4>
                  <Row>
                    <Col md={6}>
                      <ul className="text-muted small">
                        <li>Reduced downtime through structured server setups</li>
                        <li>Improved campus network reliability via VLAN planning</li>
                        <li>Enabled offline-first operations for low-connectivity environments</li>
                      </ul>
                    </Col>
                    <Col md={6}>
                      <ul className="text-muted small">
                        <li>Built production-ready recruitment platform (CampusTalent)</li>
                        <li>Delivered hands-on ICT training to students & staff</li>
                        <li>Implemented secure payment integrations for local systems</li>
                        <li>Provided computer maintenance & repair support for clients</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              {/* TIMELINE (truncated + badge year) */}
              <Card className="glass-card mb-4">
                <Card.Body>
                  <h4 className="mb-3">Journey so far</h4>
                  <ListGroup variant="flush">
                    {timeline.map((t, idx) => (
                      <ListGroup.Item key={idx} className="timeline-item">
                        <div className="d-flex justify-content-between align-items-start">
                          <div>
                            <strong>{t.title}</strong>
                            <div className="text-muted small">
                              {t.detail.length > 140 ? t.detail.slice(0, 140) + '...' : t.detail}
                            </div>
                          </div>
                          <Badge bg="secondary" className="ms-2 flex-shrink-0">{t.year}</Badge>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>

              {/* References */}
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
                    <li>Individuals and organisations needing computer repair and maintenance</li>
                  </ul>

                  <h6 className="mt-3">Typical engagement</h6>
                  <ul>
                    <li>1-day site assessment → written report + prioritized fixes</li>
                    <li>3–5 day WiFi / LAN rollout → network plan, configuration, and staff handover</li>
                    <li>1–2 day practical workshop → lab exercises, participant guides, and follow-up checklist</li>
                    <li>Small web project → MVP site, payment integration, and 30-day support handover</li>
                    <li>Mobile app → Flutter cross‑platform app with offline storage and cloud sync</li>
                    <li>Computer setup or repair → OS installation, driver/software setup, hardware fix, and handover checklist</li>
                  </ul>

                  <div className="d-grid mt-3">
                    <Button href="/contact?subject=Project%20enquiry" variant="success">Talk to me</Button>
                    <Button href="/projects" variant="outline-success" className="mt-2">See case studies</Button>
                  </div>
                </Card.Body>
              </Card>

              {/* Pricing card */}
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

        {/* Sticky bottom CTA */}
        <div className="sticky-cta">
          <Button variant="success" size="lg" href="/contact?subject=Request%20a%20Quote">
            <FaEnvelope className="me-2" /> Request a Quote
          </Button>
        </div>
      </main>
    </>
  );  
}
