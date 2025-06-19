
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-ds-navy/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-ds-navy dark:text-ds-lightest">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="md:w-2/3 space-y-4">
            <p className="text-ds-slate text-lg">
            Hello! I'm Julfasmi, a data scientist with a strong foundation in statistics and two years of hands-on 
            experience in crafting end-to-end data science solutions. My journey into data began during my studies 
            in Statistics at the Islamic University of Indonesia, where I specialized in Data Science.
            </p>
            
            <p className="text-ds-slate text-lg">
            I've developed machine learning models for object detection and emotion recognition, automated reporting 
            workflows, and created insightful dashboards to support data-driven decision-making. My professional experience 
            spans working with clients and organizations to transform raw data into meaningful insights using tools like Python, SQL, Excel, Tableau, and Power BI.
            </p>
            
            <p className="text-ds-slate text-lg">
            Outside of project work, I'm passionate about continuous learning, sharing knowledge through Medium 
            articles, and contributing to open-source analytics workflows. I believe that great data storytelling 
            drives impact — and I'm always excited to solve new challenges.
            </p>
            
            <div className="pt-4" id="skills">
              <h3 className="text-xl font-semibold text-ds-navy dark:text-ds-lightest mb-4">Core Skills</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <SkillTag>Python</SkillTag>
                <SkillTag>RStudio</SkillTag>
                <SkillTag>SQL</SkillTag>
                <SkillTag>Machine Learning</SkillTag>
                <SkillTag>Deep Learning</SkillTag>
                <SkillTag>Statistics</SkillTag>
                <SkillTag>Data Visualization</SkillTag>
                <SkillTag>A/B Testing</SkillTag>
                <SkillTag>Big Data</SkillTag>
                <SkillTag>Excel</SkillTag>
                <SkillTag>Tableau</SkillTag>
                <SkillTag>Power BI</SkillTag>
                <SkillTag>Git/GitHub</SkillTag>
                <SkillTag>SPSS</SkillTag>
                <SkillTag>Minitab</SkillTag>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <div className="relative">
                <div className="absolute inset-0 bg-ds-teal rounded-lg transform rotate-3 opacity-20"></div>
                <div className="relative bg-white dark:bg-ds-navy p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-ds-navy dark:text-ds-lightest mb-4">Education</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-ds-navy dark:text-ds-lightest">Bachelor of Science in Statistics</h4>
                      <p className="text-ds-slate">Islamic University of Indonesia, 2018-2022</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-ds-navy dark:text-ds-lightest">Graduated Cum Laude</h4>
                      <p className="text-ds-slate">GPA: 3.51</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-ds-navy dark:text-ds-lightest">Focus</h4>
                      <p className="text-ds-slate">Data Science</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-ds-navy dark:text-ds-lightest">Thesis</h4>
                      <p className="text-ds-slate">“Comparison of Apriori and FP-Growth Algorithm Methods in Understanding Consumer Behavior Patterns”</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white dark:bg-ds-navy border border-gray-200 dark:border-gray-700 px-3 py-2 rounded-md text-ds-slate text-sm font-medium">
      {children}
    </div>
  );
};

export default About;
