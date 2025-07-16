import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

// Define the color palette with additional colors for galaxy effect
const COLORS = {
  indigoNight: '#2A1A6F',
  tranquilViolet: '#6C4DC1',
  softLavender: '#BDA8F3',
  mindfulAqua: '#9FE7E4',
  pureWhite: '#FFFFFF',
  mistGrey: '#F5F6FA',
  softCharcoal: '#444444',
  // Additional colors for the galaxy
  deepPurple: '#3a0ca3',
  cosmicBlue: '#4361ee',
  nebulaRose: '#e879f9',
  galaxyCore: '#9d4edd',
  tealGlow: '#5EB0E5'
};

interface GalaxyProps {
  className?: string;
}

const Galaxy = ({ className = '' }: GalaxyProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const galaxyRef = useRef<{
    scene: THREE.Scene | null;
    camera: THREE.PerspectiveCamera | null;
    renderer: THREE.WebGLRenderer | null;
    particles: THREE.Points | null;
    animationFrameId: number | null;
  }>({
    scene: null,
    camera: null,
    renderer: null,
    particles: null,
    animationFrameId: null,
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    galaxyRef.current.scene = scene;

    // Set up camera with adjusted position for slanted view
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 3, 6); // Positioned at an angle
    camera.lookAt(0, 0, 0);
    galaxyRef.current.camera = camera;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    galaxyRef.current.renderer = renderer;

    // Initial galaxy tilt
    // const initialRotation = {
    //   x: -Math.PI * 0.2, // Tilt forward
    //   y: Math.PI * 0.1,  // Slight Y rotation
    //   z: Math.PI * 0.15  // Slight Z tilt
    // };
    
    // Create galaxy particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 25000; // Increased for more detail
    
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);
    
    // Enhanced color palette for more ethereal look
    const colorOptions = [
      new THREE.Color(COLORS.nebulaRose).multiplyScalar(0.8), // Softer pink
      new THREE.Color(COLORS.galaxyCore).multiplyScalar(0.9), // Rich purple
      new THREE.Color(COLORS.tranquilViolet).multiplyScalar(0.7),
      new THREE.Color(COLORS.tealGlow).multiplyScalar(0.6),
      new THREE.Color(COLORS.pureWhite).multiplyScalar(0.9),
    ];

    // Refined galaxy parameters
    const galaxyRadius = 8;
    const branches = 4; // Fewer, more defined arms
    const spin = 2.2; // More spiral effect
    const randomness = 0.2; // Less random for more structure
    const randomnessPower = 2.8;
    // const coreSize = 0.8;
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;

      // Enhanced position calculation for more natural spiral arms
      const radius = Math.random() * galaxyRadius;
      const spinAngle = radius * spin;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      
      // Progressive randomness - less in the core, more in outer regions
      const randomnessFactor = Math.pow(radius / galaxyRadius, 2) * randomness;
      
      const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomnessFactor * radius;
      const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomnessFactor * (radius * 0.3); // Flatter galaxy
      const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomnessFactor * radius;
      
      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
      
      // Progressive size reduction towards edges
      const normalizedRadius = radius / galaxyRadius;
      sizes[i] = Math.max(0.1, 
        0.3 * (1 - normalizedRadius) + 
        0.1 * Math.random()
      );
      
      // Enhanced color distribution
      let finalColor;
      
      if (radius < galaxyRadius * 0.2) {
        // Bright core
        finalColor = new THREE.Color(COLORS.galaxyCore)
          .lerp(new THREE.Color(COLORS.pureWhite), Math.random() * 0.3);
      } else if (radius < galaxyRadius * 0.5) {
        // Mid region - subtle color variations
        const baseColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        finalColor = baseColor.clone().lerp(
          new THREE.Color(COLORS.galaxyCore), 
          Math.pow(1 - normalizedRadius, 2)
        );
      } else {
        // Outer regions - more ethereal
        const outerColor = Math.random() > 0.8 
          ? new THREE.Color(COLORS.softLavender) 
          : new THREE.Color(COLORS.tealGlow);
        finalColor = outerColor.clone()
          .lerp(new THREE.Color(COLORS.indigoNight), normalizedRadius * 0.5);
      }
      
      colors[i3] = finalColor.r;
      colors[i3 + 1] = finalColor.g;
      colors[i3 + 2] = finalColor.b;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Create a custom shader material for more ethereal particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      alphaMap: createCircleTexture(),
    });
    
    // Helper function to create softer particle texture
    function createCircleTexture() {
      const canvas = document.createElement('canvas');
      const size = 128;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        const gradient = ctx.createRadialGradient(
          size / 2, size / 2, 0,
          size / 2, size / 2, size / 2
        );
        gradient.addColorStop(0, 'rgba(255,255,255,0.8)');
        gradient.addColorStop(0.2, 'rgba(255,255,255,0.6)');
        gradient.addColorStop(0.5, 'rgba(255,255,255,0.2)');
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);
      }
      
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    }
    
    // Points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    
    // Apply initial rotation
    // particles.rotation.x = -Math.PI * 0.2;
    // particles.rotation.y = Math.PI * 0.1;
    // particles.rotation.z = Math.PI * 0.15;

    particles.rotation.set(0, 0.2, -0.7);
    
    scene.add(particles);
    galaxyRef.current.particles = particles;
    
    // Subtle scale pulsing
    const pulseScale = { value: 1 };
    gsap.to(pulseScale, {
      value: 1.1,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      onUpdate: () => {
        if (particles.material instanceof THREE.PointsMaterial) {
          particles.material.size = 0.08 * pulseScale.value;
        }
      }
    });
    
    // Handle resize
    const handleResize = () => {
      if (!galaxyRef.current.camera || !galaxyRef.current.renderer || !canvasRef.current) return;
      
      // Get the actual size of the container
      const container = canvasRef.current.parentElement;
      if (!container) return;
      
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      // Update camera
      galaxyRef.current.camera.aspect = width / height;
      galaxyRef.current.camera.updateProjectionMatrix();
      
      // Update renderer
      galaxyRef.current.renderer.setSize(width, height);
      galaxyRef.current.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      if (!galaxyRef.current.scene || !galaxyRef.current.camera || !galaxyRef.current.renderer) return;
      
      // Simple continuous rotation in one direction only
      if (galaxyRef.current.particles) {
       galaxyRef.current.particles.rotation.y += 0.001; // Steady rotation speed
      }
      
      // Render
      galaxyRef.current.renderer.render(galaxyRef.current.scene, galaxyRef.current.camera);
      
      // Call animate again on the next frame
      galaxyRef.current.animationFrameId = window.requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (galaxyRef.current.animationFrameId !== null) {
        window.cancelAnimationFrame(galaxyRef.current.animationFrameId);
      }
      
      if (galaxyRef.current.particles) {
        scene.remove(galaxyRef.current.particles);
        particlesGeometry.dispose();
        particlesMaterial.dispose();
      }
      
      galaxyRef.current = {
        scene: null,
        camera: null,
        renderer: null,
        particles: null,
        animationFrameId: null,
      };
    };
  }, []);

  

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
        style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `radial-gradient(ellipse at center, ${COLORS.galaxyCore}00 0%, ${COLORS.deepPurple}40 25%, ${COLORS.indigoNight}60 50%, #0a033980 75%, #02001099 100%)`,
        backgroundBlendMode: 'multiply',
        opacity: 0.9,
        pointerEvents: 'none', // Optional: So user can click through it
}}
    />
  );
};

export default Galaxy;
