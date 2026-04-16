import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { trackCTAClick } from "../../analytics";
import React from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // 🔥 Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // 🔥 Route-based config
  const navConfig = {
    "/": {
      logo: "/MatlamLogo.png",
      title: "Matlam",
      menu: [
        { label: "Home", hash: "#hero" },
        { label: "Services", hash: "#services" },
        { label: "Products", hash: "#products" },
      ],
    },
    "/realesto": {
      logo: "/MatlamLogo.png",
      title: "Realesto",
      menu: [
        { label: "Home", hash: "#hero" },
        { label: "3D Interactive", hash: "#interactive" },
        { label: "Panorama", hash: "#panorama" },
      ],
    },
  };

  const scrollToSection = (hash: any) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ FIX: match longest route first
  const currentRoute =
    (Object.keys(navConfig) as Array<keyof typeof navConfig>)
      .sort((a, b) => b.length - a.length)
      .find((route) => pathname.startsWith(route)) ?? "/";

  const config = navConfig[currentRoute];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-xl shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        {/* 🔥 Logo */}
        <Link
          to={currentRoute}
          className="flex items-center text-xl md:text-2xl font-bold tracking-tight text-slate-900"
        >
          <img src={config.logo} className="h-7 md:h-8 pr-2" alt="logo" />
          {config.title == "Realesto"
            ? config.title.slice(0, 4)
            : config.title.slice(0, 3)}
          <span className="font-normal text-slate-700">
            {config.title == "Realesto"
              ? config.title.slice(4)
              : config.title.slice(3)}
          </span>
        </Link>

        {/* 🔥 Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {config.menu.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => scrollToSection(item.hash)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
              >
                {item.label}
              </button>
            );
          })}
          {config.title == "Realesto" && (
            <Link
              to="/"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
            >
              Matlam
            </Link>
          )}
        </div>

        {/* 🔥 CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => scrollToSection("#contact")}
            className="hidden md:block bg-primary text-on-primary px-4 md:px-6 py-2 md:py-2.5 rounded-xl text-sm font-medium hover:opacity-80 active:scale-95 transition"
          >
            Get Started
          </button>

          <button
            className="md:hidden text-slate-900"
            onClick={() => setOpen(!open)}
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* 🔥 Mobile Menu */}
      <div
        className={`md:hidden transform transition-transform duration-300 ease-out ${
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        style={{ willChange: "transform" }}
      >
        <div className="px-6 pb-4 flex flex-col gap-4 bg-white/90 backdrop-blur-xl">
          {config.menu.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                scrollToSection(item.hash);
                setOpen(false);
              }}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 text-left"
            >
              {item.label}
            </button>
          ))}

          {config.title == "Realesto" && (
            <Link
              to="/"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 text-left"
            >
              Matlam
            </Link>
          )}

          <button
            onClick={() => {
              trackCTAClick();
              scrollToSection("#contact");
            }}
            className="block bg-primary text-on-primary px-4 md:px-6 py-2 md:py-2.5 rounded-xl text-sm font-medium hover:opacity-80 active:scale-95 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
