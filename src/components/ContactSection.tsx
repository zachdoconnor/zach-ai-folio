import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: 'Thank you for reaching out. I\'ll get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/zaoconnor/',
      color: 'hover:text-[#0A66C2]'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/zachdoconnor',
      color: 'hover:text-foreground'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:zachdoconnor@gmail.com',
      color: 'hover:text-primary'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 section-light border-t-2 border-border/30">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss how we can work together on your next project
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <Card className="p-8 gradient-card border-2 border-border shadow-lg md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background-alt border-2 border-border text-foreground focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background-alt border-2 border-border text-foreground focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-background-alt border-2 border-border text-foreground resize-none focus:border-primary transition-colors"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-accent text-primary-foreground shadow-glow shadow-glow-hover transition-all duration-300"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <Card className="p-8 gradient-card border-2 border-border shadow-lg md:col-span-2">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
              Connect With Me
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span>Indianapolis, IN</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <a href="mailto:zachdoconnor@gmail.com" className="hover:text-primary transition-colors link-underline">
                  zachdoconnor@gmail.com
                </a>
              </div>
            </div>

            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border-2 border-border hover:border-primary/40 bg-background-alt/50 hover:bg-background-alt transition-all duration-300 group shadow-md hover:shadow-glow"
                >
                  <social.icon className={`h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors`} />
                  <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Zach O'Connor. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
