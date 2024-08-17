"use client";

import { Center, Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Cube from "./cube";

const Loader = () => {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
};

export default function Scene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      className="h-svh z-10 absolute"
    >
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <Center>
          <Cube />
        </Center>
      </Suspense>
    </Canvas>
  );
}
