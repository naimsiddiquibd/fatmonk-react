// Type = normal | bold
const Headline = ({ title, type = "normal" }) => {
  return (
    <div className="flex justify-center items-center bg-monkwhite">
      <div className="flex justify-between items-center px-2 py-3 w-[80vw]">
        <div className="flex justify-start items-center gap-4">
          <div
            className={`h-10 ${
              type === "normal" ? "w-1" : "w-2"
            } bg-gradient-to-r from-[#FF003D] to-[#4444C4]`}
          ></div>

          <h1
            className={`${
              type === "normal" ? "text-2xl" : "font-bold text-4xl"
            } bg-gradient-to-r from-[#FF003D] to-[#4444C4] bg-clip-text text-transparent`}
          >
            {title}
          </h1>
        </div>

        <button className="bg-gradient-to-r to-[#FF003D] from-[#4444C4] font-poppins font-medium px-3 py-2 rounded-full text-[12px] text-monkwhite hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D] cursor-pointer">
          View All
        </button>
      </div>
    </div>
  );
};

export default Headline;
