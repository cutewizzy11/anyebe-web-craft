import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Shield, Users, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "WordPress Expertise",
      description: "5+ years developing custom WordPress solutions with advanced functionality"
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "B.Tech in Cyber Security ensuring secure, protected web applications"
    },
    {
      icon: Users,
      title: "Client Relations",
      description: "Proven track record in customer service and challenging client interactions"
    },
    {
      icon: Zap,
      title: "Full-Stack Development",
      description: "MERN stack expertise for comprehensive web solutions"
    }
  ];

  const skills = [
    "WordPress", "Shopify", "MERN Stack", "JavaScript", "React", "Node.js", 
    "PHP", "MySQL", "RoboFlow", "C# .Net", "Java", "Cyber Security", 
    "Database Management", "API Integration"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate WordPress developer and cyber security expert with a proven track record 
            of delivering high-quality web solutions. I combine technical expertise with strong 
            client relationship skills to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-4">My Expertise</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With 5 years of experience in WordPress development, I specialize in creating 
                  custom solutions that drive business growth. My background in Cyber Security 
                  ensures that every project is built with security best practices in mind.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 animate-fade-up">
            {highlights.map((item) => (
              <Card key={item.title} className="hover-lift shadow-soft border-0 card-gradient">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}