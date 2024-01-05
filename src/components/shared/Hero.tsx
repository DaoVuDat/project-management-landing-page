import { lato } from "@/app/font";
import clsx from "clsx";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { Dot } from "@/components/shared/Dot";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import hero1 from "@/app/assets/images/hero1.webp";
import hero2 from "@/app/assets/images/hero2.webp";
import hero3 from "@/app/assets/images/hero3.webp";

function HeroImageCover({
  src,
  alt,
  highlight = false,
  className,
  horizontalText,
  verticalText,
}: {
  verticalText?: React.ReactNode;
  horizontalText?: React.ReactNode;
  src: string | StaticImport;
  alt: string;
  highlight?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "group/inner inline-block h-himg duration-700 transition-all border border-transparent " +
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
            "absolute bottom-10 text-3xl opacity-100 left-16 orient " +
              "transform -translate-x-1/2 text-white z-20 " +
              "group-hover/inner:animate-fadeOut animate-fadeIn rotate-180",
          )}
        >
          {verticalText}
        </div>
      )}
      <div
        className={clsx(
          "absolute bottom-10 left-0 text-3xl  transition-all " +
            "duration-500 text-white z-20 ",
          {
            "w-full opacity-100 peer-hover:group-[]/inner:opacity-0 text-center":
              highlight,
            "w-96 opacity-0 group-hover/inner:opacity-100 left-10": !highlight,
          },
        )}
      >
        {horizontalText}
      </div>

      <Image
        src={src}
        alt={alt}
        className={clsx("w-full h-full object-cover object-center")}
      />
    </div>
  );
}

export function Hero() {
  return (
    <Container>
      <div className="relative flex">
        <div className="bottom-16 left-0 lg:absolute lg:w-2/5 lg:h-32 bg-white z-30 relative lg:flex ">
          <div
            className="transition duration-300 flex-1 border-t-2 border-l-2 border-b-2 border-transparent
          has-[:focus]:border-secondary has-[:focus]:shadow-2xl"
          >
            <input
              type="text"
              placeholder="Get Started: Enter Your Email"
              className="outline-none w-full h-full px-8 py-4 text-lg
              placeholder:text-black focus:placeholder:text-slate-400"
            />
          </div>
          <button
            className="group block relative transition-all duration-300 lg:h-32 lg:w-32 bg-secondary2 text-3xl
            cursor-pointer shadow-[inset_0_150px_0_0_#FD841F]
          font-semibold hover:shadow-[inset_0_150px_0_-150px_#FD841F]"
          >
            Go
          </button>
        </div>
        <div className="lg:w-1/3">
          <h1
            className={clsx(
              "pt-16 lg:text-7xl lg:tracking-wide lg:leading-[1.2]",
              lato.className,
            )}
          >
            Optimize
            <Dot />
            <br />
            Track
            <Dot />
            <br />
            Succeed
            <Dot />
          </h1>
        </div>
        <div className="group w-2/3 h-himg flex justify-between gap-x-4">
          <HeroImageCover
            horizontalText={
              <>
                Strategic Ingenuity <br /> in Action
              </>
            }
            verticalText={"Solving"}
            src={hero2}
            alt="Hero Image 2"
          />
          <HeroImageCover
            horizontalText={
              <>
                Precision in
                <br />
                Every Project
              </>
            }
            verticalText={"Solution"}
            src={hero3}
            alt="Hero Image 3"
          />
          <HeroImageCover
            src={hero1}
            alt="Hero Image 1"
            highlight={true}
            horizontalText={
              <>
                Problem
                <br />
                Definition
              </>
            }
            className="order-first"
          />
        </div>
      </div>
    </Container>
  );
}