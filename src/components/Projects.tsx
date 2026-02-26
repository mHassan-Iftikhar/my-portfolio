
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, User } from 'lucide-react';

interface ClientReview {
  name: string;
  image: string;
  response: string;
}

interface ProductDetails {
  description: string;
  role: 'Owner' | 'Co-Founder' | 'Collaborator' | 'Lead Developer' | 'Frontend Lead' | 'Founder';
  year: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  number: string;
  technologies: string[];
  type: 'client' | 'personal';
  clientReview?: ClientReview;
  productDetails?: ProductDetails;
}

const projects: Project[] = [
  { 
    id: 1, 
    title: "PowerSell", 
    category: "Web Development", 
    number: "01",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node JS", "PostgreSQL"],
    type: 'client',
    clientReview: {
      name: "Cj Tassone",
      image: "/images/client-images/cj-tassone.webp",
      response: "You guys are the best! I couldn't have asked for a better team to get my work done. You were incredibly cooperative, helpful and made the entire process extremely easy.",
    }
  },
  { 
    id: 2, 
    title: "Onvyo", 
    category: "Web Development", 
    number: "02",
    technologies: ["React", "Node.js", "Supabase", "Tailwind", "Framer Motion"],
    type: 'personal',
    productDetails: {
      description: "A comprehensive web platform built from scratch. Led the entire frontend architecture and implemented core features.",
      role: "Co-Founder",
      year: "2024"
    }
  },
  { 
    id: 3, 
    title: "Rao Umer", 
    category: "Web Development", 
    number: "03",
    technologies: ["Next.js", "Tailwind CSS"],
    type: 'client',
    clientReview: {
      name: "Rao Umer",
      image: "/images/client-images/rao-umer.webp",
      response: "Our software was delivered on time and exceeded every expectation. The co-founders stayed involved throughout the process, ensuring top quality.",
    }
  },
  { 
    id: 4, 
    title: "BuySell Liberia", 
    category: "Web App", 
    number: "04",
    technologies: ["React", "Firebase"],
    type: 'client',
    clientReview: {
      name: "Emily Davis",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      response: "Transformed our vision into reality perfectly. Great communication throughout.",
    }
  },
  { 
    id: 5, 
    title: "Foundroo", 
    category: "Full Stack", 
    number: "05",
    technologies: ["Next.js", "PostgreSQL", "AWS"],
    type: 'personal',
    productDetails: {
      description: "Full-stack SaaS platform built as a co-founder. Responsible for frontend development and system architecture.",
      role: "Co-Founder",
      year: "2025"
    }
  },
  { 
    id: 6, 
    title: "Foundroo", 
    category: "SaaS", 
    number: "06",
    technologies: ["React", "Node.js", "Stripe", "AWS"],
    type: 'personal',
    productDetails: {
      description: "Scalable SaaS solution with payment integration. Led the frontend team and collaborated on backend architecture.",
      role: "Founder",
      year: "2026"
    }
  },
];

const rowConfigs = [
  { widths: [8, 4], projectIndices: [0, 1] },
  { widths: [7, 5], projectIndices: [2, 3] },
  { widths: [4, 8], projectIndices: [4, 5] },
];

