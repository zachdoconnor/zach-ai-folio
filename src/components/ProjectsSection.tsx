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
    <section id="projects" className="py-20 px-6 bg-surface">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  : 'border-border hover:bg-muted'
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
              className="group gradient-card border-border/50 hover:border-primary/30 transition-smooth hover:shadow-glow overflow-hidden"
            >
              <div className="p-6">
                {/* Project Icon/Image */}
                <div className="mb-4 w-full aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl">
                  {project.image}
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground text-xs"
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
                    className="flex-1 border-primary/50 text-primary hover:bg-primary/10"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
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
