import React from "react";
interface IProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export const RLButton = ({
  label,
  onClick,
  disabled = false,
  className,
}: IProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`py-2 px-3 rounded-md bg-blue-600 text-white hover:bg-blue-500
      text-sm font-light disabled:bg-gray-400 disabled:pointer-events-none ${className}`}
    >
      {label}
    </button>
  );
};
