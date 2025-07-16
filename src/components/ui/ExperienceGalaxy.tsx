import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// VR Experience color palette 
const EXPERIENCE_COLORS = {
  portalBlue: '#00D4FF',      // VR portal blue
  dimensionPurple: '#8B5CF6', // Dimensional purple
  immersiveGold: '#F59E0B',   // Immersive gold
  virtualCyan: '#06B6D4',     // Virtual cyan
  experienceWhite: '#F8FAFC', // Experience white
  depthPink: '#EC4899',       // Depth pink
  realityGreen: '#10B981'     // Augmented reality green
};

const ExperienceGalaxy = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create VR portal rings
    const portalRings: Array<{
      mesh: THREE.Mesh;
      speed: number;
      originalZ: number;
    }> = [];
    for (let i = 0; i < 8; i++) {
      const ringGeometry = new THREE.RingGeometry(0.5 + i * 0.3, 0.6 + i * 0.3, 32);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(i % 2 === 0 ? EXPERIENCE_COLORS.portalBlue : EXPERIENCE_COLORS.dimensionPurple),
        transparent: true,
        opacity: 0.6 - i * 0.05,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending
      });

      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.z = -i * 0.5;
      ring.rotation.x = Math.PI / 2;
      
      portalRings.push({
        mesh: ring,
        speed: 0.01 + i * 0.002,
        originalZ: -i * 0.5
      });
      
      scene.add(ring);
    }

    // Create immersive particle field
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3);

    const colorOptions = [
      new THREE.Color('#FFFFFF'),        // Pure white stars
      new THREE.Color('#E8F4FD'),        // Very light blue
      new THREE.Color('#D1E7F0'),        // Soft blue-white
      new THREE.Color('#F0F8FF'),        // Alice blue
      new THREE.Color('#E6F3FF'),        // Light sky blue
      new THREE.Color('#F5F5F5')         // Off white
    ];

    // Create VR experience particle field
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Create tunnel-like distribution for VR immersion
      const angle = Math.random() * Math.PI * 2;
      const radius = 1 + Math.random() * 4;
      const depth = (Math.random() - 0.5) * 10;
      
      particlePositions[i3] = Math.cos(angle) * radius;
      particlePositions[i3 + 1] = Math.sin(angle) * radius;
      particlePositions[i3 + 2] = depth;

      // Forward movement velocities for VR travel effect
      particleVelocities[i3] = 0;
      particleVelocities[i3 + 1] = 0;
      particleVelocities[i3 + 2] = 0.02 + Math.random() * 0.03;

      // VR experience colors
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      particleColors[i3] = color.r;
      particleColors[i3 + 1] = color.g;
      particleColors[i3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Create dimensional gateway effect with wireframe spheres
    const gatewayGeometry = new THREE.SphereGeometry(1, 16, 12);
    const gateways: Array<{
      mesh: THREE.Mesh;
      rotationSpeed: {
        x: number;
        y: number;
        z: number;
      };
      pulsePhase: number;
    }> = [];

    for (let i = 0; i < 4; i++) {
      const gatewayMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(EXPERIENCE_COLORS.portalBlue),
        wireframe: true,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
      });

      const gateway = new THREE.Mesh(gatewayGeometry, gatewayMaterial);
      gateway.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 8
      );
      
      gateways.push({
        mesh: gateway,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        pulsePhase: Math.random() * Math.PI * 2
      });

      scene.add(gateway);
    }

    // VR Experience animation
    const animate = () => {
      const time = Date.now() * 0.001;

      // Animate portal rings - create tunnel effect
      portalRings.forEach((ring, index) => {
        ring.mesh.rotation.z += ring.speed;
        
        // Move rings forward and reset for infinite tunnel
        ring.mesh.position.z += 0.05;
        if (ring.mesh.position.z > 2) {
          ring.mesh.position.z = ring.originalZ - 4;
        }

        // Pulsing opacity for dimensional effect
        (ring.mesh.material as THREE.MeshBasicMaterial).opacity = (0.6 - index * 0.05) + Math.sin(time * 2 + index) * 0.2;
      });

      // Animate VR travel particles
      const positions = particles.geometry.getAttribute('position');
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Move particles toward viewer (VR travel effect)
        positions.array[i3 + 2] += particleVelocities[i3 + 2];
        
        // Reset particles that have passed through
        if (positions.array[i3 + 2] > 5) {
          positions.array[i3 + 2] = -5;
          
          // Respawn at tunnel edge
          const angle = Math.random() * Math.PI * 2;
          const radius = 1 + Math.random() * 4;
          positions.array[i3] = Math.cos(angle) * radius;
          positions.array[i3 + 1] = Math.sin(angle) * radius;
        }
      }
      positions.needsUpdate = true;

      // Animate dimensional gateways
      gateways.forEach((gateway) => {
        gateway.mesh.rotation.x += gateway.rotationSpeed.x;
        gateway.mesh.rotation.y += gateway.rotationSpeed.y;
        gateway.mesh.rotation.z += gateway.rotationSpeed.z;

        // Pulsing scale for dimensional breathing
        gateway.pulsePhase += 0.02;
        const scale = 1 + Math.sin(gateway.pulsePhase) * 0.3;
        gateway.mesh.scale.setScalar(scale);
      });

      // Camera slight movement for immersion
      camera.position.x = Math.sin(time * 0.5) * 0.1;
      camera.position.y = Math.cos(time * 0.3) * 0.05;

      renderer.render(scene, camera);
      animationId.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId.current) cancelAnimationFrame(animationId.current);
      
      // Dispose of all geometries and materials
      particleGeometry.dispose();
      gatewayGeometry.dispose();
      particleMaterial.dispose();
      
      portalRings.forEach(ring => {
        (ring.mesh.material as THREE.MeshBasicMaterial).dispose();
      });
      
      gateways.forEach(gateway => {
        (gateway.mesh.material as THREE.MeshBasicMaterial).dispose();
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{ pointerEvents: 'none', opacity: 0.7 }}
    />
  );
};

export default ExperienceGalaxy;
