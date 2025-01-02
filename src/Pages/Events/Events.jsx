import EventBestShots from "../../Components/EventsComponents/EventBestShots";
import EventCategory from "../../Components/EventsComponents/EventCategory";
import EventHero from "../../Components/EventsComponents/EventHero";
import EventVision from "../../Components/EventsComponents/EventVision";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import StickyIcons from "../../Components/StickyIcons/StickyIcons";

const Events = () => {
  return (
    <div>
      <Navbar />
      <StickyIcons />
      <EventHero />
      <EventCategory />
      <EventVision />
      <EventBestShots />
      <Footer />
    </div>
  );
};

export default Events;
