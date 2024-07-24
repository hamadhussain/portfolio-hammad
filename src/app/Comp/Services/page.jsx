// // import React from "react";
// // import { FaArrowRightLong } from "react-icons/fa6";

// // const page = () => {
// //   return (
// //     <div className=" bg-black py-24" id="Services">
// //       <div className=" py-20 text-center">
// //         <h1 className=" text-5xl text-gradientd uppercase">
// //           My Quality Services
// //         </h1>
// //         <br />
// //         <p className=" text-white text-sm text-center px-28">
// //           We put your ideas and thus your wishes in the form of a unique web
// //           project that inspires you and you customers.I specialize in creating
// //           seamless user experiences through meticulous web development and UX
// //           design, tailored to enhance user engagement and satisfaction
// //         </p>
// //       </div>
// //       <div className=" px-2 cursor-pointer">
// //         <div className="text-white contain px-2 flex transition-all ease-in-out hover:duration-700 hover: bg-gradient-to-r from-violet-400 to-violet-900 py-24 justif">
// //           <h1 className="  flex  items-center">
// //           <span>01</span>

// //             <span className=" space-x- w-fit">
// //               Web Design
// //             </span>
// //           </h1>
// //           {/* <div className=" flex  justify-between "> */}
// //           <p className=" px-44 ">
// //             I break down complex user experinece problems to create integritiy
// //             focussed solutions that connect billions of people
// //           </p>

// //           {/* <FaArrowRightLong className=" rotate-45 "/> */}
// //           {/* </div> */}
// //         </div>
// //         <div></div>
// //         <div></div>
// //         <div></div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default page;

// import React from "react";

// const Page = () => {
//   return (
//     <div className="bg-black py-24" id="Services">
//       <div className="py-20 text-center flex justify-center items-center flex-col ">
//         <h1 className="text-5xl text-gradientd  t">
//           My Quality Services
//         </h1>
//         <br />
//         <p className="text-white container px-5 text-sm text-center    ">
//           We put your ideas and thus your wishes in the form of a unique web
//           project that inspires you and your customers. I specialize in creating
//           seamless user experiences through meticulous web development and UX
//           design, tailored to enhance user engagement and satisfaction.That sounds fantastic! Crafting a website that not only meets but exceeds user expectations is crucial for driving business success in today's digital landscape. Let's collaborate to bring your vision to life with precision and creativity.
//         </p>
//       </div>
//       <div className="px-24 cursor-pointer">
//         <div className="text-white default:bg-white contain px-4 flex items-start transition-all ease-in-out hover:duration-700 hover:bg-gradient-to-r from-violet-400 to-violet-900 py-24 justify-between ">
//           <h1 className="flex space-x-4 ">
//             <span className="w">01</span>
//             <span className="ml-2 text-3xl font-extrabold">Web Design</span>
//           </h1>
//           <p className="">
//             I break down complex user experience problems to create
//             integrity-focused solutions that connect billions of people.
//           </p>
//         </div>
//         {/* <hr className=" text-white" /> */}
//         <div className="text-white contain px-4 flex items-start transition-all ease-in-out hover:duration-700 hover:bg-gradient-to-r from-violet-400 to-violet-900 py-24 justify-between ">
//           <h1 className="flex space-x-4 ">
//             <span className="w">02</span>
//             <span className="ml-2 text-3xl font-extrabold">Web Design</span>
//           </h1>
//           <p className="px-4">
//             I break down complex user experience problems to create
//             integrity-focused solutions that connect billions of people.
//           </p>
//           {/* <FaArrowRightLong className="rotate-45" /> */}
//         </div>
//         {/* <hr className=" text-white" />{" "} */}
//         <div className="text-white contain px-4 flex items-start transition-all ease-in-out hover:duration-700 hover:bg-gradient-to-r from-violet-400 to-violet-900 py-24 justify-between ">
//           <h1 className="flex space-x-4 ">
//             <span className="w">03</span>
//             <span className="ml-2 text-3xl font-extrabold">Web Design</span>
//           </h1>
//           <p className="px-4">
//             I break down complex user experience problems to create
//             integrity-focused solutions that connect billions of people.
//           </p>
//           {/* <FaArrowRightLong className="rotate-45" /> */}
//         </div>
//         {/* <hr className=" text-white" />{" "} */}
//         <div className="text-white contain px-4 flex items-start transition-all ease-in-out hover:duration-700 hover:bg-gradient-to-r from-violet-400 to-violet-900 py-24 justify-between ">
//           <h1 className="flex space-x-4 ">
//             <span className="w">04</span>
//             <span className="ml-2 text-3xl font-extrabold">Web Design</span>
//           </h1>
//           <p className="px-4">
//             I break down complex user experience problems to create
//             integrity-focused solutions that connect billions of people.
//           </p>
//           {/* <FaArrowRightLong className="rotate-45" /> */}
//         </div>
//         {/* <hr className=" text-white" /> */}
//       </div>
//     </div>
//   );
// };

// export default Page;

import React from "react";

const Page = () => {
  return (
    <div className="bg-black py-12 md:py-24" id="Services">
      <div className="py-10 md:py-20 text-center flex justify-center items-center flex-col">
        <h1 className="text-3xl md:text-5xl text-white font-bold text-gradientd">
          My Quality Services
        </h1>
        <br />
        <p className="text-white container px-5 text-sm md:text-base">
          We transform your ideas into a unique web project that inspires both
          you and your customers. Specializing in creating seamless user
          experiences through meticulous web development and UX design, tailored
          to enhance user engagement and satisfaction.
        </p>
      </div>
      <div className="container mx-auto grid gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div
          data-aos="zoom-out-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-white bg-gradient-to-r  hover: from-violet-400 to-violet-900 px-6 py-12 rounded-lg shadow-md hover:bg-violet-600 transition duration-300 "
        >
          <h1 className="text-2xl  font-extrabold">Web Design</h1>
          <p className="mt-4">
            I solve complex user experience problems with integrity-focused
            solutions that connect billions of people.
          </p>
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-white hover:scale-105 hover:cursor-pointer bg-gradient-to-r from-violet-400 to-violet-900 px-6 py-12 rounded-lg shadow-md hover:bg-violet-600 transition duration-300"
        >
          <h1 className="text-2xl font-extrabold">Web Developer</h1>
          <p className="mt-4">
            I solve complex user experience problems with integrity-focused
            solutions that connect billions of people.
          </p>
        </div>
        <div
          data-aos="zoom-out-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="hover:scale-105 hover:cursor-pointer text-white bg-gradient-to-r from-violet-400 to-violet-900 px-6 py-12 rounded-lg shadow-md hover:bg-violet-600 transition duration-300"
        >
          <h1 className="text-2xl font-extrabold">Logo Design</h1>
          <p className="mt-4">
            I solve complex user experience problems with integrity-focused
            solutions that connect billions of people.
          </p>
        </div>
        <div
          data-aos="zoom-out-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className=" hover:scale-105 hover:cursor-pointer text-white bg-gradient-to-r from-violet-400 to-violet-900 px-6 py-12 rounded-lg shadow-md hover:bg-violet-600 transition duration-300"
        >
          <h1 className="text-2xl font-extrabold">Software Design</h1>
          <p className="mt-4">
            I solve complex user experience problems with integrity-focused
            solutions that connect billions of people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
