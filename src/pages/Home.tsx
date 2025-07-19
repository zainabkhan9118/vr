
import HeroSection from '../components/sections/HeroSection';
import HomeIntro from '../components/sections/HomeIntro';
import ExperiencesPreview from '../components/sections/ExperiencesPreview';

const Home = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <HomeIntro />
      <ExperiencesPreview />
    </div>
  );
};

export default Home;
