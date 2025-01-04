const TechComponent = ({ name }) => {
  return (
    <div className="border bg-[#282D45] rounded-xl w-fit px-2 py-1 text-[16px] text-[#F6F6F7] flex justify-center items-center gap-1 bg-gradient-to-bl from-[rgba(21,25,52,0.52)] via-[rgba(21,25,52,0.08)_49.66%] to-[rgba(21,25,52,0.49)_87.77%] hover:scale-110 transition-all duration-75 ">
      <img src="/code_icon.svg" alt="code_icon" />
      {name}
    </div>
  );
};

export default TechComponent;
