'use client';

import { useEffect, useState } from 'react';

const SECTIONS = ['hero', 'biodata', 'experience', 'projects', 'skills', 'education', 'resume', 'contact'];
const TOTAL = SECTIONS.length;

export function SectionIndicator() {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const i = SECTIONS.indexOf(id);
            if (i !== -1) setCurrent(i + 1);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-1 text-white/50 font-display text-sm tabular-nums">
      <span className="text-white/90">{String(current).padStart(2, '0')}</span>
      <span className="text-white/30">/</span>
      <span>{String(TOTAL).padStart(2, '0')}</span>
    </div>
  );
}
