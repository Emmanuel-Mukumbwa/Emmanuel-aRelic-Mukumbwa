// src/pages/Quotes.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Button, Badge, Nav } from 'react-bootstrap';
import AnimatedSection from '../AnimatedSection';
import {
  FaNetworkWired,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaMobileAlt,
  FaCode,
  FaCheckCircle,
  FaClock,
  FaHeadset,
  FaFileContract,
  FaQuestionCircle,
} from 'react-icons/fa';
import './Quotes.css';

// ----- Section ID constants -----
const sections = [
  { id: 'digital',    label: 'Digital',    icon: <FaCode /> },
  { id: 'mobile',     label: 'Mobile',     icon: <FaMobileAlt /> },
  { id: 'infra',      label: 'Infrastructure', icon: <FaNetworkWired /> },
  { id: 'security',   label: 'Security',   icon: <FaShieldAlt /> },
  { id: 'consulting', label: 'Consulting', icon: <FaChalkboardTeacher /> },
  { id: 'support',    label: 'Support',    icon: <FaHeadset /> },
];

// ----- Package data (unchanged) -----
const digitalPackages = [
  {
    name: 'Essential Website',
    bestFor: 'Startups, professionals, NGOs, churches',
    features: [
      'Responsive design (mobile‑first)',
      'Contact form with WhatsApp integration',
      'Google Maps embed',
      'Basic SEO & SSL setup',
      '1‑3 pages',
    ],
    timeline: '1‑2 weeks',
    support: '30 days',
    investment: 'MK120,000+',
    popular: false,
  },
  {
    name: 'Business Website',
    bestFor: 'Growing businesses, organisations',
    features: [
      '5‑10 custom pages',
      'Content Management System (CMS)',
      'Blog / News section',
      'Google Analytics integration',
      'Advanced SEO optimisation',
      'Staff training session',
    ],
    timeline: '3‑5 weeks',
    support: '60 days',
    investment: 'MK250,000+',
    popular: true,
  },
  {
    name: 'Corporate Platform',
    bestFor: 'Enterprises, large NGOs',
    features: [
      'Custom UI/UX design',
      'User accounts & dashboard',
      'API integrations (payments, CRMs)',
      'Performance optimisation & CDN',
      'Comprehensive documentation',
    ],
    timeline: '5‑8 weeks',
    support: '90 days',
    investment: 'MK500,000+',
    popular: false,
  },
];

const mobilePackages = [
  {
    name: 'Starter MVP',
    bestFor: 'Idea validation, pilot projects',
    features: [
      'Cross‑platform (Android, iOS, Web)',
      '3‑4 core screens',
      'Firebase authentication',
      'Offline storage & cloud sync',
      'Basic admin panel',
    ],
    timeline: '4‑8 weeks',
    support: '60 days',
    investment: 'MK350,000+',
    popular: false,
  },
  {
    name: 'Business App',
    bestFor: 'Established businesses, service providers',
    features: [
      'Multiple user roles',
      'Push notifications',
      'In‑app purchases / subscriptions',
      'Advanced backend integration',
      'App Store / Play Store submission',
    ],
    timeline: '8‑16 weeks',
    support: '90 days',
    investment: 'MK650,000+',
    popular: true,
  },
  {
    name: 'Enterprise Platform',
    bestFor: 'Large‑scale deployments, internal tools',
    features: [
      'Custom architecture & scalability',
      'Dedicated server infrastructure',
      'Real‑time dashboards',
      'White‑label branding',
      'Ongoing maintenance & SLA',
    ],
    timeline: '16‑24 weeks',
    support: '12 months',
    investment: 'From MK1,200,000',
    popular: false,
  },
];

const infraPackages = [
  {
    name: 'Network Health Assessment',
    bestFor: 'Small offices, clinics, schools',
    features: [
      'On‑site survey & floor‑plan review',
      'Coverage & performance testing',
      'Written report with recommendations',
      'Basic configuration fixes',
    ],
    timeline: '1‑2 days',
    support: 'Report only',
    investment: 'MK50,000+',
  },
  {
    name: 'Small Office / Campus Setup',
    bestFor: 'Up to 5 rooms, small businesses',
    features: [
      'WiFi access point installation',
      'VLAN & bandwidth management',
      'Firewall rules & security policies',
      'Staff handover & documentation',
    ],
    timeline: '3‑5 days',
    support: '30 days',
    investment: 'MK150,000+',
  },
  {
    name: 'School / NGO Network',
    bestFor: 'Multi‑building, large campuses',
    features: [
      'Full LAN redesign',
      'Enterprise‑grade WiFi deployment',
      'Centralised management',
      'Long‑term maintenance plan',
    ],
    timeline: '2‑4 weeks',
    support: '90 days',
    investment: 'MK350,000+',
  },
  {
    name: 'Enterprise Deployment',
    bestFor: 'Corporate, government',
    features: [
      'Custom network design',
      'High‑availability routing',
      '24/7 monitoring (optional)',
      'Dedicated support engineer',
    ],
    timeline: 'Custom',
    support: 'Negotiable',
    investment: 'Quote Required',
  },
];

