import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./posts/Posts";
import Stories from "./Stories";
import Suggesions from "./Suggesions";

const Feed = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto md:max-w-6xl">
      <div className="md:col-span-2">
        {/* Stories */}
        <Stories />
        <Posts />
      </div>
      <div className="hidden md:inline-grid md:col-span-1">
        <div className="fixed w-[380px]">
          <MiniProfile />
          <Suggesions />
        </div>
      </div>
    </div>
  );
};

export default Feed;
