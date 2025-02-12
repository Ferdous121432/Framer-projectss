import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { del, svg } from "framer-motion/client";
import React, { useEffect } from "react";
import NavigationLink from "./NavigationLink";
import {
  ChartBarIcon,
  ChartPieIcon,
  DocumentCheckIcon,
  Square2StackIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import ProjectLink from "./ProjectLink";
import ProjectNavigation from "./ProjectNavigation";

const containerVariants = {
  hidden: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  visible: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  hidden: {
    rotate: 0,
    transition: {
      type: "spring",
      damping: 15,
      duration: 2,
    },
  },
  visible: {
    rotate: 180,
    transition: {
      type: "spring",
      damping: 15,
      duration: 2,
    },
  },
};

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();
  const [selectedProject, setSelectedProject] = React.useState(null);

  useEffect(() => {
    if (isOpen) {
      containerControls.start("visible");
      svgControls.start("visible");
    } else {
      containerControls.start("hidden");
      svgControls.start("hidden");
    }
  }, [isOpen, containerControls]);

  const handleOpenClose = () => {
    console.log("ee");
    setIsOpen(!isOpen);
    setSelectedProject(null);
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate={containerControls}
        className="bg-neutral-900 flex flex-col z-20 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600">
        <div className="flex flex-row w-full justify-between place-items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full" />
          <motion.button
            onClick={handleOpenClose}
            className="p-1 z-80 rounded-full flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 w-8 h-8 ">
              <motion.path
                variants={svgVariants}
                initial="hidden"
                animate={svgControls}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.button>
        </div>
        <div className="flex flex-col gap-4 ">
          <NavigationLink isOpen={isOpen} name="Dashboard">
            <ChartBarIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink isOpen={isOpen} name="Projects">
            <Square2StackIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink isOpen={isOpen} name="Tasks">
            <DocumentCheckIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink isOpen={isOpen} name="Reporting">
            <ChartPieIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink isOpen={isOpen} name="Users">
            <UsersIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
        </div>
        <div className="flex flex-col gap-3">
          <ProjectLink
            isOpen={isOpen}
            name="Virtual Reality"
            setSelectedProject={setSelectedProject}>
            <div className="min-w-4 mx-2 border-pink-600 border rounded-full aspect-square bg-pink-700" />
          </ProjectLink>
          <ProjectLink
            isOpen={isOpen}
            name="Apple Vision Pro"
            setSelectedProject={setSelectedProject}>
            <div className="min-w-4 mx-2 border-indigo-600 border rounded-full aspect-square bg-indigo-700" />
          </ProjectLink>
          <ProjectLink
            isOpen={isOpen}
            name="Porsche"
            setSelectedProject={setSelectedProject}>
            <div className="min-w-4 mx-2 border-cyan-600 border rounded-full aspect-square bg-cyan-700" />
          </ProjectLink>
          <ProjectLink
            isOpen={isOpen}
            name="Secret Project"
            setSelectedProject={setSelectedProject}>
            <div className="min-w-4 mx-2 border-yellow-600 border rounded-full aspect-square bg-yellow-700" />
          </ProjectLink>
        </div>
      </motion.nav>
      <AnimatePresence>
        {selectedProject && (
          <ProjectNavigation
            isOpen={isOpen}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}
      </AnimatePresence>
    </>
  );
}
