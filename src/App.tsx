// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LearningTracker from './pages/LearningTracker';
import Profiles from './pages/Profiles';
import Projects from './pages/Projects'; // Import the Projects page

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning-tracker" element={<LearningTracker />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/projects" element={<Projects />} /> {/* New Route */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
