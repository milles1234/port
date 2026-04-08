import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative z-10 w-full bg-[#f4f4f4] pt-32 pb-16 px-8 border-t border-black/5">
      <div className="max-w-6xl mx-auto flex flex-col">
        
        {/* Top: Large Heading */}
        <div className="flex items-end gap-3 mb-24 cursor-default">
          <h2 className="text-6xl md:text-8xl font-light tracking-tight text-[#0a0a0c]">
            Keep in touch
          </h2>
          <svg width="80" height="50" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-black pb-2 hidden md:block">
            <circle cx="20" cy="20" r="14" />
            <circle cx="40" cy="20" r="14" />
          </svg>
        </div>

        {/* Email Section */}
        <div className="mb-32">
          <p className="text-xs font-mono text-black/40 uppercase tracking-[0.2em] mb-4">Start a conversation</p>
          <a href="mailto:dy02082003@gmail.com" className="group relative inline-block">
            <span className="text-4xl md:text-6xl lg:text-7xl font-light text-[#0a0a0c] tracking-tight transition-colors duration-500 group-hover:text-[#f08050]">
              dy02082003@gmail.com
            </span>
            {/* Animated Underline mimicking the reference image line */}
            <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-400 via-amber-400 to-[#f08050] scale-x-100 origin-left transition-transform duration-700 ease-out group-hover:scale-x-0"></span>
            <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-[#f08050] to-red-500 scale-x-0 origin-right transition-transform duration-700 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
          </a>
        </div>

        {/* Bottom Columns */}
        <div className="flex flex-col md:flex-row justify-between pt-16 border-t border-black/10 gap-16 md:gap-0">
          
          <div className="flex flex-col md:w-1/2">
             {/* Left intentionally blank or for future links to balance layout, matching reference more closely */}
          </div>

          <div className="flex flex-col md:w-1/2 md:items-end">
             <div className="flex flex-col items-start w-fit">
               <p className="text-xs font-mono text-black/40 uppercase tracking-[0.2em] mb-6">Follow the journey</p>
               <nav className="flex flex-col gap-4">
                 <a href="http://www.linkedin.com/in/deepanshuyadav100x" target="_blank" rel="noreferrer" className="text-lg text-[#0a0a0c] font-light hover:text-[#f08050] transition-colors duration-300 w-fit group">
                   LinkedIn <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                 </a>
                 <a href="http://github.com/milles1234" target="_blank" rel="noreferrer" className="text-lg text-[#0a0a0c] font-light hover:text-[#f08050] transition-colors duration-300 w-fit group">
                   GitHub <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                 </a>
               </nav>
             </div>
          </div>
          
        </div>
        
      </div>
    </footer>
  );
};
