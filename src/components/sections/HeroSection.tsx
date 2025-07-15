import { useEffect, useRef } from "react";
import "../../hero.css";

const HeroSection = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (starsRef.current) {
      starsRef.current.innerHTML = "";
      const count = 100;
      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.className = "star";
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2;
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
    <section
      className="h-screen relative flex items-center justify-center text-white text-center overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at center, #1a0b50 0%, #0a0339 100%)",
      }}
    >
      {/* Star Field Background */}
      <div ref={starsRef} className="stars absolute inset-0 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 text-[#fcf7e9]">
          Unlock the<br />
          power of your mind
        </h1>

        <p className="text-lg sm:text-xl text-white/80 mb-10">
          Step into a new era of mental wellness –<br />
          powered by neuroscience, AI, and virtual reality.
        </p>

         <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="button-blue text-white font-inter font-medium rounded-full px-8 py-4 text-lg min-w-[240px]">
              Download the App
            </button>
            
            <button className="button-purple text-white font-inter font-medium rounded-full px-8 py-4 text-lg min-w-[180px]">
              Explore
            </button>
          </div>
      </div>

      {/* VR Image bottom right */}
      <div className="absolute bottom-0 right-0 max-w-[300px] md:max-w-[400px] z-10">
        <img
          src="src/assets/vr-headset2.png"
          alt="Person wearing VR headset"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
