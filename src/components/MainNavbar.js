import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaBars } from 'react-icons/fa';
import './MainNavbar.css';

export default function MainNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  // Close navbar when route changes (ensures mobile menu closes after navigation)
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const handleLinkClick = () => setExpanded(false);

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
        <Navbar.Brand as={NavLink} to="/" className="brand" onClick={handleLinkClick}>
          <span className="brand-name">aRelic</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" className="custom-toggler">
          <FaBars size={20} aria-hidden="true" />
          <span className="visually-hidden">Toggle navigation</span>
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/projects"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-2">
            <div className="social-icons d-none d-md-flex">
              <a
                href="https://github.com/Emmanuel-Mukumbwa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/emmanuel-mukumbwa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <FaLinkedin />
              </a>
            </div>

            <Button
              variant="outline-light"
              size="sm"
              className="quote-btn"
              onClick={() => {
                handleLinkClick();
                navigate('/contact?subject=Request%20a%20quote');
              }}
            >
              Request Quote
            </Button>

            <Button
              variant="success"
              size="sm"
              className="cv-btn"
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