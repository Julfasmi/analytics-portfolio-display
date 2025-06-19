
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <p className="text-ds-teal font-mono mb-2">Hi, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ds-navy dark:text-ds-lightest">
              Julfasmi Hi. M. Nasir
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ds-slate">
              a Data Scientist turning data into <span className="text-gradient">Impact</span>.
            </h2>
            <p className="text-ds-slate max-w-lg text-lg">
              With a solid foundation in statistics and experience in data science,
              I specialize in crafting machine learning solutions, automating 
              workflows, and visualizing data to uncover hidden patterns.
              I combine technical expertise with storytelling to deliver insights that drive 
              strategic actions and real-world impact.
            </p>
            <div className="pt-4">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-ds-teal text-ds-navy rounded-md font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Explore My Projects
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-ds-teal to-blue-400 rounded-lg transform rotate-3 opacity-20"></div>
              <div className="relative bg-white dark:bg-ds-navy p-8 rounded-lg shadow-xl">
              <div className="w-full aspect-square rounded-lg overflow-hidden">
                <img 
                  src="/foto_profil2.jpg" 
                  alt="Foto Profil Julfasmi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 space-y-4 text-center">
                <p className="text-sm italic text-ds-slate dark:text-ds-light">
                  "Good data tells a story. Great data tells the right story — to the right people — at the right time."
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
