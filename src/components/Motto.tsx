import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register ScrollTrigger, vital for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

export const Motto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const text = "I am a full stack developer learning with AI, embracing the creative freedom to build next-generation immersive web experiences.";
  const words = text.split(" ");

  useGSAP(() => {
    // Fills the words with white sequentially as we scroll
    gsap.fromTo(
      ".motto-word",
      { color: "#222222" }, // Starts off darker gray
      {
        color: "#ffffff",
        ease: "none",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%", // Starts when top of container hits 75% down viewport
          end: "bottom 75%", // Ends when bottom of container hits 75%
          scrub: true, // Smoothly scrubs back and forth
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="motto" ref={containerRef} className="relative z-10 w-full bg-[#050505] py-40 px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-[80px] leading-[1.1] font-medium tracking-tight">
          {words.map((word, index) => (
            <span 
              key={index} 
              className="motto-word inline-block mr-[0.25em]"
              style={{ transition: 'color 0.1s ease-out' }}
            >
              {word}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
};
