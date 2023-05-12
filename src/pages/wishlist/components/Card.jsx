import { React, useContext, useState } from "react";
import { Heart, Eye, Trash2, ShoppingCart } from "react-feather";
import { wishlistContext } from "../../../context/WishlistContextProvider"


function Card(props) {
  const { removeFromWishlist}=useContext(wishlistContext)
  return (
    <>
      <div id="cards">
        {/* card */}
        <div className=" relative flex flex-col w-[270px] h-[350px] space-y-2 ">
          {/* image-box */}
          <div className="relative  w-full flex justify-center items-center h-[270px] bg-cardBg ">
            <img src={props.cardImg} alt="" />
            {/* add-to-cart button */}
            <div className="absolute bottom-0 w-full h-[41px] bg-black text-white flex items-center justify-center">
              <ShoppingCart />
              <a href="#" className=" font-Poppins font-medium text-base ml-2">
                Add To Cart
              </a>
            </div>
          </div>

          {/* card title */}
          <h1 className="font-Poppins font-medium text-base">
            {props.cardTitle}
          </h1>
          {/* card price */}
          <div className="font-Poppins font-medium text-base space-x-1">
            <span className="text-brickRed">{props.cardPrice}</span>{" "}
            <span className="line-through opacity-50">
              {props.cardOldPrice}
            </span>
          </div>

          {/* delete-icon */}
          <div className="absolute right-2 w-[34px] h-[34px] flex items-center justify-center rounded-full bg-white hover:bg-brickRed hover:text-white">
            <button onClick={()=>removeFromWishlist(props.cardId)}>
              <Trash2 />
            </button>
          </div>

          {/* offer-%-div */}
          {props.cardTodayTag ? (
            <div className="absolute left-3 rounded-sm w-[55px] h-[26px] bg-brickRed text-white flex items-center justify-center">
              <p className="font-Poppins font-normal text-xs">
                -{props.cardOffer}%
              </p>
            </div>
          ) : (
            <div className="absolute left-3 rounded-sm w-[55px] h-[26px] bg-green-600 text-white flex items-center justify-center">
              <p className="font-Poppins font-normal text-xs">NEW</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
