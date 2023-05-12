import React, { useState, useEffect } from "react";
import { images } from "../../../../data/images";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const autoSlideInterval = 5000;
  const prev = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };
  const next = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slidInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slidInterval);
  }, [autoSlide]);
  return (
    <>
      {/* slider */}
      <div className="relative w-full overflow-hidden max-h-[344px] ">
        {/* images-cursoral */}
        <div
          className="flex  h-full w-full transition-transform ease-in-out duration-500 "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image,index) => {
            return <img key={ index} src={image} alt="" />;
          })}
        </div>
        {/* button-left-right */}
        <div className="absolute inset-0  flex items-center  justify-between p-4">
          <button
            className="p-1 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white"
            onClick={prev}
          >
            <BsChevronLeft size={20} />
          </button>
          <button
            className="p-1 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white"
            onClick={next}
          >
            <BsChevronRight size={20} />
          </button>
        </div>
        {/* indicators */}
        <div className=" absolute bottom-4 left-0 right-0">
          <div className="flex items-center justify-center gap-2 ">
            {images.map((_, i) => {
              return (
                <div
                  key={i}
                  className={`transition-all w-3 h-3 rounded-full bg-white ${
                    currentIndex === i ? "p-2 bg-orange-500" : "bg-opacity-50"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
