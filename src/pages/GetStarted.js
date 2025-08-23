// src/pages/GetStarted.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function GetStarted() {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2>Get Started</h2>
              <p className="text-muted">Choose your path — Student or Recruiter.</p>
              <div className="d-flex gap-2">
                <Button variant="success" onClick={() => navigate('/register')}>Sign Up</Button>
                <Button variant="outline-secondary" onClick={() => navigate('/login')}>Log In</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
