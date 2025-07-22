"use client";
import React from "react";
import Image from "next/image";
import aqsapic from "../public/assets/aqsapic.jpg";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center animate-fade-in">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Welcome to my Portfolio
            <br className="hidden lg:inline-block" />
            <span className="text-purple-800 font-semibold">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer",
                    "Frontend Specialist (Next.js & React)",
                    "Tailwind CSS UI Designer",
                    "TypeScript & JavaScript Developer",
                    "Python Developer",
                    "Sanity CMS & Firebase Integrator",
                    "Responsive Web Design Expert",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>

          <div className="w-[100px] h-[2px] bg-purple-700 mb-6 mx-auto md:mx-0"></div>

          <p className="mb-8 leading-relaxed text-black text-base max-w-xl text-justify">
            Hello, I am <span className="font-semibold">Aqsa</span>, a GIAIC
            student specializing in{" "}
            <span className="text-purple-800 font-medium">
              Artificial Intelligence
            </span>
            , <span className="text-purple-800 font-medium">Web3.0</span>, and{" "}
            <span className="text-purple-800 font-medium">Metaverse</span>{" "}
            technologies. I have hands-on experience with{" "}
            <span className="font-medium">HTML</span>,{" "}
            <span className="font-medium">CSS</span>, and{" "}
            <span className="font-medium">
              TypeScript , TailwindCSS , JavaScript , React.js{" "}
            </span>
            , and I am currently expanding my expertise by learning{" "}
            <span className="font-medium text-purple-800">Next.js</span>. My
            passion lies in building innovative solutions at the intersection of
            modern web development and emerging technologies.
          </p>

          <div className="flex justify-center">
            <a href="#Contact">
              <button className="inline-flex text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg shadow-md transition duration-300 ease-in-out">
                Contact
              </button>
            </a>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0">
          <Image
            className="object-cover object-center rounded-xl mx-auto w-[15rem] shadow-lg transition-transform duration-300 hover:scale-105"
            alt="hero"
            width={300}
            height={300}
            src={aqsapic}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
