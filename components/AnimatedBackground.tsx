'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const rafRef = useRef<number>(0);
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; radius: number; update: () => void }[]>([]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const getParticleCount = useCallback(() => {
    if (typeof window === 'undefined') return 40;
    const w = window.innerWidth;
    if (w < 768) return 25;
    if (w < 1280) return 45;
    return 60;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.2 + 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = getParticleCount();
      particlesRef.current = Array.from({ length: n }, () => new Particle());
    };

    const connectDistance = 120;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Soft gradient mesh (low contrast)
      const g = ctx.createRadialGradient(
        width * 0.3,
        height * 0.3,
        0,
        width * 0.5,
        height * 0.5,
        width * 0.8
      );
      g.addColorStop(0, 'rgba(120, 100, 180, 0.08)');
      g.addColorStop(0.5, 'rgba(80, 60, 140, 0.05)');
      g.addColorStop(1, 'rgba(40, 30, 80, 0.03)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      const particles = particlesRef.current;
      particles.forEach((p) => p.update());

      // Faint connecting lines (occasional)
      ctx.strokeStyle = 'rgba(180, 160, 220, 0.12)';
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          if (dx * dx + dy * dy < connectDistance * connectDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Drifting particles
      ctx.fillStyle = 'rgba(200, 180, 240, 0.35)';
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    rafRef.current = requestAnimationFrame(draw);

    const onResize = () => {
      cancelAnimationFrame(rafRef.current);
      resize();
      rafRef.current = requestAnimationFrame(draw);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion, getParticleCount]);

  // Reduced motion: static gradient only
  if (prefersReducedMotion) {
    return (
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(120, 100, 180, 0.12) 0%, rgba(60, 40, 100, 0.06) 50%, transparent 70%)',
        }}
      />
    );
  }

  return (
    <>
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 90% 90% at 50% 40%, rgba(100, 80, 160, 0.06) 0%, transparent 60%)',
        }}
      />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
        aria-hidden
      />
    </>
  );
}
