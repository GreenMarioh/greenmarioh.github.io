import React, { useEffect, useRef, useState } from 'react';
import './NetworkCanvas.css';

/**
 * NetworkCanvas — lightweight vanilla WebGL/Canvas2D live network background.
 * Design language: dark terminal grid + sparse glowing signal traces.
 * No heavy library. Strict perf budget: pauses on tab blur & scroll out.
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

    // ─── Resize ────────────────────────────────────────────────────────────
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid();
    };

    // ─── Grid dots (circuit-board intersection points) ─────────────────────
    const CELL = 52; // grid spacing in logical px
    let gridDots = [];

    const buildGrid = () => {
      gridDots = [];
      const cols = Math.ceil(w / CELL) + 2;
      const rows = Math.ceil(h / CELL) + 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          gridDots.push({ x: c * CELL, y: r * CELL });
        }
      }
    };

    // ─── Signal traces (orthogonal paths that travel along grid lines) ─────
    const TRACE_COUNT = 14;
    let traces = [];

    const pickGridPoint = () => {
      // Snap to nearest grid node
      const col = Math.floor(Math.random() * Math.ceil(w / CELL));
      const row = Math.floor(Math.random() * Math.ceil(h / CELL));
      return { x: col * CELL, y: row * CELL };
    };

    const makeTrace = () => {
      const start = pickGridPoint();
      // Orthogonal segments: pick a direction (H or V), travel several cells
      const segments = [];
      let cx = start.x;
      let cy = start.y;
      const segCount = 2 + Math.floor(Math.random() * 4);

      for (let i = 0; i < segCount; i++) {
        const horizontal = Math.random() > 0.5;
        const cells = (1 + Math.floor(Math.random() * 5)) * CELL;
        const dir = Math.random() > 0.5 ? 1 : -1;
        const nx = horizontal ? cx + cells * dir : cx;
        const ny = horizontal ? cy : cy + cells * dir;
        segments.push({ x1: cx, y1: cy, x2: nx, y2: ny });
        cx = nx;
        cy = ny;
      }

      // Total length for progress tracking
      const totalLen = segments.reduce((sum, s) => {
        return sum + Math.abs(s.x2 - s.x1) + Math.abs(s.y2 - s.y1);
      }, 0);

      return {
        segments,
        totalLen,
        progress: Math.random(), // 0 → 1
        speed: 0.12 + Math.random() * 0.22, // logical px per frame
        alpha: 0.18 + Math.random() * 0.28,
        width: Math.random() > 0.7 ? 1.5 : 1,
      };
    };

    const initTraces = () => {
      traces = Array.from({ length: TRACE_COUNT }, makeTrace);
    };

    // ─── Pulse heads (bright dot at the front of each active trace) ────────
    const getHeadPos = (trace) => {
      const dist = trace.progress * trace.totalLen;
      let acc = 0;
      for (const seg of trace.segments) {
        const len = Math.abs(seg.x2 - seg.x1) + Math.abs(seg.y2 - seg.y1);
        if (acc + len >= dist) {
          const t = (dist - acc) / len;
          return {
            x: seg.x1 + (seg.x2 - seg.x1) * t,
            y: seg.y1 + (seg.y2 - seg.y1) * t,
          };
        }
        acc += len;
      }
      // Past end
      const last = trace.segments[trace.segments.length - 1];
      return { x: last.x2, y: last.y2 };
    };

    // ─── Draw ──────────────────────────────────────────────────────────────
    const GREEN = '#00ff7f';

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // 1. Faint grid dots at every intersection
      ctx.fillStyle = 'rgba(0, 255, 127, 0.1)';
      for (const dot of gridDots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Signal traces (drawn only up to current progress)
      for (const trace of traces) {
        const dist = trace.progress * trace.totalLen;
        let acc = 0;

        ctx.strokeStyle = `rgba(0, 255, 127, ${trace.alpha})`;
        ctx.lineWidth = trace.width;
        ctx.lineCap = 'square';

        for (const seg of trace.segments) {
          const segLen = Math.abs(seg.x2 - seg.x1) + Math.abs(seg.y2 - seg.y1);
          const remaining = dist - acc;

          if (remaining <= 0) break;

          const t = Math.min(remaining / segLen, 1);
          const ex = seg.x1 + (seg.x2 - seg.x1) * t;
          const ey = seg.y1 + (seg.y2 - seg.y1) * t;

          ctx.beginPath();
          ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(ex, ey);
          ctx.stroke();

          acc += segLen;
        }

        // 3. Glowing pulse head at the front
        const head = getHeadPos(trace);
        const grd = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 7);
        grd.addColorStop(0, `rgba(0, 255, 127, ${trace.alpha * 2.5})`);
        grd.addColorStop(1, 'rgba(0, 255, 127, 0)');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(head.x, head.y, 7, 0, Math.PI * 2);
        ctx.fill();

        // Crisp dot core
        ctx.fillStyle = GREEN;
        ctx.beginPath();
        ctx.arc(head.x, head.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // ─── Update traces ─────────────────────────────────────────────────────
    const update = () => {
      for (let i = 0; i < traces.length; i++) {
        traces[i].progress += traces[i].speed / traces[i].totalLen;
        if (traces[i].progress >= 1) {
          traces[i] = makeTrace(); // recycle with new random path
        }
      }
    };

    // ─── Loop ──────────────────────────────────────────────────────────────
    const loop = () => {
      if (!isVisible || !isActive) { animId = null; return; }
      update();
      draw();
      animId = requestAnimationFrame(loop);
    };

    // ─── Visibility pause ──────────────────────────────────────────────────
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

    // ─── Init ──────────────────────────────────────────────────────────────
    resize();
    initTraces();
    animId = requestAnimationFrame(loop);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      obs.disconnect();
      document.removeEventListener('visibilitychange', onVisChange);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  if (!hasSupport) {
    // Static 2D fallback for reduced-motion or unsupported browsers
    return (
      <div className="network-fallback" aria-hidden="true">
        <svg className="fallback-svg" viewBox="0 0 900 500" preserveAspectRatio="xMidYMid slice">
          {/* Grid dots */}
          {[52,104,156,208,260,312,364,416,468,520,572,624,676,728,780,832].map(x =>
            [52,104,156,208,260,312,364,416,468].map(y => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1" fill="rgba(0,255,127,0.12)" />
            ))
          )}
          {/* Static trace lines */}
          <polyline points="52,104 364,104 364,260 572,260" stroke="rgba(0,255,127,0.2)" strokeWidth="1" fill="none" />
          <polyline points="208,52 208,312 468,312" stroke="rgba(0,255,127,0.15)" strokeWidth="1" fill="none" />
          <polyline points="520,156 728,156 728,364 832,364" stroke="rgba(0,255,127,0.18)" strokeWidth="1" fill="none" />
          {/* Pulse dots */}
          <circle cx="364" cy="260" r="3" fill="rgba(0,255,127,0.7)" />
          <circle cx="208" cy="312" r="3" fill="rgba(0,255,127,0.6)" />
          <circle cx="728" cy="364" r="3" fill="rgba(0,255,127,0.7)" />
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
