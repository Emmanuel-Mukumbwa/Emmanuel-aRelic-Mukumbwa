import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{ background: 'rgba(28,28,28,0.9)', color: '#D6EFFF', padding: '2rem 0' }}>
      <Container className="text-center">
        <div style={{ marginBottom: '1rem' }}>
          <a href="https://github.com/Emmanuel-Mukumbwa" target="_blank" rel="noopener noreferrer" style={{ color: '#D6EFFF', marginRight: 16 }}>
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: '#D6EFFF', marginRight: 16 }}>
            <FaLinkedin size={22} />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: '#D6EFFF', marginRight: 16 }}>
            <FaInstagram size={22} />
          </a>
          <a href="https://wa.me/265XXXXXXXXX" target="_blank" rel="noopener noreferrer" style={{ color: '#D6EFFF' }}>
            <FaWhatsapp size={22} />
          </a>
        </div>

        <div>
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} aRelic. All rights reserved.</p>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#BFDFFF' }}>Built with React, Bootstrap & ❤️ — available for hire</p>
        </div>
      </Container>
    </footer>
  );
}
