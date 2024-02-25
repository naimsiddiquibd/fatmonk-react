import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import StickyIcons from '../../Components/StickyIcons/StickyIcons';
import Hero from '../../Components/Hero/Hero';
import TopServices from '../../Components/TopServices/TopServices';
import FeaturedVideo from '../../Components/FeaturedVideo/FeaturedVideo';
import Enhancing from '../../Components/Enhancing/Enhancing';
import OurWorks from '../../Components/OurWorks/OurWorks';
import Revitalize from '../../Components/Revitalize/Revitalize';
import Counter from '../../Components/Counter/Counter';
import Feedback from '../../Components/Feedback/Feedback';
import HeroBottom from '../../Components/HeroBottom/HeroBottom';
import Learn from '../../Components/Learn/Learn';
import FAQ from '../../Components/FAQ/FAQ';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <StickyIcons></StickyIcons>
            <Hero></Hero>
            <TopServices></TopServices>
            <FeaturedVideo></FeaturedVideo>
            <Enhancing></Enhancing>
            <OurWorks></OurWorks>
            <Revitalize></Revitalize>
            <Counter></Counter>
            <Feedback></Feedback>
            <HeroBottom></HeroBottom>
            <Learn></Learn>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;