import { Mail, Dribbble, Youtube, ExternalLink } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
          Get in Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Let's work together
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-10">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <a 
            href="https://dribbble.com/mkfaruq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
          >
            <Dribbble size={18} />
            <span className="text-sm font-medium">Dribbble</span>
          </a>
          <a 
            href="https://youtu.be/S1WnwtPJdBg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
          >
            <Youtube size={18} />
            <span className="text-sm font-medium">YouTube</span>
          </a>
          <a 
            href="https://flickr.com/photos/mfaruq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
          >
            <ExternalLink size={18} />
            <span className="text-sm font-medium">Flickr</span>
          </a>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Faruq Hossain. Designed with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
