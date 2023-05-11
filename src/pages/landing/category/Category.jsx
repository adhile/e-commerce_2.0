import React from "react";
import { useState } from "react";
import Card from "./components/Card";
import { cards } from "../../../data/categoryCard";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Category() {
  const slider = React.useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };

  const canSlidePrev = currentSlide > 0;
  const canSlideNext = currentSlide < cards.length - settings.slidesToShow;
  return (
    <section id="category">
      {/* flex-container */}
      <div className=" flex flex-col container mx-auto p-2 space-y-4 mt-[80px] ">
        {/* title */}
        <div className="flex items-center justify-start space-x-2 w-full h-10 ">
          <div className=" w-[20px] bg-brickRed h-full rounded-md"></div>
          <h3 className="text-brickRed">Categories</h3>
        </div>
        {/* flesh-sale */}
        <div className="flex items-center justify-between  ">
          {/* sale-timer */}
          <div className="flex items-center space-x-12 ">
            <h1 className="font-Inter font-medium text-4xl">
              Browse By Categories
            </h1>
          </div>
          {/* button-left-right */}
          <div className="  flex items-center  space-x-4  p-4">
            <button
              className={`p-1 rounded-full shadow bg-gray-200 text-gray-800 ${
                canSlidePrev ? "hover:bg-white" : "opacity-50 cursor-default"
              }`}
              onClick={() => canSlidePrev && slider.current.slickPrev()}
              disabled={!canSlidePrev}
            >
              <BsChevronLeft size={20} />
            </button>
            <button
              className={`p-1 rounded-full shadow bg-gray-200 text-gray-800 ${
                canSlideNext ? "hover:bg-white" : "opacity-50 cursor-default"
              }`}
              onClick={() => canSlideNext && slider.current.slickNext()}
              disabled={!canSlideNext}
            >
              <BsChevronRight size={20} />
            </button>
          </div>
        </div>
        {/* cards */}
        <div className=" container  flex flex-col  p-4">
          <Slider {...settings} ref={slider}>
            {cards.map((item, index) => {
              return (
                <Card
                  key={index}
                  cardIcon={item.cardIcon}
                  cardTitle={item.title}
                />
              );
            })}
          </Slider>
        </div>
      </div>
      {/* line */}
      <div className="border border-gray-400 w-[1170px] h-0 mx-auto mt-[60px] "></div>
    </section>
  );
}

export default Category;
