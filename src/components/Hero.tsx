
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
              John Doe
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ds-slate">
              I transform data into <span className="text-gradient">insights</span>.
            </h2>
            <p className="text-ds-slate max-w-lg text-lg">
              I'm a data scientist specializing in building machine learning models,
              statistical analysis, and creating data visualizations that tell compelling stories.
              My focus is on solving complex problems with data-driven approaches.
            </p>
            <div className="pt-4">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-ds-teal text-ds-navy rounded-md font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-ds-teal to-blue-400 rounded-lg transform rotate-3 opacity-20"></div>
              <div className="relative bg-white dark:bg-ds-navy p-8 rounded-lg shadow-xl">
                <div className="w-full aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-center px-4">
                    Your professional headshot or an abstract data visualization here
                  </span>
                </div>
                <div className="mt-6 space-y-2">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-5/6"></div>
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
