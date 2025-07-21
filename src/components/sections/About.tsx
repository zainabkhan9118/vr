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
        <h1
          className="page-title text-5xl md:text-7xl font-semibold mb-8 leading-tight text-[#fcf7e9] about-glow"
          style={{
            textShadow: "0 0 24px #DB91EF, 0 2px 24px #4B0082, 0 0px 2px #fff6"
          }}
        >
          What is<br />
          Mind Player?
        </h1>
        <p
          className="page-subtitle text-xl max-w-3xl mx-auto mb-20 leading-relaxed font-semibold"
          style={{ color: '#fff', textShadow: '0 2px 16px #DB91EF, 0 2px 8px #4B0082' }}
        >
          Mind Player is a pioneering MindTech platform<br />
          that helps you take care of a mind elevate it to<br />
          the next level to a next vllevel.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <Card
            className="page-card w-full md:w-80 rounded-2xl overflow-hidden card-lilac-glow group transition-all duration-300"
            style={{
              background: "#C5ACCF",
              backdropFilter: "blur(10px)",
              border: "1px solid #DB91EF33",
              boxShadow: "0 4px 32px 0 #DB91EF33, 0 2px 8px #BDA8F355"
            }}
          >
            <CardContent className="p-10 text-center" style={{ color: '#56365C' }}>
              <h2 className="text-4xl mb-6 font-bold" style={{ color: '#4B0082', textShadow: '0 2px 12px #B666D2aa' }}>Mission</h2>
              <p className="text-lg leading-relaxed" style={{ color: '#56365C' }}>
                Empower people to<br />
                unlock their mind's<br />
                full potential through<br />
                immersive mental<br />
                wellness.
              </p>
            </CardContent>
          </Card>
          <Card
            className="page-card w-full md:w-80 rounded-2xl overflow-hidden card-lilac-glow group transition-all duration-300"
            style={{
              background: "#C5ACCF",
              backdropFilter: "blur(10px)",
              border: "1px solid #DB91EF33",
              boxShadow: "0 4px 32px 0 #DB91EF33, 0 2px 8px #BDA8F355"
            }}
          >
            <CardContent className="p-10 text-center" style={{ color: '#56365C' }}>
              <h2 className="text-4xl mb-6 font-bold" style={{ color: '#4B0082', textShadow: '0 2px 12px #B666D2aa' }}>Vision</h2>
              <p className="text-lg leading-relaxed" style={{ color: '#56365C' }}>
                To redefine how the<br />
                world approaches<br />
                mental health<br />
                and personal growth.
              </p>
            </CardContent>
          </Card>
        </div>
        <style>{`
          .about-glow {
            transition: text-shadow 0.3s;
          }
          .card-lilac-glow {
            transition: box-shadow 0.3s, transform 0.3s;
          }
          .card-lilac-glow:hover {
            box-shadow: 0 12px 64px 0 #DB91EFcc, 0 8px 32px #4B0082cc, 0 4px 16px #B666D2cc;
            transform: translateY(-8px) scale(1.05);
          }
        `}</style>
      </div>
    </div>
  )
}

export default About
