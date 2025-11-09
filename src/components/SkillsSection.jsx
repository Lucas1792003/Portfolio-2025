import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 55, category: "frontend" },
  { name: "JavaScript", level: 45, category: "frontend" },
  { name: "React", level: 45, category: "frontend" },
  { name: "TypeScript", level: 25, category: "frontend" },
  { name: "Tailwind CSS", level: 30, category: "frontend" },
  // Backend
  { name: "Python", level: 50, category: "backend" },
  { name: "MongoDB", level: 35, category: "backend" },
  { name: "Supabase", level: 35, category: "backend" },
  { name: "AWS", level: 50, category: "backend" },
  // Tools
  { name: "Git/GitHub", level: 60, category: "tools" },
  { name: "Docker", level: 20, category: "tools" },
  { name: "Figma", level: 65, category: "tools" },
  { name: "VS Code", level: 80, category: "tools" },
  { name: "Canva", level: 80, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

// Map numeric level -> 1 (Beginner) / 2 (Intermediate) / 3 (Expert)
function getTier(level) {
  if (level >= 70) return 3; 
  if (level >= 35) return 2; 
  return 1;                  
}

function getLabel(tier) {
  return tier === 3 ? "Expert" : tier === 2 ? "Intermediate" : "Beginner";
}

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const tier = getTier(skill.level);
            const label = getLabel(tier);
            return (
              <div key={skill.name} className="bg-card p-6 rounded-lg shadow card-hover">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span
                    className={cn(
                      "text-xs px-2 py-1 rounded-full border",
                      tier === 3
                        ? "border-primary/50 text-primary bg-primary/10"
                        : tier === 2
                        ? "border-indigo-500/60 text-indigo-600 bg-indigo-50 dark:text-indigo-300 dark:border-indigo-400/60 dark:bg-indigo-400/10"
                        : "border-muted text-muted-foreground bg-muted/10"
                    )}
                  >
                    {label}
                  </span>

                </div>

                <DotIndicator tier={tier} />
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const DotIndicator = ({ tier, showLabels = true }) => {
  const stops = [0, 50, 100];
  const fillPct = ((tier - 1) / 2) * 100; 

  return (
    <div>

      <div className="relative h-2 rounded-full bg-neutral-100">

        <div
          className="absolute inset-y-0 left-0 rounded-full
                     bg-gradient-to-r from-primary/90 to-primary/70
                     shadow-[0_1px_4px_rgba(59,130,246,0.18)]"
          style={{ width: `${fillPct}%` }}
        />


        {stops.map((pct, idx) => {
          const active = idx + 1 <= tier;
          return (
            <span
              key={pct}
              style={{ left: `calc(${pct}% - 10px)` }}
              className={cn(
                "absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full z-10",
                "bg-white border-2",
                active
                  ? "border-primary/30 ring-2 ring-primary/20"
                  : "border-neutral-200"
              )}
            >
              <span
                className={cn(
                  "absolute inset-1 rounded-full",
                  active ? "bg-primary/90" : "bg-neutral-200"
                )}
              />
            </span>
          );
        })}
      </div>

      {showLabels && (
        <div className="flex justify-between text-sm text-neutral-500 mt-3">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      )}
    </div>
  );
};




