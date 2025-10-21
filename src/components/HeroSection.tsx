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
      className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden border-b-2 border-border/30"
    >
      {/* Enhanced animated background with radial gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/15 via-transparent to-transparent" 
             style={{ background: 'radial-gradient(circle at top left, rgba(79,70,229,0.15), transparent 50%)' }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-3">
              <p className="text-primary text-sm font-semibold tracking-wider uppercase animate-slide-in">
                Portfolio
              </p>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                Zach O'Connor
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                AI & Automation • Product & Systems
              </p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
              I'm passionate about using technology to solve real business problems. With a background in data systems and AI automation, I help organizations bridge the gap between people, process, and technology. I design tools that make complex workflows simple, scalable, and efficient. At RipplePoint, I'm leading efforts to build a smarter CRM and automate the way teams manage data and operations.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-scale-in">
              <Button
                onClick={() => scrollToSection('experience')}
                size="lg"
                className="gradient-accent hover:opacity-90 text-primary-foreground shadow-glow shadow-glow-hover group transition-all duration-300"
              >
                View Experience
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-foreground hover:bg-primary/10 hover:border-primary hover:shadow-glow transition-all duration-300"
                onClick={() => window.open('/Zach_OConnor_Resume.pdf', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="hidden md:block animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative w-full aspect-square rounded-2xl bg-gradient-card border-2 border-border overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center text-7xl shadow-glow">
                      👨‍💻
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">Your Professional Photo</p>
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
