import React, { useEffect, useState } from "react";
import minifiker from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";

const Stories = () => {
  const [userStories, setUserStories] = useState([]);

  useEffect(() => {
    const userStories = minifiker.array(20, (i) => ({
      username: minifiker.name({ locale: "en" }).toLowerCase(),
      image: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setUserStories(userStories);
    console.log(userStories);
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
      {userStories?.map((user) => (
        <Story key={user.id} name={user.username} img={user.image} />
      ))}
    </div>
  );
};

export default Stories;
