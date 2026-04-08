import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Header: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Magnetic / Color shift hover effects on nav links
    const links = gsap.utils.toArray<HTMLAnchorElement>('.nav-link');

    links.forEach(link => {
      const effect = gsap.to(link, {
        color: '#fff',
        x: -5,
        duration: 0.3,
        ease: 'power2.out',
        paused: true
      });

      link.addEventListener('mouseenter', () => effect.play());
      link.addEventListener('mouseleave', () => effect.reverse());
    });
  }, { scope: navRef });

  return (
    <header className="absolute top-0 left-0 w-full z-40 flex items-start justify-between p-8 pointer-events-none">

      {/* Top Left: Logo */}
      <div className="pointer-events-auto flex flex-col gsap-header-stagger opacity-0 -translate-y-5">
        <h1 className="text-xl font-bold tracking-tight lowercase"></h1>
        <span className="text-xs font-light text-gray-400 mt-1 uppercase tracking-widest"></span>
      </div>

      {/* Top Middle: Language Toggle */}
      <div className="pointer-events-auto flex gap-3 text-[10px] font-medium tracking-widest text-gray-500 gsap-header-stagger opacity-0 -translate-y-5">
        <span className="text-white cursor-pointer hover:text-white transition-colors">EN</span>
        <span className="cursor-pointer hover:text-white transition-colors">VN</span>
        <span className="cursor-pointer hover:text-white transition-colors">中文</span>
      </div>

      {/* Top Right: Vertical Nav */}
      <nav ref={navRef} className="pointer-events-auto flex flex-col items-end gap-2 gsap-header-stagger opacity-0 -translate-y-5">
        <a href="#work" className="nav-link text-[11px] font-medium tracking-widest text-gray-400 uppercase cursor-pointer">Work</a>
        <a href="#motto" className="nav-link text-[11px] font-medium tracking-widest text-gray-400 uppercase cursor-pointer">Motto</a>
        <a href="#contact" className="nav-link text-[11px] font-medium tracking-widest text-gray-400 uppercase cursor-pointer">Contact</a>
      </nav>

    </header>
  );
};
