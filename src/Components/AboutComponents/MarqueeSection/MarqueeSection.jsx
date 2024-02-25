import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
    return (
        <div className='bg-monkblack'>
            <Marquee pauseOnHover="true" speed="150">
                <div className="card w-96 mt-20 rounded-none mr-5">
                    <figure><img src="/mar1.png" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 mt-20 rounded-none mr-5">
                    <figure><img src="/mar2.png" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 mt-20 rounded-none mr-5">
                    <figure><img src="/mar3.png" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 mt-20 rounded-none mr-5">
                    <figure><img src="/mar4.png" alt="Shoes" /></figure>
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueeSection;