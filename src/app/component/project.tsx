import Image from "next/image";
import projectImg from "../public/assets/project.png";
import React from "react";

const Project = () => {
  return (
    <div id="Project">
      <section className="text-black body-font ">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center bg-slate-400	">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">
              A web app that allows users to create and customize professional
              resumes with ease. Built with Next.js and responsive design for
              optimal user experience.
            </p>
          </div>
          <div className="flex justify-center bg-slate-400	">
            {/*project*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative ">
                <Image
                  alt="Project Thumbnail" // Updated to be more descriptive
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={projectImg}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Resume Builder Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    RESUME BUILDER
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-black">
                    The Normal Resume Builder is a web app that allows users to
                    create professional resumes easily. Users input their
                    information through intuitive forms, generating a structured
                    resume ready for copying or printing.
                  </p>
                  <a
                    target="_blank"
                    href="https://resumebuilder-byaqsaarshad.vercel.app/"
                    rel="noopener noreferrer"
                  >
                    <p className="leading-relaxed text-blue-500 mb-1 underline cursor-pointer">
                      {" "}
                      View Project{" "}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
