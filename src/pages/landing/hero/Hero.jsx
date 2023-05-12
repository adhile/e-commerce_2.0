import React from "react";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";

function Hero() {
  return (
    <div className=" container flex   space-x-8 items-center  mx-auto  px-5  ">
      <Sidebar />
      <Slider />
    </div>
  );
}

export default Hero;
