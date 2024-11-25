import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Dashboard from './components/Dashboard';
import VideoEditor from './components/editor/VideoEditor';

function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<><Header /><LandingPage /></>} />
          <Route path="/dashboard" element={<><Header /><Dashboard /></>} />
          <Route path="/editor/:projectId" element={<VideoEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;