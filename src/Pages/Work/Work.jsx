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

const Work = () => {
    return (
        <div className='bg-[#000000]'>
           <Navbar></Navbar>
           <StickyIcons></StickyIcons>
           {/* <WorkHero></WorkHero> */}
           <WorksHero2></WorksHero2>
           {/* <OurWorks></OurWorks> */}
           <OurWorks2></OurWorks2>
           {/* <MarqueeSection></MarqueeSection>
     
           <Feedback></Feedback>
           <Contact></Contact> */}
           <Footer></Footer>
        </div>
    );
};

export default Work;