import React from "react";
import Image from "next/image";
import aqsapic from "../public/assets/aqsapic.jpg";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0 shadow-md">
      <header className="body-font text-white bg-slate-400">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              src={aqsapic}
              alt="AQSA ARSHAD"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="ml-3 text-xl">AQSA ARSHAD</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex gap-6 items-center text-base justify-center">
            <a href="#" className="hover:text-purple-800">
              Home
            </a>
            <a href="#Project" className="hover:text-purple-800">
              Project
            </a>
            <a href="#About" className="hover:text-purple-800">
              About
            </a>
            <a href="#Contact" className="hover:text-purple-800">
              Contact
            </a>
          </nav>
          {/* Download CV button can be enabled later */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
