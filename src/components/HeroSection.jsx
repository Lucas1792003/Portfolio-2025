import { ArrowDown } from "lucide-react";
import profileImg from "../assets/profile.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* adjust text place */}
          <div className="flex-1 space-y-6 text-center md:text-left md:mt-19">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span> <br />
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}Wai Yan
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}Paing
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
              Every project tells a story, and I make sure that story is told with elegance,
              clarity, and technical excellence. From initial concept to final launch,
              I create solutions that resonate deeply with users and stand strong over time.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={profileImg}
              alt="Wai Yan Paing"
              className="w-64 h-64 object-cover object-top 
              md:w-80 md:h-140 md:object-contain  
              rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
