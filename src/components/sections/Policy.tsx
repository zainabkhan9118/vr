import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import PolicyGalaxy from '../ui/PolicyGalaxy';
import { usePageAnimation } from '../../hooks/usePageAnimation';
import '../../hero.css';

type PolicyItem = {
  title: string;
  content: string;
};

const policies: PolicyItem[] = [
  {
    title: "Privacy Policy",
    content:
      `We value your privacy and are committed to protecting your personal information. We only collect data necessary to provide and improve our services. Your data is never sold to third parties. You can request deletion of your data at any time by contacting us at hello@mindplayer.com.`
  },
  {
    title: "Terms of Use",
    content:
      `By using Mind Player, you agree to abide by our terms. You must be at least 16 years old or have parental consent. Do not misuse the app or attempt to access it in unauthorized ways. We reserve the right to suspend accounts that violate these terms.`
  },
  {
    title: "Cookie Policy",
    content:
      `We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can manage your cookie preferences in your browser settings. Continued use of the app implies consent to our cookie policy.`
  },
  {
    title: "Content Guidelines",
    content:
      `Please use Mind Player respectfully. Do not upload or share content that is illegal, harmful, or violates the rights of others. We reserve the right to remove content and restrict access for violations of these guidelines.`
  },
];

const Policy = () => {
  const { component } = usePageAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={component}
      className="min-h-screen flex justify-center items-center p-4 md:p-8 text-white text-center relative"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, #1a0b50 0%, #0a0339 100%)",
        backgroundColor: "#0a0339",
      }}
    >
      <PolicyGalaxy />
      <div className="max-w-6xl mx-auto py-16 relative z-10">
        <h1
          className="page-title text-5xl md:text-7xl font-bold mb-12 leading-tight"
          style={{
            color: '#2A1A6F',
            WebkitTextStroke: '2px #fff',
            textShadow: '0 2px 24px #B666D2cc, 0 1px 0 #fff',
            letterSpacing: '0.01em',
          }}
        >
          Legal & Policies
        </h1>

        {/* 🔽 Accordion inserted here */}
        <div className="page-card max-w-2xl mx-auto mb-20 space-y-4 text-left">
          {policies.map((policy, index) => (
            <div
              key={index}
              className={`policy-accordion-card px-6 py-4 rounded-xl transition-all ${openIndex === index ? 'active' : ''}`}
              style={{
                background: 'linear-gradient(135deg, #F8E6FB 0%, #DB91EF 100%)',
                border: '1.5px solid #B666D2',
                boxShadow: openIndex === index ? '0 6px 32px #DB91EF99, 0 2px 8px #B666D2cc' : '0 2px 12px #DB91EF22',
                color: '#2A1A6F',
              }}
            >
              <div
                onClick={() => toggle(index)}
                className="flex justify-between items-center cursor-pointer"
                style={{ userSelect: 'none' }}
              >
                <h3
                  className="text-lg font-bold"
                  style={{
                    color: '#2A1A6F',
                    WebkitTextStroke: '1px #fff',
                    textShadow: '0 2px 12px #B666D2aa, 0 1px 0 #fff',
                  }}
                >
                  {policy.title}
                </h3>
                {openIndex === index ? (
                  <Minus size={20} className="text-[#2A1A6F]" />
                ) : (
                  <Plus size={20} className="text-[#B666D2]" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-3 text-base" style={{ color: '#2A1A6F', opacity: 0.85 }}>{policy.content}</p>
              )}
            </div>
          ))}
        </div>
      <style>{`
        .policy-accordion-card {
          transition: box-shadow 0.2s, transform 0.2s, background 0.2s;
        }
        .policy-accordion-card:hover {
          box-shadow: 0 6px 32px #DB91EF99, 0 2px 8px #B666D2cc;
          transform: translateY(-2px) scale(1.02);
        }
        .policy-accordion-card.active {
          background: linear-gradient(135deg, #DB91EF 0%, #B666D2 100%) !important;
          color: #fff !important;
        }
        .policy-accordion-card.active h3 {
          color: #fff !important;
          WebkitTextStroke: 1px #B666D2;
          text-shadow: 0 2px 12px #fff8, 0 1px 0 #B666D2;
        }
        .policy-accordion-card.active p {
          color: #fff !important;
          opacity: 0.95;
        }
      `}</style>
      </div>
    </section>
  );
};

export default Policy;
