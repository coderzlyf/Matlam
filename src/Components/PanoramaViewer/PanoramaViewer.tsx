import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

// ✅ Types
type PanoramaProps = {
  texture: THREE.Texture;
};

type ControlsProps = {
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
};

type PanoramaViewerProps = {
  image: string;
};

// ✅ Panorama
function Panorama({ texture }: PanoramaProps) {
  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

// ✅ Controls
function Controls({ controlsRef }: ControlsProps) {
  useThree(); // remove unused camera warning

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      rotateSpeed={0.5}
    />
  );
}

// ✅ Main Component
export default function PanoramaViewer({ image }: PanoramaViewerProps) {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);

  const texture = new THREE.TextureLoader().load(image);

  const handleReset = () => {
    controlsRef.current?.reset(); // ✅ no TS error
  };

  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0, 0.1] }}>
        <Panorama texture={texture} />
        <Controls controlsRef={controlsRef} />
      </Canvas>

      <button
        onClick={handleReset}
        className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-md text-xs backdrop-blur"
      >
        Reset
      </button>
    </div>
  );
}
