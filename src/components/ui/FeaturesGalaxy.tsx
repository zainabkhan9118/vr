import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Tech-inspired color palette for Features section
const FEATURES_COLORS = {
  neuralBlue: '#4FC3F7',     // Neural network blue
  synapsePurple: '#BA68C8',  // Synapse purple
  dataGold: '#FFB74D',       // Data flow gold
  connectionCyan: '#4DD0E1', // Connection cyan
  mindSilver: '#B0BEC5',     // Mind silver
  techWhite: '#ECEFF1',      // Tech white
  networkGreen: '#81C784'    // Network green
};

const FeaturesGalaxy = () => {
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

    // Create neural network nodes
    const nodeGeometry = new THREE.BufferGeometry();
    const nodeCount = 150; // Strategic node placement
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);
    const nodeSizes = new Float32Array(nodeCount);

    // Create connection lines
    const connectionGeometry = new THREE.BufferGeometry();
    const connectionPositions = [];
    const connectionColors = [];

    const colorOptions = [
      new THREE.Color(FEATURES_COLORS.neuralBlue),
      new THREE.Color(FEATURES_COLORS.synapsePurple),
      new THREE.Color(FEATURES_COLORS.dataGold),
      new THREE.Color(FEATURES_COLORS.connectionCyan),
      new THREE.Color(FEATURES_COLORS.techWhite),
      new THREE.Color(FEATURES_COLORS.networkGreen)
    ];

    // Position nodes in a sophisticated 3D grid with organic variation
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      const i3 = i * 3;
      
      // Create layered network structure
      const layer = Math.floor(i / (nodeCount / 5)); // 5 layers
      const angleStep = (2 * Math.PI) / (nodeCount / 5);
      const angle = (i % (nodeCount / 5)) * angleStep;
      
      const radius = 2 + layer * 0.8 + (Math.random() - 0.5) * 0.4;
      const height = (layer - 2) * 0.6 + (Math.random() - 0.5) * 0.3;
      
      const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.2;
      const y = height;
      const z = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.2;

      nodePositions[i3] = x;
      nodePositions[i3 + 1] = y;
      nodePositions[i3 + 2] = z;

      nodes.push({ x, y, z, index: i });

      // Node colors based on layer/function
      let color;
      if (layer === 0 || layer === 4) {
        // Input/Output layers - bright
        color = new THREE.Color(FEATURES_COLORS.neuralBlue);
      } else if (layer === 2) {
        // Central processing - gold
        color = new THREE.Color(FEATURES_COLORS.dataGold);
      } else {
        // Hidden layers - varied
        color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      }

      nodeColors[i3] = color.r;
      nodeColors[i3 + 1] = color.g;
      nodeColors[i3 + 2] = color.b;

      // Node sizes based on importance
      nodeSizes[i] = 0.8 + Math.random() * 0.4;
    }

    // Create intelligent connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const node1 = nodes[i];
        const node2 = nodes[j];
        
        const distance = Math.sqrt(
          (node1.x - node2.x) ** 2 +
          (node1.y - node2.y) ** 2 +
          (node1.z - node2.z) ** 2
        );

        // Connect nodes within reasonable distance
        if (distance < 1.8 && Math.random() > 0.7) {
          connectionPositions.push(node1.x, node1.y, node1.z);
          connectionPositions.push(node2.x, node2.y, node2.z);

          // Connection colors
          const connectionColor = new THREE.Color(FEATURES_COLORS.connectionCyan);
          connectionColors.push(connectionColor.r, connectionColor.g, connectionColor.b);
          connectionColors.push(connectionColor.r, connectionColor.g, connectionColor.b);
        }
      }
    }

    // Set up node geometry
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeometry.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));
    nodeGeometry.setAttribute('size', new THREE.BufferAttribute(nodeSizes, 1));

    const nodeMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      sizeAttenuation: true
    });

    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodePoints);

    // Set up connection geometry
    connectionGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(connectionPositions), 3));
    connectionGeometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(connectionColors), 3));

    const connectionMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });

    const connectionLines = new THREE.LineSegments(connectionGeometry, connectionMaterial);
    scene.add(connectionLines);

    // Sophisticated neural network animation
    const animate = () => {
      // Gentle rotation of the entire network
      nodePoints.rotation.y += 0.001;
      connectionLines.rotation.y += 0.001;

      // Pulsing connections to simulate data flow
      const time = Date.now() * 0.002;
      connectionMaterial.opacity = 0.2 + Math.sin(time) * 0.15;

      // Node brightness variation to simulate neural activity
      nodeMaterial.opacity = 0.7 + Math.sin(time * 1.5) * 0.2;

      // Subtle scale breathing
      const scale = 1 + Math.sin(time * 0.8) * 0.02;
      nodePoints.scale.setScalar(scale);
      connectionLines.scale.setScalar(scale);

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
      nodeGeometry.dispose();
      connectionGeometry.dispose();
      nodeMaterial.dispose();
      connectionMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{ pointerEvents: 'none', opacity: 0.8 }}
    />
  );
};

export default FeaturesGalaxy;
