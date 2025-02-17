import { useState } from "react";
import ButtonWhite from "../../Shared/Button/ButtonWhite";
import CalendlyComponent from "./ui/CalendlyComponent";

const ContactForm = () => {
  const [name, setName] = useState();
  const [organization, setOrganization] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const [nameError, setNameError] = useState(false);
  const [orgError, setOrgError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [subError, setSubError] = useState(false);
  const [msgError, setMsgError] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const oranizationHandler = (e) => {
    setOrganization(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Form validity
    const errors = {
      nameError: !name || name === "",
      orgError: !organization || organization === "",
      emailError: !email || email === "",
      phoneError: !phone || phone === "",
      subError: !subject || subject === "",
      msgError: !message || message === "",
    };

    setNameError(errors.nameError);
    setOrgError(errors.orgError);
    setEmailError(errors.emailError);
    setPhoneError(errors.phoneError);
    setSubError(errors.subError);
    setMsgError(errors.msgError);

    const hasErrors = Object.values(errors).some((error) => error);

    if (!hasErrors) {
      console.log({ name, organization, email, phone, subject, message });
    } else {
      console.log("Please fill out the form");
    }
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center text-monkwhite bg-monkblack" //bg-gradient-to-b from-[#230914] to-[#960062]
      style={{
        backgroundImage: "url(/contact_grad_cover.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-[#fff]/10 backdrop-blur-md p-8 rounded-2xl mt-[100px] mb-[110px] ">
        {/* Left Section - Form */}
        <div className="flex-1 p-6 text-white">
          <h2 className="text-2xl font-bold mb-4 text-monkwhite">
            Send Email to us or book a discussion Slot
          </h2>
          <form className="space-y-6" onSubmit={onSubmitHandler}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 bg-transparent border-b border-[#fff]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/70"
                  onChange={nameHandler}
                />
                {nameError && (
                  <p className="text-monkred mt-2">Enter your name!</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Organization Name"
                  className="w-full p-3 bg-transparent border-b border-[#fff]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/70"
                  onChange={oranizationHandler}
                />
                {orgError && (
                  <p className="text-monkred mt-2">Enter your organization!</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={emailHandler}
                  className="w-full p-3 bg-transparent border-b border-[#fff]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/70"
                />
                {emailError && (
                  <p className="text-monkred mt-2">Enter your email!</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  onChange={phoneHandler}
                  className="w-full p-3 bg-transparent border-b border-[#fff]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/70"
                />
                {phoneError && (
                  <p className="text-monkred mt-2">Enter your phone number!</p>
                )}
              </div>
            </div>

            <div>
              <p className="mb-2">Select Subject?</p>
              <div className="flex flex-wrap gap-4">
                {[
                  "General Inquiry",
                  "Project Discussion",
                  "About Service",
                  "About Package Plan",
                ].map((subject) => (
                  <label key={subject} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="subject"
                      value={subject}
                      className="text-pink-500 focus:ring-pink-400"
                      onChange={subjectHandler}
                    />
                    <span>{subject}</span>
                  </label>
                ))}
              </div>
              {subError && (
                <p className="text-monkred mt-2">Choose your subject!</p>
              )}
            </div>

            <textarea
              placeholder="Write your message.."
              rows="4"
              onChange={messageHandler}
              className="w-full p-3 bg-transparent border border-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/70"
            ></textarea>
            {msgError && (
              <p className="text-monkred mt-2">Enter your message!</p>
            )}

            <ButtonWhite type="submit">Send Email</ButtonWhite>
          </form>
        </div>

        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full h-full bg-white/20 rounded-lg flex items-center justify-center text-white text-xl">
            <CalendlyComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
