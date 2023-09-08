"use client"

import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { useState, useEffect } from "react";


interface MdxProps {
    code: string;
  }

  const CustomLink = (props: any) => {
    const href = props.href;
  
    if (href.startsWith('/')) {
      return (
        <Link href={href} {...props}>
          {props.children}
        </Link>
      );
    }
  
    if (href.startsWith('#')) {
      return <a {...props} />;
    }
  
    return <a target="_blank" rel="noopener noreferrer" {...props} />;
  };

  const CustomP = (props:any) => {

    return(
      <p className="fancy">{props.children}</p>
    )
    }


    const CustomH1 = (props:any) => {

      return(
        <h1 className="text-2xl font-bold mb-4">{props.children}</h1>
      )
      }

  const components = {
    a: CustomLink,
    p: CustomP,
    h1: CustomH1
  };

export function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code);
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
        for (let i = 0; i < document.getElementsByTagName("*").length; i++) {
          let element = document.getElementsByTagName("*")[i];
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
  
    return (
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <Component components={{ ...components }} />
      </article> 
    );
  }
  