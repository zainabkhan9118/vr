import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Communication-inspired color palette for Contact section
const CONTACT_COLORS = {
  signalBlue: '#00BCD4',      // Signal transmission blue
  messageGold: '#FFC107',     // Message gold
  connectionPurple: '#9C27B0', // Connection purple
  transmitCyan: '#00E5FF',    // Transmission cyan
  linkSilver: '#E0E0E0',      // Link silver
  pulseWhite: '#FFFFFF',      // Pulse white
  waveGreen: '#4CAF50'        // Communication wave green
};

const ContactGalaxy = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create communication nodes (signal sources/receivers)
    const nodeGeometry = new THREE.BufferGeometry();
    const nodeCount = 80;
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);
    const nodeSizes = new Float32Array(nodeCount);

    // Create wave/pulse rings
    const ringGeometry = new THREE.RingGeometry(0.1, 0.15, 32);
    const rings: Array<{
      mesh: THREE.Mesh;
      scale: number;
      maxScale: number;
      speed: number;
    }> = [];

    // Create signal transmission lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const lineColors = [];

    const colorOptions = [
      new THREE.Color(CONTACT_COLORS.signalBlue),
      new THREE.Color(CONTACT_COLORS.messageGold),
      new THREE.Color(CONTACT_COLORS.connectionPurple),
      new THREE.Color(CONTACT_COLORS.transmitCyan),
      new THREE.Color(CONTACT_COLORS.waveGreen)
    ];

    // Position communication nodes in a spherical network
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      const i3 = i * 3;
      
      // Create spherical distribution for global communication
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      
      const radius = 2.5 + (Math.random() - 0.5) * 0.5;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      nodePositions[i3] = x;
      nodePositions[i3 + 1] = y;
      nodePositions[i3 + 2] = z;

      nodes.push({ x, y, z, index: i });

      // Node colors - vary by type (sender/receiver/relay)
      let color;
      if (i % 10 === 0) {
        // Main communication hubs - bright gold
        color = new THREE.Color(CONTACT_COLORS.messageGold);
      } else if (i % 5 === 0) {
        // Signal boosters - cyan
        color = new THREE.Color(CONTACT_COLORS.transmitCyan);
      } else {
        // Regular nodes - varied
        color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      }

      nodeColors[i3] = color.r;
      nodeColors[i3 + 1] = color.g;
      nodeColors[i3 + 2] = color.b;

      // Node sizes based on importance
      nodeSizes[i] = i % 10 === 0 ? 1.2 : 0.6 + Math.random() * 0.4;
    }

    // Create communication lines between strategic nodes
    for (let i = 0; i < nodes.length; i++) {
      // Connect to a few nearby nodes to create communication paths
      const connectionsPerNode = Math.random() > 0.7 ? 2 : 1;
      
      for (let c = 0; c < connectionsPerNode; c++) {
        const targetIndex = Math.floor(Math.random() * nodes.length);
        if (targetIndex !== i) {
          const node1 = nodes[i];
          const node2 = nodes[targetIndex];

          linePositions.push(node1.x, node1.y, node1.z);
          linePositions.push(node2.x, node2.y, node2.z);

          // Signal transmission colors
          const lineColor = new THREE.Color(CONTACT_COLORS.signalBlue);
          lineColors.push(lineColor.r, lineColor.g, lineColor.b);
          lineColors.push(lineColor.r, lineColor.g, lineColor.b);
        }
      }
    }

    // Set up node geometry
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeometry.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));
    nodeGeometry.setAttribute('size', new THREE.BufferAttribute(nodeSizes, 1));

    const nodeMaterial = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      sizeAttenuation: true
    });

    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodePoints);

    // Set up communication lines
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(lineColors), 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });

    const communicationLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(communicationLines);

    // Create expanding pulse rings for message transmission
    for (let i = 0; i < 5; i++) {
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(CONTACT_COLORS.transmitCyan),
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending
      });

      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.set(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      );
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      
      rings.push({
        mesh: ring,
        scale: 0.1,
        maxScale: 3 + Math.random() * 2,
        speed: 0.01 + Math.random() * 0.02
      });
      
      scene.add(ring);
    }

    // Communication animation
    const animate = () => {
      const time = Date.now() * 0.001;

      // Gentle rotation of the communication network
      nodePoints.rotation.y += 0.002;
      communicationLines.rotation.y += 0.002;

      // Pulsing communication lines to simulate data transmission
      lineMaterial.opacity = 0.3 + Math.sin(time * 2) * 0.2;

      // Node activity to simulate message sending/receiving
      nodeMaterial.opacity = 0.8 + Math.sin(time * 3) * 0.2;

      // Animate pulse rings for message transmission
      rings.forEach((ring) => {
        ring.scale += ring.speed;
        
        if (ring.scale > ring.maxScale) {
          ring.scale = 0.1;
          // Reposition ring randomly
          ring.mesh.position.set(
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4
          );
        }

        ring.mesh.scale.setScalar(ring.scale);
        (ring.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.4 - (ring.scale / ring.maxScale) * 0.4);
      });

      // Subtle breathing effect for the entire network
      const breathe = 1 + Math.sin(time * 0.5) * 0.05;
      nodePoints.scale.setScalar(breathe);

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
      nodeGeometry.dispose();
      lineGeometry.dispose();
      ringGeometry.dispose();
      nodeMaterial.dispose();
      lineMaterial.dispose();
      
      rings.forEach(ring => {
        (ring.mesh.material as THREE.MeshBasicMaterial).dispose();
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

export default ContactGalaxy;
