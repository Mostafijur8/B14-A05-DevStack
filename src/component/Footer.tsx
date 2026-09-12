import footerLogo from "../assets/images/logo-text.png";

const Footer = () => {
  return (
    <div className="border-t-2 border-white shadow-[0_-5px_15px_rgba(255,255,255,0.8)]">
      <footer className="container mx-auto grid gap-10   lg:mt-7 lg:grid-cols-4 lg:px-0  ">
        <div className="">
          <img src={footerLogo} alt="" />
          <p className="text-[#64748b] my-3">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex justify-start gap-3 font-bold">
            <a className=" hover:text-amber-600 " href="https://github.com">
              GitHub
            </a>
            <a className=" hover:text-amber-600 " href="https://twitter.com">
              Twitter
            </a>
            <a className=" hover:text-amber-600 " href="https://linkedIn.com">
              LinkdIn
            </a>
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

      <div className="container text-[#64748b] mx-auto grid grid-cols-2 justify-between lg:px-0 px-6">
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
