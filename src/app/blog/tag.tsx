"use client";
import { useState } from "react";

const bgColors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-slate-200",
];


export default function Tag({ tags }: { tags: string }) {
  let arr = tags.split(",");
  let indexes: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    indexes[i] =
      ((arr[i].charCodeAt(0) + arr[i].charCodeAt(arr[i].length - 1)) %
        bgColors.length) -
      1;
  }

  return (
    <ul className="ml-2 flex flex-row space-x-1"
    onClick={(e)=>{e.preventDefault()}}>
      {arr.map((entry, index) => (
        <li
          className={`${
            bgColors[indexes[index]]
          } rounded-md px-2 text-[14px] h-min text-black text-opacity-100 bg-opacity-30 hover:bg-opacity-100 transition-all duration-300 `}
          key={index}
          id={index.toString()}
          onClick={()=>{}}
        >
          {entry}
        </li>
      ))}
    </ul>
  );
}
