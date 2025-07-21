


import { useRef, useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import HomeIntro from '../components/sections/HomeIntro';
import ExperiencesPreview from '../components/sections/ExperiencesPreview';



const Home = () => {
  const sectionRefs = [
    useRef<HTMLDivElement>(null), // 0: Hero
    useRef<HTMLDivElement>(null), // 1: HomeIntro
    useRef<HTMLDivElement>(null), // 2: ExperiencesPreview
    useRef<HTMLDivElement>(null)  // 3: Footer
  ];
  useEffect(() => {
    let currentSection = 0;
    let isScrolling = false;
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      const direction = e.deltaY > 0 ? 1 : -1;
      let nextSection = currentSection + direction;
      if (nextSection < 0 || nextSection > 3) return;
      isScrolling = true;
      currentSection = nextSection;
      sectionRefs[currentSection].current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => { isScrolling = false; }, 900);
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="pt-16">
      <div ref={sectionRefs[0]} id="hero-section">
        <HeroSection />
      </div>
      <section ref={sectionRefs[1]} id="home-intro" className="py-24 md:py-32">
        <HomeIntro />
      </section>
      <section ref={sectionRefs[2]} id="experiences-preview" className="py-24 md:py-32">
        <ExperiencesPreview />
      </section>
      {/* Footer section removed to prevent duplicate footers */}
    </div>
  );
};

export default Home;
