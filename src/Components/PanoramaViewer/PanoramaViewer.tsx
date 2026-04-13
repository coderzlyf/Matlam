import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Panorama({ texture }) {
  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

function Controls({ controlsRef }) {
  const { camera } = useThree();

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      rotateSpeed={0.5}
    />
  );
}

export default function PanoramaViewer({ image }) {
  const controlsRef = useRef(null);

  const texture = new THREE.TextureLoader().load(image);

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0, 0.1] }}>
        <Panorama texture={texture} />
        <Controls controlsRef={controlsRef} />
      </Canvas>

      {/* 🔄 Reset Button */}
      <button
        onClick={handleReset}
        className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-md text-xs backdrop-blur"
      >
        Reset
      </button>
    </div>
  );
}
