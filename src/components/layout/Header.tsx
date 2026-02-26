'use client'

import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"
import { motion, AnimatePresence } from "framer-motion"

const menuItems = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "services", href: "#services" },
];

const menuVariants = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: {
    y: -40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

const bottomVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    (async function () {
      await getCalApi({ namespace: "30min" });
    })();
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Smooth scroll function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close menu first
    setMenuOpen(false);
    
    // Wait for menu to close, then scroll
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else if (href === '#home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }, 300);
  };

  return (
    <>
      {/* Header Bar */}
      <div className="w-full h-auto items-end flex justify-between p-3 sm:p-4 md:p-5 lg:p-6 font-ibm">
        <div className="w-full flex justify-end items-center gap-3 sm:gap-4 md:gap-6">
          {/* Book a Call Button - Hidden on small mobile, visible from sm */}
          <button
            className="hidden sm:block px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl font-medium text-xs sm:text-sm bg-black/95 text-white tracking-wide hover:cursor-pointer hover:bg-black transition-colors"
            data-cal-namespace="30min"
            data-cal-link="hassan-iftikhar/30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            BOOK A CALL
          </button>
          
          {/* Menu Toggle Button */}
          <button
            className="hover:cursor-pointer z-50 relative p-1"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X size={28} className="sm:w-8 sm:h-8" />
            ) : (
              <Menu size={28} className="sm:w-8 sm:h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            className="fixed left-0 top-0 w-full h-screen bg-white z-40 flex flex-col justify-start items-start px-4 sm:px-6 md:px-8 lg:px-10 overflow-y-auto"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Navigation Links */}
            <nav className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-ibm font-medium w-full pt-20 sm:pt-24 md:pt-28 lg:pt-30">
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={itemVariants}
                  className="transition-colors duration-200 hover:text-black text-gray-500 first:text-black capitalize"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom Section - Mobile Layout */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-10 border-t border-gray-100 bg-white md:border-t-0 md:bg-transparent"
              variants={bottomVariants}
            >
              {/* Mobile & Tablet Layout */}
              <div className="flex flex-col gap-4 md:hidden">
                {/* Tagline */}
                <p className="text-xs sm:text-sm text-gray-400">
                  Proud builder of things that actually work.
                </p>
                
                {/* Book a Call Button - Mobile */}
                <button
                  className="w-full sm:w-auto px-4 py-3 rounded-xl font-medium text-sm bg-black/95 text-white tracking-wide hover:cursor-pointer hover:bg-black transition-colors"
                  data-cal-namespace="30min"
                  data-cal-link="hassan-iftikhar/30min"
                  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                >
                  BOOK A CALL
                </button>
                
                {/* Social Links */}
                <div className="flex items-center gap-4 text-sm">
                  <a 
                    href="https://www.linkedin.com/in/mHassan-Iftikhar/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-black"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://www.instagram.com/haxannnnn.__/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-black"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex md:items-center md:justify-between">
                {/* Tagline - Left */}
                <p className="text-xs lg:text-sm text-gray-400">
                  Proud builder of things that actually work.
                </p>
                
                {/* Right Side - Button & Links */}
                <div className="flex items-center gap-4 lg:gap-6">
                  <button
                    className="px-4 py-3 lg:px-5 lg:py-4 rounded-xl lg:rounded-2xl font-medium text-sm bg-black/95 text-white tracking-wide hover:cursor-pointer hover:bg-black transition-colors"
                    data-cal-namespace="30min"
                    data-cal-link="hassan-iftikhar/30min"
                    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                  >
                    BOOK A CALL
                  </button>
                  <a 
                    href="https://www.linkedin.com/in/mHassan-Iftikhar/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-black text-sm"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://www.instagram.com/haxannnnn.__/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-black text-sm"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header