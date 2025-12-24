import { Palette, Layers, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = {
  tools: ["Figma", "Photoshop", "Illustrator", "Blender"],
  core: ["UI Design", "UX Research", "Wireframing", "Prototyping", "Design Systems", "Visual Design"],
  soft: ["Team Collaboration", "Problem Solving", "Communication"],
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      id="skills" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 bg-secondary/10 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Skills & Tools
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Design Tools */}
          <div 
            className={`bg-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-glow transition-all duration-700 ease-out group ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}
            style={{ transitionDelay: isVisible ? '150ms' : '0ms' }}
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
              <Palette size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold mb-4">Design Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, idx) => (
                <span 
                  key={skill}
                  className={`px-3 py-1.5 bg-secondary text-sm rounded-full text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transition: `opacity 500ms ease-out, transform 500ms ease-out, background-color 200ms, color 200ms`, transitionDelay: isVisible ? `${300 + idx * 75}ms` : '0ms' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div 
            className={`bg-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-glow transition-all duration-700 ease-out group ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}
            style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.core.map((skill, idx) => (
                <span 
                  key={skill}
                  className={`px-3 py-1.5 bg-secondary text-sm rounded-full text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transition: `opacity 500ms ease-out, transform 500ms ease-out, background-color 200ms, color 200ms`, transitionDelay: isVisible ? `${450 + idx * 75}ms` : '0ms' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div 
            className={`bg-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-glow transition-all duration-700 ease-out group ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}
            style={{ transitionDelay: isVisible ? '450ms' : '0ms' }}
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill, idx) => (
                <span 
                  key={skill}
                  className={`px-3 py-1.5 bg-secondary text-sm rounded-full text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transition: `opacity 500ms ease-out, transform 500ms ease-out, background-color 200ms, color 200ms`, transitionDelay: isVisible ? `${600 + idx * 75}ms` : '0ms' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
