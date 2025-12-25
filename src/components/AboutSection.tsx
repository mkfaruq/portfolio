import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className={`text-accent font-medium tracking-wide uppercase text-sm mb-3 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '150ms' : '0ms' }}>
            About Me
          </p>
          <h2 className={`text-4xl md:text-5xl font-display font-bold transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}>
            Who I Am
          </h2>
        </div>

        <div className={`bg-card rounded-2xl p-8 md:p-12 border border-border shadow-soft transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: isVisible ? '450ms' : '0ms' }}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            I am a product-focused UI/UX designer with hands-on experience building complex systems for SaaS Dashboards, web applications, mobile apps & complex platforms. I collaborate closely with developers and stakeholders to translate business requirements into intuitive user experiences and scalable design systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
