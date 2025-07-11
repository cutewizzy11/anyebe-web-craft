import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-up">
          <div className="mb-6">
            <p className="text-lg font-medium mb-2 opacity-90">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
              PAUL ANYEBE
            </h1>
            <div className="text-xl md:text-2xl font-medium text-gradient mb-6">
              WordPress Developer & Cyber Security Expert
            </div>
          </div>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90 leading-relaxed">
            Energetic self-starter with 5 years of expertise in WordPress development and web solutions. 
            Proven ability to deliver exceptional service to clients with a strong background in Cyber Security.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-base">
              <MapPin className="w-4 h-4" />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-2 text-base">
              <Mail className="w-4 h-4" />
              <span>p.anyebe9@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-3"
              onClick={scrollToAbout}
            >
              View My Work
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent hover:bg-white/10 border-white/30 text-white font-semibold px-8 py-3"
              asChild
            >
              <a href="mailto:p.anyebe9@gmail.com">
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
}