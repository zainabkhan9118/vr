import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useScrollSpy = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
          
          if (isInView) {
            setActiveSection(sectionId);
            const newPath = sectionId === 'hero' ? '/' : `/${sectionId}`;
            navigate(newPath, { replace: true });
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, navigate]);

  return activeSection;
};
