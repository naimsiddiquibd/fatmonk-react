import RectangleCard from "./RectangleCard";
import SquareCard from "./SquareCard";

const ThatWorks = () => {
  return (
    <div className="min-h-[1000px] bg-[#010101]">
      <h1 className="text-monkwhite font-bold text-5xl text-center pt-20">
        Web Development That Works
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-20 mb-20">
        <div>
          <SquareCard
            img="webdev/hand1.png"
            title="Clients"
            description="Manage all aspects of your clients in one place."
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
          <RectangleCard
            img="webdev/cap.png"
            title="Projects"
            description="Deliver your projects on time and on budget."
          />
          <RectangleCard
            img="webdev/hand2.png"
            title="Prospects"
            description="Capture all your leads and opportunities in one place."
          />
        </div>

        <div>
          <SquareCard
            img="webdev/hand3.png"
            title="Team Work"
            description="Collaboration between your team members easily."
          />
        </div>
      </div>

      <div className="flex justify-center items-center px-5 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-12 py-20">
          <img src="webdev/screenshot1.png" alt="" />
          <div>
            <h2 className="font-bold text-3xl mb-10">
              Web Development That Works
            </h2>

            <div className="flex justify-start items-center gap-3 mb-6">
              <img src="webdev/point.png" alt="" />
              <p>Custom Web Application</p>
            </div>
            <div className="flex justify-start items-center gap-3 mb-6">
              <img src="webdev/point.png" alt="" />
              <p>E-commerce Development</p>
            </div>
            <div className="flex justify-start items-center gap-3 mb-6">
              <img src="webdev/point.png" alt="" />
              <p>CMS Integration</p>
            </div>
            <div className="flex justify-start items-center gap-3 mb-6">
              <img src="webdev/point.png" alt="" />
              <p>Frontend Engineering</p>
            </div>
            <div className="flex justify-start items-center gap-3 mb-6">
              <img src="webdev/point.png" alt="" />
              <p>Backend Architecture</p>
            </div>
            <div className="flex justify-start items-center gap-3 mb-6">
              <img src="webdev/point.png" alt="" />
              <p>Performance & SEO Optimization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThatWorks;
