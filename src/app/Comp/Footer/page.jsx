// import React from "react";
// import { TbHexagonLetterHFilled } from "react-icons/tb";

// const page = () => {
//   return (
//     <div className=" flex justify-center d text-center items-center gap-8 flex-col p-20">
//       <TbHexagonLetterHFilled  className=" text-white text-5xl"/>
//       <p className=" text-purple-500">© 2024 All Rights Reserved by Hammad Hussain</p>
//     </div>
//   );
// };

// export default page;


import React from "react";
import { TbHexagonLetterHFilled } from "react-icons/tb";

const Page = () => {
  return (
    <div className="flex flex-col d items-center justify-center p-6 md:p-10 lg:p-20 gap-4 md:gap-6 lg:gap-8 text-center">
      <TbHexagonLetterHFilled className="text-white motion-safe:animate-spin-slow transition ease-out duration-1000	 text-3xl md:text-4xl lg:text-5xl" />
      <p className="text-purple-500 text-sm md:text-base lg:text-lg">
        © 2024 All Rights Reserved by Hammad Hussain
      </p>
    </div>
  );
};

export default Page;
