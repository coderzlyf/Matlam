import Viewer from "../Viewer/Viewer";

const R_Interactive = () => {
  return (
    <div className="bg-inverse-surface rounded-xl sm:rounded-2xl overflow-hidden relative shadow-inner h-[260px] sm:h-[320px] md:h-[420px] lg:h-[480px] group">
      {/* 3D MODEL */}
      <div className="absolute inset-0 opacity-90">
        <Viewer />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-between pointer-events-none">
        {/* 👇 Hide below 1280px */}
        <div className="hidden xl:flex justify-end">
          <div className="bg-black/60 backdrop-blur-xl p-3 rounded-xl border border-white/10 pointer-events-auto">
            <div className="flex items-center gap-4 text-white text-xs">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                Available
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                Reserved
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                Sold
              </div>
            </div>
          </div>
        </div>

        {/* 👇 Hide below 1280px */}
        <div className="hidden xl:block">
          <div className="w-64 bg-white p-6 rounded-xl shadow-2xl border-l-4 border-secondary pointer-events-auto">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
              Unit 402 - Floor 4
            </p>

            <h4 className="font-bold text-primary text-xl mb-2">
              Penthouse Loft
            </h4>

            <div className="space-y-1 mb-4">
              <div className="flex justify-between text-xs text-on-surface-variant">
                <span>Area</span>
                <span className="font-bold">142 m²</span>
              </div>
              <div className="flex justify-between text-xs text-on-surface-variant">
                <span>Price</span>
                <span className="font-bold">$1.2M</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-on-surface-variant">Status</span>
              <div className="flex items-center gap-2 text-green-500">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default R_Interactive;
