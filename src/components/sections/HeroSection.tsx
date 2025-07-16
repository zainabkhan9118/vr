import { useEffect, useRef } from "react";
import Galaxy from "../ui/Galaxy";
import { useGsapAnimation } from "../../hooks/useGsapAnimation";
import "../../hero.css";

const HeroSection = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const { component } = useGsapAnimation();

  useEffect(() => {
    if (starsRef.current) {
      starsRef.current.innerHTML = "";
      const count = 200; // More stars for a richer star field
      
      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        
        // Create different star types (some will be brighter than others)
        const starType = Math.random();
        if (starType > 0.97) {
          star.className = "star star-bright"; // Very bright stars (rare)
        } else if (starType > 0.8) {
          star.className = "star star-medium"; // Medium brightness stars
        } else {
          star.className = "star"; // Regular dim stars
        }
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2.5 + (starType > 0.97 ? 1 : 0); // Bigger for bright stars
        const delay = Math.random() * 8;
        const duration = 3 + Math.random() * 4; // Random twinkle duration
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;
        
        starsRef.current.appendChild(star);
      }
    }
  }, []);

  return (
    <section
      ref={component}
      className="h-screen relative flex items-center justify-center text-white text-center overflow-hidden"
    >
      {/* Container for Galaxy with specific bounds */}
      <div className="absolute inset-0 overflow-hidden">
        <Galaxy className="galaxy-bg" />
      </div>

      {/* Dark overlay to improve text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-purple-900/30 z-1"></div>

      {/* Additional star field overlay for extra depth */}
      <div ref={starsRef} className="stars absolute inset-0 z-2 opacity-60"></div>

      {/* Content with enhanced visibility */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 text-[#fcf7e9] drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <span className="hero-title block text-shadow-lg">Unlock the</span>
          <span className="hero-title block text-shadow-lg">power of your mind</span>
        </h1>

        <p className="hero-subtitle text-lg sm:text-xl text-white mb-10 font-semibold leading-relaxed" 
           style={{
             textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 4px 4px 8px rgba(0,0,0,0.8)'
           }}>
          Step into a new era of mental wellness –<br />
          powered by neuroscience, AI, and virtual reality.
        </p>

         <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="hero-button button-blue text-white font-inter font-medium rounded-full px-8 py-4 text-lg min-w-[240px]">
              Download the App
            </button>
            
            <button className="hero-button button-purple text-white font-inter font-medium rounded-full px-8 py-4 text-lg min-w-[180px]">
              Explore
            </button>
          </div>
      </div>

      {/* VR Image bottom right - Only in Hero section */}
      <div className="absolute right-0 z-10
                      max-w-[150px] sm:max-w-[200px] 
                      md:max-w-[250px] lg:max-w-[300px] xl:max-w-[400px]
                      bottom-[-20px] sm:bottom-[-10px] md:bottom-0">
        <img
          src="/vr-headset2.png"
          alt="Person wearing VR headset"
          className="vr-image w-full h-auto opacity-80 md:opacity-100 vr-glow"
        />
      </div>
    </section>
  );
};

export default HeroSection;
