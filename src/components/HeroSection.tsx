import { ArrowDown, Dribbble, Youtube, Facebook, Linkedin, Download, Box } from "lucide-react";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
              UI/UX Designer
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Faruq
              <br />
              <span className="text-gradient">Hossain</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Creative UI/UX designer with 2+ years of experience crafting user-centered digital interfaces. Passionate about turning complex requirements into elegant and functional designs.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <a 
                href="https://www.linkedin.com/in/mkfaruq"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:rotate-180 transition-all duration-500 btn-3d"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://dribbble.com/mkfaruq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:rotate-180 transition-all duration-500 btn-3d"
                aria-label="Dribbble"
              >
                <Dribbble size={20} />
              </a>
              <a 
                href="https://www.facebook.com/faruq41" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:rotate-180 transition-all duration-500 btn-3d"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://sketchfab.com/Faruq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:rotate-180 transition-all duration-500 btn-3d"
                aria-label="Sketchfab"
              >
                <Box size={20} />
              </a>
              <a 
                href="https://youtu.be/S1WnwtPJdBg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:rotate-180 transition-all duration-500 btn-3d"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href={`${import.meta.env.BASE_URL}Faruq_Hossain_Resume.pdf`}
                download="Faruq_Hossain_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent/90 text-accent-foreground font-medium rounded-full btn-3d glow-accent btn-sweep"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a 
                href="#projects"
                className="inline-flex items-center gap-3 text-foreground font-medium group"
              >
                <span className="w-12 h-12 rounded-full border-2 border-foreground/30 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <ArrowDown size={18} className="animate-bounce" />
                </span>
                <span className="group-hover:text-accent transition-colors">View my work</span>
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl rotate-6 scale-105 glow-accent" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-glow glow-subtle">
                <img 
                  src={profileImage} 
                  alt="Faruq Hossain - UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card px-5 py-3 rounded-2xl shadow-soft border border-border">
                <p className="text-sm font-medium">2+ Years</p>
                <p className="text-xs text-muted-foreground">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
