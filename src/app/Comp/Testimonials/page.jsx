// import React from "react";
// import Embla from './Embla/page'
// const page = () => {

// const OPTIONS = { align: 'start', dragFree: true, loop: true }
// const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

//   return (
//     <div id="Testimonials" className="p-24 bg-black text-white flex justify-around">
//       <div className="">
//         <h1 className=" text-gradientd t ">My Client's Stories</h1>
//         <p className=" container">
//           {" "}
//           Empowering people in new a digital journey with my super services
//         </p>{" "}
//       </div>
//       <div className=" ">
//       <Embla slides={SLIDES} options={OPTIONS} />
//       </div>
//     </div>
//   );
// };

// export default page;

import React from "react";
import Embla from "./Embla/page";

const Page = () => {
  const OPTIONS = { align: "start", dragFree: true, loop: true };
  // const SLIDES = [
  //   {
  //     image: '/work.png',
  //     name: 'Tim Bailey',
  //     position: 'SEO Specialist, Theme Junction',
  //     quote: 'Taylor is a professional Designer he really helps my business by providing value to my business.'
  //   },{
  //     image: '/work.png',
  //     name: 'Tim Bailey',
  //     position: 'SEO Specialist, Theme Junction',
  //     quote: 'Taylor is a professional Designer he really helps my business by providing value to my business.'
  //   },{
  //     image: '/work.png',
  //     name: 'Tim Bailey',
  //     position: 'SEO Specialist, Theme Junction',
  //     quote: 'Taylor is a professional Designer he really helps my business by providing value to my business.'
  //   },{
  //     image: '/work.png',
  //     name: 'Tim Bailey',
  //     position: 'SEO Specialist, Theme Junction',
  //     quote: 'Taylor is a professional Designer he really helps my business by providing value to my business.'
  //   },
  //   // Add more slides as needed
  // ]
  const SLIDES = [
    {
      id: 'p1',
      image: "/2.jpg",
      name: "Tim Bailey",
      position: "SEO Specialist, Theme Junction",
      quote:
        "Taylor is a professional Designer he really helps my business by providing value to my business.",
    },
    {
      id: 'p2',
      image: "/3.jpg",
      name: "Sara Connor",
      position: "Product Manager, Tech Corp",
      quote:
        "Taylor's design skills have significantly improved our product's user experience.",
    },
    {
      id: 'p3',
      image: "/4.jpg",
      name: "John Doe",
      position: "Marketing Director, Creative Solutions",
      quote:
        "Taylor's creativity and attention to detail have made our campaigns stand out.",
    },
  ];
  return (
    <div
      id="Testimonials"
      className="p-24 hidden md:block bg-black text-white flex flex-col space-y-4 md:flex-row justify-around"
    >
      <div className="">
        <h1 className=" text-gradientd t ">My Client's Stories</h1>
        <p className=" container">
          Empowering people in a new digital journey with my super services
        </p>
      </div>
      <div className="">
        <Embla slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Page;
