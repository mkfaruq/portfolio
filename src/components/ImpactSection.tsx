import { Briefcase, Layout, Clock, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: Briefcase, value: "12+", label: "Products Designed" },
  { icon: Layout, value: "20+", label: "Dashboards Delivered" },
  { icon: Clock, value: "2+", label: "Years Experience" },
  { icon: Star, value: "100%", label: "Client Satisfaction" },
];

const ImpactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="impact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className={`text-accent font-medium tracking-wide uppercase text-sm mb-3 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '150ms' : '0ms' }}>
            Results
          </p>
          <h2 className={`text-4xl md:text-5xl font-display font-bold transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}>
            My Impact
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group bg-card rounded-2xl p-8 border border-border text-center hover:shadow-glow hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : '0ms' }}
              >
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <Icon size={32} />
                </div>
                <p className="text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;