"use client";
import { useCallback, useEffect, useState } from "react";

import Link from "next/link";

import Guestbook from "../guestbook/page";
import Contact from "../contact/page";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [barWidth, setBarWidth] = useState<number>(0);
  const [barTranslate, setBarTranslate] = useState<number>(0);

  const [scroll, setScroll] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  const [elements, setElements] = useState<number[]>([0, 1, 2, 3, 4]);

  useEffect(function () {
    setBarWidth(document.getElementById("0")?.clientWidth!);
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (event) => {
      let scroll = scrollY;
      //console.log(scroll)
      setScroll(scroll);
    });
  }

  //   //Animation bar function called within the element self detector
  //   //this sets scrolling stateful value to true for the duration of the scroller, make make sure
  //   //it doesnt not jump areound mid transition.

  //   //CALLED IN THE ON CLICK OF THE NAV!!!
  //   const ProcessAnimationBarWithLockout = (toTab: string) => {
  //     if (scrolling) {
  //       return;
  //     }
  //     ProcessAnimationBar(toTab);
  //     setScrolling(true);
  //     setTimeout(() => {
  //       setScrolling(false);
  //     }, duration);
  //   };

  //   //this delays invoking ProcessAnimationBar so that in case the user scrolls fast,
  //   //the function wont get called a lot

  //   //Called in each el statement of the silly containers
  //   //idk if i should use this
  //   const ProcessAnimationBarWithDelayedCheck = (
  //     toTab: string,
  //     element: Element,
  //   ) => {
  //     if (scrolling) {
  //       return;
  //     }
  //     setScrolling(true);
  //     setTimeout(() => {
  //       setScrolling(false);
  //     }, 2000);
  //   };

  //   useEffect(
  //     function () {

  //         if(!scrolling){//unused, always true
  //             setTimeout(function(){
  //                 if (elements[4] < 500) {
  //                     ProcessAnimationBar('4')
  //                     return;
  //                   } else if (elements[3] < 500) {
  //                     ProcessAnimationBar('3')
  //                     return;
  //                   } else if (elements[2] < 500) {
  //                     ProcessAnimationBar('2')
  //                     return;
  //                 } else if (elements[1] < 500) {
  //                     ProcessAnimationBar('1')
  //                     return;
  //                   } else {
  //                     ProcessAnimationBar('0')
  //                     return;
  //                   }
  //             },1400)

  //       //console.log(scroll)
  //       //console.log(projects);

  //     }
  //     },
  //     [ProcessAnimationBar, elements, scroll, scrolling],
  //   );

  const duration = 1400;
  const offset = -120;

  return (
    <main className="min-h-screen bg-white">
      <div
        id="style-1"
        className="mx-4 w-full md:mx-auto md:w-[742px] mt-32 relative "
      >
        <h1 className="font-bold text-2xl mb-2 ">home</h1>
        <div
          className="w-full h-[800px]"
          ref={(el) => {
            if (!el) return;
            let temp = elements;
            temp[0] = el.getBoundingClientRect().top;
            setElements(temp);
            // console.log(elements.toString());
          }}
          id="home"
        >
          <Link href="/about">About me</Link>
        </div>
      </div>
    </main>
  );
}
