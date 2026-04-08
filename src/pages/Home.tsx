import React from 'react';
import { Hero } from '../components/Hero';
import { Work } from '../components/Work';
import { Motto } from '../components/Motto';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="bg-[#050505] text-[#e8e8e8] w-full min-h-screen">
      <Hero />
      <Work />
      <Motto />
      <Footer />
    </div>
  );
};
