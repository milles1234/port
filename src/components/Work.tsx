import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import rustCover from '../assets/rustdetectorCover.avif';

export const Work: React.FC = () => {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !cursorRef.current) return;

    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      xTo(x);
      yTo(y);
    };

    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.5)' });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3, ease: 'power2.out' });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="work" className="relative z-10 w-full bg-[#050505] py-32 px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#e8e8e8] mb-16 uppercase">
          Selected Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {/* Minimalist Project Item */}
          <div className="flex flex-col gap-4">
            
            {/* Image Container with Custom Cursor */}
            <Link 
              to="/work/rustdetector"
              ref={containerRef}
              className="group relative block w-full aspect-[4/5] overflow-hidden bg-[#111] cursor-none rounded-sm"
            >
              {/* Custom floating cursor arrow */}
              <div 
                ref={cursorRef} 
                className="absolute top-0 left-0 z-50 flex items-center justify-center w-24 h-24 bg-white rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>

              {/* Your Image Mockup */}
              <img 
                src={rustCover} 
                alt="Rust AI Dashboard" 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
            </Link>
            
            {/* Project Title and Details (Below Image) */}
            <div className="flex flex-col pt-2">
              <h3 className="text-lg font-medium text-[#e8e8e8]">RustDetector — AI Inspection</h3>
              <p className="text-sm font-light text-white/40 mt-1">
                React, Computer Vision, UI/UX Design
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
