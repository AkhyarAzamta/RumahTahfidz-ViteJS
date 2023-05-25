import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <div className="h-64 bg-gray-100">Content</div> */}
    </div>
  );
};

export default App;
