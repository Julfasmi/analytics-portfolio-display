
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-ds-navy/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-ds-navy dark:text-ds-lightest">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="md:w-2/3 space-y-4">
            <p className="text-ds-slate text-lg">
              Hello! I'm John, a passionate data scientist with over 5 years of experience in analyzing complex datasets
              and extracting meaningful insights. My journey into data science began during my graduate studies in
              Statistics at XYZ University, where I discovered the power of using data to solve real-world problems.
            </p>
            
            <p className="text-ds-slate text-lg">
              I've had the privilege of working with diverse organizations, from startups to Fortune 500 companies,
              helping them make data-driven decisions. My approach combines rigorous statistical analysis with machine
              learning techniques to uncover patterns and trends that drive business value.
            </p>
            
            <p className="text-ds-slate text-lg">
              When I'm not deep in data analysis, you can find me contributing to open-source data science projects,
              mentoring aspiring data scientists, or exploring the latest advancements in artificial intelligence.
            </p>
            
            <div className="pt-4" id="skills">
              <h3 className="text-xl font-semibold text-ds-navy dark:text-ds-lightest mb-4">Core Skills</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <SkillTag>Python</SkillTag>
                <SkillTag>R</SkillTag>
                <SkillTag>SQL</SkillTag>
                <SkillTag>Machine Learning</SkillTag>
                <SkillTag>Deep Learning</SkillTag>
                <SkillTag>Statistics</SkillTag>
                <SkillTag>Data Visualization</SkillTag>
                <SkillTag>A/B Testing</SkillTag>
                <SkillTag>Big Data</SkillTag>
                <SkillTag>Natural Language Processing</SkillTag>
                <SkillTag>Time Series Analysis</SkillTag>
                <SkillTag>Cloud Computing</SkillTag>
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
                      <h4 className="font-medium text-ds-navy dark:text-ds-lightest">Master of Science in Statistics</h4>
                      <p className="text-ds-slate">XYZ University, 2015-2017</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-ds-navy dark:text-ds-lightest">Bachelor of Science in Mathematics</h4>
                      <p className="text-ds-slate">ABC University, 2011-2015</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-ds-navy dark:text-ds-lightest mt-6 mb-4">Certifications</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-ds-navy dark:text-ds-lightest">AWS Certified Machine Learning</h4>
                      <p className="text-ds-slate">Amazon Web Services, 2022</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-ds-navy dark:text-ds-lightest">TensorFlow Developer Certificate</h4>
                      <p className="text-ds-slate">Google, 2021</p>
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
