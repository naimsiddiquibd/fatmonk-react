import { useState } from "react";
import GradientButton from "../Shared/Button/GradientButton";
import SoftDevServiceCard from "./ui/SoftDevServiceCard";

const DUMMY_DATA = [
  {
    title: "Tailored Solutions",
    content:
      "At FatMonk, we understand that every business is unique. That’s why we craft personalized software solutions designed to meet your specific needs. Our in-house products are not just tools—they are innovative, user-focused solutions that grow alongside your business, ensuring scalability and reliability for long-term success.",
  },
  {
    title: "Technical Excellence",
    content:
      "Our team of experts is committed to delivering top-notch software solutions using cutting-edge technology. From robust backend architecture to seamless integrations, we ensure your software is secure, scalable, and built to perform in any environment, keeping you ahead of the competition.",
  },
  {
    title: "User-Centric Design",
    content:
      "We place your users at the center of our design process. By combining intuitive interfaces with thoughtful user experiences, we ensure that your software is not only functional but also a delight to use. Every interaction is designed to increase engagement, productivity, and satisfaction.",
  },
  {
    title: "Dedicated Support",
    content:
      "Your journey with FatMonk doesn’t end with delivery. Our dedicated support team is here to assist you every step of the way, from implementation to maintenance. We provide timely updates, bug fixes, and enhancements to ensure your software evolves to meet your growing needs.",
  },
];

const SoftDevService = () => {
  const [openCard, setOpenCard] = useState(null);

  const handleToggle = (cardIndex) => {
    setOpenCard((prevIndex) => (prevIndex === cardIndex ? null : cardIndex));
  };

  return (
    <div className="h-[1049px] bg-[#060B27] flex justify-center items-center">
      <div
        className="bg-#0E1330 border border-[#282D45] flex justify-between items-center px-[54px] py-[50px]"
        style={{
          backgroundImage: 'url("/softdev_service_bg.svg")',
          backgroundSize: "cover",
        }}
      >
        <div className="flex-1 w-[687px]">
          <h1 className="text-[48px] font-bold font-poppins mb-10 bg-gradient-to-br from-[#FFCC33] to-[#E233FF] bg-clip-text text-transparent">
            Why Choose Our Software Development Services?
          </h1>
          <img src="/softdev_service.svg" alt="code" />
          <GradientButton>Discuss your Project</GradientButton>
        </div>

        <div className="flex flex-col justify-center items-end">
          {DUMMY_DATA.map((data, i) => (
            <SoftDevServiceCard
              key={i}
              isOpen={openCard === i}
              onToggle={() => handleToggle(i)}
              title={data.title}
              content={data.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftDevService;
