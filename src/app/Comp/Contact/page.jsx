// import React from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneVolume } from "react-icons/fa6";
// import { IoMdMail } from "react-icons/io";

// const page = () => {
//   return (
//     <div
//       id="Contact"
//       className=" p-24 bg-black flex justify-evenly items-center "
//     >
//       <div className="    rounded-2xl   ">
//         <div className="max-w-md mx-auto d bg-white rounded-3xl py-6 shadow-md px-8 pt-6 pb-8 mb-4">
//           <h1 className=" text-gradientd t ">Let’s work together!</h1>
//           <br />
//           <p className="container  text-white">
//             I design and code beautifully simple things and i love what i do.
//             Just simple like that!
//           </p>
//           <br />
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <input
//                 id="first_name"
//                 type="text"
//                 placeholder="First Name"
//                 className="shadow appearance-none border bocol rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div>
//               <input
//                 id="last_name"
//                 type="text"
//                 placeholder="Last Name"
//                 className="shadow appearance-none bocol border border-#102039 rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="Email Address"
//                 className="shadow bocol appearance-none border border-#102039 rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div>
//               <input
//                 id="phone"
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="shadow bocol appearance-none border border-#102039 rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//           </div>

//           <div className="pb-4">
//             <div className="relative">
//               <select className="block bg-black appearance-none w-full bocol  border border-#102039 text-gray-400 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500">
//                 <option className=" bg-black text-gray-300">Backend</option>
//                 <option className=" bg-black text-gray-300">Frontend</option>
//                 <option className=" bg-black text-gray-300">
//                   Database Management
//                 </option>
//                 <option className=" bg-black text-gray-300">
//                   Lead Project Management
//                 </option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
//                 <svg
//                   className="fill-current h-4 w-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9 11l4-4-4-4v3H1v2h8z" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className="mb-6">
//             <textarea
//               id="message"
//               rows="4"
//               placeholder="Your Message"
//               className="shadow bocol appearance-none border border-#102039 rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
//             ></textarea>
//           </div>

//           <div className="flex items-center justify-between">
//             <button
//               className=" transition duration-100 delay-75 ease-in-out bg-gradient-to-r from-purple-700 to-purple-500 rounded-lg px-10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 text-white font-bold py-2  focus:outline-none focus:shadow-outline"
//               type="button"
//             >
//               Send Message
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className=" text-white  space-y-10">
//         <div className=" flex items-center gap-4">
//           <div className=" bg-gradient-to-t from-purple-600 to-purple-950  w-14 h-14 flex items-center justify-center rounded-full">
//             <FaPhoneVolume className="  text-center text-white" />
//           </div>
//           <div>
//             <p className=" text-gray-300">Phone</p>
//             <p className=" text-2xl ">03462351008</p>
//           </div>
//         </div>
//         <div className=" flex items-center gap-4">
//           <div className=" bg-gradient-to-t from-purple-600 to-purple-950  w-14 h-14 flex items-center justify-center rounded-full">
//             <IoMdMail className="  text-center text-white" />
//           </div>
//           <div>
//             <p className=" text-gray-300">Email</p>
//             <p className=" text-2xl ">hammad31012004@gmail.com</p>
//           </div>
//         </div>
//         <div className=" flex items-center gap-4">
//           <div className=" bg-gradient-to-t from-purple-600 to-purple-950  w-14 h-14 flex items-center justify-center rounded-full">
//             <FaLocationDot className="  text-center text-white" />
//           </div>
//           <div>
//             <p className=" text-gray-300">Address</p>
//             <p className=" text-2xl ">North karachi 11 A</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

import React from "react";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const page = () => {
  return (
    <div
      id="Contact"
      className="p-4 py-10 md:p-24 bg-black flex flex-col md:flex-row justify-evenly items-center"
    >
      <div
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1000"
        className="max-w-md d mx-auto md:m-0 md:mr-8 bg-white rounded-3xl py-6 shadow-md px-8 pt-6 pb-8 mb-4 space-y-5"
      >
        <h1 className="text-gradientd text-center md:text-left t">
          Let’s work together!
        </h1>
        <p className="container text-white text-center md:text-left">
          I design and code beautifully simple things and I love what I do. Just
          simple like that!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              id="first_name"
              type="text"
              placeholder="First Name"
              className="shadow appearance-none border bocol rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <input
              id="last_name"
              type="text"
              placeholder="Last Name"
              className="shadow appearance-none bocol border border-#102039 rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="shadow bocol appearance-none border border-#102039 rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              className="shadow bocol appearance-none border border-#102039 rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="pb-4">
          <div className="relative">
            <select className="block bg-black appearance-none w-full bocol border border-#102039 text-gray-400 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500">
              <option className="bg-black text-gray-300">Backend</option>
              <option className="bg-black text-gray-300">Frontend</option>
              <option className="bg-black text-gray-300">
                Database Management
              </option>
              <option className="bg-black text-gray-300">
                Lead Project Management
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 11l4-4-4-4v3H1v2h8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <textarea
            id="message"
            rows="4"
            placeholder="Your Message"
            className="shadow bocol appearance-none border border-#102039 rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div className="flex items-center justify-center md:justify-start">
          <button
            className="transition duration-100 delay-75 ease-in-out bg-gradient-to-r from-purple-700 to-purple-500 rounded-lg px-10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 text-white font-bold py-2 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send Message
          </button>
        </div>
      </div>

      <div className="text-white md:ml-8 mt-8 md:mt-0 space-y-10 md:flex md:flex-col md:items-start md:space-y-5">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-t from-purple-600 to-purple-950 w-14 h-14 flex items-center justify-center rounded-full">
            <FaPhoneVolume className="text-white" />
          </div>
          <div>
            <p className="text-gray-300">Phone</p>
            <p className="text-2xl">03462351008</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-t from-purple-600 to-purple-950 w-14 h-14 flex items-center justify-center rounded-full">
            <IoMdMail className="text-white" />
          </div>
          <div>
            <p className="text-gray-300">Email</p>
            <p className="text-2xl">hammad31012004@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-t from-purple-600 to-purple-950 w-14 h-14 flex items-center justify-center rounded-full">
            <FaLocationDot className="text-white" />
          </div>
          <div>
            <p className="text-gray-300">Address</p>
            <p className="text-2xl">North Karachi 11A</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
