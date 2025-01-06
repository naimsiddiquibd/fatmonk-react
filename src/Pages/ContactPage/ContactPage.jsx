import React from "react";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Components/AboutComponents/Contact/Contact";
import ContactForm from "../../Components/AboutComponents/Contact/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Contact></Contact> */}
      <ContactForm />
      <Footer></Footer>
    </div>
  );
};

export default ContactPage;
