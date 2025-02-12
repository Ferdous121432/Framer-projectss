import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import About from "./About";

export default function Marquee() {
  const marRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: marRef,
    offset: [0, 1],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["black", "red"]
  );

  return (
    <motion.div
      data-scroll
      data-scroll-speed="1.2"
      ref={marRef}
      // style={{ y, backgroundColor }}
      className="bg-zinc-900 z-10 ">
      <div className="w-full py-10 bg-[#004D43] rounded-t-xl ">
        <div className="border-y-2 border-zinc-300 flex whitespace-nowrap overflow-hidden  ">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="text-[20vw] uppercase leading-none font-bold mb-[.8rem] pr-8    ">
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="text-[20vw] uppercase leading-none font-bold mb-[.8rem] pr-8   ">
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="text-[20vw] uppercase leading-none font-bold mb-[.8rem] ">
            We are ochi
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}
