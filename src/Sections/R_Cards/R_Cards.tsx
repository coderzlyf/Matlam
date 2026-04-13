const R_Cards = () => {
  return (
    <section
      id="features"
      className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-surface-container-low relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* 🔥 Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-primary font-headline tracking-tighter mb-4">
            Precision Growth Engine
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Propel your property project to the top of the market with
            integrated high-performance marketing and analytics.
          </p>
        </div>

        {/* 🔥 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "search_insights",
              title: "SEO Optimization",
              desc: "Strategic technical SEO architectures designed to dominate property-related search results globally.",
            },
            {
              icon: "ads_click",
              title: "Meta & Google Ads",
              desc: "Targeted campaign management that connects your property directly with qualified high-intent buyers.",
            },
            {
              icon: "monitoring",
              title: "GA4 Analytics",
              desc: "Granular user behavior tracking. Know exactly which units are being viewed and for how long.",
            },
            {
              icon: "edit_document",
              title: "Unit CMS",
              desc: "A powerful management interface to update pricing, descriptions, and unit status in milliseconds.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-surface-container-lowest p-8 rounded-2xl flex flex-col h-full border-b-4 border-transparent hover:border-secondary transition-all relative overflow-hidden"
            >
              {/* 🔥 subtle hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-secondary/10 to-transparent" />

              <span className="material-symbols-outlined text-secondary text-3xl mb-6 relative z-10">
                {item.icon}
              </span>

              <h3 className="text-xl font-bold font-headline text-primary mb-4 relative z-10">
                {item.title}
              </h3>

              <p className="text-sm text-on-surface-variant leading-relaxed relative z-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Background Glow */}
      <div className="absolute -top-20 left-20 w-72 h-72 bg-secondary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-primary/10 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default R_Cards;
