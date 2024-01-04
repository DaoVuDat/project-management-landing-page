import { Header } from "@/app/_components/Header";
import { Hero } from "@/app/_components/Hero";
import { Projects } from "@/app/(projects)/Projects";

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
