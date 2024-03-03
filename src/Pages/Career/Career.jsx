import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import CareerHero from '../../Components/CareerComponents/CareerHero';
import CareerJobs from '../../Components/CareerComponents/CareerJobs';
import Contact from '../../Components/AboutComponents/Contact/Contact';
import StickyIcons from '../../Components/StickyIcons/StickyIcons';

const Career = () => {
    return (
        <div>
            <Navbar></Navbar>
            <StickyIcons></StickyIcons>
            <CareerHero></CareerHero>
            <CareerJobs></CareerJobs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Career;