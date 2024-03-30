import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <Link href="/" className="navbar-start">      
        <Image src={"Vectorlogo.svg"} alt="Company Logo" width={24} height={24} />
        <span className="text-xl ml-2">Travel Companion</span>
      </Link>
      
    </div>
  );
};

export default Navbar;
