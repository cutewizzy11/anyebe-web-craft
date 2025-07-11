import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "B.Tech Cyber Security Science",
      institution: "Federal University of Technology",
      location: "Minna, Niger State, Nigeria",
      period: "September 2014 – July 2023",
      type: "Bachelor's Degree",
      description: "Comprehensive study in cyber security principles, network security, digital forensics, and information systems protection."
    },
    {
      degree: "Senior Secondary Certificate Examination (SSCE)",
      institution: "Federal Science College",
      location: "Ogoja, Cross River State, Nigeria",
      period: "September 2011 – June 2014",
      type: "Secondary Education",
      description: "Science-focused secondary education with emphasis on mathematics, physics, chemistry, and computer science."
    },
    {
      degree: "Junior Secondary School Certificate Examination (JSSCE)",
      institution: "Mount Saint Gabriel Secondary School",
      location: "Makurdi, Benue State, Nigeria",
      period: "October 2008 – August 2011",
      type: "Junior Secondary",
      description: "Foundation secondary education covering core subjects and introductory technology courses."
    },
    {
      degree: "First School Leaving Certificate (FSLC)",
      institution: "Nativity Private School",
      location: "Makurdi, Benue State, Nigeria",
      period: "February 2003 – July 2008",
      type: "Primary Education",
      description: "Primary education foundation with strong emphasis on academics and character development."
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Educational <span className="text-gradient">Background</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A strong academic foundation in cyber security and technology, complemented by comprehensive education across multiple institutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  
                  <Card className="ml-20 hover-lift shadow-soft border-0 card-gradient">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <GraduationCap className="w-6 h-6 text-primary" />
                            <Badge 
                              variant="outline" 
                              className="bg-primary/10 text-primary border-primary/20 font-medium"
                            >
                              {edu.type}
                            </Badge>
                          </div>
                          
                          <h3 className="text-xl font-heading font-semibold mb-2 leading-tight">
                            {edu.degree}
                          </h3>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{edu.institution}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}