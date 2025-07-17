import HeroSection from '../components/sections/HeroSection';

const Home = () => {
  return (
    <div className="pt-16"> {/* Add top padding to account for fixed header */}
      <HeroSection />
    </div>
  );
};

export default Home;
