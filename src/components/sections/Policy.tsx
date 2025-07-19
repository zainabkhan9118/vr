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
        <h1 className="page-title text-5xl md:text-7xl font-semibold mb-12 leading-tight text-[#fcf7e9]">
          Legal & Policies
        </h1>

        {/* 🔽 Accordion inserted here */}
        <div className="page-card max-w-2xl mx-auto mb-20 space-y-4 text-left">
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
      </div>
    </section>
  );
};

export default Policy;
