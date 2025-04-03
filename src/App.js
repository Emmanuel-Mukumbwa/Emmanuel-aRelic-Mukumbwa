import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Navbar, Nav, Card, Button, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';
import ReactGA from 'react-ga4';
import './custom.scss';
import './analytics';

// Import React Icons for skills and social links
import { SiReact, SiBootstrap, SiJavascript, SiHtml5, SiCss3, SiGit, SiNodedotjs, SiMysql, SiPostman } from 'react-icons/si';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

// Create a mapping of skills to their respective icon components
const skillIcons = {
  React: <SiReact size={50} />,
  Bootstrap: <SiBootstrap size={50} />,
  JavaScript: <SiJavascript size={50} />,
  HTML5: <SiHtml5 size={50} />,
  CSS3: <SiCss3 size={50} />,
  Git: <SiGit size={50} />,
  NodeJS: <SiNodedotjs size={50} />,
  MySQL: <SiMysql size={50} />,
  Postman: <SiPostman size={50} />
};

function App() {
  useEffect(() => {
    // Track page view on load
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
  }, []);

  // Skills and projects arrays
  const skills = [
    'React',
    'Bootstrap',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Git',
    'NodeJS',
    'MySQL',
    'Postman'
  ];

  const projects = [
    { 
      title: 'Password Generator App', 
      description: 'A secure password generator with customizable options.', 
      link: 'https://password-generator-app-lime.vercel.app/' 
    },
    { 
      title: 'Weather App', 
      description: 'Real-time weather information for any location.', 
      link: 'https://weather-app-01-two.vercel.app/' 
    },
    { 
      title: 'CampusTalent', 
      description: 'A platform connecting students with campus opportunities and top companies/organizations.', 
      link: 'https://campus-talent-frontend-git-main-emmanuels-projects-4148ec83.vercel.app/' 
    }
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Emmanuel aRelic Mukumbwa | Portfolio</title>
        <meta name="description" content="Full Stack Developer specializing in React, NodeJS, and modern web design." />
        <meta property="og:image" content="/og-image.png" />
        <link href="https://fonts.googleapis.com/css2?family=Qontra:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Navigation */}
      <Navbar expand="lg" variant="light" className="glass-card navbar-custom">
        <Container>
          <Navbar.Brand href="#hero">Emmanuel aRelic Mukumbwa</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#hero">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content wrapped with Framer Motion for smooth transitions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <main>
          {/* Hero Section */}
          <section id="hero" className="hero-section">
            <Container className="h-100 d-flex align-items-center justify-content-center">
              <AnimatedSection>
                <h1 className="display-3 gradient-text">Emmanuel aRelic Mukumbwa</h1>
                <p className="lead">Full Stack Developer</p>
                <Button variant="primary" href="#contact" className="mt-4">Get in Touch</Button>
              </AnimatedSection>
            </Container>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-5 bg-light">
            <Container>
              <AnimatedSection>
                <h2 className="mb-4 text-center section-title">Skills</h2>
                <Row className="justify-content-center">
                  {skills.map((skill, index) => (
                    <Col key={index} xs={6} md={4} className="mb-4 text-center">
                      <div className="hover-zoom">
                        {skillIcons[skill] || <span>{skill}</span>}
                      </div>
                      <p className="mt-2">{skill}</p>
                    </Col>
                  ))}
                </Row>
              </AnimatedSection>
            </Container>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-5">
            <Container>
              <AnimatedSection>
                <h2 className="mb-4 text-center section-title">Projects</h2>
                <Row className="row-cols-1 row-cols-md-3 g-4">
                  {projects.map((project, index) => (
                    <Col key={index}>
                      <GlassCard className="h-100">
                        <Card.Body>
                          <Card.Title>{project.title}</Card.Title>
                          <Card.Text>{project.description}</Card.Text>
                          <Button variant="primary" href={project.link} target="_blank">
                            Visit Project
                          </Button>
                        </Card.Body>
                      </GlassCard>
                    </Col>
                  ))}
                </Row>
              </AnimatedSection>
            </Container>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-5 bg-light">
            <Container>
              <AnimatedSection>
                <h2 className="mb-4 text-center section-title">Contact</h2>
                <Row className="justify-content-center">
                  <Col md={8} lg={6}>
                    <Form action="https://formspree.io/f/yourFormId" method="POST">
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" name="name" required />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" name="email" required />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Your message" name="message" required />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Send
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </AnimatedSection>
            </Container>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-3 text-center">
          <Container>
            <p>&copy; {new Date().getFullYear()} Emmanuel aRelic Mukumbwa. All rights reserved.</p>
            <div className="social-links">
              <a href="https://web.facebook.com/emmanuel.alingo/?viewas=100000686899395" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} color="white" />
              </a>
              <a href="https://github.com/Emmanuel-Mukumbwa" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} color="white" />
              </a>
              {/*<a href="https://instagram.com/relicemmanuel" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} color="white" />
              </a>*/}
            </div>
            <p className="mt-3">Let's build something amazing together!</p>
          </Container>
        </footer>
      </motion.div>
    </HelmetProvider>
  );
}

export default App;