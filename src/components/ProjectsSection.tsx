import { Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import recepediaImg from '@/assets/recepedia.png';
import communityImg from '@/assets/community.jpg';

const projects = [
  {
    title: 'Recipedia',
    description: 'The goal of Recipedia is to allow users to gain cooking experience, while also saving money from eating out less. Recipedia embodies our goals by offering a unique experience for users to create a profile and build a virtual pantry that reflects their real-life kitchen. Users can easily add individual ingredients to their virtual pantry, and then use our advanced search filters to find recipes that match their preferences. Recipedia provides users with an extensive collection of recipes from around the world, covering a wide range of cuisines and meal types. Our algorithms analyze the ingredients in your virtual pantry and match them with the most suitable recipes. This personalized approach ensures that you can always find the perfect recipe.',
    agileFramework: 'Scrum',
    image: recepediaImg,
    features: [
      'Google SSO Login',
      'Google Maps',
      'Recipes API',
      'Customizable Profiles',
      'Recipe Rating, Filtering, and Reviews',
      'Collection of Highest Rated Recipes',
      'Interactive Online Pantry'
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'Google OAuth', 'Google Maps API', 'Edamam API'],
    github: 'https://github.com/zachdoconnor/Recepedia'
  },
  {
    title: 'Community Exchange Hub',
    description: 'The Community Exchange Hub is an innovative web application designed to strengthen local communities by facilitating the exchange of goods and services. This platform enables users to create and manage profiles, list and browse various items and services, and engage in a safe and community-focused environment. By harnessing the power of local networks, the Community Exchange Hub aims to foster a spirit of sharing and cooperation, making it easier for community members to connect, trade, and support one another.',
    agileFramework: 'Kanban',
    image: communityImg,
    features: [
      'Login/Registration',
      'User Messaging',
      'Create/Edit/Delete Posts',
      'User Reviews',
      'Admin Controls',
      'Public Profiles',
      'Customizable Profiles'
    ],
    tags: ['Python', 'HTML/CSS', 'CRUD', 'Messaging', 'User Auth'],
    github: 'https://github.com/zachdoconnor/Community-Echange-Hub'
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
              className="group gradient-card border-2 border-border card-hover shadow-lg hover:shadow-glow-hover hover:border-primary/40 overflow-hidden transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col flex-grow">
                {/* Project Thumbnail */}
                <div className="relative mb-6 w-full aspect-video rounded-lg overflow-hidden bg-background-alt shadow-md group-hover:shadow-glow transition-shadow duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`}
                    className="relative w-full h-full object-contain"
                  />
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

                {/* Tech Stack and Button Container - pushed to bottom */}
                <div className="mt-auto">
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

                  {/* Action Button */}
                  <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-2 border-primary text-foreground hover:bg-primary/10 hover:border-primary hover:shadow-glow transition-all duration-300"
                  onClick={() => window.open(project.github, '_blank')}
                >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
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
