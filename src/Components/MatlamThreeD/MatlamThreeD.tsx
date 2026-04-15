import { track3DmodelOne } from "../../analytics";
import EngineStatus from "../EngineStatus/EngineStatus";
import VillaViewer from "../VillaViewer/VillaViewer";

const MatlamThreeD = () => {
  return (
    <div
      onClick={track3DmodelOne}
      className="w-full h-[260px] sm:h-[320px] md:h-[420px] bg-inverse-surface rounded-xl shadow-2xl relative overflow-hidden border border-white/5 p-2 sm:p-3 md:p-4 flex items-center justify-center"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10 sm:opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #68fadd 1px,transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Card */}
      <div className="w-full h-full rounded-lg bg-surface-container-lowest/5 backdrop-blur-sm border border-secondary/20 relative overflow-hidden">
        {/* 3D MODEL */}
        <div className="w-full h-full">
          <VillaViewer />
        </div>

        {/* Overlay */}
        <EngineStatus />
      </div>
    </div>
  );
};

export default MatlamThreeD;
