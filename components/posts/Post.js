import Image from "next/image";
import React from "react";
import { BsThreeDots, BsChatDots } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
const Post = ({ post }) => {
  const { name, userImg, img, caption } = post;
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5 justify-between ">
        <Image
          src={userImg}
          className=" cursor-pointer h-12 w-12 object-cover rounded-full mr-3 p-1  border  "
          width=""
          height=""
          alt={name}
        />
        <p className="flex-1 font-bold">{name}</p>

        <BsThreeDots className="h-5" />
      </div>
      {/* Post Image */}
      <img src={img} className="object-cover w-full" alt={name} />
      {/* Post button */}
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <AiOutlineHeart className="btn" />
          <BsChatDots className="btn" />
        </div>
        <BiBookmark className="btn" />
      </div>
    </div>
  );
};

export default Post;
