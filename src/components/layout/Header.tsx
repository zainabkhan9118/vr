import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menubar, MenubarMenu, MenubarTrigger } from '../ui/menubar';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Navigate to page
  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Check if current path is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-indigo-night/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => navigateToPage('/')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <span className="font-sen text-xl font-bold text-white">Mind Player</span>
            </button>
          </div>
          
          {/* Navigation - Desktop */}
          <div className="hidden md:block">
            <Menubar className="bg-transparent border-none">
              <MenubarMenu>
                <MenubarTrigger 
                  onClick={() => navigateToPage('/')}
                  className={`font-inter cursor-pointer transition-colors font-medium ${
                    isActive('/')
                      ? 'text-black bg-white font-bold shadow-md'
                      : 'text-white'
                  } ${isActive('/') ? '' : 'hover:text-mindful-aqua hover:bg-white/10'}`}
                >
                  Home
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger 
                  onClick={() => navigateToPage('/about')}
                  className={`font-inter cursor-pointer transition-colors font-medium ${
                    isActive('/about')
                      ? 'text-black bg-white font-bold shadow-md'
                      : 'text-white'
                  } ${isActive('/about') ? '' : 'hover:text-mindful-aqua hover:bg-white/10'}`}
                >
                  About
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger 
                  onClick={() => navigateToPage('/experience')}
                  className={`font-inter cursor-pointer transition-colors font-medium ${
                    isActive('/experience')
                      ? 'text-black bg-white font-bold shadow-md'
                      : 'text-white'
                  } ${isActive('/experience') ? '' : 'hover:text-mindful-aqua hover:bg-white/10'}`}
                >
                  Experiences
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger 
                  onClick={() => navigateToPage('/features')}
                  className={`font-inter cursor-pointer transition-colors font-medium ${
                    isActive('/features')
                      ? 'text-black bg-white font-bold shadow-md'
                      : 'text-white'
                  } ${isActive('/features') ? '' : 'hover:text-mindful-aqua hover:bg-white/10'}`}
                >
                  Features
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger 
                  onClick={() => navigateToPage('/contact')}
                  className={`font-inter cursor-pointer transition-colors font-medium ${
                    isActive('/contact')
                      ? 'text-black bg-white font-bold shadow-md'
                      : 'text-white'
                  } ${isActive('/contact') ? '' : 'hover:text-mindful-aqua hover:bg-white/10'}`}
                >
                  Contact
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger 
                  onClick={() => navigateToPage('/policy')}
                  className={`font-inter cursor-pointer transition-colors font-medium ${
                    isActive('/policy')
                      ? 'text-black bg-white font-bold shadow-md'
                      : 'text-white'
                  } ${isActive('/policy') ? '' : 'hover:text-mindful-aqua hover:bg-white/10'}`}
                >
                  Policy
                </MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </div>
          
          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-tranquil-violet hover:bg-tranquil-violet/90 text-white font-sen rounded-full px-6 shadow-lg hover:shadow-tranquil-violet/20 transition-all"
            >
              Try Now
            </Button>
          </div> */}
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center pr-2">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-mindful-aqua focus:outline-none transition-colors pr-2"
              aria-label="Toggle mobile menu"
            >
              <svg 
                className={`h-6 w-6 transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-indigo-night/95 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              <button
                onClick={() => navigateToPage('/')}
                className={`block w-full text-left px-3 py-2 rounded-md font-inter transition-colors font-medium ${
                  isActive('/')
                    ? 'text-mindful-aqua bg-white/80 font-bold shadow-md'
                    : 'text-white'
                } ${isActive('/') ? '' : 'hover:text-mindful-aqua hover:bg-white/10'}`}
              >
                Home
              </button>
              <button
                onClick={() => navigateToPage('/about')}
                className={`block w-full text-left px-3 py-2 rounded-md font-inter transition-colors font-medium ${
                  isActive('/about')
                    ? 'text-mindful-aqua bg-white/80 font-bold shadow-md'
                    : 'text-white'
                } ${isActive('/about') ? '' : 'hover:text-mindful-aqua hover:bg-white/10'}`}
              >
                About
              </button>
              <button
                onClick={() => navigateToPage('/experience')}
                className={`block w-full text-left px-3 py-2 rounded-md font-inter transition-colors font-medium ${
                  isActive('/experience')
                    ? 'text-mindful-aqua bg-white/80 font-bold shadow-md'
                    : 'text-white'
                } ${isActive('/experience') ? '' : 'hover:text-mindful-aqua hover:bg-white/10'}`}
              >
                Experiences
              </button>
              <button
                onClick={() => navigateToPage('/features')}
                className={`block w-full text-left px-3 py-2 rounded-md font-inter transition-colors font-medium ${
                  isActive('/features')
                    ? 'text-mindful-aqua bg-white/80 font-bold shadow-md'
                    : 'text-white'
                } ${isActive('/features') ? '' : 'hover:text-mindful-aqua hover:bg-white/10'}`}
              >
                Features
              </button>
              <button
                onClick={() => navigateToPage('/contact')}
                className={`block w-full text-left px-3 py-2 rounded-md font-inter transition-colors font-medium ${
                  isActive('/contact')
                    ? 'text-mindful-aqua bg-white/80 font-bold shadow-md'
                    : 'text-white'
                } ${isActive('/contact') ? '' : 'hover:text-mindful-aqua hover:bg-white/10'}`}
              >
                Contact
              </button>
              <button
                onClick={() => navigateToPage('/policy')}
                className={`block w-full text-left px-3 py-2 rounded-md font-inter transition-colors font-medium ${
                  isActive('/policy')
                    ? 'text-mindful-aqua bg-white/80 font-bold shadow-md'
                    : 'text-white'
                } ${isActive('/policy') ? '' : 'hover:text-mindful-aqua hover:bg-white/10'}`}
              >
                Policy
              </button>
              {/* <div className="pt-2">
                <Button 
                  onClick={() => navigateToPage('/contact')}
                  className="w-full bg-tranquil-violet hover:bg-tranquil-violet/90 text-white font-sen rounded-full shadow-lg hover:shadow-tranquil-violet/20 transition-all"
                >
                  Try Now
                </Button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
