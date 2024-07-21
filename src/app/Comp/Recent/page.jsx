import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className=" flex flex-col justify-cente space-y-6 md:space-y-12 items- p-4 md:p-24 m">
      <div className=" text-center">
        <h1 className=" text-gradientd t">Recent Projects</h1>
        <p className=" text-white">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
      </div>
      <div  className=" flex space-y-5 justify-around md:flex-row flex-col ap-11">
        {/* <div className="flex justify-center items-center flex-col">
          <div className=" p-10 bg-black border-purple-500">
            <Image
              src="/exam1.png"
              className=" z-40"
              height={400}
              width={400}
            />
          </div>
          <h1 className=" relative -top-20 p-3 w-fit flex justify-center items-center  text-center bg-purple-400 rounded-xl z-50">
            Exam Management System
          </h1>
        </div> */}
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="p-4 yy i transition ease-in-out d flex flex-col rounded-3xl justify-center items-center gap-5 duration-500 delay-75">
          <Image
            src="/exam1.png"
            className="imgg nn filter transition cursor-pointer scale-100   hover:scale-110"
            width={300}
            height={100}
          />
          <h1 className="transition vv ease-in-out duration-700  p-3 w-fit  text-center  text-white rounded-xl z-50">
            Exam Management System
          </h1>
        </div>
        <div data-aos="fade-down"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="p-4 yy i transition ease-in-out d flex flex-col rounded-3xl justify-center items-center gap-5 duration-500 delay-75">
          <Image
            src="/business.png"
            className="imgg nn filter transition cursor-pointer scale-100   hover:scale-110"
            width={300}
            height={100}
          />
          <h1 className="transition vv ease-in-out duration-700  p-3 w-fit  text-center  text-white rounded-xl z-50">
            Business Interface
          </h1>
        </div>
        <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="p-4 yy i transition ease-in-out d flex flex-col rounded-3xl justify-center items-center gap-5 duration-500 delay-75">
          <Image
            src="/3D.png"
            className="imgg nn filter transition cursor-pointer scale-100   hover:scale-110"
            width={300}
            height={100}
          />
          <h1 className="transition vv ease-in-out duration-700  p-3 w-fit  text-center  text-white rounded-xl z-50">
          3D Portfolio          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
