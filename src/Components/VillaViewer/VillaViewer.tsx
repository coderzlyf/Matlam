import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Center,
  OrbitControls,
  OrbitControls as OrbitControlsImpl,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// 🔹 Model (NO rotation reset here)
function VillaModel() {
  const { scene } = useGLTF("/cyberpunk_building.glb");

  return (
    <Center>
      <primitive object={scene} rotation={[0, -Math.PI / 4, 0]} scale={10} />
    </Center>
  );
}

// 🔥 Smooth Reset Controller
function CameraReset({ isUserInteracting, controlsRef }) {
  const { camera } = useThree();

  // 🎯 original position + target
  const defaultPosition = new THREE.Vector3(0, 0, 500);
  const defaultTarget = new THREE.Vector3(0, 0, 0);

  useFrame(() => {
    if (!controlsRef.current) return;

    // 👉 only reset when user NOT interacting
    if (!isUserInteracting.current) {
      // smooth camera movement
      camera.position.lerp(defaultPosition, 0.05);

      // smooth target movement
      controlsRef.current.target.lerp(defaultTarget, 0.05);

      controlsRef.current.update();
    }
  });

  return null;
}

// 🔹 Viewer
export default function VillaViewer() {
  const isUserInteracting = useRef(false);
  const controlsRef = useRef<any | null>(null);

  return (
    <Canvas camera={{ position: [0, 0, 400], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />

      <color attach="background" args={["#050505"]} />
      <VillaModel />

      {/* 🔥 Smooth Reset Logic */}
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
