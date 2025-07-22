import { useEffect, useRef } from 'react'
import '../sections/stars.css'
import { Card, CardContent } from '../ui/card'
import ExperienceGalaxy from '../ui/ExperienceGalaxy'
import { usePageAnimation } from '../../hooks/usePageAnimation'

const Experience = () => {
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
    //<section ref={component} className="min-h-screen flex justify-center items-center p-4 md:p-8 text-white text-center relative" style={{ 
      backgroundImage: "radial-gradient(circle at 50% 50%, #1a0b50 0%, #0a0339 50%)",
      backgroundColor: "#0a0339"
    }}>
      <div className="absolute inset-0 overflow-hidden">
        <ExperienceGalaxy />
      </div>
      
      <div className="stars" ref={starsRef}></div>
      <div className="max-w-6xl mx-auto py-16 relative z-10">
        <h1
            className="page-title text-5xl md:text-7xl font-bold mb-12 leading-tight"
            style={{
              color: '#2A1A6F',
              WebkitTextStroke: '2.5px #fff',
              textShadow: '0 2px 24px #B666D2cc, 0 1px 0 #fff',
              letterSpacing: '0.01em',
              filter: 'drop-shadow(0 0 16px #DB91EF88)'
            }}
          >
          Explore Immersive<br />
          Experiences
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-8 mt-16">
          {/* Card 1: 360 & VR Worlds */}
          <div className="relative group w-full md:w-80 min-h-[370px] ">
            <Card className="page-card h-full w-full rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col" style={{ 
              background: "linear-gradient(135deg, #C5ACCF 0%, #B666D2 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid #DB91EF55",
              boxShadow: "0 4px 32px 0 #DB91EF33, 0 2px 8px #BDA8F355"
            }}>
              <CardContent className="p-10 text-center flex-1 flex flex-col justify-center" style={{ color: '#56365C' }}>
                <h2
                  className="text-3xl mb-6 font-bold"
                  style={{
                    color: '#2A1A6F',
                    WebkitTextStroke: '1.5px #fff',
                    textShadow: '0 2px 12px #B666D2aa, 0 1px 0 #fff'
                  }}
                >
                  360 & VR<br /> Worlds
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: '#2A1A6F' }}>
                  Breathtaking<br />
                  visuals and<br />
                  soundscapes.
                </p>
              </CardContent>
              {/* Reveal on hover */}
              <div className="absolute inset-0 bg-cyan-900/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-6">
                <svg width="48" height="48" fill="none" className="mb-3"><circle cx="24" cy="24" r="24" fill="#06b6d4" fillOpacity="0.15"/><path d="M12 24c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round"/><rect x="18" y="30" width="12" height="4" rx="2" fill="#06b6d4"/></svg>
                <span className="text-lg font-semibold text-white">Step into stunning virtual worlds and let your mind wander.</span>
              </div>
            </Card>
          </div>

          {/* Card 2: Create Your Own Minds */}
          <div className="relative group w-full md:w-80 min-h-[370px]">
            <Card className="page-card h-full w-full rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col" style={{ 
              background: "linear-gradient(135deg, #C5ACCF 0%, #B666D2 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid #DB91EF55",
              boxShadow: "0 4px 32px 0 #DB91EF33, 0 2px 8px #BDA8F355"
            }}>
              <CardContent className="p-10 text-center flex-1 flex flex-col justify-center" style={{ color: '#56365C' }}>
                <h2
                  className="text-3xl mb-6 font-bold"
                  style={{
                    color: '#2A1A6F',
                    WebkitTextStroke: '1.5px #fff',
                    textShadow: '0 2px 12px #B666D2aa, 0 1px 0 #fff'
                  }}
                >
                  Create Your<br/>Own Minds
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: '#2A1A6F' }}>
                  Combine sessions,<br />
                  sounds, visuals.
                </p>
              </CardContent>
              {/* Reveal on hover */}
              <div className="absolute inset-0 bg-blue-900/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-6">
                <svg width="48" height="48" fill="none" className="mb-3"><circle cx="24" cy="24" r="24" fill="#3b82f6" fillOpacity="0.15"/><path d="M16 32c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/><rect x="20" y="20" width="8" height="8" rx="2" fill="#3b82f6"/></svg>
                <span className="text-lg font-semibold text-white">Mix and match your favorite experiences to create your own Mind journeys.</span>
              </div>
            </Card>
          </div>

          {/* Card 3: Live & Group Sessions */}
          <div className="relative group w-full md:w-80 min-h-[370px]">
            <Card className="page-card h-full w-full rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col" style={{ 
              background: "linear-gradient(135deg, #C5ACCF 0%, #B666D2 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid #DB91EF55",
              boxShadow: "0 4px 32px 0 #DB91EF33, 0 2px 8px #BDA8F355"
            }}>
              <CardContent className="p-10 text-center flex-1 flex flex-col justify-center" style={{ color: '#56365C' }}>
                <h2
                  className="text-3xl mb-6 font-bold"
                  style={{
                    color: '#2A1A6F',
                    WebkitTextStroke: '1.5px #fff',
                    textShadow: '0 2px 12px #B666D2aa, 0 1px 0 #fff'
                  }}
                >
                  Live & Group<br/>Sessions
                </h2>
        <style>{`
          .experience-glow {
            transition: text-shadow 0.3s;
          }
        `}</style>
                <p className="text-lg leading-relaxed" style={{ color: '#2A1A6F' }}>
                  Join others in<br />
                  in-time meditations,<br />
                  hypnosis or coaching.
                </p>
              </CardContent>
              {/* Reveal on hover */}
              <div className="absolute inset-0 bg-purple-900/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-6">
                <svg width="48" height="48" fill="none" className="mb-3"><circle cx="24" cy="24" r="24" fill="#a78bfa" fillOpacity="0.15"/><path d="M24 16v16M16 24h16" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/><rect x="18" y="30" width="12" height="4" rx="2" fill="#a78bfa"/></svg>
                <span className="text-lg font-semibold text-white">Connect live for group meditations, hypnosis, or coaching sessions.</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
 
    </section>
  )
}

export default Experience
