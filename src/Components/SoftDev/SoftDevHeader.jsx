import GradientButton from "../Shared/Button/GradientButton";

const SoftDevHeader = () => {
  return (
    <div className="h-[814.43px] bg-[#060B27] flex justify-center items-center">
      <div className="flex justify-between items-center px-40">
        <div className="w-[50%]">
          <h1 className="font-poppins lg:text-[47px] sm:text-[35px] font-bold text-monkwhite">
            Custom Software Development for Your Unique Needs
          </h1>
          <p className="font-poppins text-[18px] text-[#8F9BB7]">
            From idea to execution, we create tailored software solutions
            designed to drive growth, efficiency, and innovation.
          </p>
          <GradientButton>Discuss your project</GradientButton>
        </div>

        <div>
          <img src="/softdev_header.svg" alt="header_image" />
        </div>
      </div>
    </div>
  );
};

export default SoftDevHeader;
