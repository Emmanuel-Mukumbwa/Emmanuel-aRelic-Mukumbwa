// src/components/MainNavbar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaBars } from 'react-icons/fa';
import './MainNavbar.css';

export default function MainNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // control expanded state so we can close the collapse programmatically
  const [expanded, setExpanded] = useState(false);

  // Close the navbar when the route changes (covers browser nav and programmatic navigate)
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <Navbar
      expanded={expanded}
      onToggle={(next) => setExpanded(next)}
      expand="lg"
      variant="dark"
      className="navbar-custom"
      sticky="top"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand" aria-label="aRelic home">
          <span className="brand-name">aRelic</span>
        </Navbar.Brand>

        {/* Toggle: hamburger icon */}
        <Navbar.Toggle aria-controls="main-nav" className="custom-toggler" title="Toggle navigation">
          <FaBars size={20} aria-hidden="true" />
          <span className="visually-hidden">Toggle navigation</span>
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" onClick={() => setExpanded(false)}>
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-2">
            <div className="social-icons d-none d-md-flex" aria-hidden="false">
              <a
                href="https://github.com/Emmanuel-Mukumbwa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://github.com/Emmanuel-Mukumbwa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/emmanuel-mukumbwa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>

            <Button
              variant="outline-light"
              size="sm"
              className="me-2"
              onClick={() => {
                setExpanded(false);
                navigate('/contact?subject=Request%20a%20quote');
              }}
              aria-label="Request a quote"
              title="Request a quote"
            >
              Request Quote
            </Button>

            {/* navigate to resume page (preview + download offered there) */}
            <Button
              variant="success"
              size="sm"
              onClick={() => {
                setExpanded(false);
                navigate('/resume');
              }}
              aria-label="View CV"
              title="View CV"
            >
              View CV
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 