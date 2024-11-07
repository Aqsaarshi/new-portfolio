import React from "react";
import { MdDownload } from "react-icons/md";
import Image from "next/image";
import cvpic from "../public/assets/cvpic.png";

const About = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[15rem]"
              alt="hero"
              width="300"
              height="300"
              src={cvpic}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed text-black">
              Hi, I am Aqsa! I am currently pursuing studies in Artificial
              Intelligence, Web3.0, and Metaverse through GIAIC. With a
              background in web development, I have hands-on experience in HTML,
              CSS, TypeScript, and I am currently expanding my skill set with
              Next.js. I have also developed practical knowledge in Excel,
              marketing, and video editing through various projects and
              internships. Recently, I built a Resume Builder project,
              showcasing my ability to design functional web tools.
              Additionally, my work experience in DME, CGM sectors, and call
              centers has strengthened my customer service and problem-solving
              skills. I love exploring emerging technologies and am passionate
              about creative projects, like making presentations and working
              with PowerPoint.
            </p>
            <div className="flex justify-center"></div>
            <a href="/assets/cv.pdf" download>
              <button className="ml-4 inline-flex text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-purple-700 hover:scale-105 transition-transform duration-300 rounded text-lg">
                View CV
                <MdDownload className="text-xl ml-2" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
