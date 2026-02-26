"use client";

import React, { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Linkedin,
  Instagram,
  Github,
  Twitter,
} from "lucide-react";

const Footer = () => {
  useEffect(() => {
    (async function () {
      await getCalApi({ namespace: "30min" });
    })();
  }, []);
  
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mHassan-Iftikhar/",
      label: "Li",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/haxannnnn.__/",
      label: "Ig",
    },
    { 
      icon: Github, 
      href: "https://github.com/mhassan-iftikhar", 
      label: "Gh" 
    },
    { 
      icon: Twitter, 
      href: "#", 
      label: "X" 
    },
  ];

  return (
    <footer className="w-full bg-white text-black font-ibm mt-16 sm:mt-20 md:mt-28 lg:mt-32 xl:mt-40 overflow-hidden">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-300">
        {/* Left - Big CTA */}
        <div className="p-6 sm:p-8 md:p-12 lg:p-14 xl:p-16 border-b md:border-b-0 md:border-r border-gray-300">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red-500 text-xs sm:text-sm font-medium uppercase tracking-wider mb-4 sm:mb-5 md:mb-6 block">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter leading-tight mb-6 sm:mb-7 md:mb-8">
              Let's create something amazing together
              <span className="text-red-500">.</span>
            </h2>

            <BookCallButton />
          </motion.div>
        </div>

        {/* Right - Links & Info */}
        <div className="flex flex-col overflow-hidden">
          {/* Social Links Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-gray-300">
            {socialLinks.map((social, index) => (
              <SocialBlock
                key={social.label}
                icon={social.icon}
                href={social.href}
                label={social.label}
                index={index}
                total={socialLinks.length}
              />
            ))}
          </div>

          {/* Email - Fixed hover animation */}
          <motion.a
            href="mailto:hassaniftikharco@email.com"
            className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 group hover:bg-gray-50 transition-colors border-b border-gray-300 overflow-hidden"
          >
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider block mb-1 sm:mb-2">
                Email
              </span>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black break-all sm:break-normal">
                hassaniftikharco@email.com
              </span>
            </motion.div>
            <ArrowUpRight
              size={20}
              className="sm:w-6 sm:h-6 text-gray-400 group-hover:text-red-500 transition-colors flex-shrink-0"
            />
          </motion.a>

          {/* Location */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider block mb-1 sm:mb-2">
              Location
            </span>
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black">
              Lahore / Pakistan
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-4 sm:py-5 md:py-6 border-t border-gray-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <p className="text-gray-500 text-xs sm:text-sm">
          © {currentYear} Hassan Iftikhar<span className="text-red-500">.</span>
        </p>
        <p className="text-gray-500 text-xs sm:text-sm">
          Designed & Built with <span className="text-red-500">♥</span>
        </p>
      </div>
    </footer>
  );
};

// Book a Call Button
const BookCallButton = () => {
  return (
    <motion.button
      className="px-4 py-3 sm:px-5 sm:py-3.5 md:py-4 rounded-xl md:rounded-2xl font-medium text-xs sm:text-sm bg-black/95 text-white tracking-wide hover:bg-black transition-colors"
      data-cal-namespace="30min"
      data-cal-link="hassan-iftikhar/30min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      BOOK A CALL
    </motion.button>
  );
};

// Social Block Component
interface SocialBlockProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  label: string;
  index: number;
  total: number;
}

const SocialBlock: React.FC<SocialBlockProps> = ({
  icon: Icon,
  href,
  label,
  index,
  total,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        p-5 sm:p-6 md:p-7 lg:p-8 
        flex flex-col items-center justify-center gap-2 sm:gap-3 
        hover:bg-gray-50 transition-colors
        border-r border-gray-300 last:border-r-0
        nth-2:border-r-0 sm:nth-2:border-r
        sm:nth-4:border-r-0
      `}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 1000)}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.2 : 1,
          color: isHovered ? "#ef4444" : "#000000",
        }}
        transition={{ duration: 0.2 }}
      >
        <Icon size={20} className="sm:w-6 sm:h-6" />
      </motion.div>
      <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">
        {label}
      </span>
    </motion.a>
  );
};

export default Footer;