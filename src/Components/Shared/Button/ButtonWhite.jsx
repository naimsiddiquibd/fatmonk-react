const ButtonWhite = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="h-[61px] w-[242px] bg-monkwhite flex justify-center align-center cursor-pointer border rounded-xl"
    >
      <button className="font-[500] align-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF003D] to-[#4444C4]">
        {children}
      </button>
    </div>
  );
};

export default ButtonWhite;
