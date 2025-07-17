import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

// Custom hook for page animations (similar to hero but more generic)
export const usePageAnimation = () => {
  const component = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline
      tl.current = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate main heading
      tl.current.fromTo(
        ".page-title",
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          stagger: 0.2 
        }
      );

      // Animate subtitle/description
      tl.current.fromTo(
        ".page-subtitle",
        { 
          y: 30, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          delay: 0.2 
        },
        "-=0.5"
      );

      // Animate cards/content blocks
      tl.current.fromTo(
        ".page-card",
        { 
          y: 40, 
          opacity: 0,
          scale: 0.9
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8,
          stagger: 0.2 
        },
        "-=0.4"
      );

      // Animate buttons
      tl.current.fromTo(
        ".page-button",
        { 
          y: 20, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6,
          stagger: 0.15 
        },
        "-=0.4"
      );

      // Animate any images
      tl.current.fromTo(
        ".page-image",
        { 
          x: 50, 
          opacity: 0 
        },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1 
        },
        "-=0.6"
      );
    }, component);

    return () => ctx.revert();
  }, []);

  return { component };
};
