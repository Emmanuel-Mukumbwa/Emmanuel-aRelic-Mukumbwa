// src/pages/Quotes.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Button, Badge, Nav, Table, Accordion } from 'react-bootstrap';
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
  FaLaptop,
  FaTools,
  FaDatabase,
} from 'react-icons/fa';
import './Quotes.css';

// ----- Section ID constants -----
const sections = [
  { id: 'digital',    label: 'Digital',    icon: <FaCode /> },
  { id: 'mobile',     label: 'Mobile',     icon: <FaMobileAlt /> },
  { id: 'infra',      label: 'Infrastructure', icon: <FaNetworkWired /> },
  { id: 'computer',   label: 'Computer Support', icon: <FaLaptop /> },
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

// ----- New: Computer & Technical Support data -----
const quickServices = [
  { service: 'Computer diagnosis / check-up', price: 'MK5,000+' },
  { service: 'Windows installation', price: 'MK8,000+' },
  { service: 'Windows + drivers', price: 'MK12,000+' },
  { service: 'Windows updates', price: 'MK5,000+' },
  { service: 'Driver installation / update', price: 'MK5,000+' },
  { service: 'Microsoft Office installation', price: 'MK5,000+' },
  { service: 'Antivirus setup', price: 'MK3,000+' },
  { service: 'Malware removal', price: 'MK7,000–10,000' },
  { service: 'Essential software installation', price: 'MK5,000+' },
  { service: 'Browser / email / PDF setup', price: 'MK5,000+' },
  { service: 'System optimization', price: 'MK5,000+' },
  { service: 'Windows password reset', price: 'MK5,000–10,000' },
  { service: 'Windows repair without formatting', price: 'MK8,000+' },
];

const hardwareServices = [
  { service: 'SSD installation', price: 'MK7,000' },
  { service: 'RAM installation', price: 'MK3,000' },
  { service: 'HDD installation', price: 'MK7,000' },
  { service: 'BIOS / firmware update', price: 'MK8,000' },
  { service: 'Thermal paste replacement', price: 'MK7,000–10,000' },
  { service: 'Laptop cleaning', price: 'MK7,000–15,000' },
  { service: 'Screen replacement labour', price: 'MK7,000–15,000' },
  { service: 'Keyboard replacement labour', price: 'MK5,000–10,000' },
  { service: 'Battery replacement labour', price: 'MK3,000–5,000' },
  { service: 'DC jack replacement labour', price: 'MK10,000–20,000' },
  { service: 'Hinge repair', price: 'MK8,000–15,000' },
  { service: 'Motherboard troubleshooting', price: 'MK15,000+' },
];

const dataServices = [
  { service: 'Backup ≤ 50 GB', price: 'MK5,000+' },
  { service: 'Backup 50–150 GB', price: 'MK8,000+' },
  { service: 'Backup 150–500 GB', price: 'MK12,000+' },
  { service: 'Backup 500 GB–1 TB', price: 'MK15,000+' },
  { service: 'Backup > 1 TB', price: 'MK20,000+' },
  { service: 'Data transfer', price: 'MK8,000–20,000' },
  { service: 'Drive cloning', price: 'MK10,000–20,000' },
  { service: 'Basic data recovery', price: 'MK15,000–30,000+' },
];

const onsiteServices = [
  { service: 'Remote troubleshooting', price: 'MK5,000+' },
  { service: 'On‑site service', price: 'MK10,000+' },
  { service: 'Local call‑out', price: 'MK5,000–10,000' },
  { service: 'Outside service area', price: 'MK10,000+' },
  { service: 'Travel', price: 'Quoted separately where applicable' },
];

const computerSetupPackages = [
  {
    name: 'Basic Setup',
    bestFor: 'Everyday users, simple laptops',
    features: [
      'Windows installation',
      'Driver installation',
      'Essential software (browser, PDF)',
      'Basic optimisation',
    ],
    timeline: 'Same day',
    support: '7 days',
    investment: 'MK15,000+',
    popular: false,
  },
  {
    name: 'Standard Setup',
    bestFor: 'Most laptops & desktops',
    features: [
      'Formatting & clean Windows install',
      'Drivers & Windows updates',
      'Microsoft Office installation',
      'Antivirus setup',
      'System optimisation',
    ],
    timeline: '1 day',
    support: '14 days',
    investment: 'MK25,000+',
    popular: true,
  },
  {
    name: 'Premium Setup',
    bestFor: 'New computers or full reconditioning',
    features: [
      'Everything in Standard Setup',
      'Hardware check',
      'Account & email configuration',
      'Data migration (optional)',
      'Final performance report',
    ],
    timeline: '1–2 days',
    support: '30 days',
    investment: 'MK35,000+',
    popular: false,
  },
  {
    name: 'Setup + SSD Upgrade',
    bestFor: 'Boosting older machines',
    features: [
      'SSD installation',
      'Windows + drivers',
      'Essential software',
      'System optimisation',
      'Migration assistance',
    ],
    timeline: '1 day',
    support: '30 days',
    investment: 'From MK35,000 + SSD',
    popular: false,
  },
];

// ----- Utility component for a pricing card with optional feature collapse -----
function PricingCard({ pkg, icon, isPopular }) {
  const [expanded, setExpanded] = useState(
    typeof window !== 'undefined' && window.innerWidth > 768
  );
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setExpanded(true); // always show all features on desktop
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleFeatures = expanded || !isMobile
    ? pkg.features
    : pkg.features.slice(0, 3);

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
          {visibleFeatures.map((f, i) => (
            <div key={i} className="feature-item">
              <FaCheckCircle className="text-success me-2" />
              <span>{f}</span>
            </div>
          ))}
          {isMobile && pkg.features.length > 3 && (
            <button
              type="button"
              className="feature-toggle"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded
                ? 'Show fewer features'
                : `Show ${pkg.features.length - 3} more`}
            </button>
          )}
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

// ----- Utility for compact price tables -----
function PriceTable({ items }) {
  return (
    <div className="table-responsive">
      <Table striped bordered hover className="quick-table">
        <thead>
          <tr>
            <th>Service</th>
            <th className="text-end">Starting Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td>{item.service}</td>
              <td className="text-end fw-semibold text-success">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
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
      { rootMargin: '-120px 0px -55% 0px', threshold: 0 }
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

  // Smoothly scroll the opened accordion item into view
  const handleAccordionSelect = (activeKey, prefix) => {
    // Wait for the accordion to finish expanding
    setTimeout(() => {
      const element = document.getElementById(`${prefix}-${activeKey}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Adjust for sticky header
        window.scrollBy({ top: -120, behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <>
      <Helmet>
        <title>Pricing & Services — aRelic | ICT Consultancy</title>
        <meta
          name="description"
          content="Transparent pricing for Emmanuel (aRelic) Mukumbwa – ICT consultancy offering digital solutions, mobile apps, networking, cybersecurity, computer support, training, and more."
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
              <p className="small text-muted mb-4">
                Starting investments shown in <strong>MWK</strong>. Hardware, hosting, domains, licenses and third-party services may be charged separately where applicable.
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
            {/* Desktop navigation */}
            <div className="category-nav-desktop">
              <Nav className="justify-content-center category-nav" activeKey={activeSection}>
                {sections.map((sec) => (
                  <Nav.Link
                    key={sec.id}
                    eventKey={sec.id}
                    className="category-nav-link"
                    onClick={() => scrollToSection(sec.id)}
                  >
                    {sec.icon} <span className="ms-1">{sec.label}</span>
                  </Nav.Link>
                ))}
              </Nav>
            </div>

            {/* Mobile dropdown */}
            <div className="category-nav-mobile">
              <label htmlFor="service-category" className="category-select-label">
                Browse services
              </label>
              <select
                id="service-category"
                className="form-select category-select"
                value={activeSection}
                onChange={(e) => scrollToSection(e.target.value)}
              >
                {sections.map((sec) => (
                  <option key={sec.id} value={sec.id}>
                    {sec.label}
                  </option>
                ))}
              </select>
            </div>
          </Container>
        </div>

        <Container className="py-5">
          {/* ===== DIGITAL SOLUTIONS ===== */}
          <AnimatedSection>
            <div id="digital" ref={(el) => sectionRefs.current.digital = el} className="section-anchor">
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaCode size={28} color="#16a34a" />
                <h2 className="h3 mb-0">Digital Solutions</h2>
              </div>
              <p className="text-muted mb-4">Websites, business platforms and custom web applications</p>
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
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaMobileAlt size={28} color="#16a34a" />
                <h2 className="h3 mb-0">Mobile Applications</h2>
              </div>
              <p className="text-muted mb-4">Flutter apps for Android, iOS and cross-platform deployments</p>
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
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaNetworkWired size={28} color="#16a34a" />
                <h2 className="h3 mb-0">Infrastructure & Networking</h2>
              </div>
              <p className="text-muted mb-4">LAN, WiFi, server deployment and network support</p>
              <Row xs={1} md={2} lg={3} className="g-4">
                {infraPackages.map((pkg, i) => (
                  <Col key={i}>
                    <PricingCard pkg={pkg} icon={<FaNetworkWired />} />
                  </Col>
                ))}
              </Row>
            </div>
          </AnimatedSection>

          {/* ===== COMPUTER & TECHNICAL SUPPORT ===== */}
          <AnimatedSection>
            <div id="computer" ref={(el) => sectionRefs.current.computer = el} className="section-anchor mt-5 pt-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaLaptop size={28} color="#16a34a" />
                <h2 className="h3 mb-0">Computer & Technical Support</h2>
              </div>
              <p className="text-muted mb-4">
                Practical computer maintenance, software installation, hardware support, data services, and on‑site troubleshooting.
              </p>

              {/* Setup Packages - always visible */}
              <h5 className="mt-4 mb-3">Popular Setup Packages</h5>
              <Row xs={1} md={2} lg={4} className="g-4 mb-4">
                {computerSetupPackages.map((pkg, i) => (
                  <Col key={i}>
                    <PricingCard pkg={pkg} icon={<FaLaptop />} isPopular={pkg.popular} />
                  </Col>
                ))}
              </Row>

              {/* Desktop: all tables visible */}
              <div className="d-none d-md-block">
                <h5 className="mb-2 d-flex align-items-center gap-2">
                  <FaTools className="text-success" /> Quick Services
                </h5>
                <PriceTable items={quickServices} />

                <h5 className="mt-5 mb-2 d-flex align-items-center gap-2">
                  <FaTools className="text-success" /> Hardware & Repair Labour
                </h5>
                <PriceTable items={hardwareServices} />
                <p className="text-muted small mt-2">
                  <FaCheckCircle className="text-success me-1" />
                  Parts, replacement hardware, licenses and special‑order components are charged separately.
                </p>

                <h5 className="mt-5 mb-2 d-flex align-items-center gap-2">
                  <FaDatabase className="text-success" /> Data, Backup & Recovery
                </h5>
                <PriceTable items={dataServices} />
                <p className="text-muted small mt-2">
                  Data recovery pricing is assessed case‑by‑case. Recovery cannot be guaranteed where storage media is physically damaged or encrypted.
                </p>

                <h5 className="mt-5 mb-2 d-flex align-items-center gap-2">
                  <FaHeadset className="text-success" /> On‑site & Field Support
                </h5>
                <PriceTable items={onsiteServices} />
              </div>

              {/* Mobile: collapsible accordion with discoverability aid */}
              <div className="d-md-none mt-4">
                <p className="small text-muted mb-2">
                  <FaCheckCircle className="text-success me-1" />
                  Tap a category to view pricing
                </p>
                <Accordion
                  className="service-details-accordion"
                  defaultActiveKey="0"
                  onSelect={(eventKey) => handleAccordionSelect(eventKey, 'service')}
                >
                  <Accordion.Item eventKey="0" id="service-0">
                    <Accordion.Header>
                      <FaTools className="text-success me-2" /> Quick Services
                    </Accordion.Header>
                    <Accordion.Body>
                      <PriceTable items={quickServices} />
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1" id="service-1">
                    <Accordion.Header>
                      <FaTools className="text-success me-2" /> Hardware & Repair Labour
                    </Accordion.Header>
                    <Accordion.Body>
                      <PriceTable items={hardwareServices} />
                      <p className="text-muted small mt-2 mb-0">
                        <FaCheckCircle className="text-success me-1" />
                        Parts, replacement hardware, licenses and special‑order components are charged separately.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" id="service-2">
                    <Accordion.Header>
                      <FaDatabase className="text-success me-2" /> Data, Backup & Recovery
                    </Accordion.Header>
                    <Accordion.Body>
                      <PriceTable items={dataServices} />
                      <p className="text-muted small mt-2 mb-0">
                        Data recovery pricing is assessed case‑by‑case. Recovery cannot be guaranteed where storage media is physically damaged or encrypted.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3" id="service-3">
                    <Accordion.Header>
                      <FaHeadset className="text-success me-2" /> On‑site & Field Support
                    </Accordion.Header>
                    <Accordion.Body>
                      <PriceTable items={onsiteServices} />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </AnimatedSection>

          {/* ===== CYBERSECURITY ===== */}
          <AnimatedSection>
            <div id="security" ref={(el) => sectionRefs.current.security = el} className="section-anchor mt-5 pt-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaShieldAlt size={28} color="#16a34a" />
                <h2 className="h3 mb-0">Cybersecurity</h2>
              </div>
              <p className="text-muted mb-4">Assessments, audits and remediation for safer operations</p>
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
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaChalkboardTeacher size={28} color="#16a34a" />
                <h2 className="h3 mb-0">Consulting & Training</h2>
              </div>
              <p className="text-muted mb-4">Workshops, labs and advisory to build capacity</p>
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
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaHeadset size={28} color="#16a34a" />
                <h2 className="h3 mb-0">Support & Maintenance</h2>
              </div>
              <p className="text-muted mb-4">Ongoing care for your systems and applications</p>
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
                  <Card className="glass-card text-center h-100 payment-card">
                    <Card.Body>
                      <h5>Standard</h5>
                      <div className="payment-percent">30 / 40 / 30</div>
                      <p className="small text-muted mb-0">Kickoff / Development / Delivery</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="glass-card text-center h-100 payment-card">
                    <Card.Body>
                      <h5>Simplified</h5>
                      <div className="payment-percent">50 / 50</div>
                      <p className="small text-muted mb-0">Start / Completion</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="glass-card text-center h-100 payment-card">
                    <Card.Body>
                      <h5>Custom</h5>
                      <div className="payment-percent">Milestones</div>
                      <p className="small text-muted mb-0">Tailored to your project scope</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </AnimatedSection>

          {/* ===== FAQ (Accordion) ===== */}
          <AnimatedSection>
            <div className="mt-5 pt-4">
              <h3 className="mb-3">Frequently Asked Questions</h3>
              <Accordion
                className="faq-accordion"
                onSelect={(eventKey) => handleAccordionSelect(eventKey, 'faq')}
              >
                {[
                  { q: "Does the price include hosting?", a: "No. Hosting and domain registration are billed separately unless stated." },
                  { q: "Can I pay in installments?", a: "Yes. Milestone payments are available for all projects." },
                  { q: "Do you work outside Malawi?", a: "Yes. Projects are delivered remotely worldwide." },
                  { q: "Do you provide support after delivery?", a: "Absolutely. Support packages are available to keep your systems running smoothly." },
                  { q: "How do I get started?", a: "Simply schedule a free consultation – we'll discuss your needs and I'll prepare a detailed proposal." },
                ].map((faq, i) => (
                  <Accordion.Item eventKey={String(i)} key={i} id={`faq-${i}`}>
                    <Accordion.Header>
                      <FaQuestionCircle className="text-success me-2" /> {faq.q}
                    </Accordion.Header>
                    <Accordion.Body className="text-muted small">{faq.a}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
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
