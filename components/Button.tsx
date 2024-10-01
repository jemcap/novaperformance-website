import React from "react";

const Button = ({
  label,

  fontSize,
  type,
  onClickHandler,
}: {
  label: string;
  type: "button" | "submit";

  fontSize?: string;
  onClickHandler?: () => void;
}) => {
  return (
    <button
      type={type}
      className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 ${fontSize}`}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
};

export default Button;
