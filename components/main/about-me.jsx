// components/main/about-me.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  SparklesIcon,
  UserIcon,
  CodeBracketIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const AboutMe = () => {

  const handleContactClick = () => {
  if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    window.location.href = "tel:+918708574843";
  } else {
    window.location.href = "mailto:kuber98jha@gmail.com";
  }
};
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/blackhole.webm" type="video/webm" />
          </video>
        </div>
      </div>

      <div className="w-full px-10 relative z-10">
        {/* Header with sparkles */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto w-fit mb-10"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">About Me</h1>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-center gap-16 mt-10">
          {/* Left Column - Profile Image */}
          <motion.div
            variants={slideInFromLeft(0.3)}
            className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-[#7042f88b] shadow-2xl shadow-[#7042f8]/30"
          >
            <Image
              src="/kuber.png" // You'll need to add this image
              alt="Profile"
              fill
              className="object-cover"
            />

            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse" />
          </motion.div>

          {/* Right Column - About Text */}
          <motion.div
            variants={slideInFromRight(0.3)}
            className="max-w-2xl text-gray-300 space-y-6"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Kuber Jha
              </span>
            </h2>

            <p className="text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with over 5 years of
              experience in building scalable web and mobile applications.
              Currently working at{" "}
              <span className="text-purple-400 font-semibold">
                Paul Merchants Limited
              </span>
              , where I create innovative solutions using React, React Native,
              Java, and Spring Boot.
            </p>

            <p className="text-lg leading-relaxed">
              My journey in tech started during my Computer Science degree,
              where I fell in love with creating things that live on the
              internet. Since then, I've worked on diverse projects ranging from
              e-commerce platforms to mobile apps serving thousands of users.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  5+
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  Years Experience
                </div>
              </div>

              <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  50+
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  Projects Completed
                </div>
              </div>

              <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  20+
                </div>
                <div className="text-sm text-gray-400 mt-1">Happy Clients</div>
              </div>

              <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  24/7
                </div>
                <div className="text-sm text-gray-400 mt-1">Support</div>
              </div>
            </div>

            {/* Tech Stack Icons */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <CodeBracketIcon className="h-6 w-6 text-purple-500" />
                Technologies I work with:
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "React Native",
                  "Node.js",
                  "Java",
                  "Spring Boot",
                  "MongoDB",
                  "PostgreSQL",
                ].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-[#0300145e] border border-[#7042f88b] rounded-full text-sm text-gray-300 backdrop-blur-sm hover:border-purple-500 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <CommandLineIcon className="h-6 w-6 text-cyan-500" />
                Education & Background:
              </h3>
              <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-4 backdrop-blur-sm">
                <p className="text-gray-300">
                  🎓 Bachelor's Degree in Computer Science
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Specialized in Full Stack Development with a focus on scalable
                  web and mobile applications.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div variants={slideInFromLeft(1)} className="mt-10">
              <button
                onClick={handleContactClick}
                className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg inline-block hover:scale-105 transition-transform duration-300"
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
