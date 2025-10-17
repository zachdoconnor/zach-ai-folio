import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Enterprise Workflow Automation Platform',
    description: 'Comprehensive automation solution integrating Salesforce, Power Automate, and custom APIs to streamline business processes.',
    image: '🤖',
    tags: ['Power Automate', 'Salesforce', 'REST API', 'Azure'],
    category: 'automation',
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'AI-Powered Data Analytics Dashboard',
    description: 'Real-time analytics platform with ML-driven insights for business intelligence and predictive modeling.',
    image: '📊',
    tags: ['Python', 'SQL', 'Power BI', 'Machine Learning'],
    category: 'data',
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Customer Service Chatbot',
    description: 'Intelligent chatbot leveraging NLP to automate customer support and reduce response times by 70%.',
    image: '💬',
    tags: ['Python', 'NLP', 'Azure Bot Service', 'React'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Inventory Management System',
    description: 'Full-stack web application for real-time inventory tracking with automated reordering capabilities.',
    image: '📦',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

const categories = ['all', 'automation', 'web', 'data'];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 section-light">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Showcasing automation solutions, AI integrations, and full-stack applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'default' : 'outline'}
              onClick={() => setActiveFilter(category)}
              className={
                activeFilter === category
                  ? 'gradient-accent text-white shadow-glow'
                  : 'border-2 border-border text-foreground hover:bg-surface hover:border-primary/40 transition-all duration-300'
              }
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group gradient-card border-2 border-border card-hover shadow-lg hover:shadow-glow-hover hover:border-primary/40 overflow-hidden transition-all duration-300"
            >
              <div className="p-6">
                {/* Project Thumbnail with gradient overlay */}
                <div className="relative mb-6 w-full aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/30 via-primary-light/20 to-accent/30 flex items-center justify-center text-6xl shadow-md group-hover:shadow-glow transition-shadow duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">{project.image}</span>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-light transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-secondary/80 text-foreground border border-border/50 text-xs px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-2 border-primary/60 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-glow transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gradient-accent text-white shadow-glow-hover transition-all duration-300"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
