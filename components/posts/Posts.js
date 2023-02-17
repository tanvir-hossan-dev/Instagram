import React from "react";
import Post from "./Post";
import userImg from "../../public/tanvir 2.png";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Tanvir",
      userImg: userImg,
      img: "https://images.pexels.com/photos/12329596/pexels-photo-12329596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Nice weather",
    },
    {
      id: 1,
      name: "Tanvir",
      userImg: userImg,
      img: "https://images.pexels.com/photos/12329596/pexels-photo-12329596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Nice weather",
    },
    {
      id: 1,
      name: "Tanvir",
      userImg: userImg,
      img: "https://images.pexels.com/photos/12329596/pexels-photo-12329596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Nice weather",
    },
  ];
  return (
    <div>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
