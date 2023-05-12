import React from "react";

function Register() {
  return (
    <>
      <section id="register">
        <div className="flex  h-[781px] mt-[60px] mb-[140px] mr-[135px] min-w-screen">
          <img src="./img/login.svg" alt="" />
          <div className="flex flex-col  w-full pl-16  py-[125px] space-y-8   ">
            <div className="space-y-4">
              <h2 className="font-Inter font-medium text-3xl leading-8">
                Create an account
              </h2>
              <p className="font-Poppins font-normal text-base">
                Enter your details below
              </p>
            </div>

            <input
              type="text"
              placeholder=" Name"
              className="border-b border-gray-300 focus:outline-none p-2 "
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b border-gray-300 focus:outline-none p-2 "
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id=""
              className="border-b border-gray-300 focus:outline-none p-2 "
            />

            <button className=" w-full h-[56px] py-4 px-[122px] bg-brickRed text-white rounded font-Poppins font-medium text-base">
              Register
            </button>
            <div className="relative">
              <button className=" w-full h-[56px] py-4   border-2 rounded font-Poppins font-medium text-base">
                Sign up with Google
              </button>
              <img src="./img/google.svg" alt="" className="absolute top-4 left-14" />
            </div>

            <div className=" text-center ">
              <span>Already have account?</span>
              <a
                href="/"
                className="font-Poppins font-normal text-base underline underline-offset-8 ml-1"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
