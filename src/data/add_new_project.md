# How to Add a New Case Study

Since we are using a **Local Data** approach (best for performance & security without a CMS), adding a project is as simple as filling out this form.

## Step 1: Add your Image
1.  Put your project cover image in `src/assets/`.
2.  Name it logically, e.g., `project-my-new-app.jpg`.

## Step 2: Update the Data File
1.  Open `src/data/projects.tsx`.
2.  Import your image at the top:
    ```typescript
    import projectNew from "@/assets/project-my-new-app.jpg";
    ```
3.  Copy the **Template** below and paste it into the `projects` array.

## Template (Copy & Paste)

```typescript
    {
        id: "unique-project-id", // URL slug (e.g., /case-study/unique-project-id)
        title: "Project Title",
        subtitle: "Short Subtitle / Category",
        description: "Brief summary of what the project is.",
        tags: ["Tag 1", "Tag 2", "Tag 3"],
        domain: "Industry Domain", // e.g., Fintech, IoT, Healthcare
        image: projectNew, // The variable name you imported above
        figmaLink: "#",
        liveLink: "#",
        problem: "What was the core problem? Explain the user pain points.",
        role: [
            "Your role 1",
            "Your role 2",
            "Your role 3",
        ],
        process: [
            { step: "Discovery", description: "What did you do first?" },
            { step: "Research", description: "How did you validate it?" },
            { step: "Design", description: "What was the design outcome?" },
            { step: "Testing", description: "How did users respond?" },
        ],
        outcomes: [
            { metric: "Metric 1", result: "Result 1" },
            { metric: "Metric 2", result: "Result 2" },
            { metric: "Metric 3", result: "Result 3" },
        ],
    },
```
