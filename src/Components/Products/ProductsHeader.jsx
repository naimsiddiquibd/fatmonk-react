import React from "react";
import GradientButton from "../Shared/Button/GradientButton";

const ProductsHeader = () => {
  return (
    <div
      className="h-[753px] px-20 py-0 flex flex-row justify-around items-center lg:flex-row sm:flex-col sm:justify-center sm:items-center sm:h-fit sm:py-20  "
      style={{
        backgroundImage: "url(/products_header_bg.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[778px]">
        <h1 className="text-[43px] font-bold text-monkblack">
          Empowering Your Business with Innovative,
          <span>IN House Solutions</span>
        </h1>

        <p className="text-monkblack text-[20px] mt-[30px] ">
          Discover tools crafted by Fat Monk to streamline your operations,
          enhance productivity, and drive success. From custom software to
          intuitive platforms, our products are designed with your growth in
          mind.
        </p>

        <GradientButton>Discuss your Project</GradientButton>
      </div>

      <div className="flex justify-center items-center mt-10">
        <img src="/hosting_diamond.gif" alt="gif" className="" />
      </div>
    </div>
  );
};

export default ProductsHeader;
