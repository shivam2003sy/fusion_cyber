// Card Component

import React from 'react';
import Image from 'next/image';

interface CardProps {
    title: string;
    description: string;
    imagesrc: string;
    height?: number;
    width?: number;
}

const Card = ({
    title,
    description,
    imagesrc,
    height,
    width 
}: CardProps) => {
    return (
        <div className="card bg-base-100  rounded-lg ">
            <div className="">
                <Image src={imagesrc} alt={title}  
                height={height}
                width={width}
                />
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}

export default Card;
