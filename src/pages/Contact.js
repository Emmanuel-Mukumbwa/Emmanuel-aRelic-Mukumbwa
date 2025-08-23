// src/pages/Contact.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2>Contact</h2>
              <p className="text-muted">Tell me about your project — I respond within 24–48 hours.</p>
              <ContactForm inline />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
