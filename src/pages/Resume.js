// src/pages/Resume.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

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
                    <h2 className="mb-1">EMMANUEL MUKUMBWA</h2>
                    <div className="fw-bold mb-1">Network Administrator / Web Developer / ICT Specialist</div>

                    <div className="mt-3 text-muted small">
                      Chitipa, Malawi &nbsp;|&nbsp; +265 99 237 4652 &nbsp;|&nbsp; +265 882 470 666
                      <br />
                      Email: <a href="mailto:emukumbwa2419@gmail.com">emukumbwa2419@gmail.com</a>
                      <br />
                      Portfolio: <a href="https://emmanuel-a-relic-mukumbwa.vercel.app" target="_blank" rel="noreferrer">https://emmanuel-a-relic-mukumbwa.vercel.app</a>
                      <br />
                      GitHub: <a href="https://github.com/Emmanuel-Mukumbwa" target="_blank" rel="noreferrer">github.com/Emmanuel-Mukumbwa</a>
                      <br />
                      LinkedIn: <a href="https://linkedin.com/in/emmanuel-mukumbwa" target="_blank" rel="noreferrer">linkedin.com/in/emmanuel-mukumbwa</a>
                    </div>
                  </Col>

                  <Col md={4} className="text-md-end mt-3 mt-md-0">
                    <Button
                      variant="success"
                      href={downloadPath}
                      download={downloadName}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                    >
                      Download CV
                    </Button>
                  </Col>
                </Row>

                <section className="mb-4">
                  <h5>Professional Summary</h5>
                  <p className="text-muted">
                    CCNA-certified Network Administrator and Full-Stack Developer with a Bachelor of Science in Information & Communication Technology and 2+ years of practical ICT experience across teaching, freelance development, and industrial attachment. Proven ability to deliver hands-on user support, maintain servers and networks, perform basic cybersecurity tasks, and deploy production web platforms. Reliable, user-focused and able to work across infrastructure and application stacks.
                  </p>
                </section>

                {/* Contact quick links (repeat for clarity) */}
                <Row className="mb-4">
                  <Col md={4}>
                    <strong>Phone</strong>
                    <div className="text-muted">+265 99 237 4652 / +265 882 470 666</div>
                  </Col>
                  <Col md={4}>
                    <strong>Email</strong>
                    <div className="text-muted">emukumbwa2419@gmail.com</div>
                  </Col>
                  <Col md={4}>
                    <strong>Location</strong>
                    <div className="text-muted">Chitipa, Malawi</div>
                  </Col>
                </Row>

                {/* Technical Skills */}
                <section className="mb-4">
                  <h5>Technical Skills</h5>

                  <Row>
                    <Col md={12}>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <strong>Networking & Protocols:</strong> Cisco IOS, VLANs, OSPF, RIP, NAT, DHCP, ACLs, Port Security
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <strong>Systems & Operating Systems:</strong> Windows (8,10,11), Windows Server (Active Directory), Ubuntu Linux, macOS, workstation support, backups & recovery
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <strong>Helpdesk & Incident Management:</strong> First-line user support, incident logging & follow-up, remote support tools, SLA awareness
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <strong>Web & Development:</strong> Website deployment, DNS management, React, Node.js, PHP, MySQL, Git, RESTful API design
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <strong>Tools & Diagnostics:</strong> Wireshark, Packet Tracer, GNS3, Nmap, PuTTY, SNMP basics
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <strong>Hardware & Peripherals:</strong> Workstation setup, printer/scanner maintenance, basic repairs, asset tagging
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <strong>Security & Compliance:</strong> Antivirus administration, user security awareness, backup verification
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <strong>Other:</strong> Virtualization (VMware, VirtualBox), IT documentation, staff training
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </Row>
                </section>

                {/* Soft Skills */}
                <section className="mb-4">
                  <h5>Soft Skills</h5>
                  <ul>
                    <li>Problem-Solving & Analytical Thinking</li>
                    <li>Time Management & Prioritization</li>
                    <li>Communication & Presentation Skills</li>
                    <li>Adaptability in Fast-Changing Environments</li>
                    <li>Mentorship & Peer Support</li>
                    <li>Attention to Detail</li>
                  </ul>
                </section>

                {/* Work Experience */}
                <section className="mb-4">
                  <h5>Work Experience</h5>

                  <div className="mb-3">
                    <strong>Freelance Web Developer / Network Administrator</strong>
                    <div className="text-muted small">Self-Employed</div>
                    <div className="text-muted mb-2">Mar 2023 – Present</div>
                    <ul>
                      <li>Designed and deployed responsive websites for NGOs and small businesses; managed hosting and client handovers using Vercel and Git workflows.</li>
                      <li>Integrated payment gateways (PayChangu) and implemented secure server-side endpoints for subscription and transaction flows.</li>
                      <li>Provided ongoing network support, server maintenance, and routine cybersecurity tasks for clients.</li>
                      <li>Produced simple user guides and delivered short training sessions to reduce repeat support requests.</li>
                    </ul>
                  </div>

                  <div className="mb-3">
                    <strong>ICT Instructor</strong>
                    <div className="text-muted small">Paradox Technical College, Chitipa, Malawi</div>
                    <div className="text-muted mb-2">Oct 2022 – Oct 2023</div>
                    <ul>
                      <li>Designed and delivered lessons and hands-on labs covering: Introduction to Computers, File Systems, Graphical & Command-Line Interfaces, Troubleshooting, and Office Suites.</li>
                      <li>Developed lesson plans and assessments mapped to TEVETA Level 1 ICT competencies using practical examples to improve student engagement and retention.</li>
                      <li>Mentored students through practical assignments and produced clear step-by-step lab guides.</li>
                    </ul>
                  </div>

                  <div className="mb-3">
                    <strong>Technical Support Intern (Industrial Attachment)</strong>
                    <div className="text-muted small">Tee Components & Communications</div>
                    <div className="text-muted mb-2">1 Sep 2025 – 28 Nov 2025</div>
                    <ul>
                      <li>Assisted the Technical Support & Maintenance team with hardware diagnostics on printers and laptops, following workshop procedures.</li>
                      <li>Supported packing and delivery checks including verification of asset tags and invoices.</li>
                      <li>Prepared daily logbook entries and service reports for supervisors, improving repair traceability.</li>
                    </ul>
                  </div>
                </section>

                {/* Selected Projects */}
                <section className="mb-4">
                  <h5>Selected Projects</h5>

                  <div className="mb-2">
                    <strong>CCNA Networking Portfolio</strong>
                    <div className="text-muted small">Practical Packet Tracer labs: VLAN segmentation, Router-on-a-Stick, NAT/PAT, switch port security, DHCP services.</div>
                    <div className="mt-1"><a href="https://github.com/Emmanuel-Mukumbwa/ccna-portfolio-emmanuelMukumbwa" target="_blank" rel="noreferrer">Repo</a></div>
                  </div>

                  <div className="mb-2">
                    <strong>CampusTalent – Capstone & MVP</strong>
                    <div className="text-muted small">Platform connecting students with recruiters built with React, Node.js/Express, MySQL, PayChangu, Vercel, and Render.</div>
                    <div className="mt-1">Live Demo: <a href="https://campus-talent-front-end-f28i.vercel.app/" target="_blank" rel="noreferrer">campus-talent-front-end</a></div>
                    <div className="mt-1">Repo: <a href="https://github.com/Emmanuel-Mukumbwa/campus_talent_front_end.git" target="_blank" rel="noreferrer">github.com/Emmanuel-Mukumbwa/campus_talent_front_end</a></div>
                  </div>

                  <div className="mb-2">
                    <strong>Weather Forecast Dashboard</strong>
                    <div className="text-muted small">Responsive React front-end consuming OpenWeatherMap API demonstrating async data handling and API integration.</div>
                    <div className="mt-1">Live Demo: <a href="https://weather-app-vert-theta-10.vercel.app/" target="_blank" rel="noreferrer">weather-app</a></div>
                    <div className="mt-1">Repo: <a href="https://github.com/Emmanuel-Mukumbwa/weather-app.git" target="_blank" rel="noreferrer">github.com/Emmanuel-Mukumbwa/weather-app</a></div>
                  </div>

                  <div className="mb-2">
                    <strong>Other Notable Projects</strong>
                    <div className="text-muted small">GoodHope Ministries (Website), Hostel Management System (React + PHP/MySQL), Password Generator App (React).</div>
                  </div>
                </section>

                {/* Education */}
                <section className="mb-4">
                  <h5>Education</h5>

                  <Row>
                    <Col md={12}>
                      <strong>Bachelor of Science in Information & Communication Technology (Lower Second Class)</strong>
                      <div className="text-muted">Mzuzu University | 2022 – 2025</div>
                    </Col>
                    <Col md={12} className="mt-2">
                      <strong>Advanced Diploma in Computing & Information Systems (Credit)</strong>
                      <div className="text-muted">Malawi University of Business and Applied Sciences (MUBAS CEC) | 2019 – 2022</div>
                    </Col>
                    <Col md={12} className="mt-2">
                      <strong>MSCE Certificate (19 points)</strong>
                      <div className="text-muted">St. John Bosco Secondary School | 2012 – 2016</div>
                    </Col>
                  </Row>
                </section>

                {/* Certifications */}
                <section className="mb-4">
                  <h5>Certifications</h5>
                  <ul>
                    <li>Cisco Certified Network Associate (CCNA) | 2025</li>
                    <li>Udemy Certificate: <a href="https://www.udemy.com/certificate/UC-b63a1744-4fa8-474e-a45b-374313eed177/" target="_blank" rel="noreferrer">UC-b63a1744...</a></li>
                  </ul>
                </section>

                {/* Achievements */}
                <section className="mb-4">
                  <h5>Achievements</h5>
                  <ul>
                    <li>Earned CCNA certification validating Cisco networking competence.</li>
                    <li>Delivered a production-ready CampusTalent MVP used for recruiter and student transactions.</li>
                    <li>Recognized for clear technical communication and mentorship at Paradox Technical College.</li>
                    <li>Completed a 3-month industrial attachment, contributing to diagnostics and reporting that improved operational traceability.</li>
                  </ul>
                </section>

                {/* References (full details included in this resume) */}
                <section className="mb-4">
                  <h5>Languages</h5>
                  <ul>
                    <li>English (Fluent)</li>
                    <li>Chichewa (Fluent)</li>
                  </ul>
                </section>

                <section className="mb-4">
                  <h5>References</h5>
                  <div className="text-muted">Available upon request.</div>
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
