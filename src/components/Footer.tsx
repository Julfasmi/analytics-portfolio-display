
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-ds-slate text-sm mb-4 md:mb-0">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          
          <p className="text-ds-slate text-sm flex items-center gap-1">
            Built with <Heart size={16} className="text-ds-teal" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
