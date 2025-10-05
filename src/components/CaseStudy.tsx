import { useEffect, useRef, useState } from "react";
import cardsImage from "@/assets/cards.png";
import graphImage from "@/assets/graph.png";
import statsImage from "@/assets/stats.png";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CaseStudy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold">
            <span className="text-gradient">Featured Case Study</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carbon Management Platform - Real-time analytics dashboard
          </p>
        </div>

        <div className="space-y-12">
          {/* Brand Kits Card */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-card border-2 border-border rounded-3xl p-8 hover:border-primary transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">Brand Management System</h3>
                    <p className="text-lg text-muted-foreground">
                      Streamlined brand kit organization with intuitive selection and management tools. 
                      Features include multi-brand support, custom configurations, and seamless integration.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Multi-brand workspace management
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Real-time synchronization
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Advanced filtering and search
                      </li>
                    </ul>
                    <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 group">
                      View Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
                    <img
                      src={cardsImage}
                      alt="Brand Kits Management Interface"
                      className="relative rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Dashboard */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-card border-2 border-border rounded-3xl p-8 hover:border-primary transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative order-2 md:order-1">
                    <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl blur-xl"></div>
                    <img
                      src={statsImage}
                      alt="Portfolio Statistics Dashboard"
                      className="relative rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-6 order-1 md:order-2">
                    <h3 className="text-3xl font-bold">Portfolio Analytics</h3>
                    <p className="text-lg text-muted-foreground">
                      Comprehensive carbon footprint tracking with year-over-year comparisons. 
                      Visualize energy consumption, intensity metrics, and sustainability goals.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        Real-time carbon tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        Historical data analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        Interactive progress visualization
                      </li>
                    </ul>
                    <Button className="bg-gradient-to-r from-secondary to-primary text-primary-foreground hover:opacity-90 group">
                      Explore Analytics
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carbon Emissions Graph */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-card border-2 border-border rounded-3xl p-8 hover:border-primary transition-all duration-500">
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-3xl font-bold">Data Visualization Excellence</h3>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Advanced filtering and charting capabilities for complex environmental data. 
                      Interactive graphs with downloadable datasets and target tracking.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
                    <img
                      src={graphImage}
                      alt="Carbon Emissions Visualization"
                      className="relative rounded-2xl shadow-2xl w-full hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="flex justify-center gap-4 pt-4">
                    <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 group">
                      See More Projects
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
