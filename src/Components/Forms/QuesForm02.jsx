import React from "react";
import Navbar from "../Navbar";

import { FaArrowRight } from "react-icons/fa";
import { AiOutlineEnter } from "react-icons/ai";

const QuesForm02 = () => {
  return (
    <section>
      <Navbar className="fixed" />
      <div className="flex flex-col max-h-screen justify-center w-full md:w-3/5 mx-auto p-3 mt-16 md:mt-12">
        <div className="flex flex-row items-center justify-start mb-4">
          {/* QuestionSection 01 */}
          <p className="px-0.5 text-lg font-serif text-lightPurple md:text-2xl">
            2
          </p>
          <FaArrowRight className="mt-1 text-lg text-lightPurple font-light w-2" />
          <h2 className="mt-1 pl-3 text-lg font-poppins font-medium md:text-2xl">
            What's your email address?
          </h2>
        </div>
        <h3 className="pl-9 text-lg font-poppins text-gray-500 font-medium md:text-2xl">
          This is how we'll contact you.
        </h3>
        {/* Label & Input Container */}
        <div className="formContainer">
          <input
            type="text"
            placeholder="name@gmail.com"
            name="given-email"
            className="inputBtn placeholder:text-3xl"
          />
        </div>
      </div>
      {/* Button & Link Container */}
      <div className="flex md:relative md:mt-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 fixed bottom-0 left-0 w-full md:static p-3 md:ml-72 md:-mt-6">
          <a href="/page3" className="btn uppercase py-2 text-xl">
            OK
          </a>
          <div className="flex flex-row items-center m-3 space-x-2 hidden md:flex">
            <p className="text-sm">
              Press <span className="font-semibold">Enter</span>
            </p>
            <AiOutlineEnter className="ml-1" />
          </div>
          <div className="relative">
            <p className="text-sm font-light font-poppins text-center  md:hidden">
              Powered by
              <a
                href="https://www.typeform.com/explore/?utm_campaign=XRAhBuOZ&utm_source=typeform.com-25971652-business&utm_medium=typeform&utm_content=typeform-footer&utm_term=EN"
                className="font-sans pl-1 font-medium underline underline-offset-4 md:no-underline md:py-0"
              >
                Typeform
              </a>
            </p>
            <p className="hidden md:block md:linkBtn md:fixed md:bottom-0 md:right-0 md:m-8">
              Powered by
              <a
                href="https://www.typeform.com/explore/?utm_campaign=XRAhBuOZ&utm_source=typeform.com-25971652-business&utm_medium=typeform&utm_content=typeform-footer&utm_term=EN"
                className="font-sans pl-1 font-medium md:py-0"
              >
                Typeform
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuesForm02;
