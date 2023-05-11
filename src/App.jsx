import { useState } from "react";
import Landing from "./pages/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Register from "./pages/register/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Landing />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
