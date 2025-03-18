import Image from "next/image";
import { Header } from "../components/components/header";
import { AppleCardsCarouselDemo } from "@/components/components/applecardcaraousel";
import Background from "@/components/components/background";

export default function Home() {
  return (
    <Background>
      <Header />
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
        <div className="text-white text-center mx-auto max-w-2xl p-6">
          <p className="text-lg md:text-xl">
            Today's issue (June 13, 2022) at Manila Bulletin Lifestyle: "Kasal sa Diyos" Solo Exhibition at Pinto Art Museum.
            Another review for my solo exhibit! Big thanks to Sir Pinggot Zulueta and John Legaspi for this opportunity.
            This marks my third year being featured in a newspaper: 2020 at Eskinita Art Farm, 2021 at Secret Fresh, and
            this year for my solo exhibit at Pinto.
          </p>
        </div>
        <div className="w-full">
          <AppleCardsCarouselDemo />
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center p-4 text-white">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </Background>
  );
}

