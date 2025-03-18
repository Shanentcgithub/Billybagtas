"use client";
import Image from "next/image";
import React from "react";
import { Card, Carousel } from "../ui/applecardcarousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="text-white max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold font-sans">
        PROJECTS AND EXHIBIT
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const Heavenskiss = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The fullness of eternal life. The tree of life represents the fullness of eternal life that God wishes to lavish on humanity. It&apos;s one of the most powerful images in God&apos;s Word, extending from the first chapters of Genesis to the final ones of Revelation.
              </span>{" "}
            </p>
            <Image
              src="/life.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "ESKINITAS ART GALLERY",
    title: "TUKLAS",
    src: "/tuklas.png",
    content: <DummyContent />,
  },
  {
    category: "ESKINITAS ART GALLERY",
    title: "REVELATION",
    src: "/revelation.png",
    content: <DummyContent />,
  },
  {
    category: "ARTINFORMAL",
    title: "IKALAWANG DATING",
    src: "/ikalawangdating.png",
    content: <DummyContent />,
  },

  {
    category: "SECRETFRESH GALLERY",
    title: "HOLY GOD, HOLY STRONG, HOLY IMMORTAL",
    src: "/holy.png",
    content: <DummyContent />,
  },
  {
    category: "Art Fair Philippines",
    title: "BOMBA BASTOS BAROK",
    src: "/bastos.png",
    content: <DummyContent />,
  },
  {
    category: "Pinto Art Museum",
    title: "KASAL SA DIYOS",
    src: "/kasal.png",
    content: <DummyContent />,
  },

  {
    category: "Artinformal",
    title: "A GLIMPSE OF NIGHT AND HARMONY",
    src: "/harmony.png",
    content: <DummyContent />,
  },

  {
    category: "Art Cube",
    title: "LOVE IS THE ONLY WAY",
    src: "/love.png",
    content: <DummyContent />,
  },

  {
    category: "Art Studio",
    title: "ANOTHER DAY TO LIVE",
    src: "/live.png",
    content: <DummyContent />,
  },

  {
    category: "The Grey Space",
    title: "HEAVEN'S KISS",
    src: "/kiss.png",
    content: <Heavenskiss />,
  },

  {
    category: "WestGallery",
    title: "NIGHTMARE OBSESSION",
    src: "/nightmare.png",
    content: <DummyContent />,
  },
];
