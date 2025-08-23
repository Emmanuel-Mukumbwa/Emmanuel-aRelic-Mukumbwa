import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Emmanuel (aRelic) Mukumbwa</title>
        <meta name="description" content="About Emmanuel (aRelic) Mukumbwa — Full-stack React + Node developer and ICT educator." />
      </Helmet>

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="glass-card shadow-sm">
              <Card.Body>
                <Row className="align-items-center mb-3">
                  <Col md={8}>
                    <h1 className="mb-1">Emmanuel (aRelic) Mukumbwa</h1>
                    <div className="text-muted">Intermediate Full-Stack Developer — React · Node.js · MySQL</div>
                    <div className="mt-2 d-flex gap-2">
                      <Badge bg="success">5 projects</Badge>
                      <Badge bg="success">3 paying clients</Badge>
                      <Badge bg="success">99% on-time delivery</Badge>
                    </div>
                  </Col>
                  <Col md={4} className="text-md-end mt-3 mt-md-0">
                    <Button variant="success" className="me-2" href="/contact?subject=Hiring%20Emmanuel">
                      Hire / Request Quote
                    </Button>
                    <Button variant="outline-success" href="/resume">
                      View CV
                    </Button>
                  </Col>
                </Row>

                <section className="mb-4">
                  <h4>Short bio</h4>
                  <p className="text-muted">
                    I'm Emmanuel (aRelic), an intermediate full-stack developer focused on building reliable React front-ends and secure Node.js backends. I help startups and student founders ship production-ready features fast, with documentation and a short support window after delivery.
                  </p>
                </section>

                <section className="mb-4">
                  <h5>What I do</h5>
                  <ul>
                    <li>Build full-stack web apps (React, Node.js, Express, MySQL).</li>
                    <li>Integrate payment providers and webhook workflows (e.g., PayChangu-like flows).</li>
                    <li>Create admin dashboards and CRUD APIs for small teams.</li>
                    <li>Ship maintainable code with tests, CI-friendly setup and short docs.</li>
                  </ul>
                </section>

                <section className="mb-4">
                  <h5>Technical skills</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {['React','Node.js','JavaScript','HTML5','CSS3','Bootstrap','MySQL','Git','Postman'].map(s => (
                      <Badge bg="secondary" key={s}>{s}</Badge>
                    ))}
                  </div>
                </section>

                <section className="mb-4">
                  <h5>Experience</h5>
                  <div>
                    <strong>ICT Instructor</strong> — Paradox Technical College, Chitipa (Oct 2022 – Oct 2023)
                    <p className="text-muted small mb-0">
                      Created practical lessons and labs on computing fundamentals, file systems, and basic troubleshooting; mapped outcomes to TEVETA competencies.
                    </p>
                  </div>
                </section>

                <section>
                  <h5>Selected work</h5>
                  <ul>
                    <li>
                      <strong>CampusTalent</strong> — Full-stack capstone (React, Node, MySQL). Recruiter verification, payment/escrow, portfolios.
                    </li>
                    <li>
                      <strong>GoodHope Ministries</strong> — Responsive React website (deployed on Vercel).
                    </li>
                    <li>
                      <strong>Password Generator App</strong> — React utility; deployed demo.
                    </li>
                  </ul>
                </section>

                <div className="text-center mt-4">
                  <Button href="/projects" variant="outline-success" className="me-2">View Case Studies</Button>
                  <Button href="/contact" variant="success">Get in touch</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
