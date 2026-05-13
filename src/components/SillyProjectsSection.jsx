import { ExternalLink, Github } from "lucide-react";

const sillyProjects = [
  {
    id: 1,
    image: "projects/birthday.png",
    title: "Birthday Countdown",
    description:
      "A fun little countdown timer built to count down the days, hours, and minutes to someone's birthday. Because suspense is half the gift.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://lucas1792003.github.io/Birthday-Countdown/",
    githubUrl: "https://github.com/Lucas1792003/Birthday-Countdown",
  },
  {
    id: 2,
    image: "projects/speciial_person.png",
    title: "Special Person",
    description:
      "A multi-page interactive web experience crafted for a special someone. No frameworks — just pure HTML, CSS, and a little too much heart.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://lucas1792003.github.io/special-person/",
    githubUrl: "https://github.com/Lucas1792003/special-person",
  },
];

export const SillyProjectsSection = () => {
  return (
    <section id="silly-projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Silly</span> Projects
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Not everything has to be serious. These are the little things I built
          for fun, for people, or just because I could.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {sillyProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full max-w-sm"
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
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex items-center space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
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
          ))}
        </div>
      </div>
    </section>
  );
};
