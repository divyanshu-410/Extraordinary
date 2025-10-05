import { useEffect, useState } from "react";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 border-4 border-muted rounded-full"></div>
          <div 
            className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"
            style={{ animationDuration: "1s" }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gradient">{progress}%</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-muted-foreground text-sm">Loading Experience...</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
