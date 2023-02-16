import React from "react";

const Story = ({ img, name }) => {
  return (
    <div>
      <img src={img} alt="img" />
      <p>{name}</p>
    </div>
  );
};

export default Story;
