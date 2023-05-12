import React from "react";

function Login() {
  return (
    <>
      <section id="login">
        <div className="flex  h-[781px] mt-[60px] mb-[140px] mr-[135px] min-w-screen">
          <img src="./img/login.svg" alt="" />
          <div className="flex flex-col  w-full pl-16  py-[227px] space-y-8">
            <div className="space-y-4">
              <h2 className="font-Inter font-medium text-3xl leading-8">
                Log in to Exclusive
              </h2>
              <p className="font-Poppins font-normal text-base">
                Enter your details below
              </p>
            </div>

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
            <div className="flex justify-between items-center">
              <button className="w-[143px] h-[56px] bg-brickRed text-white rounded font-Poppins font-medium text-base">
                Log in
              </button>
              <a
                href="#"
                className="font-Poppins font-normal text-base text-brickRed"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
