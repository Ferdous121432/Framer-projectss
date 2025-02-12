import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect } from "react";

const paraVariants = {
  hidden: {
    opacity: 0,
    x: -100,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
      when: "afterSibling  ",
    },
  },
  exit: {
    opacity: 0,
    x: -100,

    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

export default function NavigationLink({ children, name, isOpen }) {
  const paraAnimationControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      paraAnimationControls.start("visible");
    } else {
      paraAnimationControls.start("hidden");
    }
  }, [isOpen, paraAnimationControls]);

  return (
    <div className="relative">
      <a
        href="#"
        className="flex flex-row p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100">
        {children}

        <motion.p
          variants={paraVariants}
          initial="hidden"
          animate={paraAnimationControls}
          //   animate="visible"
          exit="exit"
          className="text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide">
          {name}
        </motion.p>
      </a>
    </div>
  );
}
