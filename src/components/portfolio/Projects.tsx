import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2, Eye, ShoppingCart, Globe, CheckCircle } from "lucide-react";

export function Projects() {
  const liveWebsites = [
    {
      title: "EdgeMont Homes Nigeria",
      description: "A sophisticated real estate platform combining property listings with intelligent email marketing and lead generation systems. Features countdown timer and modern real estate showcase design.",
      technologies: ["WordPress", "Custom PHP", "JavaScript", "Email Marketing Integration", "Lead Generation"],
      features: [
        "Interactive countdown launch timer",
        "Real estate property showcase design",
        "Email marketing automation system",
        "Lead generation and conversion tools"
      ],
      icon: Eye,
      category: "Real Estate Platform",
      liveUrl: "https://edgemonthomesng.com/",
      status: "Live (Coming Soon Page)",
      isLive: true
    },
    {
      title: "EfosaEseosa Children Foundation",
      description: "A comprehensive non-profit website for a children's foundation that has helped over 2,000 children worldwide. Features donation systems, impact tracking, and community engagement tools.",
      technologies: ["WordPress", "Donation Plugin Integration", "Custom Post Types", "Responsive Design"],
      features: [
        "Donation and fundraising system",
        "Impact metrics and statistics display",
        "Community engagement features",
        "Multi-page content management system"
      ],
      icon: ShoppingCart,
      category: "Non-Profit Website",
      liveUrl: "https://efosaeseosachildrensfoundation.org/",
      status: "Fully Live",
      isLive: true
    },
    {
      title: "PAZ Solar Solutions",
      description: "Professional solar energy company website offering solar panel installation, EV charging infrastructure, and electric equipment manufacturing. Built for B2B and government contracts.",
      technologies: ["WordPress", "Business Directory", "Service Pages", "Contact Forms", "SEO Optimization"],
      features: [
        "Service portfolio showcase",
        "Corporate partnership displays",
        "Government certification badges",
        "Professional consultation booking system"
      ],
      icon: Code2,
      category: "Corporate Website",
      liveUrl: "https://pazsolarsoln.com/",
      status: "Fully Live",
      isLive: true
    }
  ];

  const developmentProjects = [
    {
      title: "Fingerprint Biometric Attendance System",
      description: "A comprehensive biometric attendance system built with C# .NET Framework, featuring fingerprint recognition and real-time attendance tracking for enhanced security and accuracy.",
      technologies: ["C# .NET Framework", "SQL Server", "Biometric Integration", "Windows Forms"],
      features: [
        "Real-time fingerprint scanning and recognition",
        "Automated attendance logging and reporting",
        "Secure user authentication and data management",
        "Comprehensive admin dashboard with analytics"
      ],
      icon: Eye,
      category: "Desktop Application",
      status: "Completed",
      isLive: false
    },
    {
      title: "Bicycle Rental System",
      description: "An intuitive bicycle rental management system developed with Java and JavaFX, streamlining the rental process with user-friendly interfaces and efficient booking management.",
      technologies: ["Java", "JavaFX", "MySQL", "Scene Builder"],
      features: [
        "Interactive rental booking interface",
        "Real-time bicycle availability tracking",
        "Customer management and rental history",
        "Payment processing and receipt generation"
      ],
      icon: Code2,
      category: "Desktop Application",
      status: "Completed",
      isLive: false
    },
    {
      title: "E-Commerce WebStore For Visually Impaired",
      description: "An accessible e-commerce platform built with MERN stack, specifically designed to provide an inclusive shopping experience for visually impaired users with advanced accessibility features.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Accessibility APIs"],
      features: [
        "Screen reader optimized interface design",
        "Voice navigation and audio feedback",
        "High contrast themes and large text options",
        "Keyboard-only navigation support"
      ],
      icon: ShoppingCart,
      category: "Web Application",
      status: "Completed",
      isLive: false
    }
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <Card key={index} className="hover-lift shadow-soft border-0 card-gradient animate-fade-up">
      <CardContent className="p-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <project.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                {project.category}
              </Badge>
              {project.isLive && (
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                  <Globe className="w-3 h-3 mr-1" />
                  Live
                </Badge>
              )}
            </div>
          </div>
          
          <h3 className="text-xl font-heading font-semibold mb-3 leading-tight">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold mb-3 text-primary">Key Features</h4>
            <ul className="space-y-2">
              {project.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-primary">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="bg-accent/10 text-accent hover:bg-accent/20 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            {project.isLive ? (
              <>
                <Button 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    View Live
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </>
            ) : (
              <>
                <Button size="sm" variant="outline" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive showcase of live WordPress websites and innovative development projects spanning 
            real estate, non-profit, corporate solutions, and accessibility-focused platforms
          </p>
        </div>

        {/* Live WordPress Websites */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-2xl font-heading font-semibold">Live WordPress Websites</h3>
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
              Client Projects
            </Badge>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {liveWebsites.map((project, index) => (
              <ProjectCard key={`live-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Development Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-semibold">Development Projects</h3>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Personal Projects
            </Badge>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {developmentProjects.map((project, index) => (
              <ProjectCard key={`dev-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}