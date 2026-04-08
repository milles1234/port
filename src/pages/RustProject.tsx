import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Rust1 from "../assets/rust1.jpg";
import Rust3 from "../assets/rust2.jpg";

export const RustProject: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      // Stagger in the elements
      tl.fromTo(
        ".fade-up",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#0a0a0c] text-white overflow-hidden pb-32"
    >
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#f08050] opacity-[0.03] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      {/* Header / Navigate Back */}
      <header className="fixed top-0 left-0 w-full p-8 z-50 mix-blend-difference pointer-events-none fade-up">
        <Link
          to="/"
          className="pointer-events-auto flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-white hover:text-white/70 transition-colors"
        >
          <span>←</span> Back
        </Link>
      </header>

      <main className="max-w-6xl mx-auto px-8 pt-40 relative z-10 w-full overflow-hidden">
        {/* Project Header */}
        <div className="flex flex-col gap-8 mb-32 max-w-4xl">
          <div className="flex items-center gap-4 fade-up">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#f08050]/80">
              Case Study
            </span>
            <div className="h-[1px] w-12 bg-white/10"></div>
            <span className="text-xs font-mono uppercase tracking-widest text-white/40">
              2026
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-medium tracking-tighter leading-[0.9] fade-up">
            Detect Degradation{" "}
            <span className="text-[#f08050]">Before It Strikes.</span>
          </h1>

          <p className="text-xl md:text-2xl font-light text-white/50 leading-relaxed max-w-2xl mt-4 fade-up">
            Our vision AI spots corrosion at the earliest stage — saving
            equipment, money, and lives. Upload, analyze, and prevent.
          </p>
        </div>

        {/* Premium Screenshot Display: RustDetector Dashboard */}
        <div className="w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_80px_-20px_rgba(240,128,80,0.15)] fade-up mb-24 relative group bg-[#111] aspect-[16/9]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent z-10 pointer-events-none opacity-60"></div>

          {/* Place your dashboard screenshot in the public directory and name it "dashboard-mock.jpg" */}
          <img
            src={Rust1}
            alt="RustDetector Dashboard"
            className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
          />
        </div>

        {/* Premium Screenshot Display: Scans View */}
        <div className="w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_80px_-20px_rgba(0,0,0,0.5)] fade-up mb-32 relative group bg-[#111] aspect-[16/9]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent z-10 pointer-events-none opacity-60"></div>

          {/* Place your scans screenshot in the public directory and name it "scans-mock.jpg" */}
          <img
            src={Rust3}
            alt="RustDetector Recent Scans"
            className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
          />
        </div>
      </main>
    </div>
  );
};
