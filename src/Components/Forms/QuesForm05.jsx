import React, { useState } from "react";
import Navbar from "../Navbar";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineEnter } from "react-icons/ai";

const languages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "PHP",
  "C++",
  "TypeScript",
  "Ruby",
  "Swift",
  "Go",
  "Kotlin",
  "Rust",
  "Perl",
  "Scala",
  "Others",
];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const getAlphabeticLabel = (index) => {
  return alphabet[index % alphabet.length];
};

const QuesForm05 = () => {
  const [checkedLanguages, setCheckedLanguages] = useState([]);

  const toggleCheckbox = (language) => {
    if (checkedLanguages.includes(language)) {
      setCheckedLanguages(checkedLanguages.filter((item) => item !== language));
    } else {
      setCheckedLanguages([...checkedLanguages, language]);
    }
  };

  return (
    <section className="relative max-h-screen justify-center">
      <Navbar />
      <div className="flex flex-col  justify-center w-full md:w-3/5 mx-auto p-3 mt-16 md:mt-12">
        <div className="flex flex-row items-center justify-start mb-2">
          {/* QuestionSection 01 */}
          <p className="px-0.5 text-lg font-serif text-lightPurple md:text-2xl">
            5
          </p>
          <FaArrowRight className="mt-1 text-lg text-lightPurple font-light w-2" />
          <h2 className="mt-1 pl-3 text-lg font-poppins font-medium md:text-2xl">
            What languages and frameworks are you familiar with?
          </h2>
        </div>
        <h3 className="pl-9 text-lg font-poppins text-gray-500 font-medium">
          Select all the languages you know.
        </h3>
        {/* Label & Input Container */}
        <div className="formcontainer m-2 p-2 ">
          <form>
            <div className="grid md:grid-cols-3 gap-1">
              {languages.map((language, index) => (
                <div key={index} className="p-1">
                  <label
                    className={`flex py-2 md:items-stretch mx-8 md:mx-0 px-2 md:py-2 text-lightPurple font-poppins font-medium border border-lightPurple cursor-pointer rounded-md hover:bg-gray-200 hover:opacity-80`}
                  >
                    <span
                      className={`px-2 md:mr-2 md:px-2 items-center md:mt-1 text-sm border border-lightPurple ${
                        checkedLanguages.includes(language)
                          ? "bg-lightPurple text-white"
                          : "bg-white"
                      }`}
                    >
                      {getAlphabeticLabel(index)}
                    </span>
                    <span className="text-sm md:text-lg pl-2 pr-8">
                      {language}
                    </span>
                    <input
                      type="checkbox"
                      name="given-languages"
                      checked={checkedLanguages.includes(language)}
                      onChange={() => toggleCheckbox(language)}
                      className="ml-auto mr-1 rounded-md checked:bg-black"
                    />
                  </label>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
      {/* Button & Link Container */}
      <div className="flex md:relative md:mt-4">
        <div className="flex flex-col md:flex-row space-y-4 bg-white md:space-y-0 fixed bottom-0 left-0 w-full md:static p-3 md:ml-72 md:-mt-6">
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
            <p className="text-sm font-light font-poppins text-center md:hidden">
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

export default QuesForm05;
