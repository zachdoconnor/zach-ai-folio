
import { Github, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Recipedia',
    description: 'The goal of Recipedia is to allow users to gain cooking experience, while also saving money from eating out less. Recipedia embodies our goals by offering a unique experience for users to create a profile and build a virtual pantry that reflects their real-life kitchen. Users can easily add individual ingredients to their virtual pantry, and then use our advanced search filters to find recipes that match their preferences.',
    agileFramework: 'Scrum',
    image: '🍳',
    features: [
      'Google SSO Login',
      'Google Maps',
      'Recipes API',
      'Customizable Profiles',
      'Recipe Rating, Filtering, and Reviews',
      'Collection of Highest Rated Recipes',
      'Interactive Online Pantry'
    ],
    tags: ['React', 'Google API', 'REST API', 'OAuth'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Community Exchange Hub',
    description: 'The Community Exchange Hub is an innovative web application designed to strengthen local communities by facilitating the exchange of goods and services. This platform enables users to create and manage profiles, list and browse various items and services, and engage in a safe and community-focused environment.',
    agileFramework: 'Kanban',
    image: '🤝',
    features: [
      'Login/Registration',
      'User Messaging',
      'Create/Edit/Delete Posts',
      'User Reviews',
      'Admin Controls',
      'Public Profiles',
      'Customizable Profiles'
    ],
    tags: ['Full-Stack', 'User Auth', 'Messaging', 'CRUD'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 section-light border-t-2 border-border/30">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic projects built during my time at Indiana University, showcasing full-stack development and Agile methodologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
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
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <Badge variant="outline" className="mb-3 border-primary/60 text-primary w-fit">
                  {project.agileFramework}
                </Badge>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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
                    className="flex-1 border-2 border-primary text-foreground hover:bg-primary/10 hover:border-primary hover:shadow-glow transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gradient-accent text-primary-foreground shadow-glow-hover transition-all duration-300"
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
