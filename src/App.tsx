import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EcologicalIssues from './pages/EcologicalIssues';
import KeyFigures from './pages/KeyFigures';
import EcoAlternatives from './pages/EcoAlternatives';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enjeux" element={<EcologicalIssues />} />
          <Route path="/chiffres" element={<KeyFigures />} />
          <Route path="/alternatives" element={<EcoAlternatives />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;