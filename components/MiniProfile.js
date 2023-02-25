import Image from "next/image";
import React from "react";
import userImg from "../public/tanvir 2.png";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      {" "}
      <Image
        src={userImg}
        className=" cursor-pointer h-16 w-16 object-cover rounded-full mr-3 p-1  border  "
        width=""
        height=""
        alt="this is image"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">Tanvir Hossan</h2>
        <p className="text-sm text-gray-400">Wellcome to Instagram</p>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
