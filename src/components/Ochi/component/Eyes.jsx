import React, { useEffect, useState } from "react";

export default function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      let deltaX = x - window.innerWidth / 2;
      let deltaY = y - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);
  return (
    <div className="eyes w-full h-screen ">
      <div
        data-scroll
        // data-scroll-speed="-.7"
        className="relative w-full min-h-full bg-[url('./public/1.jpg')] bg-center">
        <div className="absolute bg-slate-800 transform-middle flex gap-10">
          <div className="relative w-[15vw] h-[15vw] rounded-full bg-slate-100">
            <div className="items-center justify-center flex w-2/3 h-2/3 rounded-full bg-slate-900 transform-middle">
              <div
                style={{
                  transform: ` rotate(${rotate}deg)`,
                }}
                className="absolute line w-full h-4 items-center flex justify-start">
                <div className="w-[1rem] h-[1rem] rounded-full bg-slate-100 mx-1"></div>
              </div>
            </div>
          </div>
          <div className="relative w-[15vw] h-[15vw] rounded-full bg-slate-100">
            <div className="items-center justify-center flex w-2/3 h-2/3 rounded-full bg-slate-900 transform-middle">
              <div
                style={{
                  transform: ` rotate(${rotate}deg)`,
                }}
                className="absolute line w-full h-4 items-center flex justify-start">
                <div className="w-[1rem] h-[1rem] rounded-full bg-slate-100 mx-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
