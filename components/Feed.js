import React from "react";
import Posts from "./posts/Posts";
import Stories from "./Stories";

const Feed = () => {
  return (
    <div>
      <div>
        {/* Stories */}
        <Stories />
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
