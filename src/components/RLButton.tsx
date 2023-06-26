import React from "react";
interface IProps {
  label: string;
}

export const RLButton = (props: IProps) => {
  return (
    <button
      onClick={() => {
        console.log("click");
      }}
      className="bg-blue-600 text-white p-4"
    >
      {props.label}
    </button>
  );
};
