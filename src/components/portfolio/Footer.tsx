import { Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl">Paul Anyebe</span>
          </div>
          
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
            WordPress Developer & Cyber Security Expert crafting secure, 
            innovative web solutions for businesses worldwide.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/60">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>using React & TypeScript</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Paul Anyebe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}