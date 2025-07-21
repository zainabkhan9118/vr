import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0339] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8">
        {/* Final CTA */}
        <div className="text-center">
          <h3
            className="text-xl md:text-2xl font-bold mb-2 footer-cta-heading"
            style={{
              color: '#2A1A6F',
              WebkitTextStroke: '1.2px #fff',
              textShadow: '0 2px 12px #B666D2aa, 0 1px 0 #fff',
              letterSpacing: '0.01em',
            }}
          >
            Ready to transform your mental state?
          </h3>
          <p className="mb-4 text-white/80">Join thousands exploring immersive wellbeing with Mind Player.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <button className="footer-btn-lilac font-inter font-medium rounded-full px-6 py-2 text-base shadow-lg">Download Now</button>
            <button className="footer-btn-lilac font-inter font-medium rounded-full px-6 py-2 text-base shadow-lg">Explore Minds</button>
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
            <input type="email" placeholder="Subscribe to newsletter" className="footer-input px-4 py-2 rounded-full min-w-[200px]" />
            <button type="submit" className="footer-btn-lilac rounded-full px-4 py-2">Subscribe</button>
      <style>{`
        .footer-cta-heading {
          color: #2A1A6F;
          WebkitTextStroke: 1.2px #fff;
          text-shadow: 0 2px 12px #B666D2aa, 0 1px 0 #fff;
        }
        .footer-btn-lilac {
          background: #DB91EF;
          color: #fff;
          box-shadow: 0 2px 12px #DB91EF55, 0 1px 4px #B666D255;
          transition: box-shadow 0.2s, transform 0.2s, background 0.2s;
        }
        .footer-btn-lilac:hover:not(:disabled), .footer-btn-lilac:focus:not(:disabled) {
          background: #B666D2;
          box-shadow: 0 6px 24px #DB91EF99, 0 2px 8px #B666D2cc;
          transform: translateY(-2px) scale(1.04);
        }
        .footer-btn-lilac:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .footer-input {
          background: linear-gradient(135deg, #F8E6FB 0%, #DB91EF 100%);
          border: 1.5px solid #B666D2;
          color: #2A1A6F;
          font-size: 1rem;
          box-shadow: 0 2px 8px #DB91EF22;
          transition: border 0.2s, box-shadow 0.2s;
        }
        .footer-input:focus {
          border: 1.5px solid #DB91EF;
          box-shadow: 0 0 0 2px #DB91EF55;
          outline: none;
        }
        .flex.gap-4 img, .flex.gap-3 img {
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .flex.gap-4 img:hover, .flex.gap-3 img:hover {
          box-shadow: 0 4px 24px #DB91EF99, 0 2px 8px #B666D2cc;
          transform: translateY(-2px) scale(1.07);
        }
      `}</style>
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
