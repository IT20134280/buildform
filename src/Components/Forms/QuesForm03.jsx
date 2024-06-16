import React, { useState } from "react";
import Navbar from "../Navbar";

import { FaArrowRight } from "react-icons/fa";
import { AiOutlineEnter } from "react-icons/ai";
import { FcHome } from "react-icons/fc";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const countries = [
  "United States",
  "Canada",
  "Mexico",
  "United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "China",
  "Japan",
  "Australia",
  "Brazil",
  "India",
  "South Africa",
  "Russia",
  "Argentina",
  "Egypt",
  "Saudi Arabia",
];

const QuesForm03 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClearSelection = () => {
    setSelectedOption("");
  };

  return (
    <section>
      <Navbar className="fixed" />
      <div className="flex flex-col max-h-screen justify-center mx-auto md:w-3/5  p-3 mt-16 md:mt-12 overflow-hidden">
        <div className="flex flex-row items-center justify-start mb-4">
          {/* QuestionSection 01 */}
          <p className="px-0.5 text-lg font-serif text-lightPurple md:text-2xl">
            3
          </p>
          <FaArrowRight className="mt-1 text-lg text-lightPurple font-light w-2" />
          <h2 className="mt-1 pl-3 text-lg font-poppins font-medium md:text-2xl">
            Which country you are from?
          </h2>
          <div className="flex flex-row space-x-2 m-1 md:m-3">
            <FcHome className="w-8 h-8" />
            <FcHome className="w-8 h-8" />
            <FcHome className="w-8 h-8" />
          </div>
        </div>

        {/* Label & Input Container */}
        <div className="relative formContainer">
          <input
            type="text"
            placeholder="Type or select an option"
            name="given-option"
            className="inputBtn placeholder:text-3xl md:text-3xl font-semibold"
            value={selectedOption}
            onFocus={() => setIsOpen(true)}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          {/* Option Arrow Container */}
          {selectedOption ? (
            <button
              type="button"
              className="absolute right-0 top-0 mt-2 mr-2"
              onClick={handleClearSelection}
            >
              <MdOutlineClose className="w-6 h-6 mt-6" />
            </button>
          ) : (
            <button
              type="button"
              className="absolute right-0 top-0 mt-2 mr-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaAngleDown className="w-6 h-6 mt-3 md:mt-6" />
            </button>
          )}
          {/* Display Countries using map method */}
          {isOpen && (
            <ul className="flex flex-col z-10 w-full text-xl bg-white border-b-2 border-dashed border-lightPurple space-y-2 font-poppins rounded-md md:pt-18 max-h-60 overflow-y-auto">
              {countries
                .filter((country) =>
                  country.toLowerCase().includes(selectedOption.toLowerCase())
                )
                .map((country, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 bg-veryLightPurple border cursor-pointer hover:bg-gray-200 hover:opacity-80"
                    onClick={() => handleOptionClick(country)}
                  >
                    {country}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
      {/* Button & Link Container */}
      <div className="flex md:relative md:mt-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 fixed bottom-0 left-0 w-full md:static p-3 md:ml-72 md:-mt-10">
          <a href="/page5" className="btn uppercase py-2 text-xl">
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

export default QuesForm03;
