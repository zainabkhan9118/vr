import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

// Custom hook for GSAP animations
export const useGsapAnimation = () => {
  const component = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline
      tl.current = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate heading
      tl.current.fromTo(
        ".hero-title",
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

      // Animate subtitle
      tl.current.fromTo(
        ".hero-subtitle",
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

      // Animate buttons
      tl.current.fromTo(
        ".hero-button",
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

      // Animate VR image
      tl.current.fromTo(
        ".vr-image",
        { 
          x: 100, 
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
