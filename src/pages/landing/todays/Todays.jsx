import React, { useState, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import CountDownTimer from "./components/CountDownTimer";
import Card from "./components/Card";
import { cards } from "../../../data/cards";
function Todays() {
  return (
    <div>
      <section id="todays">
        {/* flex-container */}
        <div className="flex flex-col container mx-auto p-2 space-y-4 mt-[140px] border-2 border-red-500">
          {/* title */}
          <div className="flex items-center justify-start space-x-2 w-full h-10 ">
            <div className=" w-[20px] bg-brickRed h-full rounded-md"></div>
            <h3 className="text-brickRed">Today's</h3>
          </div>
          {/* flesh-sale */}
          <div className="flex items-center justify-between  ">
            {/* sale-timer */}
            <div className="flex items-center space-x-12 ">
              <h1 className="font-Inter font-medium text-4xl">Flash Sales</h1>
              <div >
                <CountDownTimer />
              </div>
            </div>
            {/* button-left-right */}
            <div className="  flex items-center  space-x-4  p-4">
              <button className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white">
                <BsChevronLeft size={20} />
              </button>
              <button className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white ">
                <BsChevronRight size={20} />
              </button>
            </div>
          </div>
          {/* cards */}
          <div
            className={`flex space-x-4 items-center justify-center border-2 border-purple-600 overflow-x-scroll `}
          >
            {cards.map((item, index) => {
              return (
                <Card
                  key={index}
                  cardImg={item.ImageUrl}
                  cardTitle={item.title}
                  cardNewPrice={item.newPrice}
                  cardOldPrice={item.oldPrice}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Todays;
