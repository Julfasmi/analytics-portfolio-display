import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

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
      title: "PIC Allocation Dashboard Using Hierarchical Spatial Clustering",
      description:
        "An interactive R Shiny dashboard for optimizing PIC allocation by clustering partner locations using Hierarchical Clustering and geospatial distance analysis. The application provides interactive maps, regional filtering, operational summaries, and downloadable reports to support decision-making.",
      tags: [
        "Shiny",
        "Data Analyst",
        "Data Visualization",
        "Geospatial Analysis",
        "Hierarchical Clustering",
        "GIS",
        "Dashboard",
        "Plotly",
        "OpenStreetMap",
      ],
      image: "bg-red-100 dark:bg-red-900",
      github: "https://github.com/Julfasmi/dashboard_pic",
      demo: "https://julfasmi.shinyapps.io/dashboard_pic/",
    },
    {
      title: "Social Media Data Scraping & Analysis: Sumatra Floods 2025",
      description:
        "Collected public X (Twitter) data on the Sumatra Floods 2025 using keyword-based scraping for social media analysis.",
      tags: [
        "Python",
        "Web Scraping",
        "X API (Twitter API)",
        "Data Collection",
        "Text Mining",
        "Social Media Analytics",
      ],
      image: "bg-red-100 dark:bg-red-900",
      github: "https://github.com/Julfasmi/Scrape_X",
      demo: null,
    },
    {
      title: "Model Object Detection with YOLO",
      description:
        "Implemented an object detection system using YOLO for detecting and localizing objects in images and videos.",
      tags: [
        "Python",
        "YOLO",
        "Computer Vision",
        "Deep Learning",
        "Object Detection",
        "OpenCV",
      ],
      image: "bg-blue-100 dark:bg-blue-900",
      github: "https://github.com/Julfasmi/Object-Detection",
      demo: "https://object-detection19.streamlit.app/",
    },
    {
      title: "Revenue Forecasting Simulator",
      description:
        "Interactive time-series forecasting and revenue scenario simulation application built with Python and Streamlit.",
      tags: [
        "Python",
        "Streamlit",
        "Time Series Forecasting",
        "SARIMA",
        "Revenue Forecasting",
        "Scenario Analysis",
        "Business Analytics",
        "Data Science",
      ],
      image: "bg-blue-100 dark:bg-blue-900",
      github: "https://github.com/Julfasmi/revenue-forecasting-simulator",
      demo: "https://forecastingmodelsarima.streamlit.app/",
    },
    {
      title: "REST API with FastAPI",
      description:
        "Developed a REST API with FastAPI to support data processing and machine learning services.",
      tags: ["Python", "FastAPI", "API Integration", "REST API"],
      image: "bg-green-100 dark:bg-green-900",
      github: "https://github.com/Julfasmi/Rest-API",
      demo: "https://rest-api-production-56d2.up.railway.app/docs",
    },
    {
      title: "Retail Sales & Profit Analysis Dashboard",
      description:
        "Built an interactive Retail Sales & Profit Analysis Dashboard in Power BI using a built-in retail dataset to practice data visualization and business insight exploration.",
      tags: [
        "Data Visualization",
        "Power BI",
        "Profit Analysis",
        "Retail Analytics",
        "Sales Analysis,",
      ],
      image: "bg-purple-100 dark:bg-purple-900",
      github: "https://github.com/Julfasmi/Belajar-PowerBI",
      demo: "https://drive.google.com/file/d/1FYfsMVgnf9Wy54oEwq9r34SfwfTzLBm_/view?usp=sharing",
    },
    {
      title: "Multi-channel digital campaign performance data dashboard",
      description:
        "Built an interactive Looker Studio dashboard to track and analyze performance metrics across multiple digital marketing channels.",
      tags: [
        "Looker Studio",
        "Digital Marketing Analytics",
        "Data Visualization",
        "KPI Monitoring",
        "Dashboarding",
      ],
      image: "bg-yellow-100 dark:bg-yellow-900",
      github: null,
      demo: "https://lookerstudio.google.com/u/0/reporting/4afa64db-d1d6-4834-8d9b-8a9580efde08/page/09jUF",
    },
    {
      title: "Consumer Behavior Dashboard",
      description:
        "Built an interactive Looker Studio dashboard to analyze consumer behavior, demographics, and purchasing patterns.",
      tags: [
        "Looker Studio",
        "Consumer Behavior Analysis",
        "Customer Segmentation",
        "Data Visualization",
        "Business Analytics",
      ],
      image: "bg-pink-100 dark:bg-pink-900",
      github: null,
      demo: "https://lookerstudio.google.com/u/0/reporting/696860d4-6fb1-42e6-9c04-13c9c9977d41/page/p_r0xp37divd",
    },
    {
      title: "WiFi User Behavior Analysis",
      description:
        "Data analysis project exploring WiFi user behavior, usage patterns, and network activity trends.",
      tags: [
        "Data Analytics",
        "User Behavior Analysis",
        "Network Analytics",
        "Python",
        "Pandas",
        "Data Visualization",
        "Exploratory Data Analysis",
        "Business Analytics",
      ],
      image: "bg-pink-100 dark:bg-pink-900",
      github: null,
      demo: "https://drive.google.com/file/d/1pMF7PXgosJWxo-AIvJfADHYfa-9zHSfP/view?usp=sharing",
    },
    {
      title: "Sales Decline Root Cause Analysis",
      description:
        "Analyzing sales performance and business drivers to identify the root causes of declining revenue and generate actionable insights for performance improvement.",
      tags: [
        "Data Analytics",
        "Sales Analytics",
        "Root Cause Analysis",
        "Business Intelligence",
        "Business Analytics",
        "Data Visualization",
        "Exploratory Data Analysis",
      ],
      image: "bg-pink-100 dark:bg-pink-900",
      github: null,
      demo: "https://drive.google.com/file/d/1YbCD-7hXKu570_U9rb7COuR1tn-vUiZ5/view?usp=sharing",
    },
    {
      title: "Text Mining with RStudio: People's Opinions",
      description:
        "Performed text mining and sentiment analysis using R to analyze customer opinions about Swiss-Belboutique Yogyakarta Hotel, with insights published on Medium.",
      tags: [
        "RStudio",
        "Text Mining",
        "Sentiment Analysis",
        "Natural Language Processing",
        "Data Visualization",
      ],
      image: "bg-cyan-100 dark:bg-cyan-900",
      github: null,
      demo: "https://julfasmi.medium.com/text-mining-dengan-rstudio-pendapat-orang-tentang-hotel-swiss-belboutique-yogyakarta-953183f7efb7",
    },
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
        behavior: "smooth",
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
                  ${
                    activeIndex === index
                      ? "bg-ds-teal scale-125"
                      : "bg-gray-300 dark:bg-gray-600"
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
