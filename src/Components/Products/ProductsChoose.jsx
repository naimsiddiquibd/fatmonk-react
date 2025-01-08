import { useState } from "react";
import ProductsImageComponent from "./ui/ProductsImageComponent";

const ProductsChoose = () => {
  const [activeOption, setActiveOption] = useState("Built with Expertise");

  const handleOptions = (option) => {
    setActiveOption(option);
  };
  return (
    // h-[587px] bg-gradient-to-r from-[#FBEBAB] to-[#E5F0A0]
    <div className="bg-monkwhite flex justify-center items-center py-[62px]">
      <div className="h-[587px] w-[80%] bg-gradient-to-r from-[#FBEBAB] to-[#E5F0A0] flex justify-around items-center">
        <div className="flex justify-center items-center mt-28">
          <ProductsImageComponent type={activeOption} />
        </div>

        <div className="w-[560px]">
          <h1 className="text-[50px] font-bold text-monkblack">
            Why Choose Fatmonk’s Products?
          </h1>
          <p className="text-[16px] text=[#454D55] mb-[50px]">
            At Famonk, our in-house products empower your business with
            innovative, user-focused solutions that grow with you. Partner with
            us for reliable tools designed to support your success.
          </p>

          <div>
            <p
              className="text-monkblack text-[26px] font-bold mb-[16px] cursor-pointer hover:scale-110 transition-all"
              style={
                activeOption === "Built with Expertise"
                  ? { color: "black" }
                  : { color: "#A6A6AA" }
              }
              onClick={() => handleOptions("Built with Expertise")}
            >
              Built with Expertise
            </p>
            <p
              className="text-monkblack text-[26px] font-bold mb-[16px] cursor-pointer hover:scale-105 transition-all"
              style={
                activeOption === "Customer-Centric Design"
                  ? { color: "black" }
                  : { color: "#A6A6AA" }
              }
              onClick={() => handleOptions("Customer-Centric Design")}
            >
              Customer-Centric Design
            </p>
            <p
              className="text-monkblack text-[26px] font-bold mb-[16px] cursor-pointer hover:scale-105 transition-all"
              style={
                activeOption === "Continuous Innovation"
                  ? { color: "black" }
                  : { color: "#A6A6AA" }
              }
              onClick={() => handleOptions("Continuous Innovation")}
            >
              Continuous Innovation
            </p>
            <p
              className="text-monkblack text-[26px] font-bold mb-[16px] cursor-pointer hover:scale-105 transition-all"
              style={
                activeOption === "Scalable Solutions"
                  ? { color: "black" }
                  : { color: "#A6A6AA" }
              }
              onClick={() => handleOptions("Scalable Solutions")}
            >
              Scalable Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsChoose;
