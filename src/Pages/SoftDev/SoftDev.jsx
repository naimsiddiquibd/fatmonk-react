import Navbar from "../../Components/Shared/Navbar/Navbar";
import SoftDevHeader from "../../Components/SoftDev/SoftDevHeader";
import SoftDevService from "../../Components/SoftDev/SoftDevService";
import Footer from "../../Components/Footer/Footer";
import SoftDevTech from "../../Components/SoftDev/SoftDevTech";

const SoftDev = () => {
  return (
    <div>
      <Navbar />
      <SoftDevHeader />
      <SoftDevService />
      <SoftDevTech />
      <Footer />
    </div>
  );
};

export default SoftDev;
