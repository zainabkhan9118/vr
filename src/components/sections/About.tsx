import React, { useEffect, useRef } from 'react'
import { Card, CardContent } from '../ui/card'
import './stars.css'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  
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
    <section ref={sectionRef} className="min-h-screen flex justify-center items-center p-4 md:p-8 text-white text-center relative" style={{ 
      backgroundImage: "radial-gradient(circle at 50% 50%, #1a0b50 0%, #0a0339 100%)",
      backgroundColor: "#0a0339"
    }}>
      <div className="stars" ref={starsRef}></div>
      <div className="max-w-6xl mx-auto py-16 relative z-10">
        <h1 className="text-5xl md:text-7xl font-semibold mb-8 leading-tight text-[#fcf7e9]">
          What is<br />
          Mind Player?
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-20 leading-relaxed text-[#fcf7e9]">
          Mind Player is a pioneering MindTech platform<br />
          that helps you take care of a mind elevate it to<br />
          the next level to a next vllevel.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <Card className="w-full md:w-80 rounded-2xl overflow-hidden" style={{ 
            background: "linear-gradient(135deg, rgba(54, 43, 123, 0.3) 0%, rgba(26, 19, 77, 0.3) 100%)",
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
          
          <Card className="w-full md:w-80 rounded-2xl overflow-hidden" style={{ 
            background: "linear-gradient(135deg, rgba(54, 43, 123, 0.3) 0%, rgba(26, 19, 77, 0.3) 100%)",
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
      </div>
    </section>
  )
}

export default About
