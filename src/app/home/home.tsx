"use client"
import { useEffect, useState } from "react";

import Link from "next/link";
import H1 from "../components/h1";
import Image from "next/image";

import { ExperienceCard } from "../components/experienceCard";

export default function Home(){
    return(
        <main className="min-h-screen bg-white mx-4  md:mx-auto md:w-[742px]  relative">
        <H1>home</H1>
        <ul className="flex flex-col">
          <li>
            <Link href="/home/about">About me</Link>
          </li>
          <li>
            <Link href="/home/resume">Resume</Link>
          </li>
        </ul>
  
        <div className="mt-24 mb-6">experience</div>
  
        <div className="grid grid-flow-row grid-cols-2  row-auto w-full h-max gap-2 md:space-y-0 space-y-2">
  
  
          <ExperienceCard alt="botbuilt logo" image="/botbuilt.png" width={160} href="https://botbuilt.com" rows={1} cols={2} title='Software and Electronics Engineering'  time='2023 - present' borderClassname="bg-neutral-50" bgClassname=" bg-neutral-50" >
          <p className="mt-4">Description of my work at Botbuilt</p>
            <ul className="mt-2 pl-4">
              <li>This is a list</li>
              <li>Of the technical abilities</li>
              <li>Demonstrated in my work there</li>
            </ul>
            <p className="mt-2">This is a description of a major project</p>
          </ExperienceCard>
  
  
          <ExperienceCard rows={2} cols={1} title='Web Development' time='2023 - present' borderClassname="bg-gradient-to-br from-blue-500 to-cyan-300" bgClassname=" bg-cyan-50" >
          <p className="mt-4">
                I have experience building, deploying and continously developing
                fullstack live web applications and static presentational
                websites. My most used tools include:
              </p>
              <ul className="mt-4">
                <li>
                  Frontend - Next.JS with{" "}
                  <span className="text-blue-600">React</span>
                </li>
                <li>Backend - Google, Planetscale, postGRES</li>
              </ul>
              <p className="mt-4">
                I am always able to learn new frameworks quickly. Outside of
                creating websites for fun, I&apos;ve developed for Duke
                University, various artists, and Cary Chinese School
              </p>
          </ExperienceCard>
  
  
          <ExperienceCard rows={1} cols={1} title='Live TV Crew' time='summer 2023' borderClassname=" bg-neutral-50" bgClassname=" neutral-50" image="/durham.png"  width={48}  alt="Durham Bulls" href='https://www.milb.com/durham' >
            <div>hello im a child</div>
          </ExperienceCard>
  
        </div>
      </main>
    )
}