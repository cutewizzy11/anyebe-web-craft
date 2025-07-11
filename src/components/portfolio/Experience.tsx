import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "WordPress Developer",
      company: "Eduteach Nigeria",
      location: "Sabo, Lagos, Nigeria",
      period: "August 2023 - February 2024",
      type: "Full-time",
      achievements: [
        "Spearheaded the development and implementation of the company's website, integrating a tutor test and client booking system",
        "Ensured data integrity by regulating input into the company's database and conducting regular error checks",
        "Delivered a comprehensive booking platform that streamlined client-tutor connections"
      ],
      skills: ["WordPress", "Database Management", "Client Relations", "System Integration"]
    },
    {
      title: "Networking Intern",
      company: "Benue State University",
      location: "Makurdi, Benue State, Nigeria", 
      period: "July 2019 - December 2020",
      type: "Internship",
      achievements: [
        "Optimized internet access for the university community by re-configuring servers to accommodate more logins",
        "Implemented a secure record-keeping system for user credentials, enhancing accountability and security",
        "Improved network performance and user experience across the university infrastructure"
      ],
      skills: ["Network Administration", "Server Configuration", "Security Implementation", "System Optimization"]
    },
    {
      title: "Ambassador",
      company: "I4G (Ingressive For Good)",
      location: "Remote",
      period: "February 2020",
      type: "Volunteer",
      achievements: [
        "Collaborated with a team of ambassadors to promote awareness and drive youth-led initiatives",
        "Leveraged technology for societal impact through various outreach programs",
        "Contributed to community building and tech education initiatives"
      ],
      skills: ["Community Building", "Tech Advocacy", "Team Collaboration", "Public Speaking"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of growth and impact across WordPress development, networking, and community building
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-lift shadow-soft border-0 card-gradient animate-fade-up">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-heading font-semibold">{exp.title}</h3>
                      <Badge 
                        variant="outline" 
                        className="bg-accent/10 text-accent border-accent/20 font-medium"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}