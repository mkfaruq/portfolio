import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FooterSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <footer 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 px-6 bg-secondary/10"
    >
      <div className="max-w-4xl mx-auto">
        {/* SEO Text */}
        <div className={`text-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
            Product UI/UX Designer specializing in SaaS dashboards, fintech systems, IoT monitoring platforms and government service UX in Bangladesh.
          </p>
        </div>

        {/* Bottom */}
        <div className={`pt-6 border-t border-border text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '150ms' }}>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Faruq Hossain. Designed with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;