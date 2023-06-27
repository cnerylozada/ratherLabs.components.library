import { ClockIcon } from "@heroicons/react/24/outline";
import React from "react";

export const RLTimeLeft = ({
  lifetimeSeconds,
  className,
}: {
  lifetimeSeconds: number;
  className?: string;
}) => {
  return (
    <div
      className={`p-2 flex items-center space-x-2 bg-black
      bg-opacity-40 rounded-lg text-white ${className}`}
    >
      <div className="flex items-center space-x-1 text-xs font-bold">
        <ClockIcon className="w-5 h-5" />
        <span>Time left:</span>
      </div>
      <div className="font-bold">
        {lifetimeSeconds} <span className="text-xs">seconds</span>
      </div>
    </div>
  );
};
