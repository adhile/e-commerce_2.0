import React from "react";

function Sidebar() {
  return (
    <>
      {/* side-bar */}
      <div className=" flex flex-col border-r-4  min-w-[179px] pt-[40px] font-Poppins font-normal text-base  space-y-4">
        <a href="">Woman’s Fashion</a>
        <a href="">Men’s Fashion</a>
        <a href="">Electronics</a>
        <a href="">Home & Lifestyle</a>
        <a href="">Medicine</a>
        <a href="">Sports & Outdoor</a>
        <a href="">Baby’s & Toys</a>
        <a href="">Groceries & Pets</a>
        <a href="">Health & Beauty</a>
      </div>
    </>
  );
}

export default Sidebar;
