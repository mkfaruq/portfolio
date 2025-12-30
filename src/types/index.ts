export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    domain: string;
    image: string;
    figmaLink: string;
    liveLink: string;
    problem: string;
    role: string[];
    process: { step: string; description: string }[];
    outcomes: { metric: string; result: string }[];
}
