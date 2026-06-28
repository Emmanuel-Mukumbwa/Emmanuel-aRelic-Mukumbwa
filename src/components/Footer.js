import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row className="align-items-start text-center text-md-start g-4">
          {/* Brand */}
          <Col md={3} className="mb-3 mb-md-0">
            <h5 className="mb-0">aRelic</h5>
            <small className="text-white-50">ICT Professional & Developer</small>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="mb-3 mb-md-0">
            <h6 className="mb-2">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="/projects" className="footer-link">Projects</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
              <li><a href="/quotes" className="footer-link">Pricing</a></li>
            </ul>
          </Col>

          {/* Social */}
          <Col md={3} className="mb-3 mb-md-0">
            <h6 className="mb-2">Connect</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://github.com/Emmanuel-Mukumbwa" target="_blank" rel="noopener noreferrer" className="social-link-footer" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/emmanuel-mukumbwa" target="_blank" rel="noopener noreferrer" className="social-link-footer" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </Col>

          {/* CTA */}
          <Col md={3} className="text-md-end">
            <p className="small text-white-50 mb-2">
              Need a system, app, or network setup?
            </p>
            <Button size="sm" variant="success" href="/contact">
              Start a Project
            </Button>
            <div className="mt-3">
              <button
                onClick={scrollToTop}
                className="btn btn-link text-white-50 text-decoration-none p-0 hover-text-success transition"
                style={{ fontSize: '0.9rem' }}
              >
                Back to top ↑
              </button>
            </div>
          </Col>
        </Row>

        <Row className="mt-4 pt-3 border-top border-white-10">
          <Col className="text-center">
            <p className="small text-white-50 mb-0">
              &copy; {new Date().getFullYear()} aRelic. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .footer-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #198754;
        }
        .social-link-footer {
          color: rgba(255, 255, 255, 0.6);
          transition: color 0.2s ease;
        }
        .social-link-footer:hover {
          color: #198754;
        }
        .hover-text-success:hover {
          color: #198754 !important;
        }
        .transition {
          transition: color 0.2s ease;
        }
        .border-white-10 {
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>
    </footer>
  );
}