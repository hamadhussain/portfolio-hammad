"use client";
// // import React from "react";
// // import N from "../Nav/page";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { MdFileDownload } from "react-icons/md";
// // import { FaGithub } from "react-icons/fa";
// // import { FaFacebookF } from "react-icons/fa";
// // import { FaLinkedinIn } from "react-icons/fa";
// // import { motion, spring } from "framer-motion";

// // const page = () => {
// //   return (
// //     <div className=" h bg-gradient-to-r dark:from-purple-95 dark:to-purple-70">
// //       <div className=" h-screen overflow-hidden">
// //         <N />
// //         <div className="  flex flex-col md:flex-row items-center justify-center gap-14 relative top-10">
// //           <div className=" text-center md:text-left space-y-5 " >
// //             <p className=" text-white text-4xl ">
// //               I am <span className="font-bold ">Hammad Hussain</span>
// //             </p>
// //             {/* <p className=" text-gradient text-6xl">Full Stack Developer +</p> */}
// //             <p className=" text-gradientd text-7xl ">
// //               <span>Web Developer +</span><span>UX Designer</span>
// //             </p>
// //             <p className=" text-white   text-3xl max-w-md">
// //               I break down complex user experinece problems to create integritiy
// //               focussed solutions that connect billions of people
// //             </p><br />
// //             <div className=" flex flex-col space-y-4 md:flex-row md:space-x-5">
// //               <Link href="">
// //                 <button className="transition-all text-2xl duration-150 flex items-center ease-out rounded-full hover:text-white border-2 py-4 px-8  border-purple-500 hover:bg-purple-800 text-purple-500">
// //                   Download CV <MdFileDownload className=" text-2xl" />
// //                 </button>
// //               </Link>
// //               <div className=" flex items-center space-x-5 ">
// //                 <Link href="">
// //                   <button className=" hover:scale-150 border border-purple-500 transition-all hover:bg-purple-800 hover:text-white rounded-full p-1 text-purple-500">
// //                     <FaFacebookF />
// //                   </button>
// //                 </Link>
// //                 <Link href="">
// //                   <button className=" hover:scale-150 border border-purple-500 transition-all hover:bg-purple-800 hover:text-white rounded-full p-1 text-purple-500">
// //                     <FaLinkedinIn />
// //                   </button>
// //                 </Link>{" "}
// //                 <Link href="">
// //                   <button className=" hover:scale-150 border border-purple-500 transition-all hover:bg-purple-800 hover:text-white rounded-full p-1 text-purple-500">
// //                     <FaGithub />
// //                   </button>
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //           <motion.div
// //             initial={{ x: 800, overflow: "hidden" }}
// //             animate={{ x: 0, rotate: 3 }}
// //             whileHover={{ rotate: 1 }}
// //             transition={{ duration: 0.2 }}
// //             className=" overflow-hidden border-4 border-purple-800 border-opacity-40 hover:border-opacity-100 cursor-pointer hover:rotate-1 transition-all hover:ease-linear duration-75  rotate-3 rounded-3xl bg-black w-fit h-fit "
// //           >
// //             <Image
// //               src="/im.png"
// //               alt="image"
// //               className="  w-full  img wid h-full hover:duration-75 "
// //               width={250}
// //               height={100}
// //             />
// //           </motion.div>
// //         </div>
// //       </div>
// //       <div className="  grid  grid-cols-2 grid-rows-2 uppercase text-white py-8 px-7 gap-6">
// //         <div className=" space-x-2">
// //           <strong className=" text-5xl font-extrabold ">1</strong>
// //           <span className=" text-2xl "> year of experience in Mern Stack</span>
// //         </div>
// //         <div className=" space-x-2">
// //           <strong className=" text-5xl font-extrabold ">50 +</strong>
// //           <span className=" text-2xl ">Project Completed</span>
// //         </div>{" "}
// //         <div className=" space-x-2">
// //           <strong className=" text-5xl font-extrabold ">1K</strong>
// //           <span className=" text-2xl ">Happy Clients</span>
// //         </div>
// //         <div className=" space-x-2">
// //           <strong className=" text-5xl font-extrabold ">100 %</strong>
// //           <span className=" text-2xl ">of maintainability</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default page;

// 'use client'
// import React from "react";
// import N from "../Nav/page";
// import Image from "next/image";
// import Link from "next/link";
// import { MdFileDownload } from "react-icons/md";
// import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { motion } from "framer-motion";

