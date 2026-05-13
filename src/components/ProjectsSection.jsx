import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Lock, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MoodCast",
    description:
      "A smart weather companion that recommends moods, outfits, and plans based on the weather.",
    image: "projects/project3-1.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    demoUrl: "https://lucas1792003.github.io/MoodCast/",
    githubUrl: "https://github.com/Lucas1792003/MoodCast",
  },
  {
    id: 2,
    title: "Web Dev UI",
    description:
      "Interactive dashboard with Multiple projects directories and Cool featuring Elden Ring mode.",
    image: "projects/project2.png",
    tags: ["JavaScript", "React", "Html/Css"],
    demoUrl: "https://lucas1792003.github.io/waiyanpaing.github.io/",
    githubUrl: "https://github.com/Lucas1792003/waiyanpaing.github.io",
  },
  {
    id: 3,
    title: "MyatPwint Publishing",
    description: "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "projects/project1.png",
    tags: ["React", "Stripe", "Supabase", "Node.js"],
    demoNote: "Private company — live demo cannot be shared",
    githubUrl: "https://github.com/byte-squad-abac/myatpwint",
  },
];

export const ProjectsSection = () => {
  const [popup, setPopup] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Recent work that highlights my approach to building responsive, reliable, and performance-driven applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 items-center">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : project.demoNote ? (
                      <button
                        onClick={() => setPopup(project.demoNote)}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
                      >
                        <ExternalLink size={20} />
                      </button>
                    ) : null}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Lucas1792003"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {popup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setPopup(null)}
        >
          <div
            className="bg-card border rounded-lg shadow-lg px-6 py-5 max-w-sm w-full mx-4 flex items-start gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Lock size={20} className="text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-foreground flex-1">{popup}</p>
            <button
              onClick={() => setPopup(null)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 shrink-0"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
