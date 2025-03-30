import Image from "next/image";
import Background from "@/components/components/background";
import { Header } from "@/components/components/header";

export default function Paintings() {
  return (
    <Background>
      <Header />
      <h2 className="text-3xl md:text-6xl font-semibold text-center text-white mb-6 tracking-wide">
        PAINTINGS
      </h2>
      <main className="flex flex-col gap-8 items-center px-4 py-8 md:px-8 text-white">
        <div className="flex justify-center items-center w-full">
          <Image
            className="w-full max-w-4xl h-auto"
            src="/pagiyak.png"
            alt="Next.js logo"
            width={900}
            height={400}
            priority
          />
        </div>
        <div className="text-center mx-auto max-w-4xl p-6">
          <p className="text-3xl md:text-6xl font-semibold text-center mb-6 tracking-wide">
            Sa Pag-iyak at Pagtanggap
          </p>
          <p className="text-lg md:text-xl mb-6">
            5 x 8 ft Oil on Canvas, 2019 God Bless Our Home: First Solo
            Exhibition Eskinita Art Farm Tanauan Batangas Philippines 2020
            November 15 to December 20, 2020
          </p>
          <p className="text-lg md:text-xl mb-6">
            Christian Billy E. Bagtas promotes art beyond words, himself, and
            societal stigmas. He listens to the ways people want to change the
            world and transcribes them into art that expresses their agony and
            joy in existence.
          </p>
          <p className="text-lg md:text-xl">
            Billy began his artistic pursuit in 2013 at Eulogio &quot;Amang&quot;
            Rodriguez Institute of Science and Technology - Manila, where he
            studied Fine Arts. Painting became his solace, allowing him to
            express his thoughts and sentiments. Competitions helped him come
            of age and shape his artistic idealism. A watershed event came in
            2017 when he met Sir Eski from Eskinita Art Gallery, who became his
            mentor and helped him win the Discovery Award. After college, Billy
            became a full-time painter and entered the Linangan Art Residency,
            where Sir Manny Garibay influenced his work substantially. Billy&apos;s
            art melds direction, competence, and narratives, reflecting his
            passion and optimism. His developing canvases urge people to follow
            him on his vivid artistic journey, marking him as a noteworthy
            creative in the art community.
          </p>
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center p-4 text-white"></footer>
    </Background>
  );
}