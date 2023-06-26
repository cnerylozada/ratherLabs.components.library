import React from "react";

export const RLHeader = ({ className }: { className?: string }) => {
  return (
    <div
      className={`py-4 px-4 lg:px-8 flex items-center justify-between bg-gray-800 text-white ${className}`}
    >
      <img
        src={require("../../public/ratherlabs-logo.jpeg")}
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
