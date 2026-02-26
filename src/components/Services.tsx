'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MenuItem {
  link: string;
  text: string;
}

interface FlowingMenuProps {
  items: MenuItem[];
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  animationType?: 'slide' | 'scale' | 'fade';
  title?: string;
  subtitle?: string;
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({
  items,
  textColor = "#000000",
  bgColor = "#ffffff",
  borderColor = "#e5e5e5",
  animationType = 'slide',
  title = "Services",
  subtitle,
}) => {
  return (
    <div 
      id="services"
      className="w-full h-full flex flex-col font-ibm mt-10 sm:mt-14 md:mt-16 lg:mt-20"
      style={{ backgroundColor: bgColor }}
    >
      {/* Services Header - Responsive */}
      <motion.div 
        className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-16 border-b flex flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-4"
        style={{ borderColor: borderColor }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <motion.span 
            className="text-xs sm:text-sm font-medium uppercase tracking-wider mb-1 sm:mb-2 block"
            style={{ color: textColor, opacity: 0.5 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            What I Do
          </motion.span>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter"
            style={{ color: textColor }}
          >
            {title}
          </h2>
        </div>
        
        {subtitle && (
          <motion.p 
            className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md md:text-right"
            style={{ color: textColor, opacity: 0.6 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>

      {/* Menu Items */}
      {items.map((item, index) => (
        <MenuItemComponent 
          key={index} 
          item={item} 
          textColor={textColor}
          borderColor={borderColor}
          index={index}
          animationType={animationType}
        />
      ))}
    </div>
  );
};

interface MenuItemComponentProps {
  item: MenuItem;
  textColor: string;
  borderColor: string;
  index: number;
  animationType: 'slide' | 'scale' | 'fade';
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({ 
  item, 
  textColor, 
  borderColor,
  index,
  animationType,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const bgVariants = {
    slide: {
      initial: { x: "-100%" },
      animate: { x: isHovered ? "0%" : "-100%" },
    },
    scale: {
      initial: { scaleX: 0, originX: 0 },
      animate: { scaleX: isHovered ? 1 : 0 },
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: isHovered ? 1 : 0 },
    },
  };

  return (
    <motion.a
      href={item.link}
      className="relative flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 cursor-pointer overflow-hidden border-b group"
      style={{ borderColor: borderColor }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      // Touch support for mobile
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 1500)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-black z-0"
        initial={bgVariants[animationType].initial}
        animate={bgVariants[animationType].animate}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Left side - Index & Text */}
      <div className="relative z-10 flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {/* Index Number - Hidden on very small screens */}
        <motion.span
          className="hidden xs:block text-xs sm:text-sm font-mono opacity-40"
          animate={{ color: isHovered ? "#ffffff" : textColor }}
          transition={{ duration: 0.3 }}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>

        {/* Menu Text */}
        <motion.span
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium tracking-tighter font-ibm"
          animate={{ 
            color: isHovered ? "#ffffff" : textColor,
            x: isHovered ? 10 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {item.text}
        </motion.span>
      </div>

      {/* Right side - Two Circles */}
      <div className="relative z-10 flex items-center gap-2 sm:gap-3">
        {[0, 1].map((circleIndex) => (
          <motion.div
            key={circleIndex}
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full border-[1.5px] sm:border-2"
            animate={{
              borderColor: isHovered ? "#ffffff" : textColor,
              backgroundColor: isHovered ? "#ffffff" : "transparent",
              scale: isHovered ? 1.3 : 1,
              rotate: isHovered ? 180 : 0,
            }}
            transition={{ 
              duration: 0.4, 
              delay: circleIndex * 0.08,
              ease: [0.22, 1, 0.36, 1] 
            }}
          />
        ))}
      </div>

      {/* Arrow on hover - Hidden on small screens */}
      <motion.div
        className="absolute right-16 sm:right-20 md:right-24 z-10 hidden sm:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          x: isHovered ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.span 
          className="text-white text-xl sm:text-2xl"
          animate={{ x: isHovered ? [0, 5, 0] : 0 }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          →
        </motion.span>
      </motion.div>
    </motion.a>
  );
};

export default FlowingMenu;