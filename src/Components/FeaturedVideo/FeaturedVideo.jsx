import React from 'react';
import { motion, useScroll } from "framer-motion"

const FeaturedVideo = () => {
    const { scrollYProgress } = useScroll();

    return (
        <div className='overflow-hidden w-[100vw] lg:h-[100vh] h-[50vh]'>
            <img 
                src="https://res.cloudinary.com/deyd102hk/image/upload/v1730367148/348c5306be17d5c8676b87a7ac46a48c_zdj2nx.gif" 
                alt="Featured GIF" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
    );
};

export default FeaturedVideo;
