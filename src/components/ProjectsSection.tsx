import { ExternalLink, Figma } from "lucide-react";

const projects = [
  {
    title: "Bongo Source",
    description: "B2B Marketplace App designed using Material Design patterns and user-centered flows, optimizing buyer-seller interactions.",
    tags: ["Mobile App", "B2B", "Material Design"],
    figmaLink: "#",
    liveLink: "#",
  },
  {
    title: "IoT System Monitoring Dashboard",
    description: "Enhanced dashboard through clear data visualization, improved information architecture, and intuitive layouts.",
    tags: ["Dashboard", "IoT", "Data Visualization"],
    figmaLink: "#",
    liveLink: "https://dribbble.com/mkfaruq",
  },
  {
    title: "Post Office Mail Booking System",
    description: "Redesigned using Interaction Design principles and Responsive Design, reducing user clicks and task time.",
    tags: ["Web App", "Government", "UX Research"],
    figmaLink: "#",
    liveLink: "#",
  },
  {
    title: "iBanker – AML Dashboard",
    description: "Anti-Money Laundering Cloud Dashboard with accessible, user-focused interfaces that improved task completion rates.",
    tags: ["Dashboard", "Fintech", "Cloud"],
    figmaLink: "#",
    liveLink: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Selected Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project visual placeholder */}
              <div className="h-48 bg-gradient-to-br from-accent/5 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--accent)/0.05)_25%,hsl(var(--accent)/0.05)_50%,transparent_50%,transparent_75%,hsl(var(--accent)/0.05)_75%)] bg-[length:20px_20px]" />
                <span className="text-6xl font-display font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
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
                
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  <a 
                    href={project.figmaLink}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
                  >
                    <Figma size={16} />
                    Figma
                  </a>
                  <a 
                    href={project.liveLink}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>
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
