import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Security-inspired color palette for Policy section
const POLICY_COLORS = {
  shieldGold: '#FFD700',        // Trust gold
  securityBlue: '#1E88E5',     // Security blue
  protectionGreen: '#43A047',   // Protection green
  trustPurple: '#8E24AA',      // Trust purple
  safetyWhite: '#F5F5F5',      // Safety white
  guardSilver: '#90A4AE',      // Guard silver
  vaultCyan: '#00ACC1'         // Digital vault cyan
};

const PolicyGalaxy = () => {
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

    // Create security shield nodes
    const shieldGeometry = new THREE.BufferGeometry();
    const shieldCount = 60;
    const shieldPositions = new Float32Array(shieldCount * 3);
    const shieldColors = new Float32Array(shieldCount * 3);
    const shieldSizes = new Float32Array(shieldCount);

    // Create protective barrier rings
    const barrierGeometry = new THREE.RingGeometry(0.2, 0.25, 6);
    const barriers: Array<{
      mesh: THREE.Mesh;
      rotationSpeed: {
        x: number;
        y: number;
        z: number;
      };
      pulsePhase: number;
    }> = [];

    // Create trust connection lines
    const connectionGeometry = new THREE.BufferGeometry();
    const connectionPositions = [];
    const connectionColors = [];

    // Position security shields in protective layers
    const shields = [];
    for (let i = 0; i < shieldCount; i++) {
      const i3 = i * 3;
      
      // Create layered security perimeter
      const layer = Math.floor(i / (shieldCount / 4)); // 4 security layers
      const angleStep = (2 * Math.PI) / (shieldCount / 4);
      const angle = (i % (shieldCount / 4)) * angleStep + layer * 0.2;
      
      const radius = 1.5 + layer * 0.8;
      const height = (Math.sin(angle * 2) * 0.3) + (Math.random() - 0.5) * 0.2;
      
      const x = Math.cos(angle) * radius;
      const y = height;
      const z = Math.sin(angle) * radius;

      shieldPositions[i3] = x;
      shieldPositions[i3 + 1] = y;
      shieldPositions[i3 + 2] = z;

      shields.push({ x, y, z, layer, index: i });

      // Shield colors based on security level
      let color;
      if (layer === 0) {
        // Core security - gold
        color = new THREE.Color(POLICY_COLORS.shieldGold);
      } else if (layer === 1) {
        // Privacy protection - blue
        color = new THREE.Color(POLICY_COLORS.securityBlue);
      } else if (layer === 2) {
        // Data safety - green
        color = new THREE.Color(POLICY_COLORS.protectionGreen);
      } else {
        // Outer perimeter - purple
        color = new THREE.Color(POLICY_COLORS.trustPurple);
      }

      shieldColors[i3] = color.r;
      shieldColors[i3 + 1] = color.g;
      shieldColors[i3 + 2] = color.b;

      // Shield sizes based on importance
      shieldSizes[i] = layer === 0 ? 1.0 : 0.6 + Math.random() * 0.3;
    }

    // Create security connections between shield layers
    for (let i = 0; i < shields.length; i++) {
      const shield1 = shields[i];
      
      // Connect to shields in adjacent layers for security mesh
      for (let j = 0; j < shields.length; j++) {
        const shield2 = shields[j];
        
        if (Math.abs(shield1.layer - shield2.layer) === 1) {
          const distance = Math.sqrt(
            (shield1.x - shield2.x) ** 2 +
            (shield1.y - shield2.y) ** 2 +
            (shield1.z - shield2.z) ** 2
          );

          if (distance < 2.0 && Math.random() > 0.8) {
            connectionPositions.push(shield1.x, shield1.y, shield1.z);
            connectionPositions.push(shield2.x, shield2.y, shield2.z);

            const connectionColor = new THREE.Color(POLICY_COLORS.vaultCyan);
            connectionColors.push(connectionColor.r, connectionColor.g, connectionColor.b);
            connectionColors.push(connectionColor.r, connectionColor.g, connectionColor.b);
          }
        }
      }
    }

    // Set up shield geometry
    shieldGeometry.setAttribute('position', new THREE.BufferAttribute(shieldPositions, 3));
    shieldGeometry.setAttribute('color', new THREE.BufferAttribute(shieldColors, 3));
    shieldGeometry.setAttribute('size', new THREE.BufferAttribute(shieldSizes, 1));

    const shieldMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      sizeAttenuation: true
    });

    const shieldPoints = new THREE.Points(shieldGeometry, shieldMaterial);
    scene.add(shieldPoints);

    // Set up security connections
    connectionGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(connectionPositions), 3));
    connectionGeometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(connectionColors), 3));

    const connectionMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });

    const securityLines = new THREE.LineSegments(connectionGeometry, connectionMaterial);
    scene.add(securityLines);

    // Create protective barrier rings
    for (let i = 0; i < 6; i++) {
      const barrierMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(POLICY_COLORS.securityBlue),
        transparent: true,
        opacity: 0.2,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending
      });

      const barrier = new THREE.Mesh(barrierGeometry, barrierMaterial);
      const layer = i % 3;
      const radius = 2 + layer * 1.2;
      const angle = (i / 6) * Math.PI * 2;
      
      barrier.position.set(
        Math.cos(angle) * radius * 0.3,
        (Math.random() - 0.5) * 2,
        Math.sin(angle) * radius * 0.3
      );
      barrier.rotation.x = Math.random() * Math.PI;
      barrier.rotation.y = Math.random() * Math.PI;
      barrier.rotation.z = Math.random() * Math.PI;
      
      barriers.push({
        mesh: barrier,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        },
        pulsePhase: Math.random() * Math.PI * 2
      });
      
      scene.add(barrier);
    }

    // Security protection animation
    const animate = () => {
      const time = Date.now() * 0.001;

      // Steady rotation of security shields
      shieldPoints.rotation.y += 0.003;
      securityLines.rotation.y += 0.003;

      // Security scan effect - pulsing connections
      connectionMaterial.opacity = 0.3 + Math.sin(time * 1.5) * 0.2;

      // Shield activity to simulate active protection
      shieldMaterial.opacity = 0.8 + Math.sin(time * 2) * 0.1;

      // Animate protective barriers
      barriers.forEach((barrier, index) => {
        // Rotate barriers for active protection
        barrier.mesh.rotation.x += barrier.rotationSpeed.x;
        barrier.mesh.rotation.y += barrier.rotationSpeed.y;
        barrier.mesh.rotation.z += barrier.rotationSpeed.z;

        // Pulse barriers for security scanning
        barrier.pulsePhase += 0.02;
        const pulse = 1 + Math.sin(barrier.pulsePhase) * 0.1;
        barrier.mesh.scale.setScalar(pulse);
        
        // Opacity pulsing for security sweep
        (barrier.mesh.material as THREE.MeshBasicMaterial).opacity = 0.15 + Math.sin(time + index) * 0.05;
      });

      // Overall protective field breathing
      const protection = 1 + Math.sin(time * 0.8) * 0.03;
      shieldPoints.scale.setScalar(protection);

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
      shieldGeometry.dispose();
      connectionGeometry.dispose();
      barrierGeometry.dispose();
      shieldMaterial.dispose();
      connectionMaterial.dispose();
      
      barriers.forEach(barrier => {
        (barrier.mesh.material as THREE.MeshBasicMaterial).dispose();
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{ pointerEvents: 'none', opacity: 0.75 }}
    />
  );
};

export default PolicyGalaxy;
