const InfiniteSlider = () => {
  return (
    <section className="py-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-label-md uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-10">
          Trusted by Global Innovators
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="text-2xl font-black text-primary">TECHNO</div>
          <div className="text-2xl font-black text-primary">FLUX</div>
          <div className="text-2xl font-black text-primary">VERTICE</div>
          <div className="text-2xl font-black text-primary">ZENITH</div>
          <div className="text-2xl font-black text-primary">CORE.IO</div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteSlider;
