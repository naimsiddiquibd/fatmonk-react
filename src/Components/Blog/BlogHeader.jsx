const BlogHeader = () => {
  return (
    <div
      className="min-h-[571px] flex flex-col items-center justify-center text-center px-6"
      style={{
        backgroundImage: "url('/blogs/header_bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="text-lg bg-gradient-to-r from-[#7C4EE4] to-[#58033E] bg-clip-text text-transparent">
        OUR BLOGS
      </p>

      <h1 className="text-5xl font-semibold mt-2 bg-gradient-to-r from-[#7C4EE4] to-[#58033E] bg-clip-text text-transparent pb-2">
        Find all our blogs from here
      </h1>

      <p className="max-w-xl mt-4 bg-gradient-to-r from-[#7C4EE4] to-[#58033E] bg-clip-text text-transparent">
        our blogs are written from very research research and well known writers
        writers so that we can provide you the best blogs and articles articles
        for you to read them all along
      </p>
    </div>
  );
};

export default BlogHeader;
