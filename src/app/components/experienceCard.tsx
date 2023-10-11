"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CardProps {
  title: string;
  time: string;
  borderClassname: string;
  bgClassname: string;
  imageClassname?: string;
  image?: string;
  width?: number;
  alt?: string;
  href?: string;
  children: React.ReactNode;
}

export const ExperienceCard: React.FC<CardProps> = ({
  children,
  title,
  time,
  borderClassname,
  bgClassname,
  imageClassname,
  image,
  width,
  alt,
  href,
}) => {
  const [w, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window != "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }
  }, []);

  return (
    <section className="transition-all duration-500">
      <div
        className={` h-max ${borderClassname} rounded-lg p-0.5 font-light text-[14px]`}
      >
        <div className={`w-full h-full ${bgClassname} md:p-4 p-2 rounded-lg`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h3 className="font-mono text-[20px] font-medium mr-2">{title}</h3>
            {!(image && alt && href) && (
              <div className="relative w-0 h-10"></div>
            )}
            {image && alt && href && (
              <Link
                href={href}
                className="relative  h-10 "
                style={{ width: width }}
              >
                <Image
                  src={image}
                  alt={alt}
                  className={`${imageClassname} object-contain `}
                  fill
                ></Image>
              </Link>
            )}
          </div>
          <div className="w-full h-[1px] bg-black/25 my-1"></div>
          <div className="font-mono text-[12px] text-neutral-500">{time}</div>
          {children}
        </div>
      </div>
    </section>
  );
};
