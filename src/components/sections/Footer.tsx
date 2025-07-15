import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0339] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Mind Player. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline text-white/80">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline text-white/80">
            Terms of Use
          </a>
          <a href="#" className="hover:underline text-white/80">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
