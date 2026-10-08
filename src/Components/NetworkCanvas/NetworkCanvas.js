import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './NetworkCanvas.css';

const NetworkCanvas = () => {
  const containerRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setReducedMotion(true);
      return;
    }

    // Check WebGL availability
    const checkWebGL = () => {
      try {
        const testCanvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl'))
        );
      } catch (e) {
        return false;
      }
    };

    if (!checkWebGL()) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 500;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 45;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5)); // Capped at 1.5 per budget
      container.appendChild(renderer.domElement);
    } catch (err) {
      setHasWebGL(false);
      return;
    }

    // 2. Network Graph Nodes Setup
    const NODE_COUNT = 48;
    const CONNECT_DIST = 13.5;
    const nodes = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * 55,
        y: (Math.random() - 0.5) * 36,
        z: (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 0.02,
        vy: (Math.random() - 0.5) * 0.02,
        vz: (Math.random() - 0.5) * 0.015,
      });
    }

    // Node Points Material & Geometry
    const nodeGeometry = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      nodePositions[i * 3] = nodes[i].x;
      nodePositions[i * 3 + 1] = nodes[i].y;
      nodePositions[i * 3 + 2] = nodes[i].z;
    }
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));

    // Circular soft-glow node sprite texture
    const createNodeTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(0, 255, 127, 1)');
      gradient.addColorStop(0.35, 'rgba(0, 255, 127, 0.7)');
      gradient.addColorStop(1, 'rgba(0, 255, 127, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
      return new THREE.CanvasTexture(canvas);
    };

    const nodeTexture = createNodeTexture();
    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x00ff7f,
      size: 2.2,
      map: nodeTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const pointsMesh = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(pointsMesh);

    // Dynamic Line Segments (Edges)
    const MAX_LINES = 180;
    const linePositions = new Float32Array(MAX_LINES * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ff7f,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // Traveling Data Packets (Telemetry pulses)
    const PACKET_COUNT = 6;
    const packets = [];
    for (let i = 0; i < PACKET_COUNT; i++) {
      packets.push({
        source: Math.floor(Math.random() * NODE_COUNT),
        target: Math.floor(Math.random() * NODE_COUNT),
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.008,
      });
    }

    const packetGeometry = new THREE.BufferGeometry();
    const packetPositions = new Float32Array(PACKET_COUNT * 3);
    packetGeometry.setAttribute('position', new THREE.BufferAttribute(packetPositions, 3));

    const packetMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 3.2,
      map: nodeTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const packetMesh = new THREE.Points(packetGeometry, packetMaterial);
    scene.add(packetMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouseX = (clientX / width) * 2 - 1;
      mouseY = -(clientY / height) * 2 + 1;
      targetCameraX = mouseX * 5;
      targetCameraY = mouseY * 3.5;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 3. Render Loop & Throttling
    let isVisible = true;
    let isTabActive = true;
    let animationFrameId = null;

    const updateGraph = () => {
      // Gentle node drift within bounds
      const posArray = pointsMesh.geometry.attributes.position.array;
      for (let i = 0; i < NODE_COUNT; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        // Bounce back within bounds
        if (node.x < -28 || node.x > 28) node.vx *= -1;
        if (node.y < -18 || node.y > 18) node.vy *= -1;
        if (node.z < -10 || node.z > 10) node.vz *= -1;

        posArray[i * 3] = node.x;
        posArray[i * 3 + 1] = node.y;
        posArray[i * 3 + 2] = node.z;
      }
      pointsMesh.geometry.attributes.position.needsUpdate = true;

      // Connect neighbor nodes
      const linePosArray = lineMesh.geometry.attributes.position.array;
      let lineVertexIdx = 0;
      let activeConnections = [];

      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < CONNECT_DIST * CONNECT_DIST && lineVertexIdx < MAX_LINES * 6) {
            linePosArray[lineVertexIdx++] = nodes[i].x;
            linePosArray[lineVertexIdx++] = nodes[i].y;
            linePosArray[lineVertexIdx++] = nodes[i].z;
            linePosArray[lineVertexIdx++] = nodes[j].x;
            linePosArray[lineVertexIdx++] = nodes[j].y;
            linePosArray[lineVertexIdx++] = nodes[j].z;

            activeConnections.push({ a: i, b: j });
          }
        }
      }

      // Clear remaining line coordinates
      for (let k = lineVertexIdx; k < MAX_LINES * 6; k++) {
        linePosArray[k] = 0;
      }
      lineMesh.geometry.attributes.position.needsUpdate = true;

      // Update traveling packet pulses along active connections
      if (activeConnections.length > 0) {
        const packetPosArray = packetMesh.geometry.attributes.position.array;
        for (let p = 0; p < PACKET_COUNT; p++) {
          const packet = packets[p];
          packet.progress += packet.speed;

          if (packet.progress >= 1) {
            packet.progress = 0;
            const randomConn = activeConnections[Math.floor(Math.random() * activeConnections.length)];
            packet.source = randomConn.a;
            packet.target = randomConn.b;
          }

          const nodeA = nodes[packet.source] || nodes[0];
          const nodeB = nodes[packet.target] || nodes[1];

          packetPosArray[p * 3] = nodeA.x + (nodeB.x - nodeA.x) * packet.progress;
          packetPosArray[p * 3 + 1] = nodeA.y + (nodeB.y - nodeA.y) * packet.progress;
          packetPosArray[p * 3 + 2] = nodeA.z + (nodeB.z - nodeA.z) * packet.progress;
        }
        packetMesh.geometry.attributes.position.needsUpdate = true;
      }

      // Smooth camera interpolation
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
    };

    const animate = () => {
      if (!isVisible || !isTabActive) {
        animationFrameId = null;
        return;
      }

      updateGraph();
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    // 4. Pause Rendering when Offscreen or Inactive
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && isTabActive && !animationFrameId) {
            animationFrameId = requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isVisible && !animationFrameId) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 5. Handle Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Start initial loop
    animationFrameId = requestAnimationFrame(animate);

    // 6. Complete Cleanup on Unmount
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Dispose three.js resources
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      nodeTexture.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      packetGeometry.dispose();
      packetMaterial.dispose();

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  // 2D SVG / CSS Static Fallback for Reduced Motion or WebGL failure
  if (reducedMotion || !hasWebGL) {
    return (
      <div className="network-fallback" aria-hidden="true">
        <svg className="fallback-svg" viewBox="0 0 800 400" preserveAspectRatio="none">
          <line x1="100" y1="80" x2="350" y2="150" stroke="rgba(0, 255, 127, 0.2)" strokeWidth="1" />
          <line x1="350" y1="150" x2="600" y2="90" stroke="rgba(0, 255, 127, 0.2)" strokeWidth="1" />
          <line x1="350" y1="150" x2="450" y2="300" stroke="rgba(0, 255, 127, 0.2)" strokeWidth="1" />
          <line x1="200" y1="320" x2="450" y2="300" stroke="rgba(0, 255, 127, 0.2)" strokeWidth="1" />
          <line x1="450" y1="300" x2="720" y2="280" stroke="rgba(0, 255, 127, 0.2)" strokeWidth="1" />
          <circle cx="100" cy="80" r="3" fill="#00ff7f" opacity="0.6" />
          <circle cx="350" cy="150" r="4" fill="#00ff7f" opacity="0.8" />
          <circle cx="600" cy="90" r="3" fill="#00ff7f" opacity="0.6" />
          <circle cx="200" cy="320" r="3" fill="#00ff7f" opacity="0.5" />
          <circle cx="450" cy="300" r="4" fill="#00ff7f" opacity="0.8" />
          <circle cx="720" cy="280" r="3" fill="#00ff7f" opacity="0.6" />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="network-canvas-container"
      aria-hidden="true"
    />
  );
};

export default NetworkCanvas;
