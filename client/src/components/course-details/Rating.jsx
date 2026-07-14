import React from "react";

const Rating = () => {
  const rating = [
    {
      star: 5,
      percentage: 80,
    },
    {
      star: 4,
      percentage: 40,
    },
  ];
  return (
    <div className="my-5">
      {rating.map((item) => (
        <div>
          <h3>Star {item.star}</h3>
          <div className="bg-black/50 h-2 flex-1 overflow-hidden rounded-full">
            <div className="bg-red-800 h-2 rounded-2xl" style={{width: `${item.percentage}%`}}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rating;
