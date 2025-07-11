import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "p.anyebe9@gmail.com",
      href: "mailto:p.anyebe9@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 8127700421",
      href: "tel:+2348127700421"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "No. 3, Akerele Street Onigbongbo, Maryland, Lagos Nigeria",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Paul Anyebe",
      href: "https://www.linkedin.com/in/paul-anyebe-844060255/"
    }
  ];

  const interests = [
    "Nature & Wildlife Conservation",
    "African Development", 
    "Podcasting",
    "AI Technology Research"
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your WordPress project to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-up">
            <Card className="shadow-card border-0 card-gradient h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-8">Get In Touch</h3>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{item.label}</h4>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Personal Interests</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <div 
                        key={interest}
                        className="bg-accent/10 text-accent rounded-lg px-3 py-2 text-sm font-medium text-center"
                      >
                        {interest}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="animate-fade-up flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-heading font-bold mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you need a custom WordPress solution, e-commerce platform, or secure web application, 
                I'm here to help bring your vision to life with cutting-edge technology and security best practices.
              </p>

              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold"
                  asChild
                >
                  <a href="mailto:p.anyebe9@gmail.com">
                    <Mail className="mr-2 w-5 h-5" />
                    Send Message
                  </a>
                </Button>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex-1"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/paul-anyebe-844060255/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 w-4 h-4" />
                      LinkedIn Profile
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex-1"
                    asChild
                  >
                    <a href="tel:+2348127700421">
                      <Phone className="mr-2 w-4 h-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                <h4 className="font-semibold mb-2 text-accent">Languages Spoken</h4>
                <p className="text-muted-foreground">English (Fluent), Idoma (Native)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}