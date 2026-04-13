import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const EngineStatus = () => {
  const [status, setStatus] = useState("loading"); // loading | success
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    // fake progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 20;
      });
    }, 300);

    // fake success after 2.5 sec
    const timeout = setTimeout(() => {
      setStatus("success");
      setProgress(100);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="absolute bottom-3 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4 p-2 sm:p-3 bg-primary/80 backdrop-blur-md rounded-md border border-secondary/30">
      {/* Top Row */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-white font-bold">
          {status === "loading"
            ? "Activating Engine..."
            : "Building 007 Activated"}
        </span>

        {status === "loading" ? (
          <div className="flex gap-1">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-secondary animate-pulse"></div>
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-secondary/40"></div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500">
            <Check size={8} className="text-white" />
          </div>
        )}
      </div>

      {/* Progress */}
      <div className="h-[3px] sm:h-1 w-full bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ${
            status === "success" ? "bg-green-500" : "bg-secondary"
          }`}
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
};

export default EngineStatus;
