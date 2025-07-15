import { Routes, Route } from 'react-router-dom';
import './App.css';

import HeroSection from './components/sections/HeroSection';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Features from './components/sections/Features';
import Contact from './components/sections/Contact';
import Policy from './components/sections/Policy';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#150D40] text-white">
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <About />
                <Experience />
                <Features />
                <Contact />
              </>
            }
          />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
