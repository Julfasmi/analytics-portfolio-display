
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Predictive Customer Churn Analysis",
      description: "Developed a machine learning model to predict customer churn with 92% accuracy, helping a telecom company reduce churn by 15%.",
      tags: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib"],
      image: "bg-blue-100 dark:bg-blue-900",
      github: "#",
      demo: "#"
    },
    {
      title: "Natural Language Processing for Sentiment Analysis",
      description: "Created an NLP model to analyze customer reviews and social media mentions, providing real-time sentiment analysis for a retail brand.",
      tags: ["Python", "NLTK", "TensorFlow", "BERT", "Flask"],
      image: "bg-green-100 dark:bg-green-900",
      github: "#",
      demo: "#"
    },
    {
      title: "Time Series Forecasting for Sales Prediction",
      description: "Built a time series model that improved sales forecasting accuracy by 25%, helping optimize inventory management for an e-commerce platform.",
      tags: ["R", "Prophet", "ARIMA", "dplyr", "ggplot2"],
      image: "bg-purple-100 dark:bg-purple-900",
      github: "#",
      demo: "#"
    },
    {
      title: "Clustering Algorithm for Customer Segmentation",
      description: "Implemented K-means and hierarchical clustering to segment customers based on purchasing behavior, leading to a 20% increase in marketing ROI.",
      tags: ["Python", "Scikit-learn", "K-means", "Tableau", "SQL"],
      image: "bg-orange-100 dark:bg-orange-900",
      github: "#",
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-ds-navy dark:text-ds-lightest">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
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
