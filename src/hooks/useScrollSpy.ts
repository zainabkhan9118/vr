import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useScrollSpy = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        let maxRatio = 0;
        let activeEntry: IntersectionObserverEntry | null = null;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeEntry = entry;
          }
        });

        if (activeEntry && activeEntry.intersectionRatio > 0.3) {
          const sectionId = activeEntry.target.id;
          console.log('Active section:', sectionId);
          setActiveSection(sectionId);
          
          // Update URL hash without causing a page jump
          if (sectionId === 'hero') {
            navigate('/', { replace: true });
          } else {
            navigate(`/${sectionId}`, { replace: true });
          }
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], // Multiple thresholds
        rootMargin: '-10% 0px -10% 0px', // Smaller margins
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, navigate]);

  return activeSection;
};
