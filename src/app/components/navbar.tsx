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
  if (pathname.includes("/resume")) {
    pathname = "/";
  }
  if (pathname.includes("/home")) {
    pathname = "/";
  }


  let path = usePathname()
  path = path.slice(1)
  let pathitems = path.split('/')
  let level = pathitems.length

  return (
    <div className=" h-24 flex flex-col w-full justify-end fixed right-0 top-0 left-0 z-50 bg-white">
      {" "}
      <div className="md:mx-auto md:w-[742px] mx-4">
        <nav>
          <div className="flex flex-row ">

                <div className="flex flex-row items-baseline -mr-6">
                  <Link href={'/'} className="md:block hidden" id="homescree.net">
                    Homescree.net&thinsp;/&thinsp;
                  </Link>

                  {Object.entries(navItems).map(([path, { name, id }]) => {
                    const isActive = path === pathname;
                    return (
                      <Link
                        key={path}
                        href={path}
                        className={`pr-8 ${
                          isActive ? "text-neutral-900" : "text-neutral-300"
                        } transition-colors duration-1000`}
                      >
                        <p id={id}>{name}</p>
                      </Link>
                    );
                  })}
                </div>

            <h2 className="font-mono md:block hidden">
                  {level >= 2 && (
                      <Link href={`/${pathitems[0]}${pathitems[0] != '' ? '/' : ''}${pathitems[1]}`}>/ {pathitems[1]}</Link>
                  )}
                  {level == 3 && (
                      <Link href={`/${pathitems[0]}${pathitems[0] != '' ? '/' : ''}${pathitems[1]}/${pathitems[2]}`}> / {pathitems[2]}</Link>
                  )}
            </h2>
          </div>

          <div className="w-full bg-gray-200 h-[1px]   mt-2"></div>
        </nav>
      </div>
    </div>
  );
}
