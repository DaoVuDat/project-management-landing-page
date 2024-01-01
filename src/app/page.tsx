import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Container } from "@/app/components/Container";
import clsx from "clsx";
import { lato } from "@/app/font";
import { Dot } from "@/app/components/Dot";
import { Projects } from "@/app/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects id="projects" />
      </main>
      <footer>footer</footer>
    </>
  );
}
