import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <section id="footer">
        <div className="flex p-16  bg-black mt-[60px] w-full">
          {/* box-1 */}
          <div className="flex flex-col  w-[217px] mr-6 space-y-4 text-white">
            <p className="font-Inter font-bold text-[24px]">Exclusive</p>
            <p className="font-Poppins font-medium text-xl">Subscribe</p>
            <p className="font-Poppins font-normal text-base">
              Get 10% off your first order
            </p>
            <div className="relative ">
              <input
                type="email"
                placeholder="Enter your email"
                className=" border-2 rounded p-2 w-full text-gray-400 bg-black"
              />
              <AiOutlineSend
                size={24}
                className="absolute top-3 right-2  border-2 border-black"
              />
            </div>
          </div>
          {/* box-2 */}
          <div className="flex flex-col  w-[217px]  space-y-4 ml-4 text-white">
            <p className="font-Inter font-bold text-[24px]">Support</p>

            <p className="font-Poppins font-normal text-base">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="font-Poppins font-normal text-base">
              exclusive@gmail.com
            </p>
            <p className="font-Poppins font-normal text-base">
              +88015-88888-9999
            </p>
          </div>
          {/* box-3 */}
          <div className="flex flex-col  w-[217px]  space-y-4 ml-4 text-white">
            <p className="font-Inter font-bold text-[24px]">Account</p>

            <p className="font-Poppins font-normal text-base">My Account</p>
            <p className="font-Poppins font-normal text-base">
              Login / Register
            </p>
            <p className="font-Poppins font-normal text-base">Cart</p>
            <p className="font-Poppins font-normal text-base">Wishlist</p>
            <p className="font-Poppins font-normal text-base">Shop</p>
          </div>
          {/* box-4 */}
          <div className="flex flex-col  w-[217px]  space-y-4 ml-4 text-white">
            <p className="font-Inter font-bold text-[24px]">Quick Link</p>

            <p className="font-Poppins font-normal text-base">Privacy Policy</p>
            <p className="font-Poppins font-normal text-base">Terms Of Use</p>
            <p className="font-Poppins font-normal text-base">FAQ</p>
            <p className="font-Poppins font-normal text-base">Contact</p>
          </div>
          {/* box-5 */}
          <div className="flex flex-col  w-[217px]  space-y-4 ml-4 text-white">
            <p className="font-Inter font-bold text-[24px]">Download App</p>

            <p className="font-Poppins font-medium text-xs">
              Save $3 with App New User Only
            </p>
            {/* qr-code */}
            <div className="flex  w-full h-[84px]  items-center ">
              <img
                src="./img/qrcode.svg"
                className="w-[76px] h-[76px] mr-4"
                alt=""
              />
              <div className="flex flex-col space-y-2">
                <img src="./img/gplay.svg" alt="" />
                <img src="./img/appstore.svg" alt="" />
              </div>
            </div>
            {/* icons */}
            <div className="flex justify-between items-center">
              <FaFacebookF size={24} />
              <FaInstagram size={24} />
              <FaTwitter size={24} />
              <FaLinkedinIn size={24} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
