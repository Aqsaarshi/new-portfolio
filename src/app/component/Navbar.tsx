import React from "react";
import Image from "next/image";
import aqsapic from "../public/assets/aqsapic.jpg";
{
  /*import { FaBeer } from "react-icons/fa";*/
}
{
  /*import { MdDownload } from "react-icons/md";*/
}
const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font text-white bg-slate-400	">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={aqsapic}
              alt="AQSA ARSHAD"
              width={100}
              height={100}
              className="w-[50px]"
            />

            <span className="ml-3 text-xl text-white	">AQSA ARSHAD </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="#" className="mr-5 hover:text-purple-900">
              Home
            </a>
            <a href="#About" className="mr-5 hover:text-purple-900">
              About
            </a>
            {/*<a href={"#"} className="mr-5 hover:text-purple-900">
              Skills
            </a>*/}
            <a href="#Project" className="mr-5 hover:text-purple-900">
              Project
            </a>
            <a href="#Contact" className="mr-5 hover:text-purple-900">
              Contact
            </a>
          </nav>
          {/*<a href="/assets/cv.pdf" download>
            <button className="inline-flex items-center bg-purple-900 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded text-base mt-4 md:mt-0 text-white">
              Download CV
              <MdDownload className="text-xl ml-2" />
            </button>
          </a>*/}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
