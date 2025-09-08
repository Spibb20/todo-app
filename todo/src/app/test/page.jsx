"use client";

import { useState } from "react";

export default function Home() {
  const increment = () => {
    setNum(num + 1);
  };
  const decrement = () => {
    setNum(num - 1);
  };

  const [num, setNum] = useState(0);
  return (
    <div className=" flex justify-center gap-10 pt-10">
      <button
        className="bg-black text-white rounded-md w-[30px] "
        onClick={decrement}
      >
        &darr;
      </button>
      <div className="text-4xl w-[60px] text-center">{num}</div>
      <button
        className="bg-black text-white rounded-md w-[30px]"
        onClick={increment}
      >
        &uarr;
      </button>
    </div>
  );
}
