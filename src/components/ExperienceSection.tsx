import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    company: 'RipplePoint',
    location: 'Remote',
    roles: [
      {
        title: 'Director of Product, AI & Automation',
        period: 'Sep 2025 – Present',
        description: [
          'Leading the design and rollout of an AI-powered CRM platform to streamline internal operations and improve client management.',
          'Overseeing automation initiatives that connect Outlook, SharePoint, and Power Automate to simplify communication and workflow tracking.',
          'Partnering with developers and stakeholders to define system requirements, build wireframes, and ensure business alignment across departments.'
        ]
      },
      {
        title: 'Systems Engineer / Analyst',
        period: 'Sep 2024 – Oct 2025',
        description: [
          'Designed RipplePoint\'s next-generation CRM system by mapping workflows, gathering requirements, and delivering technical specifications.',
          'Automated email categorization and data logging, saving over five hours per week for each project manager.',
          'Integrated Jira and Power Automate to unify ticket tracking and improve cross-team collaboration.',
          'Collaborated with developers to implement an AI-driven OCR model that matches invoices to contracts and reduces manual entry.'
        ]
      }
    ]
  },
  {
    company: 'Momentum Life Sciences',
    location: 'Indianapolis, IN',
    roles: [
      {
        title: 'Systems Engineering Intern',
        period: 'Jun 2023 – Aug 2023',
        description: [
          'Worked in Salesforce Health Cloud to build new functionality, enhance dashboards, and test system updates.',
          'Participated in daily Scrum meetings under the SAFe framework to align on progress and remove blockers.',
          'Conducted stakeholder interviews to design dashboards that improved visibility across departments.'
        ]
      },
      {
        title: 'CRM Database Intern',
        period: 'May 2022 – Sep 2022',
        description: [
          'Led a team of interns to build and maintain a Salesforce Org integrated with Outreach, improving client tracking and reporting.',
          'Cleaned and standardized CRM data to strengthen reporting accuracy and system reliability.'
        ]
      },
      {
        title: 'Business Development Intern',
        period: 'Jun 2021 – Aug 2021',
        description: [
          'Researched over 600 pipeline NDAs to identify new deal opportunities and support client outreach.',
          'Presented findings to leadership and helped implement a new Salesforce tracking system for business development.'
        ]
      }
    ]
  }
];

const education = [
  {
    school: 'Indiana University – Kelley School of Business',
    degree: 'Master of Science in Information Systems (Cybersecurity & Risk Analytics)',
    year: 'May 2024'
  },
  {
    school: 'Indiana University – Luddy School of Informatics, Computing, and Engineering',
    degree: 'Bachelor of Science in Informatics, Cognate in Business',
    year: 'May 2023'
  }
];

const certifications = [
  { title: 'Microsoft Certified: Azure AI Fundamentals', issuer: 'Microsoft', date: '2025' },
  { title: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft', date: '2025' },
  { title: 'Microsoft 365 Certified: Fundamentals', issuer: 'Microsoft', date: '2025' },
  { title: 'Google AI Essentials', issuer: 'Google', date: '2025' },
  { title: 'Salesforce Certified Administrator (SCA)', issuer: 'Salesforce', date: '2025' },
  { title: 'Artificial Intelligence and Data Science for Leaders', issuer: 'University of Chicago', date: '2023' }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 section-dark border-t-2 border-border/30">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bridging data, automation, and business strategy to design systems that drive efficiency and meaningful impact.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-8">
            {experiences.map((company, companyIndex) => (
              <div key={companyIndex} className="space-y-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-semibold text-foreground">{company.company}</h4>
                    <p className="text-muted-foreground text-sm">{company.location}</p>
                  </div>
                </div>
                
                <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                  {company.roles.map((role, roleIndex) => (
                    <Card
                      key={roleIndex}
                      className="p-6 gradient-card border-2 border-border card-hover shadow-lg hover:shadow-glow-hover hover:border-primary/40 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h5 className="text-lg font-semibold text-foreground mb-1">{role.title}</h5>
                        </div>
                        <Badge variant="outline" className={`mt-2 md:mt-0 border-primary/60 text-primary w-fit ${companyIndex === 0 && roleIndex === 0 ? 'bg-primary/10' : ''}`}>
                          {companyIndex === 0 && roleIndex === 0 ? '🌟 ' : ''}{role.period}
                        </Badge>
                      </div>
                      <ul className="space-y-2.5">
                        {role.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground flex items-start gap-3">
                            <span className="text-primary mt-1.5 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-foreground">Education</h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 gradient-card border-2 border-border shadow-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.school}</p>
                  </div>
                  <Badge variant="outline" className="border-primary/60 text-primary">
                    {edu.year}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
              <Award className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-foreground">Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-4 gradient-card border-2 border-border card-hover shadow-lg hover:shadow-glow-hover hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0 shadow-glow">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-foreground mb-1 line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-primary font-medium mt-1">{cert.date}</p>
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
