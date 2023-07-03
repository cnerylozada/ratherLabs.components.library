import { XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

export const RLModal = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: JSX.Element;
}) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-10
      flex items-end md:items-center justify-center bg-black bg-opacity-70"
    >
      <div
        className="relative p-4 w-full md:!w-fit rounded-t-md md:rounded-md
        border-t-8 max-h-[80%] overflow-y-auto bg-white"
      >
        <XCircleIcon
          onClick={onClose}
          className="sticky top-0 right-0 w-7 h-7 ml-auto z-10 bg-white
          rounded-full cursor-pointer"
        />
        {children}
      </div>
    </div>
  );
};
