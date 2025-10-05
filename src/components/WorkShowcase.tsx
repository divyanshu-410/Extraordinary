import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern shopping experience with seamless checkout",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Design",
    description: "Secure and intuitive financial management",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Dashboard",
    category: "Data Visualization",
    description: "Real-time analytics with predictive insights",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Social Network",
    category: "Full Stack",
    description: "Connecting people through innovative features",
    gradient: "from-green-500 to-teal-500",
  },
];

const WorkShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold">
            <span className="text-gradient">Our Work</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Showcasing excellence in every project
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative h-[500px] perspective-1000">
            {projects.map((project, index) => {
              const offset = index - currentIndex;
              const isActive = offset === 0;
              
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive ? "z-20 opacity-100 scale-100" : "z-10 opacity-40 scale-90"
                  }`}
                  style={{
                    transform: `translateX(${offset * 100}%) rotateY(${offset * -15}deg)`,
                  }}
                >
                  <div className={`h-full rounded-3xl bg-gradient-to-br ${project.gradient} p-12 flex flex-col justify-end relative overflow-hidden`}>
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{ 
                        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "30px 30px" 
                      }}></div>
                    </div>
                    
                    <div className="relative z-10 space-y-4 text-white">
                      <span className="text-sm font-semibold uppercase tracking-wider opacity-80">
                        {project.category}
                      </span>
                      <h3 className="text-4xl font-bold">{project.title}</h3>
                      <p className="text-lg opacity-90">{project.description}</p>
                      <Button 
                        variant="secondary" 
                        className="mt-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <Button
              onClick={prev}
              size="icon"
              className="rounded-full bg-card border-2 border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft />
            </Button>
            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={next}
              size="icon"
              className="rounded-full bg-card border-2 border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
