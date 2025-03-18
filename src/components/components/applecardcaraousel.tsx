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

// Flexible content component for multiple stories and images
const CardContent = ({ stories }: { stories: Array<{ text: string; image?: string }> }) => {
  return (
    <>
      {stories.map((story, index) => (
        <div
          key={`story-${index}`}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            {story.text}
          </p>
          {story.image && (
            <Image
              src={story.image}
              alt={`Story ${index + 1}`}
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4"
            />
          )}
        </div>
      ))}
    </>
  );
};

const data = [
  {
    category: "ESKINITAS ART GALLERY",
    title: "TUKLAS",
    src: "/tuklas.png",
    content: (
      <CardContent
        stories={[
          {
            text: "The first rule of Apple club is that you boast about Apple club. Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem. Langotiya jeetu ka mara hua yaar is ready to capture every thought.",
            image: "https://assets.aceternity.com/macbook.png",
          },
          {
            text: "The fullness of eternal life. The tree of life represents the fullness of eternal life that God wishes to lavish on humanity. It&apos;s one of the most powerful images in God&apos;s Word, extending from the first chapters of Genesis to the final ones of Revelation.",
            image: "/life.png",
          },
        ]}
      />
    ),
  },
  {
    category: "ESKINITAS ART GALLERY",
    title: "REVELATION",
    src: "/revelation.png",
    content: (
      <CardContent
        stories={[
          {
            text: "Revelation is a series of artworks that explore the divine mysteries of the universe. Each piece is a journey into the unknown.",
            image: "/revelation1.png",
          },
          {
            text: "The second story for Revelation delves into the symbolism of light and darkness in spiritual awakening.",
            image: "/revelation2.png",
          },
        ]}
      />
    ),
  },
  {
    category: "ARTINFORMAL",
    title: "IKALAWANG DATING",
    src: "/ikalawangdating.png",
    content: (
      <CardContent
        stories={[
          {
            text: "Ikalawang Dating is a collection of works that reflect on the concept of second chances and renewal.",
            image: "/ikalawangdating1.png",
          },
          {
            text: "This piece explores the emotional depth of forgiveness and redemption.",
            image: "/ikalawangdating2.png",
          },
        ]}
      />
    ),
  },
  {
    category: "SECRETFRESH GALLERY",
    title: "HOLY GOD, HOLY STRONG, HOLY IMMORTAL",
    src: "/holy.png",
    content: (
      <CardContent
        stories={[
          {
            text: "This series celebrates the divine attributes of God, focusing on His holiness, strength, and immortality.",
            image: "/holy1.png",
          },
          {
            text: "The second story reflects on the eternal nature of God and His presence in our lives.",
            image: "/holy2.png",
          },
        ]}
      />
    ),
  },
  {
    category: "Art Fair Philippines",
    title: "BOMBA BASTOS BAROK",
    src: "/bastos.png",
    content: (
      <CardContent
        stories={[
          {
            text: "Bomba Bastos Barok is a bold exploration of societal norms and taboos through art.",
            image: "/bastos1.png",
          },
          {
            text: "This piece challenges the viewer to question their perceptions of morality and decency.",
            image: "/bastos2.png",
          },
        ]}
      />
    ),
  },
  {
    category: "Pinto Art Museum",
    title: "KASAL SA DIYOS",
    src: "/kasal.png",
    content: (
      <CardContent
        stories={[
          {
            text: "Kasal sa Diyos is a celebration of divine love and the sacred bond between humanity and the divine.",
            image: "/kasal1.png",
          },
          {
            text: "This piece reflects on the spiritual significance of marriage and commitment.",
            image: "/kasal2.png",
          },
        ]}
      />
    ),
  },
  {
    category: "Artinformal",
    title: "A GLIMPSE OF NIGHT AND HARMONY",
    src: "/harmony.png",
    content: (
      <CardContent
        stories={[
          {
            text: "A Glimpse of Night and Harmony explores the balance between light and darkness in our lives.",
            image: "/harmony1.png",
          },
          {
            text: "This piece reflects on the beauty of finding harmony in chaos.",
            image: "/harmony2.png",
          },
        ]}
      />
    ),
  },
  {
    category: "Art Cube",
    title: "LOVE IS THE ONLY WAY",
    src: "/love.png",
    content: (
      <CardContent
        stories={[
          {
            text: "Love is the Only Way is a series of works that celebrate the transformative power of love.",
            image: "/love1.png",
          },
          {
            text: "This piece reflects on the universal nature of love and its ability to heal and unite.",
            image: "/love2.png",
          },
        ]}
      />
    ),
  },
  {
    category: "Art Studio",
    title: "ANOTHER DAY TO LIVE",
    src: "/live.png",
    content: (
      <CardContent
        stories={[
          {
            text: "Another Day to Live is a reflection on the resilience of the human spirit and the gift of life.",
            image: "/life.png",
          },
          {
            text: "This piece explores the beauty of everyday moments and the joy of living.",
            image: "/live2.png",
          },
        ]}
      />
    ),
  },
  {
    category: "The Grey Space",
    title: "HEAVEN'S KISS",
    src: "/kiss.png",
    content: (
      <CardContent
        stories={[
          {
            text: "Heaven&apos;s Kiss by Billy Bagtas Introducing Billy Bagtas: A Visionary Brushing the Boundaries of Art Diving into the intricate realm of visual artistry at a young age, Billy Bagtas, a 29-year-old luminary, has illuminated the artistic sphere with his remarkable talent and fervor. With nearly seven years of dedicated practice as a Visual Artist, Billy&apos;s journey is a testament to the transformative power of passion and perseverance. Billy&apos;s odyssey began in 2013 when he embarked on his artistic expedition at Earist Manila, where he delved into the world of Fine Arts. Painting swiftly became his solace and canvas his sanctuary, as he poured his thoughts, emotions, and creativity onto the blank expanse. In this journey, painting competitions emerged as not just challenges, but as stepping stones that bolstered his growth. These competitions not only honed his craft but also germinated the very concepts that continue to resonate in his artistry to this day. One of the pivotal junctures in Billy&apos;s artistic pilgrimage was the fortuitous encounter with the esteemed Sir Eski from Eskinita Art Gallery in 2017. This encounter marked the genesis of a mentorship that would significantly shape his trajectory. Guided by Sir Eski&apos;s seasoned insights, Billy&apos;s artistic horizons expanded, and his comprehension of art&apos;s nuances deepened. This collaboration culminated in a Discovery Award, a testament to Billy&apos;s blossoming ingenuity. Transitioning into a full-time painter after graduating was a momentous decision that propelled Billy&apos;s career to new pinnacles. His immersion in art became all-encompassing, leading him to cross paths with the venerable Sir Manny Garibay of Linangan Art Residency. Under Sir Manny&apos;s mentorship, Billy&apos;s evolution as an artist took a resolute course, his work becoming a mesmerizing interplay of inspiration, technique, and storytelling. Billy Bagtas&apos; artistic expedition is far from over, as he continues to draw inspiration from the ever-evolving tapestry of life. His canvases, now imbued with profound narratives and aesthetic finesse, are a testament to his unwavering commitment to the craft. With each brush stroke, Billy paints not just images but emotions, experiences, and his very essence, inviting us to partake in the vibrant mosaic of his artistic odyssey. As he strides forward, guided by mentors and driven by passion, Billy Bagtas is an artist to watch, a visionary brushing the boundaries of art.",
          },
          {
            text: "The fullness of eternal life. The tree of life represents the fullness of eternal life that God wishes to lavish on humanity. It&apos;s one of the most powerful images in God&apos;s Word, extending from the first chapters of Genesis to the final ones of Revelation.",
            image: "/life.png",
          },
          {
            text: "Prayer is communication with God. We do this by praising Him, confessing our sin before Him, thanking Him and asking Him for our needs and desires. Prayer is communion with our Creator. When we pray, we engage in loving fellowship with the Maker of heaven and earth.",
            image: "/prayer.png",
          },
          {
            text: "The Sword of the Spirit, which is the word of God, allow us defend ourselves in close combat with the devil by qouting the scripture. The Shield of faith means applying God&apos;s word through faith and seeing beyond worldly troubles.",
            image: "/sword.png",
          },
        ]}
      />
    ),
  },
  {
    category: "WestGallery",
    title: "NIGHTMARE OBSESSION",
    src: "/nightmare.png",
    content: (
      <CardContent
        stories={[
          {
            text: "Nightmare Obsession is a series of works that delve into the darker aspects of the human psyche.",
            image: "/nightmare1.png",
          },
          {
            text: "This piece explores the fine line between obsession and destruction.",
            image: "/nightmare2.png",
          },
        ]}
      />
    ),
  },
];