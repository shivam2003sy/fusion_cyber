import React from 'react';
import Image from 'next/image';


const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">      
        <Image src={"Vectorlogo.svg"} alt="Company Logo" width={24} height={24} />
        <span className="text-xl ml-2">Travel Companion</span>
      </div>
      
    </div>
  );
};

export default Navbar;
