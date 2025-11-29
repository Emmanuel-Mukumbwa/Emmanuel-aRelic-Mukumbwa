import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
import { Container, Spinner } from 'react-bootstrap';
import './custom.scss';

const Home = lazy(() => import('./pages/HomePage'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const GetStarted = lazy(() => import('./pages/GetStarted'));
const Resume = lazy(() => import('./pages/Resume')); 
const Testimonials = lazy(() => import('./pages/Testimonials'));
// optionally add other pages you plan to create: Services, Blog, etc.

function LoaderFallback() {
  return (
    <Container className="text-center p-5">
      <Spinner animation="border" role="status" />
      <div className="mt-2">Loading…</div>
    </Container>
  );
}

function App() {
  return (
    <BrowserRouter> 
      <MainNavbar />
      <Suspense fallback={<LoaderFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* Resume / CV viewing (both routes point to same page) */}
          <Route path="/resume" element={<Resume />} />
          <Route path="/cv" element={<Resume />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* Fallback route(s) can be added here */}
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
