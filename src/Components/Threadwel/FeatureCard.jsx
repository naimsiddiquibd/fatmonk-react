import React from "react";

const FeatureCard = ({ url, title, description }) => {
  return (
    <div className="h-72 w-60 bg-monkwhite p-4 rounded-lg shadow-md">
      <div className="h-14 w-14 bg-gradient-to-b from-[#3B82F6] to-[#6DA5FF] flex items-center justify-center rounded-lg mb-4">
        <img src={url} alt="" />
      </div>
      <h3 className="text-lg font-bold mb-2 text-[#034D82]">{title}</h3>
      <p className="text-[#8EA9C1] text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
