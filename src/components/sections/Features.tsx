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
            Everything You Need<br />
            to Elevate Your Mind
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Mind Sessions */}
            <Card className="page-card rounded-2xl overflow-hidden transition-all duration-300 feature-card-glow h-full" style={{ 
              background: "linear-gradient(135deg, #C5ACCF 0%, #B666D2 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid #DB91EF55",
              boxShadow: "0 4px 32px 0 #DB91EF33, 0 2px 8px #BDA8F355"
            }}>
              <CardContent className="p-8 text-center flex flex-col h-full justify-center" style={{ color: '#2A1A6F' }}>
                <div className="flex justify-center mb-5">
                  <div className="rounded-full p-4 inline-block feature-icon-glow" style={{ background: 'linear-gradient(135deg, #DB91EF 0%, #B666D2 100%)' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="iconGradient1" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#DB91EF" />
                          <stop offset="100%" stopColor="#4DD8FF" />
                        </linearGradient>
                      </defs>
                      <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="url(#iconGradient1)" strokeWidth="1.5" />
                      <path d="M10 10C10 10 11.5 11 12 12" stroke="url(#iconGradient1)" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M19 7.5C19 7.5 17.5 9 17.5 12C17.5 15 19 16.5 19 16.5" stroke="url(#iconGradient1)" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M5 7.5C5 7.5 6.5 9 6.5 12C6.5 15 5 16.5 5 16.5" stroke="url(#iconGradient1)" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <h2
                  className="text-2xl mb-3 font-bold"
                  style={{
                    color: '#2A1A6F',
                    WebkitTextStroke: '1.2px #fff',
                    textShadow: '0 2px 12px #B666D2aa, 0 1px 0 #fff'
                  }}
                >
                  Mind Sessions
                </h2>
                <ul className="text-base leading-relaxed space-y-1" style={{ color: '#2A1A6F' }}>
                  <li>Meditations</li>
                  <li>Hypnosis</li>
                  <li>Coaching</li>
                  <li>Breathwork</li>
                  <li>Sleep stories</li>
                </ul>
              </CardContent>
            </Card>

            {/* Music & Sounds */}
            <Card className="page-card rounded-2xl overflow-hidden transition-all duration-300 feature-card-glow h-full" style={{ 
              background: "linear-gradient(135deg, #C5ACCF 0%, #B666D2 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid #DB91EF55",
              boxShadow: "0 4px 32px 0 #DB91EF33, 0 2px 8px #BDA8F355"
            }}>
              <CardContent className="p-8 text-center flex flex-col h-full justify-center" style={{ color: '#2A1A6F' }}>
                <div className="flex justify-center mb-5">
                  <div className="rounded-full p-4 inline-block feature-icon-glow" style={{ background: 'linear-gradient(135deg, #DB91EF 0%, #B666D2 100%)' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="iconGradient2" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#DB91EF" />
                          <stop offset="100%" stopColor="#4DD8FF" />
                        </linearGradient>
                      </defs>
                      <path d="M12 3v10.55A4 4 0 1 0 14 17" stroke="url(#iconGradient2)" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="12" cy="17" r="4" stroke="url(#iconGradient2)" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                <h2
                  className="text-2xl mb-3 font-bold"
                  style={{
                    color: '#2A1A6F',
                    WebkitTextStroke: '1.2px #fff',
                    textShadow: '0 2px 12px #B666D2aa, 0 1px 0 #fff'
                  }}
                >
                  Music & Sounds
                </h2>
                <ul className="text-base leading-relaxed space-y-1" style={{ color: '#2A1A6F' }}>
                  <li>Binaural beats</li>
                  <li>Solfeggio</li>
                  <li>EMDR</li>
                  <li>Soundscapes</li>
                </ul>
              </CardContent>
            </Card>

            {/* AI Mind Coach */}
            <Card className="page-card rounded-2xl overflow-hidden transition-all duration-300 feature-card-glow h-full" style={{ 
              background: "linear-gradient(135deg, #C5ACCF 0%, #B666D2 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid #DB91EF55",
              boxShadow: "0 4px 32px 0 #DB91EF33, 0 2px 8px #BDA8F355"
            }}>
              <CardContent className="p-8 text-center flex flex-col h-full justify-center" style={{ color: '#2A1A6F' }}>
                <div className="flex justify-center mb-5">
                  <div className="rounded-full p-4 inline-block feature-icon-glow" style={{ background: 'linear-gradient(135deg, #DB91EF 0%, #B666D2 100%)' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="iconGradient3" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#DB91EF" />
                          <stop offset="100%" stopColor="#4DD8FF" />
                        </linearGradient>
                      </defs>
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="url(#iconGradient3)" strokeWidth="1.5" />
                      <path d="M16 12H19" stroke="url(#iconGradient3)" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M16.5 9L18.5 7" stroke="url(#iconGradient3)" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M16.5 15L18.5 17" stroke="url(#iconGradient3)" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 8V5" stroke="url(#iconGradient3)" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M7.5 7L5.5 5" stroke="url(#iconGradient3)" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M5 12H8" stroke="url(#iconGradient3)" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M7.5 17L5.5 19" stroke="url(#iconGradient3)" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 16V19" stroke="url(#iconGradient3)" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <h2
                  className="text-2xl mb-3 font-bold"
                  style={{
                    color: '#2A1A6F',
                    WebkitTextStroke: '1.2px #fff',
                    textShadow: '0 2px 12px #B666D2aa, 0 1px 0 #fff'
                  }}
                >
                  AI Mind Coach
                </h2>
                <ul className="text-base leading-relaxed space-y-1" style={{ color: '#2A1A6F' }}>
                  <li>Personalized suggestions</li>
                  <li>Daily support</li>
                  <li>Guided journeys</li>
                </ul>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="page-card rounded-2xl overflow-hidden transition-all duration-300 feature-card-glow h-full" style={{ 
              background: "linear-gradient(135deg, #C5ACCF 0%, #B666D2 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid #DB91EF55",
              boxShadow: "0 4px 32px 0 #DB91EF33, 0 2px 8px #BDA8F355"
            }}>
              <CardContent className="p-8 text-center flex flex-col h-full justify-center" style={{ color: '#2A1A6F' }}>
                <div className="flex justify-center mb-5">
                  <div className="rounded-full p-4 inline-block feature-icon-glow" style={{ background: 'linear-gradient(135deg, #DB91EF 0%, #B666D2 100%)' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="iconGradient4" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#DB91EF" />
                          <stop offset="100%" stopColor="#4DD8FF" />
                        </linearGradient>
                      </defs>
                      <path d="M17 19C17 16.7909 14.7614 15 12 15C9.23858 15 7 16.7909 7 19" stroke="url(#iconGradient4)" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="url(#iconGradient4)" strokeWidth="1.5" />
                      <path d="M19 15C19.5523 15 20 14.5523 20 14C20 13.4477 19.5523 13 19 13C18.4477 13 18 13.4477 18 14C18 14.5523 18.4477 15 19 15Z" fill="#4DD8FF" />
                      <path d="M19 11C19.5523 11 20 10.5523 20 10C20 9.44772 19.5523 9 19 9C18.4477 9 18 9.44772 18 10C18 10.5523 18.4477 11 19 11Z" fill="#4DD8FF" />
                      <path d="M5 15C5.55228 15 6 14.5523 6 14C6 13.4477 5.55228 13 5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15Z" fill="#4DD8FF" />
                      <path d="M5 11C5.55228 11 6 10.5523 6 10C6 9.44772 5.55228 9 5 9C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11Z" fill="#4DD8FF" />
                    </svg>
                  </div>
                </div>
                <h2
                  className="text-2xl mb-3 font-bold"
                  style={{
                    color: '#2A1A6F',
                    WebkitTextStroke: '1.2px #fff',
                    textShadow: '0 2px 12px #B666D2aa, 0 1px 0 #fff'
                  }}
                >
                  Community
                </h2>
                <ul className="text-base leading-relaxed space-y-1" style={{ color: '#2A1A6F' }}>
        <style>{`
          .feature-card-glow {
            transition: box-shadow 0.3s, transform 0.3s;
          }
          .feature-card-glow:hover {
            box-shadow: 0 12px 64px 0 #DB91EFcc, 0 8px 32px #4B0082cc, 0 4px 16px #B666D2cc;
            transform: translateY(-8px) scale(1.05);
          }
        `}</style>
                  <li>Create & join group sessions</li>
                  <li>Private spaces</li>
                  <li>Peer support</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Free vs Premium as cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <Card className="rounded-2xl border feature-tier-card feature-card-glow" style={{
              border: '2px solid #DB91EF',
              background: 'linear-gradient(135deg, #F8E6FB 0%, #DB91EF 100%)',
              boxShadow: '0 4px 32px 0 #DB91EF33, 0 2px 8px #BDA8F355'
            }}>
              <CardContent className="p-8 text-left" style={{ color: '#2A1A6F' }}>
                <h3 className="text-2xl font-bold mb-3" style={{
                  color: '#B666D2',
                  WebkitTextStroke: '1px #fff',
                  textShadow: '0 2px 12px #DB91EFaa, 0 1px 0 #fff'
                }}>Free</h3>
                <ul className="list-disc pl-5 space-y-1" style={{ color: '#2A1A6F' }}>
                  <li>Access basic mind sessions</li>
                  <li>Standard music & soundscapes</li>
                  <li>Join community groups</li>
                  <li>Try AI Mind Coach (limited)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border feature-tier-card feature-card-glow" style={{
              border: '2px solid #B666D2',
              background: 'linear-gradient(135deg, #DB91EF 0%, #B666D2 100%)',
              boxShadow: '0 4px 32px 0 #B666D233, 0 2px 8px #DB91EF55'
            }}>
              <CardContent className="p-8 text-left" style={{ color: '#fff' }}>
                <h3 className="text-2xl font-bold mb-3" style={{
                  color: '#fff',
                  WebkitTextStroke: '1px #B666D2',
                  textShadow: '0 2px 12px #DB91EFaa, 0 1px 0 #fff'
                }}>Premium</h3>
                <ul className="list-disc pl-5 space-y-1" style={{ color: '#fff', textShadow: '0 1px 8px #B666D2' }}>
                  <li>All mind sessions unlocked</li>
                  <li>Exclusive music & advanced soundscapes</li>
                  <li>Host private & group sessions</li>
                  <li>Full AI Mind Coach access</li>
                  <li>Early access to new features</li>
                </ul>
              </CardContent>
            </Card>
        <style>{`
          .feature-card-glow {
            transition: box-shadow 0.3s, transform 0.3s;
          }
          .feature-card-glow:hover {
            box-shadow: 0 12px 64px 0 #DB91EFcc, 0 8px 32px #4B0082cc, 0 4px 16px #B666D2cc;
            transform: translateY(-8px) scale(1.05);
          }
          .feature-icon-glow {
            box-shadow: 0 0 16px #DB91EF88, 0 2px 8px #B666D288;
          }
          .feature-tier-card {
            transition: box-shadow 0.3s, transform 0.3s;
          }
          .feature-tier-card:hover {
            box-shadow: 0 12px 64px 0 #DB91EFcc, 0 8px 32px #B666D2cc, 0 4px 16px #fff8;
            transform: translateY(-8px) scale(1.04);
          }
        `}</style>
          </div>
        </div>
      </section>
    )
  }
export default Features
