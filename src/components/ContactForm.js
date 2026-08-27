import React, { useMemo, useState } from 'react';
import {
  Form,
  Button,
  Modal,
  Spinner,
  Row,
  Col,
  Alert,
} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import ReactGA from 'react-ga4';
import {
  FaCheckCircle,
  FaClock,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaPaperPlane,
  FaPhoneAlt,
  FaShieldAlt,
} from 'react-icons/fa';
import './ContactForm.css';

/**
 * Service catalogue used by the contact form.
 *
 * Prices are indicative starting prices / typical ranges.
 * Final pricing depends on scope, parts, location, urgency and complexity.
 */
const serviceGroups = [
  {
    label: 'Web & Digital Solutions',
    options: [
      {
        value: 'Essential Website',
        label: 'Essential Website',
        price: 'From MK120,000',
      },
      {
        value: 'Business Website',
        label: 'Business Website',
        price: 'From MK250,000',
      },
      {
        value: 'Corporate Platform',
        label: 'Corporate / Advanced Web Platform',
        price: 'From MK500,000',
      },
      {
        value: 'E-commerce / Web Application',
        label: 'E-commerce / Custom Web Application',
        price: 'Quote based on scope',
      },
      {
        value: 'API / Payment Integration',
        label: 'API / Payment Integration',
        price: 'Quote based on scope',
      },
    ],
  },
  {
    label: 'Mobile Applications',
    options: [
      {
        value: 'Starter MVP',
        label: 'Starter Mobile MVP (Flutter)',
        price: 'From MK350,000',
      },
      {
        value: 'Business Mobile App',
        label: 'Business Mobile App',
        price: 'From MK650,000',
      },
      {
        value: 'Enterprise Mobile Platform',
        label: 'Enterprise Mobile Platform',
        price: 'From MK1,200,000',
      },
    ],
  },
  {
    label: 'Infrastructure & Networking',
    options: [
      {
        value: 'Network Health Assessment',
        label: 'Network Health Assessment',
        price: 'From MK50,000',
      },
      {
        value: 'Small Office / Campus Network',
        label: 'Small Office / Campus Network Setup',
        price: 'From MK150,000',
      },
      {
        value: 'School / NGO Network',
        label: 'School / NGO Network Deployment',
        price: 'From MK350,000',
      },
      {
        value: 'Enterprise Network Deployment',
        label: 'Enterprise Network Deployment',
        price: 'Quote required',
      },
      {
        value: 'Server Setup / Migration',
        label: 'Server Setup / Migration',
        price: 'From MK200,000',
      },
    ],
  },
  {
    label: 'Computer & Technical Support',
    options: [
      {
        value: 'Computer Diagnosis / Check-up',
        label: 'Computer Diagnosis / Check-up',
        price: 'MK5,000',
      },
      {
        value: 'Windows Installation',
        label: 'Windows Installation',
        price: 'MK8,000',
      },
      {
        value: 'Windows Installation + Drivers',
        label: 'Windows Installation + Drivers',
        price: 'MK12,000',
      },
      {
        value: 'Windows Updates',
        label: 'Windows Updates',
        price: 'MK5,000',
      },
      {
        value: 'Driver Installation / Update',
        label: 'Driver Installation / Update',
        price: 'MK5,000',
      },
      {
        value: 'Microsoft Office Installation',
        label: 'Microsoft Office Installation',
        price: 'MK5,000',
      },
      {
        value: 'Antivirus Installation & Setup',
        label: 'Antivirus Installation & Setup',
        price: 'MK3,000',
      },
      {
        value: 'Virus / Malware Removal',
        label: 'Virus / Malware Removal',
        price: 'MK7,000–10,000',
      },
      {
        value: 'System Optimization',
        label: 'System Optimization',
        price: 'MK5,000',
      },
      {
        value: 'Windows Password Reset',
        label: 'Windows Password Reset',
        price: 'MK5,000–10,000',
      },
      {
        value: 'Windows Repair (No Formatting)',
        label: 'Windows Repair (No Formatting)',
        price: 'MK5,000–10,000',
      },
      {
        value: 'SSD Installation',
        label: 'SSD Installation (Labour)',
        price: 'MK7,000',
      },
      {
        value: 'SSD Installation + Migration',
        label: 'SSD Installation + Windows Migration',
        price: 'MK12,000–15,000',
      },
      {
        value: 'RAM Installation',
        label: 'RAM Installation (Labour)',
        price: 'MK3,000',
      },
      {
        value: 'HDD Installation',
        label: 'HDD Installation (Labour)',
        price: 'MK7,000',
      },
      {
        value: 'Thermal Paste Replacement',
        label: 'Thermal Paste Replacement',
        price: 'MK7,000–10,000',
      },
      {
        value: 'Laptop Internal Cleaning',
        label: 'Laptop Internal Cleaning',
        price: 'MK7,000–10,000',
      },
      {
        value: 'Desktop Internal Cleaning',
        label: 'Desktop Internal Cleaning',
        price: 'MK5,000–8,000',
      },
    ],
  },
  {
    label: 'Computer Repair & Hardware',
    options: [
      {
        value: 'Laptop Screen Replacement Labour',
        label: 'Laptop Screen Replacement (Labour)',
        price: 'MK7,000–15,000',
      },
      {
        value: 'Keyboard Replacement Labour',
        label: 'Keyboard Replacement (Labour)',
        price: 'MK5,000–10,000',
      },
      {
        value: 'Battery Replacement Labour',
        label: 'Battery Replacement (Labour)',
        price: 'MK3,000–5,000',
      },
      {
        value: 'DC Jack Replacement Labour',
        label: 'Charger / DC Jack Replacement (Labour)',
        price: 'MK10,000–20,000',
      },
      {
        value: 'Laptop Hinge Repair',
        label: 'Laptop Hinge Repair',
        price: 'MK8,000–15,000',
      },
      {
        value: 'Motherboard Troubleshooting',
        label: 'Motherboard Troubleshooting',
        price: 'MK15,000–40,000+',
      },
      {
        value: 'Power Issue Diagnosis & Repair',
        label: 'Power Issue Diagnosis & Repair',
        price: 'MK10,000–25,000',
      },
      {
        value: 'Overheating Repair',
        label: 'Overheating Issue Repair',
        price: 'MK8,000–15,000',
      },
      {
        value: 'Wi-Fi / Network Troubleshooting',
        label: 'Wi-Fi / Network Troubleshooting',
        price: 'MK5,000–10,000',
      },
      {
        value: 'Printer Installation & Setup',
        label: 'Printer Installation & Setup',
        price: 'MK5,000–10,000',
      },
      {
        value: 'BIOS / Firmware Update',
        label: 'BIOS / Firmware Update',
        price: 'MK8,000–15,000',
      },
      {
        value: 'BIOS Troubleshooting / Programming',
        label: 'BIOS Troubleshooting / Programming',
        price: 'MK15,000–30,000+',
      },
    ],
  },
  {
    label: 'Data, Backup & Recovery',
    options: [
      {
        value: 'Data Backup up to 50 GB',
        label: 'Data Backup — up to 50 GB',
        price: 'MK5,000',
      },
      {
        value: 'Data Backup 50–150 GB',
        label: 'Data Backup — 50–150 GB',
        price: 'MK8,000',
      },
      {
        value: 'Data Backup 150–500 GB',
        label: 'Data Backup — 150–500 GB',
        price: 'MK12,000',
      },
      {
        value: 'Data Backup 500 GB–1 TB',
        label: 'Data Backup — 500 GB–1 TB',
        price: 'MK15,000',
      },
      {
        value: 'Data Backup over 1 TB',
        label: 'Data Backup — over 1 TB',
        price: 'MK20,000+',
      },
      {
        value: 'Data Transfer to New Computer',
        label: 'Data Transfer to New Computer',
        price: 'MK8,000–20,000',
      },
      {
        value: 'Hard Drive Cloning',
        label: 'Hard Drive Cloning',
        price: 'MK10,000–20,000',
      },
      {
        value: 'Basic Data Recovery',
        label: 'Basic Data Recovery',
        price: 'MK15,000–30,000+',
      },
    ],
  },
  {
    label: 'On-site Services',
    options: [
      {
        value: 'Local On-site Service',
        label: 'On-site Service / Labour',
        price: 'From MK10,000',
      },
      {
        value: 'Local Call-out',
        label: 'Local Call-out',
        price: 'MK5,000–10,000',
      },
      {
        value: 'Outside Service Area',
        label: 'Call-out Outside Service Area',
        price: 'MK10,000+',
      },
    ],
  },
  {
    label: 'Computer Setup Packages',
    options: [
      {
        value: 'Basic Computer Setup',
        label: 'Basic Computer Setup',
        price: 'From MK15,000',
      },
      {
        value: 'Standard Computer Setup',
        label: 'Standard Computer Setup',
        price: 'From MK25,000',
      },
      {
        value: 'Premium Computer Setup',
        label: 'Premium Computer Setup',
        price: 'From MK35,000',
      },
      {
        value: 'Computer Setup + SSD Upgrade',
        label: 'Full Setup + SSD Upgrade',
        price: 'From MK35,000 + SSD',
      },
    ],
  },
  {
    label: 'Cybersecurity',
    options: [
      {
        value: 'Quick Security Scan',
        label: 'Quick Security Scan',
        price: 'From MK50,000',
      },
      {
        value: 'Comprehensive IT Audit',
        label: 'Comprehensive IT Audit',
        price: 'From MK200,000',
      },
    ],
  },
  {
    label: 'Training & Consulting',
    options: [
      {
        value: 'Half-Day Workshop',
        label: 'Half-Day Practical Workshop',
        price: 'MK100,000',
      },
      {
        value: 'Full-Day Advanced Lab',
        label: 'Full-Day Advanced Lab',
        price: 'MK180,000',
      },
      {
        value: 'ICT Strategy & Advisory',
        label: 'ICT Strategy & Advisory',
        price: 'From MK200,000',
      },
    ],
  },
  {
    label: 'Support & Maintenance',
    options: [
      {
        value: 'Starter Support',
        label: 'Starter Support',
        price: 'MK60,000/month',
      },
      {
        value: 'Business Support',
        label: 'Business Support',
        price: 'MK150,000/month',
      },
      {
        value: 'Enterprise SLA',
        label: 'Enterprise SLA',
        price: 'Custom quote',
      },
    ],
  },
];

