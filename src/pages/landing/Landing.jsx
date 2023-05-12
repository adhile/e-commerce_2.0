import React from "react";

import Hero from "./hero/Hero"
import Todays from "./todays/Todays"
import Category from "./category/Category"
import Products from "./products/Products"
import Prefooter from "./Prefooter"


function Landing() {
  return (
    <div className="min-w-screen">
      <Hero />
      <Todays />
      <Category />
      <Products />
      <Prefooter />
    </div>
  );
}

export default Landing;
