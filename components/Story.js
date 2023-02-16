import React from "react";

const Story = ({ img, name }) => {
  return (
    <div>
      <img
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-300 ease-out"
        src={img}
        alt="img"
      />
      <p className="text-sm w-14 truncate">{name}</p>
    </div>
  );
};

export default Story;
