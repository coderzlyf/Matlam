import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// 🔹 Model (NO reset logic here)
function Model() {
  const { scene } = useGLTF("/office_building.glb");

  return (
    <Center>
      <primitive
        object={scene}
        rotation={[0, Math.PI, 0]} // ✅ front-facing
        scale={1}
      />
    </Center>
  );
}

// 🔥 Smooth Camera Reset Controller
function CameraReset({ isUserInteracting, controlsRef }) {
  const { camera } = useThree();

  const defaultPosition = new THREE.Vector3(0, 0, 200);
  const defaultTarget = new THREE.Vector3(0, 0, 0);

  useFrame(() => {
    if (!controlsRef.current) return;

    // 👉 Only reset when user stops interacting
    if (!isUserInteracting.current) {
      // Smooth camera movement
      camera.position.lerp(defaultPosition, 0.05);

      // Smooth target movement
      controlsRef.current.target.lerp(defaultTarget, 0.05);

      controlsRef.current.update();
    }
  });

  return null;
}

// 🔹 Main Viewer
export default function Viewer() {
  const isUserInteracting = useRef(false);
  const controlsRef = useRef<any | null>(null);

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      {/* 🌑 Dark background */}
      <color attach="background" args={["#050505"]} />

      {/* 💡 Lighting */}
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />

      <Model />

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

// 🔥 Preload model (important for performance)
useGLTF.preload("/office_building.glb");
