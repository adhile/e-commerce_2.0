import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function Brand() {
  return (
    <div>
      <section id="brand-nav" className=" border-b-2 h-[94px]  ">
        {/* flex-container */}
        <div className=" container flex mx-auto pt-[36px]  justify-between px-6 items-center ">
          {/* left-brand-links */}
          <div className="flex items-center space-x-24 ">
            {/* brand */}
            <div className="w-[118px] h-[24px]">
              <img src="../../../public/img/Logo.svg" alt="" />
            </div>
            {/* links */}
            <div className="flex w-[367px] h-[24px] font-Poppins text-base font-normal items-center space-x-12">
              <a className="hover:underline underline-offset-8  " href="#">
                Home
              </a>
              <a className="hover:underline underline-offset-8 " href="#">
                Contact
              </a>
              <a className="hover:underline underline-offset-8 " href="#">
                About
              </a>
              <a className="hover:underline underline-offset-8 " href="#">
                SignUp
              </a>
            </div>
          </div>
          {/* right-search-cart */}
          <div className="flex items-center space-x-4 ">
            {/* search */}
            <div className="relative w-[243px] h-[38px] px-4 bg-lightGray flex items-center rounded-md  ">
              <input
                className="w-full h-full focus:outline-none bg-lightGray"
                type="text"
                name=""
                id=""
                placeholder="What are you looking for?"
              />
              <RiSearch2Line
                className="absolute right-2 text-gray-600"
                size={24}
              />
            </div>
            {/* heart-cart */}
            <AiOutlineHeart size={32} />
            <AiOutlineShoppingCart size={32} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Brand;
