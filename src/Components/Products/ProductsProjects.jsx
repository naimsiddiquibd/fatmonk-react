import ProjectCard from "../Shared/ProjectsCard/ProjectCard";

const DUMMY_DATA = [
  {
    title: "Tikimonk",
    type: "Event Platform",
    description:
      "TikiMonk is a platform designed to streamline the management of events, workshops, webinars, and conferences. It offers tools for organizing, scheduling ...",

    img: "/tikimonk_product_img.png",
  },
  {
    title: "QR",
    type: "Restaurant menu scanner App",
    description:
      "TikiMonk is a platform designed to streamline the management of events, workshops, webinars, and conferences. It offers tools for organizing, scheduling ...",
    img: "/qr_product_img.png",
  },
  {
    title: "Tikimonk",
    type: "Event Platform",
    description:
      "TikiMonk is a platform designed to streamline the management of events, workshops, webinars, and conferences. It offers tools for organizing, scheduling ...",

    img: "/tikimonk_product_img.png",
  },
  {
    title: "QR",
    type: "Restaurant menu scanner App",
    description:
      "TikiMonk is a platform designed to streamline the management of events, workshops, webinars, and conferences. It offers tools for organizing, scheduling ...",

    img: "/qr_product_img.png",
  },
];

const ProductsProjects = () => {
  return (
    <div className="bg-monkwhite">
      <h1 className="text-[43px] text-monkblack px-[10%] py-[80px]">
        Projects 😎🐱‍💻
      </h1>

      <div className="">
        <div className="flex flex-wrap gap-2">
          {DUMMY_DATA.map((item, i) => (
            <ProjectCard
              key={i}
              title={item.title}
              type={item.type}
              img={item.img}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsProjects;