// Circular Text Component - Responsive
const CircularText = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-20"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative cursor-pointer"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      >
        <motion.svg
          viewBox="0 0 200 200"
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-56 xl:h-56"
          animate={{ rotate: 360 }}
          transition={{
            duration: isHovered ? 15 : 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              fill="none"
            />
          </defs>
          
          <text className="text-[11px] sm:text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em]">
            <textPath href="#circlePath" startOffset="0%">
              <tspan fill="#ef4444">PASSION</tspan>
              <tspan fill="#000000"> • </tspan>
              <tspan fill="#000000">CREATIVITY</tspan>
              <tspan fill="#ef4444"> • </tspan>
              <tspan fill="#ef4444">INNOVATION</tspan>
              <tspan fill="#000000"> • </tspan>
              <tspan fill="#000000">EXCELLENCE</tspan>
              <tspan fill="#ef4444"> • </tspan>
            </textPath>
          </text>
        </motion.svg>

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full border-2 border-gray-300"
          animate={{
            borderColor: isHovered ? "#ef4444" : "#d1d5db",
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

// Quote Text Component - Responsive
const QuoteText = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-20 p-4 sm:p-5 md:p-6">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-tight text-center leading-relaxed">
        <span className="text-red-500">"</span>
        If it makes your developers curious and your competitors nervous
        <span className="text-red-500">,</span>
        {" "}I'm in
        <span className="text-red-500">.</span>
        <span className="text-red-500">"</span>
      </p>
    </div>
  );
};

const Projects = () => {
  return (
    <div id='projects' className="w-full font-ibm bg-white">
      {/* Header - Responsive */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 border-y border-gray-300">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter">
          Projects
        </h2>
      </div>

      {/* Rows */}
      <div className="w-full">
        {rowConfigs.map((row, rowIndex) => (
          <Row 
            key={rowIndex}
            row={row}
            rowIndex={rowIndex}
            isLastRow={rowIndex === rowConfigs.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

interface RowProps {
  row: { widths: number[]; projectIndices: number[] };
  rowIndex: number;
  isLastRow: boolean;
}

const Row: React.FC<RowProps> = ({ row, rowIndex, isLastRow }) => {
  return (
    <div className="flex flex-col md:flex-row w-full border-b border-gray-300 last:border-b-0 md:last:border-b">
      {row.projectIndices.map((projectIndex, colIndex) => {
        const widthPercent = (row.widths[colIndex] / 12) * 100;
        
        return (
          <ProjectCard
            key={projects[projectIndex].id}
            project={projects[projectIndex]}
            widthPercent={widthPercent}
            index={projectIndex}
            showRightBorder={colIndex === 0}
            showCircularText={projectIndex === 4}
            showQuoteText={projectIndex === 3}
            isLastInRow={colIndex === row.projectIndices.length - 1}
          />
        );
      })}
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  widthPercent: number;
  index: number;
  showRightBorder: boolean;
  showCircularText?: boolean;
  showQuoteText?: boolean;
  isLastInRow?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  widthPercent, 
  index,
  showRightBorder,
  showCircularText = false,
  showQuoteText = false,
  isLastInRow = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isCircularTextBox = showCircularText;
  const isQuoteBox = showQuoteText;
  const isSpecialBox = isCircularTextBox || isQuoteBox;

  return (
    <motion.div
      className={`
        h-[65vw] xs:h-[55vw] sm:h-[45vw] md:h-[22vw] lg:h-[18vw] xl:h-[16vw] 
        overflow-hidden relative
        w-full
        ${showRightBorder ? 'md:border-r border-gray-300' : ''}
        ${isSpecialBox ? 'cursor-default' : 'cursor-pointer'}
        ${!isLastInRow ? 'border-b md:border-b-0 border-gray-300' : ''}
      `}
      style={{ 
        // Only apply width percentages on md screens and above
        flex: undefined,
      }}
      // Use CSS custom property for responsive width
      data-width={widthPercent}
      onHoverStart={() => !isSpecialBox && setIsHovered(true)}
      onHoverEnd={() => !isSpecialBox && setIsHovered(false)}
      onTouchStart={() => !isSpecialBox && setIsHovered(true)}
      onTouchEnd={() => !isSpecialBox && setTimeout(() => setIsHovered(false), 2000)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {/* Responsive width wrapper - only applies on md+ */}
      <style jsx>{`
        @media (min-width: 768px) {
          [data-width="${widthPercent}"] {
            flex: 0 0 ${widthPercent}%;
            max-width: ${widthPercent}%;
          }
        }
      `}</style>

      {/* Background */}
      {!isSpecialBox && (
        <motion.div
          className="absolute inset-0 bg-black z-0"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        />
      )}

      {/* Circular Text */}
      {showCircularText && <CircularText />}

      {/* Quote Text */}
      {showQuoteText && <QuoteText />}

      {/* Content */}
      {!isSpecialBox && (
        <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col justify-between">
          {/* Top Section */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <motion.span
                className="text-[10px] sm:text-xs font-medium uppercase tracking-wider"
                animate={{ color: isHovered ? "#ffffff" : "#666666" }}
                transition={{ duration: 0.3 }}
              >
                {project.category}
              </motion.span>
              
              <motion.h3
                className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight"
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : -10,
                  color: "#ffffff"
                }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
            </div>

            <motion.div
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center shrink-0"
              animate={{
                borderColor: isHovered ? "#ffffff" : "#d1d5db",
                backgroundColor: isHovered ? "#ffffff" : "transparent",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight size={16} className="sm:w-4.5 sm:h-4.5 text-black" />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="relative">
            {/* Default State - Technologies */}
            <motion.div
              className="flex flex-col gap-2 sm:gap-3"
              animate={{ 
                opacity: isHovered ? 0 : 1,
                y: isHovered ? 20 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="text-[10px] sm:text-xs font-mono block"
                animate={{ color: isHovered ? "#888888" : "#999999" }}
                transition={{ duration: 0.3 }}
              >
                {project.number}
              </motion.span>
              <motion.h3
                className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight"
                animate={{ color: isHovered ? "#ffffff" : "#000000" }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1 sm:mt-2">
                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium border border-black/50 rounded-none text-black"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-black/50">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </motion.div>

            {/* Hover State - Client Review OR Product Details */}
            <motion.div
              className="absolute bottom-0 left-0 right-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 20,
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {/* Client Review */}
              {project.type === 'client' && project.clientReview && (
                <>
                  <div className="mb-1.5 sm:mb-2">
                    <span className="text-red-500 text-2xl sm:text-3xl font-serif leading-none">"</span>
                  </div>
                  
                  <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2 mb-2 sm:mb-3">
                    {project.clientReview.response}
                  </p>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={project.clientReview.image}
                      alt={project.clientReview.name}
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full object-cover ring-2 ring-white/20"
                    />
                    <div className="flex flex-col">
                      <span className="text-white text-xs sm:text-sm font-medium">
                        {project.clientReview.name}
                      </span>
                      <span className="text-white/50 text-[10px] sm:text-xs">
                        Client
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* Product Details */}
              {project.type === 'personal' && project.productDetails && (
                <>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold bg-red-500 text-white rounded-none">
                      {project.productDetails.role}
                    </span>
                    <span className="text-white/50 text-[10px] sm:text-xs">
                      {project.productDetails.year}
                    </span>
                  </div>
                  
                  <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2 mb-2 sm:mb-3">
                    {project.productDetails.description}
                  </p>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center ring-2 ring-white/20">
                      <User size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs sm:text-sm font-medium">
                        Personal Project
                      </span>
                      <span className="text-white/50 text-[10px] sm:text-xs">
                        {project.productDetails.role}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;