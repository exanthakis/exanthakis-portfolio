"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { AnimationAction, Group, MathUtils } from "three";

useGLTF.preload("/cube.glb");

export default function Cube() {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 20 });
  const group = useRef<Group>(null);
  const { nodes, animations, scene } = useGLTF("/cube.glb");
  const { actions } = useAnimations(animations, scene);

  useFrame(({ camera }) => {
    group.current?.rotateY(MathUtils.degToRad(0.2));
    Object.keys(actions).forEach((key) => {
      const action = actions[key] as AnimationAction;

      action.play().paused = true;
      action.time = spring.get();
    });
  });

  return (
    <group
      onPointerUp={() => motionVal.set(0)}
      onPointerDown={() => motionVal.set(0.6)}
      ref={group}
    >
      <primitive object={scene} />
    </group>
  );
}
