import { Search, LayoutDashboard, Smartphone, MousePointer } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Search,
    title: "UX Audit & Redesign",
    description: "Identify usability issues & improve engagement through comprehensive analysis and strategic redesign.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Dashboard Design",
    description: "Scalable admin experiences for growing teams with intuitive data visualization and workflows.",
  },
  {
    icon: Smartphone,
    title: "Mobile App UI/UX",
    description: "Clean interfaces users understand instantly with seamless mobile-first design patterns.",
  },
  {
    icon: MousePointer,
    title: "Landing Page UX",
    description: "High-converting landing page experiences that turn visitors into customers.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className={`text-accent font-medium tracking-wide uppercase text-sm mb-3 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '150ms' : '0ms' }}>
            Services
          </p>
          <h2 className={`text-4xl md:text-5xl font-display font-bold transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}>
            How I Can Help You
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-card rounded-2xl p-6 border border-border hover:shadow-glow hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : '0ms' }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;