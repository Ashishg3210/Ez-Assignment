import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="p-4 border-2 border-black rounded-lg h-[200px] w-[220px] bg-[#112949] flex flex-col items-center justify-center shadow-lg">
      <div className="flex items-center space-x-3">
        <img src={image} alt={title} className="w-10 h-10" />
        <h4 className="text-xl font-semibold text-blue-400">{title}</h4>
      </div>
      <p className="text-x text-white mt-2 leading-[1.4]">
        {description}
      </p>
    </div>
  );
};

export default Card;
