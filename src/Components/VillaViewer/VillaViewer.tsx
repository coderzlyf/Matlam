import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

// ✅ Types
type CameraResetProps = {
  isUserInteracting: React.RefObject<boolean>;
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
};

// 🔹 Model
function VillaModel() {
  const { scene } = useGLTF("/cyberpunk_building.glb");

  return (
    <Center>
      <primitive object={scene} rotation={[0, -Math.PI / 4, 0]} scale={10} />
    </Center>
  );
}

// 🔥 Camera Reset
function CameraReset({ isUserInteracting, controlsRef }: CameraResetProps) {
  const { camera } = useThree();

  const defaultPosition = new THREE.Vector3(0, 0, 500);
  const defaultTarget = new THREE.Vector3(0, 0, 0);

  useFrame(() => {
    if (!controlsRef.current) return;

    if (!isUserInteracting.current) {
      camera.position.lerp(defaultPosition, 0.05);
      controlsRef.current.target.lerp(defaultTarget, 0.05);
      controlsRef.current.update();
    }
  });

  return null;
}

// 🔹 Viewer
export default function VillaViewer() {
  const isUserInteracting = useRef<boolean>(false);
  const controlsRef = useRef<OrbitControlsImpl | null>(null);

  return (
    <Canvas camera={{ position: [0, 0, 400], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />

      <color attach="background" args={["#050505"]} />
      <VillaModel />

      <CameraReset
        isUserInteracting={isUserInteracting}
        controlsRef={controlsRef}
      />

      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.1}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(3 * Math.PI) / 4}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        onStart={() => (isUserInteracting.current = true)}
        onEnd={() => (isUserInteracting.current = false)}
      />
    </Canvas>
  );
}

// 🔥 Preload
useGLTF.preload("/cyberpunk_building.glb");
