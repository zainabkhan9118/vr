import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Define a different color palette for the About section galaxy
const ABOUT_COLORS = {
  deepIndigo: '#1a0b50',
  darkPurple: '#0a0339',
  subtleViolet: '#362b7b',
  softGlow: '#4a3c8f',
  starWhite: '#ffffff',
  dimGlow: '#6c5ce7',
  nebulaBlue: '#74b9ff'
};

interface SubtleGalaxyProps {
  className?: string;
}

const SubtleGalaxy = ({ className = '' }: SubtleGalaxyProps) => {
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

    // Set up camera - more distant for subtle effect
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(2, 5, 8); // Higher and more distant
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

    // Create subtle nebula-like particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 8000; // Fewer particles for subtlety
    
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);
    
    // Subtle color palette
    const colorOptions = [
      new THREE.Color(ABOUT_COLORS.subtleViolet).multiplyScalar(0.8),
      new THREE.Color(ABOUT_COLORS.softGlow).multiplyScalar(0.6),
      new THREE.Color(ABOUT_COLORS.dimGlow).multiplyScalar(0.5),
      new THREE.Color(ABOUT_COLORS.nebulaBlue).multiplyScalar(0.4),
      new THREE.Color(ABOUT_COLORS.starWhite).multiplyScalar(0.3),
    ];

    // Different galaxy parameters for subtle effect
    const galaxyRadius = 12;
    const branches = 3; // Fewer branches for different look
    const spin = 1.2; // Less spiral
    const randomness = 0.8; // More spread out
    const randomnessPower = 2;
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;

      // Create more cloud-like distribution
      const radius = Math.random() * galaxyRadius;
      const spinAngle = radius * spin;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      
      const randomnessFactor = Math.pow(radius / galaxyRadius, 1.5) * randomness;
      
      const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomnessFactor * radius;
      const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomnessFactor * (radius * 0.8); // More vertical spread
      const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomnessFactor * radius;
      
      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
      
      // Smaller, more uniform sizes
      sizes[i] = Math.random() * 0.8 + 0.2;
      
      // More subtle color distribution
      let finalColor;
      
      if (radius < galaxyRadius * 0.3) {
        // Inner core - subtle glow
        finalColor = new THREE.Color(ABOUT_COLORS.softGlow).multiplyScalar(0.3);
      } else if (radius < galaxyRadius * 0.7) {
        // Mid region - mix of colors
        const baseColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        finalColor = baseColor.clone();
      } else {
        // Outer regions - very dim
        finalColor = new THREE.Color(ABOUT_COLORS.subtleViolet).multiplyScalar(0.1);
      }
      
      colors[i3] = finalColor.r;
      colors[i3 + 1] = finalColor.g;
      colors[i3 + 2] = finalColor.b;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Create subtle material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05, // Slightly larger particles
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      transparent: true,
      opacity: 0.7, // More visible
    });
    
    // Create points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    
    // Different initial rotation for variety
    particles.rotation.x = -Math.PI * 0.1;
    particles.rotation.y = Math.PI * 0.3;
    particles.rotation.z = Math.PI * 0.05;
    
    scene.add(particles);
    galaxyRef.current.particles = particles;
    
    // Handle resize
    const handleResize = () => {
      if (!galaxyRef.current.camera || !galaxyRef.current.renderer || !canvasRef.current) return;
      
      const container = canvasRef.current.parentElement;
      if (!container) return;
      
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      galaxyRef.current.camera.aspect = width / height;
      galaxyRef.current.camera.updateProjectionMatrix();
      
      galaxyRef.current.renderer.setSize(width, height);
      galaxyRef.current.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    
    window.addEventListener('resize', handleResize);
    
    // Very subtle animation loop
    const animate = () => {
      if (!galaxyRef.current.scene || !galaxyRef.current.camera || !galaxyRef.current.renderer) return;
      
      // Very slow, barely noticeable rotation
      if (galaxyRef.current.particles) {
        galaxyRef.current.particles.rotation.y += 0.0002; // Very slow rotation
        
        // Gentle floating motion
        const time = Date.now() * 0.00005;
        galaxyRef.current.particles.rotation.x = -Math.PI * 0.1 + Math.sin(time) * 0.005;
        galaxyRef.current.particles.rotation.z = Math.PI * 0.05 + Math.cos(time * 0.7) * 0.003;
      }
      
      galaxyRef.current.renderer.render(galaxyRef.current.scene, galaxyRef.current.camera);
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
      className={`absolute top-0 left-0 w-full h-full ${className}`}
      style={{ 
        background: `radial-gradient(ellipse at center, ${ABOUT_COLORS.subtleViolet}30 0%, ${ABOUT_COLORS.deepIndigo}50 50%, ${ABOUT_COLORS.darkPurple}90 100%)`,
        opacity: 0.8, // More visible overlay
        pointerEvents: 'none'
      }}
    />
  );
};

export default SubtleGalaxy;
