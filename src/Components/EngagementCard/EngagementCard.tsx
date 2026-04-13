import { useEffect, useState } from "react";

const EngagementCard = () => {
  const [value, setValue] = useState(98);

  useEffect(() => {
    let start = 98;
    const end = 200;

    const interval = setInterval(() => {
      start += 1;
      setValue(start);

      if (start >= end) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:-bottom-6 md:-right-6 bg-secondary text-white p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-xl lg:block">
      <div className="flex items-center gap-2">
        <p className="text-2xl font-black font-headline">{value}%</p>
        <span className="text-lg animate-bounce">↑</span>
      </div>
      <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">
        Engagement Rate
      </p>
    </div>
  );
};

export default EngagementCard;
