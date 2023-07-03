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
      <div className="w-full md:w-auto rounded-t-md md:rounded-md bg-white">
        <XCircleIcon
          onClick={() => {
            onClose();
          }}
          className="w-5 h-5 text-center cursor-pointer"
        />
        {children}
      </div>
    </div>
  );
};
