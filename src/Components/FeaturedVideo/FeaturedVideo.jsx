import React from 'react';
import { motion, useScroll } from "framer-motion"

const FeaturedVideo = () => {
    const { scrollYProgress } = useScroll();

    return (
        <div>
            <video className='w-full' autoPlay loop muted>
                <source src="https://res.cloudinary.com/dnyx4cy8o/video/upload/v1708861899/q6eybo5zdynm6hvc7nzv.mp4" type='video/mp4' />
            </video>
        </div>
    );
};

export default FeaturedVideo;