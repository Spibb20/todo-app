import { Children } from "react";

export const Button = ({ children }) => {
  return (
    <button className="max-w-[100px] w-[fit] bg-blue-400 rounded-[6px] p-2 text-[14px] text-white">
      {children}
    </button>
  );
};
