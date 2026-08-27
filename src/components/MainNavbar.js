// src/components/MainNavbar.js
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaBars } from 'react-icons/fa';
import './MainNavbar.css';

export default function MainNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll to top immediately when the route changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close navbar when route changes (ensures mobile menu closes after navigation)
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  // Scroll listener for premium shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setExpanded(false);

  return (
    <Navbar
      expanded={expanded}
      onToggle={(next) => setExpanded(next)}
      expand="lg"
      variant="dark"
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
      sticky="top"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand" onClick={handleLinkClick}>
          <span className="brand-name">aRelic</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" className="custom-toggler">
          <FaBars size={20} aria-hidden="true" />
          <span className="visually-hidden">Toggle navigation</span>
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end onClick={handleLinkClick} className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleLinkClick} className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" onClick={handleLinkClick} className={({ isActive }) => (isActive ? 'active' : '')}>
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={handleLinkClick} className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </Nav.Link>
            {/* Pricing link with subtle green dot indicator */}
            <Nav.Link
              as={NavLink}
              to="/quotes"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? 'active pricing-link' : 'pricing-link')}
            >
              Pricing <span className="pricing-dot">●</span>
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-2">
            <div className="social-icons d-none d-md-flex">
              <a href="https://github.com/Emmanuel-Mukumbwa" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/emmanuel-mukumbwa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                <FaLinkedin />
              </a>
            </div>

            {/* PRIMARY CTA – Request Quote (green) */}
            <Button
              variant="success"
              size="sm"
              className="quote-btn"
              onClick={() => {
                handleLinkClick();
                navigate('/contact?subject=Request%20a%20quote');
              }}
            >
              Request Quote
            </Button>

            {/* SECONDARY CTA – View CV (link‑style for subtle hierarchy) */}
            <Button
              variant="link"
              size="sm"
              className="cv-btn text-white text-decoration-none"
              onClick={() => {
                handleLinkClick();
                navigate('/resume');
              }}
            >
              View CV
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
