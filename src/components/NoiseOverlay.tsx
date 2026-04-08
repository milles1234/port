import React from 'react';

export const NoiseOverlay: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.35] mix-blend-overlay">
      <svg className="h-full w-full opacity-100">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.8" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};
