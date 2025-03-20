import Image from "next/image";
import Background from "@/components/components/background";
import { Header } from "@/components/components/header";

export default function Aboutme() {
  return (
    
    <Background>
      <Header/>
      <main className="flex flex-col gap-8 items-center px-4 py-8 md:px-8">
        <div className="flex justify-center items-center w-full">
          <Image
            className="dark:invert w-full max-w-4xl h-auto"
            src="/billy1.png"
            alt="Next.js logo"
            width={900}
            height={400}
            priority
          />
        </div>
        <div className="text-white text-center mx-auto max-w-4xl p-6">
        <p className="text-3xl text-white md:text-6xl font-semibold text-center text-gray-800 mb-6 tracking-wide">
  Christian Billy E. Bagtas
</p>     
  <p className="text-lg md:text-xl mb-6">
    Brushing boundaries introduced Billy Bagtas to visual art at a young age. Tremendous potential and passion arose in the humble barrio of Caloocan, historically significant as the heart of the militant society that sparked the Philippine Revolution during the Spanish occupation of the Philippines. Art continues to evolve for and by our society, coexisting in a culture where it should serve the public and convey their hardships, anguish, grief, and faith.
  </p>
  <p className="text-lg md:text-xl mb-6">
    Christian Billy E. Bagtas promotes art beyond words, himself, and societal stigmas. He listens to the ways people want to change the world and transcribes them into art that expresses their agony and joy in existence.
  </p>
  <p className="text-lg md:text-xl"> 
    Billy began his artistic pursuit in 2013 at Eulogio &quot;Amang&quot; Rodriguez Institute of Science and Technology - Manila, where he studied Fine Arts. Painting became his solace, allowing him to express his thoughts and sentiments. Competitions helped him come of age and shape his artistic idealism. A watershed event came in 2017 when he met Sir Eski from Eskinita Art Gallery, who became his mentor and helped him win the Discovery Award. After college, Billy became a full-time painter and entered the Linangan Art Residency, where Sir Manny Garibay influenced his work substantially. Billy&apos;s art melds direction, competence, and narratives, reflecting his passion and optimism. His developing canvases urge people to follow him on his vivid artistic journey, marking him as a noteworthy creative in the art community.
  </p>
</div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center p-4 text-white">
  
      </footer>
    </Background>
  );
}