const securityPackages = [
  {
    name: 'Quick Security Scan',
    bestFor: 'Small businesses, startups',
    features: [
      'Basic vulnerability assessment',
      'Access‑control review',
      'Critical risk summary',
      'Actionable remediation list',
    ],
    timeline: '2‑3 days',
    investment: 'MK50,000+',
  },
  {
    name: 'Comprehensive IT Audit',
    bestFor: 'NGOs, medium enterprises',
    features: [
      'Full infrastructure review',
      'Penetration testing (light)',
      'Backup & disaster recovery check',
      'Detailed risk‑rated report',
      'Remediation roadmap',
    ],
    timeline: '1‑2 weeks',
    investment: 'MK200,000+',
  },
];

const consultingPackages = [
  {
    name: 'Half‑Day Workshop',
    bestFor: 'Up to 10 participants',
    features: [
      'Hands‑on lab exercises',
      'Printed participant guide',
      'Post‑workshop checklist',
      'Certificate of attendance',
    ],
    investment: 'MK100,000',
    timeline: '1 day',
  },
  {
    name: 'Full‑Day Advanced Lab',
    bestFor: 'Deep‑dive technical training',
    features: [
      'Tailored exercises',
      'Assessment & feedback',
      'Advanced troubleshooting',
      'Certificate of completion',
    ],
    investment: 'MK180,000',
    timeline: '1 day',
  },
  {
    name: 'ICT Strategy & Advisory',
    bestFor: 'Organisations, donors',
    features: [
      'Digital transformation roadmap',
      'System architecture review',
      'Procurement guidance',
      'Quarterly check‑ins (optional)',
    ],
    investment: 'From MK200,000',
    timeline: '2‑4 weeks',
  },
];

const supportPackages = [
  {
    name: 'Starter Support',
    bestFor: 'Small sites, static apps',
    features: [
      'Monthly updates & backups',
      'Security monitoring',
      'Email support (24h response)',
      '4 support hours/month',
    ],
    investment: 'MK60,000/month',
  },
  {
    name: 'Business Support',
    bestFor: 'Active websites, mobile apps',
    features: [
      'Priority support (4h response)',
      'Unlimited bug fixes',
      'Performance monitoring',
      'Monthly reports',
      '12 support hours/month',
    ],
    investment: 'MK150,000/month',
    popular: true,
  },
  {
    name: 'Enterprise SLA',
    bestFor: 'Mission‑critical systems',
    features: [
      '24/7 emergency response',
      'Dedicated support engineer',
      'Custom monitoring & alerting',
      'Quarterly strategy reviews',
      'Unlimited support hours',
    ],
    investment: 'Custom Quote',
  },
];

