// Quick Intro to Mind Player section
export default function HomeIntro() {
  return (
    <section className="relative py-16 bg-transparent flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#fcf7e9]">What is Mind Player?</h2>
      <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
        Mind Player is a pioneering MindTech platform that helps you elevate your mental state through immersive VR, neuroscience, and AI-powered experiences.
      </p>
      <button className="button-blue font-inter font-medium rounded-full px-8 py-3 text-lg shadow-lg hover:scale-105 transition-transform">
        Watch Demo
      </button>
    </section>
  );
}