// const page = () => {
//   return (
//     <div className="h-screen bg-gradient-to-r from-purple-95 to-purple-70 text-white">
//       <N />
//       <div className="flex flex-col md:flex-row items-center justify-center gap-14 relative top-10">
//         <div className="text-center md:text-left space-y-5">
//           <p className="text-4xl">
//             I am <span className="font-bold">Hammad Hussain</span>
//           </p>
//           <p className="text-gradientd text-7xl">
//             <span>Web Developer +</span><br /><span>UX Designer</span>
//           </p>
//           <p className="text-3xl max-w-md">
//             I break down complex user experience problems to create integrity-focused solutions that connect billions of people
//           </p>
//           <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 mt-4">
//             <Link href="#">
//               <button className="transition-all text-2xl duration-150 flex items-center ease-out rounded-full hover:text-white border-2 py-4 px-8 border-purple-500 hover:bg-purple-800 text-purple-500">
//                 Download CV <MdFileDownload className="text-2xl ml-2" />
//               </button>
//             </Link>
//             <div className="flex space-x-5 mt-4 md:mt-0">
//               <Link href="#">
//                 <button className="hover:scale-150 border border-purple-500 transition-all hover:bg-purple-800 hover:text-white rounded-full p-1 text-purple-500">
//                   <FaFacebookF />
//                 </button>
//               </Link>
//               <Link href="#">
//                 <button className="hover:scale-150 border border-purple-500 transition-all hover:bg-purple-800 hover:text-white rounded-full p-1 text-purple-500">
//                   <FaLinkedinIn />
//                 </button>
//               </Link>
//               <Link href="#">
//                 <button className="hover:scale-150 border border-purple-500 transition-all hover:bg-purple-800 hover:text-white rounded-full p-1 text-purple-500">
//                   <FaGithub />
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <motion.div
//           initial={{ x: 800, overflow: "hidden" }}
//           animate={{ x: 0, rotate: 3 }}
//           whileHover={{ rotate: 1 }}
//           transition={{ duration: 0.2 }}
//           className="overflow-hidden border-4 border-purple-800 border-opacity-40 hover:border-opacity-100 cursor-pointer hover:rotate-1 transition-all hover:ease-linear duration-75 rotate-3 rounded-3xl bg-black w-fit h-fit"
//         >
//           <Image
//             src="/im.png"
//             alt="image"
//             className="w-full img wid"
//             width={250}
//             height={100}
//           />
//         </motion.div>
//       </div>
//       <div className="grid grid-cols-2 grid-rows-2 uppercase text-white py-8 px-7 gap-6">
//         <div className="flex items-center space-x-2">
//           <strong className="text-5xl font-extrabold">1</strong>
//           <span className="text-2xl">year of experience in Mern Stack</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <strong className="text-5xl font-extrabold">50+</strong>
//           <span className="text-2xl">Project Completed</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <strong className="text-5xl font-extrabold">1K</strong>
//           <span className="text-2xl">Happy Clients</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <strong className="text-5xl font-extrabold">100%</strong>
//           <span className="text-2xl">of maintainability</span>
//         </div>
//       </div>
//     </div>
//   );
// };
{
  /* <div className="grid grid-cols-2 grid-rows-2 uppercase text-white py-8 px-7 gap-6">
        <div className="flex items-center space-x-2">
          <strong className="text-5xl font-extrabold">1</strong>
          <span className="text-2xl">year of experience in Mern Stack</span>
        </div>
        <div className="flex items-center space-x-2">
          <strong className="text-5xl font-extrabold">50+</strong>
          <span className="text-2xl">Project Completed</span>
        </div>
        <div className="flex items-center space-x-2">
          <strong className="text-5xl font-extrabold">1K</strong>
          <span className="text-2xl">Happy Clients</span>
        </div>
        <div className="flex items-center space-x-2">
          <strong className="text-5xl font-extrabold">100%</strong>
          <span className="text-2xl">of maintainability</span>
        </div>
      </div> */
}

