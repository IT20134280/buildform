import React from "react";
import Logo from "../Assets/logo.PNG";
const Navbar = () => {
  return (
    <>
      <nav className="container relative m-6 md:pl-6">
        {/* Flex container for nav items */}
        <div className="flex justify-start mx-auto">
          {/* Logo */}
          <img src={Logo} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
