import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "UI/UX Engineer",
    company: "SmartThink",
    period: "Jul 2024 - Present",
    description: "Designing intuitive digital product experiences, translating user needs into clean and functional interfaces. Created wireframes, high-fidelity mockups and interactive prototypes in Figma.",
    current: true,
  },
  {
    title: "Designer",
    company: "Prime IT",
    period: "Dec 2017 - Mar 2019",
    description: "Worked as a product designer for a USA-based company, creating 3D mockups and visual assets for promotional items. Delivered product designs and supervised mold design for factory production.",
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-1/2'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-background md:-translate-x-1/2 ${
                exp.current ? 'bg-accent' : 'bg-muted-foreground'
              }`} />

              <div className={`bg-card p-6 rounded-2xl shadow-soft border border-border hover:shadow-glow transition-all duration-500 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className={`flex items-center gap-2 text-accent text-sm mb-2 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                  {exp.current && (
                    <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-display font-semibold mb-1">{exp.title}</h3>
                <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
