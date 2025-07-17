import { useEffect, useRef } from 'react'
import '../sections/stars.css'
import { Card, CardContent } from '../ui/card'
import FeaturesGalaxy from '../ui/FeaturesGalaxy'
import { usePageAnimation } from '../../hooks/usePageAnimation'
const Features = () => {
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
      <section ref={component} className="min-h-screen flex justify-center items-center p-4 md:p-8 text-white text-center relative" style={{ 
        backgroundImage: "radial-gradient(circle at 50% 50%, #2D1B69 0%, #1A0B50 50%, #0a0339 100%)",
        backgroundColor: "#1A0B50"
      }}>
        {/* FeaturesGalaxy Animation Background */}
        <div className="absolute inset-0 overflow-hidden">
          <FeaturesGalaxy />
        </div>
        
        <div className="stars" ref={starsRef}></div>
        <div className="max-w-6xl mx-auto py-16 relative z-10">
          <h1 className="page-title text-5xl md:text-7xl font-semibold mb-12 leading-tight text-[#fcf7e9]">
            Everything You Need<br />
            to Elevate Your Mind
          </h1>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-16">
            <Card className="page-card w-full md:w-80 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ 
              background: "linear-gradient(135deg, rgba(54, 43, 123, 0.3) 0%, rgba(26, 19, 77, 0.3) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"
            }}>
              <CardContent className="p-10 text-center text-white">
                <div className="flex justify-center mb-5">
                  <div className="rounded-full bg-cyan-500/20 p-4 inline-block">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#4DD8FF" strokeWidth="1.5" />
                      <path d="M10 10C10 10 11.5 11 12 12" stroke="#4DD8FF" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M19 7.5C19 7.5 17.5 9 17.5 12C17.5 15 19 16.5 19 16.5" stroke="#4DD8FF" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M5 7.5C5 7.5 6.5 9 6.5 12C6.5 15 5 16.5 5 16.5" stroke="#4DD8FF" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl mb-4 font-medium text-cyan-300">Mind Sessions</h2>
                <p className="text-lg leading-relaxed">
                  Meditations<br />
                  hypnosis,<br />
                  coaching,<br />
                  breathwork
                </p>
              </CardContent>
            </Card>
            
            <Card className="page-card w-full md:w-80 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ 
              background: "linear-gradient(135deg, rgba(54, 43, 123, 0.3) 0%, rgba(26, 19, 77, 0.3) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"
            }}>
              <CardContent className="p-10 text-center text-white">
                <div className="flex justify-center mb-5">
                  <div className="rounded-full bg-cyan-500/20 p-4 inline-block">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#4DD8FF" strokeWidth="1.5" />
                      <path d="M16 12H19" stroke="#4DD8FF" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M16.5 9L18.5 7" stroke="#4DD8FF" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M16.5 15L18.5 17" stroke="#4DD8FF" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 8V5" stroke="#4DD8FF" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M7.5 7L5.5 5" stroke="#4DD8FF" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M5 12H8" stroke="#4DD8FF" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M7.5 17L5.5 19" stroke="#4DD8FF" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 16V19" stroke="#4DD8FF" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl mb-4 font-medium text-cyan-300">AI Mind Coach</h2>
                <p className="text-lg leading-relaxed">
                  Personalized<br />
                  suggestions and<br />
                  daily support
                </p>
              </CardContent>
            </Card>
  
            <Card className="page-card w-full md:w-80 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ 
              background: "linear-gradient(135deg, rgba(54, 43, 123, 0.3) 0%, rgba(26, 19, 77, 0.3) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"
            }}>
              <CardContent className="p-10 text-center text-white">
                <div className="flex justify-center mb-5">
                  <div className="rounded-full bg-cyan-500/20 p-4 inline-block">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 19C17 16.7909 14.7614 15 12 15C9.23858 15 7 16.7909 7 19" stroke="#4DD8FF" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#4DD8FF" strokeWidth="1.5" />
                      <path d="M19 15C19.5523 15 20 14.5523 20 14C20 13.4477 19.5523 13 19 13C18.4477 13 18 13.4477 18 14C18 14.5523 18.4477 15 19 15Z" fill="#4DD8FF" />
                      <path d="M19 11C19.5523 11 20 10.5523 20 10C20 9.44772 19.5523 9 19 9C18.4477 9 18 9.44772 18 10C18 10.5523 18.4477 11 19 11Z" fill="#4DD8FF" />
                      <path d="M5 15C5.55228 15 6 14.5523 6 14C6 13.4477 5.55228 13 5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15Z" fill="#4DD8FF" />
                      <path d="M5 11C5.55228 11 6 10.5523 6 10C6 9.44772 5.55228 9 5 9C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11Z" fill="#4DD8FF" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl mb-4 font-medium text-cyan-300">Community</h2>
                <p className="text-lg leading-relaxed">
                  Create and join<br />
                  group sessions<br />
                  or private spaces
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }
export default Features
