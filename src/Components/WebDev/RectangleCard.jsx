const RectangleCard = ({
  img,
  title,
  description,
  w = "496px",
  h = "168px",
}) => {
  return (
    <div
      className={`bg-[#202020] flex justify-start items-center gap-6 px-8 py-10 rounded-lg`}
      style={{ width: w, height: h }}
    >
      <img src={img} alt="" className="mb-6" />

      <div>
        <p className="text-monkwhite text-xl">{title}</p>
        <p className="text-[#CEB0FA] text-xl">{description}</p>
      </div>
    </div>
  );
};

export default RectangleCard;
