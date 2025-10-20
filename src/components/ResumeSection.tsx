import { Download, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 px-6 section-light">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download or preview my latest resume below
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="gradient-accent text-primary-foreground shadow-glow shadow-glow-hover transition-all duration-300"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Zach_OConnor_Resume.pdf';
              link.download = 'Zach_OConnor_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-foreground hover:bg-primary/10 hover:border-primary hover:shadow-glow transition-all duration-300"
            onClick={() => window.open('/Zach_OConnor_Resume.pdf', '_blank')}
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Open in New Tab
          </Button>
        </div>

        {/* PDF Viewer */}
        <Card className="overflow-hidden gradient-card border-2 border-border shadow-lg">
          <div className="bg-surface/50 p-4 border-b border-border flex items-center gap-3">
            <FileText className="h-5 w-5 text-primary" />
            <span className="text-foreground font-medium">Zach_OConnor_Resume.pdf</span>
          </div>
          
          <div className="relative w-full" style={{ minHeight: '800px' }}>
            <iframe
              src="/Zach_OConnor_Resume.pdf"
              className="w-full h-full"
              style={{ minHeight: '800px' }}
              title="Resume PDF Viewer"
              onError={() => {
                const iframe = document.querySelector('iframe[title="Resume PDF Viewer"]');
                if (iframe) {
                  iframe.parentElement!.innerHTML = `
                    <div class="flex flex-col items-center justify-center p-12 text-center">
                      <FileText class="h-16 w-16 text-muted-foreground mb-4" />
                      <h3 class="text-xl font-semibold text-foreground mb-2">Preview Not Available</h3>
                      <p class="text-muted-foreground mb-6 max-w-md">
                        If the preview doesn't load, please use the buttons above to view or download the file.
                      </p>
                    </div>
                  `;
                }
              }}
            />
          </div>
        </Card>

        {/* Fallback message */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Having trouble viewing the resume? Try{' '}
            <button
              onClick={() => window.open('/Zach_OConnor_Resume.pdf', '_blank')}
              className="text-primary hover:underline font-medium"
            >
              opening it in a new tab
            </button>
            {' '}or{' '}
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Zach_OConnor_Resume.pdf';
                link.download = 'Zach_OConnor_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="text-primary hover:underline font-medium"
            >
              downloading it directly
            </button>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
