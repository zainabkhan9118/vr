import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0339] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8">
        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to transform your mental state?</h3>
          <p className="mb-4 text-white/80">Join thousands exploring immersive wellbeing with Mind Player.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <button className="button-blue font-inter font-medium rounded-full px-6 py-2 text-base shadow-lg hover:scale-105 transition-transform">Download Now</button>
            <button className="button-purple font-inter font-medium rounded-full px-6 py-2 text-base shadow-lg hover:scale-105 transition-transform">Explore Minds</button>
          </div>
        </div>

        {/* Navigation & Store Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm mb-4 md:mb-0 w-full sm:w-auto items-center sm:items-start">
            <a href="/" className="hover:underline text-white/80">Home</a>
            <a href="/about" className="hover:underline text-white/80">About</a>
            <a href="/experience" className="hover:underline text-white/80">Experiences</a>
            <a href="/features" className="hover:underline text-white/80">Features</a>
            <a href="/contact" className="hover:underline text-white/80">Contact</a>
            <a href="/policy" className="hover:underline text-white/80">Privacy Policy</a>
          </div>
          <div className="flex gap-3 w-full sm:w-auto justify-center md:justify-end">
            <img src="/appstore.svg" alt="App Store" className="h-14 w-14 sm:h-20 sm:w-20" />
            <img src="/playstore.svg" alt="Play Store" className="h-14 w-14 sm:h-20 sm:w-20" />
          </div>
        </div>

        {/* Social Icons & Newsletter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-6">
          <div className="flex gap-4">
            <img src="/twitter.svg" alt="Twitter" className="h-12 w-12" />
            <img src="/instagram.svg" alt="Instagram" className="h-12 w-12" />
            <img src="/facebook.svg" alt="Facebook" className="h-12 w-12" />
          </div>
          <form className="flex gap-2 mt-4 md:mt-0">
            <input type="email" placeholder="Subscribe to newsletter" className="px-4 py-2 rounded-full text-white min-w-[200px]" />
            <button type="submit" className="button-blue rounded-full px-4 py-2">Subscribe</button>
          </form>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/70 text-center mt-6">
          © {new Date().getFullYear()} Mind Player. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
