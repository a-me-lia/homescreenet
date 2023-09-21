"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const bgColors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-orange-500",
];

export default function Tag({ tags }: { tags: string }) {
  let arr = tags.trim().split(",");

  let Δ: number[] = [];



  for (let i = 0; i < arr.length; i++) {
    console.log(((arr[i].charCodeAt(0) - 97 ) +  (arr[i].charCodeAt(1) - 97 )) * (360/52))


    Δ[i] = ((arr[i].charCodeAt(0) - 97 ) +  (arr[i].charCodeAt(1) - 97 )) * (360/52) //value between 0 and 360, for hsl
  }
  const router = useRouter();

  const searchParams = useSearchParams();

  //updates the search params with a tag. if the tag already exists, delete the tag.
  //tag list is comma separated
  function updateParams(tag: string) {
    let prevTags = searchParams.get("tags")?.split(",");
    if (!prevTags)
      router.replace(`/blog?tags=${tag}`, {
        scroll: false,
      });
    //if no tags present
    else if (prevTags?.indexOf(tag) != -1) {
      //if tag is already contained
      if (prevTags.length == 1) {
        router.replace(`/blog`, { scroll: false }); //if only one tag, remove the query string alltogether
      } else {
        prevTags?.splice(prevTags.indexOf(tag), 1);
        router.replace(`/blog?tags=${prevTags}`, { scroll: false });
      }
    } else {
      prevTags.push(tag); //if there were already tags present
      router.replace(`/blog?tags=${prevTags}`, { scroll: false });
    }
  }

  useEffect(() => {
    const refreshData = () => {
      router.refresh();
    };
    refreshData();
  }, [router, searchParams]);

  return (
    <ul
      className="ml-2 flex flex-row space-x-1"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      {arr.sort((a, b) => {
        if(a == 'other'){
          return 1
        }
          if (a < b) {
            return -1;
          }
          return 1;
        }).map((entry, index) => (
        <li
        style={{background: `hsl(${Δ[index]}, 80%, 50%)`}}
          className={`${
            entry !== 'other' ? '' : "bg-gray-400"
          } rounded-md px-2 text-[14px] h-min  text-black text-opacity-100  bg-opacity-30 hover:bg-opacity-80 transition-all duration-300 `}
          key={index}
          id={index.toString()}
          onClick={() => {
            updateParams(entry);
          }}
        >
          {entry}
        </li>
      ))}
    </ul>
  );
}
