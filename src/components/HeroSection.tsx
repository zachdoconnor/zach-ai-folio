import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-primary text-sm font-medium tracking-wide uppercase">
                Portfolio
              </p>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                Zach O'Connor
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                AI & Automation • Product & Systems
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Systems Engineer and AI Solutions Designer passionate about optimizing workflows,
              building automation ecosystems, and bridging business and technology.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('experience')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group"
              >
                View Experience
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10"
                onClick={() => window.open('/Zach_OConnor_Resume.pdf', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="hidden md:block animate-fade-in">
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl bg-gradient-card border border-border/50 shadow-glow overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-primary/30 mx-auto mb-4 flex items-center justify-center text-6xl">
                      👨‍💻
                    </div>
                    <p className="text-muted-foreground text-sm">Profile Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground h-6 w-6" />
      </div>
    </section>
  );
};
