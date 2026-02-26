"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.3"],
  });

  const text =
    "Frontend Engineer building scalable web apps with React, Next.js, and TypeScript. I architect clean, component-driven solutions using the MERN stack, Firebase, and Supabase. Feature-based. Design-driven. Built to scale.";

  const words = text.split(" ");

  return (
    <div 
      id="about" 
      className="w-full h-auto flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40"
    >
      <div
        ref={containerRef}
        className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:w-[50vw] h-auto flex flex-col items-start gap-8 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 justify-between tracking-tighter font-ibm"
      >
        {/* Animated Text */}
        <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-regular leading-relaxed sm:leading-relaxed md:leading-relaxed flex flex-wrap gap-x-1.5 sm:gap-x-2 gap-y-0.5 sm:gap-y-1">
          {words.map((word, index) => {
            const start = index / words.length;
            const end = (index + 1) / words.length;

            return (
              <Word
                key={index}
                word={word}
                range={[start, end]}
                progress={scrollYProgress}
              />
            );
          })}
        </h1>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-black/70">
          <a 
            href="https://cal.com/hassan-iftikhar" 
            className="group transition-colors duration-200 text-base sm:text-lg flex items-center gap-2 hover:text-black hover:cursor-pointer"
          >
            Book A Call
            <ArrowUpRight 
              size={18} 
              className="text-red-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/mHassan-Iftikhar/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-colors duration-200 text-base sm:text-lg flex items-center gap-2 hover:text-black hover:cursor-pointer"
          >
            LinkedIn
            <ArrowUpRight 
              size={18} 
              className="text-red-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
            />
          </a>
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  word: string;
  range: [number, number];
  progress: any;
}

const Word = ({ word, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, [
    "rgba(0, 0, 0, 0.3)",
    "rgba(0, 0, 0, 0.8)",
  ]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="transition-colors duration-100"
    >
      {word}
    </motion.span>
  );
};

export default About;