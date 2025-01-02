const EventBestShots = () => {
  const backgroundImageStyle = {
    backgroundImage: "url('/event_bestshot1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="h-[1265px] bg-gradient-to-r from-[#1C001B] via-[#1C001B] to-[#000010] text-white py-8 px-4 flex flex-col justify-start items-center">
      <div>
        <h1 className="text-[34px] text-monkwhite font-poppins font-bold p-8">
          See our Best Shots
        </h1>
        <div className="flex justify-center items-start gap-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-4">
              <div
                className="bg-monkred h-[262px] w-[324px] rounded-2xl"
                style={backgroundImageStyle}
              ></div>
              <div
                className="bg-monkred h-[262px] w-[204px] rounded-2xl"
                style={backgroundImageStyle}
              ></div>
              <div
                className="bg-monkred h-[262px] w-[204px] rounded-2xl"
                style={backgroundImageStyle}
              ></div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div
                className="bg-primary h-[263px] w-[325px] rounded-2xl"
                style={backgroundImageStyle}
              ></div>
              <div
                className="bg-primary h-[263px] w-[438px] rounded-2xl"
                style={backgroundImageStyle}
              ></div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div
                className="bg-monkdeepred h-[263px] w-[476px] rounded-2xl"
                style={backgroundImageStyle}
              ></div>
              <div
                className="bg-monkred h-[263px] w-[288px] rounded-2xl"
                style={backgroundImageStyle}
              ></div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-start gap-4">
              <div
                className="bg-monkwhite h-[331px] w-[324px] rounded-2xl"
                style={backgroundImageStyle}
              ></div>
              <div
                className="bg-monkwhite h-[482px] w-[324px] rounded-2xl"
                style={backgroundImageStyle}
              ></div>
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <div
                className="bg-secondary h-[482px] w-[324px] rounded-2xl"
                style={backgroundImageStyle}
              ></div>
              <div
                className="bg-secondary h-[331px] w-[324px] rounded-2xl"
                style={backgroundImageStyle}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBestShots;
