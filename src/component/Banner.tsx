import banner from "../assets/images/banner-stack.png";
const Banner = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 items-center mt-7 lg:mt-0 lg:grid-cols-2 px-2 lg:px-0 px-6 ">
      <div className="md:text-left text-center">
        <h1 className="text-[30px] md:text-[60px]  font-bold">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-[#475569] py-6 md:max-w-[500px] text-justify">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-2">
          <button className=" btn flex-1 sm:text-base text-[13px] rounded-2xl shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-gradient-to-r from-[#f97316] to-[#ec4899]">
            Explore Technologies
          </button>
          <button className="btn flex-1 sm:text-base text-[13px] rounded-2xl ">
            Learn More
          </button>
        </div>
      </div>
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;
