import Image from "next/image";
import React from "react";
import { AiOutlineSearch, AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import img1 from "/public/tanvir 2.png";

const Header = () => {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl m-auto px-4">
        {/* Left */}
        <div className="cursor-pointer h-24 w-28 relative hidden lg:inline-grid items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            width="200"
            height="20"
            className="object-contain inline"
            alt="logo"
          />
        </div>
        <div className="cursor-pointer h-24 w-24 relative inline-grid items-center lg:hidden">
          <Image
            src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png"
            width="100"
            height="20"
            className="object-contain"
            alt="logo"
          />
        </div>

        {/* Middle */}
        <div className="relative">
          <div className="absolute top-[11px] left-2">
            <AiOutlineSearch className="h-5 text-[20px] text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="text-gray-500 bg-gray-50 pl-8 rounded-md focus:ring-black focus:border-black"
          />
        </div>
        {/* Right */}

        <div className="flex space-x-4 h-full items-center">
          <AiFillHome className="hidden text-[22px] md:inline-block h-6 cursor-pointer hover:scale-125 transition-transform duration-300 ease-out" />
          <AiFillPlusCircle className="h-7 text-[22px] cursor-pointer hover:scale-125 transition-transform duration-300 ease-out" />

          <Image src={img1} className=" cursor-pointer rounded-full" width="40" height="40" alt="This is image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
