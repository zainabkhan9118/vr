import React, { useEffect, useRef } from 'react'
import '../sections/stars.css'
import { Card, CardContent } from '../ui/card'

const Experience = () => {
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
        <h1 className="text-5xl md:text-7xl font-semibold mb-12 leading-tight text-[#fcf7e9]">
          Explore Immersive<br />
          Experiences
        </h1>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-16">
          <Card className="w-full md:w-80 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ 
            background: "linear-gradient(135deg, rgba(54, 43, 123, 0.3) 0%, rgba(26, 19, 77, 0.3) 100%)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"
          }}>
            <CardContent className="p-10 text-center text-white">
              <h2 className="text-3xl mb-6 font-medium text-cyan-300">360 & VR<br /> Worlds</h2>
              <p className="text-lg leading-relaxed">
                Breathtaking<br />
                visuals and<br />
                soundscapes.
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
              <h2 className="text-3xl mb-6 font-medium text-cyan-300">Create Your<br/>Own <span className='text-blue-500'>Minds</span></h2>
              <p className="text-lg leading-relaxed">
                Combine sessions,<br />
                sounds, visuals.
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
              <h2 className="text-3xl mb-6 font-medium text-cyan-300">Live & Group<br/>Sessions</h2>
              <p className="text-lg leading-relaxed">
                Join others in<br />
                in-time meditations,<br />
                hypnosis or coaching.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Experience
