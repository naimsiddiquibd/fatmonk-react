import React from 'react';

const GridGallery = () => {
    return (
        <section className="overflow-hidden text-gray-700">
      <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://res.cloudinary.com/david-j-forer/image/upload/c_scale,w_888/v1638083092/IMG_1012_jalcgv.jpg" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://res.cloudinary.com/david-j-forer/image/upload/v1638083091/pic12_mncuta.jpg" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://res.cloudinary.com/david-j-forer/image/upload/c_scale,w_1135/v1638083103/family_jp5kws.jpg" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://res.cloudinary.com/david-j-forer/image/upload/v1638083091/Kalpana-David_npx3xp.jpg" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://res.cloudinary.com/david-j-forer/image/upload/v1638084913/KIEH3285_vljmgc.jpg" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://res.cloudinary.com/david-j-forer/image/upload/v1638084913/IMG-20190525-WA0000_mftkyc.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default GridGallery;