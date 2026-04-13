import EngagementCard from "../../Components/EngagementCard/EngagementCard";
import PanoramaViewer from "../../Components/PanoramaViewer/PanoramaViewer";

const R_PanaromaCard = () => {
  return (
    <section
      id="panorama"
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-surface relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
        {/* 🔹 LEFT (Viewer) */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="relative">
            {/* 🌐 Panorama Container */}
            <div className="h-[240px] sm:h-[300px] md:h-[400px] lg:h-[450px] bg-surface-container-highest rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl relative">
              <PanoramaViewer image="/panaromaSample.jpg" />

              {/* 🔘 Center UI */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <span className="text-white text-sm sm:text-lg font-bold">
                    360°
                  </span>
                </div>
              </div>
            </div>

            {/* 📈 Engagement */}
            <div>
              <EngagementCard />
            </div>
          </div>
        </div>

        {/* 🔹 RIGHT (Content) */}
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-primary tracking-tight mb-4 sm:mb-6">
            Atmospheric Walkthroughs
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            Don’t just show them a photo. Let them walk through the space. Our
            360° panorama viewers create a real sense of depth and luxury.
          </p>
        </div>
      </div>

      {/* 🔥 Background Glow */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-secondary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-primary/10 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default R_PanaromaCard;
