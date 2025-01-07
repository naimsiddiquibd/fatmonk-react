const ProjectCard = ({ img, title, type, description }) => {
  return (
    <div className="h-[495px] w-[500px] mt-5 mb-5 ml-5 mr-5 border-transparent rounded-3xl overflow-hidden">
      <div
        className="h-[325px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div
        className="h-[100%]"
        style={{
          backgroundImage: "url(/project_card_bg.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-[28px] font-semibold px-2 pt-2 text-monkblack">
          {title} <span className="text-[20px]">({type})</span>
        </h1>
        <p className="text-[17px] text-[#454D55] px-[16.92px] py-2 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
