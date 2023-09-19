"use client";
import Image from "next/image";
import { comma } from "postcss/lib/list";
import { use, useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
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
      for (let i = 0; i < document.getElementsByTagName("div").length; i++) {
        let element = document.getElementsByTagName("div")[i];
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
    <main className="min-h-screen bg-white flex flex-col">
      <div className="md:mx-auto mx-4 md:w-[742px] mt-32 mb-32 text-[16px] space-y-16  ">
        <div>
          <h1 className=" text-[32px]">Being Human</h1>
          <div className="flex flex-row justify-between align-baseline">
            <h2 className="">
              Some questions and asnwers about my life as a human.
            </h2>
            <h2 className="">2023-08-29</h2>
          </div>
        </div>

        <div className="relative w-full h-[256px] md:h-[420px]">
          <Image src="/china.jpeg" alt="" fill></Image>
        </div>

        <div className="space-y-4">
          <div className="pb-2">
            In one of the first classes of my 10th grade English Western
            Literature course, we were asked to introduce ourselves in depth
            through answering a questionaire about our lives. Here it is:
          </div>

          <div className=" transition-opacity duration-1000 fancy font-bold pb-4">
            <p>
              What was the last movie you saw? Did you like it or not? Why? Are
              there particular types of movies you like to watch? Why?
            </p>
          </div>

          <div className="transition-opacity duration-1000 fancy">
            <p>
              The last movie I saw was Suzume no Tojimari, a recent release
              (4/13 in the United States). I watched the original Japanese
              spoken language version subbed with English in the Xenon digital
              IMAX theatre at Southpoint. Even without considering the beauty of
              the animation on the huge silver screen, or the spine-chilling
              soundtrack (see links below), the movie was extremely emotionally
              moving and prompted me to think about the relationships I maintain
              with my own family, and how I choose to live my life every day.
            </p>
          </div>

          <div className="fancy transition-opacity duration-1000">
            <p>
              {" "}
              You can google the movie synopsis if you so wish, I won’t bore you
              here, but it’s a very beautiful movie and I definitely recommend
              watching it.
            </p>
          </div>

          <div className="fancy transition-opacity duration-1000">
            <p>
              {" "}
              The type of movie that I love watching are exactly like Suzume,
              movies that tell beautiful stories that often go right down to the
              most basic aspects of the human experience such as loss, love, and
              separation. I’ve never found a clear common genre labeled for
              these works I enjoy. My favorite director is Makoto Shinkai. He
              tells very pretty stories.
            </p>
          </div>

          <div className="fancy transition-opacity duration-1000 text-blue-400 hover:underline">
            <Link href="https://www.rogerebert.com/interviews/makoto-shinkai-interview">
              Inteview with Makoto Shinkai on Suzume no Tojimari
            </Link>
          </div>

          <div className="relative w-full h-96 fancy transition-opacity duration-1000">
            <Image
              src="/suzume.png"
              alt="the movie poster"
              className="object-cover "
              fill
            ></Image>
          </div>
        </div>
        <div className="space-y-4">
          <div className=" transition-opacity duration-1000 fancy font-bold pb-4">
            <p>
              What kind of music do you listen to and who are some of your
              favorite musicians? Why do you listen to this music? Is there
              something in particular that strikes you as important in it? Be
              specific. Do you ever listen to classical music? If so, what kinds
              (orchestral, vocal, instrumental, quartets, etc.) and from what
              period?
            </p>
          </div>

          <div className="transition-opacity duration-1000 fancy">
            <p>
              The music I know the best and listen to most of the time are 80
              percent very romantic era compositions, works such as Chopin,
              Liszt, Mendelssohn, and romantic-Rachmaninov. In addition to these
              composers, my daily study/work music playlist also has a few j-pop
              titles, and that’s what I meanly listen to if I listen to music on
              my bike rides. I listen to j-pop because the very simple happy
              feelings it instills. My favorite modern-day artist is YOASOBI, a
              jpop duo.
            </p>
          </div>

          <div className="fancy transition-opacity duration-1000">
            <p>
              {" "}
              I rarely have true classical or baroque music in my regular
              playlist because they don’t really fit the theme of the romantic
              era music I have more of. (not including Beethoven sonatas), but I
              do play them.
            </p>
          </div>

          <div className="fancy transition-opacity duration-1000">
            <div>
              {" "}
              My favorite pieces for some composers and artists:
              <ul className="mt-2 ml-8">
                <li>
                  Rachmaninov - Concerto op. 30, (it’s all very beautiful and
                  grand but my favorite is the finale).
                </li>
                <li>
                  Chopin – Ballades No. 1, or No. 4, nocturne op. 27, no. 2,
                  scherzo 3
                </li>
                <li>Schubert – Impromptu op. 90, no 2</li>
                <li>
                  Mozart – sonatas k.310, k.311, k.265 “12 variations on twinkle
                  twinkle little star”
                </li>
                <li>
                  Liszt – etude transcendental no. 10 “appassionata”,
                  Liebestraums No. 2 and 3 (3 is the really famous one)
                </li>
                <li>Scriabin – Etude op. 8 no .12</li>
                <li>
                  Beethoven – op.110 hammarklavier sonata, violin and piano
                  sonata no. 14
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className=" transition-opacity duration-1000 fancy font-bold pb-4">
            <p>
              Do you like to read? Why or why not? List two of the books you
              have read over the past several months that are NOT school
              related. Why did you choose to read them? Did someone recommend
              them to you? What other things do you read (magazines, newspapers,
              etc.)? Do you read the newspaper regularly, either on-line or the
              paper variety? Which ones?
            </p>
          </div>

          <div className="transition-opacity duration-1000 fancy">
            <p>
              I like to read, but I can never find things that I like to read.
              I’d hate to admit, but the last time I read for something not
              school related was a little less than two years ago, and I haven’t
              since found I book that I wanted to read. Uncle Tungsten by Oliver
              Sacks was a delightful memoir that detailed the experienced of a
              boy who was fascinated with the elements. 10/10.
            </p>
          </div>

          <div className="fancy transition-opacity duration-1000">
            <p>
              {" "}
              It totally doesn’t count, but I am also working on the official
              Chinese translation novel of Your Name, originally a movie by
              Makoto Shinkai. Even with my HSK 6 and 5 on the AP Chinese, this
              supposed middle school reading level book for Chinese students is
              still quite tedious to read, and I only get through a single digit
              number of pages an hour.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className=" transition-opacity duration-1000 fancy font-bold pb-4">
            <p>
              Writing is a vitally important part of this course. How would you
              characterize your writing ability? What are the strengths and
              weaknesses of your writing? Once you are given a writing
              assignment, what process do you go through as you complete the
              assignment?
            </p>
          </div>

          <div className="transition-opacity duration-1000 fancy">
            <p>
              I often create huge monstrous sentences, unholy amalgamations of
              run on sentences and clauses pulled straight from the depths of
              literary hell, which is not good and something I actively look to
              improve on, by looking over and splitting up sentences most of the
              time, but sometimes I feel like a super long sentence is
              unavoidable.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className=" transition-opacity duration-1000 fancy font-bold pb-4">
            <p>
              Have you ever written an autobiographical essay or any kind? Do
              you keep a journal or diary? If so, how long have you been doing
              this?
            </p>
          </div>

          <div className="transition-opacity duration-1000 fancy">
            <p>
              No, I have no written an autobiographical essay, but I am
              currently working on my personal website, https://homescree.net
              (unfinished)/ https://matthewguo.com (not configured yet) , for
              which I will need to write many detail levels of expositions of
              myself as a student, a developer, a potential hire, as well as my
              humanness. I literally have no idea how I’ll accomplish it, and
              it’s a task that makes developing the entire technical part of the
              website seem like child’s play.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className=" transition-opacity duration-1000 fancy font-bold pb-4">
            <p>
              Do you have any expertise, experience, or interest in artwork
              (that includes painting, photography, sculpture, and any other art
              form you might think of)? Describe what this experience is.
            </p>
          </div>

          <div className="transition-opacity duration-1000 fancy">
            <p>
              I play piano for competitions, and actually because I want to
              play. I spend around two hours a day on practice, and I can play
              RCM performance diploma level pieces such as Chopin’s Ballade No.
              1and his most virtuosic etude op. 25 no 11.
            </p>
          </div>

          <div className="transition-opacity duration-1000 fancy">
            <p>
              Recently, I have been working on a highly technically demanding
              arrangement of the soundtrack of Suzume no Tojimari, and hope to
              perform it in the school’s talent show. Practice is usually no
              fun, between the frustration of not being able to ever play
              leggerissimo and repetitive technical exercises, I hate practice.
              But I continue doing so because I pursue the stage, I want to
              reach peoples’ hearts and be remembered for how I made them feel.
            </p>
          </div>
          <div className="fancy transition-opacity duration-1000 text-blue-400 hover:underline">
            <Link href="https://www.youtube.com/watch?v=rTGlK5XB3Ko&vl=en-US">
              Suzume original arrangement video
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
