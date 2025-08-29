import BlogBigCard from "./BlogBigCard";
import BlogCard from "./BlogCard";
import Headline from "./Headline";

const POSTS = [
  {
    tag: "Design",
    time: "20 mins ago",
    title:
      "The Art of Visual Branding: How to Leverage Brand Elements to Establish Your",
    description:
      "The choice between a train or bus journey depends on various factors such as the distance of the journey .....",
    date: "Sep 22,2024 - 5 MIN READ",
    image: "/blogs/blog1.png",
  },
  {
    tag: "Design",
    time: "20 mins ago",
    title:
      "The Art of Visual Branding: How to Leverage Brand Elements to Establish Your",
    description:
      "The choice between a train or bus journey depends on various factors such as the distance of the journey .....",
    date: "Sep 22,2024 - 5 MIN READ",
    image: "/blogs/blog2.png",
  },
  {
    tag: "Design",
    time: "20 mins ago",
    title:
      "The Art of Visual Branding: How to Leverage Brand Elements to Establish Your",
    description:
      "The choice between a train or bus journey depends on various factors such as the distance of the journey .....",
    date: "Sep 22,2024 - 5 MIN READ",
    image: "/blogs/blog3.png",
  },
  {
    tag: "Design",
    time: "20 mins ago",
    title:
      "The Art of Visual Branding: How to Leverage Brand Elements to Establish Your",
    description:
      "The choice between a train or bus journey depends on various factors such as the distance of the journey .....",
    date: "Sep 22,2024 - 5 MIN READ",
    image: "/blogs/blog4.png",
  },
  {
    tag: "Design",
    time: "20 mins ago",
    title:
      "The Art of Visual Branding: How to Leverage Brand Elements to Establish Your",
    description:
      "The choice between a train or bus journey depends on various factors such as the distance of the journey .....",
    date: "Sep 22,2024 - 5 MIN READ",
    image: "/blogs/blog1.png",
  },
  {
    tag: "Design",
    time: "20 mins ago",
    title:
      "The Art of Visual Branding: How to Leverage Brand Elements to Establish Your",
    description:
      "The choice between a train or bus journey depends on various factors such as the distance of the journey .....",
    date: "Sep 22,2024 - 5 MIN READ",
    image: "/blogs/blog3.png",
  },
];

const BlogPosts = () => {
  return (
    <div className="bg-monkwhite">
      <Headline title="Our Recent Post" type="bold" />

      <div className="w-[80vw] mx-auto my-10">
        <BlogBigCard
          title="How AI is Revolutionizing Game Development and UI Design for Modern
          Websites"
          description="It is a long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The point of
                  using Lorem Ipsum is that. It is a long established fact that a reader
                  will be distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that...."
          time="Sep 22,2024 - 5 MIN READ"
        />
      </div>

      <Headline title="Popular Post" type="normal" />

      <div className="w-[80vw] mx-auto py-10  grid gap-6 grid-cols-[repeat(auto-fill,minmax(340px,1fr))]">
        {POSTS.map((post, index) => (
          <BlogCard
            key={index}
            tag={post.tag}
            time={post.time}
            title={post.title}
            description={post.description}
            date={post.date}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
