import React, { useState } from "react";

import logo from "../assets/images/logo-text.png";

const Nav = () => {
  const [active, setActive] = useState("signup");
  return (
    <div>
      <nav className="container mx-auto max-w-6xl flex justify-between items-center py-4">
        <img src={logo} alt="logo" />
        <ul className="flex justify-between items-center gap-5">
          <li className=" hover:text-[#db2777] transition-colors duration-200  font-semibold">
            Home
          </li>
          <li className=" hover:text-[#db2777] transition-colors duration-200 font-semibold">
            Technologies
          </li>
          <li className=" hover:text-[#db2777] transition-colors duration-200 font-semibold">
            Projects
          </li>
          <li className=" hover:text-[#db2777] transition-colors duration-200 font-semibold">
            About
          </li>
          <li className=" hover:text-[#db2777] transition-colors duration-200 font-semibold ">
            Contact
          </li>
        </ul>
        <div className="flex justify-center gap-3">
          <button
            onMouseEnter={() => setActive("signin")}
            onMouseLeave={() => setActive("signup")}
            className={`btn rounded-full py-2  px-4  shadow-[0_1px_2px_0_#fbcfe8] ${active === "signin" ? "bg-[#d91b7e]" : "bg-transparent"}`}
          >
            Sign In
          </button>
          <button
            className={`btn rounded-full py-2  px-4   shadow-[0_1px_2px_0_#fbcfe8] ${active === "signup" ? "bg-[#d91b7e]" : "bg-transparent"}`}
          >
            Sign Up
          </button>
        </div>
      </nav>
      <div className="divider"></div>
    </div>
  );
};

export default Nav;
