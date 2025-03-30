import Image from "next/image";
import { Header } from "@/components/components/header";
import { AppleCardsCarouselDemo } from "@/components/components/applecardcaraousel";
import Background from "@/components/components/background";

export default function Exhibition() {
  return (
    <Background>
      <Header />
      <main className="flex flex-col gap-8 items-center px-4 py-8 md:px-8">
        <div className="w-full">
          <AppleCardsCarouselDemo />
        </div>
        <div className="text-white text-center mx-auto max-w-4xl p-6">
        <p className="text-3xl text-white md:text-6xl font-semibold text-center text-gray-800 mb-6 tracking-wide">
  Billy Bagtas
</p>     
  <p className="text-lg md:text-xl mb-6">
  On the onset, and in its cracked darkness, Bagtas’ works express a pitiful situation of depravity, corruption, vileness, and hate. Bagtas, however, does more than that. He delves onto the mystery that transcends the physicality – the sacred in this world of profanity. His works display a point of nuisance where darkness and religion are associated and confounded. Every stroke that alights on his canvas reveals an overwhelming feeling of conflict, and a sensation within. But with every step of his struggle lies a seed of hope, and a seed of growth. His personal demons were evoked, but in this realization he elicits religious humility – a submergence and submission to the dark that has made him aware of the light. 
  </p>
</div>
        <div className="flex flex-wrap gap-8 items-center justify-center">

          {[
            { src: "/tuklasb1.jpg", alt: "Picture 1", },
            { src: "/tuklasb2.jpg", alt: "Picture 2", },
            { src: "/tuklasb3.jpg", alt: "Picture 3", },
            { src: "/tuklasb4.jpg", alt: "Picture 4", },
            { src: "/tuklasb5.jpg", alt: "Picture 5", },
            { src: "/tuklasb6.jpg", alt: "Picture 6", },
            { src: "/tuklasb7.jpg", alt: "Picture 1", },
            { src: "/tuklasb8.jpg", alt: "Picture 2",},
            { src: "/tuklasb9.jpg", alt: "Picture 3",},
            { src: "/tuklasb10.jpg", alt: "Picture 4",},
            { src: "/tuklasb11.jpg", alt: "Picture 5",},
            { src: "/tuklasb12.jpg", alt: "Picture 6",},
            { src: "/tuklasb13.jpg", alt: "Picture 1",},
            { src: "/tuklasb14.jpg", alt: "Picture 2",},
            { src: "/tuklasb15.jpg", alt: "Picture 3",},
            { src: "/tuklasb16.jpg", alt: "Picture 4",},
            { src: "/tuklasb17.jpg", alt: "Picture 5",},
            { src: "/tuklasb18.jpg", alt: "Picture 6",},
            { src: "/tuklasb19.jpg", alt: "Picture 5",},
            { src: "/tuklasb20.jpg", alt: "Picture 6",},
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.src}
                alt={item.alt}
                width={200}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center p-4 text-white">
        {/* Footer content */}
      </footer>
    </Background>
  );
}