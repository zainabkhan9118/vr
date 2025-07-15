import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

import HeroSection from './components/sections/HeroSection';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Features from './components/sections/Features';
import Contact from './components/sections/Contact';
import Policy from './components/sections/Policy';
import Footer from './components/sections/Footer';

function MainPage() {
  const location = useLocation();

  // Handle direct navigation to hash URLs (e.g., when someone visits /#about)
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Simple scroll spy using scroll event
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'features', 'contact', 'policy'];
      const windowHeight = window.innerHeight;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
          
          if (isInView) {
            const newPath = sectionId === 'hero' ? '/' : `/#${sectionId}`;
            const currentPath = window.location.pathname + window.location.hash;
            if (currentPath !== newPath) {
              window.history.replaceState(null, '', newPath);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="policy">
        <Policy />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#150D40] text-white">
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
