import React from "react";

export default function Intro() {
  return (
    <div className="flex justify-center relative mt-[35vh]">
      <div className="image-container w-full h-[140vh] absolute filter brightness-60">
        <img style={{ objectFit: "cover" }} src="./public/1.jpg" alt="1" />
      </div>
    </div>
  );
}
