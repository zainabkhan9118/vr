// Quick Intro to Mind Player section
export default function HomeIntro() {
  return (
    <section className="relative py-16 bg-transparent flex flex-col items-center text-center">
      {/* Creative floating SVG illustration */}
      <div className="mb-6 animate-float">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="36" cy="36" rx="32" ry="20" fill="#DB91EF" fillOpacity="0.18" />
          <ellipse cx="36" cy="36" rx="24" ry="14" fill="#BDA8F3" fillOpacity="0.12" />
          <path d="M36 18c-7 0-13 5-13 12 0 4 2 7 5 9-1 2-2 4-2 7 0 6 5 10 10 10s10-4 10-10c0-3-1-5-2-7 3-2 5-5 5-9 0-7-6-12-13-12z" fill="#DB91EF" stroke="#BDA8F3" strokeWidth="2"/>
          <ellipse cx="36" cy="36" rx="6" ry="3" fill="#fff" fillOpacity="0.25" />
        </svg>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#fcf7e9]">What is Mind Player?</h2>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6" style={{ color: '#9874D3' }}>
        Mind Player is a pioneering MindTech platform that helps you elevate your mental state through immersive VR, neuroscience, and AI-powered experiences.
      </p>
      {/* Inspiring tagline */}
      <div className="mb-8">
        <span
          className="inline-block text-[#BDA8F3] text-base md:text-lg font-semibold tracking-wide px-4 py-2 rounded-full bg-[#2A1A6F]/40 shadow-sm animate-fadein tagline-glow"
          style={{
            textShadow: "0 0 12px #DB91EF88, 0 2px 8px #BDA8F355"
          }}
        >
          "Unlock your mind. Experience the future."
        </span>
      </div>
      <button
        className="font-inter font-medium rounded-full px-8 py-3 text-lg shadow-lg hover:scale-105 transition-transform text-white bg-[#DB91EF] focus:outline-none focus:ring-2 focus:ring-[#DB91EF] focus:ring-opacity-50"
        style={{
          boxShadow: "0 4px 16px 0 #DB91EF55, 0 2px 8px #2A1A6F22",
        }}
      >
        Watch Demo
      </button>
      {/* Simple floating animation style */}
      <style>{`
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-fadein {
          animation: fadein 1.2s;
        }
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
