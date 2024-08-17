// // "use client";

// // import React, { useRef } from "react";
// // import { useGLTF } from "@react-three/drei";
// // import { useFrame } from "@react-three/fiber";

// // export default function Model(props) {
// //   const { nodes, materials } = useGLTF("/skull_salazar_downloadable.glb");
// //   const modelRef = useRef(); // Initialize useRef correctly

// //   // Rotate the model on every frame
// //   useFrame(() => {
// //     modelRef.current.rotation.y += 0.007;
// //   });

// //   return (
// //     <group {...props} dispose={null} ref={modelRef}>
// //       <group
// //         rotation={[-Math.PI / 2, 0.019, 0]}
// //         scale={[3, 3, 3]}
// //         // rotation={[0.4, -1, 0]}
// //       >
// //         <group rotation={[2.2, 0, 0]}>
// //           <mesh
// //             castShadow
// //             receiveShadow
// //             geometry={nodes.defaultMaterial.geometry}
// //             material={materials.Rosa_material}
// //           />
// //           <mesh
// //             castShadow
// //             receiveShadow
// //             geometry={nodes.defaultMaterial_1.geometry}
// //             material={materials.defaultMat_material}
// //           />
// //         </group>
// //       </group>
// //     </group>
// //   );
// // }
// // useGLTF.preload("/skull_salazar_downloadable.glb");

// "use client";

// import React, { useEffect, useRef } from "react";
// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";

// export default function Model(props) {
//   const { nodes, materials } = useGLTF("/skull_salazar_downloadable.glb");
//   useEffect(() => {
//     const modelRef = useRef();
//     useFrame(() => {
//       if (modelRef.current) {
//         modelRef.current.rotation.y += 0.007;
//       }
//     });
//   }, []);

//   return (
//     <group {...props} dispose={null} ref={modelRef}>
//       <group rotation={[-Math.PI / 2, 0.019, 0]} scale={[3, 3, 3]}>
//         <group rotation={[2.2, 0, 0]}>
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.defaultMaterial.geometry}
//             material={materials.Rosa_material}
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.defaultMaterial_1.geometry}
//             material={materials.defaultMat_material}
//           />
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/skull_salazar_downloadable.glb");

"use client";

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/skull_salazar_downloadable.glb");
  
  const modelRef = useRef();
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.007;
    }
  });

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group rotation={[-Math.PI / 2, 0.019, 0]} scale={[3, 3, 3]}>
        <group rotation={[2.2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Rosa_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.defaultMat_material}
          />
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("/skull_salazar_downloadable.glb");
