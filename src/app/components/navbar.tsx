"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog")) {
    pathname = "/blog";
  }
  if (pathname.includes("/about")) {
    pathname = "/";
  }

  let newPathname = usePathname() 
  let ending  = newPathname.slice(newPathname.indexOf('/' , 1))
  if (ending.length == 1)ending = ''
  ending = ending.substring(1)
  console.log(ending)

  const [selectedTab, setSelectedTab] = useState(0);
  const [barWidth, setBarWidth] = useState<number>(0);
  const [barTranslate, setBarTranslate] = useState<number>(0);
  const [loaded, setLoaded] = useState(true);

  const [tabs, setTabs] = useState([false, false, false, false]);

  useEffect(() => {
    let toTab = "0";
    let temp = [false, false, false, false];

    {
      Object.entries(navItems).map(([path, { name, id }]) => {
        const isActive = path === pathname;
        return isActive ? (toTab = id) : null;
      });
    }
    if (tabs[Number(toTab)]) return;
    temp[Number(toTab)] = true;
    setTabs(temp);
    console.log(toTab);

    let before = 0;
    let between = 0;

    for (let i = 0; i <= Number(toTab) - 1; i++) {
      before += document.getElementById(i.toString())?.offsetWidth!;
      before += 40;
    }
    if (selectedTab < Number(toTab)) {
      for (let i = selectedTab; i <= Number(toTab); i++) {
        between += document.getElementById(i.toString())?.offsetWidth!;
        between += 40;
      }
    } else {
      for (let i = selectedTab; i >= Number(toTab); i--) {
        between += document.getElementById(i.toString())?.offsetWidth!;
        between += 40;
      }
    }
    between -= 44;

    setBarWidth(between);
    if (selectedTab > Number(toTab)) setBarTranslate(before + 2 + document.getElementById('homescree.net')?.offsetWidth!);

    setTimeout(() => {
      setBarWidth(document.getElementById(toTab)?.offsetWidth! + 4);
      if (true) setBarTranslate(before - 2 +  document.getElementById('homescree.net')?.offsetWidth!);
    }, 350);

    setSelectedTab(Number(toTab));
  }, [barWidth, pathname, selectedTab, tabs]);



  return (
    <div className=" h-24 flex flex-col w-full justify-end fixed right-0 top-0 left-0 z-50 bg-white">
      {" "}
      <div className="md:mx-auto md:w-[742px]">

        <nav >
          <div className="flex flex-row justify-between">


          <div className="flex flex-row w-full bg-white items-baseline justify-between overflow-x-hidden ">
            <div className="flex flex-col font-mono text-[16px] w-full bg-white">
              
              <div className="flex flex-row items-baseline">
              <h1 id='homescree.net'>Homescree.net&nbsp;/&nbsp;</h1>
                {Object.entries(navItems).map(([path, { name, id }]) => {
                  const isActive = path === pathname;
                  return (
                    <Link
                      key={path}
                      href={path}
                      className={`pr-10 ${
                        isActive ? "text-neutral-900" : "text-neutral-400"
                      } transition-colors duration-1000`}
                    >
                      <p id={id}>{name}</p>
                    </Link>
                  );
                })}
              </div>

            </div>
          </div>
          <div className="font-mono">
                {`${ending != '' ? '/' : ''}`}&nbsp;{`${ending}`}
          </div>
          </div>

          <div className="w-full bg-gray-200 h-[1px]   mt-2"></div>
              <div
                style={{
                  width: barWidth + "px",
                  transform: `translate(${barTranslate}px, -2px)`,
                }}
                className={`bg-neutral-900 h-[1px] ${
                  loaded ? "transition-all duration-300" : ""
                }`}
              ></div>


        </nav>
      </div>
    </div>
  );
}
