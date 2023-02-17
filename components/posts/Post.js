import React from "react";

const Post = ({ post }) => {
  const { name, userImg, img, caption } = post;
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt="" />
    </div>
  );
};

export default Post;
