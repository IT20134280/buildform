import React from "react";
import { AiOutlineEnter } from "react-icons/ai";
import { MdPeople } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <section>
        <div className="flex flex-col  justify-start m-6 md:m-10 ">
          <div className="space-y-3 md:p-3">
            {/* Heading */}
            <h1 className="text-3xl font-semibold font-poppins tracking-widest md:text-4xl">
              Launch your Data Career in Weeks, not Years
            </h1>
            {/* Body Section */}
            <p className="text-md font-semilight font-poppins text-gray-500 md:text-lg">
              What to expect:
            </p>
            <div className="space-y-1">
              <div className="flex flex-row items-center text-md font-semilight font-poppins text-gray-500 md:text-lg">
                <span className="flex w-[10px] border-t-2 border-gray-500"></span>
                <p className="mx-2">
                  <span className="font-bold text-gray-600">Short-answer</span>{" "}
                  questions &
                  <span className="font-bold text-gray-600"> No </span>
                  cover letter
                </p>
              </div>
              <div className="flex flex-row items-center text-md font-semilight font-poppins text-gray-500 md:text-lg">
                <span className="flex w-[10px] border-t-2 border-gray-500"></span>
                <p className="mx-2">Takes 4 mins on average</p>
              </div>
            </div>
            {/* Button & text Container */}
            <div className="flex flex-col-reverse md:flex-col space-y-2 p-3 items-center  bg-veryLightPurple md:bg-white md:items-start md:p-0">
              <div className="flex items-center justify-center md:flex-row">
                <a href="/form" className="btn">
                  Start Your Journey
                </a>
                <div className="flex flex-row items-center m-3 space-x-2 hidden md:flex">
                  <p className="text-sm">
                    Press <span className="font-semibold">Enter</span>
                  </p>
                  <AiOutlineEnter className="ml-1" />{" "}
                </div>
              </div>

              {/* Sub text container */}
              <div className="flex space-x-2 pb-2 items-center">
                <MdPeople />
                <p>44 people have filled this out</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
