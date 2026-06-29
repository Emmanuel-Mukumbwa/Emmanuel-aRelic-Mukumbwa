// src/pages/Resume.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Container, Row, Col, Card, Button, Badge
} from 'react-bootstrap';
import {
  FaDownload,
  FaLinkedin,
  FaGithub,
  FaGlobeAmericas,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaStar,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaLaptopCode,
  FaProjectDiagram,
  FaClock,
  FaCalendarAlt,
} from 'react-icons/fa';
import { SiCisco } from 'react-icons/si';

// Quick stats data
const quickStats = [
  { icon: <FaCalendarAlt />, value: '2+ Years', label: 'Experience' },
  { icon: <FaProjectDiagram />, value: '15+', label: 'Projects' },
  { icon: <FaCertificate />, value: 'CCNA Course', label: 'Certified' },
  { icon: <FaGraduationCap />, value: 'BSc ICT', label: 'Degree' },
];

// Skill cards data
const skillCards = [
  {
    title: 'Networking & Protocols',
    icon: <FaGlobeAmericas />,
    skills: ['Cisco IOS', 'VLANs', 'OSPF', 'RIP', 'NAT', 'DHCP', 'ACLs', 'Port Security'],
    level: 5,
  },
  {
    title: 'Development',
    icon: <FaLaptopCode />,
    skills: ['React', 'Node.js', 'Flutter', 'Dart', 'PHP', 'MySQL', 'REST APIs', 'Git'],
    level: 5,
  },
  {
    title: 'Systems & OS',
    icon: <FaBriefcase />,
    skills: ['Windows Server', 'Ubuntu Linux', 'Active Directory', 'VMware', 'VirtualBox', 'Backups', 'Helpdesk'],
    level: 5,
  },
];

// Timeline data
const timeline = [
  {
    period: 'Mar 2023 – Present',
    title: 'Freelance Web Developer / Network Administrator',
    org: 'Self-Employed',
    desc: [
      'Designed and deployed responsive websites for NGOs and small businesses; managed hosting and client handovers using Vercel and Git workflows.',
      'Integrated payment gateways (PayChangu) and implemented secure server-side endpoints for subscription and transaction flows.',
      'Provided ongoing network support, server maintenance, and routine cybersecurity tasks for clients.',
      'Produced simple user guides and delivered short training sessions to reduce repeat support requests.',
    ],
  },
  {
    period: 'Apr 2026 – Present',
    title: 'Volunteer ICT Expert',
    org: 'YWAM Blantyre',
    desc: [
      'Serving as a volunteer developer and ICT expert, developing and maintaining an offline-first finance tracking app, providing ongoing technical support, and advising on ICT infrastructure.',
    ],
  },
  {
    period: 'Oct 2022 – Oct 2023',
    title: 'ICT Instructor',
    org: 'Paradox Technical College, Chitipa',
    desc: [
      'Designed and delivered lessons and hands-on labs covering: Introduction to Computers, File Systems, Graphical & Command-Line Interfaces, Troubleshooting, and Office Suites.',
      'Developed lesson plans and assessments mapped to TEVETA Level 1 ICT competencies.',
      'Mentored students through practical assignments and produced clear step-by-step lab guides.',
    ],
  },
  {
    period: 'Sep 2025 – Nov 2025',
    title: 'Technical Support Intern',
    org: 'Tee Components & Communications',
    desc: [
      'Assisted the Technical Support & Maintenance team with hardware diagnostics on printers and laptops.',
      'Supported packing and delivery checks including verification of asset tags and invoices.',
      'Prepared daily logbook entries and service reports for supervisors.',
    ],
  },
];

// Featured projects data
const featuredProjects = [
  {
    title: 'CampusTalent – Capstone & MVP',
    tech: ['React', 'Node.js', 'MySQL', 'PayChangu'],
    demo: 'https://campus-talent-front-end-f28i.vercel.app/',
    repo: 'https://github.com/Emmanuel-Mukumbwa/campus_talent_front_end.git',
    desc: 'Platform connecting students with recruiters. Payment integration, recruiter verification, and production deployment.',
  },
  {
    title: 'Offline-First Finance Tracker',
    tech: ['Flutter', 'Dart', 'SQLite', 'Firebase'],
    demo: null,
    repo: null,
    desc: 'Mobile app for financial tracking that works entirely offline. Google Sheets sync, human-readable references, and automatic reconciliation.',
  },
  {
    title: 'CCNA Networking Portfolio',
    tech: ['Packet Tracer', 'VLAN', 'OSPF', 'NAT'],
    demo: null,
    repo: 'https://github.com/Emmanuel-Mukumbwa/ccna-portfolio-emmanuelMukumbwa',
    desc: 'Practical Packet Tracer labs: VLAN segmentation, Router-on-a-Stick, NAT/PAT, switch port security, DHCP services.',
  },
];

