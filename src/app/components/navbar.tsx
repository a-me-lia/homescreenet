"use client";

import { useEffect, useReducer, useState } from "react";
import { usePathname } from "next/navigation";
import Router from "next/router";
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

  let newPathname = usePathname();
  let ending = newPathname.slice(newPathname.indexOf("/", 1));
  if (ending.length == 1) ending = "";
  ending = ending.substring(1);

  const [selectedTab, setSelectedTab] = useState(0);
  const [barWidth, setBarWidth] = useState<number>(0);
  const [barTranslate, setBarTranslate] = useState<number>(0);
  const [width, setWidth] = useState(0);

  const [tabs, setTabs] = useState([false, false, false, false]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", () => setWidth(window.innerWidth) );
    }
  }, []);



  useEffect(() => {
    let toTab = "0";

    {
      Object.entries(navItems).map(([path, { name, id }]) => {
        const isActive = path === pathname;
        return isActive ? (toTab = id) : null;
      });
    }

    setSelectedTab(Number(toTab));
  }, [pathname, selectedTab, tabs, width]);

  return (
    <div className=" h-24 flex flex-col w-full justify-end fixed right-0 top-0 left-0 z-50 bg-white">
      {" "}
      <div className="md:mx-auto md:w-[742px] mx-4">
        <nav>
          <div className="flex flex-row ">
            <div className="flex flex-row  bg-white items-baseline justify-between overflow-x-hidden ">
              <div className="flex flex-col font-mono text-[16px] w-full bg-white">
                <div className="flex flex-row items-baseline -mr-8">
                  <h1 className="md:block hidden" id="homescree.net">
                    Homescree.net&nbsp;/&nbsp;
                  </h1>

                  {Object.entries(navItems).map(([path, { name, id }]) => {
                    const isActive = path === pathname;
                    return (
                      <Link
                        key={path}
                        href={path}
                        className={`pr-10 ${
                          isActive ? "text-neutral-900" : "text-neutral-300"
                        } transition-colors duration-1000`}
                      >
                        <p id={id}>{name}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <h2 className="font-mono md:block hidden">
              {`${ending != "" ? "/" : ""}`}&nbsp;{`${ending}`}
            </h2>
          </div>

          <div className="w-full bg-gray-200 h-[1px]   mt-2"></div>
        </nav>
      </div>
    </div>
  );
}