// export default page;
("use clienP");
import React from "react";
import N from "../Nav/page";
import Image from "next/image";
import Link from "next/link";
import { MdFileDownload } from "react-icons/md";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "./Particles/page";
import NumberAnimation from "./NumberAnimation/page";
const Page = () => {
  const handleDownload = () => {
    // Replace 'resume.pdf' with the actual path to your resume file
    const downloadPath = "/HammadHussainnCV.pdf";
    const link = document.createElement("a");
    link.href = downloadPath;
    link.download = "Your_Name_Resume.pdf"; // Set desired file name here
    link.click();
  };
  return (
    <div className="h- bg-gradient-to-r from-purple-95 h to-purple-70 text-white">
      <Particles />
      {/* <div className="h-screen flex flex-col justify-evenly">
        <N />
        <div className="flex h-full flex-col sm:flex-row items-center justify-center px-5 gap-14 relative ">
          <div className="text-center md:text-left space-y-5">
            <p className="text-4xl">
              I am <span className="font-bold">Hammad Hussain</span>
            </p>
            <p className="text-gradientdd text-7xl">
              <span className="text-purple-500 font-bold">Web Developer</span> +
              <br />
              <span className="text-purple-500 font-bold">UX Designer</span>
            </p>
            <p className="text-3xl max-w-md">
              I break down complex user experience problems to create
              integrity-focused solutions that connect billions of people
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 mt-4">
              <a href="/HammadHussainnCV.pdf"  download>
                <button onClick={handleDownload} className="transition-all text-2xl duration-150 flex items-center ease-out rounded-full hover:text-white border-2 py-4 px-8 border-purple-500 hover:bg-purple-800 text-purple-500">
                  Download CV <MdFileDownload className="text-2xl ml-2" />
                </button>
              </a>
              <div className="flex space-x-5 mt-4 md:mt-0">
              <Link href="https://www.facebook.com/share/RaSTBRZv9xUsjJCe/?mibextid=qi2Omg ">
                  <button className="hover:scale-150 border border-purple-500 transition-all hover:bg-purple-800 hover:text-white rounded-full p-1 text-purple-500">
                    <FaFacebookF />
                  </button>
                </Link>
                <Link href="https://www.linkedin.com/in/hammadhussaindeveloper/  ">
                  <button className="hover:scale-150 border border-purple-500 transition-all hover:bg-purple-800 hover:text-white rounded-full p-1 text-purple-500">
                    <FaLinkedinIn />
                  </button>
                </Link>
                <Link href="https://github.com/hamadhussain">
                  <button className="hover:scale-150 border border-purple-500 transition-all hover:bg-purple-800 hover:text-white rounded-full p-1 text-purple-500">
                    <FaGithub />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ x: 800, overflow: "hidden" }}
            animate={{ x: 0, rotate: 3 }}
            whileHover={{ rotate: 1 }}
            transition={{ duration: 0.2 }}
            className="sm:block hidden border-4 border-purple-800 border-opacity-40 hover:border-opacity-100 cursor-pointer hover:rotate-1 transition-all hover:ease-linear duration-75 rotate-3 rounded-3xl bg-black w-fit h-fit"
          >
            <Image
              src="/im.png"
              alt="image"
              className="w-full img wid"
              width={250}
              height={100}
            />
          </motion.div>
        </div>
      </div> */}
      <div className="min-h-screen flex flex-col justify-evenly sm:justify-start sm:gap-9">
        <N />
        <div className="flex flex-col sm:flex-row items-center justify-center px-5 gap-14 relative ">
          <div className="text-center md:text-left space-y-5">
            <p className="text-4xl">
              I am <span className="font-bold">Hammad Hussain</span>
            </p>
            <p className="text-gradientdd text-7xl">
              <span className="text-purple-500 font-bold">Web Developer</span> +
              <br />
              <span className="text-purple-500 font-bold">UX Designer</span>
            </p>
            <p className="text-3xl sm:max-w-md">
              I break down complex user experience problems to create
              integrity-focused solutions that connect billions of people
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 mt-4">
              <a href="/HammadHussainnCV.pdf" download>
                <button
                  onClick={handleDownload}
                  className="transition-all text-xl md:text-2xl duration-150 flex items-center ease-out rounded-full hover:text-white border-2 py-3 md:py-4 px-6 md:px-8 border-purple-500 hover:bg-purple-800 text-purple-500"
                >
                  Download CV{" "}
                  <MdFileDownload className="text-xl md:text-2xl ml-2" />
                </button>
              </a>
              <div className="flex space-x-5 mt-4 md:mt-0">
                <a
                  href="https://www.facebook.com/share/RaSTBRZv9xUsjJCe/?mibextid=qi2Omg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-150 border border-purple-500 transition-all hover:bg-purple-800 hover:text-white rounded-full p-2 md:p-1 text-purple-500"
                >
                  <FaFacebookF className="text-lg md:text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hammadhussaindeveloper/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-150 border border-purple-500 transition-all hover:bg-purple-800 hover:text-white rounded-full p-2 md:p-1 text-purple-500"
                >
                  <FaLinkedinIn className="text-lg md:text-xl" />
                </a>
                <a
                  href="https://github.com/hamadhussain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-150 border border-purple-500 transition-all hover:bg-purple-800 hover:text-white rounded-full p-2 md:p-1 text-purple-500"
                >
                  <FaGithub className="text-lg md:text-xl" />
                </a>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ x: 800, overflow: "hidden" }}
            animate={{ x: 0, rotate: 3 }}
            whileHover={{ rotate: 1 }}
            transition={{ duration: 0.2 }}
            className="sm:block hidden border-4 border-purple-800 border-opacity-40 hover:border-opacity-100 cursor-pointer hover:rotate-1 transition-all hover:ease-linear duration-75 rotate-3 rounded-3xl bg-black w-fit h-fit"
          >
            <Image
              src="/im.png"
              alt="image"
              // className="w-full h-auto md:w-auto md:h-auto"
              className="w-full img wid"
              width={250}
              height={100}
            />
          </motion.div>
        </div>
      </div>

      <NumberAnimation />
    </div>
  );
};

export default Page;
