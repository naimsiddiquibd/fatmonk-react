import BlogCard from "../Blog/BlogCard";
import Headline from "../Blog/Headline";

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
];

const BlogTextSection = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-40">
      <div className="w-[75vw]">
        <div className="flex justify-start items-center gap-4 text-monkblack sm:px-10 lg:px-24">
          <p className="bg-[#B4B4B4] rounded-xl w-fit px-3 py-1 mb-2 text-[14px]">
            Design
          </p>
          <p className="text-[#9D9D9D] mb-2 text-[14px]">16 March 2025</p>
        </div>

        <h1 className="text-4xl font-semibold text-monkblack sm:px-10 lg:px-24">
          How AI is Revolutionizing Game Development and UI Design for Modern
          Websites
        </h1>

        <img
          src="/blogs/blog_post_1.png"
          alt=""
          className="max-h-[608px] mt-14 rounded-xl"
        />

        {/* Post Content */}
        <p className="mt-16 sm:px-10 lg:px-24 text-[#666666] text-lg">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether it’s
          publishing state-of-the-art research, building helpful products or
          developing tools and resources that enable others, we’re committed to
          making AI accessible to everyone.
        </p>

        <p className="mt-10 sm:px-10 lg:px-24 text-[#666666] text-lg">
          We’re now at a pivotal moment in our AI journey. Breakthroughs in
          generative AI are fundamentally changing how people interact with
          technology — and at Google, we’ve been responsibly developing large
          language models so we can safely bring them to our products. Today,
          we’re excited to share our early progress. Developers and businesses
          can now try new APIs and products that make it easy, safe and scalable
          to start building with Google’s best AI models through Google Cloud
          and a new prototyping environment called MakerSuite. And in Google
          Workspace, we’re introducing new features that help people harness the
          power of generative AI to create, connect and collaborate.
        </p>

        <div></div>

        <p className="mt-10 sm:px-10 lg:px-24 text-[#666666] text-lg">
          More than 3 billion people already benefit from AI-powered features in
          Google Workspace, whether it’s using Smart Compose in Gmail or
          auto-generated summaries in Google Docs. Now, we’re excited to take
          the next step and bring a limited set of trusted testers a new set of
          features that makes the process of writing even easier. In Gmail and
          Google Docs, you can simply type in a topic you’d like to write about,
          and a draft will be instantly generated for you. So if you’re a
          manager onboarding a new employee, Workspace saves you the time and
          effort involved in writing that first welcome email. From there, you
          can elaborate upon or abbreviate the message or adjust the tone to be
          more playful or professional — all in just a few clicks. We’ll be
          rolling out these new experiences to testers in the coming weeks.
        </p>

        <div className="flex justify-center items-center">
          <img
            src="/blogs/blog_post_2.png"
            alt=""
            className="mt-10 rounded-lg"
          />
        </div>

        <p className="mt-10 sm:px-10 lg:px-24 text-[#666666] text-lg">
          We’re so excited by the potential of generative AI, and the
          opportunities it will unlock — from helping people express themselves
          creatively, to helping developers build brand new types of
          applications, to transforming how businesses and governments engage
          their customers and constituents. Stay tuned for more to come in the
          weeks and months ahead.
        </p>
      </div>

      <div className="sm:px-8 lg:px-14 pb-28">
        <Headline title="Popular Posts" />
        <div className="mx-auto py-10 grid gap-6 grid-cols-[repeat(auto-fill,minmax(340px,1fr))]">
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
    </div>
  );
};

export default BlogTextSection;
