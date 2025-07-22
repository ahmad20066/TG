import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import ProjectDetails from './pages/ProjectDetails';
import MediaProductionPage from './pages/MediaProductionPage';
import TechServicesPage from './pages/TechServicesPage';
import MarketingPage from './pages/MarketingPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/services/media-production" element={<MediaProductionPage />} />
        <Route path="/services/tech" element={<TechServicesPage />} />
        <Route path="/services/marketing" element={<MarketingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
