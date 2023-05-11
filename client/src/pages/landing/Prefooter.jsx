import React from "react";

function Prefooter() {
  return (
    <>
      <section id="prefooter">
        <div className="container flex mx-auto items-center justify-center mt-[60px]  ">
          <div className="flex flex-col space-y-2 items-center m-4  w-[249px] h-[161px] ">
            <img
              src="./img/prefooter1.svg"
              alt=""
              className="h-[80px] w-[80px]"
            />
            <p className="font-Poppins font-semibold text-lg">
              FREE AND FAST DELIVERY
            </p>
            <p className="font-Poppins font-normal text-xs">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="flex flex-col space-y-2 items-center m-4  w-[249px] h-[161px]">
            <img
              src="./img/prefooter2.svg"
              alt=""
              className="h-[80px] w-[80px]"
            />
            <p className="font-Poppins font-semibold text-lg">
              24/7 CUSTOMER SERVICE
            </p>
            <p className="font-Poppins font-normal text-xs">
              Friendly 24/7 customer support
            </p>
          </div>
          <div className="flex flex-col space-y-2 items-center m-4  w-[249px] h-[161px] ">
            <img
              src="./img/prefooter3.svg"
              alt=""
              className="h-[80px] w-[80px]"
            />
            <p className="font-Poppins font-semibold text-lg">
              MONEY BACK GUARANTEE
            </p>
            <p className="font-Poppins font-normal text-xs">
              We reurn money within 30 days
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Prefooter;
