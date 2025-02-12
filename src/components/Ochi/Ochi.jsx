import React from "react";
import About from "./component/About";
import Cards from "./component/Cards";
import Eyes from "./component/Eyes";
import Featured from "./component/Featured";
import Footer from "./component/Footer";
import LandingSection from "./component/LandingSection";
import Marquee from "./component/Marquee";
import Nav from "./component/Nav";

import Navigation from "../Navigation/Navigation";
import { motion } from "framer-motion";

export default function Ochi() {
  return (
    <div className="w-full  h-screen bg-zinc-900 text-white">
      <Nav />
      {/* <Navigation /> */}
      <motion.div
        style={{
          height: `calc(
    1500px + 100vh
    
    )`,
        }}>
        <LandingSection />
        <Marquee />
        <About />
      </motion.div>
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}
