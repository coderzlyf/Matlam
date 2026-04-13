import { motion, type Variants } from "framer-motion";
import EngagementCard from "../../Components/EngagementCard/EngagementCard";
import PanoramaViewer from "../../Components/PanoramaViewer/PanoramaViewer";

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

const R_PanaromaCard = () => {
  return (
    <motion.section
      id="panorama"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-surface relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
        {/* 🔹 LEFT (Viewer) */}
        <motion.div
          variants={fadeLeft}
          className="w-full md:w-1/2 order-2 md:order-1"
        >
          <div className="relative">
            {/* 🌐 Panorama Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-[240px] sm:h-[300px] md:h-[400px] lg:h-[450px] bg-surface-container-highest rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <PanoramaViewer image="/panaromaSample.jpg" />

              {/* 🔘 Center UI */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30"
                >
                  <span className="text-white text-sm sm:text-lg font-bold">
                    360°
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* 📈 Engagement */}
            <motion.div variants={fadeUp} whileHover={{ y: -6 }}>
              <EngagementCard />
            </motion.div>
          </div>
        </motion.div>

        {/* 🔹 RIGHT (Content) */}
        <motion.div
          variants={fadeRight}
          className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-5xl font-black text-primary tracking-tight mb-4 sm:mb-6"
          >
            Atmospheric Walkthroughs
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base md:text-lg text-on-surface-variant mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Don’t just show them a photo. Let them walk through the space. Our
            360° panorama viewers create a real sense of depth and luxury.
          </motion.p>
        </motion.div>
      </div>

      {/* 🔥 Background Glow */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-secondary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-primary/10 blur-[120px] rounded-full"></div>
    </motion.section>
  );
};

export default R_PanaromaCard;
