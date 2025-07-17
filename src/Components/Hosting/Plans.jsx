import React, { useState } from "react";

const Plans = () => {
  const [planType, setPlanType] = useState("Pro");
  const [modalTitle, setModalTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handlePackageClick = (ssd, price) => {
    setModalTitle(`${ssd} - ${price}`);
    document.getElementById("my_modal_1").showModal();
  };

  const sendReqHandler = () => {
    if (!name || name === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (
      !email ||
      email === "" ||
      !email.includes("@") ||
      !email.includes(".com")
    ) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!phone || phone === "") {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    if (name && email && phone) {
      console.log(name, email, phone);
    }
  };

  const basicPlans = [
    {
      location: "Nairobi",
      ssd: "2 GB SSD",
      price: "3,000 BDT /yr",
      features: [
        "2 GB SSD",
        "2GB RAM",
        "50GB Bandwidth",
        "Unlimited Email",
        "Unlimited Sub Domain",
        "Host 1 Domain",
      ],
    },
    {
      location: "Tokyo",
      ssd: "5 GB SSD",
      price: "4,500 BDT /yr",
      features: [
        "5 GB SSD",
        "2GB RAM",
        "50GB Bandwidth",
        "Unlimited Email",
        "Unlimited Sub Domain",
        "Host 1 Domain",
      ],
    },
    {
      location: "Lisbon",
      ssd: "10 GB SSD",
      price: "6,400 BDT /yr",
      features: [
        "10 GB SSD",
        "2GB RAM",
        "50GB Bandwidth",
        "Unlimited Email",
        "Unlimited Sub Domain",
        "Host 1 Domain",
      ],
    },
    {
      location: "Dever",
      ssd: "20 GB SSD",
      price: "10,200 BDT /yr",
      features: [
        "20 GB SSD",
        "2GB RAM",
        "50GB Bandwidth",
        "Unlimited Email",
        "Unlimited Sub Domain",
        "Host 1 Domain",
      ],
    },
    {
      location: "Rio",
      ssd: "40 GB SSD",
      price: "14,400 BDT /yr",
      features: [
        "40 GB SSD",
        "2GB RAM",
        "50GB Bandwidth",
        "Unlimited Email",
        "Unlimited Sub Domain",
        "Host 1 Domain",
      ],
    },
    {
      location: "Professor",
      ssd: "60 GB SSD",
      price: "22,000 BDT /yr",
      features: [
        "60 GB SSD",
        "2GB RAM",
        "50GB Bandwidth",
        "Unlimited Email",
        "Unlimited Sub Domain",
        "Host 1 Domain",
      ],
    },
  ];

  const premiumPlans = [
    {
      location: "Nairobi",
      ssd: "5 GB SSD",
      price: "6,000 BDT /yr",
      features: [
        "5 GB SSD",
        "2GB RAM",
        "50GB Bandwidth",
        "Unlimited Email",
        "Unlimited Sub Domain",
        "Host 1 Domain",
      ],
    },
    {
      location: "Tokyo",
      ssd: "10 GB SSD",
      price: "9,600 BDT /yr",
      features: [
        "10 GB SSD",
        "2GB RAM",
        "50GB Bandwidth",
        "Unlimited Email",
        "Unlimited Sub Domain",
        "Host 1 Domain",
      ],
    },
    {
      location: "Lisbon",
      ssd: "20 GB SSD",
      price: "14,400 BDT /yr",
      features: [
        "20 GB SSD",
        "2GB RAM",
        "50GB Bandwidth",
        "Unlimited Email",
        "Unlimited Sub Domain",
        "Host 1 Domain",
      ],
    },
    {
      location: "Dever",
      ssd: "40 GB SSD",
      price: "20,400 BDT /yr",
      features: [
        "40 GB SSD",
        "2GB RAM",
        "50GB Bandwidth",
        "Unlimited Email",
        "Unlimited Sub Domain",
        "Host 1 Domain",
      ],
    },
    {
      location: "Professor",
      ssd: "60 GB SSD",
      price: "25,600 BDT /yr",
      features: [
        "60 GB SSD",
        "2GB RAM",
        "50GB Bandwidth",
        "Unlimited Email",
        "Unlimited Sub Domain",
        "Host 1 Domain",
      ],
    },
  ];

  const plans = planType === "Standard" ? basicPlans : premiumPlans;

  return (
    <div className="flex flex-col items-center justify-center bg-[#0E022C] py-32 mx-auto">
      <div>
        <div className="mb-10">
          <h2
            style={{
              background: "linear-gradient(to right, #FFCC33, #E233FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-[50px] text-center font-semibold"
          >
            SSD Cloud Hosting ({planType === "Standard" ? "Standard" : "Pro"})
            Plan
          </h2>
          <p className="text-[20px] font-semibold text-monkwhite text-center">
            100% SSD Disks, RAM 2GB with I/O Usage 2MB/s
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-0 bg-monkwhite px-2 py-2 rounded-full">
            <button
              className={`text-sm w-28 ${
                planType === "Pro"
                  ? "font-semibo2d text-monkwhite bg-gradient-to-r to-[#FF003D] from-[#4444C4] px-6 py-2 rounded-full"
                  : "text-monkblack px-6 py-2"
              }`}
              onClick={() => setPlanType("Pro")}
            >
              Pro
            </button>
            <button
              className={`text-sm ${
                planType === "Standard"
                  ? "font-semibold text-monkwhite bg-gradient-to-r to-[#FF003D] from-[#4444C4] px-6 py-2 rounded-full"
                  : "text-monkblack px-6 py-2"
              }`}
              onClick={() => setPlanType("Standard")}
            >
              Standard
            </button>
          </div>
        </div>

        <div className="lg:w-[1100px] flex flex-wrap items-center justify-center gap-10 mt-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative hover:scale-110 transition-all lg:min-w-[307px]"
            >
              <div className="absolute -top-0.1 lg:-top-1 flex justify-center w-full z-10">
                <button
                  className="
                    flex items-center gap-3 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
                    font-poppins font-medium px-7 md:px-7 md:py-2 py-2 rounded-full
                    text-[12px] text-monkwhite md:text-[14px]
                    transition-all duration-500 hover:bg-gradient-to-r hover:from-[#FF003D] hover:to-[#4444C4] border-2 border-monkwhite
                  "
                >
                  {plan.location}
                </button>
              </div>
              <div className="text-center bg-[#191139] p-5 rounded-xl mt-6 border-2 border-monkwhite border-opacity-5">
                <h2 className="text-2xl text-monkwhite">{plan.ssd}</h2>
                <h1
                  style={{
                    background: "linear-gradient(to right, #FFCC33, #E233FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="text-4xl text-monkwhite font-bold"
                >
                  {plan.price}
                </h1>
                <div className="divider divider-default"></div>
                <div className="flex flex-col gap-5">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <img className="h-6 w-6" src="/check-circle.png" alt="" />
                      <p className="text-sm text-monkwhite">{feature}</p>
                    </div>
                  ))}
                </div>

                <div
                  className="flex justify-center mt-5 cursor-pointer"
                  onClick={() => handlePackageClick(plan.ssd, plan.price)}
                >
                  <button
                    className="
                      flex items-center gap-6 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
                      font-poppins font-medium px-1 md:px-2 md:py-1 py-1 rounded-full
                      text-[12px] text-monkwhite md:text-[14px]
                      hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D]
                      cursor-pointer
                    "
                  >
                    <span className="ml-4">Order Now</span>
                    <img className="h-8 w-8" src="/button-icon.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <p className="text-[25px] font-semibold text-monkwhite text-center">
          Included With Every Plan
        </p>
      </div>
      <div className="lg:w-[1080px] flex flex-wrap items-center justify-center gap-3 mt-5 mx-1 lg:mx-0">
        {[
          "100% SSD Disks",
          "CloudLinux",
          "RAM 2GB",
          "50GB Bandwidth",
          "Softaculous",
          "I/O Usage 2MB/s",
          "Daily Backup",
          "Free SSL Certificates",
        ].map((item, index) => (
          <div
            key={index}
            className="border-2 border-monkwhite text-monkwhite rounded-full px-6 py-3 inline-flex items-center gap-2 mt-2 hover:scale-110 transition-all"
          >
            <img src="/tik.png" alt="" />
            <p>{item}</p>
          </div>
        ))}
      </div>

      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{modalTitle}</h3>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-transparent border-b border-[#fff]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/70"
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className="pl-3 text-monkred">Enter your name!</p>}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-transparent border-b border-[#fff]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/70"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className="pl-3 text-monkred">Enter a valid email!</p>
            )}
            <input
              type="number"
              placeholder="Phone"
              className="w-full p-3 bg-transparent border-b border-[#fff]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/70"
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && (
              <p className="pl-3 text-monkred">Enter your phone!</p>
            )}

            <div className="flex justify-end gap-4 mt-4">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
              <button className="btn" onClick={sendReqHandler}>
                Send Request
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Plans;