// ----- Utility component for a pricing card -----
function PricingCard({ pkg, icon, isPopular }) {
  return (
    <Card className={`pricing-card h-100 ${isPopular ? 'popular' : ''}`}>
      {isPopular && <div className="popular-ribbon">Most Popular</div>}
      <Card.Body className="d-flex flex-column">
        <div className="d-flex align-items-center gap-2 mb-2">
          <span className="pricing-icon">{icon}</span>
          <Card.Title className="h5 mb-0">{pkg.name}</Card.Title>
        </div>
        <p className="text-muted small mb-3">Best for: {pkg.bestFor}</p>

        <div className="features-list mb-4 flex-grow-1">
          {pkg.features.map((f, i) => (
            <div key={i} className="feature-item">
              <FaCheckCircle className="text-success me-2" />
              <span>{f}</span>
            </div>
          ))}
          {pkg.delivery && (
            <div className="feature-item">
              <FaClock className="text-muted me-2" />
              <span>Delivery: {pkg.delivery ?? pkg.timeline}</span>
            </div>
          )}
          {pkg.support && (
            <div className="feature-item">
              <FaHeadset className="text-muted me-2" />
              <span>Support: {pkg.support}</span>
            </div>
          )}
        </div>

        <div className="mt-auto">
          <Badge bg="success" className="w-100 py-2 fs-6 mb-2">
            {pkg.investment}
          </Badge>
          <Button
            variant="outline-success"
            size="sm"
            className="w-100"
            href={`/contact?subject=${encodeURIComponent(pkg.name)}`}
          >
            Get a Detailed Proposal
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

// ----- Main Quotes page -----
export default function Quotes() {
  const [activeSection, setActiveSection] = useState('digital');
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -50% 0px' }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing & Services — aRelic | ICT Consultancy</title>
        <meta
          name="description"
          content="Transparent pricing for Emmanuel (aRelic) Mukumbwa – ICT consultancy offering digital solutions, mobile apps, networking, cybersecurity, training, and support. Starting investments for Malawi‑based clients."
        />
      </Helmet>

      <main className="quotes-page">
        {/* ===== HERO ===== */}
        <section className="quotes-hero py-5">
          <Container className="text-center">
            <AnimatedSection>
              <h1 className="display-4 fw-bold mb-3">Services & Investment</h1>
              <p className="lead mb-4 mx-auto" style={{ maxWidth: '700px' }}>
                Every business is different. The figures below are starting investments based on typical projects delivered in Malawi. After understanding your requirements, you'll receive a detailed proposal outlining deliverables, timeline, milestones, and final cost.
              </p>
              <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                <div className="trust-badge"><FaCheckCircle className="text-success me-1" /> Free 30‑minute consultation</div>
                <div className="trust-badge"><FaFileContract className="text-success me-1" /> Fixed‑price quotations</div>
                <div className="trust-badge"><FaClock className="text-success me-1" /> Milestone payments available</div>
                <div className="trust-badge"><FaHeadset className="text-success me-1" /> Remote & on‑site support</div>
                <div className="trust-badge"><FaNetworkWired className="text-success me-1" /> Available across Malawi</div>
              </div>
              <Button href="/contact?subject=Book%20Consultation" variant="success" size="lg">
                Schedule a Free Consultation
              </Button>
            </AnimatedSection>
          </Container>
        </section>

        {/* ===== STICKY CATEGORY NAV ===== */}
        <div className="sticky-categories bg-white border-bottom">
          <Container>
            <Nav className="justify-content-center flex-nowrap overflow-auto" activeKey={activeSection}>
              {sections.map((sec) => (
                <Nav.Link
                  key={sec.id}
                  eventKey={sec.id}
                  className="text-nowrap"
                  onClick={() => scrollToSection(sec.id)}
                >
                  {sec.icon} <span className="ms-1">{sec.label}</span>
                </Nav.Link>
              ))}
            </Nav>
          </Container>
        </div>

        <Container className="py-5">
          {/* ===== DIGITAL SOLUTIONS ===== */}
          <AnimatedSection>
            <div id="digital" ref={(el) => sectionRefs.current.digital = el} className="section-anchor">
              <div className="d-flex align-items-center gap-2 mb-4">
                <FaCode size={28} color="#16a34a" />
                <h2 className="h3 mb-0">Digital Solutions</h2>
              </div>
              <Row xs={1} md={2} lg={3} className="g-4">
                {digitalPackages.map((pkg, i) => (
                  <Col key={i}>
                    <PricingCard pkg={pkg} icon={<FaCode />} isPopular={pkg.popular} />
                  </Col>
                ))}
              </Row>
            </div>
          </AnimatedSection>

          {/* ===== MOBILE APPS ===== */}
          <AnimatedSection>
            <div id="mobile" ref={(el) => sectionRefs.current.mobile = el} className="section-anchor mt-5 pt-4">
              <div className="d-flex align-items-center gap-2 mb-4">
                <FaMobileAlt size={28} color="#16a34a" />
                <h2 className="h3 mb-0">Mobile Applications</h2>
              </div>
              <Row xs={1} md={2} lg={3} className="g-4">
                {mobilePackages.map((pkg, i) => (
                  <Col key={i}>
                    <PricingCard pkg={pkg} icon={<FaMobileAlt />} isPopular={pkg.popular} />
                  </Col>
                ))}
              </Row>
            </div>
          </AnimatedSection>

          {/* ===== INFRASTRUCTURE ===== */}
          <AnimatedSection>
            <div id="infra" ref={(el) => sectionRefs.current.infra = el} className="section-anchor mt-5 pt-4">
              <div className="d-flex align-items-center gap-2 mb-4">
                <FaNetworkWired size={28} color="#16a34a" />
                <h2 className="h3 mb-0">Infrastructure & Networking</h2>
              </div>
              <Row xs={1} md={2} lg={3} className="g-4">
                {infraPackages.map((pkg, i) => (
                  <Col key={i}>
                    <PricingCard pkg={pkg} icon={<FaNetworkWired />} />
                  </Col>
                ))}
              </Row>
            </div>
          </AnimatedSection>

          {/* ===== CYBERSECURITY ===== */}
          <AnimatedSection>
            <div id="security" ref={(el) => sectionRefs.current.security = el} className="section-anchor mt-5 pt-4">
              <div className="d-flex align-items-center gap-2 mb-4">
                <FaShieldAlt size={28} color="#16a34a" />
                <h2 className="h3 mb-0">Cybersecurity</h2>
              </div>
              <Row xs={1} md={2} lg={3} className="g-4">
                {securityPackages.map((pkg, i) => (
                  <Col key={i}>
                    <PricingCard pkg={pkg} icon={<FaShieldAlt />} />
                  </Col>
                ))}
              </Row>
            </div>
          </AnimatedSection>

          {/* ===== CONSULTING & TRAINING ===== */}
          <AnimatedSection>
            <div id="consulting" ref={(el) => sectionRefs.current.consulting = el} className="section-anchor mt-5 pt-4">
              <div className="d-flex align-items-center gap-2 mb-4">
                <FaChalkboardTeacher size={28} color="#16a34a" />
                <h2 className="h3 mb-0">Consulting & Training</h2>
              </div>
              <Row xs={1} md={2} lg={3} className="g-4">
                {consultingPackages.map((pkg, i) => (
                  <Col key={i}>
                    <PricingCard pkg={pkg} icon={<FaChalkboardTeacher />} />
                  </Col>
                ))}
              </Row>
            </div>
          </AnimatedSection>

          {/* ===== SUPPORT & MAINTENANCE ===== */}
          <AnimatedSection>
            <div id="support" ref={(el) => sectionRefs.current.support = el} className="section-anchor mt-5 pt-4">
              <div className="d-flex align-items-center gap-2 mb-4">
                <FaHeadset size={28} color="#16a34a" />
                <h2 className="h3 mb-0">Support & Maintenance</h2>
              </div>
              <Row xs={1} md={2} lg={3} className="g-4">
                {supportPackages.map((pkg, i) => (
                  <Col key={i}>
                    <PricingCard pkg={pkg} icon={<FaHeadset />} isPopular={pkg.popular} />
                  </Col>
                ))}
              </Row>
            </div>
          </AnimatedSection>

          {/* ===== PAYMENT TERMS ===== */}
          <AnimatedSection>
            <div className="mt-5 pt-4">
              <h3 className="mb-3">Payment Terms</h3>
              <Row xs={1} md={3} className="g-4">
                <Col>
                  <Card className="glass-card text-center h-100">
                    <Card.Body>
                      <h5>Standard</h5>
                      <p className="small text-muted">30% Project Kickoff<br />40% Development<br />30% Delivery</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="glass-card text-center h-100">
                    <Card.Body>
                      <h5>Simplified</h5>
                      <p className="small text-muted">50% Project Start<br />50% Project Completion</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="glass-card text-center h-100">
                    <Card.Body>
                      <h5>Custom</h5>
                      <p className="small text-muted">Milestone‑based payments tailored to your project scope.</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </AnimatedSection>

          {/* ===== FAQ ===== */}
          <AnimatedSection>
            <div className="mt-5 pt-4">
              <h3 className="mb-3">Frequently Asked Questions</h3>
              <Row className="g-3">
                {[
                  { q: "Does the price include hosting?", a: "No. Hosting and domain registration are billed separately unless stated." },
                  { q: "Can I pay in installments?", a: "Yes. Milestone payments are available for all projects." },
                  { q: "Do you work outside Malawi?", a: "Yes. Projects are delivered remotely worldwide." },
                  { q: "Do you provide support after delivery?", a: "Absolutely. Support packages are available to keep your systems running smoothly." },
                  { q: "How do I get started?", a: "Simply schedule a free consultation – we'll discuss your needs and I'll prepare a detailed proposal." },
                ].map((faq, i) => (
                  <Col md={6} key={i}>
                    <Card className="glass-card h-100">
                      <Card.Body>
                        <h5 className="d-flex align-items-center gap-2">
                          <FaQuestionCircle className="text-success" />
                          {faq.q}
                        </h5>
                        <p className="text-muted small mb-0">{faq.a}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </AnimatedSection>

          {/* ===== WHY WORK WITH ARELIC ===== */}
          <AnimatedSection>
            <div className="mt-5 pt-4 text-center">
              <h3 className="mb-4">Why work with aRelic?</h3>
              <Row className="justify-content-center">
                <Col md={8}>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {[
                      'Full‑stack Developer',
                      'Networking & Infrastructure Expertise',
                      'Flutter & React Specialist',
                      'Secure Development Practices',
                      'Documentation Included',
                      'Ongoing Technical Support',
                    ].map((reason, i) => (
                      <div key={i} className="trust-badge bg-light px-3 py-2 rounded-pill">
                        <FaCheckCircle className="text-success me-1" /> {reason}
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
              <div className="mt-4">
                <Button href="/contact?subject=Let%27s%20Discuss" variant="success" size="lg">
                  Start Your Project
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </main>
    </>
  );
}