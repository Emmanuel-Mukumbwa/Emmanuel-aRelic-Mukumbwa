import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="mb-0">aRelic</h5>
            <small className="text-white-50">ICT Professional & Developer</small>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://github.com/Emmanuel-Mukumbwa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 hover:text-success transition"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com/in/emmanuel-mukumbwa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 hover:text-success transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-md-end">
              <button
                onClick={scrollToTop}
                className="btn btn-link text-white-50 text-decoration-none p-0 hover:text-success transition"
                style={{ fontSize: '0.9rem' }}
              >
                Back to top ↑
              </button>
              <p className="small text-white-50 mt-2 mb-0">
                &copy; {new Date().getFullYear()} aRelic. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .hover\\:text-success:hover {
          color: #198754 !important;
        }
        .transition {
          transition: color 0.2s ease;
        }
      `}</style>
    </footer>
  );
}