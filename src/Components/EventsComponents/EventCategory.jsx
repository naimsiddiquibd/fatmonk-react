import EventCategoryCard from "./EventCategoryCard";

const DATA = [
  {
    title: "Workshops & Training",
    description:
      "Hands-on sessions for skill development and professional growth.",
    color: "#DB841D",
    src: "/presentation.png",
  },
  {
    title: "Conferences & Summits",
    description:
      "Large gatherings focused on industry insights, networking, and thought leadership.",
    color: "#FC5252",
    src: "/conference.png",
  },
  {
    title: "Webinars & Online Events",
    description:
      " Virtual events for reaching a broader audience with presentations, panels, and interactive Q&A.",
    color: "#381DDB",
    src: "/webinar.png",
  },
  {
    title: "Networking & Meetups",
    description:
      "Casual events to connect professionals, enthusiasts, or communities.",
    color: "#C00096",
    src: "/network.png",
  },
  {
    title: "Product Launches & Showcases",
    description:
      "Events to unveil new products or services, offering demos and engaging with potential clients.",
    color: "#4197E5",
    src: "/product.png",
  },
];

const EventCategory = () => {
  return (
    <div className="min-h-[701px] pl-6 pr-6 bg-gradient-to-r from-[#1C001B] via-[#1C001B] to-[#000010] flex flex-col justify-center items-center gap-16">
      <div className="w-full flex justify-start items-center pl-[30%]">
        <h1 className="text-3xl font-poppins font-bold text-monkwhite mt-6">
          <span
            style={{
              background: "linear-gradient(135deg, #E233FF 0%, #FF6B00 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Explore
          </span>{" "}
          By Category
        </h1>
      </div>

      <div className="flex justify-around items-center flex-wrap w-full">
        {DATA.map((data, i) => (
          <EventCategoryCard
            key={i}
            title={data.title}
            description={data.description}
            src={data.src}
            color={data.color}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCategory;
