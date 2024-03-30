"use client";
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Alert from './components/Alert';
import Link from 'next/link';
import Button from './components/Button';
import Card from './components/Card';



const vacation = [
  {
    title: "Australia",
    description: "2246 properties",
    imagesrc: "/Rectangle 8.png",
  },
  {
    title: "Japan",
    description: "1278 properties",
    imagesrc: "/Rectangle 9.png",
  },
  {
    title: "New Zealand",
    description: "480 properties",
    imagesrc: "/Rectangle 10.png",
  },
  {
    title: 'Greece',
    description: "320 properties",
    imagesrc: "/Rectangle 11.png",
  }
];

const hotels = [
  {
    title: "Lakeside Motel Warefront",
    description: "2246 properties",
    imagesrc: "/Rectangle 8-1.png",
  },
  {
    title: "Recce Graham resort",
    description: "1278 properties",
    imagesrc: "/Rectangle 9-1.png",
  },
  {
    title: "Fireside Dinners",
    description: "480 properties",
    imagesrc: "/Rectangle 10-1.png",
  },
  {
    title: 'Oculous Inn Stay',
    description: "320 properties",
    imagesrc: "/Rectangle 11-1.png",
  },
  {
    title: "Lakeside Motel Warefront",
    description: "2246 properties",
    imagesrc: "/Rectangle 31.png",
  },
  {
    title: "Recce Graham resort",
    description: "1278 properties",
    imagesrc: "/Rectangle 32.png",
  },
  {
    title: "Fireside Dinners",
    description: "480 properties",
    imagesrc: "/Rectangle 33.png",
  },
  {
    title: 'Oculous Inn Stay',
    description: "320 properties",
    imagesrc: "/Rectangle 34.png",
  }
];



import {AppContext} from './context/index';

export default function Home(){

  const {isloggedIn} = React.useContext(AppContext);
  
  return (
<div>
      <Navbar isLoggedIn={isloggedIn} />
      <Hero />
      <div className='mt-8'>
        <Alert>
          <span>
            Check the latest COVID-19 restrictions before you travel. {" "}
          </span>
          <span className='text-blue-500 hover:underline'>
            <Link href='/'>Learn more</Link>
          </span>
        </Alert>
      </div>
      <div className='mx-auto mt-8 flex flex-col md:flex-row justify-between'>
        <span className='text-2xl font-bold md:mr-4 mb-4 md:mb-0'>Enjoy your dream vacation</span>
        <Button className='md:ml-4 btn-active btn-primary text-white'>View All</Button>
      </div>
      <div className='mx-auto mt-2 '>
        <div className='text-sm'>Plan and book our perfect trip with expert advice, travel tips, destination 
        </div><div>
          information and  inspiration from us</div>
      </div>

      <div className=' mt-8 flex flex-wrap justify-start'>
        {vacation.map((v) => (
          <div key={v.title} className="m-2 flex-none" style={{ maxWidth: '25%' }}>
            <Card title={v.title} description={v.description} imagesrc={v.imagesrc} width={244} height={220} />
          </div>
        ))}
      </div>

      <div className='mx-auto mt-8 flex flex-col md:flex-row justify-between'>
        <span className='text-2xl font-bold md:mr-4 mb-4 md:mb-0'>Popular hotels</span>
        <Button className='md:ml-4 btn-active btn-primary text-white'>View All</Button>
      </div>
      <div className='mx-auto mt-2 '>
        <div className='text-sm'>Plan and book our perfect trip with expert advice, travel tips, destination 
        </div><div>
          information and  inspiration from us</div>
      </div>

      <div className='mt-8  mb-10 flex flex-wrap justify-start'>
        {hotels.map((v , key) => (
          <div key={key} className="m-4 flex-none" style={{ maxWidth: '25%' }}>
            
            <Card title={v.title} description={v.description} imagesrc={v.imagesrc} width={243} height={300} />
          </div>
        ))}
      </div>
    </div>
  )
}
