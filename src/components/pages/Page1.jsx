import React, { useRef } from "react";
import Nav from "../Ochi/component/Nav";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";

const pageAnimationVariants = {
  initial: {
    opacity: 0,
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
    transition: {
      duration: 1,
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

//Scroll Animation

export default function Page1() {
  const location = useLocation();
  return (
    <motion.div
      variants={pageAnimationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      key={location.pathname}
      className="text-slate-100">
      <Nav />
      <div className="w-screen flex flex-col justify-center items-center ">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </motion.div>
  );
}

const Section1 = () => {
  const sec1Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sec1Ref,
    offset: [0, 1],
  });

  const scrollX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <motion.div
      ref={sec1Ref}
      style={{ x: scrollX, y: scrollY }}
      className="w-full h-[1000px] bg-green-900 flex flex-col justify-center items-center ">
      <h1 className="text-xl  ">Section 1</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        metus auctor, lacinia metus ac, dictum velit. Nullam at purus ac
      </p>
    </motion.div>
  );
};

const Section2 = () => {
  return (
    <div className="w-screen h-screen bg-slate-900 flex flex-col justify-center items-center ">
      <h1 className="text-xl  ">Section 2</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        metus auctor, lacinia metus ac, dictum velit. Nullam at purus ac
      </p>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="w-screen h-screen bg-red-900 flex flex-col justify-center items-center ">
      <h1 className="text-xl  ">Section 3</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        metus auctor, lacinia metus ac, dictum velit. Nullam at purus ac
      </p>
    </div>
  );
};
