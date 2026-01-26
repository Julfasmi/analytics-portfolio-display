import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

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