export default function Resume() {
  const downloadPath = '/merged-resume.html'; // update if PDF version added
  const downloadName = 'Emmanuel_Mukumbwa_Resume.html';

  return (
    <>
      <Helmet>
        <title>Resume — Emmanuel (aRelic) Mukumbwa</title>
        <meta
          name="description"
          content="Resume of Emmanuel (aRelic) Mukumbwa — ICT professional, network administrator, full-stack developer, volunteer ICT expert."
        />
      </Helmet>

      <main className="resume-page">
        {/* ===== Hero ===== */}
        <section className="resume-hero py-5 bg-light">
          <Container>
            <Row className="align-items-center">
              <Col lg={8}>
                <h1 className="display-4 fw-bold">Emmanuel Mukumbwa</h1>
                <div className="lead text-muted mb-3">
                  <Badge bg="success" className="me-2">Network Administrator</Badge>
                  <Badge bg="success" className="me-2">Full-Stack Developer</Badge>
                  <Badge bg="success">ICT Specialist</Badge>
                </div>
                <p className="fs-5">
                  Building practical systems, networks and software that solve real business problems.
                </p>
                <div className="d-flex flex-wrap gap-2 mt-4">
                  <Button variant="success" size="lg" href={downloadPath} download={downloadName}>
                    <FaDownload className="me-2" /> Download CV
                  </Button>
                  <Button variant="outline-success" size="lg" href="/contact?subject=Hire%20Emmanuel">
                    Hire Me
                  </Button>
                </div>
              </Col>
              <Col lg={4} className="text-center mt-3 mt-lg-0">
                <div className="d-flex flex-column align-items-center gap-2">
                  <FaLinkedin size={30} className="text-muted" />
                  <FaGithub size={30} className="text-muted" />
                  <FaGlobeAmericas size={30} className="text-muted" />
                </div>
              </Col>
            </Row>

            {/* Quick Stats */}
            <Row className="mt-5 g-4">
              {quickStats.map((stat, idx) => (
                <Col xs={6} md={3} key={idx}>
                  <Card className="text-center h-100 stat-card">
                    <Card.Body>
                      <div className="fs-3 text-success">{stat.icon}</div>
                      <div className="fw-bold fs-5">{stat.value}</div>
                      <div className="text-muted small">{stat.label}</div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* ===== Professional Summary ===== */}
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col lg={8}>
              <h3 className="mb-3">Professional Summary</h3>
              <p className="text-muted">
                I am an ICT professional specializing in networking, systems administration, full-stack development,
                and technical support. My experience spans software development, infrastructure, training, and production
                deployments for NGOs, educational institutions, and small businesses. I enjoy building practical
                technology solutions that remain reliable even in low-resource environments.
              </p>
            </Col>
          </Row>
        </Container>

        {/* ===== Core Competencies (Skill Cards) ===== */}
        <section className="py-5 bg-light">
          <Container>
            <h3 className="mb-4 text-center">Core Competencies</h3>
            <Row className="g-4">
              {skillCards.map((card, idx) => (
                <Col md={4} key={idx}>
                  <Card className="h-100 skill-card">
                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex align-items-center gap-2 mb-3">
                        <span className="fs-4 text-success">{card.icon}</span>
                        <h5 className="mb-0">{card.title}</h5>
                      </div>
                      <div className="mb-3">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < card.level ? 'text-warning' : 'text-muted'} />
                        ))}
                      </div>
                      <div className="d-flex flex-wrap gap-1 flex-grow-1">
                        {card.skills.map(skill => (
                          <Badge key={skill} bg="light" text="dark" className="me-1 mb-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* ===== Career Timeline ===== */}
        <Container className="py-5">
          <h3 className="mb-4">Career Timeline</h3>
          <div className="timeline">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-item d-flex mb-4">
                <div className="timeline-marker me-3">
                  <div className="rounded-circle bg-success p-1">
                    <FaBriefcase className="text-white" />
                  </div>
                </div>
                <div>
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="text-muted small mb-1">{item.org} | {item.period}</p>
                  <ul className="text-muted small">
                    {item.desc.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>

        {/* ===== Featured Projects ===== */}
        <section className="py-5 bg-light">
          <Container>
            <h3 className="mb-4">Featured Projects</h3>
            <Row className="g-4">
              {featuredProjects.map((proj, idx) => (
                <Col md={4} key={idx}>
                  <Card className="h-100 project-card">
                    <Card.Body className="d-flex flex-column">
                      <h5 className="mb-2">{proj.title}</h5>
                      <div className="mb-3">
                        {proj.tech.map(t => (
                          <Badge key={t} bg="light" text="dark" className="me-1 mb-1">{t}</Badge>
                        ))}
                      </div>
                      <p className="text-muted small flex-grow-1">{proj.desc}</p>
                      <div className="mt-auto d-flex gap-2">
                        {proj.demo && (
                          <Button variant="outline-success" size="sm" href={proj.demo} target="_blank" rel="noreferrer">
                            Live Demo
                          </Button>
                        )}
                        {proj.repo && (
                          <Button variant="outline-secondary" size="sm" href={proj.repo} target="_blank" rel="noreferrer">
                            <FaGithub className="me-1" /> Repo
                          </Button>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* ===== Education & Certifications ===== */}
        <Container className="py-5">
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <h3 className="mb-3">Education</h3>
              <Card className="mb-3">
                <Card.Body>
                  <div className="d-flex align-items-center gap-2">
                    <FaGraduationCap size={28} className="text-success" />
                    <div>
                      <h6 className="mb-1">BSc in Information & Communication Technology (Lower Second Class)</h6>
                      <p className="text-muted small mb-0">Mzuzu University | 2022 – 2025</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Body>
                  <div className="d-flex align-items-center gap-2">
                    <FaGraduationCap size={28} className="text-success" />
                    <div>
                      <h6 className="mb-1">Advanced Diploma in Computing & Information Systems (Credit)</h6>
                      <p className="text-muted small mb-0">MUBAS CEC | 2019 – 2022</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <h3 className="mb-3">Certifications</h3>
              <Card className="mb-3">
                <Card.Body>
                  <div className="d-flex align-items-center gap-2">
                    <SiCisco size={28} className="text-success" />
                    <div>
                      <h6 className="mb-1">Cisco Certified Network Associate (CCNA) | 2025</h6>
                      <p className="text-muted small mb-0">Cisco</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <div className="d-flex align-items-center gap-2">
                    <FaCertificate size={28} className="text-success" />
                    <div>
                      <h6 className="mb-1">Udemy React Certificate</h6>
                      <a href="https://www.udemy.com/certificate/UC-b63a1744-4fa8-474e-a45b-374313eed177/" target="_blank" rel="noreferrer" className="small">
                        View credential
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* ===== Achievements ===== */}
        <section className="py-5 bg-light">
          <Container>
            <h3 className="mb-4">Achievements</h3>
            <Row className="g-3">
              {[
                'Production CampusTalent MVP',
                'CCNA Certified (2025)',
                'Volunteer ICT Expert at YWAM Blantyre',
                'ICT Instructor at Paradox Technical College',
                'Industrial Attachment Completed (2025)',
                'Offline-first Finance Tracker deployed',
              ].map((achievement, idx) => (
                <Col md={6} key={idx}>
                  <div className="d-flex align-items-center gap-2">
                    <FaCheckCircle className="text-success" />
                    <span>{achievement}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* ===== Recruiter Info ===== */}
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col lg={6}>
              <Card className="glass-card">
                <Card.Body>
                  <h4 className="mb-3">Availability</h4>
                  <ul className="list-unstyled">
                    <li><FaCheckCircle className="text-success me-2" /> Full-time</li>
                    <li><FaCheckCircle className="text-success me-2" /> Freelance</li>
                    <li><FaCheckCircle className="text-success me-2" /> Remote / Hybrid</li>
                  </ul>
                  <hr />
                  <div className="d-flex flex-wrap gap-3">
                    <div>
                      <FaMapMarkerAlt className="text-muted me-1" />
                      <span className="text-muted">Blantyre, Malawi</span>
                    </div>
                    <div>
                      <FaClock className="text-muted me-1" />
                      <span className="text-muted">Open to relocation</span>
                    </div>
                    <div>
                      <FaEnvelope className="text-muted me-1" />
                      <span className="text-muted">Response within 24h</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* ===== Ending CTA ===== */}
        <section className="py-5 bg-dark text-white text-center">
          <Container>
            <h2 className="mb-3">Ready to work together?</h2>
            <p className="lead mb-4">
              Whether you need a developer, network administrator, or ICT consultant, I'd love to hear about your project.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Button variant="success" size="lg" href="/contact?subject=Hire%20Emmanuel">
                Hire Me
              </Button>
              <Button variant="outline-light" size="lg" href={downloadPath} download={downloadName}>
                <FaDownload className="me-2" /> Download CV
              </Button>
              <Button variant="outline-light" size="lg" href="/projects">
                View Projects
              </Button>
            </div>
          </Container>
        </section>

        {/* ===== Contact Info ===== */}
        <Container className="py-3 text-center text-muted small">
          <p>
            <FaPhoneAlt className="me-1" /> +265 99 237 4652 | +265 882 470 666 &nbsp;|&nbsp;
            <FaEnvelope className="me-1" /> emukumbwa2419@gmail.com &nbsp;|&nbsp;
            <FaGlobeAmericas className="me-1" /> https://emmanuel-a-relic-mukumbwa.vercel.app
          </p>
        </Container>
      </main>
    </>
  );
}