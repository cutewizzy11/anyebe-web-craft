import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2, Eye, ShoppingCart } from "lucide-react";

export function Projects() {
  const projects = [
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
      category: "Desktop Application"
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
      category: "Desktop Application"
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
      category: "Web Application"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions spanning desktop applications, web development, and accessibility-focused platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift shadow-soft border-0 card-gradient animate-fade-up">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                      {project.category}
                    </Badge>
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
                      {project.features.map((feature, idx) => (
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
                      {project.technologies.map((tech) => (
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
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}