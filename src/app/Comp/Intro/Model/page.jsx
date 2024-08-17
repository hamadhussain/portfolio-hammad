"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Skeleton/page";

const Three = () => {
  return (
    <Canvas>
      {/* <ambientLight intensity={112}/> */}
      <directionalLight position={[0, 2, 1]} intensity={4} />
      <Model />
    </Canvas>
  );
};

export default Three;
