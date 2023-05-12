import React from "react";
import { BsChevronDown } from "react-icons/bs";
function AddressNav() {
  return (
    <div>
      <section
        id="addressNav"
        className=" mx-auto flex items-center h-[48px]   bg-black  "
      >
        {/* flex-cintainer */}
        <div className="container flex mx-auto  justify-between items-center pl-64 ">
          {/* left-add-shopNow */}
          <div className="flex items-center  space-x-4 text-white ">
            <p className="font-Poppins font-normal text-sm">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <a className="underline text-sm  font-Poppins font-medium" href="#">
              Shop Now
            </a>
          </div>
          {/* right-language */}
          <div className="flex items-center space-x-2 font-Poppins font-normal text-sm   text-white pr-24 ">
            <p>English</p>
            <BsChevronDown className="cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddressNav;
