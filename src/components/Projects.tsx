<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

=======

import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset to start when reaching the end
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      scrollPosition = scrollContainer.scrollLeft;
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  const projects = [
    {
      title: "Model object detection with YOLO",
      description: "Developing a machine learning model to predict an object in an image with maximum accuracy.",
      tags: ["Python", "Scikit-ultralytics", "opencv", "Pandas", "Matplotlib"],
      image: "bg-blue-100 dark:bg-blue-900",
      github: "https://github.com/Julfasmi/Object-Detection",
      demo: "https://object-detection19.streamlit.app/"
    },
    {
      title: "Building APIs using FastAPI",
      description: "Create a simple API using FastAPI.",
      tags: ["Python", "fastapi", "uvicorn"],
      image: "bg-green-100 dark:bg-green-900",
      github: "https://github.com/Julfasmi/Rest-API",
      demo: "https://rest-api-production-56d2.up.railway.app/docs"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-ds-navy dark:text-ds-lightest">Projects</h2>
        
        <div ref={scrollRef} className="mt-12 overflow-x-auto pb-4 scrollbar-hide cursor-grab">
          <div className="flex gap-6 min-w-max">
            {projects.map((project, index) => (
              <div key={index} className="w-[350px] md:w-[400px] flex-shrink-0">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/Julfasmi" 
            className="inline-flex items-center gap-2 text-ds-teal hover:underline transition-all"
          >
            View More Projects
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

>>>>>>> 1ba80a828880b6e86204d79ae8d68102b03a2688
interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string | null;
}

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "Model Object Detection with YOLO",
      description: "YOLO-based object detection with high accuracy.",
      tags: ["Python", "YOLO", "OpenCV"],
      image: "bg-blue-100 dark:bg-blue-900",
      github: "https://github.com/Julfasmi/Object-Detection",
      demo: "https://object-detection19.streamlit.app/"
    },
    {
      title: "REST API with FastAPI",
      description: "Building scalable APIs using FastAPI.",
      tags: ["Python", "FastAPI"],
      image: "bg-green-100 dark:bg-green-900",
      github: "https://github.com/Julfasmi/Rest-API",
      demo: "https://rest-api-production-56d2.up.railway.app/docs"
    },
    {
      title: "Data Analysis Project",
      description: "Exploratory data analysis and visualization.",
      tags: ["Python", "Pandas"],
      image: "bg-purple-100 dark:bg-purple-900",
      github: "https://github.com/Julfasmi",
      demo: null
    },
    {
      title: "Machine Learning Pipeline",
      description: "End-to-end ML pipeline for prediction.",
      tags: ["Scikit-Learn"],
      image: "bg-yellow-100 dark:bg-yellow-900",
      github: "https://github.com/Julfasmi",
      demo: null
    }
  ];

  // AUTO SCROLL
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 380;

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % projects.length;
      container.scrollTo({
        left: nextIndex * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, projects.length]);

  // UPDATE ACTIVE DOT ON MANUAL SCROLL
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 380;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-ds-navy dark:text-ds-lightest">
          Projects
        </h2>

        {/* SCROLL AREA */}
        <div className="relative mt-12">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth
                       snap-x snap-mandatory no-scrollbar"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* DOT INDICATOR */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <span
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300
                  ${activeIndex === index
                    ? 'bg-ds-teal scale-125'
                    : 'bg-gray-300 dark:bg-gray-600'
                  }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Julfasmi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ds-teal hover:underline"
          >
            View More Projects
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div
    className="min-w-[300px] md:min-w-[380px]
               bg-white dark:bg-ds-navy
               rounded-lg shadow-lg snap-start"
  >
    <div
      className={`h-48 ${project.image}
                  flex items-center justify-center font-medium`}
    >
      Project Preview
    </div>

    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-ds-slate mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <Github size={20} />
        </a>

        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Projects;
