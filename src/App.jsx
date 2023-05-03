import { useState } from "react";
import Navbar from "./pages/navbar/Navbar";
import Hero from "./pages/landing/hero/Hero"
import Todays from "./pages/landing/todays/Todays";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Todays/>
    </div>
  );
}

export default App;
