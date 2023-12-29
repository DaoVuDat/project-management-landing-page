import { Varela } from "next/font/google";
import { Container } from "@/app/components/Container";
import { Header } from "@/app/components/Header";
import Image from "next/image";
import clsx from "clsx";
import { varela } from "@/app/font";

function Dot() {
  return <span className={varela.className}>.</span>;
}

function HeroImageCover({
  src,
  alt,
  highlight = false,
  className,
}: {
  src: string;
  alt: string;
  highlight?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "group/inner inline-block h-himg duration-500 transition-all border border-transparent " +
          "ease-in-out rounded-3xl overflow-hidden relative",

        {
          "w-2/3 peer-hover:w-1/6": highlight,
          "w-1/6 hover:w-2/3 peer not-highlight": !highlight,
        },
        className,
        "after:block after:rounded-3xl after:bg-gradient-to-t " +
          "after:from-slate-900 after:w-full after:h-full after:absolute after:top-0 after:left-0 " +
          "after:z-10",
      )}
    >
      {!highlight && (
        <div
          className={clsx(
            "absolute bottom-24 text-4xl opacity-100 left-12 " +
              "transform -translate-x-1/2 text-white z-20 " +
              "group-hover/inner:animate-fadeOut animate-fadeIn -rotate-90",
          )}
        >
          Vertical
        </div>
      )}
      <div
        className={clsx(
          "absolute bottom-10 left-0 text-4xl w-full text-center group-hover:transition-all " +
            "group-hover:duration-500 text-white z-20 ",
          {
            "opacity-100 peer-hover:group-[]/inner:opacity-0": highlight,
            "opacity-0 group-hover/inner:opacity-100": !highlight,
          },
        )}
      >
        Horizontal
      </div>

      <Image
        src={src}
        alt={alt}
        width={600}
        height={600}
        className={clsx("w-full h-full object-cover object-center")}
      />
    </div>
  );
}

function Hero() {
  return (
    <Container>
      <div className="flex ">
        <div className="lg:w-1/3">
          <h1 className="lg:text-7xl">
            Watch
            <Dot />
            <br />
            Learn
            <Dot />
            <br />
            Grow
            <Dot />
          </h1>
        </div>
        {/*576*/}
        <div className="group w-2/3 h-himg flex justify-between gap-x-4">
          <HeroImageCover src="/images/hero2.jpg" alt="Hero Image 2" />
          <HeroImageCover src="/images/hero3.jpg" alt="Hero Image 3" />
          <HeroImageCover
            src="/images/hero1.jpg"
            alt="Hero Image 1"
            highlight={true}
            className="order-first"
          />
        </div>
      </div>
    </Container>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <footer>footer</footer>
    </>
  );
}
