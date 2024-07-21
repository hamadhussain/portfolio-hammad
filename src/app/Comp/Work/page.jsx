// "use client";
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Image from "next/image";
// import { BsPersonWorkspace } from "react-icons/bs";
// // import { IoArrowRedo } from "react-icons/io5";
// import { IoArrowUpCircleSharp } from "react-icons/io5";

// function ScrollSection() {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);

//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     const pin = gsap.fromTo(
//       sectionRef.current,
//       {
//         translateX: 0,
//       },
//       {
//         translateX: "-300vw",
//         ease: "none",
//         duration: 1,
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: "2000 top",
//           scrub: 0.6,
//           pin: true,
//         },
//       }
//     );
//     return () => {
//       pin.kill();
//     };
//   }, []);

//   return (
//     <section id="Works" className="scroll-section-outer m text-white overflow-hidden">
//       <div ref={triggerRef}>
//         <div ref={sectionRef} className=" scroll-section-inner">
//           <div className="scroll-section  w-screen  flex justify-around items-start">
//             <Image src="/work.png" width={400} height={100} />
//             <div className="  text-white space-y-14">
//               <div
//                 className="
//               flex justify-center items-center gap-6 text-9xl"
//               >
//                 <BsPersonWorkspace />
//                 <h1 className="  ">My Work</h1>
//               </div>
//               <IoArrowUpCircleSharp className="text-7xl animate-ping rotate-180 text-end" />
//             </div>
//           </div>
//           <div className="scroll-section  w-full flex justify-around p-4 ">
//             {" "}
//             <Image
//               src="/examlight.png"
//               width={600}
//               height={100}
//               className="-rotate-3"
//             />
//             <Image
//               src="/examdark.png"
//               width={600}
//               height={100}
//               className="rotate-3"
//             />
//           </div>
//           <div className="scroll-section  ">
//             <Image src="/3DPort.png" width={1200} height={100} />
//           </div>
//           <div className="scroll-section   ">
//             <Image src="/bunesshoempage.png" width={1200} height={100} />
//           </div>
//           <div className="scroll-section   ">
//             <Image src="/netflix.png" width={1200} height={100} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ScrollSection;

"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoArrowUpCircleSharp } from "react-icons/io5";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section
      id="Works"
      className="d scroll-section-outer text-white overflow-hidden"
    >
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section w-full flex flex-col md:flex-row justify-center items-center md:items-center space-y-14 md:space-y-0">
            <Image src="/suit.png" width={400} height={100} />

            <div className="text-center md:text-left space-y-4 md:space-y-14">
              <div className="flex text-gradientd justify-center items-center gap-2 md:gap-6 text-4xl md:text-9xl">
                <h1 >My Work</h1>{" "}
                <IoArrowUpCircleSharp className="text-4xl md:text-7xl animate-ping rotate-180 text-end" />
              </div>
            </div>
          </div>

          <div className="scroll-section w-full flex flex-col md:flex-row justify-center p-4 space-y-4 md:space-y-0 md:space-x-4">
            <Image
              src="/examlight.png"
              width={500}
              height={100}
              className="-rotate-3 md:-rotate-3"
            />
            <Image
              src="/examdark.png"
              width={500}
              height={100}
              className="rotate-3 md:rotate-3"
            />
          </div>

          <div className="scroll-section w-full">
            <Image src="/3DPort.png" width={1200} height={100} />
          </div>

          <div className="scroll-section w-full">
            <Image src="/bunesshoempage.png" width={1200} height={100} />
          </div>

          <div className="scroll-section w-full">
            <Image src="/netflix.png" width={1200} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
