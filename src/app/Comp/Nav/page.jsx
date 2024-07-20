"use client";
// import Link from "next/link";
import { TbHexagonLetterHFilled } from "react-icons/tb";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-around h-16">
          {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div> */}
          <div className="flex-1 flex items-center justify-around sm:items-stretch ">
            <div className="flex items-center">
              <p className="text-white text-4xl  font-bold cursor-pointer animate-spin-slow duration-1000">
                <TbHexagonLetterHFilled />
              </p>

              <p className="text-white uppercase hover:text-purple-400 hover:g-gray-700 px-3 py-2 rounded-md text-xl font-medium cursor-pointer">
                My Portfolio
              </p>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-6">
                <Link
                  activeClass="active"
                  to="Services"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                  // delay={800}
                >
                  <p className="text-white n hover:b-gray-700 hover-underline-animation hover:text-white px-3 py-2 rounded-md text-base  cursor-pointer ">
                    Services
                  </p>
                </Link>
                <Link
                  activeClass="active"
                  to="Works"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                  // delay={800}
                >
                  {" "}
                  <p className="text-white n hover:b-gray-700 hover-underline-animation hover:text-white px-3 py-2 rounded-md text-base  cursor-pointer ">
                    Works
                  </p>
                </Link>
                <Link
                  activeClass="active"
                  to="E"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                  // delay={800}
                >
                  {" "}
                  <p className="text-white n hover:b-gray-700 hover-underline-animation hover:text-white px-3 py-2 rounded-md text-base  cursor-pointer ">
                    Resume
                  </p>
                </Link>
                <Link
                  activeClass="active"
                  to="Skills"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                  // delay={800}
                >
                  {" "}
                  <p className="text-white n hover:b-gray-700 hover-underline-animation hover:text-white px-3 py-2 rounded-md text-base  cursor-pointer ">
                    Skills
                  </p>
                </Link>
                {/* <Link
                  activeClass="active"
                  to="Testimonials"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                  // delay={800}
                >
                  {" "}
                  <p className="text-white n hover:b-gray-700 hover-underline-animation hover:text-white px-3 py-2 rounded-md text-base  cursor-pointer ">
                    Testimonials
                  </p>
                </Link> */}
                <Link
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                  // delay={800}
                >
                  {" "}
                  <p className="text-white n hover:b-gray-700 hover-underline-animation hover:text-white px-3 py-2 rounded-md text-base  cursor-pointer ">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
