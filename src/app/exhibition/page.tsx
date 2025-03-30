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
        <div className="flex flex-wrap gap-8 items-center justify-center">

          {[
            { src: "/images/pic1.jpg", alt: "Picture 1", description: "Description for Picture 1" },
            { src: "/images/pic2.jpg", alt: "Picture 2", description: "Description for Picture 2" },
            { src: "/images/pic3.jpg", alt: "Picture 3", description: "Description for Picture 3" },
            { src: "/images/pic4.jpg", alt: "Picture 4", description: "Description for Picture 4" },
            { src: "/images/pic5.jpg", alt: "Picture 5", description: "Description for Picture 5" },
            { src: "/images/pic6.jpg", alt: "Picture 6", description: "Description for Picture 6" },
            { src: "/images/pic7.jpg", alt: "Picture 7", description: "Description for Picture 7" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.src}
                alt={item.alt}
                width={200}
                height={200}
                className="rounded-lg shadow-lg"
              />
              <p className="mt-2 text-center text-sm text-gray-700">{item.description}</p>
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