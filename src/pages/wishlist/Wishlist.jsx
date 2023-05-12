import React, { useState, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { cards } from "../../data/cards";
import Slider from "react-slick";
import Card from "../wishlist/components/Card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { wishlistContext } from "../../context/WishlistContextProvider";
import { useContext } from "react";

function Wishlist() {
  const slider = React.useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { wishlistItems } = useContext(wishlistContext);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };

  const canSlidePrev = currentSlide > 0;
  const canSlideNext = currentSlide < cards.length - settings.slidesToShow;

  return (
    <>
      <section id="wishlist" className="min-w-screen">
        {/* flex-container */}
        <div className=" flex flex-col container mx-auto p-2 space-y-4 mt-[140px] ">
          {/* title */}
          <div className=" flex items-center justify-between  w-full h-[56px] ">
            <h3>Wishlist({wishlistItems.length})</h3>
            <button className="border-2 h-full w-[223px] rounded">
              Move All to Bag
            </button>
          </div>
          <div className="flex items-center justify-between  flex-row-reverse  ">
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
          <div className=" container  flex flex-col justify-between p-4">
            <Slider {...settings} ref={slider}>
              {cards
                .filter((item) => wishlistItems.includes(item.id))
                .map((item, index) => {
                  return (
                    <Card
                      key={index}
                      cardId={item.id}
                      cardImg={item.ImageUrl}
                      cardTitle={item.title}
                      cardPrice={item.price}
                      cardOldPrice={item.oldPrice}
                      cardOffer={item.offer}
                      cardTodayTag={item.todayTag}
                    />
                  );
                })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Wishlist;
