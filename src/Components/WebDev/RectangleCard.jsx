const RectangleCard = ({
  img,
  title,
  description,
  w = "496px",
  h = "168px",
}) => {
  return (
    <div
      className={`bg-[#202020] flex flex-col md:flex-row justify-start items-center gap-6 sm:mx-4 md:px-8 py-10 rounded-lg`}
      style={{ maxWidth: w, minHeight: h }}
    >
      <img src={img} alt="" className="mb-6" />

      <div className="text-center md:text-left">
        <p className="text-monkwhite text-xl">{title}</p>
        <p className="text-[#CEB0FA] text-xl">{description}</p>
      </div>
    </div>
  );
};

export default RectangleCard;
