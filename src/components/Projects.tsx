
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
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
        
        <div className="mt-12 overflow-x-auto pb-4">
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

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string | null;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div className="project-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      <div className={`h-48 ${project.image} flex items-center justify-center text-ds-navy dark:text-ds-lightest font-medium`}>
        Data Visualization Preview
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-ds-navy dark:text-ds-lightest mb-2">{project.title}</h3>
        <p className="text-ds-slate mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="bg-gray-100 dark:bg-gray-800 text-ds-slate px-2 py-1 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href={project.github} 
            className="text-ds-slate hover:text-ds-teal transition-colors"
            aria-label="View Github Repository"
          >
            <Github size={20} />
          </a>
          
          {project.demo && (
            <a 
              href={project.demo} 
              className="text-ds-slate hover:text-ds-teal transition-colors"
              aria-label="View Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
