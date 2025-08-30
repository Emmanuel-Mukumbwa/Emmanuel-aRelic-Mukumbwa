//src/pages/Resume.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

export default function Resume() {
  // NOTE: Put a resume PDF at /public/resume.pdf to enable download / embed
  const pdfPath = '/resume.pdf';
  const downloadName = 'Emmanuel_Mukumbwa_CV.pdf';

  return (
    <>
      <Helmet>
        <title>Emmanuel Mukumbwa — CV</title>
        <meta name="description" content="Emmanuel (aRelic) Mukumbwa — Full-stack dev. View and download CV." />
      </Helmet>

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="glass-card shadow-sm">
              <Card.Body>
                <Row className="align-items-center mb-3">
                  <Col md={8}>
                    <h2 className="mb-1">Emmanuel (aRelic) Mukumbwa</h2>
                    <div className="text-muted">Web Developer & ICT Educator — Lilongwe, Malawi</div>
                    <div className="mt-2">
                      <Badge bg="success" className="me-2">React</Badge>
                      <Badge bg="success" className="me-2">Node.js</Badge>
                      <Badge bg="success" className="me-2">MySQL</Badge>
                    </div>
                  </Col>
                  <Col md={4} className="text-md-end mt-3 mt-md-0">
                    <Button
                      variant="success"
                      href={pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                    >
                      View PDF
                    </Button>
                    <Button
                      variant="outline-success"
                      href={pdfPath}
                      download={downloadName}
                    >
                      Download CV
                    </Button>
                  </Col>
                </Row>

                {/* Quick contact row */}
                <Row className="mb-4">
                  <Col md={4}>
                    <strong>Location</strong>
                    <div className="text-muted">Lilongwe, Malawi</div>
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

                {/* Professional Summary */}
                <section className="mb-3">
                  <h5>Professional Summary</h5>
                  <p className="text-muted">
                    Resourceful Full-Stack Developer and ICT instructor with professional experience 
                    designing end-to-end web applications. Expert in React, Node.js, and modern JavaScript tooling; 
                    focused on building maintainable, tested, responsive web apps and clear handover documentation.
                  </p>
                </section>

                {/* Skills */}
                <section className="mb-3">
                  <h5>Technical Skills</h5>
                  <div className="d-flex flex-wrap gap-2">
                    <Badge bg="secondary">React</Badge>
                    <Badge bg="secondary">Bootstrap</Badge>
                    <Badge bg="secondary">JavaScript</Badge>
                    <Badge bg="secondary">HTML5</Badge>
                    <Badge bg="secondary">CSS3</Badge>
                    <Badge bg="secondary">Node.js</Badge>
                    <Badge bg="secondary">MySQL</Badge>
                    <Badge bg="secondary">Postman</Badge>
                    <Badge bg="secondary">Git</Badge>
                  </div>
                </section>

                {/* Experience & Education (shortened for page) */}
                <Row>
                  <Col md={6} className="mb-3">
                    <h6>Experience</h6>
                    <div>
                      <strong>ICT Instructor</strong>
                      <div className="text-muted">Paradox Technical College — Chitipa, Malawi</div>
                      <div className="text-muted small">Oct 2022 – Oct 2023</div>
                      <ul>
                        <li>Designed and delivered practical labs and lectures for foundational ICT topics.</li>
                        <li>Prepared lesson plans mapped to TEVETA Level 1 competencies.</li>
                      </ul>
                    </div>
                  </Col>

                  <Col md={6} className="mb-3">
                    <h6>Education</h6>
                    <div>
                      <strong>BSc — Information & Communication Technology</strong>
                      <div className="text-muted">Mzuzu University (final year)</div>
                    </div>
                    <div className="mt-2">
                      <strong>Advanced Diploma — Communication & Information Systems</strong>
                      <div className="text-muted">MUBAS (2019–2022)</div>
                    </div>
                  </Col>
                </Row>

                {/* Selected projects summary */}
                <section className="mb-3">
                  <h5>Selected Projects</h5>

                  <div className="mb-2">
                    <strong>CampusTalent — Final-Year Capstone</strong>
                    <div className="text-muted small">Full-stack gig marketplace: React, Bootstrap, Node.js, MySQL. Features: recruiter verification, payment flows, student portfolios.</div>
                    <div className="mt-1"><a href="https://github.com/Emmanuel-Mukumbwa/campus-talent" target="_blank" rel="noreferrer">GitHub — campus-talent</a></div>
                  </div>

                  <div className="mb-2">
                    <strong>GoodHope Ministries Website</strong>
                    <div className="text-muted small">Responsive React site for a nonprofit. Hosted on Vercel.</div>
                    <div className="mt-1"><a href="https://goodhopeminstries.vercel.app/" target="_blank" rel="noreferrer">Live demo</a></div>
                  </div>

                  <div className="mb-2">
                    <strong>Password Generator App</strong>
                    <div className="text-muted small">React-based tool with customizable strength and options.</div>
                    <div className="mt-1"><a href="https://password-generator-app-lime.vercel.app/" target="_blank" rel="noreferrer">Live demo</a></div>
                  </div>
                </section>

                {/* Footer CTA */}
                <div className="text-center mt-4">
                  <Button href="/contact" variant="success" className="me-2">Request a Quote</Button>
                  <Button href="/projects" variant="outline-secondary">View Case Studies</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Inline PDF viewer (responsive) */}
        <Row className="justify-content-center mt-4">
          <Col lg={10}>
            <Card className="shadow-sm">
              <Card.Body>
                <h6>PDF Preview</h6>
                <div style={{ minHeight: 400 }}>
                  {/* Using object to show embedded PDF (browser support varies) */}
                  <object
                    data={pdfPath}
                    type="application/pdf"
                    width="100%"
                    height="600"
                    aria-label="Resume PDF"
                  >
                    <p className="text-muted">
                      Your browser does not support embedded PDFs. You can{' '}
                      <a href={pdfPath} download={downloadName}>download the CV here</a>.
                    </p>
                  </object>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
