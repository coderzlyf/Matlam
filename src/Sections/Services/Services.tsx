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

const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <motion.section
      id="services"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        {/* 🔥 Header */}
        <motion.div variants={fadeUp} className="mb-12 sm:mb-16">
          <span className="text-secondary font-bold text-xs sm:text-sm tracking-widest uppercase">
            Expertise
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-primary mt-2 leading-tight">
            Our Services
          </h2>
        </motion.div>

        {/* 🔥 Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6"
        >
          {/* 🔥 Main Card */}
          <motion.div
            variants={fadeScale}
            whileHover={{ scale: 1.03 }}
            className="md:col-span-8 bg-surface-container-lowest p-6 sm:p-8 lg:p-10 rounded-xl flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-container rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <span className="material-symbols-outlined text-base sm:text-lg">
                  web
                </span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4">
                Static & Dynamic Websites
              </h3>

              <p className="text-sm sm:text-base text-on-surface-variant max-w-md">
                Blazing fast performance meets complex logic. We build websites
                that convert.
              </p>
            </div>
          </motion.div>

          {/* 🔥 3D Card */}
          <motion.div
            variants={fadeScale}
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="md:col-span-4 bg-primary text-on-primary p-6 sm:p-8 lg:p-10 rounded-xl relative overflow-hidden"
          >
            <div className="absolute -right-10 -bottom-10 w-32 sm:w-40 h-32 sm:h-40 bg-secondary/20 blur-3xl"></div>

            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <span className="material-symbols-outlined text-base sm:text-lg">
                view_in_ar
              </span>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
              3D Interactive
            </h3>

            <p className="text-xs sm:text-sm leading-relaxed">
              Immersive WebGL experiences for real-time interaction.
            </p>
          </motion.div>

          {/* 🔥 Small Cards */}
          {[
            {
              icon: "troubleshoot",
              title: "Technical SEO",
              desc: "Engineered for search visibility.",
            },
            {
              icon: "dashboard_customize",
              title: "Custom CMS",
              desc: "Manage content with ease.",
            },
            {
              icon: "ads_click",
              title: "Digital Ads",
              desc: "Performance-driven campaigns.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="md:col-span-4 bg-surface-container-low p-5 sm:p-6 lg:p-8 rounded-xl"
            >
              <span className="material-symbols-outlined text-secondary text-2xl sm:text-3xl mb-3 sm:mb-4">
                {item.icon}
              </span>

              <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-1 sm:mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-on-surface-variant">
                {item.desc}
              </p>
            </motion.div>
          ))}

          {/* 🔥 Wide Cards */}
          {[
            {
              icon: "analytics",
              title: "Google Analytics",
              desc: "Deep insights for decisions.",
            },
            {
              icon: "cloud_done",
              title: "Scalable Hosting",
              desc: "Fast, reliable infrastructure.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-6 bg-surface-container-high p-5 sm:p-6 lg:p-8 rounded-xl flex items-start sm:items-center gap-4 sm:gap-6"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-surface-container-lowest rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl">
                  {item.icon}
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-on-surface-variant">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
