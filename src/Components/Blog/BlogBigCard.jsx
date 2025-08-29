const BlogBigCard = ({ title, description, time }) => {
  return (
    <div className="min-h-[380px] flex flex-col-reverse md:flex-row bg-monkwhite rounded-xl shadow-xl overflow-hidden">
      <div className="flex-1 flex flex-col justify-between py-12 px-5 md:px-0 md:pl-20 md:pr-5">
        <h2 className="text-xl font-semibold text-monkblack">{title}</h2>
        <p className="text-lg text-monkblack">{description}</p>

        <div className="flex justify-between items-center text-monkblack font-medium pr-8">
          <p>{time}</p>
          <p className="bg-gradient-to-r from-[#FF003D] to-[#4444C4] bg-clip-text text-transparent cursor-pointer">
            Read More
          </p>
        </div>
      </div>

      <div className="flex-1">
        <img src="/blogs/recent_post1.png" alt="" className="h-full w-full" />
      </div>
    </div>
  );
};

export default BlogBigCard;
