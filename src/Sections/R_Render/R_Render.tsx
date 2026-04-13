import { motion, type Variants } from "framer-motion";
import R_Interactive from "../../Components/R_Interactive/R_Interactive";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const R_Render = () => {
  return (
    <motion.section
      id="interactive"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-surface-container-low relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* HEADER */}
        <motion.div variants={fadeUp} className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary tracking-tight mb-3 sm:mb-4">
            Precision Interactive Canvas
          </h2>
          <div className="h-1 w-12 sm:w-16 md:w-20 bg-secondary"></div>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* 3D VIEW */}
          <motion.div
            variants={fadeLeft}
            className="lg:col-span-2 relative"
            whileHover={{ scale: 1.01 }}
          >
            <R_Interactive />
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            variants={fadeRight}
            className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8"
          >
            {/* CARD 1 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-4 sm:p-6 md:p-8 bg-surface-container-lowest rounded-xl"
            >
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
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-4 sm:p-6 md:p-8 bg-surface-container-lowest rounded-xl"
            >
              <span className="material-symbols-outlined text-secondary text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                ads_click
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-2">
                Hover & Explore
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Hover for mini-details. Click for full specs and floor plans.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 🔥 BACKGROUND GLOW (Depth effect) */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-secondary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-primary/10 blur-[120px] rounded-full"></div>
    </motion.section>
  );
};

export default R_Render;