const budgetOptions = [
  'Below MK10,000',
  'MK10,000 – 25,000',
  'MK25,000 – 50,000',
  'MK50,000 – 150,000',
  'MK150,000 – 350,000',
  'MK350,000 – 750,000',
  'MK750,000+',
  'Not sure — advise me',
];

const timelineOptions = [
  'As soon as possible',
  '1 – 3 days',
  '3 – 7 days',
  '1 – 4 weeks',
  '1 – 3 months',
  'Flexible / no fixed deadline',
];

const heardFromOptions = [
  'Google Search',
  'LinkedIn',
  'Referral / Colleague',
  'YWAM / Campus',
  'Facebook',
  'WhatsApp',
  'Portfolio / Website',
  'Other',
];

function findServiceDetails(serviceValue) {
  for (const group of serviceGroups) {
    const found = group.options.find((option) => option.value === serviceValue);
    if (found) return found;
  }

  return null;
}

export default function ContactForm({
  presetSubject = '',
  inline = false,
  onSuccess = null,
}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    heardFrom: '',
    website: '',
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const CONTACT_TO_EMAIL =
    process.env.REACT_APP_CONTACT_TO_EMAIL || 'emukumbwa2419@gmail.com';

  const CALENDLY_URL =
    process.env.REACT_APP_CALENDLY_URL || 'https://calendly.com/your-calendly';

  const selectedService = useMemo(
    () => findServiceDetails(form.projectType),
    [form.projectType]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) {
      setError('');
    }
  };

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const sendViaServer = async () => {
    const payload = {
      name: form.name,
      email: form.email,
      projectType: form.projectType,
      budget: form.budget,
      timeline: form.timeline,
      message: form.message,
      heardFrom: form.heardFrom,
      subject: presetSubject || 'Website contact',
      to_email: CONTACT_TO_EMAIL,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const txt = await res.text().catch(() => null);
      throw new Error(txt || `Server responded ${res.status}`);
    }

    return true;
  };

  const sendViaEmailJS = async () => {
    const serviceId =
      process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_9ctclhp';

    const templateId =
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_y2epmaa';

    const publicKey =
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '-sFhXXDWE9DhA_mQB';

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      to_email: CONTACT_TO_EMAIL,
      subject: presetSubject || 'Website contact',
      project_type: form.projectType,
      budget: form.budget,
      timeline: form.timeline,
      message: form.message,
      heard_from: form.heardFrom,
    };

    return emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
  };

  const send = async (e) => {
    e?.preventDefault();
    setError('');

    // Honeypot
    if (form.website) {
      console.warn('Spam bot detected (honeypot).');
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email address and message.');
      return;
    }

    if (!validateEmail(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    if (form.message.trim().length < 10) {
      setError('Please give me a little more detail about what you need.');
      return;
    }

    setLoading(true);

    try {
      // Keep the original delivery strategy:
      // server first, EmailJS fallback.
      try {
        await sendViaServer();
      } catch (serverErr) {
        console.warn(
          'Server POST failed; falling back to EmailJS:',
          serverErr
        );

        await sendViaEmailJS();
      }

      try {
        ReactGA.event({
          category: 'Contact',
          action: 'Submit',
          label: presetSubject || form.projectType || 'General',
        });
      } catch (gaError) {
        console.warn('ReactGA event failed', gaError);
      }

      setShowSuccess(true);

      setForm({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        heardFrom: '',
        website: '',
      });

      if (typeof onSuccess === 'function') {
        onSuccess();
      }
    } catch (err) {
      console.error('Contact send error', err);
      setError(
        'Could not send your message right now. Please try again or use the booking option below.'
      );
    } finally {
      setLoading(false);
    }
  };

  const formContent = (
    <Form onSubmit={send} className="contact-form" noValidate aria-label="Contact form">
      <div className="contact-form-intro mb-4">
        <div className="contact-form-intro-icon">
          <FaPaperPlane />
        </div>

        <div>
          <h3 className="contact-form-title">Tell me what you need</h3>
          <p className="contact-form-subtitle mb-0">
            Give me a few details and I’ll help you work out the best approach,
            scope and budget.
          </p>
        </div>
      </div>

      <Row className="g-3">
        <Col md={6}>
          <Form.Group controlId="cfName">
            <Form.Label>
              Name <span className="required-mark">*</span>
            </Form.Label>

            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={loading}
              autoComplete="name"
              placeholder="Your full name"
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="cfEmail">
            <Form.Label>
              Email <span className="required-mark">*</span>
            </Form.Label>

            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={loading}
              autoComplete="email"
              placeholder="you@example.com"
            />
          </Form.Group>
        </Col>

        <Col xs={12}>
          <Form.Group controlId="cfProjectType">
            <Form.Label>
              What can I help you with?
            </Form.Label>

            <Form.Select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              disabled={loading}
            >
              <option value="">Select a service or project type</option>

              {serviceGroups.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label} — {option.price}
                    </option>
                  ))}
                </optgroup>
              ))}
            </Form.Select>

            <Form.Text className="form-help">
              Choose the closest option. You can explain the exact requirement
              in the message below.
            </Form.Text>

            {selectedService && (
              <div className="selected-service-note">
                <FaInfoCircle />
                <span>
                  Indicative price: <strong>{selectedService.price}</strong>
                </span>
              </div>
            )}
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="cfBudget">
            <Form.Label>Estimated budget</Form.Label>

            <Form.Select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              disabled={loading}
            >
              <option value="">Select your budget range</option>

              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="cfTimeline">
            <Form.Label>Preferred timeline</Form.Label>

            <Form.Select
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              disabled={loading}
            >
              <option value="">When do you need it?</option>

              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="cfHeardFrom">
            <Form.Label>How did you hear about me?</Form.Label>

            <Form.Select
              name="heardFrom"
              value={form.heardFrom}
              onChange={handleChange}
              disabled={loading}
            >
              <option value="">Select an option</option>

              {heardFromOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col xs={12}>
          <Form.Group controlId="cfMessage">
            <Form.Label>
              Project details / message <span className="required-mark">*</span>
            </Form.Label>

            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="Tell me what you need, what you're currently using, the problem you're facing, or what you'd like to build..."
            />

            <div className="form-message-meta">
              <span>
                A clear description helps me give you a more useful response.
              </span>
              <span>{form.message.length}/2000</span>
            </div>
          </Form.Group>
        </Col>
      </Row>

      {/* Honeypot */}
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="cfWebsite">Leave this field empty</label>
        <input
          id="cfWebsite"
          type="text"
          name="website"
          value={form.website}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      {error && (
        <Alert
          variant="danger"
          className="contact-alert mt-3 mb-0"
          role="alert"
        >
          {error}
        </Alert>
      )}

      <div className="contact-actions mt-4">
        <Button
          type="submit"
          disabled={loading}
          variant="success"
          className="contact-primary-btn"
          aria-label="Send message"
        >
          {loading ? (
            <>
              <Spinner animation="border" size="sm" />
              <span>Sending…</span>
            </>
          ) : (
            <>
              <FaPaperPlane />
              <span>Send Message</span>
            </>
          )}
        </Button>

        <Button
          variant="outline-secondary"
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-secondary-btn"
        >
          <FaClock />
          <span>Book a 15m Call</span>
          <FaExternalLinkAlt className="external-icon" />
        </Button>

        <Button
          variant="outline-success"
          href="/quotes"
          className="contact-secondary-btn"
        >
          <FaCheckCircle />
          <span>View Pricing</span>
        </Button>
      </div>

      <div className="contact-trust-row mt-4">
        <div>
          <FaShieldAlt />
          <span>Your information is used only to respond to your enquiry.</span>
        </div>

        <div>
          <FaPhoneAlt />
          <span>Remote & on-site support available.</span>
        </div>
      </div>
    </Form>
  );

  const successModal = (
    <Modal
      show={showSuccess}
      onHide={() => setShowSuccess(false)}
      centered
      className="contact-success-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <FaCheckCircle className="text-success me-2" />
          Thanks — message sent
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="mb-3">
          I received your enquiry and will reply within 24–48 hours.
        </p>

        <div className="success-next-step">
          <strong>Need to discuss it sooner?</strong>
          <p className="small text-muted mb-0">
            You can book a short consultation using the button below.
          </p>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="outline-secondary"
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a short call
        </Button>

        <Button
          variant="success"
          onClick={() => setShowSuccess(false)}
        >
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return inline ? (
    <>
      {formContent}
      {successModal}
    </>
  ) : (
    <>
      <div className="contact-card-body">{formContent}</div>
      {successModal}
    </>
  );
}
