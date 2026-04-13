import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Product = () => {
  return (
    <motion.section
      id="products"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-primary overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* LEFT - IMAGE */}
          <motion.div variants={fadeLeft} className="relative">
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <div className="absolute -inset-2 sm:-inset-4 border border-secondary/30 rounded-xl"></div>

              <img
                src="/realesto.png"
                alt="Realesto platform mockup"
                className="rounded-lg shadow-2xl relative z-10 w-full object-cover aspect-video"
              />
            </motion.div>

            {/* BADGE */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="absolute -top-4 left-2 sm:-top-6 sm:left-0 bg-secondary text-on-secondary px-3 py-2 sm:p-4 rounded-lg sm:rounded-xl shadow-xl z-20"
            >
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                MVP stage
              </p>
              <p className="text-sm sm:text-xl font-black">REALESTO</p>
            </motion.div>

            {/* FEATURES */}
            <motion.div
              variants={container}
              className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {[
                {
                  icon: "3d_rotation",
                  title: "Interactive 3D",
                  desc: "Live building status",
                },
                {
                  icon: "vrpano",
                  title: "360° Walkthrough",
                  desc: "Panorama integration",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center gap-3"
                >
                  <span className="material-symbols-outlined text-secondary">
                    {item.icon}
                  </span>
                  <div className="text-xs">
                    <p className="font-bold">{item.title}</p>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT - CONTENT */}
          <motion.div variants={fadeRight}>
            <motion.span
              variants={fadeUp}
              className="text-secondary font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 block"
            >
              End-to-End Sales Solution
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight"
            >
              The Realesto Experience
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base md:text-lg text-on-primary-container mb-6 sm:mb-8 leading-relaxed"
            >
              Redefining how high-end real estate is showcased online. Realesto
              is a comprehensive sales ecosystem that bridges the gap between
              digital discovery and final signature.
            </motion.p>

            {/* FEATURES LIST */}
            <motion.div
              variants={container}
              className="space-y-6 sm:space-y-10"
            >
              <div>
                <motion.h4
                  variants={fadeUp}
                  className="text-secondary font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4"
                >
                  Core Visual Features
                </motion.h4>

                <ul className="space-y-3 sm:space-y-4">
                  {[
                    {
                      icon: "apartment",
                      title: "Live 3D Building Engine",
                      desc: "Interactive models with live unit availability synced with CRM.",
                    },
                    {
                      icon: "info",
                      title: "Precision Interaction",
                      desc: "Hover for details, click for full analytics view.",
                    },
                    {
                      icon: "360",
                      title: "Photorealistic 360° Tours",
                      desc: "Seamless panorama walkthrough experience.",
                    },
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      variants={fadeUp}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-3"
                    >
                      <span className="material-symbols-outlined text-secondary mt-1">
                        {item.icon}
                      </span>
                      <div>
                        <p className="font-bold text-sm sm:text-base">
                          {item.title}
                        </p>
                        <p className="text-xs sm:text-sm text-on-primary-container">
                          {item.desc}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* BUSINESS TOOLS */}
        <motion.div variants={container} className="mt-10 sm:mt-14">
          <motion.h4
            variants={fadeUp}
            className="text-secondary font-bold text-xs uppercase tracking-widest mb-4"
          >
            Integrated Business Tools
          </motion.h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: "query_stats", title: "GA4 Tracking" },
              { icon: "ads_click", title: "Ads Optimized" },
              { icon: "edit_note", title: "Custom CMS" },
              { icon: "person_add", title: "Lead Capture" },
            ].map((tool, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10"
              >
                <span className="material-symbols-outlined mb-3">
                  {tool.icon}
                </span>
                <h5 className="font-bold text-sm mb-1">{tool.title}</h5>
                <p className="text-xs text-on-primary-container">
                  Optimized for conversions and analytics.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:justify-end gap-3 sm:gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/realesto"
              className="inline-flex justify-center items-center px-6 sm:px-10 py-3 sm:py-4 bg-white text-black rounded-xl font-bold relative overflow-hidden group"
            >
              Explore Platform
              <span className="material-symbols-outlined ml-2">
                arrow_forward
              </span>
              <span className="absolute inset-0 pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.8)_50%,transparent_75%)] before:bg-[length:250%_250%] before:bg-[position:200%_0] before:bg-no-repeat group-hover:before:bg-[position:-100%_0] group-hover:before:duration-[1200ms]" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Product;
