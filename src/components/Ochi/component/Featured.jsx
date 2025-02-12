import React from "react";

export default function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-slate-800 pb-20 ">
        <h1 className="text-7xl tracking-tight">Featured projects</h1>
      </div>
      <div className="px-20  ">
        <div className="cards w-full flex gap-4 mt-10 ">
          <div className=" "></div>
          <div className=" relative cardContainer w-1/2 h-[80vh] bg-slate-800  ">
            <h1 className="absolute tracking-tight text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 leading-none text-[5rem]  ">
              {"VISE".split("").map((letter, index) => (
                <span key={index} className="">
                  {letter}
                </span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl bg-green-600  ">
              <img
                className="w-full h-full bg-cover rounded-xl"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt="featured project"
              />
            </div>
          </div>
          <div className=" relative cardContainer w-1/2 h-[80vh] bg-slate-800  ">
            <h1 className="absolute tracking-tight text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 leading-none text-[5rem]  ">
              {"FYDE".split("").map((letter, index) => (
                <span key={index} className="">
                  {letter}
                </span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl bg-green-600  ">
              <img
                className="w-full h-full bg-cover rounded-xl"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt="featured project"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
