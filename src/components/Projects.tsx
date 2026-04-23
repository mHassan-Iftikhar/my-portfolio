"use client";

import { motion } from "framer-motion";

interface Project {
  id: number;
  number: string;
  title: string;
  category: string;
  about: string;
}

const projects = [
  {
    id: 1,
    number: "01",
    title: "PowerSell",
    category: "SaaS",
    about:
      "A gamified SaaS platform that keeps users engaged through interactive experiences and reward-based prize systems.",
  },
  {
    id: 2,
    number: "02",
    title: "Onvyo",
    category: "AI Product",
    about:
      "An AI-driven product that enables users to create backend structures faster, making development more efficient and accessible.",
  },
  {
    id: 3,
    number: "03",
    title: "Rao Umer",
    category: "Portfolio Website",
    about:
      "A professional trading portfolio website created to present the client’s profile, experience, and portfolio content in a clear and modern way.",
  },
  {
    id: 4,
    number: "04",
    title: "BuySell Liberia",
    category: "E-commerce SaaS",
    about:
      "A SaaS-based e-commerce platform built to provide a scalable and user-friendly online buying and selling experience.",
  },
  {
    id: 5,
    number: "05",
    title: "Foundroo",
    category: "EdTech Product",
    about:
      "An education-focused platform that helps students find FYP partners within their own university through separate university-specific spaces and privacy-based project visibility.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-white py-16 md:py-24 font-ibm">
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
            Selected Work
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-medium tracking-tighter leading-none">
              Projects
            </h2>
          </div>
        </motion.div>

        {/* Top line */}
        <div className="w-full h-px bg-gray-200" />

        {/* Projects */}
        <div className="w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border-b border-gray-200 py-6 md:py-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-[80px_1.2fr_140px_2fr] gap-4 md:gap-6 items-start">
                {/* Number */}
                <div className="text-xs font-mono text-gray-400 pt-1">
                  {project.number}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Category */}
                <div className="pt-1">
                  <span className="text-xs uppercase tracking-[0.18em] text-gray-400">
                    {project.category}
                  </span>
                </div>

                {/* About */}
                <div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
                    {project.about}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;