import { Search, FileText, PenTool, Palette, TestTube, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: Search, label: "Discover", description: "Stakeholder interviews & requirement analysis" },
  { icon: FileText, label: "Research", description: "Usability testing & task mapping" },
  { icon: PenTool, label: "Wireframe", description: "User flows & information architecture" },
  { icon: Palette, label: "Design", description: "High-fidelity UI & component systems" },
  { icon: TestTube, label: "Test", description: "Iterative usability validation" },
  { icon: Rocket, label: "Deliver", description: "Dev handoff, QA support & revisions" },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="process"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 bg-secondary/10 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className={`text-accent font-medium tracking-wide uppercase text-sm mb-3 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '150ms' : '0ms' }}>
            Workflow
          </p>
          <h2 className={`text-4xl md:text-5xl font-display font-bold transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}>
            My Design Process
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border" />
          <div
            className={`hidden lg:block absolute top-12 left-0 h-0.5 bg-accent transition-all duration-[2000ms] ease-out ${isVisible ? 'w-full' : 'w-0'}`}
            style={{ transitionDelay: '500ms' }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: isVisible ? `${(index + 1) * 200}ms` : '0ms' }}
                >
                  <div className="relative z-10 w-24 h-24 rounded-2xl glass-card flex items-center justify-center mb-4 group hover:border-accent hover:shadow-glow transition-all duration-300">
                    <Icon size={32} className="text-accent" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold mb-1">{step.label}</h3>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;