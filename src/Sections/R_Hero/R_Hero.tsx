import { motion, type Variants } from "framer-motion";
import MatlamThreeD from "../../Components/MatlamThreeD/MatlamThreeD";

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

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const R_Hero = () => {
  return (
    <motion.section
      id="hero"
      variants={container}
      initial="hidden"
      animate="show"
      className="relative flex items-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-center w-full max-w-[1440px] mx-auto z-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.span
            variants={fadeUp}
            className="inline-block bg-secondary-container text-on-secondary-container px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6"
          >
            The Future of Realty
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-primary leading-tight lg:leading-[0.95] tracking-tight mb-4 sm:mb-6 md:mb-8"
          >
            Precision Sales.
            <br />
            <span className="text-secondary">Immersive Tech.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-on-surface-variant max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 md:mb-10 leading-relaxed"
          >
            Transform property acquisition with pixel-perfect 3D models and
            real-time data transparency. Realesto bridges the gap between vision
            and ownership.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-xl font-bold text-sm sm:text-base hover:bg-gray-900 transition-all"
            >
              Book Demo
              <span className="material-symbols-outlined">arrow_forward</span>
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT 3D */}
        <motion.div
          variants={fadeRight}
          className="lg:col-span-5 relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <MatlamThreeD />
        </motion.div>
      </div>

      {/* 🔥 BACKGROUND GLOW (Premium Touch) */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-secondary/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/20 blur-[120px] rounded-full"></div>
    </motion.section>
  );
};

export default R_Hero;
