import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const bgColors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-orange-500",
];

const cats = ["electronics", "dev", "shrimp", "life", "music", "other"];

export default function TagFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  let tagsStr = searchParams.get("tags");
  let tags = tagsStr?.split(",") ? tagsStr?.split(",") : [];

  let Δ: number[] = [];

  for (let i = 0; i < tags.length; i++) {
    Δ[i] =
      ((tags[i].charCodeAt(0) + tags[i].charCodeAt(tags[i].length - 1)) %
        bgColors.length) -
      1;
  }

  let notInTags: string[] = [];
  for (let i = 0; i < cats.length; i++) {
    if (tags.indexOf(cats[i]) == -1) {
      notInTags.push(cats[i]);
    }
  }
  console.log(notInTags);

  function removeTag(tag: string) {
    let prevTags = tags;
    //if no tags present
    if (prevTags?.indexOf(tag) != -1) {
      //if tag is already contained
      if (prevTags.length == 1) {
        router.replace(`/blog`, { scroll: false }); //if only one tag, remove the query string alltogether
      } else {
        prevTags?.splice(prevTags.indexOf(tag), 1);
        router.replace(`/blog?tags=${prevTags}`, { scroll: false });
      }
    }
  }

  function addTag() {
    let tag = (document.getElementById("selector") as HTMLInputElement).value;

    let prevTags = searchParams.get("tags")?.split(",");
    if (!prevTags) {
      router.replace(`/blog?tags=${tag}`, {
        scroll: false,
      });
      //if no tags present
    } else {
      prevTags.push(tag); //if there were already tags present
      router.replace(`/blog?tags=${prevTags}`, { scroll: false });
    }
  }

  const [selected, setSelected] = useState(false);

  return (
    <>
    <p>Tags:</p>
    <ul
      className=" flex flex-row items-baseline mt-2 mb-6  max-w-full flex-wrap gap-x-1 gap-y-1.5"
      onClick={(e) => {
        e.preventDefault();
      }}
    >

      {tags.map((entry, index) => (
        <li
          className={`${
            Δ[index] != -1 ? bgColors[Δ[index]] : "bg-gray-400"
          } rounded-md px-2 text-[14px] h-6 flex flex-row items-center   text-black text-opacity-100 hover:bg-opacity-0 bg-opacity-30 border-2 border-opacity-0 hover:border-opacity-100 transition-all duration-300 `}
          key={index}
          id={index.toString()}
          onClick={() => {
            removeTag(entry);
          }}
        >
          {entry}
          <div className="mt-0.5 ml-1">
            <svg
              fill="#AAAAAA"
              height="10px"
              width="10px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 460.775 460.775"
            >
              <path
                d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
              />
            </svg>
          </div>
        </li>
      ))}
      <li
        className={`h-6  ${selected ? 'w-32 mr-0' : 'w-7 mr-[100px]'}  rounded-md border-2 flex flex-row items-center  transition-all duration-300`}


      >
        <div className="h-full w-6 flex flex-row items-center justify-center"
                onClick={() =>{
                    setSelected(!selected);
                  (document.getElementById("selector") as HTMLSelectElement).selectedIndex=0}
                }>
          <div className="rotate-45">
            <svg
              fill="#AAAAAA"
              height="10px"
              width="10px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 460.775 460.775"
            >
              <path
                d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
              />
            </svg>
          </div>
        </div>

        <select
          onChange={() => {
            addTag();
            setSelected(false);
          }}
          name=""
          id="selector"
          className={`bg-transparent transition-all h-6 duration-300 ${
            selected ? "  w-24" : "  w-0"
          } text-[14px] `}
        >
          <option disabled value="">
            Add tag...
          </option>
          {notInTags.map((entry, index) => (
            <option
              key={index}
              id={index.toString()}
              onChange={() => {
                console.log("dfv");
              }}
              value={entry}
            >
              {entry}
            </option>
          ))}
        </select>
      </li>
    </ul>
    </>
  );
}
