import { Briefcase, Code, User, Gamepad2 } from "lucide-react";
import ResumeDownloadButton from "./ResumeDownloadButton";


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Web & Game Developer
            </h3>

            <p className="text-muted-foreground">
              Over the past year, I’ve been teaching myself web design and development, with a focus 
              on creating simple, responsive, and user-friendly websites. Along the way, I’ve been 
              exploring the fundamentals of front-end development, learning how to bring ideas to 
              life through clean layouts, intuitive interfaces, and a touch of creativity.
            </p>

            <p className="text-muted-foreground">
              I also enjoy experimenting with beginner-level game development, where I get to combine design, 
              logic, and interactivity in a fun way. I love blending creativity with code—turning ideas 
              into projects that not only look good but also work smoothly across devices. As I continue 
              to grow, I’m excited to learn new tools and bring fresh, modern design to every project I take on.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
              <ResumeDownloadButton />
            </div> */}


            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Lucas_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Learning to build simple, responsive websites and applications with modern tools and frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Exploring the basics of creating clean layouts, intuitive interfaces, and user-friendly designs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Game Development</h4>
                  <p className="text-muted-foreground">
                    Experimenting with beginner-level projects to understand design, logic, and interactivity.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Practicing through small self-initiated projects to apply skills and keep improving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
