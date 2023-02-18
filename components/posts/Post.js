import Image from "next/image";
import React from "react";
import { BsThreeDots, BsChatDots, BsFillEmojiSmileFill } from "react-icons/bs";
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
      {/* Post Comment  */}
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{name}</span>
        {caption}
      </p>
      {/* Post Action  */}
      <form action="" className="flex items-center space-x-4 p-4">
        <BsFillEmojiSmileFill className="h-7" />
        <input type="text" className="border-none flex-1 focus:ring-0" placeholder="Enter your comment..." />
        <button className="text-blue-400 font-bold">Post</button>
      </form>
    </div>
  );
};

export default Post;
