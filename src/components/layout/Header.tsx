import { useState, useEffect } from 'react';
import { Menubar, MenubarMenu, MenubarTrigger } from '../ui/menubar';
import { Button } from '../ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Change header styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-indigo-night/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="font-sen text-xl font-bold text-white">Mind Player</span>
            </a>
          </div>
          
          {/* Navigation - Desktop */}
          <div className="hidden md:block">
            <Menubar className="bg-transparent border-none">
              <MenubarMenu>
                <MenubarTrigger className="font-inter text-white hover:text-mindful-aqua cursor-pointer">Home</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="font-inter text-white hover:text-mindful-aqua cursor-pointer">About</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="font-inter text-white hover:text-mindful-aqua cursor-pointer">Experiences</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="font-inter text-white hover:text-mindful-aqua cursor-pointer">Features</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="font-inter text-white hover:text-mindful-aqua cursor-pointer">Contact</MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </div>
          
          {/* CTA Button */}
          <div>
            <Button className="bg-tranquil-violet hover:bg-tranquil-violet/90 text-white font-sen rounded-full px-6 shadow-lg hover:shadow-tranquil-violet/20">
              Try Now
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-mindful-aqua focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
