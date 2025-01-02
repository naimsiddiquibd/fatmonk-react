const EventCategoryCard = ({ src, title, description, color }) => {
  return (
    <div
      className={`h-[309.11px] w-[350.83px] mb-6 rounded-[22.76px] flex flex-col justify-between items-start p-14 sm:p-10 text-monkwhite font-poppins hover:-translate-y-9 transition-all ease-in-out`}
      style={{ backgroundColor: color }}
    >
      <img src={src} />
      <h1 className="text-lg font-poppins font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default EventCategoryCard;
