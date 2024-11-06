import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BrandDesignHero from '../../Components/BrandDesignComponents/BrandDesignHero';
import BrandCustomer from '../../Components/BrandDesignComponents/BrandCustomer';
import GridGallery from '../../Components/AboutComponents/GridGallery/GridGallery';
import OurWorks from '../../Components/OurWorks/OurWorks';
import Feedback from '../../Components/Feedback/Feedback';
import Contact from '../../Components/AboutComponents/Contact/Contact';
import MarqueeSection from '../../Components/AboutComponents/MarqueeSection/MarqueeSection';
import StickyIcons from '../../Components/StickyIcons/StickyIcons';
import WhatYouWillGet from '../../Components/Hosting/WhatYouWillGet';
import HostingHero from '../../Components/Hosting/HostingHero';
import Plans from '../../Components/Hosting/Plans';

const HostingPage = () => {
    return (
        <div className='bg-monkblack'>
            <Navbar></Navbar>
            <StickyIcons></StickyIcons>
            <HostingHero></HostingHero>
            <WhatYouWillGet></WhatYouWillGet>
            <Plans></Plans>
            <Footer></Footer>
        </div>
    );
};

export default HostingPage;