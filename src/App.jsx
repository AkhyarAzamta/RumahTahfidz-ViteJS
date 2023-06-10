import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tentang from "./components/Tentang";
import Carousel from "./components/CarouselComponent";
import { motion, useScroll } from "framer-motion"


const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
       <motion.div style={{ scaleX: scrollYProgress }} /> 
      <Navbar />
      <Hero />
      <Tentang />
      <Carousel />
    </div>
  );
};

export default App;
