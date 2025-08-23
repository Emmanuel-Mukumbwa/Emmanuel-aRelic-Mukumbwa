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
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiNodedotjs,
  SiMysql,
  SiPostman
} from 'react-icons/si';

// import hero image from src/assets — add your image file there
// create src/assets/hero-illustration.svg (or .png/.jpg) and commit it.
// If you prefer using public folder, use: const heroImg = '/hero-illustration.svg';
import heroImg from '../assets/me.jpg';

const skillIcons = {
  React: <SiReact size={48} />,
  Bootstrap: <SiBootstrap size={48} />,
  JavaScript: <SiJavascript size={48} />,
  HTML5: <SiHtml5 size={48} />,
  CSS3: <SiCss3 size={48} />,
  Git: <SiGit size={48} />,
  NodeJS: <SiNodedotjs size={48} />,
  MySQL: <SiMysql size={48} />,
  Postman: <SiPostman size={48} />
};

const skills = ['React','Bootstrap','JavaScript','HTML5','CSS3','Git','NodeJS','MySQL','Postman'];

export default function HomePage() {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
  }, []);

  return (
    <>
      <Helmet>
        <title>aRelic | Portfolio</title>
        <meta name="description" content="Full Stack Developer specializing in React, NodeJS, and modern web design." />
      </Helmet>

      <main>
        {/* HERO */}
        <section id="hero" className="hero-section py-5">
          <Container>
            <AnimatedSection>
              <Row className="align-items-center">
                <Col md={7}>
                  <h1 className="display-4 gradient-text mb-3">Emmanuel (aRelic) Mukumbwa</h1>

                  {/* Strong value headline + subhead (higher-ROI text) */}
                  <h2 className="h5 text-muted mb-3">
                    I help startups and students ship usable React + Node apps that get real users.
                  </h2>
                  <p className="lead text-muted">
                    Clean front-ends, robust back-ends and clear handover docs — from payment integrations to admin dashboards.
                  </p>

                  <div className="d-flex gap-3 mt-4">
                    {/* Primary CTA - goes to contact with prefilled subject (qualifies leads) */}
                     <Button
                      href="/about"
                      variant="success"
                      aria-label="About Me"
                    >
                      About Me
                    </Button>
                    <Button
                      href="/contact?subject=Request%20a%20quote"
                      variant="success"
                      aria-label="Request a quote"
                    >
                      Request Quote
                    </Button>

                    {/* Secondary CTA - view CV page (we suggested /resume page earlier) */}
                    <Button
                      href="/resume"
                      variant="success"
                      aria-label="View resume"
                    >
                      View CV
                    </Button>
                  </div>

                  {/* quick social proof / stats */}
                  <div className="mt-4 text-muted small">
                    <strong>5 projects</strong> • <strong>3 paying clients</strong> • <strong>99% on-time delivery</strong>
                  </div>
                </Col>

                {/* HERO ILLUSTRATION */}
                <Col md={5} className="text-center mt-4 mt-md-0">
                  {/* If heroImg fails to resolve, change to src: /hero-illustration.svg in public */}
                  <img
                    src={heroImg}
                    alt="Illustration of developer and projects"
                    className="hero-illustration img-fluid"
                    style={{ maxHeight: 360 }}
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
                    <div className="skill-icon mb-2">{skillIcons[s]}</div>
                    <div className="text-muted small">{s}</div>
                  </Col>
                ))}
              </Row>
            </AnimatedSection>
          </Container>
        </section>

        {/* PROJECTS — ensure equal height cards via CSS classes below */}
        <section id="projects" className="py-5">
          <Container>
            <AnimatedSection>
              <h2 className="mb-4 text-center section-title">Selected Projects</h2>
              <Row className="row-cols-1 row-cols-md-3 g-4 project-grid">
                {projects.slice(0,3).map(p => (
                  <Col key={p.id}>
                    {/* add 'project-card' class to apply equal-height CSS */}
                    <GlassCard className="h-100 project-card">
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>{p.title}</Card.Title>
                        <Card.Text className="text-muted small card-summary">{p.shortDescription}</Card.Text>

                        {/* actions pinned to bottom using flex layout */}
                        <div className="mt-auto d-flex gap-2 card-actions">
                          <Button href={`/projects/${p.slug}`} variant="success" aria-label={`Open case study ${p.title}`}>Case Study</Button>
                          {p.demo && (
                            <Button href={p.demo} variant="outline-secondary" target="_blank" rel="noopener noreferrer" aria-label={`Open live demo ${p.title}`}>
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
                <Button href="/projects" variant="outline-success">See all case studies</Button>
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
                  <p className="text-center text-muted">Tell me about your project — I respond in 24–48 hours.</p>
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
