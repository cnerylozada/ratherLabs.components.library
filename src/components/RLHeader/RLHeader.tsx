import React from "react";

export const RLHeader = ({ className }: { className?: string }) => {
  return (
    <div
      className={`py-4 px-4 lg:px-8 w-full flex items-center justify-between bg-gray-800 text-white ${className}`}
    >
      <img
        src={
          "https://miro.medium.com/v2/resize:fill:176:176/1*dlaXtsXy8vktxwgWs4tg4g.jpeg"
        }
        className="w-12 h-12"
      />
      <div>
        <div className="text-base lg:text-lg font-normal">
          Membrane Challenge
        </div>
      </div>
    </div>
  );
};
