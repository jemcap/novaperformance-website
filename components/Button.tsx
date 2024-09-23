import React from "react";

const Button = ({ label, url }: { label: string; url: string }) => {
  return (
    <a
      href={url}
      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
    >
      {label}
    </a>
  );
};

export default Button;
