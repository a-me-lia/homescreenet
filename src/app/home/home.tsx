"use client";
import useWindowSize from "@/lib/window";

import Link from "next/link";

import H1 from "../components/h1";
import { ExperienceCard } from "../components/experienceCard";

import { useEffect, useState } from "react";

export default function Home() {
  const width = useWindowSize();
  const [height, setHeight] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [rendered, setRendered] = useState(false);
  let sectionHeight = 0;

  if (typeof document != "undefined") {
    const cards = document.getElementsByTagName("section");
    for (let j = 0; j <= cards.length - 1; j++) {
      const arr = [0, 1, 2, 3];
      if (arr.includes(j)) sectionHeight += cards[j].clientHeight + 16;
      // console.log(sectionHeight);
    }
  }

  useEffect(() => {
    if (typeof window != "undefined") {
      setScroll(window.scrollY);
      window.addEventListener("scroll", (event) => {
        setScroll(window.scrollY);
      });
      setHeight(window.innerHeight)
      window.addEventListener("resize", (event) => {
        setHeight(window.innerHeight);
      });
    }
  }, []);

  useEffect(() => {
    const cards = document.getElementsByTagName("section"); 
    const top = document.getElementById('container')!.getBoundingClientRect().top
    let shown = [false, false, false, false, false]
  
    // document.getElementById("container")!.style.transform = `translate(0px, ${scroll/2}px)`
    for (let j = 0; j <= cards.length - 1; j++) {
      const md = [1, 2, 5, 3, 4];
      const sm = [1, 2, 3, 4, 5];
      const i = width >= 768 ? md[j] : sm[j];

      console.log(height - top)
      cards[j].style.transform = `translate(0px,${
shown[j] ? 0 : height
      }px)`;
      //${(1000*(i)-(scroll - 50*i)*i*2 - 800) >= 0 ? (1000*(i)-(scroll -50*i)*i*2 -800) : 0}
    }
    if (scroll > 50) {
      setRendered(true);
    }
  }, [height, scroll, width]);
  return (
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

      <div className="mt-64 mb-6">experience</div>
      <div
        className="relative w-full transition-all duration-300  z-50"
        style={{ height: `${rendered ? "0" : "100vh"}` }}
      ></div>

      {width < 768 && (
        <div
          id="container"
          className="flex flex-col w-full h-max  md:space-y-2 space-y-2"
        >
          <ExperienceCard
            alt="botbuilt logo"
            image="/botbuilt.png"
            width={160}
            href="https://botbuilt.com"
            title="Software/Electronics Engineering"
            time="2023 - present"
            borderClassname="bg-neutral-50"
            bgClassname=" bg-neutral-50"
          >
            <p className="mt-4">
              I somehow landed an internship as a second-year high school
              student at Botbuilt, a 20 man small Y&#8209;Combinator startup.
              One of the benefits of working somewhere small is that your impact
              was is felt. <br />
              <br />{" "}
            </p>
            <p>At this robotic framing contruction company, I got to:</p>
            <ul className="mt-2 pl-4">
              <li>- Work on industrial robots and control systems</li>
              <li>- Lead the developent of major QOL enhancing projects</li>
              <li>
                - Be tasked with PCB, embedded systems, control systems design
                and much more.{" "}
              </li>
            </ul>
          </ExperienceCard>

          <ExperienceCard
            title="Web Development"
            time="2023 - present"
            borderClassname="bg-gradient-to-br from-blue-500 to-cyan-300"
            bgClassname=" bg-cyan-50"
          >
            <p className="mt-4">
              I build, deploy, and continuously develop beautiful and functional
              websites with the fastest web tools. <br />
              <br /> This website was cooked up from scratch with{" "}
              <strong>Next.JS</strong> +{" "}
              <span className="text-cyan-500">React</span>.
            </p>

            <p className="mt-4">
              I am always able to learn new frameworks quickly. Outside of
              creating websites for fun, I&apos;ve developed sites & SPA&apos;s
              for Duke University, various artists, and Cary Chinese School.
            </p>
          </ExperienceCard>
          <ExperienceCard
            title="Live TV Crew"
            time="summer 2023"
            borderClassname=" bg-neutral-50"
            bgClassname=" neutral-50"
            image="/durham.png"
            width={48}
            alt="Durham Bulls"
            href="https://www.milb.com/durham"
          >
            <p className="mt-4">
              I am a member of the WRAL Durham Bulls live TV broadcast crew.{" "}
              <br />
              Some of the roles that I most often fill are color grading,
              technical directing and live replay.
            </p>
          </ExperienceCard>
          <ExperienceCard
            title="Electronics Instructor"
            time="fall 2021 - summer 2022"
            borderClassname=" bg-neutral-50"
            bgClassname=" neutral-50"
            image="/breadboard.png"
            width={80}
            alt="breadboard stock svg"
            href="/home"
          >
            <p className="mt-4">
              In my third year of middle school, I spearheaded, wrote and taught
              a semester-long course around{" "}
              <strong>
                <Link
                  className="hover:underline "
                  href="https://eater.net/8bit/"
                >
                  Ben Eater&apos;s 8-bit CPU
                </Link>{" "}
              </strong>
              to teach the &lsquo;underclassmen&rsquo; the fundamentals of
              digital circuits and electronics. <br />
            </p>
          </ExperienceCard>
          <ExperienceCard
            title="High Voltage Enthusiast"
            time="all the time"
            borderClassname=" bg-neutral-50"
            bgClassname=" neutral-50"
            imageClassname="translate-y-[3px]"
            image="/kagamisister.png"
            width={60}
            alt="Tsukasa :p"
            href="/home"
          >
            <p className="mt-4 mb-4">
              I have wanted to bend electrons to my will since I was young
              enough for my age to be expressed in three bits. <br /> When I
              can&apos;t do high voltage projects, I often make crazy analog
              electronics such as this{" "}
              <Link href="https://osu.ppy.sh/home">
                <span className="hover:underline text-pink-600">osu!</span>
              </Link>{" "}
              robot that easily beat the top 1 player globally.
            </p>
            <iframe
              width={width < 768 ? `${width - 72}` : "340"}
              height={180}
              src="https://www.youtube.com/embed/B91gw8vaa2k?si=CqdBOO75b4zNBRQy&amp;start=20"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
            ></iframe>
          </ExperienceCard>
        </div>
      )}
      {width >= 768 && (
        <div
        id="container"
        style={{ height: sectionHeight }}
        className="flex flex-col w-full  overflow-hidden md:space-y-2 space-y-2"
        >
          <ExperienceCard
            alt="botbuilt logo"
            image="/botbuilt.png"
            width={160}
            href="https://botbuilt.com"
            title="Software/Electronics Engineering"
            time="2023 - present"
            borderClassname="bg-neutral-50"
            bgClassname=" bg-neutral-50"
          >
            <p className="mt-4">
              I somehow landed an internship as a second-year high school
              student at Botbuilt, a 20 man small Y&#8209;Combinator startup.
              One of the benefits of working somewhere small is that your impact
              was is felt. <br />
              <br />{" "}
            </p>
            <p>At this robotic framing contruction company, I got to:</p>
            <ul className="mt-2 pl-4">
              <li>- Work on industrial robots and control systems</li>
              <li>- Lead the developent of major QOL enhancing projects</li>
              <li>
                - Be tasked with PCB, embedded systems, control systems design
                and much more.{" "}
              </li>
            </ul>
          </ExperienceCard>
          <div className="flex md:flex-row w-full md:space-x-2  ">
            <div className="flex flex-col w-full md:w-1/2 space-y-2 ">
              <ExperienceCard
                title="Web Development"
                time="2023 - present"
                borderClassname="bg-gradient-to-br from-blue-500 to-cyan-300"
                bgClassname=" bg-cyan-50"
              >
                <p className="mt-4">
                  I build, deploy, and continuously develop beautiful and
                  functional websites with the fastest web tools. <br />
                  <br /> This website was cooked up from scratch with{" "}
                  <strong>Next.JS</strong> +{" "}
                  <span className="text-cyan-500">React</span>.
                </p>

                <p className="mt-4">
                  I am always able to learn new frameworks quickly. Outside of
                  creating websites for fun, I&apos;ve developed sites &
                  SPA&apos;s for Duke University, various artists, and Cary
                  Chinese School.
                </p>
              </ExperienceCard>
              <ExperienceCard
                title="High Voltage Enthusiast"
                time="all the time"
                borderClassname=" bg-neutral-50"
                bgClassname=" neutral-50"
                imageClassname="translate-y-[3px]"
                image="/kagamisister.png"
                width={60}
                alt="Tsukasa :p"
                href="/home"
              >
                <p className="mt-4 mb-4">
                  I have wanted to bend electrons to my will since I was young
                  enough for my age to be expressed in three bits. <br /> When I
                  can&apos;t do high voltage projects, I often make crazy analog
                  electronics such as this{" "}
                  <Link href="https://osu.ppy.sh/home">
                    <span className="hover:underline text-pink-600">osu!</span>
                  </Link>{" "}
                  robot that beat the top 1 player globally.
                </p>
                <iframe
                  width={width < 768 ? `${width - 72}` : "340"}
                  height={180}
                  src="https://www.youtube.com/embed/B91gw8vaa2k?si=CqdBOO75b4zNBRQy&amp;start=20"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                ></iframe>
              </ExperienceCard>
            </div>
            <div className="flex flex-col w-full md:w-1/2 space-y-2">
              <ExperienceCard
                title="Live TV Crew"
                time="summer 2023"
                borderClassname=" bg-neutral-50"
                bgClassname=" neutral-50"
                image="/durham.png"
                width={48}
                alt="Durham Bulls"
                href="https://www.milb.com/durham"
              >
                <p className="mt-4">
                  I am a member of the WRAL Durham Bulls live TV broadcast crew.{" "}
                  <br />
                  Some of the roles that I most often fill are color grading,
                  technical directing and live replay.
                </p>
              </ExperienceCard>
              <ExperienceCard
                title="Electronics Instructor"
                time="fall 2021 - summer 2022"
                borderClassname=" bg-neutral-50"
                bgClassname=" neutral-50"
                image="/breadboard.png"
                width={80}
                alt="Breadboard stock svg"
                href="/home"
              >
                <p className="mt-4">
                  In my third year of middle school, I spearheaded, wrote and
                  taught a semester-long course around{" "}
                  <strong>
                    <Link
                      className="hover:underline "
                      href="https://eater.net/8bit/"
                    >
                      Ben Eater&apos;s 8-bit CPU
                    </Link>{" "}
                  </strong>
                  to teach the &lsquo;underclassmen&rsquo; the fundamentals of
                  digital circuits and electronics. <br />
                </p>
              </ExperienceCard>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
