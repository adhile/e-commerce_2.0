import React, { useState, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import Card from "./components/Card";
import {cards } from "../../../data/cards"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Products() {
  const slider = React.useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
    const productsCard = cards.filter((card) => card.todayTag === false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    rows: 2,

    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };

  const canSlidePrev = currentSlide > 0;
  const canSlideNext = currentSlide < cards.length - settings.slidesToShow;
  return (
    <div>
      <section id="todays">
        {/* flex-container */}
        <div className=" flex flex-col container mx-auto p-2 space-y-4 mt-[60px] ">
          {/* title */}
          <div className="flex items-center justify-start space-x-2 w-full h-10 ">
            <div className=" w-[20px] bg-brickRed h-full rounded-md"></div>
            <h3 className="text-brickRed">Our Products</h3>
          </div>
          {/* flesh-sale */}
          <div className="flex items-center justify-between  ">
            {/* sale-timer */}
            <div className="flex items-center space-x-12 ">
              <h1 className="font-Inter font-medium text-4xl">
                Explore Our Products
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
          <div className=" container flex flex-col justify-between p-4">
            <Slider {...settings} ref={slider}>
              {productsCard.map((item, index) => {
                return (
                  <Card
                    key={index}
                    cardId={ item.id}
                    cardImg={item.ImageUrl}
                    cardTitle={item.title}
                    cardPrice={item.price}
                    cardTag={item.tag}
                  />
                );
              })}
            </Slider>
          </div>

          {/* view all product button */}

          <button className="w-[234px] h-[56px] bg-brickRed text-white font-Poppins font-medium text-base mx-auto rounded ">
            View All Products
          </button>
        </div>
      </section>
    </div>
  );
}

export default Products;
