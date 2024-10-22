"use client";
import React from "react";
import Image from "next/image";
import aqsapic from "../public/assets/aqsapic.jpg";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to my Portfolio
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Graphic Designer",
                  "Data Analyst",
                  "Video Editor",
                  "Digital Marketing",
                  "Sales Representative",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[2px] bg-purple-700"> </div>
          <p className="mb-8 leading-relaxed text-black	">
            Hello, Iam Aqsa, a GIAIC student specializing in Artificial
            Intelligence, Web3.0, and Metaverse technologies. I have hands-on
            experience with HTML, CSS, and TypeScript, and I am currently
            expanding my expertise by learning Next.js. My passion lies in
            building innovative solutions at the intersection of modern web
            development and emerging technologies.
          </p>
          <div className="flex justify-center">
            <a href="#Contact">
              <button className="inline-flex text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Contact
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[15rem]"
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
