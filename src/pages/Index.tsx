import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WorkShowcase from "@/components/WorkShowcase";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      <div className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>
        <Hero />
        <Features />
        <WorkShowcase />
        <CaseStudy />
        <Testimonials />
        <Clients />
      </div>
    </>
  );
};

export default Index;
