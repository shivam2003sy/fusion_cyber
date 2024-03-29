
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div>
    <Navbar isLoggedIn={true} />
    {/* <div className="container mx-auto"> */}
      <Hero/>
    {/* </div> */}
    </div>  
  );
}
