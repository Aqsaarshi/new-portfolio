"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // 🆕 Import
import type { Variants } from "framer-motion";

import project from "../public/assets/project.png";
import comforty from "../public/assets/comforty.png";
import ecommerce from "../public/assets/ecommerce.png";
import ecommerce2 from "../public/assets/ecommerce2.png";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Project = () => {
  const projectList = [
    {
      img: project,
      alt: "Resume Builder",
      title: "Resume Builder Project",
      heading: "Resume Builder",
      desc: "Build professional resumes quickly with structured templates and downloadable previews.",
      link: "https://resumebuilder-byaqsaarshad.vercel.app/",
    },
    {
      img: comforty,
      alt: "Comforty Marketplace",
      title: "Chair Rental & Sale",
      heading: "Comforty Marketplace",
      desc: "A sleek UI for renting & selling chairs for events. Built using Sanity CMS and Next.js.",
      link: "https://marketplace-technical-foundation-chairs.vercel.app/",
    },
    {
      img: ecommerce,
      alt: "E-commerce Store",
      title: "Intern Project",
      heading: "E-commerce Store",
      desc: "Basic online store using Firebase and Next.js with secure login and cart features.",
      link: "https://intern-intelligence-ecommerce-websi.vercel.app/",
    },
    {
      img: ecommerce2,
      alt: "Second E-commerce Site",
      title: "Fullstack Project",
      heading: "E-commerce Website",
      desc: "Feature-rich e-commerce app with cart, checkout, and product filtering using Stripe, Sanity, and Next.js.",
      link: "https://codealpha-tasks-ecommerse-website.vercel.app/",
    },
  ];

  return (
    <div id="Project">
      <section className="text-gray-600 body-font bg-slate-400 py-24">
        <div className="container px-5 mx-auto">
          {/* Heading */}
          <div className="flex flex-col text-center w-full mb-16">
            <h2 className="text-base text-purple-700 tracking-widest font-semibold mb-2">
              PORTFOLIO
            </h2>
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-4">
              My Projects
            </h1>
            <div className="w-24 h-1 bg-purple-700 mx-auto rounded mb-4"></div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
              Explore some of my featured projects built using modern web
              development technologies like Next.js, Sanity, Tailwind CSS and
              more.
            </p>
          </div>

          {/* Project Cards with Animation */}
          <div className="flex flex-wrap -m-4 justify-center">
            {projectList.map((project, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:w-1/3 sm:w-1/2 p-4"
              >
                <div className="relative group rounded-lg overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_0_25px_#a855f7] transition-shadow duration-300">
                  <Image
                    src={project.img}
                    alt={project.alt}
                    width={600}
                    height={360}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    placeholder="blur"
                  />
                  <div className="px-8 py-10 relative z-10 w-full bg-white bg-opacity-90 border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-600 mb-1">
                      {project.title}
                    </h2>
                    <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
                      {project.heading}
                    </h1>
                    <p className="leading-relaxed mb-2 text-gray-700">
                      {project.desc}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 underline text-sm font-medium"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
