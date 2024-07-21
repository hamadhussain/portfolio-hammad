import Image from "next/image";
import React from "react";
import { SiNextdotjs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";

const Page = () => {
  return (
    <div
      id="Skills"
      className=" h-full md:p-24 p-2 py-14 m flex items-center flex-col justify-center"
    >
      <h1 className="text-gradientd text-6xl sm:text-8xl">My Skills</h1>
      <br />
      <p className=" text-white container text-center">
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and you customers.We transform your ideas into
        a unique web project that inspires both you and your customers. With
        expertise in programming languages like Python, JavaScript, and PHP, we
        ensure your project not only meets but exceeds technical expectations.
      </p>
      <div className="py-10 grid grid-flow-row-dense  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          data-aos-easing="linear"
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex  flex-col items-center gap-2"
        >
          <div className="p-14 i d flex flex-col rounded-3xl justify-center items-center gap-5 duration-500 delay-75">
            <Image
              src="/figma.png"
              className="imgg filter transition cursor-pointer scale-100 hover:grayscale-0  hover:scale-110 grayscale"
              width={100}
              height={100}
            />
            <span className="text-gray-400">92%</span>
          </div>
          <span className="text-purple-500">Figma</span>
        </div>
        <div
          data-aos-easing="linear"
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex flex-col items-center gap-2"
        >
          <div className="p-14 flex i flex-col d rounded-3xl justify-center items-center gap-5 hoverscale-110 duration-500 delay-75">
            <Image
              src="/typescript.png"
              className="imgg filter  hover:scale-110 transition cursor-pointer scale-100 hover:grayscale-0 grayscale"
              width={100}
              height={100}
            />
            <span className="text-gray-400">92%</span>
          </div>
          <span className="text-purple-500">typescript</span>
        </div>
        <div
          data-aos-easing="linear"
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex flex-col  items-center gap-2"
        >
          <div className="p-14 flex d i flex-col rounded-3xl justify-center items-center gap-5 hoverscale-110 duration-500 delay-75">
            <Image
              src="/Hierarchical.png"
              className="imgg  hover:scale-110 filter transition cursor-pointer scale-100 hover:grayscale-0 grayscale"
              width={100}
              height={100}
            />
            <span className="text-gray-400">92%</span>
          </div>
          <span className="text-purple-500">Hierarchical</span>
        </div>
        <div
          data-aos-easing="linear"
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex flex-col items-center gap-2"
        >
          <div className="p-14 i d flex flex-col rounded-3xl justify-center items-center gap-5 hover:scale- duration-500 delay-75">
            <Image
              src="/python.png"
              className="imgg filter  hover:scale-110 transition cursor-pointer scale-100 hover:grayscale-0 grayscale"
              width={100}
              height={100}
            />
            <span className="text-gray-400">92%</span>
          </div>
          <span className="text-purple-500">Python</span>
        </div>
        <div
          data-aos-easing="linear"
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex flex-col items-center gap-2"
        >
          <div className="p-14 i flex flex-col rounded-3xl justify-center items-center gap-5 hover:scale110 d duration-500 delay-75">
            <Image
              src="/react.png"
              className="imgg filter transition cursor-pointer scale-100 hover:grayscale-0  hover:scale-110 grayscale"
              width={100}
              height={100}
            />
            <span className="text-gray-400">92%</span>
          </div>
          <span className="text-purple-500">React</span>
        </div>
        <div
          data-aos-easing="linear"
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex flex-col items-center gap-2"
        >
          <div className="p-14 i flex flex-col rounded-3xl justify-center items-center gap-5 d hover:cale-110 duration-500 delay-75">
            <Image
              src="/java-script.png"
              className="imgg filter transition cursor-pointer scale-100 hover:grayscale-0  hover:scale-110 grayscale"
              width={100}
              height={100}
            />
            <span className="text-gray-400">92%</span>
          </div>
          <span className="text-purple-500">JavaScript</span>
        </div>
        <div
          data-aos-easing="linear"
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex flex-col items-center gap-2"
        >
          <div className="p-14 i flex flex-col rounded-3xl d justify-center items-center gap-5 hover:cale-110 duration-500 delay-75">
            <Image
              src="/java.png"
              className="imgg filter transition cursor-pointer scale-100 hover:grayscale-0 grayscale  hover:scale-110"
              width={100}
              height={100}
            />
            <span className="text-gray-400">92%</span>
          </div>
          <span className="text-purple-500">Java</span>
        </div>
        <div
          data-aos-easing="linear"
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex flex-col items-center gap-2"
        >
          <div className="p-16 i flex flex-col rounded-3xl d justify-center items-center gap-5 hover:scale- duration-500 delay-75">
            <SiPrisma className="imgg hover:cursor-pointer ease-in-out duration-300 hover:scale-125  size-20" />
            <span className="text-gray-400">92%</span>
          </div>
          <span className="text-purple-500">Prisma</span>
        </div>
        <div
          data-aos-easing="linear"
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex flex-col items-center gap-2"
        >
          <div className="p-16 i flex flex-col rounded-3xl d justify-center items-center gap-5 hover:scale- duration-500 delay-75">
            <SiNextdotjs className="imgg hover:cursor-pointer ease-in-out duration-300 hover:scale-125  size-20" />
            <span className="text-gray-400">92%</span>
          </div>
          <span className="text-purple-500">Prisma</span>
        </div>
        <div
          data-aos-easing="linear"
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex  flex-col items-center gap-2"
        >
          <div className="p-14 d i flex flex-col rounded-3xl justify-center items-center gap-5 duration-500 delay-75">
            <Image
              src="/SQL.png"
              className="imgg filter transition cursor-pointer scale-100 hover:grayscale-0  hover:scale-110 grayscale"
              width={100}
              height={100}
            />
            <span className="text-gray-400">92%</span>
          </div>
          <span className="text-purple-500">SQL</span>
        </div>
        <div
          data-aos-easing="linear"
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex  flex-col items-center gap-2"
        >
          <div className="p-14 d flex i flex-col rounded-3xl justify-center items-center gap-5 duration-500 delay-75">
            <Image
              src="/Flutter.png"
              className="imgg filter transition cursor-pointer scale-100 hover:grayscale-0  hover:scale-110 grayscale"
              width={100}
              height={100}
            />
            <span className="text-gray-400">92%</span>
          </div>
          <span className="text-purple-500">Flutter</span>
        </div>
        <div
          data-aos-easing="linear"
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex  flex-col items-center gap-2"
        >
          <div className="p-14 d i flex flex-col rounded-3xl justify-center items-center gap-5 duration-500 delay-75">
            <Image
              src="/dart.png"
              className="imgg filter transition cursor-pointer scale-100 hover:grayscale-0  hover:scale-110 grayscale"
              width={100}
              height={100}
            />
            <span className="text-gray-400">92%</span>
          </div>
          <span className="text-purple-500">Dart</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
