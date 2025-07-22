"use client";
import React from "react";
import { MdDownload } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import Aqsa_Arshad_CV from "../public/assets/Aqsa_Arshad_CV.png";

const About = () => {
  return (
    <section id="About" className="py-16">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_0_25px_#a855f7] transition-shadow duration-300">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 w-full text-center md:text-left"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-base text-black leading-relaxed max-w-xl mx-auto md:mx-0 mb-6">
            Hi, I am Aqsa! I am currently studying Artificial Intelligence,
            Web3.0, and Metaverse at GIAIC. I am a passionate Full Stack
            Developer with hands-on experience in building dynamic and
            responsive web applications using HTML5, CSS3, JavaScript (ES6+),
            TypeScript, React.js, and Next.js (13 & 14). I specialize in
            creating clean and scalable user interfaces with Tailwind CSS and
            integrating backend services using Firebase, RESTful APIs, mockAPI,
            and Sanity CMS. I am currently exploring the integration of AI
            agents using OpenAI tools such as Agent SDK, Chainlit, and custom
            handlers. With a strong command over Git, GitHub, Postman, Vercel,
            and the command-line interface, I ensure efficient development
            workflows. My background also includes experience in UI/UX design
            with Figma, and I take pride in clear technical communication,
            problem-solving, and self-driven learning. Iam committed to building
            intuitive digital solutions and continuously expanding my skill set.
          </p>

          <a
            href="/assets/Aqsa_Arshad_CV.pdf"
            download="Aqsa_Arshad_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition duration-200"
          >
            <MdDownload className="text-xl" />
            Download CV
          </a>
        </motion.div>

        {/* Image Section with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0"
        >
          <Image
            src={Aqsa_Arshad_CV}
            alt="Aqsa's Image"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
