import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Header } from './Header';
import { NoiseOverlay } from './NoiseOverlay';
import { FluidBackground } from './FluidBackground';
import { ScrollBadge } from './ScrollBadge';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Fade in entire background/noise
    tl.fromTo('.gsap-bg-fade',
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: 'power2.inOut' }
    );

    // Stagger Header elements
    tl.to('.gsap-header-stagger', {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5');

    // Blur-to-focus fade in for center text
    tl.fromTo(textRef.current,
      { filter: 'blur(15px)', opacity: 0, scale: 1.05 },
      { filter: 'blur(0px)', opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' },
      '-=0.8'
    );

    // Fade in ScrollBadge
    tl.to('.gsap-fade-in', {
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    }, '-=1');

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#050505]">

      <div className="gsap-bg-fade opacity-0 h-full w-full absolute inset-0 z-0">
        <FluidBackground />
        <NoiseOverlay />
      </div>

      <Header />

      <main className="relative z-20 flex h-full w-full items-center justify-center pointer-events-none">
        <h2
          ref={textRef}
          className="text-6xl md:text-8xl lg:text-[140px] font-medium tracking-tighter text-[#e8e8e8] opacity-0 text-center uppercase"
        >
          Deepanshu Yadav
        </h2>
      </main>

      {/* Right Edge: Pagination Dot */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4 gsap-header-stagger opacity-0 -translate-y-5">
        <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
      </div>

      <ScrollBadge />
    </div>
  );
};
