import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineEnter } from "react-icons/ai";

const QuesForm01 = () => {
  return (
    <section>
      <div className="flex flex-col max-h-screen justify-center w-full md:w-3/5 mx-auto p-3 mt-12">
        <div className="flex flex-row items-center justify-start mb-4">
          {/* QuestionSection 01 */}
          <p className="px-0.5 text-lg font-serif text-lightPurple md:text-2xl">
            1
          </p>
          <FaArrowRight className="mt-1 text-lg text-lightPurple font-light w-2" />
          <h2 className="mt-1 pl-3 text-lg font-poppins font-medium md:text-2xl">
            Before we start, what is your name?
          </h2>
        </div>
        {/* Label & Input Container */}
        <div className="formContainer">
          <label className="text-sm md:text-md">First name</label>
          <input
            type="text"
            placeholder="Jane"
            name="given-name"
            className="inputBtn"
          />
        </div>
        <div className="formContainer md:-mt-6">
          <label className="text-sm md:text-md">Last name</label>
          <input
            type="text"
            placeholder="Smith"
            name="given-name"
            className="inputBtn"
          />
        </div>
      </div>
      {/* Button & Link Container */}
      <div className="flex md:relative md:mt-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 fixed bottom-0 left-0 w-full md:static p-3 md:ml-72 md:-mt-6">
          <a href="/page2" className="btn uppercase py-2 text-xl">
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

export default QuesForm01;
