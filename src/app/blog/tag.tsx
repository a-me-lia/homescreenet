"use client";


const bgColors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-slate-200",
];

const navItems = {
  "/": {
    name: "home",
    id: "0",
  },
  "/blog": {
    name: "blog",
    id: "1",
  },
  "/guestbook": {
    name: "guestbook",
    id: "2",
  },
  "/contact": {
    name: "contact",
    id: "3",
  },
};

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
    <ul className="ml-2 flex flex-row space-x-1">
      {arr.map((entry, index) => (
        <li
          className={`${
            bgColors[indexes[index]]
          } rounded-md px-2 text-[14px] h-min`}
          key={index}
        >
          {entry}
        </li>
      ))}
    </ul>
  );
}
