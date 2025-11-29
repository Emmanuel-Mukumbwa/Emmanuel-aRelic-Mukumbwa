// src/pages/Resume.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Button, Badge, ListGroup } from 'react-bootstrap';

export default function Resume() {
  const downloadPath = '/merged-resume.html'; // if you later generate a PDF, update this path
  const downloadName = 'Emmanuel_Mukumbwa_Resume.html';

  return (
    <>
      <Helmet>
        <title>Emmanuel (aRelic) Mukumbwa — Resume</title>
        <meta name="description" content="Resume — Emmanuel (aRelic) Mukumbwa. ICT professional: systems, networks, communications, attachments, technical reports and training." />
      </Helmet>

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="glass-card shadow-sm">
              <Card.Body>
                {/* Header */}
                <Row className="align-items-center mb-3">
                  <Col md={8}>
                    <h2 className="mb-1">Emmanuel (aRelic) Mukumbwa</h2>
                    <div className="text-muted">ICT Professional — Systems, Networks, Communications & Training</div>

                    <div className="mt-3 d-flex gap-2 flex-wrap">
                      <Badge bg="success">Systems & Networking</Badge>
                      <Badge bg="success">Industrial Attachments</Badge>
                      <Badge bg="success">Technical Reporting</Badge>
                      <Badge bg="success">Training & Mentorship</Badge>
                      <Badge bg="secondary">Integrations & Payment Flows</Badge>
                    </div>
                  </Col>

                  <Col md={4} className="text-md-end mt-3 mt-md-0">
                    <Button
                      variant="success"
                      href={downloadPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                    >
                      Download CV
                    </Button>
                  </Col>
                </Row>

                {/* Contact & Summary */}
                <Row className="mb-4">
                  <Col md={4}>
                    <strong>Location</strong>
                    <div className="text-muted">Lilongwe / Chitipa, Malawi</div>
                  </Col>
                  <Col md={4}>
                    <strong>Phone</strong>
                    <div className="text-muted">+265 99 237 4652</div>
                  </Col>
                  <Col md={4}>
                    <strong>Email</strong>
                    <div className="text-muted">emukumbwa2419@gmail.com</div>
                  </Col>
                </Row>

                <section className="mb-4">
                  <h5>Professional Summary</h5>
                  <p className="text-muted">
                    Practical ICT professional with hands-on experience in systems & network diagnostics, communications site work,
                    technical reporting, and training. I combine field-tested operational skills (industrial attachments and site commissioning)
                    with software integration experience (APIs, payment flows) to deliver solutions that are maintainable in low-resource contexts.
                    Comfortable leading small deployments, preparing clear technical handover documents, and training local teams to operate and maintain systems.
                  </p>
                </section>

                {/* Core competencies */}
                <section className="mb-4">
                  <h5>Core Competencies</h5>
                  <Row>
                    <Col md={6}>
                      <ListGroup variant="flush">
                        <ListGroup.Item>Network fundamentals: LAN/WiFi planning, basic routing & firewall rules</ListGroup.Item>
                        <ListGroup.Item>Systems administration: backup strategies, user & permission management</ListGroup.Item>
                        <ListGroup.Item>Communications installations: diagnostics, commissioning and site checks</ListGroup.Item>
                      </ListGroup>
                    </Col>

                    <Col md={6}>
                      <ListGroup variant="flush">
                        <ListGroup.Item>Technical reporting: attachment/final reports, methodology, recommendations</ListGroup.Item>
                        <ListGroup.Item>Integrations: webhook handling, idempotent endpoints, mobile-money aware flows</ListGroup.Item>
                        <ListGroup.Item>Training & mentorship: curriculum for practical labs, TEVETA alignment</ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </Row>
                </section>

                {/* Technical skills */}
                <section className="mb-4">
                  <h5>Technical Skills</h5>

                  <Row>
                    <Col md={4}>
                      <strong className="d-block mb-2">Networking & Systems</strong>
                      <div className="text-muted small">
                        LAN/WiFi planning, DHCP, basic routing, firewall rules, network troubleshooting, backups, server basics (Linux/Windows).
                      </div>
                    </Col>

                    <Col md={4}>
                      <strong className="d-block mb-2">Software & Integrations</strong>
                      <div className="text-muted small">
                        REST APIs, webhook handling, payment flow integration (mobile money patterns), Node.js basics, Postman.
                      </div>
                    </Col>

                    <Col md={4}>
                      <strong className="d-block mb-2">Tools & Practices</strong>
                      <div className="text-muted small">
                        Git, documentation & handover, testing basics, site checklists, monitoring basics, report-writing.
                      </div>
                    </Col>
                  </Row>
                </section>

                {/* Experience */}
                <section className="mb-4">
                  <h5>Professional Experience</h5>

                  <div className="mb-3">
                    <strong>ICT Instructor</strong>
                    <div className="text-muted small">Paradox Technical College — Chitipa</div>
                    <div className="text-muted mb-2">Oct 2022 – Oct 2023</div>
                    <ul>
                      <li>Delivered practical labs across foundational computing and communications topics, focusing on hands-on outcomes.</li>
                      <li>Prepared TEVETA-aligned lesson plans, practical assessments and supervised student projects and attachments.</li>
                      <li>Mentored students in building and documenting small ICT systems and simple web integrations.</li>
                    </ul>
                  </div>

                  <div className="mb-3">
                    <strong>Industrial Attachment / Final-Year Attachment</strong>
                    <div className="text-muted small">Tee Components & Communications — Industry Supervisor: Mr Hillary Namakhwa</div>
                    <div className="text-muted mb-2">(Attachment period — final year)</div>
                    <ul>
                      <li>Undertook practical diagnostics, system checks and communications commissioning tasks under supervision.</li>
                      <li>Produced the final attachment report documenting methods, test results and technical recommendations validated by the supervisor.</li>
                      <li>Skills exercised: cabling best-practices, device commissioning, site checks, troubleshooting and formal technical reporting.</li>
                    </ul>
                  </div>

                  <div className="mb-3">
                    <strong>Freelance / Project Work</strong>
                    <div className="text-muted small">Various small businesses and NGOs (GoodHope Ministries, Local e-commerce — PayChangu integration)</div>
                    <ul>
                      <li>Implemented system integrations and small deployments: responsive websites, admin dashboards and payment gateway integration for local merchants.</li>
                      <li>Assisted with sandbox/testing, webhook handling and monitoring after go-live to ensure stable payment flows.</li>
                    </ul>
                  </div>
                </section>

                {/* Projects */}
                <section className="mb-4">
                  <h5>Selected Projects</h5>

                  <div className="mb-2">
                    <strong>CampusTalent — Final-Year Capstone</strong>
                    <div className="text-muted small">Full-stack gig marketplace: React, Bootstrap, Node.js, MySQL — recruiter verification, escrow-like flows, student portfolios.</div>
                    <div className="mt-1"><a href="https://github.com/Emmanuel-Mukumbwa/campus-talent" target="_blank" rel="noreferrer">GitHub — campus-talent</a></div>
                  </div>

                  <div className="mb-2">
                    <strong>PayChangu Payment Integration (local merchant)</strong>
                    <div className="text-muted small">Integrated local payment gateway: sandbox testing, webhook handlers, monitoring and go-live support for mobile-money and instant bank transfers.</div>
                  </div>

                  <div className="mb-2">
                    <strong>GoodHope Ministries — Website</strong>
                    <div className="text-muted small">Responsive React site for an NGO with CMS-friendly content and basic admin editing flows.</div>
                  </div>
                </section>

                {/* Education & Training */}
                <section className="mb-4">
                  <h5>Education & Professional Development</h5>

                  <Row>
                    <Col md={6}>
                      <strong>BSc — Information & Communication Technology</strong>
                      <div className="text-muted">Mzuzu University (final year)</div>
                    </Col>
                    <Col md={6}>
                      <strong>Advanced Diploma — Communication & Information Systems</strong>
                      <div className="text-muted">MUBAS (2019–2022)</div>
                    </Col>
                  </Row>

                  <div className="mt-2 text-muted small">
                    Additional coursework and practical training in network fundamentals, systems administration and technical reporting.
                  </div>
                </section>

                {/* Final report / Attachments */}
                <section className="mb-4">
                  <h5>Industrial Attachment & Final Report</h5>
                  <p className="text-muted">
                    The industrial attachment at Tee Components & Communications included site-level diagnostics, communications checks and
                    practical commissioning activities. The final report documents test procedures, equipment lists, measured results and practical recommendations.
                    Copies of the final report and detailed attachments are available on request.
                  </p>
                </section>

                {/* References (full details included in this resume) */}
                <section className="mb-4">
                  <h5>References</h5>
                  <ListGroup>
                    <ListGroup.Item>
                      <strong>Mr Hillary Namakhwa</strong><br />
                      Industry Supervisor — Tee Components & Communications<br />
                      Phone: +265 882 753 205
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <strong>Mr R. Mukumbwa</strong><br />
                      Director — Paradox Technical College<br />
                      Phone: +265 999 733 197
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <strong>Mr Mbauwo Simkoko</strong><br />
                      Supervisor — Chikwawa Prison Station<br />
                      Phone: +265 991 113 930
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <strong>Mr Donald Phiri</strong><br />
                      Research Project Supervisor — Mzuzu University<br />
                      Phone: +265 992 315 319
                    </ListGroup.Item>
                  </ListGroup>
                </section>

                <div className="text-center mt-4">
                  <Button href="/contact" variant="success" className="me-2">Request a Reference Check</Button>
                  <Button href="/projects" variant="outline-secondary">View Case Studies</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
