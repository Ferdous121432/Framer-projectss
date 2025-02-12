import { ChevronRightIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function ProjectLink({
  children,
  name,
  setSelectedProject,
  isOpen,
}) {
  const handleClick = () => {
    setSelectedProject(null);
    setTimeout(() => {
      console.log("ddd");
      setSelectedProject(name);
    }, 500);
  };

  return (
    <a
      onClick={handleClick}
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100">
      {children}
      <div
        className={`flex overflow-clip place-items-center justify-between w-full ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} `}>
        <p className="text-inherit truncate whitespace-nowrap tracking-wide">
          {name}
        </p>
        <ChevronRightIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8 whitespace-nowrap " />
      </div>
    </a>
  );
}
