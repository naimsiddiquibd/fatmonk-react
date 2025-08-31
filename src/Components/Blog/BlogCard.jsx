const BlogCard = ({ tag, time, title, description, date, image }) => {
  return (
    <div className="max-w-[490px] min-h-[580px] rounded-xl shadow-xl flex flex-col overflow-hidden bg-monkwhite">
      <div
        className="flex-[4]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <img src={image} alt="" /> */}
      </div>

      <div className="flex-1 flex flex-col justify-between px-6 py-5 text-monkblack">
        <div>
          <p className="bg-[#B4B4B4] rounded-xl w-fit px-3 py-1 mb-2 text-[14px]">
            {tag}
          </p>
          <p className="text-[#9D9D9D] mb-2 text-[14px]">{time}</p>
          <h1 className="text-xl font-semibold mb-2">{title}</h1>
          <p>{description}</p>
        </div>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
