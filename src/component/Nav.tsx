import { useState } from "react";
import logo from "../assets/images/logo-text.png";

const Nav = () => {
  const [active, setActive] = useState("signup");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative sticky top-0 z-50 bg-white">
      <nav className="container mx-auto px-2 lg:px-0  py-4  flex justify-between items-center  md:shadow-none shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
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
          <li>
            <a
              href="/"
              className=" hover:text-[#db2777] transition-colors duration-200  font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" hover:text-[#db2777] transition-colors duration-200 font-semibold"
            >
              {" "}
              Technologies
            </a>
          </li>
          <li>
            <a
              href=""
              className=" hover:text-[#db2777] transition-colors duration-200 font-semibold"
            >
              Projects
            </a>
          </li>
          <li className=" hover:text-[#db2777] transition-colors duration-200 font-semibold">
            <a
              className=" hover:text-[#db2777] transition-colors duration-200 font-semibold"
              href="/"
            >
              About
            </a>
          </li>
          <li className=" hover:text-[#db2777] transition-colors duration-200 font-semibold ">
            <a
              className=" hover:text-[#db2777] transition-colors duration-200 font-semibold"
              href="/"
            >
              Contact
            </a>
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
        <div className="md:hidden  absolute left-4 top-20 z-50 mx-4 mb-4  px-4 py-4  bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.15)] ">
          <ul className="  flex flex-col  items-start gap-5">
            <li>
              <a
                href="/"
                className=" hover:text-[#db2777] transition-colors duration-200  font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" hover:text-[#db2777] transition-colors duration-200 font-semibold"
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href=""
                className=" hover:text-[#db2777] transition-colors duration-200 font-semibold"
              >
                Projects
              </a>
            </li>
            <li className=" hover:text-[#db2777] transition-colors duration-200 font-semibold">
              <a
                className=" hover:text-[#db2777] transition-colors duration-200 font-semibold"
                href="/"
              >
                About
              </a>
            </li>
            <li className=" hover:text-[#db2777] transition-colors duration-200 font-semibold ">
              <a
                className=" hover:text-[#db2777] transition-colors duration-200 font-semibold"
                href="/"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
