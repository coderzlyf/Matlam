import R_Interactive from "../../Components/R_Interactive/R_Interactive";

const R_Render = () => {
  return (
    <section
      id="interactive"
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-surface-container-low relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* HEADER */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary tracking-tight mb-3 sm:mb-4">
            Precision Interactive Canvas
          </h2>
          <div className="h-1 w-12 sm:w-16 md:w-20 bg-secondary"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* 3D VIEW */}
          <div className="lg:col-span-2 relative">
            <R_Interactive />
          </div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8">
            {/* CARD 1 */}
            <div className="p-4 sm:p-6 md:p-8 bg-surface-container-lowest rounded-xl">
              <span className="material-symbols-outlined text-secondary text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                visibility
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-2">
                Real-Time Availability
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Our 3D core syncs instantly with the sales CMS. Users see exact
                unit status the second it changes.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="p-4 sm:p-6 md:p-8 bg-surface-container-lowest rounded-xl">
              <span className="material-symbols-outlined text-secondary text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                ads_click
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-2">
                Hover & Explore
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Hover for mini-details. Click for full specs and floor plans.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 BACKGROUND GLOW (Depth effect) */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-secondary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-primary/10 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default R_Render;
