import React from "react";

export default function Cards() {
  return (
    <div className=" w-full px-20 h-screen bg-slate-100 flex items-center gap-5  ">
      <div className="cardContainer h-[50vh] w-1/2  ">
        <div className="card flex items-center justify-center  rounded-xl w-full h-full bg-[#004D43] ">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="featured project"
            className="w-32  "
          />
        </div>
      </div>
      <div className=" cardContainer flex gap-5 w-1/2 h-[50vh] ">
        <div className="card flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]  ">
          {" "}
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="featured project"
            className="w-32  "
          />
        </div>
        <div className="card flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]  ">
          {" "}
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="featured project"
            className="w-32  "
          />
        </div>
      </div>
    </div>
  );
}
