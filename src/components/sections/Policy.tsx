import { useEffect, useRef, useState } from 'react';
import '../sections/stars.css';
import { Plus, Minus } from 'lucide-react';

type PolicyItem = {
  title: string;
  content: string;
};

const policies: PolicyItem[] = [
  { title: "Privacy Policy", content: "Your privacy is important to us..." },
  { title: "Terms of Use", content: "These are the terms for using our app..." },
  { title: "Cookie Policy", content: "We use cookies to improve user experience..." },
  { title: "Content Guidelines", content: "Please follow these rules..." },
];

const Policy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (starsRef.current) {
      starsRef.current.innerHTML = '';
      const count = 100;
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2;
        const delay = Math.random() * 5;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        starsRef.current.appendChild(star);
      }
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex justify-center items-center p-4 md:p-8 text-white text-center relative"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, #1a0b50 0%, #0a0339 100%)",
        backgroundColor: "#0a0339",
      }}
    >
      <div className="stars" ref={starsRef}></div>
      <div className="max-w-6xl mx-auto py-16 relative z-10">
        <h1 className="text-5xl md:text-7xl font-semibold mb-12 leading-tight text-[#fcf7e9]">
          Legal & Policies
        </h1>

        {/* 🔽 Accordion inserted here */}
        <div className="max-w-2xl mx-auto mb-20 space-y-4 text-left">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 transition-all"
            >
              <div
                onClick={() => toggle(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-lg font-medium text-[#fcf7e9]">{policy.title}</h3>
                {openIndex === index ? (
                  <Minus size={20} className="text-white/70" />
                ) : (
                  <Plus size={20} className="text-white/70" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-3 text-sm text-white/70">{policy.content}</p>
              )}
            </div>
          ))}
        </div>
        {/* 🔼 Accordion ends */}

        <p className="text-xl max-w-3xl mx-auto mb-20 leading-relaxed text-[#fcf7e9]">
          Ready to transfor your mental state?<br />
          Join thousands exploring immersive wellbeing<br />
          with Mind Player.
        </p>

         <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="button-purple text-white font-inter font-medium rounded-full px-8 py-4 text-lg min-w-[240px]">
              Download Now
            </button>
            
            <button className="button-blue text-white font-inter font-medium rounded-full px-8 py-4 text-lg min-w-[180px]">
              Explore Minds
            </button>
          </div>
      </div>
    </section>
  );
};

export default Policy;
