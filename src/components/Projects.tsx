"use client";

import { motion } from "framer-motion";

interface Project {
  id: number;
  number: string;
  title: string;
  category: string;
  about: string;
}

const projects: Project[] = [
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
      "A professional trading portfolio website created to present the client's profile, experience, and portfolio content in a clear and modern way.",
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

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-5 flex items-center text-red-500 gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-500">
              Selected Work
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-medium tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Projects
          </h2>
        </motion.div>

        {/* ── Project List ── */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="group relative border-b border-neutral-100 py-8 first:border-t md:py-10"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-12">
                {/* Number */}
                <span className="shrink-0 font-mono text-sm font-medium tabular-nums text-neutral-300 transition-colors duration-300 group-hover:text-neutral-900 md:mt-1 md:w-10">
                  {project.number}
                </span>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <div className="space-y-2">
                    {/* Title */}
                    <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-neutral-700 sm:text-3xl">
                      {project.title}
                    </h3>

                    {/* Category Badge */}
                    <span className="inline-block rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-500 transition-colors duration-300 group-hover:border-neutral-300 group-hover:bg-white group-hover:text-neutral-700">
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="max-w-lg text-[15px] leading-relaxed text-neutral-500 transition-colors duration-300 group-hover:text-neutral-700 sm:text-base">
                    {project.about}
                  </p>
                </div>

                {/* Subtle arrow indicator on hover */}
                <span className="hidden shrink-0 self-center text-neutral-300 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-neutral-400 md:inline-block">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
