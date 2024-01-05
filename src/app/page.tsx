import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/shared/Hero";
import { Projects } from "@/components/projects/Projects";
import { Features } from "@/components/features/Features";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects id="projects" className="mt-24" />
        <Features id="features" className="mt-24" />
      </main>
      <Footer className="mt-24" />
    </>
  );
}
