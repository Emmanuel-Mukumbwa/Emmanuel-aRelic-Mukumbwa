//scr/components/MainNavbar.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaCog } from 'react-icons/fa';
import './MainNavbar.css';

export default function MainNavbar() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" variant="dark" className="navbar-custom" sticky="top" collapseOnSelect>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand" aria-label="aRelic home">
          <span className="brand-name">aRelic</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" className="custom-toggler" title="Toggle navigation">
          <FaCog size={20} color="#D6EFFF" />
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
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
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/265XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="social-link"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>

            <Button
              variant="outline-light"
              size="sm"
              className="me-2"
              onClick={() => navigate('/contact?subject=Request%20a%20quote')}
              aria-label="Request a quote"
              title="Request a quote"
            >
              Request Quote
            </Button>

            {/* navigate to resume page (preview + download offered there) */}
            <Button
              variant="success"
              size="sm"
              onClick={() => navigate('/resume')}
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
