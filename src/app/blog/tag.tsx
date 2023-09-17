"use client";
import { useState } from "react";

const bgColors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
  'bg-orange-500'
];


export default function Tag({ tags, setActive }: { tags: string, setActive?:Function }) {
  let arr = tags.split(",");
  let Δ: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    Δ[i] =
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
            Δ[index] != -1  ? bgColors[Δ[index]] : 'bg-gray-400'
          } rounded-md px-2 text-[14px] h-min  text-black text-opacity-100 hover:text-white bg-opacity-30 hover:bg-opacity-100 transition-all duration-300 `}
          key={index}
          id={index.toString()}
          onClick={()=>{
            let subArr =  arr.splice(arr.indexOf(entry), 1);
            if(setActive){setActive([entry])}}}
          >
          {entry}
        </li>
      ))}
    </ul>
  );
}
