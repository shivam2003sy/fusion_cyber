import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';
import Button from './Button';
interface NavbarProps {
  isLoggedIn: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  return (
    <div className="navbar bg-base-100">
      {/* Logo and company name */}
      <div className="navbar-start">      
        <Image src={"Vectorlogo.svg"} alt="Company Logo" width={24} height={24} />
        <span className="text-xl ml-2">Travel Companion</span>
      </div>
      {/* Navigation links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink  active={true}  href="/">Home</NavLink></li>
          <li><NavLink href="/discover">Discover</NavLink></li>
          <li><NavLink href="/activities">Activities</NavLink></li>
          <li><NavLink href="/about">About</NavLink></li>
          <li><NavLink href="/contact">Contact</NavLink></li>
        </ul>
      </div>
      {/* Conditional rendering for buttons */}
      <div className="navbar-end">
        {isLoggedIn ? (
          <Link href="/login">
            <Button className="btn-active btn-primary text-white ">Dashboard</Button>
          </Link>
        ) : (
          <div className='
          flex
          justify-between
          items-center
          space-x-1'
          >
            <Link href="/register">
              <Button className="btn-outline  btn-primary   text-primary">Register</Button>
            </Link>
            <Link href="/login">
              <Button  
              className="btn-active btn-primary text-white">Sign In</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
