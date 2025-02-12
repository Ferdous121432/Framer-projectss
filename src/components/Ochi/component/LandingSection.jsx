import React, { useRef } from "react";
import Layout from "./Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { use } from "framer-motion/client";
import { useLocation } from "react-router-dom";

const pageAnimationVariants = {
  initial: {
    opacity: 0,
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
    transition: {
      duration: 4,
    },
  },
  animate: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      duration: 1,
    },
  },
  exit: {
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
    transition: {
      duration: 1,
    },
  },
};

export default function LandingSection() {
  const leadingHeader = ["We Create", "Eye-opening", "Experiences"];
  const leadingFooter = [
    "For public and private companies",
    "From the first pitch to IPO",
  ];

  // Scroll Animation
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: [0, 1],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["black", "red"]
  );

  const location = useLocation();
  console.log(location.pathname);

  return (
    <motion.section
      data-scroll
      data-scroll-section
      data-scroll-speed=".01"
      variants={pageAnimationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      key={location.pathname}
      id="home"
      ref={heroRef}
      style={{
        y,
      }}
      className="h-[99vh] w-full bg-zinc-900 border-t-4  ">
      <div className="textstructure mt-40 px-20 leading-[1rem] mb-[6rem] ">
        {leadingHeader.map((text, index) => (
          <div className="masker flex items-center gap-2" key={index}>
            {index === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "12vw" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-[12vw] h-[8vw] bg-red-600 items-center rounded-sm mt-[1vw] "></motion.div>
            )}
            <h1 className=" leading-[10vw] font-semibold uppercase text-[10vw] ">
              {text}
            </h1>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 flex justify-between items-center py-5 px-20  ">
        {leadingFooter.map((item, index) => (
          <p
            className="text-md font-light tracking-tight leading-none "
            key={index}>
            {item}
          </p>
        ))}
        <div>
          <div className="uppercase text-md font-light tracking-tight leading-none py-2 px-4 border-[1px] border-zinc-800 rounded-full ">
            start the project
          </div>
        </div>
      </div>
    </motion.section>
  );
}
