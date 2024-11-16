import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import WorkHero from '../../Components/WorkComponents/WorkHero';
import OurWorks from '../../Components/OurWorks/OurWorks';
import MarqueeSection from '../../Components/AboutComponents/MarqueeSection/MarqueeSection';
import GridGallery from '../../Components/AboutComponents/GridGallery/GridGallery';
import Feedback from '../../Components/Feedback/Feedback';
import Contact from '../../Components/AboutComponents/Contact/Contact';
import StickyIcons from '../../Components/StickyIcons/StickyIcons';
import WorksHero2 from '../../Components/Works/WorksHero2';
import OurWorks2 from '../../Components/OurWorks2/OurWorks2';
import PlansHero from '../../Components/Plans/PlansHero/PlansHero';
import CreativeServices from '../../Components/Plans/CreativeServices/CreativeServices';
import FlexibleHourly from '../../Components/Plans/FlexibleHourly/FlexibleHourly';

const Plans = () => {
    return (
        <div className='bg-[#000000]'>
           <Navbar></Navbar>
           <StickyIcons></StickyIcons>
           {/* <WorkHero></WorkHero> */}
           <PlansHero></PlansHero>
           <CreativeServices></CreativeServices>
           <FlexibleHourly></FlexibleHourly>
           {/* <OurWorks></OurWorks> */}
           <Footer></Footer>
        </div>
    );
};

export default Plans;