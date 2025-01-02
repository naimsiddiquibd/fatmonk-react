const GradientButton = ({ children, onClick = "#" }) => {
  return (
    <button
      onClick={onClick}
      className="
    flex items-center gap-3 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
    font-poppins font-medium px-5 md:px-5 md:py-2 py-3 rounded-full
    text-[15px] text-monkwhite md:text-[16px]
    hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D]
    cursor-pointer lg:mt-16 mt-8
    transition-all duration-300 ease-in-out
"
    >
      {children}
      <img
        className="h-9 w-9 lg:h-12 lg:w-12 transition-all duration-300 ease-in-out"
        src="/button-icon.png"
        alt=""
      />
    </button>
  );
};

export default GradientButton;
