import React, { useEffect, useState } from "react";
import minifiker from "minifaker";
import "minifaker/locales/en";

const Suggesions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = minifiker.array(5, (i) => ({
      username: minifiker.name({ locale: "en" }).toLowerCase(),
      jobTitle: minifiker.jobTitle(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between items-center mb-5 text-sm">
        <h2 className="font-bold text-gray-400">Suggestion for you</h2>
        <button className="font-semibold text-gray-600">See all</button>
      </div>
      {suggestions?.map((item) => (
        <div className="flex items-center justify-between mt-3">
          <img
            className=" cursor-pointer h-10 w-10 object-cover rounded-full mr-3 p-1  border  "
            src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`}
            alt="img"
          />
          <div className="flex-1 ml-3">
            <h2 className="font-bold text-sm">{item.username}</h2>
            <h3 className="text-sm text-gray-400 truncate w-[230px]">{item.jobTitle}</h3>
          </div>
          <button className="font-semibold text-blue-400 text-sm">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggesions;
