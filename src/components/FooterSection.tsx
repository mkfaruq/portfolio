import { Dribbble, Youtube, Mail, Linkedin, Facebook, Box } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FooterSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <footer 
      id="contact" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-6 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's work together
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </div>

        {/* Social links */}
        <div className={`flex flex-wrap items-center justify-center gap-4 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '150ms' }}>
          <a 
            href="mailto:faruq1287@gmail.com"
            className="flex items-center gap-2 px-5 py-3 bg-accent/90 text-accent-foreground rounded-full transition-all duration-300 btn-3d btn-sweep"
          >
            <Mail size={18} />
            <span className="text-sm font-medium">Email Me</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/mkfaruq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-full transition-all duration-300 btn-3d btn-sweep hover:text-accent-foreground"
          >
            <Linkedin size={18} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a 
            href="https://dribbble.com/mkfaruq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-full transition-all duration-300 btn-3d btn-sweep hover:text-accent-foreground"
          >
            <Dribbble size={18} />
            <span className="text-sm font-medium">Dribbble</span>
          </a>
          <a 
            href="https://www.facebook.com/faruq41" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-full transition-all duration-300 btn-3d btn-sweep hover:text-accent-foreground"
          >
            <Facebook size={18} />
            <span className="text-sm font-medium">Facebook</span>
          </a>
          <a 
            href="https://sketchfab.com/Faruq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-full transition-all duration-300 btn-3d btn-sweep hover:text-accent-foreground"
          >
            <Box size={18} />
            <span className="text-sm font-medium">Sketchfab</span>
          </a>
          <a 
            href="https://youtu.be/S1WnwtPJdBg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-full transition-all duration-300 btn-3d btn-sweep hover:text-accent-foreground"
          >
            <Youtube size={18} />
            <span className="text-sm font-medium">YouTube</span>
          </a>
        </div>

        {/* Bottom */}
        <div className={`pt-8 border-t border-border transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Faruq Hossain. Designed with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
