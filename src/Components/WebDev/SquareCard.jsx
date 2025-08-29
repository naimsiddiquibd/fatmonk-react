const SquareCard = ({ img, title, description, w = "330px", h = "368px" }) => {
  return (
    <div
      className={`bg-[#202020] flex flex-col justify-center items-center px-8 py-10 rounded-lg`}
      style={{ width: w, height: h }}
    >
      <img src={img} alt="" className="mb-6" />

      <div className="text-center">
        <p className="text-monkwhite text-xl">{title}</p>
        <p className="text-[#CEB0FA] text-xl">{description}</p>
      </div>
    </div>
  );
};

export default SquareCard;
