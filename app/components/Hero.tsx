import React, { useState } from 'react';
import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface HeroProps {
  images: ImageProps[];
}

const Hero: React.FC<HeroProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container relative">
      <div className="carousel w-full relative">
        {images.map((image, index) => (
          <div
            key={index}
            id={`item${index + 1}`}
            className={`carousel-item w-full relative ${index === activeIndex ? 'active' : ''}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority
              className="w-full"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2">
        <div className="flex justify-center">
          <div className="flex justify-center w-full gap-2">
            {images.map((_, index) => (
              <a
                key={index}
                href={`#item${index + 1}`}
                className={`w-4 h-4 rounded-full border-2 ${index === activeIndex ? 'bg-white' : 'bg-gray-400'}`}
                onClick={() => handleClick(index)}
              ></a>
            ))}
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
  );
};

export default Hero;
