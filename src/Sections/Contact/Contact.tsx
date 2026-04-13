import { useState } from "react";
import emailjs from "emailjs-com";
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

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // 🔹 Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_9dzbca2", // 🔴 replace
        "template_lt0neqe", // 🔴 replace
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "IPobBKN7gn3ul9JGK" // 🔴 replace
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("Something went wrong ❌");
          setLoading(false);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-surface-container-lowest"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 md:gap-16">
          {/* 🔹 LEFT SIDE */}
          <motion.div variants={fadeLeft} className="lg:col-span-5">
            <motion.span
              variants={fadeUp}
              className="text-secondary font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 block"
            >
              Get in Touch
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-primary mb-4 sm:mb-6 leading-tight"
            >
              Ready to scale your digital presence?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base md:text-lg text-on-surface-variant mb-8 sm:mb-12 leading-relaxed"
            >
              Whether you're looking for a performance-driven website or a
              custom 3D interactive solution, we're here to help.
            </motion.p>

            <motion.div variants={container} className="space-y-6 sm:space-y-8">
              {/* WhatsApp */}
              <motion.a
                variants={fadeUp}
                whileHover={{ x: 6 }}
                href="https://wa.me/8681059067"
                target="_blank"
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary-container flex items-center justify-center group-hover:scale-110 transition">
                  <span className="material-symbols-outlined text-sm sm:text-base">
                    chat
                  </span>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    WhatsApp
                  </p>
                  <p className="font-bold text-sm sm:text-base">
                    +91 86810 59067
                  </p>
                </div>
              </motion.a>

              {/* Call */}
              <motion.a
                variants={fadeUp}
                whileHover={{ x: 6 }}
                href="tel:+918681059067"
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary-container flex items-center justify-center group-hover:scale-110 transition">
                  <span className="material-symbols-outlined text-sm sm:text-base">
                    call
                  </span>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    Call
                  </p>
                  <p className="font-bold text-sm sm:text-base">
                    +91 86810 59067
                  </p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                variants={fadeUp}
                whileHover={{ x: 6 }}
                href="mailto:raguld3v@gmail.com"
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary-container flex items-center justify-center group-hover:scale-110 transition">
                  <span className="material-symbols-outlined text-sm sm:text-base">
                    mail
                  </span>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    Email
                  </p>
                  <p className="font-bold text-sm sm:text-base break-all">
                    raguld3v@gmail.com
                  </p>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 🔹 RIGHT SIDE FORM */}
          <motion.div variants={fadeRight} className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.01 }}
              className="bg-surface p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl border border-outline-variant shadow-sm"
            >
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Name */}
                  <motion.div variants={fadeUp}>
                    <label className="text-xs sm:text-sm font-bold mb-1 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full border rounded-lg sm:rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-secondary focus:scale-[1.02] transition"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={fadeUp}>
                    <label className="text-xs sm:text-sm font-bold mb-1 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full border rounded-lg sm:rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-secondary focus:scale-[1.02] transition"
                    />
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div variants={fadeUp}>
                  <label className="text-xs sm:text-sm font-bold mb-1 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={4}
                    required
                    className="w-full border rounded-lg sm:rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-secondary focus:scale-[1.02] transition"
                  />
                </motion.div>

                {/* Submit */}
                <motion.button
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base hover:bg-gray-900 transition"
                >
                  {loading ? "Sending..." : "Send Enquiry"}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
