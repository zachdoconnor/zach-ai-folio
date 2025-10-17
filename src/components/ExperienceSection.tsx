import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    company: 'Tech Innovations Corp',
    role: 'Senior Systems Engineer',
    period: '2022 - Present',
    description: [
      'Led implementation of AI-powered automation solutions, reducing manual processing time by 60%',
      'Architected enterprise workflow systems using Power Automate and custom APIs',
      'Managed cross-functional teams to deliver scalable automation ecosystems'
    ]
  },
  {
    company: 'Digital Solutions LLC',
    role: 'Automation Specialist',
    period: '2020 - 2022',
    description: [
      'Developed and deployed 50+ automated workflows using Power Automate and Python',
      'Integrated Salesforce CRM with various business intelligence tools',
      'Reduced operational costs by 35% through process optimization'
    ]
  },
  {
    company: 'StartupHub Inc',
    role: 'Junior Systems Analyst',
    period: '2018 - 2020',
    description: [
      'Built data pipelines connecting SQL databases to analytics platforms',
      'Created documentation and training materials for automation best practices',
      'Supported deployment of cloud-based business applications'
    ]
  }
];

const education = {
  school: 'Indiana University',
  degree: 'Bachelor of Science in Information Systems',
  year: '2018'
};

const certifications = [
  { title: 'Microsoft Certified: Power Platform Developer', issuer: 'Microsoft', date: '2023' },
  { title: 'Salesforce Certified Administrator', issuer: 'Salesforce', date: '2022' },
  { title: 'AWS Certified Solutions Architect', issuer: 'Amazon', date: '2022' },
  { title: 'Google Cloud Professional', issuer: 'Google', date: '2021' },
  { title: 'Python for Data Science', issuer: 'Coursera', date: '2020' }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-background">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building automation solutions and optimizing systems across industries
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 gradient-card border-border/50 hover:border-primary/30 transition-smooth hover:shadow-glow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 border-primary/50 text-primary w-fit">
                    {exp.period}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-serif font-semibold text-foreground">Education</h3>
          </div>

          <Card className="p-6 gradient-card border-border/50">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-1">{education.degree}</h4>
                <p className="text-primary font-medium">{education.school}</p>
              </div>
              <Badge variant="outline" className="border-primary/50 text-primary">
                {education.year}
              </Badge>
            </div>
          </Card>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-serif font-semibold text-foreground">Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-4 gradient-card border-border/50 hover:border-primary/30 transition-smooth hover:shadow-glow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-foreground mb-1 line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-primary mt-1">{cert.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
