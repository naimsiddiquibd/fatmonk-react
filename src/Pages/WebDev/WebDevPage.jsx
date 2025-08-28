import DropUs from "../../Components/DropUs/DropUs";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import ThatWorks from "../../Components/WebDev/ThatWorks";
import WebDevFeatures from "../../Components/WebDev/WebDevFeatures";
import WebDevHeader from "../../Components/WebDev/WebDevHeader";
import WebDevProductivity from "../../Components/WebDev/WebDevProductivity";

const WebDevPage = () => {
  return (
    <div>
      <Navbar />
      <WebDevHeader />
      <ThatWorks />
      <WebDevFeatures />
      <WebDevProductivity />
      <DropUs />
      <Footer />
    </div>
  );
};

export default WebDevPage;
