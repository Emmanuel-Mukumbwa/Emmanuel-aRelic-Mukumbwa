// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AnimatedSection from '../AnimatedSection';
import GlassCard from '../GlassCard';
import ReactGA from 'react-ga4';
import projects from '../data/projects';
import ContactForm from '../components/ContactForm';
import {
  SiReact,
  SiGit,
  SiNodedotjs,
  SiMysql,
  SiPostman,
  SiPython,
  SiLaravel
} from 'react-icons/si';
import {
  FaServer,
  FaNetworkWired,
  FaTools,
  FaCogs,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaLinux
} from 'react-icons/fa';
import './Home.css';

// hero image (local asset)
import heroImg from '../assets/me.jpg';

// Icons map — a mix of development and broader ICT icons
const skillIcons = {
  Systems: <FaServer size={48} />,
  Networking: <FaNetworkWired size={48} />,
  Infrastructure: <FaTools size={48} />,
  Integrations: <FaCogs size={48} />,
  'Training & Docs': <FaChalkboardTeacher size={48} />,
  Security: <FaShieldAlt size={48} />,
  'Kali Linux': <FaLinux size={36} />,
  Python: <SiPython size={36} />,
  Laravel: <SiLaravel size={36} />,
  React: <SiReact size={36} />,
  NodeJS: <SiNodedotjs size={36} />,
  MySQL: <SiMysql size={36} />,
  Postman: <SiPostman size={36} />,
  Git: <SiGit size={36} />
};

// Skills ordered to display (these keys must match skillIcons where icons are used)
const skills = [
  'Systems',
  'Networking',
  'Infrastructure',
  'Integrations',
  'Security',
  'Kali Linux',
  'Python',
  'Laravel',
  'Training & Docs',
  'React',
  'NodeJS',
  'MySQL',
  'Postman',
  'Git'
];

// small helper to generate a DiceBear avatar URL for fallbacks
const getPlaceholderAvatar = (seed = 'arelic') =>
  `https://avatars.dicebear.com/api/identicon/${encodeURIComponent(seed)}.svg`;

export default function HomePage() {
  useEffect(() => {
    try {
      // safe guard: only send pageview if ReactGA is configured
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
        <title>aRelic | ICT Professional</title>
        <meta
          name="description"
          content="Emmanuel (aRelic) Mukumbwa — ICT professional specialising in systems, networks, communications, attachments, reporting and training."
        />
      </Helmet>

      <main>
        {/* HERO */}
        <section id="hero" className="hero-section py-5">
          <Container>
            <AnimatedSection>
              <Row className="align-items-center">
                <Col md={7}>
                  <h1 className="display-4 gradient-text mb-3">Emmanuel (aRelic) Mukumbwa</h1>

                  <h2 className="h5 text-muted mb-3">
                    Systems, networks and communications — practical ICT solutions for campuses, NGOs and small businesses.
                  </h2>
                  <p className="lead text-muted">
                    I design, deploy and document reliable, maintainable ICT systems — from site attachments and network checks to integrations and training. Practical, local-first solutions that staff can run and students can learn from.
                  </p>

                  <div className="d-flex gap-3 mt-4">
                    <Button href="/about" variant="success" aria-label="About Emmanuel">
                      About Emmanuel
                    </Button>
                    <Button href="/contact?subject=Request%20a%20quote" variant="success" aria-label="Request a quote">
                      Request a quote
                    </Button>
                    <Button href="/resume" variant="outline-success" aria-label="View resume">
                      View CV
                    </Button>
                  </div>

                  <div className="mt-4 text-muted small">
                    <strong>Systems deployed</strong> • <strong>Industrial attachments supervised</strong> • <strong>Workshops run</strong>
                  </div>
                </Col>

                {/* HERO IMAGE */}
                <Col md={5} className="text-center mt-4 mt-md-0">
                  <img
                    src={heroImg}
                    alt="Portrait of Emmanuel (aRelic) Mukumbwa"
                    className="hero-illustration img-fluid"
                    style={{ maxHeight: 360 }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getPlaceholderAvatar('Emmanuel-aRelic-Mukumbwa');
                    }}
                  />
                </Col>
              </Row>
            </AnimatedSection>
          </Container>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-5 bg-light">
          <Container>
            <AnimatedSection>
              <h2 className="mb-4 text-center section-title">Skills & Tools</h2>
              <Row className="justify-content-center">
                {skills.map((s, i) => (
                  <Col key={i} xs={6} md={3} lg={2} className="text-center mb-4">
                    <div className="skill-icon mb-2" aria-hidden>{skillIcons[s]}</div>
                    <div className="text-muted small">{s}</div>
                  </Col>
                ))}
              </Row>
            </AnimatedSection>
          </Container>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-5">
          <Container>
            <AnimatedSection>
              <h2 className="mb-4 text-center section-title">Selected Work & Engagements</h2>
              <p className="text-center text-muted small mb-4">
                Case studies and project summaries covering software, systems and field attachments.
              </p>

              <Row className="row-cols-1 row-cols-md-3 g-4 project-grid">
                {projects.slice(0, 4).map((p) => (
                  <Col key={p.id}>
                    <GlassCard className="h-100 project-card">
                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="project-title">{p.title}</Card.Title>
                        <Card.Text className="text-muted small card-summary">{p.shortDescription}</Card.Text>

                        <div className="mt-auto d-flex gap-2 card-actions">
                          <Button href={`/projects/${p.slug}`} variant="success" aria-label={`Open case study ${p.title}`}>
                            Case Study
                          </Button>
                          {p.demo && (
                            <Button
                              href={p.demo}
                              variant="outline-secondary"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open live demo ${p.title}`}
                            >
                              Live
                            </Button>
                          )}
                        </div>
                      </Card.Body>
                    </GlassCard>
                  </Col>
                ))}
              </Row>

              <div className="text-center mt-4">
                <Button href="/projects" variant="outline-success">
                  See all case studies
                </Button>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-5 bg-light">
          <Container>
            <AnimatedSection>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <h2 className="mb-3 text-center">Contact</h2>
                  <p className="text-center text-muted">
                    Tell me about your site, lab or attachment — I usually reply in 24–48 hours.
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
