import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
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
      <img src={img} className="object-cover w-full" alt={name} />
    </div>
  );
};

export default Post;
