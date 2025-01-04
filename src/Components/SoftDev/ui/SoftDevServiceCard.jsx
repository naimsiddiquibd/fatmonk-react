import { CaretDownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const SoftDevServiceCard = ({ isOpen, onToggle, title, content }) => {
  const [height, setHeight] = useState("0px");
  const [rotateIcon, setRotateIcon] = useState(true);

  useEffect(() => {
    setHeight(isOpen ? "300px" : "0px");
    setRotateIcon(!rotateIcon);
  }, [isOpen]);

  return (
    <div className="w-[764px]">
      <div
        className="font-bold text-[43.75px] text-monkwhite transition-all cursor-pointer"
        onClick={() => {
          onToggle();
        }}
      >
        {title}{" "}
        <CaretDownOutlined
          style={{
            color: "white",
            transform: rotateIcon ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
        />
      </div>

      <div
        className="overflow-hidden transition-all text-[27px] text-monkwhite"
        style={{ height }}
      >
        {content}
      </div>
    </div>
  );
};

export default SoftDevServiceCard;
