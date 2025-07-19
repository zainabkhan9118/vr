import { useEffect, useRef } from 'react'
import { Card, CardContent } from '../ui/card'
import SubtleGalaxy from '../ui/SubtleGalaxy'
import { usePageAnimation } from '../../hooks/usePageAnimation'
import './stars.css'


const About = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const { component } = usePageAnimation();
  
  useEffect(() => {
    if (starsRef.current) {
      // Clear existing stars
      starsRef.current.innerHTML = '';
      
      // Generate random stars
      const count = 100;
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 2;
        
        // Random animation delay
        const delay = Math.random() * 5;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        
        starsRef.current.appendChild(star);
      }
    }
  }, []);
  
  return (
    <div ref={component} className="min-h-screen flex justify-center items-center p-4 md:p-8 text-white text-center relative" style={{ 
      backgroundImage: "radial-gradient(circle at 50% 50%, #1a0b50 0%, #0a0339 100%)",
      backgroundColor: "#0a0339"
    }}>
      {/* Three.js SubtleGalaxy Background */}
      <div className="absolute inset-0 overflow-hidden">
        <SubtleGalaxy />
      </div>
      
      {/* Existing stars overlay */}
      <div className="stars" ref={starsRef}></div>
      
      <div className="max-w-6xl mx-auto py-16 relative z-10">
        <h1 className="page-title text-5xl md:text-7xl font-semibold mb-8 leading-tight text-[#fcf7e9]">
          What is<br />
          Mind Player?
        </h1>
        <p className="page-subtitle text-xl max-w-3xl mx-auto mb-20 leading-relaxed text-[#fcf7e9]">
          Mind Player is a pioneering MindTech platform that empowers you to elevate your mental wellbeing through immersive VR, neuroscience, and AI-powered experiences.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <Card className="page-card w-full md:w-80 rounded-2xl overflow-hidden" style={{ 
            background: "rgba(54, 43, 123, 0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"
          }}>
            <CardContent className="p-10 text-center text-white">
              <h2 className="text-4xl mb-6 font-medium">Mission</h2>
              <p className="text-lg leading-relaxed">
                Empower people to<br />
                unlock their mind's<br />
                full potential through<br />
                immersive mental<br />
                wellness.
              </p>
            </CardContent>
          </Card>
          
          <Card className="page-card w-full md:w-80 rounded-2xl overflow-hidden" style={{ 
            background: "rgba(54, 43, 123, 0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"
          }}>
            <CardContent className="p-10 text-center text-white">
              <h2 className="text-4xl mb-6 font-medium">Vision</h2>
              <p className="text-lg leading-relaxed">
                To redefine how the<br />
                world approaches<br />
                mental health<br />
                and personal growth.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Now? Section */}
        <div className="mt-16 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center mb-4">
            {/* Brain to Tech Icon (placeholder) */}
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-2">
              <circle cx="32" cy="32" r="32" fill="#6D28D9" fillOpacity="0.2" />
              <path d="M20 32c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" />
              <rect x="38" y="38" width="10" height="10" rx="2" fill="#A78BFA" />
              <rect x="16" y="38" width="10" height="10" rx="2" fill="#A78BFA" />
            </svg>
            <h3 className="text-2xl font-bold mb-2 text-[#fcf7e9]">Why Now?</h3>
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Mental health challenges are at an all-time high, and traditional solutions aren't enough. Mind Player brings innovation to mental wellness, combining neuroscience, technology, and immersive experiences to meet the urgent demand for new ways to support the mind.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
