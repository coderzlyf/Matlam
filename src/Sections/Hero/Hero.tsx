import { Link } from "react-router-dom";
import MatlamThreeD from "../../Components/MatlamThreeD/MatlamThreeD";
import { motion, type Variants } from "framer-motion";
import { trackCTAClickToRealesto } from "../../analytics";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-6 sm:pt-10 md:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
      >
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 z-10 text-center lg:text-left">
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-tight mb-4 sm:mb-6"
          >
            Future-Proof Web <br />
            Solutions for
            <span className="text-secondary block sm:inline">
              {" "}
              Modern Businesses
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base md:text-lg text-on-surface-variant font-body mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            From static sites to 3D interactive experiences, we build digital
            excellence that prioritizes performance, SEO, and immersive user
            engagement.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex justify-center lg:justify-start"
          >
            <Link
              to="/realesto"
              onClick={trackCTAClickToRealesto}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white bg-black relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] before:bg-[length:250%_250%] before:bg-[position:200%_0] before:bg-no-repeat hover:before:bg-[position:-100%_0] hover:before:duration-[1200ms]"
            >
              View Realesto
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT 3D */}
        <motion.div
          variants={fadeRight}
          className="lg:col-span-5 relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
        >
          <MatlamThreeD />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
