"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
  "Next.js",
  "React.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Supabase",
];

const FlowingMenu = () => {
  return (
    <section
      id="services"
      className="w-full bg-white py-16 md:py-24 font-ibm"
    >
      <div className="px-4 md:px-[15%]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-red-500 font-semibold mb-3">
            What I Do
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-medium tracking-tighter leading-none">
                Services
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-500 max-w-md leading-relaxed">
              I build modern, fast, and scalable web experiences using a
              carefully selected tech stack.
            </p>
          </div>
        </motion.div>

        {/* Main Service Card */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="border border-gray-200 rounded-none overflow-hidden"
        >
          {/* Top */}
          <div className="bg-black px-6 sm:px-8 md:px-10 py-10 md:py-14">
            <p className="text-white/50 text-xs uppercase tracking-[0.25em] mb-4">
              Core Service
            </p>

            <h3 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-none">
              Web Development
            </h3>
          </div>

          {/* Bottom */}
          <div className="px-6 sm:px-8 md:px-10 py-8 md:py-10 bg-white">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="md:max-w-sm">
                <p className="text-sm text-gray-500 leading-relaxed">
                  Building responsive websites and full-stack web applications
                  with clean UI, smooth interactions, and strong performance.
                </p>
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      whileHover={{
                        y: -3,
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        borderColor: "#000000",
                      }}
                      className="px-4 py-2 text-sm md:text-base border border-gray-300 text-black font-medium transition-colors duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlowingMenu;