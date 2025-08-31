const ThreadHeader = () => {
  return (
    <>
      <div className="h-[1200px] bg-monkwhite pt-[120px] pb-[120px]">
        <div
          className="h-full lg:w-full flex md:justify-end sm:justify-center items-center"
          style={{
            backgroundImage: "url('/threadwel/threadwel_header.png')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-[770px] h-[350px] md:pr-40 sm:pr-0 flex flex-col justify-center md:justify-between md:items-end sm:items-center">
            <h1 className="text-3xl md:text-5xl font-bold md:text-right sm:text-center text-[#454545]">
              Market Place For RMG and Garments Industry
            </h1>

            <div>
              <p className="md:text-right sm:text-center font-bold text-xl md:text-4xl text-[#454545]">
                UI/UX Design
              </p>
              <p className="md:text-right sm:text-center font-bold text-xl md:text-4xl text-[#454545]">
                Website Development
              </p>
              <p className="md:text-right sm:text-center font-bold text-xl md:text-4xl text-[#454545]">
                Software Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreadHeader;
