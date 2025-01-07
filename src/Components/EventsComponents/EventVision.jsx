const EventVision = () => {
  return (
    <div className="h-[822px] sm:h-auto py-20 bg-gradient-to-r from-[#1C001B] via-[#1C001B] to-[#000010] flex gap-10 justify-center items-center">
      <div className="flex flex-col gap-16 justify-between items-center lg:flex-row sm:flex-col ">
        <div className="w-[488px] text-monkwhite">
          <h1 className="text-4xl font-poppins font-bold mb-5">
            Turn Your Vision into Reality
          </h1>
          <p className="text-xl font-normal mb-5">
            With Fatmonk’s Event Services, you gain more than just an event
            management provider—you gain a committed partner focused on creating
            unforgettable experiences. From meticulous planning to seamless
            execution, we ensure every detail aligns with your vision and goals.
            Our team handles the logistics, technology, and support so you can
            concentrate on what matters most—engaging with your attendees and
            delivering an impactful, memorable event. Let us bring your event to
            life with expertise and precision.
          </p>
          <p className="text-xl font-normal mb-5">
            Let me know if this captures what you’re looking for or if you’d
            like more adjustments!
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex gap-4 justify-center items-center">
            <img src="/event_vision1.png" />
            <img src="/event_vision2.png" />
          </div>

          <div className="flex gap-4 justify-center items-center">
            <img src="/event_vision3.png" />
            <img src="/event_vision4.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventVision;
