// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AnimatedSection from '../AnimatedSection';
import ReactGA from 'react-ga4';
import projects from '../data/projects';
import ContactForm from '../components/ContactForm';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiLaravel,
  SiPython,
  SiGit,
  SiDocker,
  SiLinux,
} from 'react-icons/si';
import {
  FaServer,
  FaNetworkWired,
  FaTools,
  FaCogs,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaCode,
  FaDatabase,
} from 'react-icons/fa';
import './Home.css';

// image imports
import emmanuel1xJpg from '../assets/emmanuel-800.jpg';
import emmanuel2xJpg from '../assets/emmanuel-1600.jpg';

const skillIcons = {
  'System Administration': <FaServer size={48} />,
  'Networking': <FaNetworkWired size={48} />,
  'IT Infrastructure': <FaTools size={48} />,
  'API Design': <FaCogs size={48} />,
  'Training & Documentation': <FaChalkboardTeacher size={48} />,
  'Network Security': <FaShieldAlt size={48} />,
  'Linux': <SiLinux size={36} />,
  'Python': <SiPython size={36} />,
  'Laravel': <SiLaravel size={36} />,
  'React': <SiReact size={36} />,
  'Next.js': <SiNextdotjs size={36} />,
  'Node.js': <SiNodedotjs size={36} />,
  'Express': <SiExpress size={36} />,
  'MySQL': <SiMysql size={36} />,
  'Git': <SiGit size={36} />,
  'Docker': <SiDocker size={36} />,
  'REST APIs': <FaCode size={36} />,
  'Database Design': <FaDatabase size={36} />,
};

const skills = [
  'System Administration',
  'Networking',
  'IT Infrastructure',
  'API Design',
  'Network Security',
  'Linux',
  'Python',
  'Laravel',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MySQL',
  'Git',
  'Docker',
  'REST APIs',
  'Database Design',
  'Training & Documentation',
];

const getPlaceholderAvatar = (seed = 'arelic') =>
  `https://avatars.dicebear.com/api/identicon/${encodeURIComponent(seed)}.svg`;

export default function HomePage() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth < 768;
      setIsSmallScreen(small);
      // If screen becomes large, reset the toggle state to default (show only 10 if small)
      if (!small && showAllSkills) {
        setShowAllSkills(false);
      }
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showAllSkills]);

  useEffect(() => {
    try {
      if (typeof ReactGA?.send === 'function') {
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
      }
    } catch (err) {
      console.warn('ReactGA send failed', err);
    }
  }, []);

  const displayedSkills = isSmallScreen && !showAllSkills ? skills.slice(0, 10) : skills;
  const hasMoreSkills = skills.length > 10;

  const handleToggleSkills = () => {
    setShowAllSkills(!showAllSkills);
    // Optional: scroll the skills section into view smoothly
    const skillsSection = document.getElementById('skills');
    if (skillsSection && !showAllSkills) {
      skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
                    Systems, networks, and ICT solutions — reliable, scalable, and built for real-world environments.
                  </h2>
                  <p className="lead text-muted">
                    I design, deploy, and document maintainable ICT systems for campuses, NGOs, and small businesses. From site assessments and network rollouts to integrations and hands-on training, my focus is on practical, local-first solutions that teams can manage and students can learn from.
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
                    <strong>Systems deployed</strong> • <strong>Attachments supervised</strong> • <strong>Workshops delivered</strong>
                  </div>
                </Col>

                <Col md={5} className="text-center mt-4 mt-md-0">
                  <div className="hero-circle" aria-hidden={false}>
                    <picture>
                      <img
                        src={emmanuel1xJpg}
                        srcSet={`${emmanuel1xJpg} 1x, ${emmanuel2xJpg} 2x`}
                        sizes="(max-width: 767px) 260px, (max-width: 991px) 360px, 420px"
                        alt="Emmanuel (aRelic) Mukumbwa — portrait"
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
            </AnimatedSection>
          </Container>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-5 bg-light">
          <Container>
            <AnimatedSection>
              <h2 className="mb-4 text-center section-title">Skills & Tools</h2>
              <Row className="justify-content-center">
                {displayedSkills.map((s, i) => (
                  <Col key={i} xs={6} md={3} lg={2} className="text-center mb-4">
                    <div className="skill-icon mb-2" aria-hidden>{skillIcons[s]}</div>
                    <div className="text-muted small">{s}</div>
                  </Col>
                ))}
              </Row>
              {isSmallScreen && hasMoreSkills && (
                <div className="text-center mt-3">
                  <Button
                    variant="outline-success"
                    size="sm"
                    onClick={handleToggleSkills}
                    aria-label={showAllSkills ? "Show fewer skills" : "Show more skills"}
                  >
                    {showAllSkills ? "Show fewer skills" : "Show all skills"}
                  </Button>
                </div>
              )}
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
                    <Card className="h-100 project-card">
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
                    </Card>
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