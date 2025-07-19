
import HeroSection from '../components/sections/HeroSection';
import HomeIntro from '../components/sections/HomeIntro';
import ExperiencesPreview from '../components/sections/ExperiencesPreview';

const Home = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <section className="py-24 md:py-32">
        <HomeIntro />
      </section>
      <section className="py-24 md:py-32">
        <ExperiencesPreview />
      </section>
    </div>
  );
};

export default Home;
