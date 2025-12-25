import { ArrowDown, Dribbble, Facebook, Linkedin, MessageCircle, FileDown, Mail } from "lucide-react";
import profileImage from "@/assets/profile-new.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-work-sans font-bold leading-tight mb-4 relative z-10">
              <span className="text-gradient animate-gradient-shift inline-block overflow-hidden whitespace-nowrap animate-typewriter border-r-2 border-accent">
                Product UI/UX Designer
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium mb-6">
              specialized in SaaS Dashboards, Web & Mobile Applications and Complex Platforms
            </p>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              2+ years of experience designing data-driven web and mobile products - including government service platforms, IoT & anti money laundering monitoring systems, B2B business platform.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <a 
                href="https://dribbble.com/mkfaruq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:rotate-[360deg] transition-all duration-[3000ms] ease-in-out btn-3d"
                aria-label="Dribbble"
              >
                <Dribbble size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mkfaruq"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:rotate-[360deg] transition-all duration-[3000ms] ease-in-out btn-3d"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.facebook.com/faruq41" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:rotate-[360deg] transition-all duration-[3000ms] ease-in-out btn-3d"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:mkfaruqhossain@gmail.com" 
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:rotate-[360deg] transition-all duration-[3000ms] ease-in-out btn-3d"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://wa.me/8801750005162" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:rotate-[360deg] transition-all duration-[3000ms] ease-in-out btn-3d"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="/Faruq_Hossain_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent/90 text-accent-foreground font-medium rounded-full btn-3d glow-accent btn-sweep"
              >
                <FileDown size={20} strokeWidth={2} />
                Download Resume
              </a>
              <a 
                href="#projects"
                className="inline-flex items-center gap-3 text-foreground font-medium group"
              >
                <span className="w-12 h-12 rounded-full border-2 border-foreground/30 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <ArrowDown size={18} className="animate-bounce" />
                </span>
                <span className="group-hover:text-accent transition-colors">View Case Studies</span>
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl rotate-6 scale-105 glow-accent" />
              <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden shadow-glow glow-subtle">
                <img 
                  src={profileImage} 
                  alt="Faruq Hossain - UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;