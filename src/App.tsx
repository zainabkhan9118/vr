import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/sections/Footer';

// Import page components
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import PolicyPage from './pages/PolicyPage';

function App() {
  return (
    <div className="min-h-screen bg-[#150D40] text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
