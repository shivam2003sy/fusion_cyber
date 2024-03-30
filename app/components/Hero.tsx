import React from 'react';
import Image from 'next/image';

import './hero.css';

const Hero = () => {
  return (
  
      <div className="carousel w-full relative">
        <div id="item1" className="carousel-item w-full relative">
          <Image
            src={'hero.svg'}
            alt="Picture of hero"
            width={1240}
            height={600}
            priority  
            className="w-full"
          />
          <div className="absolute bottom-0 w-full text-center mb-2">
            <div className="flex justify-center">
              <div className="flex justify-center w-full gap-2">
                <a href="#item1" className="w-4 h-4 rounded-full border-2 border-white bg-white "></a>
                <a href="#item2" className="w-4 h-4 rounded-full border-2 border-gray-400 bg-gray-400"></a>
                <a href="#item3" className="w-4 h-4 rounded-full border-2 border-gray-400 bg-gray-400"></a>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-white  font-Abel mb-2 text-3xl  ">Enjoy Your Dream Vacation</h2>
            <p className="text-white font-inter  sm:text-20px hidden sm:block">
              Plan and book our perfect trip with expert advice, travel tips, 
              <span>destination information, and inspiration from us.
              </span>
            </p>
          </div>
        </div>
      </div>
  );
};

export default Hero;
