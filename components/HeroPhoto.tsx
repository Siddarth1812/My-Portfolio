'use client';

import { useState } from 'react';

export function HeroPhoto() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="w-40 h-40 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-2 border-white/20 bg-white/5 flex items-center justify-center shrink-0"
        title="Add your photo as public/profile.jpg"
      >
        <span className="text-white/40 text-xs text-center px-4">
          Add profile.jpg to the public folder
        </span>
      </div>
    );
  }

  return (
    <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-white/20 shrink-0 bg-white/5">
      <img
        src="/profile.jpg"
        alt="Siddarth Usulkar"
        className="w-full h-full object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
