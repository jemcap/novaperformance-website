import React from "react";

const Button = ({
  label,
  url,
  fontSize,
}: {
  label: string;
  url?: string;
  fontSize?: string;
}) => {
  return (
    <a
      href={url}
      className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 ${fontSize}`}
    >
      {label}
    </a>
  );
};

export default Button;
