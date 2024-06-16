import React from "react";
import ReportImage from "../Assets/course_report_pic.PNG";
import GoogleIcon from "../Assets/google-icon.png";
import IBMIcon from "../Assets/ibm-icon.png";
import NicIcon from "../Assets/nike-icon.png";
import EbayIcon from "../Assets/ebay-icon.png";

const Features = () => {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center m-3  md:m-10">
          <img src={ReportImage} alt="" />
          <p className="text-lg font-poppins font-bold text-darkBlue md:text-xl">
            Our students{" "}
            <span className="h-2 items-center bg-greenishYellow">used</span> to
            work at
          </p>
          <div className="flex flex-row max-w-full space-x-6 justify-between pt-3 ficon">
            <img
              src={GoogleIcon}
              alt="Google"
              className="w-20 h-20 object-contain md:w-24 md:h-24"
            />
            <img
              src={IBMIcon}
              alt="IBM"
              className="w-20 h-20 object-contain md:w-24 md:h-24"
            />
            <img
              src={NicIcon}
              alt="NIC"
              className="w-20 h-20 object-contain md:w-24 md:h-24"
            />
            <img
              src={EbayIcon}
              alt="eBay"
              className="w-20 h-20 object-contain md:w-24 md:h-24"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
