import React from "react";
import Nav from "./Nav";

export default function ({ children }) {
  return (
    <div>
      <Nav />
      <div>{children}</div>
    </div>
  );
}
