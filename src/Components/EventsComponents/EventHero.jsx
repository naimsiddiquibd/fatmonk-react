import GradientButton from "../Shared/Button/GradientButton";

const EventHero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/event_hero.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className=" flex flex-col justify-between items-center max-w-9xl">
            <h1 className="mb-5 text-[57px] font-bold font-poppins text-monkwhite">
              Make Your Events Memorable with Fatmonk{" "}
            </h1>
            <p className="mb-5 text-sm align-center text-monkwhite">
              At Fatmonk, we understand that organizing an event takes
              precision, creativity, and seamless management. Our Event Services
              are designed to simplify the process, helping you focus on
              creating meaningful experiences for your attendees. From
              conferences and workshops to webinars and corporate events, we
              offer end-to-end support for all your event needs.
            </p>

            <GradientButton>Get in Touch</GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
