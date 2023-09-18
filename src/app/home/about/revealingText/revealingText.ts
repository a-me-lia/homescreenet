import { useEffect, useState } from "react";

export default function RevalingText() {
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(function () {
    if (typeof window !== "undefined") setHeight(window.innerHeight);
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (event) => {
      let scroll = scrollY;
      //console.log(scroll)
      setScroll(scroll);
    });
    window.addEventListener("resize", (event) => {
      let height = innerHeight;
      //console.log(scroll)
      setHeight(height);
    });
  }

  useEffect(
    function () {
      for (let i = 0; i < document.getElementsByTagName("p").length; i++) {
        let element = document.getElementsByTagName("p")[i];
        if (element.className.search("fancy") != -1) {
          if (
            element.className.search("opacity-100 ") == -1 &&
            element.className.search("opacity-10 ") == -1
          )
            element.className = element.className + " opacity-10 ";
          if (height - element.getBoundingClientRect().top > 128) {
            element.className = element.className.replace(
              "opacity-10 ",
              "opacity-100 ",
            );
          } else {
            element.className = element.className.replace(
              "opacity-100 ",
              "opacity-10 ",
            );
          }
          // if(i == 1)console.log(element.className)

          // if(i == 1)console.log(element.getBoundingClientRect().top )
          // if(i == 1)console.log( height - element.getBoundingClientRect().top )
        }
      }
    },
    [height, scroll],
  );
}
