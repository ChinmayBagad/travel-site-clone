import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const openNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <nav className="flex justify-between items-center h-20 px-4">
      <div>
        <h1 className={logo ? "hidden" : "block"} onClick={openNav}>
          BEACHES.
        </h1>
      </div>

      {/* Laptop/Pc Menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch size={20} className="mr-2" />
        <BsPerson size={20} />
      </div>

      {/* HamBurger Menu */}
      <div className="md:hidden z-10" onClick={openNav}>
        {nav ? (
          <AiOutlineClose size={20} className="text-black" />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* DropDown Menu */}
      <div
        onClick={openNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col md:hidden"
            : "absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col md:hidden"
        }
      >
        <ul>
          <h1>BEACHES.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destination</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon hover:text-[#1877F2]" />{" "}
            <FaTwitter className="icon hover:text-[#1DA1F2]" />{" "}
            <FaYoutube className="icon hover:text-[#FF0000]" />{" "}
            <FaPinterest className="icon hover:text-[#E60023]" />{" "}
            <FaInstagram className="icon hover:text-[#bc2a8d]" />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
