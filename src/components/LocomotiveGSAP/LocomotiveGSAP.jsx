import React, { useEffect } from "react";
import Intro from "./Intro";

export default function LocomotiveGSAP() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="flex flex-col gap-5  ">
      <Intro />
      <div className="h-screen w-screen bg-slate-800 "></div>
      <div className="h-screen w-screen bg-slate-800 "></div>
    </main>
  );
}
