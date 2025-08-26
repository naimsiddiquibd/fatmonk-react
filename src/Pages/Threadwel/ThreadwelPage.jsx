import Navbar from "../../Components/Shared/Navbar/Navbar";
import StickyIcons from "../../Components/StickyIcons/StickyIcons";
import { OneStop } from "../../Components/Threadwel/OneStop";
import ThreadHeader from "../../Components/Threadwel/ThreadHeader";
import ThreadwelFeatures from "../../Components/Threadwel/ThreadwelFeatures";
import WhatSection from "../../Components/Threadwel/WhatSection";
import Footer from "../../Components/Footer/Footer";
import ThreadImageSection from "../../Components/Threadwel/ThreadImageSection";

const ThreadwelPage = () => {
  return (
    <div className="bg-[#000000]">
      <Navbar type={"black"} />
      <StickyIcons />
      <ThreadHeader />
      <OneStop />
      <WhatSection />
      <ThreadwelFeatures />
      <ThreadImageSection />
      <Footer />
    </div>
  );
};

export default ThreadwelPage;
