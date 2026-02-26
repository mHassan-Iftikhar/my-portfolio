"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-0 py-12 sm:py-16 md:py-20"
    >
      <div className="w-full max-w-7xl lg:w-[70vw] flex flex-col items-start justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-100 tracking-tighter font-ibm">
        {/* Profile Section */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          {/* Profile Image */}
          <div className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 overflow-hidden shrink-0">
            <Image
              src="/images/haxan.jpg"
              alt="Hassan Iftikhar"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="flex flex-col">
            <p className="text-sm sm:text-base md:text-md lg:text-lg">
              Hassan Iftikhar <span className="text-red-500">|</span>
            </p>
            <p className="text-sm sm:text-base md:text-md lg:text-lg text-gray-600">
              Frontend Engineer
            </p>
          </div>
        </div>

        {/* Hero Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
          Frontend Engineer Specializing
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          in Modern Web Applications
          <span className="text-red-500">.</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
