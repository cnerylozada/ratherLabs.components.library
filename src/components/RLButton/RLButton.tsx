import React from "react";
type Theme = "blue" | "outline-blue";

const getThemeStyles = (theme: Theme) => {
  if (theme === "blue") return "bg-blue-600 text-white hover:bg-blue-500";
  if (theme === "outline-blue")
    return "border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600";
};
interface IProps {
  label: string;
  type?: "button" | "submit";
  theme?: Theme;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export const RLButton = ({
  label,
  type = "button",
  onClick,
  theme = "blue",
  disabled = false,
  className,
}: IProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-3 rounded-md text-sm font-light ${
        !!disabled
          ? "disabled:bg-gray-400 disabled:pointer-events-none"
          : `${getThemeStyles(theme)}`
      } ${className}`}
    >
      {label}
    </button>
  );
};
