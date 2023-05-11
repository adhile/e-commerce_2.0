import { React, useState } from "react";

function Card(props) {
  return (
    <section id="cards">
      {/* card */}
      <div className="  flex flex-col w-[170px] h-[145px] space-y-2 border-2 justify-center rounded items-center hover:bg-brickRed hover:text-white ">
        {/* icon*/}

        {props.cardIcon}

        {/* card title */}
        <h1 className="font-Poppins font-medium text-base">
          {props.cardTitle}
        </h1>
      </div>
    </section>
  );
}

export default Card;
