import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import UiUxHero from '../../Components/UiUxComponents/UiUxHero';
import ConnectAudience from '../../Components/UiUxComponents/ConnectAudience';
import UiUxCustomer from '../../Components/UiUxComponents/UiUxCustomer';
import OurWorks from '../../Components/OurWorks/OurWorks';
import MarqueeSection from '../../Components/AboutComponents/MarqueeSection/MarqueeSection';
import CaseStudies from '../../Components/AboutComponents/CaseStudies/CaseStudies';
import Feedback from '../../Components/Feedback/Feedback';
import Contact from '../../Components/AboutComponents/Contact/Contact';
import StickyIcons from '../../Components/StickyIcons/StickyIcons';

const UiUx = () => {
    return (
        <div>
            <Navbar></Navbar>
            <StickyIcons></StickyIcons>
            <UiUxHero></UiUxHero>
            <ConnectAudience></ConnectAudience>
            <UiUxCustomer></UiUxCustomer>
            <OurWorks></OurWorks>
            <MarqueeSection></MarqueeSection>
            <CaseStudies></CaseStudies>
            <Feedback></Feedback>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default UiUx;