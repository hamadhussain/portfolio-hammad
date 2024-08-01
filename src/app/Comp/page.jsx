"use client";
import React, { useEffect ,useState} from "react";
import Intro from "./Intro/page";
import Services from "./Services/page";
import MyE from "./MyE/page";
import Skills from "./Skills/page";
import Footer from "./Footer/page";
import Contact from "./Contact/page";
// import Testimonials from "./Testimonials//page";
import Recent from "./Recent/page";
import Work from "./Work/page";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './Loading/page'

const Page = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    AOS.init({
      once: true,
    });
    AOS.refresh();
    setTimeout(() => setLoading(false), 3300)

  }, []);


  
  return (
    <div className="overflow-hidden">
    { loading?(<Loading/>): (<><Intro />
      <div  className="nn  " style={{ position: "relative", zIndex: 1 }}>
        <div className=" snap-start"><Services /></div>
       <div className="snap-start"> <Work /></div>
        <div className="snap-start"><MyE /></div>
        <div className="snap-start"><Skills /></div>
        <div><Recent /></div>
       <div> <Contact /></div>
       <div> <Footer /></div>
      </div></>)}
    </div>
  );
};

export default Page;

// // components/Particles.js

// // 'use client'
// // import Particles, { initParticlesEngine } from "@tsparticles/react";
// // import { useEffect, useMemo, useState } from "react";
// // // import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// // // import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// // import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// // // import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

// // const ParticlesComponent = (props) => {

// //   const [init, setInit] = useState(false);
// //   // this should be run only once per application lifetime
// //   useEffect(() => {
// //     initParticlesEngine(async (engine) => {
// //       // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
// //       // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
// //       // starting from v2 you can add only the features you need reducing the bundle size
// //       //await loadAll(engine);
// //       //await loadFull(engine);
// //       await loadSlim(engine);
// //       //await loadBasic(engine);
// //     }).then(() => {
// //       setInit(true);
// //     });
// //   }, []);

// //   const particlesLoaded = (container) => {
// //     console.log(container);
// //   };

// //   const options = useMemo(
// //     () => ({
// //       background: {
// //         color: {
// //           value: "#1E2F97",
// //         },
// //       },
// //       fpsLimit: 120,
// //       interactivity: {
// //         events: {
// //           onClick: {
// //             enable: true,
// //             mode: "repulse",
// //           },
// //           onHover: {
// //             enable: true,
// //             mode: 'grab',
// //           },
// //         },
// //         modes: {
// //           push: {
// //             distance: 200,
// //             duration: 15,
// //           },
// //           grab: {
// //             distance: 150,
// //           },
// //         },
// //       },
// //       particles: {
// //         color: {
// //           value: "#FFFFFF",
// //         },
// //         links: {
// //           color: "#FFFFFF",
// //           distance: 150,
// //           enable: true,
// //           opacity: 0.3,
// //           width: 1,
// //         },
// //         move: {
// //           direction: "none",
// //           enable: true,
// //           outModes: {
// //             default: "bounce",
// //           },
// //           random: true,
// //           speed: 1,
// //           straight: false,
// //         },
// //         number: {
// //           density: {
// //             enable: true,
// //           },
// //           value: 150,
// //         },
// //         opacity: {
// //           value: 1.0,
// //         },
// //         shape: {
// //           type: "circle",
// //         },
// //         size: {
// //           value: { min: 1, max: 3 },
// //         },
// //       },
// //       detectRetina: true,
// //     }),
// //     [],
// //   );

// //   return <Particles id={props.id} init={particlesLoaded} options={options} />;
// // };

// // export default ParticlesComponent;



// "use client";
// import React, { useEffect, useState } from "react";
// import Intro from "./Intro/page";
// import Services from "./Services/page";
// import MyE from "./MyE/page";
// import Skills from "./Skills/page";
// import Footer from "./Footer/page";
// import Contact from "./Contact/page";
// // import Testimonials from "./Testimonials/page";
// import Recent from "./Recent/page";
// import Work from "./Work/page";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Loading from './Loading/page';

// const Page = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     AOS.init({
//       once: true,
//     });
//     AOS.refresh();
//     setTimeout(() => setLoading(false), 3300);
//   }, []);

//   return (
//     <div className="overflow-hidden">
//       {loading ? (
//         <Loading />
//       ) : (
//         <>
//           <Intro />
//           <div className="snap-container">
//           <div className="snap-item"><Intro /></div>

//             <div className="snap-item"><Services /></div>
//             <div className="snap-item"><Work /></div>
//             <div className="snap-item"><MyE /></div>
//             <div className="snap-item"><Skills /></div>
//             <div className="snap-item"><Recent /></div>
//             <div className="snap-item"><Contact /></div>
//             <div className="snap-item"><Footer /></div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Page;
