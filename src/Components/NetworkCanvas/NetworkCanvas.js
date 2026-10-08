import React, { useEffect, useRef, useState } from 'react';
import './NetworkCanvas.css';

/**
 * NetworkCanvas — lightweight vanilla Canvas2D live network background.
 * Realistic Circuit-Board simulation: 45-degree trace routing, IC pads,
 * clustered hubs, and packet-burst signals traveling along routed traces.
 */
const NetworkCanvas = () => {
  const canvasRef = useRef(null);
  const [hasSupport, setHasSupport] = useState(true);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHasSupport(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setHasSupport(false);
      return;
    }

    let w, h;
    let animId = null;
    let isVisible = true;
    let isActive = true;

    // Offscreen canvas for caching the static circuit board
    const bgCanvas = document.createElement('canvas');
    const bgCtx2d = bgCanvas.getContext('2d');

    let paths = [];
    let signals = [];
    const SIGNAL_COUNT = 35;
    const CELL = 24;

    const spawnSignal = () => {
      const path = paths[Math.floor(Math.random() * paths.length)];
      return {
        path,
        progress: 0,
        speed: (0.3 + Math.random() * 0.8) * 1.5, // Logical px per frame
        length: 50 + Math.random() * 100, // Length of the traveling burst tail
        alpha: 0.6 + Math.random() * 0.4
      };
    };

    // ─── Procedural Circuit Board Generation ─────────────────────────────
    const buildBoard = () => {
      paths = [];
      
      // 1. Generate Hubs (centers of component density)
      const hubs = Array.from({ length: 6 }, () => ({
        x: Math.floor((Math.random() * w) / CELL) * CELL,
        y: Math.floor((Math.random() * h) / CELL) * CELL
      }));

      // 2. Generate Nodes (Vias and IC Pads clustered around hubs)
      const nodes = [];
      for (let i = 0; i < 100; i++) {
        const hub = hubs[Math.floor(Math.random() * hubs.length)];
        const ox = (Math.floor(Math.random() * 15) - 7) * CELL;
        const oy = (Math.floor(Math.random() * 15) - 7) * CELL;
        nodes.push({
          x: hub.x + ox,
          y: hub.y + oy,
          type: Math.random() > 0.85 ? 'pad' : 'via'
        });
      }

      // 3. Generate Realistic PCB Traces (45-degree routing)
      for (let i = 0; i < 80; i++) {
        const n1 = nodes[Math.floor(Math.random() * nodes.length)];
        const n2 = nodes[Math.floor(Math.random() * nodes.length)];
        if (n1 === n2 || (n1.x === n2.x && n1.y === n2.y)) continue;

        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const pts = [{ x: n1.x, y: n1.y }];

        // Route with straight and 45-degree diagonal segments
        if (Math.random() > 0.5) {
          // Diagonal first
          const diag = Math.min(Math.abs(dx), Math.abs(dy));
          pts.push({ x: n1.x + diag * Math.sign(dx), y: n1.y + diag * Math.sign(dy) });
          pts.push({ x: n2.x, y: n2.y });
        } else {
          // Straight first
          if (Math.abs(dx) > Math.abs(dy)) {
            const str = Math.abs(dx) - Math.abs(dy);
            pts.push({ x: n1.x + str * Math.sign(dx), y: n1.y });
            pts.push({ x: n2.x, y: n2.y });
          } else {
            const str = Math.abs(dy) - Math.abs(dx);
            pts.push({ x: n1.x, y: n1.y + str * Math.sign(dy) });
            pts.push({ x: n2.x, y: n2.y });
          }
        }

        // Calculate segment metrics
        let totalLen = 0;
        const segments = [];
        for (let j = 0; j < pts.length - 1; j++) {
          const len = Math.hypot(pts[j+1].x - pts[j].x, pts[j+1].y - pts[j].y);
          if (len > 0.1) {
            segments.push({ p1: pts[j], p2: pts[j+1], len });
            totalLen += len;
          }
        }

        if (totalLen > 0) paths.push({ segments, totalLen });
      }

      // 4. Render Static Board to Offscreen Canvas for perf
      bgCtx2d.clearRect(0, 0, w, h);

      // Draw faint background traces
      bgCtx2d.strokeStyle = 'rgba(0, 255, 127, 0.12)';
      bgCtx2d.lineWidth = 1;
      bgCtx2d.lineJoin = 'round';
      bgCtx2d.beginPath();
      paths.forEach(p => {
        bgCtx2d.moveTo(p.segments[0].p1.x, p.segments[0].p1.y);
        p.segments.forEach(s => bgCtx2d.lineTo(s.p2.x, s.p2.y));
      });
      bgCtx2d.stroke();

      // Draw Vias and Pads
      nodes.forEach(n => {
        if (n.type === 'pad') {
          bgCtx2d.fillStyle = 'rgba(0, 255, 127, 0.15)';
          bgCtx2d.fillRect(n.x - 3, n.y - 3, 6, 6);
          bgCtx2d.strokeStyle = 'rgba(0, 255, 127, 0.4)';
          bgCtx2d.strokeRect(n.x - 5, n.y - 5, 10, 10);
        } else {
          bgCtx2d.fillStyle = 'rgba(0, 255, 127, 0.25)';
          bgCtx2d.beginPath();
          bgCtx2d.arc(n.x, n.y, 2, 0, Math.PI * 2);
          bgCtx2d.fill();
        }
      });

      // Re-initialize signals
      signals = Array.from({ length: Math.min(SIGNAL_COUNT, paths.length) }, spawnSignal);
    };

    // ─── Resize Handler ──────────────────────────────────────────────────
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      bgCanvas.width = w * dpr;
      bgCanvas.height = h * dpr;
      bgCtx2d.setTransform(dpr, 0, 0, dpr, 0, 0);

      buildBoard();
    };

    // ─── Animation Loop ──────────────────────────────────────────────────
    const getPointAt = (path, dist) => {
      if (dist <= 0) return path.segments[0].p1;
      if (dist >= path.totalLen) return path.segments[path.segments.length-1].p2;
      let acc = 0;
      for (const s of path.segments) {
        if (acc + s.len >= dist) {
          const t = (dist - acc) / s.len;
          return {
            x: s.p1.x + (s.p2.x - s.p1.x) * t,
            y: s.p1.y + (s.p2.y - s.p1.y) * t
          };
        }
        acc += s.len;
      }
      return path.segments[path.segments.length-1].p2;
    };

    const updateAndDraw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(bgCanvas, 0, 0, w, h);

      signals.forEach(sig => {
        // Move signal forward
        sig.progress += sig.speed / sig.path.totalLen;
        if (sig.progress >= 1 + (sig.length / sig.path.totalLen)) {
          Object.assign(sig, spawnSignal());
          return;
        }

        const headDist = sig.progress * sig.path.totalLen;
        const tailDist = headDist - sig.length;

        const tail = getPointAt(sig.path, tailDist);
        const head = getPointAt(sig.path, headDist);

        // Dashed lines to represent "packet bursts"
        ctx.setLineDash([4, 6]);
        ctx.lineWidth = 1.5;
        ctx.lineJoin = 'round';

        // Gradient fading out behind the signal head
        if (Math.abs(head.x - tail.x) < 0.1 && Math.abs(head.y - tail.y) < 0.1) {
          ctx.strokeStyle = `rgba(0, 255, 127, ${sig.alpha})`;
        } else {
          const grad = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y);
          grad.addColorStop(0, 'rgba(0, 255, 127, 0)');
          grad.addColorStop(0.3, `rgba(0, 255, 127, ${sig.alpha * 0.4})`);
          grad.addColorStop(1, `rgba(0, 255, 127, ${sig.alpha})`);
          ctx.strokeStyle = grad;
        }

        ctx.beginPath();
        let started = false;
        let acc = 0;
        
        // Only stroke the segments that overlap the signal tail..head
        for (const s of sig.path.segments) {
          const sStart = acc;
          const sEnd = acc + s.len;
          
          if (sEnd > tailDist && sStart < headDist) {
            const startT = Math.max(0, (tailDist - sStart) / s.len);
            const endT = Math.min(1, (headDist - sStart) / s.len);
            
            const px1 = s.p1.x + (s.p2.x - s.p1.x) * startT;
            const py1 = s.p1.y + (s.p2.y - s.p1.y) * startT;
            const px2 = s.p1.x + (s.p2.x - s.p1.x) * endT;
            const py2 = s.p1.y + (s.p2.y - s.p1.y) * endT;

            if (!started) {
              ctx.moveTo(px1, py1);
              started = true;
            } else {
              ctx.lineTo(px1, py1);
            }
            ctx.lineTo(px2, py2);
          }
          acc += s.len;
        }
        ctx.stroke();
        ctx.setLineDash([]); // Reset dash immediately

        // Leading bright spark at the head of the signal
        if (headDist > 0 && headDist < sig.path.totalLen) {
          ctx.fillStyle = `rgba(0, 255, 127, ${sig.alpha * 1.2})`;
          ctx.beginPath();
          ctx.arc(head.x, head.y, 2, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(0, 255, 127, ${sig.alpha * 0.3})`;
          ctx.beginPath();
          ctx.arc(head.x, head.y, 5, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    const loop = () => {
      if (!isVisible || !isActive) { animId = null; return; }
      updateAndDraw();
      animId = requestAnimationFrame(loop);
    };

    // ─── Visibility and Perf Guards ──────────────────────────────────────
    const obs = new IntersectionObserver(entries => {
      isVisible = entries[0].isIntersecting;
      if (isVisible && isActive && !animId) animId = requestAnimationFrame(loop);
    }, { threshold: 0.05 });
    obs.observe(canvas);

    const onVisChange = () => {
      isActive = !document.hidden;
      if (isActive && isVisible && !animId) animId = requestAnimationFrame(loop);
    };
    document.addEventListener('visibilitychange', onVisChange);

    const onResize = () => { resize(); };
    window.addEventListener('resize', onResize, { passive: true });

    // ─── Init ────────────────────────────────────────────────────────────
    resize();
    animId = requestAnimationFrame(loop);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      obs.disconnect();
      document.removeEventListener('visibilitychange', onVisChange);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  if (!hasSupport) {
    // Static PCB Fallback for reduced-motion
    return (
      <div className="network-fallback" aria-hidden="true">
        <svg className="fallback-svg" viewBox="0 0 900 500" preserveAspectRatio="xMidYMid slice">
          <rect x="200" y="150" width="8" height="8" fill="rgba(0,255,127,0.15)" stroke="rgba(0,255,127,0.4)" />
          <rect x="600" y="350" width="8" height="8" fill="rgba(0,255,127,0.15)" stroke="rgba(0,255,127,0.4)" />
          <circle cx="450" cy="200" r="3" fill="rgba(0,255,127,0.25)" />
          <polyline points="204,154 300,154 346,200 450,200" stroke="rgba(0,255,127,0.2)" strokeWidth="1" fill="none" />
          <polyline points="450,200 500,250 500,350 600,350" stroke="rgba(0,255,127,0.15)" strokeWidth="1" fill="none" />
          <circle cx="346" cy="200" r="3" fill="rgba(0,255,127,0.8)" />
          <circle cx="500" cy="300" r="3" fill="rgba(0,255,127,0.6)" />
        </svg>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="network-canvas"
      aria-hidden="true"
    />
  );
};

export default NetworkCanvas;
