import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const ScrollBadge: React.FC = () => {
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!badgeRef.current) return;
    // Infinite rotation
    gsap.to(badgeRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "none",
      duration: 10,
    });
  }, { scope: badgeRef });

  return (
    <div 
      className="absolute bottom-10 left-10 z-40 flex items-center justify-center opacity-0 gsap-fade-in"
      style={{ width: '100px', height: '100px' }}
    >
      <div ref={badgeRef} className="relative flex items-center justify-center w-full h-full">
        {/* Circular text using SVG textPath */}
        <svg viewBox="0 0 100 100" className="absolute w-full h-full text-light fill-current">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text fontSize="11" fontWeight="500" letterSpacing="0.2em">
            <textPath href="#circlePath" startOffset="0%">
              SCROLL DOWN • SCROLL DOWN • 
            </textPath>
          </text>
        </svg>

        {/* Center geometric icon (interlocking circles) */}
        <div className="absolute flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="8" cy="12" r="6" />
            <circle cx="16" cy="12" r="6" />
          </svg>
        </div>
      </div>
    </div>
  );
};
