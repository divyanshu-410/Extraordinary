import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="block">Create the</span>
            <span className="block text-gradient">Extraordinary</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transforming visions into stunning digital experiences with cutting-edge design and innovative solutions
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
            >
              View Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
