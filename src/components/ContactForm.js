// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { Form, Button, Modal, Spinner, Row, Col, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import ReactGA from 'react-ga4';

export default function ContactForm({
  presetSubject = '',
  inline = false,          // if true, render inline; otherwise return a fragment (caller wraps in card/column)
  onSuccess = null
}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    website: '' // honeypot
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const CONTACT_TO_EMAIL = process.env.REACT_APP_CONTACT_TO_EMAIL || 'emukumbwa2419@gmail.com';

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const sendViaServer = async () => {
    // optional server-side endpoint (recommended). If not implemented, this call will fail and we fallback to EmailJS.
    const payload = {
      name: form.name,
      email: form.email,
      projectType: form.projectType,
      budget: form.budget,
      timeline: form.timeline,
      message: form.message,
      subject: presetSubject || 'Website contact',
      to_email: CONTACT_TO_EMAIL
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const txt = await res.text().catch(() => null);
      throw new Error(txt || `Server responded ${res.status}`);
    }
    return true;
  };

  const sendViaEmailJS = async () => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_9ctclhp';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_y2epmaa';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '-sFhXXDWE9DhA_mQB';

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      to_email: CONTACT_TO_EMAIL,
      subject: presetSubject || 'Website contact',
      project_type: form.projectType,
      budget: form.budget,
      timeline: form.timeline,
      message: form.message,
    };

    return emailjs.send(serviceId, templateId, templateParams, publicKey);
  };

  const send = async (e) => {
    e?.preventDefault();
    setError('');

    // honeypot
    if (form.website) {
      console.warn('Spam bot detected (honeypot).');
      return;
    }

    if (!form.name || !form.email || !form.message) {
      setError('Please fill name, email and message.');
      return;
    }
    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      // try server endpoint first (if you add it). Otherwise fallback to EmailJS.
      try {
        await sendViaServer();
      } catch (serverErr) {
        console.warn('Server POST failed; falling back to EmailJS:', serverErr);
        await sendViaEmailJS();
      }

      // GA event (if configured)
      try { ReactGA.event({ category: 'Contact', action: 'Submit', label: presetSubject || 'General' }); } catch (e) {}

      setShowSuccess(true);
      setForm({ name: '', email: '', projectType: '', budget: '', timeline: '', message: '', website: '' });
      onSuccess && onSuccess();
    } catch (err) {
      console.error('Contact send error', err);
      setError('Could not send message. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  const formContent = (
    <Form onSubmit={send} aria-label="Contact form">
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="cfName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" value={form.name} onChange={handleChange} required disabled={loading} />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="cfEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required disabled={loading} />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Project type</Form.Label>
            <Form.Select name="projectType" value={form.projectType} onChange={handleChange} disabled={loading}>
              <option value="">Select</option>
              <option>Website / Landing</option>
              <option>API / Integration</option>
              <option>Admin Dashboard</option>
              <option>UX Audit</option>
              <option>Other</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Budget</Form.Label>
            <Form.Select name="budget" value={form.budget} onChange={handleChange} disabled={loading}>
              <option value="">Select</option>
              <option>MWK 25,000 - 75,000</option>
              <option>MWK 100,000 - 300,000</option>
              <option>MWK 350,000+</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Timeline</Form.Label>
            <Form.Select name="timeline" value={form.timeline} onChange={handleChange} disabled={loading}>
              <option value="">Select</option>
              <option>1 - 3 days</option>
              <option>3 - 7 days</option>
              <option>1 - 4 weeks</option>
              <option>1+ months</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="cfMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4} name="message" value={form.message} onChange={handleChange} required disabled={loading} />
      </Form.Group>

      {/* Honeypot */}
      <div style={{ display: 'none' }}>
        <label>Leave this field empty</label>
        <input name="website" value={form.website} onChange={handleChange} />
      </div>

      {error && <Alert variant="danger" className="mb-2">{error}</Alert>}

      <div className="d-flex align-items-center">
        <Button type="submit" disabled={loading} variant="success" aria-label="Send message">
          {loading ? <><Spinner animation="border" size="sm" /> <span className="ms-2">Sending…</span></> : 'Send Message'}
        </Button>

        <Button
          variant="outline-secondary"
          className="ms-2"
          href="https://calendly.com/your-calendly"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a 15m Call
        </Button>
      </div>
    </Form>
  );

  return inline ? (
    <>
      {formContent}
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)} centered>
        <Modal.Header closeButton><Modal.Title>Thanks — message sent</Modal.Title></Modal.Header>
        <Modal.Body>
          I received your message and will reply within 24–48 hours. If you'd like to speed things up, <a href="https://calendly.com/your-calendly" target="_blank" rel="noreferrer">book a short call</a>.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSuccess(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  ) : (
    <>
      <div className="contact-card-body">{formContent}</div>
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)} centered>
        <Modal.Header closeButton><Modal.Title>Thanks — message sent</Modal.Title></Modal.Header>
        <Modal.Body>
          I received your message and will reply within 24–48 hours. If you'd like to speed things up, <a href="https://calendly.com/your-calendly" target="_blank" rel="noreferrer">book a short call</a>.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSuccess(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
