import { useState } from "react";
import logo from "../assets/images/logo-text.png";

const Nav = () => {
  const [active, setActive] = useState("signup");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className="container mx-auto px-2 sm:px-6 lg:px-8 flex justify-between items-center py-4 md:shadow-none shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
        {/* mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 0.75H18.75M0.75 7.75H18.75M0.75 14.75H18.75"
              stroke="#7B7171"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        {/* lolo */}
        <img className="w-32 md:w-auto" src={logo} alt="logo" />

        {/* destop menu */}
        <ul className=" hidden  md:flex justify-between items-center gap-5">
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

        {/* button */}
        <div className="flex justify-center gap-3">
          <button
            onMouseEnter={() => setActive("signin")}
            onMouseLeave={() => setActive("signup")}
            className={`btn  rounded-full py-2 px-4 shadow-[0_1px_2px_0_#fbcfe8] ${active === "signin" ? "bg-[#d91b7e]" : "bg-transparent"}`}
          >
            Sign In
          </button>
          <button
            className={`btn rounded-full py-2  px-4  shadow-[0_1px_2px_0_#fbcfe8] ${active === "signup" ? "bg-[#d91b7e]" : "bg-transparent"}`}
          >
            Sign Up
          </button>
        </div>
      </nav>
      <div className="divider hidden sm:flex"></div>

      {/* mobile menu list */}
      {menuOpen && (
        <div className="md:hidden  mx-4 mb-4  px-4 py-4  bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
          <ul className="  flex flex-col  items-s gap-5">
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
        </div>
      )}
    </div>
  );
};

export default Nav;
