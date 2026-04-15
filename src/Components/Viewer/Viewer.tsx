import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { KTX2Loader } from "three/addons/loaders/KTX2Loader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";

// ✅ Types
type CameraResetProps = {
  isUserInteracting: React.RefObject<boolean>;
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
};

// 🔹 Model
function Model() {
  const { gl } = useThree();
  const [model, setModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    // 🔹 KTX2 Loader
    const ktx2Loader = new KTX2Loader()
      .setTranscoderPath("/basis/") // MUST match public folder
      .detectSupport(gl);

    // 🔹 GLTF Loader
    const loader = new GLTFLoader();
    loader.setKTX2Loader(ktx2Loader);
    loader.setMeshoptDecoder(MeshoptDecoder);

    // 🔹 Load Model (IMPORTANT: use compressed file)
    loader.load("/cyberpunk_micro-apartments.glb", (gltf) => {
      setModel(gltf.scene);
    });
  }, [gl]);

  if (!model) return null;

  return (
    <Center>
      <primitive object={model} rotation={[0, 0, 0]} scale={1} />
    </Center>
  );
}

// 🔥 Camera Reset Controller
function CameraReset({ isUserInteracting, controlsRef }: CameraResetProps) {
  const { camera } = useThree();

  const defaultPosition = new THREE.Vector3(0, 0, 10);
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

// 🔹 Main Viewer
export default function Viewer() {
  const isUserInteracting = useRef<boolean>(false);
  const controlsRef = useRef<OrbitControlsImpl | null>(null);

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <color attach="background" args={["#050505"]} />

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

// 🔥 Preload
useGLTF.preload("/office_building.glb", true);
