import React from 'react';
import './mac.css';

const MacMockup = () => {
  return (
    <div className='md:w-[450px] w-[250px] bf-monkblack my-12'>
      <div className='container'>
        <div className='mockup mockup-macbook loaded opened'>
            <div className='part top'>
              <img src="/top2.png" alt="" className='top' />
              <img src="/macbody2.png" alt="" className='cover' />
              <video autoplay>
                <source src="disdhaka.mp4"></source>
              </video>
            </div>
            <div className='part bottom'>
              <img src="/macbody2.png" alt="" className='cover' />
              <img src="/bottom2.png" alt="" className='bottom' />
            </div>
        </div>
      </div>
    </div>
  );
};

export default MacMockup;