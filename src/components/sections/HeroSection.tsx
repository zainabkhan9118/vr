// HeroSection.tsx
import { useEffect, useRef } from "react";
import Galaxy from "../ui/Galaxy";
import { useGsapAnimation } from "../../hooks/useGsapAnimation";
import "../../hero.css";


import { useState } from "react";

const HeroSection = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const { component } = useGsapAnimation();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (starsRef.current) {
      starsRef.current.innerHTML = "";
      const count = 200;

      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        const starType = Math.random();

        if (starType > 0.97) {
          star.className = "star star-bright";
        } else if (starType > 0.8) {
          star.className = "star star-medium";
        } else {
          star.className = "star";
        }

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2.5 + (starType > 0.97 ? 1 : 0);
        const delay = Math.random() * 8;
        const duration = 3 + Math.random() * 4;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;

        starsRef.current.appendChild(star);
      }
    }
    // Wait for animation and images to load before showing content
    const handleLoaded = () => setShowContent(true);
    // Wait for next tick to ensure DOM is ready
    setTimeout(handleLoaded, 1200);
  }, []);

  return (
    <section
      ref={component}
      className="h-screen relative flex items-center justify-center text-white text-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Galaxy className="galaxy-bg" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#2A1A6F]/50 via-transparent to-[#2A1A6F]/50 z-1"></div>

      <div ref={starsRef} className="stars absolute inset-0 z-2 opacity-60"></div>

      <div
        className={`relative z-10 max-w-3xl px-4 transition-opacity duration-700 ${showContent ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 hero-main-heading"
          style={{
            color: '#fff',
            WebkitTextStroke: '2.5px #2A1A6F',
            textShadow: '0 2px 32px #DB91EF, 0 2px 12px #B666D2, 0 1px 0 #fff',
            letterSpacing: '0.01em',
            filter: 'drop-shadow(0 0 16px #DB91EF88)'
          }}
        >
          <span className="hero-title block">Unlock the</span>
          <span className="hero-title block">power of your mind</span>
        </h1>

        {/* <p
          className="hero-subtitle text-xl sm:text-2xl mb-10 font-extrabold leading-relaxed max-w-2xl mx-auto text-center px-6 py-4 rounded-xl shadow-lg"
          style={{
            color: '#2A1A6F',
            background: 'linear-gradient(135deg, #F8E6FB 0%, #DB91EF 100%)',
            textShadow: '0 2px 12px #B666D2aa, 0 1px 0 #fff',
            WebkitTextStroke: '0.8px #fff',
            border: '1.5px solid #DB91EF55',
            boxShadow: '0 2px 12px #DB91EF22',
          }}
        >
          Step into a new era of mental wellness –<br />
          <span style={{ color: '#B666D2' }}>
            powered by neuroscience, AI, and virtual reality.
          </span>
        </p> */}

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            className="hero-button text-white font-inter font-medium rounded-full px-8 py-4 text-lg min-w-[240px] hero-btn-lilac"
          >
            Download the App
          </button>
          <button
            className="hero-button text-white font-inter font-medium rounded-full px-8 py-4 text-lg min-w-[180px] hero-btn-lilac"
          >
            Explore
          </button>
        </div>
        <style>{`
          .hero-btn-lilac {
            background: #DB91EF;
            box-shadow: 0 4px 16px 0 #DB91EF55, 0 2px 8px #2A1A6F22;
            transition: box-shadow 0.2s, transform 0.2s, background 0.2s;
          }
          .hero-btn-lilac:hover:not(:disabled), .hero-btn-lilac:focus:not(:disabled) {
            background: #B666D2;
            box-shadow: 0 8px 32px #DB91EF99, 0 2px 8px #B666D2cc;
            transform: translateY(-2px) scale(1.04);
          }
          .hero-btn-lilac:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
        `}</style>
      </div>

      {/* VR Image with outline glow only */}
      <div className="absolute right-0 z-10
                      max-w-[150px] sm:max-w-[200px] 
                      md:max-w-[250px] lg:max-w-[300px] xl:max-w-[400px]
                      bottom-[-20px] sm:bottom-[-10px] md:bottom-0">
        <img
          src="/vr-headset2.png"
          alt="Person wearing VR headset"
          className="vr-image w-full h-auto vr-glow"
        />
      </div>
    </section>
  );
};

export default HeroSection;
