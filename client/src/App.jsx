import { useState } from "react";
import Landing from "./pages/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Wishlist from "./pages/wishlist/Wishlist";
import WishlistContextProvider from "./context/WishlistContextProvider";
function App() {
  return (
    <div>
      <WishlistContextProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/home" element={<Landing />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </WishlistContextProvider>
    </div>
  );
}

export default App;
