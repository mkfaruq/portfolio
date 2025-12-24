import { ExternalLink, Figma } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import projectBongoSource from "@/assets/project-bongo-source.jpg";
import projectIotDashboard from "@/assets/project-iot-dashboard.jpg";
import projectPostOffice from "@/assets/project-post-office.jpg";
import projectIbanker from "@/assets/project-ibanker.jpg";

const projects = [
  {
    title: "Bongo Source",
    description: "B2B Marketplace App designed using Material Design patterns and user-centered flows, optimizing buyer-seller interactions.",
    tags: ["Mobile App", "B2B", "Material Design"],
    image: projectBongoSource,
    figmaLink: "#",
    liveLink: "#",
  },
  {
    title: "IoT System Monitoring Dashboard",
    description: "Enhanced dashboard through clear data visualization, improved information architecture, and intuitive layouts.",
    tags: ["Dashboard", "IoT", "Data Visualization"],
    image: projectIotDashboard,
    figmaLink: "#",
    liveLink: "https://dribbble.com/mkfaruq",
  },
  {
    title: "Post Office Mail Booking System",
    description: "Redesigned using Interaction Design principles and Responsive Design, reducing user clicks and task time.",
    tags: ["Web App", "Government", "UX Research"],
    image: projectPostOffice,
    figmaLink: "#",
    liveLink: "#",
  },
  {
    title: "iBanker – AML Dashboard",
    description: "Anti-Money Laundering Cloud Dashboard with accessible, user-focused interfaces that improved task completion rates.",
    tags: ["Dashboard", "Fintech", "Cloud"],
    image: projectIbanker,
    figmaLink: "#",
    liveLink: "#",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section 
      id="projects" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 bg-secondary/10 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
          <p className={`text-accent font-medium tracking-wide uppercase text-sm mb-3 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '150ms' : '0ms' }}>
            Portfolio
          </p>
          <h2 className={`text-4xl md:text-5xl font-display font-bold transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}>
            Selected Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-[opacity,transform] duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"}`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms" }}
            >
              <div className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-glow hover:-translate-y-2 transition-[transform,box-shadow] duration-150 ease-out">
                {/* Project image */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent transition-colors duration-150">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.figmaLink}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-150"
                    >
                      <Figma size={16} />
                      Figma
                    </a>
                    <a
                      href={project.liveLink}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-150"
                    >
                      <ExternalLink size={16} />
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
