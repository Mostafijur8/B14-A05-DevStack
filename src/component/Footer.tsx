import footerLogo from "../assets/images/logo-text.png";

const Footer = () => {
  return (
    <div className="border-t-2 border-white  shadow-[0_4px_20px_rgba(15,23,42,0.08)] pt-5">
      <footer className="container mx-auto grid gap-10  lg:mt-7 lg:grid-cols-4 px-5 lg:px-0  ">
        <div>
          <img className="mx-auto lg:mx-0" src={footerLogo} alt="" />
          <p className="text-[#64748b] my-3 text-center lg:text-left ">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex  justify-evenly lg:justify-start lg:gap-3 font-bold  text-[#4b5563] lg:text-black">
            <li className="lg:list-none">
              {" "}
              <a className=" hover:text-amber-600 " href="https://github.com">
                GitHub
              </a>
            </li>
            <li className="lg:list-none">
              {" "}
              <a className=" hover:text-amber-600 " href="https://twitter.com">
                Twitter
              </a>
            </li>
            <li className="lg:list-none">
              <a className=" hover:text-amber-600 " href="https://linkedIn.com">
                LinkdIn
              </a>
            </li>
          </div>
        </div>

        <div className="hidden lg:block">
          <h2 className="font-bold mt-">PRODUCT</h2>
          <div className="flex flex-col gap-2 mt-2 text-[#64748b]">
            <a className=" hover:text-amber-600" href="#">
              Home
            </a>
            <a className=" hover:text-amber-600" href="#">
              Technologies
            </a>
            <a className=" hover:text-amber-600" href="#">
              Projects
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <h2 className="font-bold mt-">COMPANY</h2>
          <div className="flex flex-col gap-2 mt-2 text-[#64748b]">
            <a className=" hover:text-amber-600" href="#">
              About
            </a>
            <a className=" hover:text-amber-600" href="#">
              Contact
            </a>
            <a className=" hover:text-amber-600" href="#">
              Careers
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <h2 className="font-bold mt-">LEGAL</h2>
          <div className="flex flex-col gap-2 mt-2 text-[#64748b]">
            <a className=" hover:text-amber-600" href="#">
              Privacy Policy
            </a>
            <a className=" hover:text-amber-600" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      <div className="divider my-10 "></div>

      <div className="container text-[13px] lg:text-base text-[#64748b] mx-auto grid grid-cols-2 px-5 lg:px-0 justify-between ">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="mb-10 flex justify-end gap-2">
          <a className=" hover:text-amber-600" href="#">
            Privacy
          </a>
          <a className=" hover:text-amber-600" href="#">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
