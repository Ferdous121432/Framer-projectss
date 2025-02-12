import { useGSAP } from "@gsap/react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import gsap from "gsap";
import React, { useRef } from "react";

import LocomotiveScroll from "locomotive-scroll";

import Ochi from "./components/Ochi/Ochi";
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import { AnimatePresence } from "framer-motion";
import { clipPath } from "framer-motion/client";
import SmoothScrollParalax from "./components/SmoothScrollLenis/SmoothScrollParalax";
import LocomotiveGSAP from "./components/LocomotiveGSAP/LocomotiveGSAP";

export default function App() {
  const circle = useRef(null);

  const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Ochi />} />
        <Route path="1" element={<Page1 />} />
        <Route path="2" element={<Page2 />} />
        <Route path="paralux-scroll" element={<SmoothScrollParalax />} />
        <Route path="locomotive-gsap" element={<LocomotiveGSAP />} />
      </Routes>
    </AnimatePresence>
  );
}
