import TechComponent from "./ui/TechComponent";

const DATA1 = [
  "Frontend",
  "Backend",
  "Mobile",
  "E-commerce",
  "Design",
  "WordPress",
];
const DATA2 = [
  "/JavaScript.svg",
  "/React.svg",
  "/VSCode.svg",
  "/Simlime Text.svg",
  "/Git.svg",
  "/NodeJs.svg",
];

const SoftDevTech = () => {
  return (
    <div className="h-[574px] bg-[#060B27] flex justify-center items-center">
      <div className=" flex flex-col justify-around items-center gap-5 bg-[#7214ff25] w-[100%] ">
        <h1 className="text-[48px] mt-12 font-poppins font-bold text-center tracking-[-0.03em] bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
          Technology we use
        </h1>

        <div className="relative flex flex-col justify-between items-center h-[214px] w-[70%] px-20 bg-#0E1330 border border-[#282D45] rounded-3xl mt-10 mb-24 bg-[#060B27]">
          <div className="flex justify-around items-center gap-5 absolute top-[-20px]">
            {DATA1.map((data, i) => (
              <TechComponent key={i} name={data} />
            ))}
          </div>

          <div className="flex justify-around items-center gap-5 absolute bottom-[-50px]">
            {DATA2.map((data, i) => (
              <img
                src={data}
                alt="logo"
                className="hover:scale-125 transition-all duration-200 "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftDevTech;
