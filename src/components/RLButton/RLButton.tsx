import React from "react";
interface IProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const RLButton = ({ label, onClick, disabled = false }: IProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="bg-blue-600 text-white py-2 px-3 rounded-md disabled:bg-gray-400 disabled:pointer-events-none"
    >
      {label}
    </button>
  );
};
